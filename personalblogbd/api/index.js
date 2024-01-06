const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://blog:@121sa@cluster0.ghdtwvs.mongodb.net/?retryWrites=true&w=majority');
app.post('/register', async (req, res) => {
    const {username, password } = req.body;
    User.create({ username, password });
    const userDoc = await User.create({ username, password });
    res.json({ requestData: { username, password } });
});

app.listen(4000);

// mongodb+srv://blog:@121sa@cluster0.ghdtwvs.mongodb.net/?retryWrites=true&w=majority