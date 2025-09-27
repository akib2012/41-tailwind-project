import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ResultData = [
  { "id": 1, "name": "Aarav", "physics": 78, "chemistry": 82, "math": 91 },
  { "id": 2, "name": "Sophia", "physics": 85, "chemistry": 79, "math": 88 },
  { "id": 3, "name": "Ethan", "physics": 92, "chemistry": 87, "math": 95 },
  { "id": 4, "name": "Mia", "physics": 74, "chemistry": 68, "math": 72 },
  { "id": 5, "name": "Noah", "physics": 88, "chemistry": 90, "math": 84 },
  { "id": 6, "name": "Liam", "physics": 69, "chemistry": 73, "math": 65 },
  { "id": 7, "name": "Olivia", "physics": 95, "chemistry": 92, "math": 98 },
  { "id": 8, "name": "Lucas", "physics": 81, "chemistry": 76, "math": 80 },
  { "id": 9, "name": "Emma", "physics": 90, "chemistry": 85, "math": 89 },
  { "id": 10, "name": "James", "physics": 77, "chemistry": 72, "math": 70 }
];

const Resultchart = () => {
  return (
    <div>
      <LineChart width={600} height={300} data={ResultData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Lines for each subject */}
        <Line type="monotone" dataKey="physics" stroke="#8884d8" />
        <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" />
        <Line type="monotone" dataKey="math" stroke="#ff7300" />
      </LineChart>
    </div>
  );
};

export default Resultchart;
