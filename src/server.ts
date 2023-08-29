import { configDotenv } from "dotenv";
configDotenv();

import { Client, GatewayIntentBits } from "discord.js";
import "./services/commands/deployCommands";
import handleInteractionCreate from "./services/eventHandlers/handleInteractionCreate";
import handleThreadCreate from "./services/eventHandlers/handleThreadCreate";

const TOKEN = process.env.AUTH_TOKEN;
const client = new Client({ intents: [GatewayIntentBits.Guilds] }); //DETTE ER FETTT
export default client;

client.on("ready", () => console.log(`Logged in as ${client.user.tag}!`));
client.on("interactionCreate", handleInteractionCreate);
client.on("threadCreate", handleThreadCreate);

client.login(TOKEN);
