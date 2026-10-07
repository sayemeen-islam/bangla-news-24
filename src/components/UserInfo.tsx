"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { DiVim } from "react-icons/di";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log(user);
  const handleSignOut=async()=>{
    await authClient.signOut();
  }
  return (
    <div className="sm:absolute sm:top-3 sm:right-10 flex justify-center items-center gap-4">
      {user ? (
        <div className="flex  items-center gap-3 mt-2">
          <div className="flex items-center gap-2">
            <Link href={"/profile"}>
              <div className="avatar">
                <div className="ring-error ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
                  <img
                    alt={`${user?.name}'s profile pic`}
                    src={user?.image as string}
                  />
                </div>
              </div>
            </Link>

            <h2>{user?.name}</h2>
          </div>

          <button onClick={handleSignOut} className="btn  btn-xs bg-red-700 hover:bg-red-800 text-white">সাইন আউট</button>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-4">
         <Link href={"/signin"}> <button className=" py-4 hover:cursor-pointer text-sm hover:text-red-700">
            সাইন ইন
          </button></Link>
           <Link href={"/signup"}>
          <button className="btn btn-sm text-sm bg-red-700 hover:bg-red-800 text-white">
            সাইন আপ
          </button></Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
