"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";

const signInPage = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/", // A URL to redirect to after the user verifies their email (optional)
    });

    if (data) {
      toast.success("Sign In successfull!");
      console.log(data);
    }

    if (error) {
      toast.error(error.message as string);
      console.log(error);
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGitHubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-10">
      <h2 className="text-2xl font-bold text-red-700">সাইন ইন</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset   w-md">
          <label className="label text-sm text-neutral-700">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label text-sm text-neutral-700">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button type="submit" className="btn text-white bg-red-700 mt-4 ">
            সাইন ইন করুন
          </button>
        </fieldset>
      </form>
      <div className="divider">অথবা</div>
      <div className="mt-4 space-y-3">
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full border border-gray-300 bg-white text-gray-800 hover:border-red-600 hover:bg-red-50"
        >
          <FaGoogle />
          Google দিয়ে সাইন ইন করুন
        </button>

        <button
          onClick={handleGitHubSignIn}
          className="btn w-full border border-gray-300 bg-white text-gray-800 hover:border-red-600 hover:bg-red-50"
        >
          <FaGithub />
          GitHub দিয়ে সাইন ইন করুন
        </button>
      </div>
    </div>
  );
};

export default signInPage;
