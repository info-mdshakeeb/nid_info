import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,

} from 'recharts';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >{percent ? `${(percent * 100).toFixed(0)}%` : ""}
    </text>
  );
};

const PiChart = ({ loadData }) => {
  console.log();

  const COLORS = ['#FFAF3D', '#1DCBA8', '#FF6A6A', '#948d8d',];
  const data = [
    { name: 'Pending', value: loadData?.YELLOW },
    { name: 'Confirmed', value: loadData?.GREEN },
    { name: 'Group C', value: loadData?.RED },
    { name: 'Group D', value: loadData?.WHITE },
  ];
  const isExits = loadData?.YELLOW || loadData?.GREEN || loadData?.RED || loadData?.WHITE;
  if (!isExits) return <div className="flex justify-center items-center h-[100px]">No Data Found</div>
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PiChart;
