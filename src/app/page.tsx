import NewscardLandscape from "@/components/cards/newscard-landscape";
import NewsCardPortrait from "@/components/cards/newscard-portrait";
import Slideshow from "@/components/cards/slideshow";
import TopnewsCard from "@/components/cards/topnews-card";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col max-lg:p-2 scroll">
      <Navbar />

      <section className="w-full lg:px-[15rem] lg:p-2 mt-[3rem]">
        <div className="w-full flex mt-1 max-lg:flex-col">
          <Slideshow />
          <div className="w-[40rem] h-fit-content bg-red-300 rounded-md lg:ml-2 max-lg:mt-2 max-lg:flex max-lg:h-[10rem] max-lg:w-full">
            <TopnewsCard />
            <TopnewsCard />
          </div>
        </div>
      </section>

      <section className="w-full lg:px-[15rem] lg:p-2 flex">
        <div className="lg:w-[70%] w-full">

          <div className="bg-red-100 w-full shadow-sm mt-10">
            <div className="w-full h-10 bg-emerald-500 flex items-center p-2 px-3">Top News</div>
            <div className="w-full h-full p-2 flex overflow-x-auto">
              <NewsCardPortrait />
              <NewsCardPortrait />
              <NewsCardPortrait />
              <NewsCardPortrait />
              <NewsCardPortrait />
              <NewsCardPortrait />
              <NewsCardPortrait />
              <NewsCardPortrait />
            </div>
          </div>

          <div className="bg-red-100 w-full shadow-sm mt-10">
            <div className="w-full h-10 bg-emerald-500 flex items-center p-2 px-3">General</div>
            <div className="w-full h-full p-2 lg:px-5">
              <NewscardLandscape />
              <NewscardLandscape />
              <NewscardLandscape />
              <NewscardLandscape />
              <NewscardLandscape />
            </div>
          </div>

        </div>

        <div className="w-full bg-red-400 ml-5 mt-10 px-1 max-lg:hidden">

          <div className="bg-red-100 w-full shadow-sm">
            <div className="w-full h-10 bg-emerald-500 flex items-center p-2 px-3">Headline</div>
            <div className="w-full h-full p-2 lg:px-5">
              a
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}
