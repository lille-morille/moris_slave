import InteractionService from "../../InteractionService";
import { MemeResponseBody } from "./types";

export default class MemeService extends InteractionService {
  public async getMeme() {
    await this.interaction.deferReply();

    const response = await fetch("https://meme-api.com/gimme");

    if (response.status === 200) {
      const body: MemeResponseBody = await response.json();
      await this.interaction.editReply({ content: body.url });
    } else {
      await this.interaction.editReply({
        content: "Something went wrong, try again later",
      });
    }
  }
}
