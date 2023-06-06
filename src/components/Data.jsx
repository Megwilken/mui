import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export const Data = () => {
  const careersCount = 8; // Total count of career items
  const skillsCount = 5; // Total count of skills items
  const opportunitiesCount = 10; // Total count of opportunities items

  const data = [
    { name: 'Careers', value: careersCount },
    { name: 'Skills', value: skillsCount },
    { name: 'Opportunities', value: opportunitiesCount },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
    <div>
      <h3>Data Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
              const RADIAN = Math.PI / 180;
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="#8884d8"
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                >
                  {`${data[index].name} (${(percent * 100).toFixed(0)}%)`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
