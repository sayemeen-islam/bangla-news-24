"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignupPage = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/dashboard", // A URL to redirect to after the user verifies their email (optional)
    });
    if (data) {
      console.log(data);
      redirect("/");
    }

    if (error) {
      console.log(error);
    }
  };

  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGitHubSignUp=async()=>{
    await authClient.signIn.social({
        provider: "github"
    })
  }

  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-10">
      <h2 className="text-2xl font-bold text-red-700">সাইন আপ</h2>
      <form onSubmit={handleSubmit}>
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
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
      <div className="divider">অথবা</div>
      <div className="mt-4 space-y-3">
        <button
          onClick={handleGoogleSignUp}
          className="btn w-full border border-gray-300 bg-white text-gray-800 hover:border-red-600 hover:bg-red-50"
        >
          <FaGoogle />
          Google দিয়ে সাইন আপ করুন
        </button>

        <button onClick={handleGitHubSignUp} className="btn w-full border border-gray-300 bg-white text-gray-800 hover:border-red-600 hover:bg-red-50">
          <FaGithub />
          GitHub দিয়ে সাইন আপ করুন
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
