import MainNews from "@/components/MainNews";
import NewsCard from "@/components/NewsCard";

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherNews: IOtherSection[] = sections.slice(1);

  return (
    <div className="mt-5">
      <div className="grid grid-cols-3  gap-8">
        {/* mainNews */}
        <div className="col-span-2">
          <MainNews news={mainNews}></MainNews>

          <div className="grid gap-5 mb-20">
            {otherNews.map((news) => (
              <div key={news.curationId}>
                <h2 className="mt-3 mb-3 border-b-2 border-red-700 pb-2 text-lg font-bold text-neutral-900">
                  {news.title}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {news.articles.map((oneNews) => (
                    <NewsCard key={oneNews.id} news={oneNews}></NewsCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* mostRead */}
        <div className="   col-span-1"></div>
      </div>
    </div>
  );
}
