
// const Portfolio = require('../../database/models/portfolio')

exports.portfolioQueries = {
    portfolio: (root,{id}, ctx) => {
		return ctx.models.Portfolio.getById(id)
		// return Portfolio.findById(id)
        // const portfolio = data.portfolios.find(item => item._id === id)
        // return portfolio
    },
    portfolios: (root, args, ctx) => {
		return ctx.models.Portfolio.getAll()
        // return Portfolio.find({})
    }
}

exports.portfolioMutation = {
	createPortfolio: async(root,{input}, ctx) => {
		const createdPortfolio = await ctx.models.Portfolio.create(input)
		// const createdPortfolio = await Portfolio.create(input)
		return createdPortfolio
        // const _id = require('crypto').randomBytes(10).toString('hex');
        // const newPortfolio = {...input}
        // newPortfolio._id = _id
        // data.portfolios.push(newPortfolio)
        // return newPortfolio
	},
	updatePortfolio: async(root, {id, input}, ctx) => {
		const updatedPortfolio = await ctx.models.Portfolio.findOneAndUpdate(id,input)
		// const updatedPortfolio = await Portfolio.findOneAndUpdate({_id:id}, input, {new:true})
		return updatedPortfolio
		// const index = data.portfolios.findIndex(p=>p._id === id)
		// const oldPortfolio = data.portfolios[index]
		// const newPortfolio = {...oldPortfolio, ...input}
		// data.portfolios[index] = newPortfolio
		// return newPortfolio
	},
	deletePortfolio: async(root, {id}, ctx) => {
		const deletedPortfolio = await ctx.models.Portfolio.findAndDelete(id)
		// const deletedPortfolio = await Portfolio.findOneAndRemove({_id: id})
		return deletedPortfolio._id
		// const index = data.portfolios.findIndex(p=>p._id === id)
		// data.portfolios.splice(index, 1)
		// return id;
	}
}