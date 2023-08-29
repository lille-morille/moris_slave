import client from "../server";

export default async function sendMessageToUser(
  userId: string,
  message: string
) {
  const user = await client.users.fetch(userId);
  if (user) {
    user.send(message);
  }
}
