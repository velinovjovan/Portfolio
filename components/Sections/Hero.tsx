"use client";

const Hero = () => {
  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    contact!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="z-10 w-full max-w-5xl px-5 pb-28 pt-40 text-center pointer-events-none sm:px-8 sm:pt-44 md:px-12 md:pt-56 lg:pb-40 xl:pt-60">
      <p className="mb-4 inline-flex rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-purple-300 sm:text-sm">
        Hi, My name is
      </p>
      <h1 className="mb-4 font-outfit text-4xl font-bold leading-tight text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl">
        Jovan Velinov
      </h1>
      <h2 className="mx-auto mb-6 max-w-3xl font-outfit text-lg text-purple-200/90 sm:text-2xl md:text-3xl lg:text-4xl">
        I build fast, scalable, and user-focused apps.
      </h2>
      <p className="mx-auto mb-10 max-w-4xl font-outfit text-base leading-relaxed text-purple-100 sm:text-lg md:mb-12 md:text-xl lg:text-2xl">
        CS student at the{" "}
        <span className="font-semibold text-purple-400">
          School of Electrical Engineering, University of Belgrade (ETF)
        </span>
        , focused on full-stack development, algorithms, and building products
        that solve real-world problems. I combine{" "}
        <span className="font-bold">
          strong competitive programming foundations
        </span>{" "}
        with practical engineering to deliver reliable, high-impact solutions.
      </p>
      <button
        onClick={scrollToContact}
        className="pointer-events-auto relative inline-flex items-center justify-center overflow-hidden rounded-lg p-[1px] focus:outline-none"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="relative inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 py-3 font-outfit text-sm font-semibold text-white backdrop-blur-3xl transition-transform duration-200 hover:scale-[1.02] sm:px-8 sm:py-3.5 sm:text-base">
          Let&apos;s work together
        </span>
      </button>
    </section>
  );
};

export default Hero;
