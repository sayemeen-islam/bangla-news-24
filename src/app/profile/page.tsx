"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isShown, setIsShown] = useState(false);
  const handleUpdateProfile = async(e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      image: string;
      name: string;
    };

    await authClient.updateUser({
      ...newUserData
    })
  };
  const handleShowEditForm = () => {
    setIsShown(!isShown);
  };
  return (
    <div className="mt-10 min-h-[70vh]">
      <div className="flex flex-col items-center gap-3 mt-2">
        <div className="avatar">
          <div className="ring-error ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-2">
            <img
              alt={`${user?.name}'s profile pic`}
              src={user?.image as string}
            />
          </div>
        </div>

        <h2 className="text-lg sm:text-2xl font-semibold text-neutral-900">
          {user?.name}
        </h2>
        <p className="text-xs sm:text-sm">{user?.email}</p>
        <button
          onClick={handleShowEditForm}
          className="btn bg-red-700 hover:bg-red-800 text-white rounded-lg"
        >
          এডিট প্রোফাইল
        </button>
      </div>

      {isShown && (
        <form onSubmit={handleUpdateProfile}>
          <fieldset className="fieldset   w-md">
            <label className="label text-sm text-neutral-700">নাম</label>
            <input
              name="name"
              type="text"
              className="input w-md"
              placeholder="Name"
            />

            <label className="label text-sm text-neutral-700">ImageURL</label>
            <input
              name="image"
              type="url"
              className="input w-md"
              placeholder="Image"
            />

            <button
              type="submit"
              className="btn text-white bg-red-700  hover:bg-red-800 text-white rounded-lg mt-4 "
            >
              প্রোফাইল আপডেট করুন
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
