
const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-red-600" />

        <p className="mt-5 text-lg font-semibold text-gray-800">
          সংবাদ লোড হচ্ছে...
        </p>

        <p className="mt-1 text-sm text-gray-500">
          অনুগ্রহ করে অপেক্ষা করুন
        </p>
      </div>
    </main>
  );
};

export default Loading;

