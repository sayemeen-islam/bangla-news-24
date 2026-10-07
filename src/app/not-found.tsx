
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-bold text-red-600">৪০৪</p>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mx-auto mt-3 max-w-md text-gray-600">
          দুঃখিত, আপনি যে সংবাদ বা পেজটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি।
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

