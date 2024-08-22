const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	return res.send({ message: "Tudo ok com o GET da raiz" });
});

router.post("/", (req, res) => {
	const { body } = req;
	console.log("BODY: ", body);
	return res.send({ message: "Tudo ok com o POST da raiz" });
});

module.exports = router;
