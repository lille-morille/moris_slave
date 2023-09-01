import { Prisma, PrismaClient, User } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { APIUser, User as DiscordUser } from "discord.js";

export type UserType = DiscordUser | APIUser;

class DatabaseService {
  private prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * Adds slave points to a given user
   * @param user The discord user to edit
   * @param slavePoints The score to add (or remove if negative)
   * @returns The new total slave points
   */
  public async addUserSlavePoints(
    user: UserType,
    slavePoints: number
  ): Promise<number> {
    // Check if the user exists
    const newUser = await this.updateUser(user, {
      slave_points: { increment: slavePoints },
    });

    return newUser.slave_points;
  }

  /**
   * Sets the total number of slave points for a user
   * @param user The user to set slave points for
   * @param slavePoints The total number of slave points to set
   */
  public async setUserSlavePoints(
    user: UserType,
    slavePoints: number
  ): Promise<User> {
    return this.updateUser(user, { slave_points: slavePoints });
  }

  /**
   * Returns the total number of slave points for a user
   * @param user The discord user to fetch slave points for
   * @returns The total slave points for the user
   *
   * `IMPORTANT` if the user does not exist, returns 0
   */
  public async getSlavePoints(user: UserType): Promise<number> {
    try {
      const { slave_points } = await this.prisma.user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      });

      return slave_points;
    } catch (error) {
      // User not found
      return 0;
    }
  }

  /**
   * Updates a user with the given data
   * If the user does not exist, it will be created
   * @param user The user to update
   * @param data The data to set
   * @returns The new updated user
   */
  private async updateUser(
    user: UserType,
    data: Prisma.UserUpdateInput
  ): Promise<User> {
    try {
      const newUser = await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data,
      });

      return newUser;
    } catch (error) {
      let slavePoints: number = 0;

      // Get slavepoints from value or from increment value
      if (typeof data.slave_points == "number") {
        slavePoints = data.slave_points;
      } else if (data.slave_points?.increment !== 0) {
        slavePoints = data.slave_points?.increment ?? 0;
      }

      // Not found exception
      if (error.code === "P2025") {
        // Create the user
        const newUser = await this.prisma.user.create({
          data: {
            id: user.id,
            slave_points: slavePoints,
            user_name: user.username,
          },
        });

        return newUser;
      } else {
        // Something else went wrong
        throw error;
      }
    }
  }
}

export default new DatabaseService();
