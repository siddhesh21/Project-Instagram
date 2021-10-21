import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full border p-[2px] h-16 w-16"
        src={session?.user?.image}
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.name}</h2>
        <h3 className="text-sm text-gray-500">Welcome to Instagram</h3>
      </div>

      <button onClick={signOut} className="text-blue-500 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
