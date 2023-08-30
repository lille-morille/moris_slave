import { CacheType, Interaction } from "discord.js";
import {
  ADD_HELPER_SUBJECT_COMMAND,
  BECOME_HELPER_COMMAND,
  REMOVE_HELPER_COMMAND,
  SOLVED_COMMAND,
} from "../../constants/commands";
import SubjectHelperService from "../subjectHelperService/SubjectHelperService";

/**
 * Handles all incoming command interactions (slash commands) from users
 */
export default async function (interaction: Interaction<CacheType>) {
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
    default:
      interaction.reply({ content: "Unknown command", ephemeral: true });
      break;
  }
}
