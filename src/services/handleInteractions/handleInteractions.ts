import { CacheType, Interaction } from "discord.js";
import {
  ADD_HELPER_SUBJECT_COMMAND,
  BECOME_SLAVE_COMMAND,
} from "../../constants/commands";
import SubjectHelperService from "../subjectHelperService/SubjectHelperService";

/**
 * Handles all incoming command interactions (slash commands) from users
 */
export default async function (interaction: Interaction<CacheType>) {
  if (!interaction.isChatInputCommand()) return;

  console.log(interaction.commandName);

  switch (interaction.commandName) {
    case ADD_HELPER_SUBJECT_COMMAND:
      new SubjectHelperService(interaction)
        .handleCreateSubject()
        .catch(console.error);
      break;
    case BECOME_SLAVE_COMMAND:
      new SubjectHelperService(interaction)
        .handleBecomeHelper()
        .catch(console.error);
      break;
    default:
      interaction.reply({ content: "Unknown command", ephemeral: true });
      break;
  }
}
