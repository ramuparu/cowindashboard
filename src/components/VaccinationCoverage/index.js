// Write your code here

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import {VaccineBYCoverageCon, VaccinationCoverageHead} from './styledComponents'

const VaccinationByCoverage = props => {
  const {last7DaysVaccination} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <VaccineBYCoverageCon>
      <VaccinationCoverageHead>Vaccination Coverage</VaccinationCoverageHead>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={last7DaysVaccination} margin={{top: 5}}>
          <XAxis dataKey="vaccineDate" tick={{stroke: '#cbd5e1'}} />
          <YAxis tickFormatter={DataFormatter} tick={{stroke: '#cbd5e1'}} />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar
            dataKey="dose1"
            fill="#5a8dee"
            name="Dose1"
            barSize="20%"
            width={1000}
            height={300}
          />
          <Bar
            dataKey="dose2"
            fill="#f54394"
            name="Dose2"
            barSize="20%"
            width={1000}
            height={300}
          />
        </BarChart>
      </ResponsiveContainer>
    </VaccineBYCoverageCon>
  )
}

export default VaccinationByCoverage
