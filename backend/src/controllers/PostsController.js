const connection = require('../database/connection')

module.exports = {

    async index(req, res) {

        const posts = await connection('posts').select('*');

        return res.json(posts);
    },

    async category() {

        const { category } = req.params;

        const posts = await connection('posts').select('category', category);

        return res.json(posts);

    },

    async profile(req, res) {

        const { id } = req.params;

        const post = await connection('posts').where("id", id).select('*').first();

        if (!post) { return res.status(400).json({ error: 'Post not found.' })};

        return res.json(post);
    },

    async create(req, res) {

        const {author, title, description, content, illustration} = req.body;

        const data = new Date;
            const dia = data.getDate().toString();
            const mes  = (data.getMonth()+1).toString();
            const ano = data.getFullYear();
        const date = `${dia}/${mes}/${ano}`;

        const [id] = await connection('posts').insert({
            author,
            title,
            description,
            content,
            illustration,
            date
        })

        return res.json({ id, date });
    },

    async delete(req, res) {

        const { id } = req.params;

        await connection('posts').where('id', id).delete();

        return res.status(204).send();

    }

}