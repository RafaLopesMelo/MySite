const connection = require('../database/connection');

module.exports = {

    async index(req, res) {

        const portfolio = await connection('portfolio').select('*');

        return res.json(portfolio);
    },

    async profile(req, res) {

        const { id } = req.params;

        const portfolio = await connection('portfolio').where('id', id).select('*').first();

        if (!portfolio) { return res.status(400).json({ error: "Project not found." }) }

        return res.json(portfolio);
    },

    async create(req, res) {

        const { illustration, images, title, description } = req.body;

        const author  = "Rafael Lopes de Melo";

        const data = new Date;
            const dia = data.getDate().toString();
            const mes  = (data.getMonth()+1).toString();
            const ano = data.getFullYear();
        const date = `${dia}/${mes}/${ano}`;

        const [id] = await connection('portfolio').insert({
            author,
            title,
            description,
            images,
            illustration,
            date
        })

        return res.json({ id, date });
    },
    
    async delete(req, res) {

        const { id } = req.params;

        await connection('portfolio').where('id', id).delete();

        return res.status(204).send();
    }

}