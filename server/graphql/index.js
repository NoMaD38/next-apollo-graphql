const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');

//GraphModels
const Portfolio = require('./models/Portfolio');

//resolvers
const { portfolioQueries, portfolioMutation } = require('./resolvers');

//types
const { portfolioTypes } = require('./types');

exports.createApolloServer = () => {
	//construct shema use Graphql
	const typeDefs = gql`
	${portfolioTypes}
    type Query {
      portfolio(id:ID): Portfolio
      portfolios: [Portfolio]
	}
	
	type Mutation {
		createPortfolio(input: PortfolioInput): Portfolio
		updatePortfolio(id: ID, input: PortfolioInput): Portfolio
		deletePortfolio(id: ID): ID
	}
  `;

	//root provider a resolver for API
	const resolvers = {
		Query: {
			...portfolioQueries
		},
		Mutation: {
			...portfolioMutation
		}
	};

	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
		context: () => ({
			models: {
				Portfolio: new Portfolio(mongoose.model('Portfolio'))
			}
		})
    });
    
    return apolloServer
};
