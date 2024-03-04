import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { setAnonymousId } from "@/actions/setAnonymousId"
import { getCookie } from "./utils/helpersSSR"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TODO - rename project",
  description: "description",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const anonymousId = await getCookie("anonymousId")
  if (!anonymousId) {
    async function anonymousId() {
      "use server"
      await setAnonymousId()
    }
    await anonymousId()
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <main
          className="bg-background text-title
    min-h-screen transition-colors duration-300 pt-[62px]">
          {children}
        </main>
      </body>
    </html>
  )
}
