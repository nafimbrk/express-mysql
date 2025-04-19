const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {

    try {
        const [data] = await UsersModel.getAllUsers()

        res.json({
            message: 'get all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
}

const createNewUsers = async (req, res) => {
    const {body} = req

    if (!body.name || !body.email || !body.address) {
        return res.status(400).json({
            message: 'anda mengirimkan data yang salah',
            data: null
        })
    }

    try {
        await UsersModel.createNewUsers(body)
        res.status(201).json({
            message: 'create new user success',
            data: body
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        await UsersModel.updateUser(body, id)
        res.json({
            message: 'update user success',
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
    console.log(`id user: ${id}`)
    
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        await UsersModel.deleteUser(id)
        res.json({
            message: 'delete data success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser
}