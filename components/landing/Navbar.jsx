import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#060e20]/80 backdrop-blur-xl">

      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">

        <div className="text-2xl font-bold text-[#8eabff]">
          FitAI
        </div>

        <div className="hidden md:flex gap-8 text-gray-400">
          <span>Features</span>
          <span>Success Stories</span>
          <span>Pricing</span>
        </div>

        <Link href="/login">
  <button className="bg-gradient-to-r from-[#156aff] to-[#8eabff] px-6 py-2 rounded-md">
    Join the Evolution
  </button>
</Link>

      </div>
    </nav>
  );
}