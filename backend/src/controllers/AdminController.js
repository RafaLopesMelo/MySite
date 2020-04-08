const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {

    async index(req, res) {

        const admin = await connection('admin').select('*');

        res.json(admin);
    },

    async login (req, res) {

        const { user, password } = req.body;

        const admin = await connection('admin').where('user', user).select('*').first();

        if (!admin) {

            return res.json({ error: "User not found." })

        }

        bcrypt.compare(password, admin.password, function(err, result) {

            if (result == true) {

                return res.json(admin)

            } else {

                res.status(400).json({ error: "Incorrect password." })

            }

        })


    },

    async register (req, res) {

        let { user, password } = req.body;

        if (user.indexOf(' ') == -1) {

            bcrypt.hash(password, 10, async function(err, hash){

            password = hash;

            await connection('admin').insert({ user, password })

            return res.json({ user, password });

        })} else {

            return res.json({ error: "Invalid username" })

        }
    },

    async delete (req, res) {

        const { user } = req.params;

        await connection('admin').where('user', user).delete();
    }

}