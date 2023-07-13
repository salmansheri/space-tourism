import Image from "next/image";


export default function Home() {
  return (
   <main className="flex">
    {/* left  */}
    <div className="flex-1 flex flex-col items-center justify-center pt-52 bg-[url('/images/homebg.png')] bg-cover">
      <div>

      <h4 className="heading-5 uppercase">So, You Want to Travel to </h4> <br />
      <h1 className="heading-1">SPACE</h1>
      <p className="leading-8">
        Let&apos;s face it;if you want to go to space, you might as well <br /> genuinely go to outer space and not hover kind of on the <br /> edge of it.Well sit back, and relax because we&apos;ll give you a<br />  truly out of this world experience!
      </p>
      
      </div>

    </div>
    {/* right  */}
    <div className="flex-1 w-full h-screen relative">
      <Image 
        src="/images/home.png"
        alt="hero"
        fill
        className="object-cover"

      />
      <div className="absolute bg-white  text-background bottom-32 h-52 w-52 flex items-center justify-center  rounded-full right-24">
        <h3 className="heading-3">Explore</h3>

      </div>

    </div>
    
     
    
   </main>
  )
}
