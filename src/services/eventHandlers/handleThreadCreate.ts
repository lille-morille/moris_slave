import { AnyThreadChannel } from "discord.js";
import isHelperThread from "../../utils/isHelperThread";
import threadToHelperRoleId from "../../utils/threadToHelperRole";

export default function handleThreadCreate(thread: AnyThreadChannel) {
  // Make sure that we are in a helper thread
  if (!isHelperThread) return;

  const role = threadToHelperRoleId(thread);

  if (!role) return;

  // @ all people in the guild with the role in the general chat
  thread.send(
    `Hey, everyone with <@&${role.id}>, help is needed in this thread!`
  );
}
