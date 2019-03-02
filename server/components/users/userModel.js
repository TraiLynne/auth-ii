const db = require('../../../db/dbConfig');
const dbName = 'users';

const findBy = filter => db(dbName).select('id', 'username', 'first_name', 'last_name', 'department', 'created_at').where(filter);

const findByUnsafe = filter => db(dbName).where(filter);

// C - Create
const createUser = async user => {
    const [id] = await db(dbName).insert(user);

    return db.readOne(id);
}

// R - Read
const readUsers = () => db(dbName).select('id', 'username', 'first_name', 'last_name', 'department', 'created_at');

const readUser = id => db.findBy({
    id
}).first();

const readUserUnsafe = id => db.findByUnsafe({
    id
}).first();


// U - Update
const updateUser = (id, updatedUser) => db(dbName).readUserUnsafe(id).update(updatedUser);

// D - Destroy
const destroyUser = id => db(dbName).readUserUnsafe(id).del();

module.exports = {
    findBy,
    findByUnsafe,
    createUser,
    readUsers,
    readUserUnsafe,
    readUser,
    updateUser,
    destroyUser
}