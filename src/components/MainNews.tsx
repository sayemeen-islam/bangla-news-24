import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IMainNews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;

}

const MainNews = ({ news }: { news: IMainNews[] }) => {
  console.log(news);
  const [firstNews, ...restNews] = news;
  console.log(restNews, "from mainNews");

  return (
    <div className=" flex gap-6  justify-between ">
      <Link href={`/news/${firstNews.id}`} className="flex-1 group">
        <div className="card bg-base-100  shadow-sm">
          <figure className="relative w-full overflow-hidden rounded-t-xl">
            <Image
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
              width={800}
              height={500}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </figure>
          <div className="card-body">
            <span className="text-xs font-semibold text-red-700">
              {firstNews.category}
            </span>
            <h2 className="card-title mt-1 text-xl font-bold leading-snug text-neutral-900 group-hover:text-red-700">
              {firstNews.title}
            </h2>
            <p className="mt-2 line-clamp-3 text-sm text-neutral-600">
              {firstNews.description}
            </p>
          </div>
        </div>
      </Link>
      <div className="grid gap-1 flex-1">
        {restNews.slice(1, 5).map((news: IMainNews) => (
          <Link href={`/news/${news.id}`} key={news.id}>
            <div className="card bg-base-100 card-sm shadow-sm group">
              <div className="card-body ">
                <span className="text-xs font-semibold text-red-700">
                  {news.category}
                </span>
                <h2 className="card-title mt-0.5 font-semibold leading-snug text-neutral-900  group-hover:text-red-700">
                  {news.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MainNews;
