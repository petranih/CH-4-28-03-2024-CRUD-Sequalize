const router = require("express").Router();

const Customer = require("../controllers/customersController");

router.post("/", Customer.createCustomer);

module.exports = router;