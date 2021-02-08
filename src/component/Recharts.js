import React from 'react';
import {
    Tooltip,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    ResponsiveContainer,
    Legend,
  } from 'recharts';
 
const data1 = [
	{
		name: '2021', value: 10
	},
	{
		name: '2022', value: 40
	},
	{
		name: '2023', value: 60
	},
	{
		name: '2024', value: 37
	},
	{
		name: '2025', value: 28
	},
	{
		name: '2026', value: 43
	},
	{
		name: '2027', value: 64
	},
];
const data2 = [
	{
		name: '2020', value: 80
	},
	{
		name: '2021', value: 10
	},
	{
		name: '2022', value: 40
	},
	{
		name: '2023', value: 77
	},
	{
		name: '2024', value: 38
	},
	{
		name: '2025', value: 23
	},
	{
		name: '2026', value: 44
	},
];
const data3 = [
	{
		name: '2022', value: 40
	},
	{
		name: '2023', value: 30
	},
	{
		name: '2024', value: 20
	},
	{
		name: '2025', value: 27
	},
	{
		name: '2026', value: 18
	},
	{
		name: '2027', value: 23
	},
	{
		name: '2028', value: 34
	},
];

const Recharts = (props) => {
    const year = props.value;
    return(
        <div style={{textAlign: 'center',
            height: '65vh',
            width: '100%',
            marginTop: '20px'
          }}>
            <ResponsiveContainer
                  width="100%"
                  height="90%"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
            >
                <AreaChart
                    width={850}
                    height={600}
                    data={year == 2021 ? data1 : year == 2020 ? data2 : data3}
                > 
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area name="No. of Reports" type="monotone" dataKey="value" stroke="#191970" fill="#191970" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Recharts;