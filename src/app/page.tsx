import MainNews from "@/components/MainNews";
import { log } from "console";

import Image from "next/image";



export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews=sections[0].articles
  const otherNews=sections.slice(1)



  return (
    <div className="mt-5">
      <div className="grid grid-cols-3  gap-8">

        {/* mainNews */}
        <div className="col-span-2">
          <MainNews news={mainNews} ></MainNews>
        </div>

        {/* mostRead */}
        <div className="   col-span-1"></div>
      </div>
    </div>
  );
}
