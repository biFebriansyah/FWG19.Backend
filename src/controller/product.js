const ctrl = {}
const model = require('../model/products')
const respone = require('../utils/respon')

ctrl.fetchData = async (req, res) => {
    try {
        const result = await model.getData()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error.message)
    }
}

ctrl.fetchBy = async (req, res) => {
    try {
        const params = {
            page: req.query.page || 1,
            limit: req.query.limit || 5,
            orderBy: req.query.orderBy || 'created_at',
            search: req.query.search
        }
        const result = await model.getBy(params)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error.message)
    }
}

ctrl.fetchBySlug = async (req, res) => {
    try {
        const result = await model.getBySlug(req.params.slug)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error.message)
    }
}

ctrl.save = async (req, res) => {
    try {

        if (req.file !== undefined) {
            req.body.image = `http://localhost:8000/image/${req.file.filename}`
        }

        const result = await model.save(req.body)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error.message)
    }
}


module.exports = ctrl
