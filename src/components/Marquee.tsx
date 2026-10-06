import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text";

interface IHeading {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const heading: IHeading[] = data.data;
  return (
    <div className="bg-red-700 text-white -mt-1">
      <div className="max-w-7xl mx-auto flex items-center text-sm">
        <span className="bg-red-800 py-1.5 px-4 font-bold">সর্বশেষ</span>
        <MarqueeText direction="right" duration={10}>
          {heading.map((heading) => (
            <Link href={`/news/${heading.id}`} key={heading.id}>
              <span>{heading.title}</span>
              <span className="mx-4"> • </span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
