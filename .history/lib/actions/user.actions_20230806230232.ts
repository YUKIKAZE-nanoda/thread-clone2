"use server"

import {connectToDB}

export async function updateUser():Promise<void> {
    connectToDB();
}