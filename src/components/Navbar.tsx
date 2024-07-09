import React from "react"
import Link from "next/link"
import { auth } from "@/auth"
import SignOut from "./server-components/signOut";
import { Button } from "./ui/button";

async function Navbar() {



  const links = [
    {
      path: "/",
      name: "Home",
      show: true
    },
    {
      path: "/jobs",
      name: "Jobs",
      show: true
    },
    {
      path: "/activity",
      name: "Activity",
      show: true
    },

    {
      path: "/post-new-job",
      name: "Post a job",
      show: true
    },
    {
      path: "/membership",
      name: "Membership",
      show: true
    }
  ]

  const response = await auth();
  console.log(response?.user);

  return (
    <div>
      <nav className="flex top-0 left-0 fixed py-4 px-5 shadow-md w-full  items-center justify-between z-50 bg-slate-100">
        <div className="text-xl font-semibold"> <Link href="/">Job Finder</Link>  </div>
        <div className="flex justify-center items-center gap-5">
          <ul className="lg:flex gap-4 hidden">
            {
              links.map(({ path, name, show }) => {
                if (show) {
                  return (

                    <li className="text-md font-medium" ><Link key={name} href={path}>{name}</Link></li>

                  )
                }
              })
            }
          </ul>
          <div>

            {
              response?.user ? <SignOut /> : <Button className="bg-sky-500 text-white font-sans flex justify-center items-center p-6 hover:bg-blue-900 hover:text-white text-lg font-semibold"> <Link href={'/sign-in'}>Log in</Link></Button>
            }

          </div>
        </div>
      </nav>
    </div>


  )
}

export default Navbar