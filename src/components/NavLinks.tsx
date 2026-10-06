import Link from "next/link";
import React from "react";

interface INav {
  slug: string;
  title: string;
  topicId: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: INav[] = data.data;
  const filteredNavs = navs.filter((category) => category.scrapable);
  return (
    <div className="mt-4 flex gap-2 sm:gap-5">
      <Link href="/" className="hover:text-red-700 text-sm">
        হোম
      </Link>
      {filteredNavs.map((category) => (
        <Link
          className="hover:text-red-700 text-sm"
          key={category.topicId}
          href={`/category/${category.slug}`}
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
