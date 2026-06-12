"use client"
import { useState } from "react"
import { BarChart, LineChart } from "lucide-react" // Sesuaikan dengan library chart Anda jika ada

export default function WedaDashboard() {
  // 1. STATE UNTUK FILTER RSEI LEVEL (Fitur Baru Anda)
  const [activeLevels, setActiveLevels] = useState({
    excellent: true,
    good: true,
    moderate: true,
    poor: true,
    bad: true,
  })

  // 2. STATE UNTUK SATELLITE INDICATORS & CONTEXTUAL OVERLAYS (Gambar 2)
  const [indicators, setIndicators] = useState({ ndvi: true, wet: false, ndbsi: false, lst: true })
  const [overlays, setOverlays] = useState({ iwipBoundary: true, miningConcessions: false })

  // Fungsi pengirim pesan filter ke iframe peta
  const toggleLevel = (level: string) => {
    const updatedLevels = { ...activeLevels, [level]: !activeLevels[level as keyof typeof activeLevels] }
    setActiveLevels(updatedLevels)

    const iframe = document.querySelector("iframe")
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({
        type: "FILTER_RSEI_LEVEL",
        levels: updatedLevels
      }, "*")
    }
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-[#020617] text-slate-100 font-sans overflow-hidden">
      
      {/* ================= HEADER UTAMA ================= */}
      <header className="flex items-center justify-between px-6 py-4 bg-slate-900/60 border-b border-slate-800/80 backdrop-blur-md z-20">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-xl font-bold">🍃</span>
            <h1 className="text-lg font-bold tracking-tight text-white">Weda Ecological Monitoring System (RSEI Analysis)</h1>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">PWK ITS 2026 Project — Regional Planning & Environmental Assessment</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700/50 rounded-lg hover:bg-slate-700 transition">Data Export</button>
          <button className="px-3 py-1.5 text-xs font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition">Report PDF</button>
        </div>
      </header>

      {/* ================= AREA KONTEN UTAMA (3 KOLOM) ================= */}
      <div className="flex flex-1 w-full h-full relative overflow-hidden">
        
        {/* PANEL LEFT: LAYER MANAGEMENT & FILTER */}
        <aside className="w-80 h-full bg-slate-950/80 border-r border-slate-800/50 p-4 flex flex-col gap-5 overflow-y-auto z-10 backdrop-blur-md">
          
          {/* Section 1: RSEI Satellite Indicators */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">RSEI Satellite Indicators</h3>
            <div className="flex flex-col gap-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800/40">
              <label className="flex items-start gap-3 cursor-pointer text-xs">
                <input type="checkbox" checked={indicators.ndvi} onChange={() => setIndicators({...indicators, ndvi: !indicators.ndvi})} className="mt-0.5 accent-emerald-500" />
                <div>
                  <span className="font-semibold text-white block">NDVI</span>
                  <span className="text-slate-400 text-[11px]">Normalized Difference Vegetation Index (Greenness)</span>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer text-xs">
                <input type="checkbox" checked={indicators.wet} onChange={() => setIndicators({...indicators, wet: !indicators.wet})} className="mt-0.5 accent-blue-500" />
                <div>
                  <span className="font-semibold text-white block">WET</span>
                  <span className="text-slate-400 text-[11px]">Wetness Component (Moisture)</span>
                </div>
              </label>
            </div>
          </div>

          {/* Section 2: Contextual Overlays */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contextual Overlays</h3>
            <div className="flex flex-col gap-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800/40">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-white block">IWIP Industrial Boundary</span>
                  <span className="text-slate-400 text-[11px]">Indonesia Weda Bay Industrial Park</span>
                </div>
                <input type="checkbox" checked={overlays.iwipBoundary} onChange={() => setOverlays({...overlays, iwipBoundary: !overlays.iwipBoundary})} className="accent-emerald-500" />
              </div>
            </div>
          </div>

          {/* Section 3: RSEI Classification Filters (Tombol Interaktif Baru Anda) */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">RSEI CLASSIFICATION FILTERS</h3>
            <div className="flex flex-col gap-2 bg-slate-900/50 p-3 rounded-xl border border-slate-800/60">
              
              <button onClick={() => toggleLevel("excellent")} className={`flex items-center justify-between w-full text-xs p-1.5 rounded-lg transition-all ${activeLevels.excellent ? "bg-slate-800/60 text-white" : "opacity-40 text-slate-500"}`}>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-2.5 rounded-sm bg-[#10b981]" />
                  <span>Excellent (0.8 - 1.0)</span>
                </div>
                <span className="text-[10px] font-bold">{activeLevels.excellent ? "ON" : "OFF"}</span>
              </button>

              <button onClick={() => toggleLevel("good")} className={`flex items-center justify-between w-full text-xs p-1.5 rounded-lg transition-all ${activeLevels.good ? "bg-slate-800/60 text-white" : "opacity-40 text-slate-500"}`}>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-2.5 rounded-sm bg-[#4ade80]" />
                  <span>Good (0.6 - 0.8)</span>
                </div>
                <span className="text-[10px] font-bold">{activeLevels.good ? "ON" : "OFF"}</span>
              </button>

              <button onClick={() => toggleLevel("moderate")} className={`flex items-center justify-between w-full text-xs p-1.5 rounded-lg transition-all ${activeLevels.moderate ? "bg-slate-800/60 text-white" : "opacity-40 text-slate-500"}`}>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-2.5 rounded-sm bg-[#eab308]" />
                  <span>Moderate (0.4 - 0.6)</span>
                </div>
                <span className="text-[10px] font-bold">{activeLevels.moderate ? "ON" : "OFF"}</span>
              </button>

              <button onClick={() => toggleLevel("poor")} className={`flex items-center justify-between w-full text-xs p-1.5 rounded-lg transition-all ${activeLevels.poor ? "bg-slate-800/60 text-white" : "opacity-40 text-slate-500"}`}>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-2.5 rounded-sm bg-[#f97316]" />
                  <span>Poor (0.2 - 0.4)</span>
                </div>
                <span className="text-[10px] font-bold">{activeLevels.poor ? "ON" : "OFF"}</span>
              </button>

              <button onClick={() => toggleLevel("bad")} className={`flex items-center justify-between w-full text-xs p-1.5 rounded-lg transition-all ${activeLevels.bad ? "bg-slate-800/60 text-white" : "opacity-40 text-slate-500"}`}>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-2.5 rounded-sm bg-[#ef4444]" />
                  <span>Bad (0.0 - 0.2)</span>
                </div>
                <span className="text-[10px] font-bold">{activeLevels.bad ? "ON" : "OFF"}</span>
              </button>

            </div>
          </div>
        </aside>

        {/* PETA TENGAH: MAP VIEW (Fills the center space) */}
        <main className="flex-1 h-full bg-slate-950 relative">
          {/* Ganti URL src dengan peta Leaflet/QGIS2Web Anda */}
          <iframe 
           src="/peta-weda/index.html" 
    className="w-full height-full border-none w-full h-full"
    title="Weda Map"
          />
        </main>

        {/* PANEL RIGHT: ANALYTICS PANEL (Mengembalikan Panel Kanan Gambar 2) */}
        <aside className="w-80 h-full bg-slate-950/80 border-l border-slate-800/50 p-4 flex flex-col gap-4 overflow-y-auto z-10 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Analytics Panel</h3>
            <span className="text-[10px] font-bold px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">Live Data</span>
          </div>

          {/* Cards Baris Atas */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/60">
              <span className="text-[10px] text-red-400 font-medium block mb-1">+12.3%</span>
              <span className="text-xl font-bold text-white block">57,627 <span className="text-xs font-normal text-slate-400">Ha</span></span>
              <span className="text-[10px] text-slate-400 font-medium">Mining Concessions</span>
            </div>
            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/60">
              <span className="text-[10px] text-red-400 font-medium block mb-1">+23.5%</span>
              <span className="text-xl font-bold text-white block">7,167 <span className="text-xs font-normal text-slate-400">Ha</span></span>
              <span className="text-[10px] text-slate-400 font-medium">Deforestation</span>
            </div>
          </div>

          {/* Grafik Trend Degradasi Ekologis */}
          <div className="flex flex-col gap-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800/40 mt-2">
            <span className="text-xs font-semibold text-white flex items-center gap-1.5">
              📈 Ecological Degradation Trend
            </span>
            <span className="text-[10px] text-slate-400">RSEI Index & Cumulative Deforestation (2020-2026)</span>
            
            {/* Placeholder Visual Grafik Area */}
            <div className="h-40 w-full bg-slate-950/50 rounded-lg border border-slate-800/50 mt-2 flex items-center justify-center text-xs text-slate-500">
              [ Tempatkan Chart JS / Recharts Anda Di Sini ]
            </div>
          </div>
        </aside>

      </div>
    </div>
  )
}