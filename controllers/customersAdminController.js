const { where } = require("sequelize");
const { Customer } = require("../models");

const customerPage = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.render("customers/index.ejs",{
            customers,
        })
    } catch (err) {
        res.render("error.ejs", {
            message: err.message
        })
    }
}

const createPage = async (req, res) => {
    try {
        const customer = await Customer.findAll();
        res.render("customers/create.ejs")
    } catch (err) {
        res.render("error.ejs", {
            message: err.message
        })
    }
}

const editPage = async (req, res) => {
    try {
        const customer = await Customer.Update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.render("customers/edit.ejs",{
            customer,
        })
        res.redirect("/customers")
    } catch (err) {
        res.render("error.ejs", {
            message: err.message
        })
    }
}

module.exports = {
    customerPage,
    createPage,
    editPage
}