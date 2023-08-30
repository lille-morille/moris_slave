import { CommandInteraction } from "discord.js";
import {ResponseBody} from "./types";

export default class MemeService {
  private interaction: CommandInteraction;

  constructor(interaction: CommandInteraction) {
    this.interaction = interaction;
  }

  public async getMeme() {

    this.interaction.deferReply();

    const response = await fetch("https://meme-api.com/gimme");

    if (response.status === 200) {
      
      const body: ResponseBody = await response.json()
      this.interaction.reply({ content: body["url"], ephemeral: false });
    }

    // this.interaction.reply({ content: "Here is a meme!", ephemeral: false });
  }
}
