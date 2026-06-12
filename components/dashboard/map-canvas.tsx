"use client"

import { MapPin, ZoomIn, ZoomOut, Maximize2, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MapCanvas() {
  return (
    <div className="absolute inset-0 bg-slate-950">
      {/* Map Controls - Positioned in center-right area */}
      <div className="absolute top-1/2 right-[26rem] z-10 -translate-y-1/2 flex flex-col gap-2">
        <Button size="icon" variant="secondary" className="h-9 w-9 bg-slate-900/80 backdrop-blur-sm shadow-lg border border-slate-700/50 hover:bg-slate-800 text-slate-300 hover:text-white">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary" className="h-9 w-9 bg-slate-900/80 backdrop-blur-sm shadow-lg border border-slate-700/50 hover:bg-slate-800 text-slate-300 hover:text-white">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary" className="h-9 w-9 bg-slate-900/80 backdrop-blur-sm shadow-lg border border-slate-700/50 hover:bg-slate-800 text-slate-300 hover:text-white">
          <Compass className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary" className="h-9 w-9 bg-slate-900/80 backdrop-blur-sm shadow-lg border border-slate-700/50 hover:bg-slate-800 text-slate-300 hover:text-white">
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Coordinates Display - Bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-slate-900/80 backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-lg border border-slate-700/50">
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-emerald-400" />
            <span className="font-medium text-slate-300">0.4583° N, 127.8450° E</span>
          </div>
          <div className="h-4 w-px bg-slate-700" />
          <div>
            <span>Zoom: 12</span>
          </div>
          <div className="h-4 w-px bg-slate-700" />
          <div>
            <span>Scale: 1:50,000</span>
          </div>
        </div>
      </div>

      {/* Dark Satellite/Topographic Map Visual */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/80 to-slate-900">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148,163,184,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Simulated dark satellite imagery areas - distributed across full view */}
        
        {/* Forest regions - Dark emerald */}
        <div className="absolute top-[8%] left-[5%] w-48 h-36 rounded-2xl bg-emerald-900/40 border border-emerald-600/20 shadow-inner shadow-emerald-500/10" />
        <div className="absolute top-[15%] left-[35%] w-72 h-48 rounded-2xl bg-emerald-900/50 border border-emerald-500/30 shadow-inner shadow-emerald-500/20" />
        <div className="absolute top-[5%] right-[35%] w-40 h-32 rounded-2xl bg-emerald-900/35 border border-emerald-600/20 shadow-inner" />
        <div className="absolute bottom-[25%] left-[8%] w-56 h-40 rounded-2xl bg-emerald-900/45 border border-emerald-600/25 shadow-inner shadow-emerald-500/10" />
        
        {/* Degraded/Mining areas - Amber glow */}
        <div className="absolute top-[30%] left-[20%] w-44 h-36 rounded-2xl bg-amber-900/40 border border-amber-500/30 shadow-inner shadow-amber-500/20" />
        <div className="absolute top-[45%] left-[45%] w-64 h-44 rounded-2xl bg-amber-900/50 border-2 border-amber-500/40 shadow-lg shadow-amber-500/20 animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Critical degradation zones - Red glow */}
        <div className="absolute top-[55%] left-[38%] w-32 h-28 rounded-xl bg-red-900/50 border border-red-500/40 shadow-inner shadow-red-500/30 animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[40%] right-[45%] w-24 h-20 rounded-xl bg-red-900/40 border border-red-500/30 shadow-inner shadow-red-500/20 animate-pulse" style={{ animationDuration: '3.5s' }} />
        
        {/* Water bodies - Deep blue */}
        <div className="absolute bottom-[15%] left-[25%] w-80 h-24 rounded-full bg-blue-900/40 border border-blue-500/20 shadow-inner shadow-blue-500/10" />
        <div className="absolute top-[20%] right-[15%] w-48 h-20 rounded-full bg-blue-900/35 border border-blue-500/20 shadow-inner" />
        <div className="absolute bottom-[35%] right-[10%] w-36 h-16 rounded-full bg-blue-900/45 border border-cyan-500/20 shadow-inner shadow-cyan-500/10" />
        
        {/* More forest on right side */}
        <div className="absolute top-[12%] right-[5%] w-52 h-44 rounded-2xl bg-emerald-900/35 border border-emerald-600/20 shadow-inner" />
        <div className="absolute bottom-[10%] right-[25%] w-64 h-36 rounded-2xl bg-emerald-900/40 border border-emerald-500/20 shadow-inner shadow-emerald-500/10" />
        
        {/* IWIP Industrial Boundary - Cyan dashed */}
        <div className="absolute top-[28%] left-[30%] w-[35%] h-[45%] border-[3px] border-dashed border-cyan-500/50 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <div className="absolute -top-3 left-4 px-3 py-1 bg-cyan-950/90 backdrop-blur-sm rounded border border-cyan-500/40 text-xs text-cyan-300 font-medium shadow-lg shadow-cyan-500/20">
            IWIP Industrial Zone
          </div>
        </div>
        
        {/* Mining concession boundary - Amber dotted */}
        <div className="absolute top-[35%] left-[35%] w-[25%] h-[30%] border-2 border-dotted border-amber-500/50 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <div className="absolute -bottom-3 right-4 px-3 py-1 bg-amber-950/90 backdrop-blur-sm rounded border border-amber-500/40 text-xs text-amber-300 font-medium shadow-lg shadow-amber-500/20">
            Mining Concession
          </div>
        </div>

        {/* Scale bar */}
        <div className="absolute bottom-20 left-[22rem] flex items-center gap-2">
          <div className="flex">
            <div className="w-12 h-2 bg-slate-300" />
            <div className="w-12 h-2 bg-slate-900 border border-slate-300" />
            <div className="w-12 h-2 bg-slate-300" />
          </div>
          <span className="text-xs text-slate-400 font-medium">5 km</span>
        </div>
        
        {/* North Arrow */}
        <div className="absolute top-24 left-[22rem] flex flex-col items-center">
          <div className="text-xs font-bold text-slate-300">N</div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-slate-300" />
        </div>

        {/* Glow spots for visual interest */}
        <div className="absolute top-[45%] left-[50%] w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-[35%] left-[40%] w-24 h-24 bg-amber-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s' }} />
      </div>
    </div>
  )
}
