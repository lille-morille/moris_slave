import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import addHelperSubject from "./addHelperSubject";
import becomeHelper from "./becomeHelper";
import removeHelper from "./removeHelper";
import solved from "./solved";
import whipSlaves from "./whipSlaves";

const { AUTH_TOKEN, CLIENT_ID } = process.env;
const commands = [
  addHelperSubject,
  becomeHelper,
  removeHelper,
  solved,
  whipSlaves,
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(AUTH_TOKEN);

rest
  .put(Routes.applicationCommands(CLIENT_ID), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
