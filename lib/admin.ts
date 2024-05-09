import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2g5FsGzQ0XvOf9kflCu5iJiQ4w6"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
