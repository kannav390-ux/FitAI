export default function Pillars() {
    return (
      <section className="py-32 px-8">
  
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
  
          {/* Big Card */}
          <div className="md:col-span-7 bg-[#0f1930] p-12 rounded-xl">
            <h3 className="text-3xl font-bold">
              AI-Driven Precision
            </h3>
            <p className="text-gray-400 mt-4">
              Adaptive training engine in real-time.
            </p>
          </div>
  
          {/* Side Card */}
          <div className="md:col-span-5 bg-[#192540] p-12 rounded-xl text-center">
            <h3 className="text-3xl font-bold">
              Smart Nutrition
            </h3>
          </div>
  
        </div>
  
      </section>
    );
  }