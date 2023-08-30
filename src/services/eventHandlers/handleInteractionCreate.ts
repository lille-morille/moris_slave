import { Interaction } from "discord.js";
import {
  ADD_HELPER_SUBJECT_COMMAND,
  BECOME_HELPER_COMMAND,
  MEME_COMMAND,
  REMOVE_HELPER_COMMAND,
  SOLVED_COMMAND,
  WHIP_SLAVES_COMMAND,
} from "../../constants/commands";
import MemeService from "../entertainmentService/MemeService";
import SubjectHelperService from "../subjectHelperService/SubjectHelperService";

/**
 * Handles all incoming command interactions (slash commands) from users
 */
export default async function (interaction: Interaction) {
  if (!interaction.isChatInputCommand()) return;

  const helperService = new SubjectHelperService(interaction);
  switch (interaction.commandName) {
    case ADD_HELPER_SUBJECT_COMMAND:
      helperService.handleCreateSubject();
      break;
    case BECOME_HELPER_COMMAND:
      helperService.handleBecomeHelper();
      break;
    case REMOVE_HELPER_COMMAND:
      helperService.handleRemoveHelper();
      break;
    case SOLVED_COMMAND:
      helperService.handleSolved();
      break;
    case MEME_COMMAND:
      new MemeService(interaction).getMeme();
      break;
      break;
    case WHIP_SLAVES_COMMAND:
      helperService.handleWhipSlaves();
      break;
    default:
      interaction.reply({ content: "Unknown command", ephemeral: true });
      break;
  }
}
