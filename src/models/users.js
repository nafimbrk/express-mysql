const dbPool = require('../config/database')

const getAllUsers = () => {
    sqlQuery = 'select * from users'
   
    return dbPool.execute(sqlQuery) 
}

const createNewUsers = (body) => {
    const sqlQuery = `insert into users (name, email, address)
                      values ('${body.name}', '${body.email}', '${body.address}')`

    return dbPool.execute(sqlQuery)
}

const updateUser = (body, id) => {
    const sqlQuery = `update users set name='${body.name}', email='${body.email}', address='${body.address}' where id=${id}`

    return dbPool.execute(sqlQuery)
}

const deleteUser = (id) => {
    const sqlQuery = `delete from users where id=${id}`

    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser
}