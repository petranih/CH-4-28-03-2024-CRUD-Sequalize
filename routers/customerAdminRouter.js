const router = require("express").Router();

const CustomerAdmin = require("../controllers/customersAdminController");

router.get("/", CustomerAdmin.customerPage);
router.get("/create", CustomerAdmin.createPage);
router.post("/admin/create", CustomerAdmin.createPage);
router.get("/edit/:id", CustomerAdmin.editPage);
router.post("/edit/:id", CustomerAdmin.editPage);


module.exports = router;