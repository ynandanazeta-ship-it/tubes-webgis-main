"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Leaf, TreeDeciduous, Factory, Waves, Sparkles } from "lucide-react"

interface HomescreenProps {
  onEnterDashboard: () => void
}

export function Homescreen({ onEnterDashboard }: HomescreenProps) {
  return (
    <div className="min-h-screen overflow-y-auto py-6 flex flex-col justify-center items-center bg-black">
      {/* Deep Space Background with Stars */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950 pointer-events-none" />
      
      {/* Animated Star Field */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 17 + 7) % 100}%`,
              top: `${(i * 23 + 11) % 100}%`,
              width: `${1 + (i % 3)}px`,
              height: `${1 + (i % 3)}px`,
              opacity: 0.3 + (i % 5) * 0.1,
              animation: `twinkle ${2 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${(i % 20) * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula Glow Effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-teal-900/15 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-6 w-full max-w-3xl">
        {/* Academic Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-emerald-400" />
          <span className="text-sm text-emerald-300 font-medium">PWK ITS 2026 Research Initiative - Kelompok 2 Kelas C</span>
        </div>

        {/* 3D Earth Globe Visual - Compact */}
        <div className="relative">
          <div className="relative h-52 w-52 md:h-60 md:w-60">
            {/* Outer Atmospheric Glow */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute -inset-3 rounded-full bg-emerald-400/10 blur-2xl" />
            
            {/* Globe Base - Dark Ocean - ROTATING CONTAINER */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 shadow-2xl shadow-cyan-900/30 border border-cyan-500/20 animate-[spin_60s_linear_infinite]">
              {/* Globe Grid Lines - Latitude */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={`lat-${i}`}
                    className="absolute left-0 right-0 border-t border-cyan-400/30"
                    style={{ top: `${15 + i * 12}%` }}
                  />
                ))}
                {/* Longitude lines */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`lon-${i}`}
                    className="absolute top-0 bottom-0 border-l border-cyan-400/20"
                    style={{ 
                      left: `${8 + i * 7.5}%`,
                      transform: `scaleX(${0.2 + Math.sin((i / 12) * Math.PI) * 0.8})`,
                    }}
                  />
                ))}
              </div>

              {/* Indonesia/Halmahera Region - Highlighted */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {/* Indonesian Archipelago */}
                <div className="absolute top-[45%] left-[55%] w-16 h-6 bg-emerald-500/60 rounded-full blur-sm transform -rotate-12" />
                <div className="absolute top-[50%] left-[60%] w-10 h-5 bg-emerald-400/50 rounded-full blur-sm" />
                <div className="absolute top-[42%] left-[62%] w-7 h-4 bg-emerald-500/55 rounded-full blur-sm" />
                
                {/* Weda Bay / Halmahera - Pulsing Highlight */}
                <div className="absolute top-[48%] left-[65%] w-5 h-5 bg-amber-500/70 rounded-full blur-sm animate-pulse" />
                
                {/* RED DOT MARKER - INSIDE ROTATING CONTAINER */}
                <div className="absolute top-[46%] left-[66%]">
                  <div className="relative">
                    <div className="absolute inset-0 h-3 w-3 rounded-full bg-red-500 animate-ping opacity-75" />
                    <div className="relative h-3 w-3 rounded-full bg-red-500 border-2 border-white/70 shadow-lg shadow-red-500/50" />
                  </div>
                </div>
                
                {/* Other landmasses for context */}
                <div className="absolute top-[30%] left-[20%] w-12 h-10 bg-emerald-600/30 rounded-full blur-md" />
                <div className="absolute top-[35%] left-[70%] w-10 h-8 bg-emerald-600/25 rounded-full blur-md" />
                <div className="absolute bottom-[30%] left-[40%] w-20 h-12 bg-emerald-600/20 rounded-full blur-md" />
              </div>

              {/* Globe Specular Highlight */}
              <div className="absolute top-3 left-5 w-12 h-12 bg-white/5 rounded-full blur-xl" />
            </div>

            {/* Orbital Ring */}
            <div className="absolute inset-[-10%] rounded-full border border-emerald-500/20 animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
            </div>

            {/* Orbiting Icons */}
            <div className="absolute inset-[-12%] animate-[spin_25s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-8 w-8 rounded-full bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center border border-emerald-400/40 shadow-lg shadow-emerald-500/20">
                  <TreeDeciduous className="h-4 w-4 text-emerald-400" />
                </div>
              </div>
            </div>
            
            <div className="absolute inset-[-12%] animate-[spin_30s_linear_infinite_reverse]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="h-8 w-8 rounded-full bg-amber-500/20 backdrop-blur-sm flex items-center justify-center border border-amber-400/40 shadow-lg shadow-amber-500/20">
                  <Factory className="h-4 w-4 text-amber-400" />
                </div>
              </div>
            </div>

            <div className="absolute inset-[-12%] animate-[spin_35s_linear_infinite]">
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                <div className="h-8 w-8 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center border border-cyan-400/40 shadow-lg shadow-cyan-500/20">
                  <Waves className="h-4 w-4 text-cyan-400" />
                </div>
              </div>
            </div>

            {/* Center Globe Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-slate-900/90 backdrop-blur-sm flex items-center justify-center border border-emerald-400/40 shadow-xl shadow-emerald-500/30">
                <Globe className="h-6 w-6 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Crisis Indicators */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-emerald-300 font-medium">Forest</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
              <span className="text-[10px] text-red-300 font-medium">Degradation</span>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center space-y-2 max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-white">Weda </span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Eco-Spatial
            </span>
            <span className="text-white"> Center</span>
          </h1>
          
          <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            Monitoring ecological impacts of industrial expansion in Weda Bay through 
            Remote Sensing Ecological Index (RSEI) analysis
          </p>
        </div>

        {/* Stats Preview - Sleek Counter Widgets */}
        <div className="flex items-center justify-center gap-4">
          <div className="text-center px-4 py-2.5 rounded-xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
            <div className="text-xl font-bold text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]">-34%</div>
            <div className="text-[10px] text-slate-500">RSEI Decline</div>
          </div>
          <div className="text-center px-4 py-2.5 rounded-xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
            <div className="text-xl font-bold text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">7,167</div>
            <div className="text-[10px] text-slate-500">Ha Deforested</div>
          </div>
          <div className="text-center px-4 py-2.5 rounded-xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
            <div className="text-xl font-bold text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">2020-26</div>
            <div className="text-[10px] text-slate-500">Analysis Period</div>
          </div>
        </div>

        {/* CTA Button - Glowing */}
        <Button
          onClick={onEnterDashboard}
          size="lg"
          className="group relative z-50 h-12 px-8 text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border-0 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]"
        >
          <span className="flex items-center gap-2">
            Explore Dashboard
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Button>

        {/* Footer Note */}
        <p className="text-[10px] text-slate-600 text-center max-w-md">
          Utilizing Landsat 8/9 and Sentinel-2 imagery for comprehensive environmental assessment
        </p>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}
