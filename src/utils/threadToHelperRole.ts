import { GuildTextBasedChannel, Role } from "discord.js";

/**
 * Converts a helper thread to its corresponding helper role name
 * @example
 * ```typescript
 * const helperThread = this.interaction.channel;
 * // channel is '🐍-python', so helper role is 'python helper'
 * const role = threadToHelperRole(helperThread);
 * console.log(role.id) // 23k24jn3280943982nu
 * ```
 * @param helperThread The helper thread to get the helper role for
 * @returns The helper role object
 */
export default function threadToHelperRole(
  helperThread: GuildTextBasedChannel
): Role {
  const channelName = helperThread.parent.name;

  // Grab the name after the emoji aka. from the third character as each
  // channel starts with an emoji and a hyphen
  // Example: 📚-math, btw this is safe since we validate
  // that exactly one emoji is used and the hyphen is standard
  const subject = channelName.slice(3);
  const roleName = subject + "-helper";

  const role = helperThread.guild.roles.cache.find(
    (role) => role.name === roleName
  );

  return role;
}
