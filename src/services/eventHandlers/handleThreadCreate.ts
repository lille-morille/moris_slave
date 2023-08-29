import { AnyThreadChannel, ChannelType } from "discord.js";
import { CATEGORY_CHANNEL_NAME as HELPER_CATEGORY_CHANNEL_NAME } from "../../constants/channels";

export default function handleThreadCreate(
  thread: AnyThreadChannel<boolean>,
  newlyCreated: boolean
) {
  if (
    thread.type != ChannelType.PublicThread ||
    !newlyCreated ||
    thread.parent.type !== ChannelType.GuildForum ||
    thread.parent.parent.name !== HELPER_CATEGORY_CHANNEL_NAME
  )
    return;

  // Get the name of the thread channel
  const channelName = thread.parent.name;

  // Grab the name after the emoji aka. from the third character as each
  // channel starts with an emoji and a hyphen
  // Example: 📚-matematikk, btw this is safe since we validate
  // that exacly one emoji is used and the hyphen is standard
  const subject = channelName.slice(3);

  const roleName = subject + "-helper";

  const role = thread.guild.roles.cache.find((role) => role.name === roleName);

  if (!role) return;

  // @ all people in the guild with the role in the general chat
  thread.send(
    `Hey, everyone with <@&${role.id}>, help is needed in this thread!`
  );
  console.log("Added a thread to a helper channel");
}
