import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts'
import { radarData } from '../data/skills'

export default function RadarCard() {
  return (
    <div className="card p-5 sm:p-6">
      <h3 className="text-xl font-bold">Tool Proficiency</h3>
      <p className="mt-1 text-sm text-ink-soft">Self-assessed proficiency across my core analytics tools.</p>
      <div className="mt-2 h-[270px] w-full sm:h-[310px]" role="img" aria-label={`Radar chart: ${radarData.map((d) => `${d.tool} ${d.value}%`).join(', ')}`}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData} outerRadius="68%" margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
            <defs>
              <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#36DDF5" stopOpacity={0.55} />
                <stop offset="100%" stopColor="#A855F7" stopOpacity={0.45} />
              </linearGradient>
            </defs>
            <PolarGrid stroke="rgba(130,140,255,0.25)" />
            <PolarAngleAxis dataKey="tool" tick={{ fill: '#C9D0F5', fontSize: 12, fontWeight: 600 }} />
            <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
            <Tooltip
              formatter={(v) => [`${String(v)}%`, 'Proficiency']}
              contentStyle={{ background: '#101321', border: '1px solid rgba(120,130,255,.35)', borderRadius: 12, color: '#F5F6FF' }}
              itemStyle={{ color: '#36DDF5' }}
            />
            <Radar dataKey="value" stroke="#5B8CFF" strokeWidth={2} fill="url(#radarFill)" dot={{ r: 3, fill: '#36DDF5' }} animationDuration={1200} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
