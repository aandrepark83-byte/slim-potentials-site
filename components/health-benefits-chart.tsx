"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const healthBenefitsData = [
  { benefit: "Energy Levels", before: 45, after: 85, improvement: 89 },
  { benefit: "Focus & Clarity", before: 40, after: 80, improvement: 100 },
  { benefit: "Recovery Time", before: 35, after: 75, improvement: 114 },
  { benefit: "Stress Management", before: 30, after: 70, improvement: 133 },
  { benefit: "Overall Wellness", before: 50, after: 90, improvement: 80 },
]

const chartConfig = {
  before: {
    label: "Before Slim Potentials",
    color: "#374151",
  },
  after: {
    label: "After Slim Potentials",
    color: "#10b981",
  },
}

export function HealthBenefitsChart() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Proven Health Benefits</h3>
        <p className="text-gray-600">Customer-reported improvements after 30 days of using Slim Potentials</p>
      </div>

      <ChartContainer config={chartConfig} className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={healthBenefitsData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="benefit"
              tick={{ fill: "#374151", fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis
              tick={{ fill: "#374151", fontSize: 12 }}
              label={{
                value: "Satisfaction Score (%)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fill: "#374151" },
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="before" fill="var(--color-before)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="after" fill="var(--color-after)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-700">25,000+</div>
          <div className="text-sm text-gray-600">Satisfied Customers</div>
        </div>
        <div className="bg-emerald-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-emerald-600">96%</div>
          <div className="text-sm text-gray-600">Would Recommend</div>
        </div>
      </div>
    </div>
  )
}
