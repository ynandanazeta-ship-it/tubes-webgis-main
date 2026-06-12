"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Satellite, MapPin, Circle } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const rseiIndicators = [
  { id: "ndvi", label: "NDVI", description: "Normalized Difference Vegetation Index (Greenness)", color: "#22c55e" },
  { id: "wet", label: "WET", description: "Wetness Component (Moisture)", color: "#06b6d4" },
  { id: "ndbsi", label: "NDBSI", description: "Normalized Difference Built-up Soil Index (Dryness)", color: "#f59e0b" },
  { id: "lst", label: "LST", description: "Land Surface Temperature", color: "#ef4444" },
]

const contextualOverlays = [
  { id: "iwip", label: "IWIP Industrial Boundary", description: "Indonesia Weda Bay Industrial Park" },
  { id: "mining", label: "Mining Concessions", description: "Active mining permit areas" },
]

const legendItems = [
  { label: "Excellent (0.8-1.0)", color: "#22c55e" },
  { label: "Good (0.6-0.8)", color: "#4ade80" },
  { label: "Moderate (0.4-0.6)", color: "#facc15" },
  { label: "Poor (0.2-0.4)", color: "#f97316" },
  { label: "Bad (0.0-0.2)", color: "#ef4444" },
]

export function LayerSidebar() {
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>(["ndvi", "lst"])
  const [overlays, setOverlays] = useState<Record<string, boolean>>({
    iwip: true,
    mining: false,
  })

  const toggleIndicator = (id: string) => {
    setSelectedIndicators((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const toggleOverlay = (id: string) => {
    setOverlays((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <aside className="w-80 border-r border-slate-800/50 bg-slate-950/50 backdrop-blur-xl shadow-2xl">
      <ScrollArea className="h-full">
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
            <Layers className="h-4 w-4 text-emerald-400" />
            Layer Management
          </div>

          <Accordion type="multiple" defaultValue={["rsei", "overlays"]} className="space-y-2">
            <AccordionItem value="rsei" className="border border-slate-800/70 rounded-lg bg-slate-900/50 backdrop-blur-sm overflow-hidden">
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-slate-800/30 text-slate-200">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Satellite className="h-4 w-4 text-emerald-400" />
                  RSEI Satellite Indicators
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-3">
                  {rseiIndicators.map((indicator) => (
                    <div key={indicator.id} className="flex items-start gap-3">
                      <Checkbox
                        id={indicator.id}
                        checked={selectedIndicators.includes(indicator.id)}
                        onCheckedChange={() => toggleIndicator(indicator.id)}
                        className="mt-0.5 border-slate-600 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                      />
                      <div className="flex-1 min-w-0">
                        <Label
                          htmlFor={indicator.id}
                          className="flex items-center gap-2 text-sm font-medium text-slate-200 cursor-pointer"
                        >
                          <Circle
                            className="h-2.5 w-2.5 flex-shrink-0 drop-shadow-[0_0_4px_currentColor]"
                            fill={indicator.color}
                            stroke={indicator.color}
                          />
                          {indicator.label}
                        </Label>
                        <p className="text-xs text-slate-500 mt-0.5">{indicator.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="overlays" className="border border-slate-800/70 rounded-lg bg-slate-900/50 backdrop-blur-sm overflow-hidden">
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-slate-800/30 text-slate-200">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  Contextual Overlays
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-4">
                  {contextualOverlays.map((overlay) => (
                    <div key={overlay.id} className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <Label
                          htmlFor={overlay.id}
                          className="text-sm font-medium text-slate-200 cursor-pointer"
                        >
                          {overlay.label}
                        </Label>
                        <p className="text-xs text-slate-500 mt-0.5">{overlay.description}</p>
                      </div>
                      <Switch
                        id={overlay.id}
                        checked={overlays[overlay.id]}
                        onCheckedChange={() => toggleOverlay(overlay.id)}
                        className="data-[state=checked]:bg-emerald-600"
                      />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Card className="border-slate-800/70 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader className="pb-2 pt-3 px-4">
              <CardTitle className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                RSEI Classification Legend
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-3">
              <div className="space-y-1.5">
                {legendItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div
                      className="h-3 w-6 rounded-sm shadow-[0_0_8px_currentColor]"
                      style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}40` }}
                    />
                    <span className="text-xs text-slate-400">{item.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </aside>
  )
}
