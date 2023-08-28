import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

const { AUTH_TOKEN, GUILD_ID, CLIENT_ID } = process.env;

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(AUTH_TOKEN);

rest
  .put(Routes.applicationCommands(CLIENT_ID), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
