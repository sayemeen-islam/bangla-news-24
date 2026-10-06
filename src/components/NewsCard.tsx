import Image from 'next/image';
import React from 'react';

export interface INews {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }

const NewsCard = ({news}:{news:INews}) => {
  console.log(news);
  
  return (
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <Image
            src={news.imageUrl}
            alt={news.imageAlt}
            width={400}
            height={400}
          />
        </figure>
        <div className="card-body">
          <span className="text-xs font-semibold text-red-700">
            {news.category}
          </span>
          <h2 className="card-title mt-1 text-xl font-bold leading-snug text-neutral-900 ">
            {news.title}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
            {news.description}
          </p>
        </div>
      </div>
  );
};

export default NewsCard;