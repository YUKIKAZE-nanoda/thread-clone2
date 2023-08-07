"use server"

import { connect } from "http2"

export async function updateUser():Promise<void> {
    connectToDB();
}