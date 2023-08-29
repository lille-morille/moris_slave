import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

export const ADD_HELPER_SUBJECT_COMMAND = "add-helper-subject";
export const APPLY_FOR_HELPER_COMMAND = "become-slave";

const { AUTH_TOKEN, CLIENT_ID } = process.env;
const commands = [
  new SlashCommandBuilder()
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
        .setDescription("The color of the subject in HEX format")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("emoji")
        .setDescription("A cute emoji for the subject")
        .setRequired(true)
    ),
  new SlashCommandBuilder()
    .setName(APPLY_FOR_HELPER_COMMAND)
    .setDescription("Become a helper in a subject"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(AUTH_TOKEN);

rest
  .put(Routes.applicationCommands(CLIENT_ID), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
