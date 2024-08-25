// Função para mostrar uma aba específica

function showTab(tabId) {

    console.log(`Exibindo aba: ${tabId}`);

    const tabs = document.querySelectorAll('.tab-content');

    const tabButtons = document.querySelectorAll('.tab');

    tabs.forEach(tab => tab.classList.add('hidden'));

    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.remove('hidden');

    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');

}

// Função para criar uma ficha de personagem

function createCharacter() {

    console.log('Criando ficha de personagem...');

    const name = document.getElementById('charName').value;

    const life = document.getElementById('charLife').value;

    const energy = document.getElementById('charEnergy').value;

    if (name && life && energy) {

        const characterItem = document.createElement('div');

        characterItem.className = 'character-item';

        characterItem.innerHTML = `

            <strong>${name}</strong><br>

            Vida: ${life}<br>

            Energia: ${energy}

            <button class="action-btn" onclick="editCharacter(this)">Editar</button>

        `;

        document.getElementById('charactersList').appendChild(characterItem);

        // Limpar campos após criação

        document.getElementById('charName').value = '';

        document.getElementById('charLife').value = '';

        document.getElementById('charEnergy').value = '';

        document.getElementById('createForm').classList.add('hidden');

        console.log('Ficha criada com sucesso.');

    } else {

        console.log('Erro: Preencha todos os campos.');

        alert('Preencha todos os campos!');

    }

}

// Função para mostrar o formulário de criação de ficha

function showCreateForm() {

    console.log('Exibindo formulário de criação de ficha...');

    document.getElementById('createForm').classList.toggle('hidden');

}

// Função para editar uma ficha de personagem

function editCharacter(button) {

    console.log('Editando ficha de personagem...');

    const characterItem = button.parentElement;

    const name = characterItem.querySelector('strong').textContent;

    const life = characterItem.querySelector('br').nextSibling.textContent.replace('Vida: ', '');

    const energy = characterItem.querySelector('br').nextSibling.nextSibling.textContent.replace('Energia: ', '');

    document.getElementById('charName').value = name;

    document.getElementById('charLife').value = life;

    document.getElementById('charEnergy').value = energy;

    document.getElementById('createForm').classList.remove('hidden');

    characterItem.remove();

    console.log('Ficha editada.');

}

// Função para lançar o dado

function rollDice(sides) {

    console.log(`Rolando dado com ${sides} lados...`);

    const result = Math.floor(Math.random() * sides) + 1;

    document.getElementById('diceResult').textContent = `Resultado: ${result}`;

}

// Função para salvar as notas

function saveNotes() {

    console.log('Salvando notas...');

    const notes = document.getElementById('notesArea').value;

    localStorage.setItem('notes', notes);

    alert('Notas salvas!');

}

// Função para carregar as notas

function loadNotes() {

    console.log('Carregando notas...');

    const notes = localStorage.getItem('notes');

    document.getElementById('notesArea').value = notes ? notes : '';

}

// Funções para a calculadora

function appendToDisplay(value) {

    const display = document.getElementById('calcDisplay');

    display.value += value;

}

function calculateResult() {

    const display = document.getElementById('calcDisplay');

    try {

        display.value = eval(display.value);

    } catch (error) {

        display.value = 'Erro';

    }

}

function clearDisplay() {

    document.getElementById('calcDisplay').value = '';

}

// Mostrar a aba "Fichas" por padrão ao carregar

window.onload = function() {

    console.log('Aplicativo carregado.');

    showTab('character');

    loadNotes();

}