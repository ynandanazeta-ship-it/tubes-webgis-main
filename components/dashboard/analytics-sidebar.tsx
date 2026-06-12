"use client"

export function AnalyticsSidebar() {
  return (
    <div className="w-80 bg-slate-950/80 backdrop-blur-xl p-5 rounded-2xl border border-slate-800/60 text-white flex flex-col gap-4 h-fit select-none shadow-2xl">
      
      {/* HEADER PANEL */}
      <div>
        <h2 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
          Komposisi Lahan 2025
        </h2>
        <p className="text-[11px] text-slate-500 mt-0.5">Persentase Tutupan Wilayah Weda</p>
      </div>

      <hr className="border-slate-800/40" />

      {/* VISUALISASI PIE/DONUT CHART (SVG MURNI) */}
      <div className="flex items-center justify-center relative py-2">
        <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 36 36">
          {/* Background base */}
          <circle cx="18" cy="18" r="15.915" fill="none" stroke="#1e293b" strokeWidth="4" />
          
          {/* Vegetasi Kerapatan Tinggi (45%) -> strokeDasharray="45 55" offset="0" */}
          <circle cx="18" cy="18" r="15.915" fill="none" stroke="#10b981" strokeWidth="4" 
                  strokeDasharray="45 55" strokeDashoffset="0" />
          
          {/* Lahan Terbuka / Tambang (35%) -> strokeDasharray="35 65" offset="-45" */}
          <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f59e0b" strokeWidth="4" 
                  strokeDasharray="35 65" strokeDashoffset="-45" />
          
          {/* Area Industri & Terbangun (15%) -> strokeDasharray="15 85" offset="-80" */}
          <circle cx="18" cy="18" r="15.915" fill="none" stroke="#64748b" strokeWidth="4" 
                  strokeDasharray="15 85" strokeDashoffset="-80" />
          
          {/* Badan Air (5%) -> strokeDasharray="5 95" offset="-95" */}
          <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3b82f6" strokeWidth="4" 
                  strokeDasharray="5 95" strokeDashoffset="-95" />
        </svg>
        
        {/* Angka di tengah lingkaran */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Total Area</span>
          <span className="text-sm font-bold text-slate-200">100%</span>
        </div>
      </div>

      {/* LEGENDA / KETERANGAN WARNA */}
      <div className="flex flex-col gap-2 bg-slate-900/30 p-3 rounded-xl border border-slate-800/40">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
            <span className="text-slate-400">Vegetasi Lebat</span>
          </div>
          <span className="font-semibold text-slate-300">45%</span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
            <span className="text-slate-400">Lahan Terbuka / Tambang</span>
          </div>
          <span className="font-semibold text-slate-300">35%</span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-500" />
            <span className="text-slate-400">Area Industri</span>
          </div>
          <span className="font-semibold text-slate-300">15%</span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-500" />
            <span className="text-slate-400">Badan Air</span>
          </div>
          <span className="font-semibold text-slate-300">5%</span>
        </div>
      </div>

    </div>
  )
}