import { SlashCommandBuilder } from "discord.js";
import { ADD_HELPER_SUBJECT_COMMAND } from "../../constants/commands";

export default new SlashCommandBuilder()
  .setName(ADD_HELPER_SUBJECT_COMMAND)
  .setDescription("Adds a new subject that people can help each other in")
  .addStringOption((option) =>
    option
      .setName("name")
      .setDescription("The name of the subject")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("color")
      .setDescription("The color of the subject in HEX format ex. #A0CD3F")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("emoji")
      .setDescription("A descriptive emoji for the subject")
      .setRequired(true)
  );
