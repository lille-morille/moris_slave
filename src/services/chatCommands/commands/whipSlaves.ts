import { SlashCommandBuilder } from "discord.js";
import { WHIP_SLAVES_COMMAND } from "../../../constants/commands";

export default new SlashCommandBuilder()
  .setName(WHIP_SLAVES_COMMAND)
  .setDescription("Whip your slaves!");
