const express = require(`express`)
const app = express()
app.use(express.json())
const menuController =
require(`../controller/menu.controller`)
app.get("/", menuController.getAllMenu)
app.post("/add", menuController.addMenu)
app.post("/find", menuController.findMenu)
app.put("/:id", menuController.updateMenu)
app.delete("/:id", menuController.deleteMenu)
module.exports = app