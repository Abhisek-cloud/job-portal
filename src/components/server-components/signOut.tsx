
"use client"
import { signOut } from "next-auth/react"
import { Button } from "../ui/button"

export default function SignOut() {
  return <Button className="bg-sky-500 text-white font-sans flex justify-center items-center p-6 hover:bg-blue-900 hover:text-white text-lg font-semibold" onClick={() => signOut()}>Sign Out</Button>
}