import { configDotenv } from "dotenv";
configDotenv();

import { Client, GatewayIntentBits } from "discord.js";
import "./services/chatCommands/deployCommands";
import handleInteractionCreate from "./services/eventHandlers/handleInteractionCreate";
import handleThreadCreate from "./services/eventHandlers/handleThreadCreate";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
export default client;

client.on("ready", () => console.log(`Logged in as ${client.user.tag}!`));
client.on("interactionCreate", handleInteractionCreate);
client.on("threadCreate", handleThreadCreate);

client.login(process.env.AUTH_TOKEN);
