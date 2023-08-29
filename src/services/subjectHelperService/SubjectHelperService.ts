import {
  CacheType,
  ChatInputCommandInteraction,
  ColorResolvable,
  Guild,
} from "discord.js";

import * as yup from "yup";
import {
  CATEGORY_CHANNEL_NAME,
  CATEGORY_CHANNEL_TYPE,
  FORUM_CHANNEL_TYPE,
} from "../../constants/channels";
import helperSchema from "./helperSchema";

/**
 * Handles creating subjects with roles and channels for helping others
 */
export default class SubjectHelperService {
  private guild: Guild;
  private interaction: ChatInputCommandInteraction<CacheType>;
  private categoryChannelId: string;

  constructor(interaction: ChatInputCommandInteraction<CacheType>) {
    this.interaction = interaction;
    this.guild = interaction.guild;
  }

  /**
   * Allows a user to select which helper roles they want
   */
  public async handleBecomeSlave() {
    /*     const modal = new ModalBuilder()
      .setCustomId("slave_modal")
      .setTitle("Select subject(s)");

    // Create confirmation and cancel buttons
    const confirmButton = new ButtonBuilder()
      .setCustomId("confirmButton")
      .setLabel("Confirm")
      .setStyle(1);

    // Reply with the modal content
    await this.interaction.reply({
      content: "Please select an option:",
      components: [confirmButton],
    }); */
  }

  /**
   * Creates a new helper subject
   * This creates a channel for the subjects, and a role for helpers
   * If the function returns false, the action was not completed successfully
   * @param subjectName The name of the subject, ex. "Math"
   */
  public async handleCreateSubject() {
    const { color, emoji, name } = await this.getOptions();

    // Make sure the subject does not exist
    if (!(await this.isSubjectNameUnique(name))) {
      this.interaction.reply({
        content: "Subject already exists!",
        ephemeral: true,
      });
      throw new Error("Subject already exists!");
    }

    // Create a channel within the channel category
    const forum = await this.createSubjectForum(name, emoji);

    // Create a role for helpers of this subject
    const role = await this.createSubjectRole(name, color as ColorResolvable);

    await this.interaction.reply({
      content: `Subject ${forum.url} and role **${role.name}** created!`,
    });
  }

  /**
   * Returns the category channel where all helper subject channels should be within
   * @returns The id of the category
   */
  private async getCategoryId() {
    if (this.categoryChannelId) return this.categoryChannelId;

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
      this.categoryChannelId = newCategory.id;
      return newCategory.id;
    } else {
      this.categoryChannelId = category.id;
      return category.id;
    }
  }

  /**
   * Creates a forum channel for a given subject name
   */
  private async createSubjectForum(subjectName: string, emoji: string) {
    const categoryId = await this.getCategoryId();
    return this.guild.channels.create({
      name: `${emoji}-${subjectName}`,
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
  private async isSubjectNameUnique(subjectName: string) {
    // Query all subjects (query channels within the helper category)
    const categoryId = await this.getCategoryId();

    // Find all channels within the category
    const channels = this.guild.channels.cache.filter(
      (c) =>
        c.parentId === categoryId && c.name.includes(subjectName.toLowerCase())
    ).values;
    return !channels.length;
  }

  private async getOptions(): Promise<yup.InferType<typeof helperSchema>> {
    const options = this.interaction.options.data;

    // Convert interaction options to an object
    const optionsObject = {};
    for (const option of options) {
      optionsObject[option.name] = option.value;
    }

    // Validate using yup
    try {
      const cleanedSchema = await helperSchema.validate(optionsObject);
      return cleanedSchema;
    } catch (error) {
      await this.interaction.reply({
        content: "Error: " + error.message,
        ephemeral: true,
      });
      throw error;
    }
  }
}