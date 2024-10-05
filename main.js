document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir o comportamento padrão do formulário

    // Captura os valores do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Cria uma nova linha na tabela
    const newRow = document.createElement('tr');

    // Cria as células da linha
    const nameCell = document.createElement('td');
    const phoneCell = document.createElement('td');

    // Define os valores das células
    nameCell.textContent = nome;
    phoneCell.textContent = telefone;

    // Adiciona as células à linha
    newRow.appendChild(nameCell);
    newRow.appendChild(phoneCell);

    // Adiciona a nova linha ao corpo da tabela
    document.getElementById('contactList').appendChild(newRow);

    // Limpa o formulário
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
});
