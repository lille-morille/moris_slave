import { ChatInputCommandInteraction } from "discord.js";
import { ResponseBody } from "./types";

export default class MemeService {
  private interaction: ChatInputCommandInteraction;

  constructor(interaction: ChatInputCommandInteraction) {
    this.interaction = interaction;
  }

  public async getMeme() {
    await this.interaction.deferReply();

    const response = await fetch("https://meme-api.com/gimme");

    if (response.status === 200) {
      const body: ResponseBody = await response.json();
      await this.interaction.editReply({ content: body.url });
    } else {
      await this.interaction.editReply({
        content: "Something went wrong, try again later",
      });
    }
  }
}
