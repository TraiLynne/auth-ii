const db = require('../dbConfig');
const dbName = 'users'

const findBy = filter => {
    return db('users').select('id', 'username', 'department', 'createdAt').where(filter);
}

const create = async user => {
    const [id] = await db('users').insert(user);

    return findBy({id}).first();
}

const readOne = id => db('users')
    .where({
        id
    })
    .first();

const readAll = () => db('users').select('id', 'username', 'password');

module.exports = {
    create,
    findBy,
    readOne,
    readAll
}