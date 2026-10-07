import NewsCard from "@/components/NewsCard";
import React from "react";
interface INews {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}
const CategoryNews = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );

  const data = await res.json();

  const categoryNews: INews[] = data.data;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-5 mb-20">
      {categoryNews.map((oneNews:INews) => (
        <NewsCard key={oneNews.id} news={oneNews}></NewsCard>
      ))}
    </div>
  );
};

export default CategoryNews;
