const express = require('express');

const app = express();

app.get('/home', (req, res) => {
	res.status(200).json({ success: true, message: 'Wellcome to git and github' })
})
app.listen(8000, () => {
	console.log("server is started!")
})