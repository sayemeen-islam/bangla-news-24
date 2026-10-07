import Link from "next/link";

interface MostReadNews {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();

  const news: MostReadNews[] = data.data;
  
  return (
    <div className="card  p-4 bg-base-100 border border-gray-300">
      <h2 className="mb-3 text-lg font-bold text-neutral-900">সর্বাধিক পঠিত</h2>

      <div className="grid gap-3">
        {news.map((oneNews, i) => (
       
            <Link href={`/news/${oneNews.id}`} className="flex gap-2 items-center group" key={oneNews.id}><p className="text-2xl font-bold text-red-400 group-hover:text-red-700">{i + 1}</p>{" "}
            <h2 className="group-hover:text-red-700">{oneNews.title}</h2></Link>
   
        ))}
      </div>
    </div>
  );
};

export default MostRead;
