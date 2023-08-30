import { SlashCommandBuilder } from "discord.js";
import { SOLVED_COMMAND } from "../../constants/commands";

export default new SlashCommandBuilder()
  .setName(SOLVED_COMMAND)
  .setDescription("Mark this thread as solved");
