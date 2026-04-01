export default function Hero() {
    return (
      <section className="mb-12 relative overflow-hidden rounded-xl bg-[#000] h-[300px] flex items-center p-12">
  
        {/* BACKGROUND IMAGE */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmRx6IFY6wBO51uOkPOd1r0qz6qI-kJMJyvSEb0rCSenlpVUhIDAvzrorE9RgP9Ve1b3boA9p5k7HX5X49VS6dFgevFdIoafgF2jvQ2uLylQoPRtiZUFUlm_iTYW7nu8EiAqoBp98EYYvS963cpEPe_n5jqRQd5xcbcPVK-SjgfaENzSvR3BGAC5C4Mu56AeoUXgdbKJqnJsc_dZAdeO4dOCF-hlDkGL0hVCPHFm_7QxdDcHt2Rm1Y5vd0DPjd5NiNRZcQMZ_7pEzo"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
  
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(142,171,255,0.2),transparent_60%)]" />
  
        {/* CONTENT */}
        <div className="relative z-10 max-w-2xl">
        <h1 className="text-[64px] font-black leading-[0.9] tracking-[-1px]">
            PEAK <br />
            <span className="text-[#8eabff]">VELOCITY</span>
          </h1>
  
          <p className="text-gray-400 uppercase text-sm mt-2">
            ATHLETE_01 STATUS: OPTIMAL RECOVERY DETECTED
          </p>
  
          <div className="flex gap-4 mt-4">
            <span className="px-4 py-1 bg-pink-300 text-black text-xs rounded-full">
              VO2 MAX: 54.2
            </span>
            <span className="px-4 py-1 bg-[#192540] text-blue-300 text-xs rounded-full">
              LOAD: 85%
            </span>
          </div>
        </div>
      </section>
    );
  }