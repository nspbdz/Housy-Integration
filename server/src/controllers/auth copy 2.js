const { user } = require('../../models')
const joi = require('joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body
        const data = req.body // yang diinputkan  user/ di postman

        //joi schema syarat yang harus di aplikasikan 
        const schema = joi.object({
            fullname: joi.string().min(3).required(),
            email: joi.string().email().required(),
            password: joi.string().min(8).required()
        })

        const { error } = schema.validate(data) // untuk mengaplikasikan joi schema /middleware / ketentuan

        // pengecekan jika erorr 
        if (error) {
            return res.send({
                status: 'failed',
                message: error.details[0].message
            })
        }

        const checkEmail = await user.findOne({
            where: {
                email
            }
        })

        if (checkEmail) {
            return res.send({
                status: 'failed',
                message: 'Email Already Registered'
            })
        }
        const hashStrenght = 10
        const hashedPassword = await bcrypt.hash(password, hashStrenght)

        const dataUser = await user.create({
            ...data,
            password: hashedPassword
        })

        // kirim jika sukses

        res.send({
            status: 'success',
            data: {
                user: {
                    fullname: dataUser.fullname,
                    email: dataUser.email
                }
            }
        })
      

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}
