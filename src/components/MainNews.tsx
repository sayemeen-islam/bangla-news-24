import Image from "next/image";
import React from "react";

export interface IMainNews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  // firstPublished: any
  // lastPublished: any
  source: string;
}

const MainNews = ({ news }: { news: IMainNews[] }) => {
  console.log(news);
  const [firstNews, ...restNews] = news;
  console.log(restNews, "from mainNews");

  return (
    <div className=" flex gap-6  justify-between ">
      <div className="card bg-base-100 flex-1 shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
            width={400}
            height={400}
            
          />
        </figure>
        <div className="card-body">
          <span className="text-xs font-semibold text-red-700">
            {firstNews.category}
          </span>
          <h2 className="card-title mt-1 text-xl font-bold leading-snug text-neutral-900 ">
            {firstNews.title}
          </h2>
          <p className="mt-2 line-clamp-3 text-sm text-neutral-600">
            {firstNews.description}
          </p>
        </div>
      </div>
      <div className="grid gap-1 flex-1">
        {restNews.slice(1, 5).map((news: IMainNews) => (
          <div
            key={news.id}
            className="card bg-base-100 card-sm shadow-sm"
          >
            <div className="card-body">
              <span className="text-xs font-semibold text-red-700">
                {news.category}
              </span>
              <h2 className="card-title mt-0.5 font-semibold leading-snug text-neutral-900">
                {news.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MainNews;
