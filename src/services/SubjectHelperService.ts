import { ColorResolvable, Guild } from "discord.js";
import client from "../server";

const CATEGORY_CHANNEL_NAME = "Fag Rescue";
const CATEGORY_CHANNEL_TYPE = 4;
const FORUM_CHANNEL_TYPE = 15;

/**
 * Handles creating subjects with roles and channels for helping others
 */
export default class SubjectHelperService {
  private guild: Guild;

  constructor(guildId: string) {
    this.guild = client.guilds.cache.get(guildId);
  }

  /**
   * Creates a new helper subject
   * This creates a channel for the subjects, and a role for helpers
   * @param subjectName The name of the subject, ex. "Math"
   */
  public async handleCreateSubject(
    subjectName: string,
    color: ColorResolvable
  ): Promise<boolean> {
    // Make sure the subject does not exist
    if (!this.verifySubjectUniqueness(subjectName)) {
      return false;
    }

    // Create a channel within the channel category
    await this.createSubjectForum(subjectName);

    // Create a role for helpers of this subject
    await this.createSubjectRole(subjectName, color);

    return true;
  }

  /**
   * Returns the category channel where all helper subject channels should be within
   * @returns The id of the category
   */
  private async getCategoryId() {
    // Find the category channel for Fag Rescue
    const category = this.guild.channels.cache.find(
      (c) =>
        c.type === CATEGORY_CHANNEL_TYPE && c.name === CATEGORY_CHANNEL_NAME
    );

    // If it does not exist, create it
    if (!category) {
      const newCategory = await this.guild.channels.create({
        name: CATEGORY_CHANNEL_NAME,
        type: CATEGORY_CHANNEL_TYPE,
      });
      return newCategory.id;
    } else {
      return category.id;
    }
  }

  /**
   * Creates a forum channel for a given subject name
   */
  private async createSubjectForum(subjectName: string) {
    const categoryId = await this.getCategoryId();
    return this.guild.channels.create({
      name: subjectName,
      parent: categoryId,
      type: FORUM_CHANNEL_TYPE,
    });
  }

  /**
   * Creates a user helper role for a subject
   */
  private async createSubjectRole(subjectName: string, color: ColorResolvable) {
    return this.guild.roles.create({
      name: `${subjectName.toLowerCase()}-helper`, // Replace with the desired role name
      color: color, // Replace with the desired color (optional)
    });
  }

  /**
   *
   * @param subjectName The name of the subject
   * @returns True if it does not exist, else false
   */
  private async verifySubjectUniqueness(subjectName: string) {
    // Query all subjects (query channels within the helper category)
    const categoryId = await this.getCategoryId();

    // Find all channels within the category
    const channels = this.guild.channels.cache.filter(
      (c) => c.parentId === categoryId
    ).values;
    return !channels.length;
  }
}
