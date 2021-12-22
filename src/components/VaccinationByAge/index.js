// Write your code here

import {PieChart, Pie, ResponsiveContainer, Cell, Legend} from 'recharts'

import {VaccineBYAgeCon, VaccinationHead} from './styledComponents'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props

  console.log(vaccinationByAge)

  const COLORS = ['#2d87bb', '#a3df9f', '#64c2a6']

  return (
    <VaccineBYAgeCon>
      <VaccinationHead>Vaccination by age</VaccinationHead>
      <ResponsiveContainer width={350} height={300}>
        <PieChart>
          <Pie
            dataKey="count"
            data={vaccinationByAge}
            cx="70%"
            cy="40%"
            innerRadius="40%"
            outerRadius="70%"
            startAngle={0}
            endAngle={360}
          >
            {vaccinationByAge.map((every, index) => (
              <Cell fill={COLORS[index % COLORS.length]} name={every.age} />
            ))}
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </VaccineBYAgeCon>
  )
}

export default VaccinationByAge
