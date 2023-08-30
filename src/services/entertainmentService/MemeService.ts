import { CommandInteraction } from "discord.js";

export default class MemeService {
  private interaction: CommandInteraction;

  constructor(interaction: CommandInteraction) {
    this.interaction = interaction;
  }

  public async getMeme() {
    
    this.interaction.reply({ content: "Here is a meme!", ephemeral: false });
  }
}
