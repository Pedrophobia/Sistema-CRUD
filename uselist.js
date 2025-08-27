// ... (código existente do formulário)

// Função para buscar e renderizar os usuários
function fetchUsers() {
    fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => {
            const userTableBody = document.querySelector('#userTable tbody');
            userTableBody.innerHTML = '';

            if (users.length > 0) {
                users.forEach((user, idx) => {
                    const row = document.createElement('tr');

                    const nameCell = document.createElement('td');
                    nameCell.textContent = user.nome;
                    row.appendChild(nameCell);

                    const ageCell = document.createElement('td');
                    ageCell.textContent = user.idade;
                    row.appendChild(ageCell);

                    const emailCell = document.createElement('td');
                    emailCell.textContent = user.email;
                    row.appendChild(emailCell);

                    // Botão de excluir
                    const deleteCell = document.createElement('td');
                    const deleteBtn = document.createElement('button');
                    deleteBtn.className = 'botao-delete';
                    deleteBtn.textContent = 'Excluir';
                    deleteBtn.onclick = function() {
                        if (confirm('Tem certeza que deseja excluir este usuário?')) {
                            fetch(`http://localhost:3000/users/${idx}` , {
                                method: 'DELETE'
                            })
                            .then(res => res.json())
                            .then(data => {
                                alert(data.message);
                                fetchUsers();
                            })
                            .catch(err => alert('Erro ao excluir usuário'));
                        }
                    };
                    deleteCell.appendChild(deleteBtn);
                    row.appendChild(deleteCell);

                    userTableBody.appendChild(row);
                });
            } else {
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.colSpan = 4;
                cell.textContent = 'Nenhum usuário cadastrado.';
                row.appendChild(cell);
                userTableBody.appendChild(row);
            }
        })
        .catch(err => console.error('Erro ao buscar usuários:', err));
}


document.addEventListener('DOMContentLoaded', function() {
    fetchUsers();
    const form = document.getElementById('userForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const idade = parseInt(document.getElementById('idade').value);

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, idade })
        })
        .then(res => res.json())
        .then(data => {
            console.log('Usuário adicionado:', data);
            alert('Usuário adicionado com sucesso!');
            form.reset();
            fetchUsers();
        })
        .catch(err => console.error('Erro:', err));
    });
});
