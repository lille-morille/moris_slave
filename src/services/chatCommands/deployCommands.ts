import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import addHelperSubject from "./commands/addHelperSubject";
import becomeHelper from "./commands/becomeHelper";
import meme from "./commands/meme";
import removeHelper from "./commands/removeHelper";
import solved from "./commands/solved";
import whipSlaves from "./commands/whipSlaves";

const { AUTH_TOKEN, CLIENT_ID } = process.env;
const commands = [
  addHelperSubject,
  becomeHelper,
  removeHelper,
  solved,
  whipSlaves,
  meme,
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(AUTH_TOKEN);

rest
  .put(Routes.applicationCommands(CLIENT_ID), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
