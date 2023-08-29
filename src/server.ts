import { configDotenv } from "dotenv";
configDotenv();

import { Client, GatewayIntentBits } from "discord.js";
import SubjectHelperService from "./services/SubjectHelperService";

import "./deployCommands";
import {
  ADD_HELPER_SUBJECT_COMMAND,
  APPLY_FOR_HELPER_COMMAND as BECOME_SLAVE_COMMAND,
} from "./deployCommands";

const TOKEN = process.env.AUTH_TOKEN;
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
export default client;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const subjectHelper = new SubjectHelperService(interaction);

  switch (interaction.commandName) {
    case ADD_HELPER_SUBJECT_COMMAND:
      subjectHelper.handleCreateSubject().catch(console.error);
      break;
    case BECOME_SLAVE_COMMAND:
      subjectHelper.handleBecomeSlave().catch(console.error);
    default:
      interaction.reply({ content: "Unknown command", ephemeral: true });
      break;
  }
});

client.login(TOKEN);
