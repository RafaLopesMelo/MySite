const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    async index(req, res) {

        const admin = await connection('admin').select('*');

        res.json(admin);
    },

    async login (req, res) {

        const { user, password } = req.body;

        const admin = await connection('admin').where('user', user).select('*').first();

        const id = admin.id;

        if (!admin) {

            return res.status(400).json({ error: "User not found." })

        }

        bcrypt.compare(password, admin.password, function(err, result) {

            if (result == true) {

                const token = jwt.sign({ id }, process.env.SECRET)
                return res.status(200).json({ auth: true, token})

            } else {

                res.status(400).json({ error: "Incorrect password." })

            }

        })


    },

    async register (req, res) {

        const { user, password } = req.body;

        if (user.indexOf(' ') == -1) {

            bcrypt.hash(password, 10, async function(err, hash){

            await connection('admin').insert({ user, password })

            return res.json({ user, password: hash });

        })} else {

            return res.json({ error: "Invalid username" })

        }
    },

    async delete (req, res) {

        const { user } = req.params;

        await connection('admin').where('user', user).delete();
    }

}