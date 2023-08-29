import { SlashCommandBuilder } from "discord.js";
import { REMOVE_HELPER_COMMAND } from "../../constants/commands";

export default new SlashCommandBuilder()
  .setName(REMOVE_HELPER_COMMAND)
  .setDescription("Unassign yourself from a helper role");
