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
    try {
        const userDoc = await User.create({ username, password });
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e);
    }
});

app.listen(4000);

// User.create({ username, password }); mongodb + srv://blog:@121sa@cluster0.ghdtwvs.mongodb.net/?retryWrites=true&w=majority







