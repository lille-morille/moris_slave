import { SlashCommandBuilder } from "discord.js";
import { MEME_COMMAND } from "../../constants/commands";

export default new SlashCommandBuilder()
  .setName(MEME_COMMAND)
  .setDescription("Give me the funnies")