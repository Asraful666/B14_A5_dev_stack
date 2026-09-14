function Hero() {
  return (
    <section id="hero" className="bg-white">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <div className="flex min-h-[580px] items-center py-16 md:py-20">
          <div className="grid w-full items-center gap-10 md:grid-cols-2 md:gap-8">

            {/* Left Content */}
            <div className="max-w-[600px]">
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:text-5xl lg:text-[52px]">
                Build Your Ideal
                <br />
                <span className="bg-gradient-to-r from-[#ff5722] via-[#e83e76] to-[#9c27b0] bg-clip-text text-transparent">
                  Development Stack
                </span>
              </h1>

              <p className="mt-6 max-w-[570px] text-base leading-7 text-[#64748b] sm:text-lg">
                Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that
                fits your next project.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#technologies"
                  className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#ff6b21] via-[#ef476f] to-[#d82c88] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Explore Technologies
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-md border border-[#dbe1e8] bg-white px-6 py-3 text-sm font-medium text-[#475569] transition hover:bg-[#f8fafc]"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/banner-stack.png"
                alt="Development technology illustration"
                className="w-full max-w-[430px] object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;