export default function Categories() {
    return (
      <section className="mb-16">
  
        <div className="flex justify-between mb-8">
          <h3 className="uppercase tracking-widest font-bold">Categories</h3>
          <span className="text-blue-400 cursor-pointer">Browse All</span>
        </div>
  
        <div className="grid md:grid-cols-4 gap-6">
  
          <div className="md:col-span-2 h-64 rounded-xl overflow-hidden relative group">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoqG1RlU376zrlDuLCcTMNZNNbY02jSVzbfOHxs_9vVT1nQABDLvr4k2y4QeESFv5kFxj8ok8cnek-yykANe0kBo0lmeufOFNXyfmGYYyDm6l9MOqzOaUDj3vZs63k0zOVoFUqP1eCFcTHAVM9T-pCC2SUpMOARWYxA7j4HvEXygD00Na5ziskq6JgnZZR1C3CJNFOY98JHoM3sJ3h-kJC7_L-ALx4-Z8JykMjAXoyycrn_MIYf1uQSJuF0qjb-LRlWxGCX5_PdQk8"
              className="w-full h-full object-cover group-hover:scale-110 transition" />
            <div className="absolute bottom-6 left-6 text-3xl font-black italic">
              STRENGTH
            </div>
          </div>
  
          <div className="h-64 rounded-xl overflow-hidden relative">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAt34Oc9icO-Mynxd47IsmzkZhGMqyLyueP2PC9vVjEzZ8QWYqfAL8cOElYXJiRKnDnw_Zv5OS2TEF_3YMbxQAfTQpEKlNorG91IdDnTpese-ccX5GUttOfUDY_YlXqr_fo6UGhaLFdrSozkiA39J-q9v1WMUVCvddyZBPNAkxytomI8FwK6nId9QcMZbZSGxQSvG46JjVseB5aojmdeGRCx65NPlSxhPaxblT6gaNjSsMW9xWRe49TvBNYZn33T1t-R8c3Ws6mewu"
              className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 text-red-400 text-3xl font-black italic">
              HIIT
            </div>
          </div>
  
          <div className="h-64 rounded-xl overflow-hidden relative">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM0VqC88LBLkkYa_8CecfKDdMDJb42jfQpU4HDKBSbkZcy1scWIYAPKtjYen1KzPaX0egqZObfptT51ziwIbUHJr_pGiJZ9lzjqQI-8fdQeH5r6siRjsd7Qxvk52X69oN-3fRYS7I3lUV85zviOEOa1EohdqIF7RLqIcAAa55zpLSuXJlHi0_LXqUVqQMkfUm9j9ug6Bov0GJb5f_USjSNgguCxgb80mf3H_TpQbZAD-PiSMoIns01F0hhryaFqLOjLA9KXvZT_w82"
              className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 text-pink-400 text-3xl font-black italic">
              YOGA
            </div>
          </div>
  
        </div>
  
      </section>
    );
  }