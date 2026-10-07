import { notFound } from "next/navigation";
import React from "react";

const NewsDetailsPage = async ({ params }: { params: { newsId: string } }) => {
  const { newsId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );

  const data = await res.json();
  const news=data.data
  if(!news){
    notFound()
  }
      return (
        <div className="mt-6 mx-auto max-w-2xl">
            <h1 className="text-2xl font-bold leading-snug text-neutral-900 sm:text-3xl">{news.title}</h1>
            {/* image */}


            <p>{news.text}</p>
        </div>
    );
};

export default NewsDetailsPage;
