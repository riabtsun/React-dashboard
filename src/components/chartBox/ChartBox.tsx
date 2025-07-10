import { Link } from 'react-router-dom'
import { ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts'
import './chartBox.scss'
import { FC } from 'react'

interface IChartBoxProps {
  color: string
  icon: string
  title: string
  dataKey: string
  number: number | string
  percentage: number
  chartData: object[]
}

const ChartBox: FC<IChartBoxProps> = ({
  title,
  number,
  icon,
  chartData,
  dataKey,
  color,
  percentage,
}) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to="/" style={{ color: color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
                labelStyle={{ display: 'none' }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentaige"
            style={{ color: percentage < 0 ? 'tomato' : 'limegreen' }}
          >
            {percentage}
          </span>
          <span className="duration">This months</span>
        </div>
      </div>
    </div>
  )
}

export default ChartBox
