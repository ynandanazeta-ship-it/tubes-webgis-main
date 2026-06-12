"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText, Leaf } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-16 border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600/20 border border-emerald-500/30">
            <Leaf className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">
              Weda Ecological Monitoring System (RSEI Analysis)
            </h1>
            <p className="text-xs text-slate-400">
              PWK ITS 2026 Project — Regional Planning & Environmental Assessment
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 bg-slate-900/50 border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-slate-600"
          >
            <Download className="h-4 w-4" />
            Data Export
          </Button>
          <Button 
            size="sm" 
            className="gap-2 bg-emerald-600/80 hover:bg-emerald-500 text-white border-0 shadow-lg shadow-emerald-900/30"
          >
            <FileText className="h-4 w-4" />
            Report PDF
          </Button>
        </div>
      </div>
    </header>
  )
}
