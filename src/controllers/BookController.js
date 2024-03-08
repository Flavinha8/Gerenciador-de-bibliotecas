const knex = require("../database/knex")
class BookController {

    async createBook(req, res) {
        const {user_id} = req.params
        const {title, autor, ano, categoria} = req.body

        const book = {
            titulo,
            autor,
            ano,
            categoria,
            book_id,
            disponibilidade: true
        }

        await knex("books").insert({
            titulo: book.titulo,
            autor: book.autor,
            ano: book.ano,
            categoria: book.categoria,
            book_id: book.book_id,
            disponibilidade: book.disponibilidade
        })
        return res.status(201).json("Tarefa criada com sucesso!")
    }

    async listBook(req,res) {
        const books = await knex("books")

        return res.status(200).json(books)
    }

    async listBookById(req, res) {
        const {id} = req.params
        const [book] = await knex("books").where({id})

        return res.status(200).json(book)
    }

    async updateBook(req, res) {
        const {id} = req.params
        const {titulo, autor} = req.body

        await knex("books").where({id}).update({titulo, autor})

        return res.status(200).json("Registro atualizado com sucesso!")
    }

    async updateBookStatus(req, res) {
        const {id} = req.params

        await knex("books").where({id}).update({disponibilidadade: true})
        return res.status(200).json("Tarefa concluida com sucesso!")
    }

    async deleteBook(req, res) {
        const {id} = req.params
        await knex("books").where({id}).delete()
        return res.status(200).json("Registro deletado com sucesso!")
    }
}

module.exports = BookController