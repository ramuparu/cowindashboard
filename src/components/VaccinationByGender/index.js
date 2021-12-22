// Write your code here

import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

import {VaccineBYGenderCon, VaccinationHead} from './styledComponents'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props

  const COLORS = ['#f54394', '#5a8dee', '#2cc6c6', '#FF8042']

  return (
    <VaccineBYGenderCon>
      <VaccinationHead>Vaccination by gender</VaccinationHead>
      <ResponsiveContainer width={350} height={300}>
        <PieChart>
          <Pie
            dataKey="count"
            startAngle={180}
            endAngle={0}
            data={vaccinationByGender}
            cx={200}
            cy={200}
            innerRadius="40%"
            outerRadius="70%"
          >
            {vaccinationByGender.map((entry, mainIndex) => (
              <Cell
                fill={COLORS[mainIndex % COLORS.length]}
                name={entry.gender}
              />
            ))}
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </VaccineBYGenderCon>
  )
}

export default VaccinationByGender
