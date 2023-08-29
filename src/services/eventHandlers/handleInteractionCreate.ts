import { CacheType, Interaction } from "discord.js";
import {
  ADD_HELPER_SUBJECT_COMMAND,
  BECOME_SLAVE_COMMAND,
  REMOVE_HELPER_COMMAND,
} from "../../constants/commands";
import SubjectHelperService from "../subjectHelperService/SubjectHelperService";

/**
 * Handles all incoming command interactions (slash commands) from users
 */
export default async function (interaction: Interaction<CacheType>) {
  if (!interaction.isChatInputCommand()) return;

  console.log(interaction.commandName);

  const helperService = new SubjectHelperService(interaction);
  switch (interaction.commandName) {
    case ADD_HELPER_SUBJECT_COMMAND:
      helperService.handleCreateSubject();
      break;
    case BECOME_SLAVE_COMMAND:
      helperService.handleBecomeHelper();
      break;
    case REMOVE_HELPER_COMMAND:
      helperService.handleRemoveHelper();
      break;
    default:
      interaction.reply({ content: "Unknown command", ephemeral: true });
      break;
  }
}