import { AnyThreadChannel, ChannelType } from "discord.js";
import { HELPER_CHANNEL_CATEGORY_NAME } from "../constants/channels";

/**
 * Returns wether the given thread is a helper thread or not
 * Meaning it is withing the helper category and is a forum thread
 */
export default function isHelperThread(thread: AnyThreadChannel) {
  return !(
    thread.type != ChannelType.PublicThread ||
    thread.parent.type !== ChannelType.GuildForum ||
    thread.parent.parent.name !== HELPER_CHANNEL_CATEGORY_NAME
  );
}
