const knex = require("../database");


async function checkBooksExists(req, res, next) {
    const {id} = req.params
    const {book} = await knex(`
        SELEC *& FROM books WHERE id = ${id}
    `)

    if(tasks.length === 0){
        return res.status(400).json("Tarefa não encontrada")
    }
    next()
}

module.exports = checkBooksExists