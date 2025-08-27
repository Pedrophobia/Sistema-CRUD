const fs = require('fs');
const path = require('path');

// Persistência em arquivo
const USERS_FILE = path.join(__dirname, 'users.json');
let users = [];

// Carregar usuários do arquivo ao iniciar
if (fs.existsSync(USERS_FILE)) {
    try {
        users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
    } catch (err) {
        users = [];
    }
}

// Função para salvar usuários no arquivo
function saveUsers() {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(cors());




app.use(express.static(__dirname));

// Rota para teste.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'teste.html'));
});





// Create - criar usuário
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    saveUsers();
    res.status(201).json({ message: 'Usuário criado!', user });
});

// listar todos os usuários
app.get('/users', (req, res) => {
    res.json(users);
});

// listar usuário por índice
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users[id];
    if (user) res.json(user);
    else res.status(404).json({ message: 'Usuário não encontrado' });
});

// atualizar usuário por índice
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = req.body;
    if (users[id]) {
        users[id] = user;
        saveUsers();
        res.json({ message: 'Usuário atualizado!', user });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

// deletar usuário por índice
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (users[id]) {
        users.splice(id, 1);
        saveUsers();
        res.json({ message: 'Usuário deletado!' });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});



// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
