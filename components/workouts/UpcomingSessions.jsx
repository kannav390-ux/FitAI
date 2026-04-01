export default function UpcomingSessions() {
    return (
      <div>
  
        <div className="flex justify-between items-center mb-6">
          <h3 className="uppercase tracking-widest font-bold">
            Upcoming Sessions
          </h3>
  
          <div className="flex gap-2">
            <button className="w-8 h-8 bg-[#192540] rounded">‹</button>
            <button className="w-8 h-8 bg-[#192540] rounded">›</button>
          </div>
        </div>
  
        <div className="space-y-4">
  
          {/* CARD 1 */}
          <div className="card flex items-center justify-between">
  
            <div className="flex items-center gap-4">
  
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApxYLrto-_WKRUghE4pszzsJzyY7f_Kz7qGNECabT7kOwLH5MneSU2wabepzHzPsqRIg_6SyM58dImf8oyEr9haqkGJgDD4PFGu4tK5okES5dVDFnkRJDmt1gQE4dyfckS_0WM-FBCQJ92sj5wiSLyyjHKSceubVmDUTi6DlbYKMpghoSPXrl-khGzIWzlVAhiG3m7kEjoOglgoNBCKOoVArlgCI3REi4Gwy8BcP47mKJ-TYNp1QmGl9aTNbh1nuLQR0Se6AIVXlHg"
                className="w-20 h-20 rounded-lg object-cover"
              />
  
              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Today • 18:30 • Hypertrophy
                </p>
  
                <h4 className="font-bold text-lg">
                  UPPER BODY CRUSH
                </h4>
  
                <p className="text-sm text-gray-400">
                  Coach Marcus • 55 Minutes
                </p>
              </div>
            </div>
  
            <button className="px-4 py-2 bg-[#1f2b49] text-xs rounded">
              RESERVED
            </button>
  
          </div>
  
          {/* CARD 2 */}
          <div className="card flex items-center justify-between">
  
            <div className="flex items-center gap-4">
  
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWR06aHn8HfqADG89SatwZDqyEWJKADD_pPyhGBb0QXCTjltC966-84pUeYfRFY3bbhkTeuZXxz36xMksJtynMCNMHZ4pUrjNY0BhIfjZDCCX-TsX_qwMsSwz6S04FSuEsIO5do1SQQ-bfjkd_6JntK3IPzqYmZTLtJIBnRZuIRVqyERoyVwy9wVWhHpf9bQ6XOPpM_iGCjL_m8HLbrJPGpqfwt_rzwAMe2cIG6J52d9FJ-zi4vrk_Pvb0-YvLcmV-KXt_zh_f8GMt"
                className="w-20 h-20 rounded-lg object-cover"
              />
  
              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Tomorrow • 07:00 • Metabolic
                </p>
  
                <h4 className="font-bold text-lg">
                  OXYGEN DEBT HIIT
                </h4>
  
                <p className="text-sm text-gray-400">
                  Coach Sarah • 30 Minutes
                </p>
              </div>
            </div>
  
            <button className="px-4 py-2 border border-[#8eabff] text-xs rounded text-[#8eabff]">
              JOIN
            </button>
  
          </div>
  
          {/* CARD 3 */}
          <div className="card flex items-center justify-between border-l-4 border-pink-400">
  
            <div className="flex items-center gap-4">
  
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKuO5WVSsM8VLYEcAPs7w27nCKSsb1t30fosdj3YK-Kv5s2ozEsnPcSYW5DBkygob4UygVH3QqH4U_MyY-_GiOz_QovjUTSZFa7aeXZGzuYVtmKZLAwkFjnHpEjAuGSNaoX8JuiMmkK6Lm6gT9h9GjgpF4_a28Ymr7CWC6Wbx48tB5h5nGVzeL5tt3SQuyNLWjje9vzCnlDjIje4QXRKepLcZuUGNhvdc7qUPR-s6BUdlxEOz-NSGCYXPA6x9IkZ3PQd5gUKk0pAUG"
                className="w-20 h-20 rounded-lg object-cover"
              />
  
              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Wed • 20:00 • Recovery
                </p>
  
                <h4 className="font-bold text-lg">
                  DEEP RECOVERY FLOW
                </h4>
  
                <p className="text-sm text-gray-400">
                  Coach Elena • 60 Minutes
                </p>
              </div>
            </div>
  
            <button className="px-4 py-2 border border-pink-400 text-xs rounded text-pink-400">
              JOIN
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  }