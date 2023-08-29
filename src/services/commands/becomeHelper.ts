import { SlashCommandBuilder } from "discord.js";
import { BECOME_SLAVE_COMMAND as BECOME_HELPER_COMMAND } from "../../constants/commands";

export default new SlashCommandBuilder()
  .setName(BECOME_HELPER_COMMAND)
  .setDescription("Become a helper in a subject");
