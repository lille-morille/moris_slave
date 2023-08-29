import { Guild } from "discord.js";
import client from "../server";

const CATEGORY_CHANNEL_NAME = "Fag Rescue";
const CATEGORY_CHANNEL_TYPE = 4;
const FORUM_CHANNEL_TYPE = 15;

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
  public async handleCreateSubject(subjectName: string) {
    // Create a channel within the channel category
    const forum = await this.createSubjectForum(subjectName);
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
}
