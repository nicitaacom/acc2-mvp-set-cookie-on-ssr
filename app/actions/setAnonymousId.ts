"use server"

import { cookies } from "next/headers"

export async function setAnonymousId() {
  cookies().set("anonymousId", `anonymousId_${crypto.randomUUID()}`)
}
