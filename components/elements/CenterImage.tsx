import Image from "next/image";

const CenterImage = () => {
  return (
    <div className="px-6 py-12 rounded-md bg-slate-100 relative">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/40 via-white" />
      <Image
        className="object-cover object-center"
        src={"https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdW5hdGluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"}
        alt="mountain-river image"
        fill
      />
      <div className="relative z-10">
        <div className="test-lg font-bold">#DiscoverHiddenGems ✨</div>
        <h3 className="text-3xl md:text-4xl font-semibold mt-3 mb-4">Embark on an Unforgettable Journey! 🌍✈️</h3>
        <p className="max-w-lg sm:text-bsm text-lg leading-tight">
          Join me in exploring hidden gems and uncovering the beauty of lesser-known destinations. Let&apos;s wander off the beaten path and create unforgettable memories! 🗺️🌟
        </p>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4  items-center">
        <button className="bg-black/90 hover:bg-neutral-600 rounded-md text-white px-3 py-2 relative z-20 mt-10">
          Expore us 🌐
        </button>
        <form className="mt-10">
          <input className="relative z-10 px-4 py-2 text-base rounded-md outline-none bg-white/100 focus:ring-1 placeholder:text-sm" placeholder="write your email" />
        </form>
      </div>
    </div>
  );
};

export default CenterImage;
