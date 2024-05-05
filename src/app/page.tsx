import Slideshow from "@/components/cards/slideshow";
import TopnewsCard from "@/components/cards/topnews-card";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col max-lg:p-2 scroll">
      <Navbar />

      <section className="w-full lg:px-[15rem] lg:p-2">
        <div className="w-full flex mt-1 max-lg:flex-col">
          <Slideshow />
          <div className="w-[40rem] h-fit-content bg-red-300 rounded-md lg:ml-2 max-lg:mt-2 max-lg:flex max-lg:h-[10rem] max-lg:w-full">
            <TopnewsCard />
            <TopnewsCard />
          </div>
        </div>

        <div className="bg-red-100 w-full h-20 shadow-sm mt-10">
          <div className="w-full h-10 bg-emerald-500 flex items-center p-2 px-3">Top header</div>
          <div className="w-full h-full">
            a
          </div>
        </div>

      </section>

    </main>
  );
}
