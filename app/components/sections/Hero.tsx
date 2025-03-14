export function Hero() {
  return (
    <section className="text-white h-full min-h-dvh relative">
      <div className="absolute bg-[url(/images/hero-image.jpg)] bg-cover bg-center top-0 bottom-0 inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60" />
      
      <div className="container mx-auto relative flex flex-col gap-80">
        <div className="text-5xl md:text-9xl mb-8 pt-[200px] font-candara-bold">
          MAKING INNOVATION
          <br />
          COLLABORATIVE
        </div>

        <div className="text-4xl text-right md:text-9xl font-candara-bold">
          DELIVERING
          <br />
          SOLUTIONS & GROWTH
        </div>
      </div>
      <div className="border-t border-t-white relative mt-20">
        <div className="container mx-auto flex justify-between text-white py-5">
          <p className="text-white font-abadi-extralight text-xl uppercase">Innovation</p>
          <p className="text-white font-abadi-extralight text-xl uppercase">Technology</p>
          <p className="text-white font-abadi-extralight text-xl uppercase">Project Lifecycle</p>
        </div>
      </div>
    </section>
  );
}
