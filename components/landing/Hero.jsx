import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiaTI9X75F3nvYHEJORqEuQW77LtMi_t3JVvTKFA45CNp0UhkiG0YmLduzuO8Aso6vz_6LNU3LOmeQ5p1NSu1O3j0FFYWZFzlsRSobB79CVIiphEGEGeuwU8rotqidfmvMM-ODyl5GK-gePHj4tNLQKPmcTxUJi7duv95Vztm_B-uJlAB7LLDvf9-CjdDQydh5K56M90-CSqp0fwEFT0PgBMDeKbgfRW1gdXHuQs1o5_2en4Ls0DtHBGtv4fH3OspNvTWWjBTeAEmc"
          className="w-full h-full object-cover opacity-40 grayscale"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#060e20] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">

        <span className="bg-pink-500/20 px-3 py-1 text-xs uppercase">
          Next Generation
        </span>

        <h1 className="text-[64px] font-black leading-[0.9] tracking-[-1px]">
          RECLAIM YOUR <br />
          <span className="text-[#8eabff]">POTENTIAL</span>
        </h1>

        <p className="text-gray-400 max-w-xl mt-6">
          AI-driven performance telemetry for elite athletes.
        </p>

        <div className="flex gap-4 mt-8">

<Link href="/login">
  <button className="btn-primary">
    Start Free Trial
  </button>
</Link>

<Link href="/login">
  <button className="border px-6 py-3">
    View Manifesto
  </button>
</Link>

</div>

      </div>
    </section>
  );
}