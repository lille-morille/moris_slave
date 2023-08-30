import { ChatInputCommandInteraction } from "discord.js";

/**
 * Base class for all chat interaction/command services
 * Avoids typing interaction property and constructor in every interaction service
 */
export default abstract class InteractionService {
  protected interaction: ChatInputCommandInteraction;

  constructor(interaction: ChatInputCommandInteraction) {
    this.interaction = interaction;
  }
}
