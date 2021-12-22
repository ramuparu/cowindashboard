// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  CowinDashboardPage,
  CowinDashboardMainCon,
  CowinHeadCard,
  CowinWebsiteLogoImg,
  CowinSpanElementStyle,
  CowinVaccinationPara,
  CowinFailureCon,
  CowinFailureImg,
  CowinDashboardMainHeadCon,
  FailureHeading,
  LoaderCon,
} from './styledComponents'

import VaccinationByAge from '../VaccinationByAge'

import VaccinationByGender from '../VaccinationByGender'

import VaccinationByCoverage from '../VaccinationCoverage'

const apiStatusObj = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'Failure',
}

class CowinDashboard extends Component {
  state = {
    vaccinationDataItems: {},
    apiStatus: apiStatusObj.initial,
  }

  componentDidMount() {
    this.whenCovidVaccinationDataApiCall()
  }

  whenCovidVaccinationDataApiCall = async () => {
    this.setState({apiStatus: apiStatusObj.inProgress})

    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(vaccinationDataApiUrl)

    if (response.ok) {
      const data = await response.json()

      const updateVaccinationData = {
        last7daysVaccineKeysData: data.last_7_days_vaccination.map(
          eachVaccination => ({
            dose1: eachVaccination.dose_1,
            dose2: eachVaccination.dose_2,
            vaccineDate: eachVaccination.vaccine_date,
          }),
        ),
        vaccinationAgeItems: data.vaccination_by_age.map(eachAge => ({
          age: eachAge.age,
          count: eachAge.count,
        })),
        vaccinationGenderItems: data.vaccination_by_gender.map(eachGender => ({
          count: eachGender.count,
          gender: eachGender.gender,
        })),
      }

      this.setState({
        apiStatus: apiStatusObj.success,
        vaccinationDataItems: updateVaccinationData,
      })
    } else {
      this.setState({apiStatus: apiStatusObj.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderCon data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </LoaderCon>
  )

  renderFailureView = () => (
    <CowinFailureCon>
      <CowinFailureImg
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <FailureHeading as="h1">Something went wrong</FailureHeading>
    </CowinFailureCon>
  )

  renderSuccessView = () => {
    const {vaccinationDataItems} = this.state

    const {
      last7daysVaccineKeysData,
      vaccinationAgeItems,
      vaccinationGenderItems,
    } = vaccinationDataItems

    return (
      <>
        <VaccinationByCoverage
          last7DaysVaccination={last7daysVaccineKeysData}
        />

        <VaccinationByGender vaccinationByGender={vaccinationGenderItems} />
        <VaccinationByAge vaccinationByAge={vaccinationAgeItems} />
      </>
    )
  }

  renderComponentsAsPerApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusObj.inProgress:
        return this.renderLoadingView()
      case apiStatusObj.failure:
        return this.renderFailureView()
      case apiStatusObj.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <CowinDashboardPage>
        <CowinDashboardMainHeadCon>
          <CowinHeadCard>
            <CowinWebsiteLogoImg
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <CowinSpanElementStyle>co-WIN</CowinSpanElementStyle>
          </CowinHeadCard>

          <CowinVaccinationPara as="h1">
            coWIN Vaccination in india
          </CowinVaccinationPara>
        </CowinDashboardMainHeadCon>
        <CowinDashboardMainCon>
          {this.renderComponentsAsPerApiStatus()}
        </CowinDashboardMainCon>
      </CowinDashboardPage>
    )
  }
}

export default CowinDashboard
