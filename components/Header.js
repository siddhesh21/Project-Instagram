import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push("/")}
          className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-100 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md outline-none"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon
            onClick={() => router.push("/")}
            className="hidden h-6 md:inline-flex cursor-pointer 
                      hover:scale-125 transition-all duration-150 ease-out"
          />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div
                className="relative hidden h-6 md:inline-flex cursor-pointer 
                          hover:scale-125 transition-all duration-150 ease-out"
              >
                <PaperAirplaneIcon
                  className="hidden h-6 md:inline-flex cursor-pointer rotate-45
                          hover:scale-125 transition-all duration-150 ease-out"
                />
                <div
                  className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-blue-600 
                              flex items-center justify-center rounded-full animate-pulse text-white"
                >
                  3
                </div>
              </div>

              <PlusCircleIcon
                className="hidden h-6 md:inline-flex cursor-pointer 
                            hover:scale-125 transition-all duration-150 ease-out"
              />
              <UserGroupIcon
                className="hidden h-6 md:inline-flex cursor-pointer 
                            hover:scale-125 transition-all duration-150 ease-out"
              />
              <HeartIcon
                className="hidden h-6 md:inline-flex cursor-pointer 
                            hover:scale-125 transition-all duration-150 ease-out"
              />

              <img
                onClick={signOut}
                className="h-10 w-10 cursor-pointer rounded-full"
                src={session.user.image}
                alt="Profile Pic"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
