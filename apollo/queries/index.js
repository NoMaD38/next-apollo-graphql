import {gql} from '@apollo/client'

export const GET_PORTFOLIO = gql`
    query Portfolio($id: ID) {
        portfolio(id: $id) {
        _id 
        title 
        company 
        companyWebsite 
        location 
        jobTitle 
        description
        startDate
        endDate
        }
    }
`
export const GET_PORTFOLIOS = gql`
    query Portfolios {
        portfolios {
        _id 
        title 
        company 
        companyWebsite 
        location 
        jobTitle 
        description
        startDate
        endDate
        }
  }
`

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio {
    createPortfolio(input: {
        title: "Job in RUSSIA",
        company: "YA",
        companyWebsite: "www.ya.ru",
        location: "RUSSIA, IRK",
        jobTitle: "Software Engineer",
        description: "blablabla",
        startDate: "2012-12-12T23:59Z",
        endDate: "2013-11-14T23:59Z"
    }){
      _id 
      title 
      company 
      companyWebsite 
      location 
      jobTitle 
      description
      startDate
      endDate
    }
  }
  `

  export const UPDATE_PORTFOLIO = gql`
  mutation UpdatePortfolio($id: ID) {
    updatePortfolio(id: $id input: {
        title: "UPDATE Job in RUSSIA",
        company: "YA",
        companyWebsite: "www.ya.ru",
        location: "RUSSIA, IRK",
        jobTitle: "Software Engineer",
        description: "blablabla",
        startDate: "2012-12-12T23:59Z",
        endDate: "2013-11-14T23:59Z"
    }){
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }
  `

  export const DELETE_PORTFOLIO = gql`
  mutation deletePortfolio($id: ID) {
    deletePortfolio(id:$id)
  }
  `
