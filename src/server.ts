import { configDotenv } from "dotenv";
configDotenv();

import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
  GatewayIntentBits,
} from "discord.js";
import "./deployCommands";
import sendMessageToUser from "./utils/sendMessateToUser";

const TOKEN = process.env.AUTH_TOKEN;
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
export default client;

const mori_id = process.env.MORI_ID;
const henrik_id = process.env.HENRIK_ID;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "help") {
    const java = new ButtonBuilder()
      .setCustomId("java")
      .setLabel("Java")
      .setStyle(ButtonStyle.Secondary);

    const math = new ButtonBuilder()
      .setCustomId("math")
      .setLabel("Math")
      .setStyle(ButtonStyle.Secondary);

    const row = new ActionRowBuilder().addComponents(java, math);

    const response = await interaction.reply({
      content: `What subject do you need help with?`,
      components: [row as any],
    });

    const collectorFilter = (i) => i.user.id === interaction.user.id;

    try {
      const confirmation = await response.awaitMessageComponent({
        filter: collectorFilter,
        time: 60000,
      });

      if (confirmation.customId === "math") {
        await sendMessageToUser(
          process.env.HENRIK_ID,
          `${interaction.member.user.username} needs help with Math!`
        );
        await confirmation.update({
          content: `Help from Henrik is on the way!`,
          components: [],
        });
      } else if (confirmation.customId === "java") {
        await sendMessageToUser(
          process.env.MORI_ID,
          `${interaction.member.user.username} needs help with Java!`
        );
        await confirmation.update({
          content: `Help from Mori is on the way!`,
          components: [],
        });
      }
    } catch (e) {
      await interaction.editReply({
        content: "Confirmation not received within 1 minute, cancelling",
        components: [],
      });
    }
  }
});

client.login(TOKEN);
