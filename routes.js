const express = require("express");

const router = express.Router();

const user = require("./user");

router.get("/all", async (req, res) => {
  const users = await user.findAll({ raw: true });
  res.json(users).status(200);
});

router.post("/create", async (req, res) => {
  const { nome, login, senha } = req.body;
  const novoUser = await user.create({ nome, login, senha });
  res.status(201).json(novoUser);
});

router.put("/update", async (req, res) => {
  const { id, nome, login, senha } = req.body;
  const updateUser = await user.update(
    { id, nome, login, senha },
    { where: { id: id } }
  );
  res.status(204).json(updateUser);
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  user.destroy({ where: { id: id } });
  res.status(200).json({ message: "Usuario deletado com sucesso" });
});

module.exports = router;
