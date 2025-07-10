import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import { FC } from 'react'

interface IBarChartBoxProps {
  title: string
  chartData: object[]
  dataKey: string
  color: string
}

const BarChartBox: FC<IBarChartBoxProps> = ({
  title,
  chartData,
  dataKey,
  color,
}) => {
  return (
    <div className="barChartBox">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: '#2a3447', borderRadius: '5px' }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartBox
