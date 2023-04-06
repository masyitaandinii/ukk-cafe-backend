const express = require(`express`)
const app = express()
app.use(express.json())
const transaksiController =
require(`../controller/transaksi.controller`)
app.get("/", transaksiController.getAllTransaksi)
app.post("/add", transaksiController.addTransaksi)
app.post("/find", transaksiController.findTransaksi)
app.put("/:id", transaksiController.updateTransaksi)
app.delete("/:id", transaksiController.deleteTransaksi)
module.exports = app