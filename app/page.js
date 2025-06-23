import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
  <div className="">
<main className="bg-purple-200 min-h-screen ">
  <section className="grid grid-rows-2 gap-4 md:gap-0 md:grid-cols-2 lg:h-[50vh] h-full md:h-[61vh]  ">
  <div className=" flex flex-col justify-start md:justify-center md:pt-32 px-10 md:px-0  gap-4 items-center">
<p className={`xl:text-3xl text-2xl font-bold text-center ${poppins.className} pt-6 md:pl-10 xl:pl-0 `}>
            The best URL shortener in the Market
          </p>
          <p className="sm:px-20 xl:px-36 text-center">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3'>
    <Link href="/shorten"><button className='bg-red-500 shadow-lg px-3 py-2 rounded-3xl text-white'>Try Now</button></Link>
    <Link href="https://github.com/HONEY-web45/Pixlurl" target="_blank"><button className='bg-red-500 shadow-lg px-3 py-2 rounded-3xl text-white'>Github</button></Link>
</div>
</div>
    
    <div className="flex justify-start h-[52vh]  relative"><Image src="/vector.jpg" fill sizes="80vw"  priority={true} alt="" className="mix-blend-darken " /></div>
  </section>
  
</main>
  </div>
  );
}
export const metadata = {
  title: "Home--Pixlurl",
  
  description: "This is Home of Pixlurl",
};