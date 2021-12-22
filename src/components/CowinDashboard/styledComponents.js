// Style your elements here

import styled from 'styled-components'

export const CowinDashboardPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover;
  background-color: #161625;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  @media (min-width: 768px) {
    padding-left: 120px;
    padding-right: 120px;
  }
`

export const CowinDashboardMainHeadCon = styled.div`
  display: flex;
  flex-direction: column;
`
export const CowinDashboardMainCon = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover;
  width: 100%;
`
export const CowinHeadCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export const CowinWebsiteLogoImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
  @media (min-width: 768px) {
    height: 50px;
    width: 50px;
  }
`

export const CowinSpanElementStyle = styled.span`
  color: #2cc6c6;
  font-size: 20px;
  font-family: 'roboto';
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`
export const CowinVaccinationPara = styled(CowinSpanElementStyle)`
  color: #94a3b8;
`

export const CowinFailureCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`

export const CowinFailureImg = styled.img`
  height: 300px;
  width: 300px;
  @media (min-width: 768px) {
    height: 350px;
    width: 600px;
  }
`
export const FailureHeading = styled(CowinSpanElementStyle)`
  color: #ffffff;
  margin-top: 30px;
  font-family: 'bee-serif';
`

export const LoaderCon = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
`
