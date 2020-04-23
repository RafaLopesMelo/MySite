const connection = require('../database/connection');

module.exports = {

    async index(req, res) {

        const { page = 1 } = req.query;

        const { category = "" } = req.query;


        if (category) {
            const posts = await connection('posts')  
            .where('category', category)
            .limit(10)
            .offset((page - 1) * 10)  
            .select('*')

            await connection('posts').where('category', category).count('id as count')
            .then(response => res.header('Counter',response[0].count))

            return res.json(posts);
        }

        const posts = await connection('posts')
        .limit(10)
        .offset((page - 1) * 10) 
        .select('*')

        await connection('posts').count('id as count')
        .then(response => res.header('Counter',response[0].count))

        return  res.json(posts)
    },

    async profile(req, res) {

        const { id } = req.params;

        const post = await connection('posts').where("id", id).select('*').first();

        if (!post) { return res.status(400).json({ error: 'Post not found.' })};

        return res.json(post);
    },

    async create(req, res) {

        const {author, title, category, description, content, illustration} = req.body;

        const data = new Date;
            const dia = data.getDate().toString();
            const mes  = (data.getMonth()+1).toString();
            const ano = data.getFullYear();
        const date = `${dia}/${mes}/${ano}`;

        const [id] = await connection('posts').insert({
            author,
            category,
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