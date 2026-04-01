export default function DashboardPreview() {
  return (
    <section className="py-32 bg-[#091328] px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-12">
          THE PERFORMANCE <span className="text-blue-500">DASHBOARD</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="card">HRV: 84ms</div>
          <div className="card">Calories: 2.4k</div>
          <div className="card">Ranking: TOP 2%</div>

        </div>

      </div>

    </section>
  );
}