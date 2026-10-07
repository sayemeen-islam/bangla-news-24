import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface INews {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const NewsCard = ({ news }: { news: INews }) => {
  return (
<Link href={`/news/${news.id}`}  className='transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>    <article className="group card overflow-hidden bg-base-100 shadow-sm ">
      <figure className="relative h-52 w-full overflow-hidden">
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </figure>

      <div className="card-body p-5">
        <span className="w-fit text-xs font-bold uppercase tracking-wide text-red-700">
          {news.category}
        </span>

        <h2 className="card-title mt-1 line-clamp-2 text-lg font-bold leading-snug text-neutral-900 transition-colors group-hover:text-red-700">
          {news.title}
        </h2>

        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-neutral-600">
          {news.description}
        </p>

      </div>
    </article></Link>
  );
};

export default NewsCard;

