export default function HeroSection() {
    return (
      <section className="relative w-1/2 hidden md:flex items-end p-16">
        <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
        />
  
        <div className="relative z-10 max-w-xl">
          <div className="bg-primary text-black text-xs px-3 py-1 mb-6">
            KINETIC CORE NOIR
          </div>
  
          <h1 className="text-[64px] font-black leading-[0.9] tracking-[-1px]">
            RECLAIM YOUR <br />
            <span className="text-primary">POTENTIAL</span>
          </h1>
  
          <p className="text-gray-400 mt-4">
            Precision telemetry meets human performance.
          </p>
        </div>
      </section>
    );
  }