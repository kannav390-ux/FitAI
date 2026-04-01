import Link from "next/link";
export default function CTA() {
  return (
    <section className="py-32 text-center">

      <h2 className="text-5xl font-bold">
        JOIN THE <span className="text-[#8eabff]">EVOLUTION</span>
      </h2>

      <div className="mt-8 flex justify-center gap-4">
        <input
          placeholder="Enter your email"
          className="px-6 py-3 bg-[#192540] rounded"
        />

<Link href="/login">
  <button className="btn-primary">
    Secure Entry
  </button>
</Link>
      </div>

    </section>
  );
}