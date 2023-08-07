"use server";

import path from "path";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
interface
export async function updateUser({
  userId,
  username,
  name,
  bio,
  image,
  path,
}:Params): Promise<void> {
  connectToDB();

  try {
    await User.findOneAndUpdate(
      {
        id: userId,
      },
      { username: username.toLowerCase(), name, bio, image, onboarded: true },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error:any) {
    throw new Error(`Failed to create/update user ${error.message}`)
  }
}
