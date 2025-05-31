import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import {
    getFirestore, collection, addDoc, serverTimestamp,
    getDocs, query, orderBy, updateDoc, doc, deleteDoc
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAmoC-EXhBu4Ue7b0GFszBkte1VSHCE0II",
    authDomain: "sugestao-aula.firebaseapp.com",
    projectId: "sugestao-aula",
    storageBucket: "sugestao-aula.appspot.com",
    messagingSenderId: "101895351353",
    appId: "1:101895351353:web:3cff64be209ea8243fb1e8",
    measurementId: "G-WPKJLNPZ7Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById('suggestion-form');
const suggestionsContainer = document.getElementById('suggestions');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const suggestionData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        suggestion: document.getElementById('suggestion').value,
        status: 'Pendente',
        timestamp: serverTimestamp()
    };

    try {
        await addDoc(collection(db, 'suggestions'), suggestionData);
        alert('Sugestão enviada com sucesso!');
        form.reset();
        loadSuggestions();
    } catch (error) {
        console.error('Erro ao enviar sugestão:', error);
        alert('Erro ao enviar sugestão. Tente novamente.');
    }
});

async function loadSuggestions() {
    suggestionsContainer.innerHTML = '';
    const q = query(collection(db, 'suggestions'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(docSnap => {
        const data = docSnap.data();
        const date = data.timestamp ? new Date(data.timestamp.seconds * 1000) : new Date();
        const formattedDate = date.toLocaleString('pt-BR');

        const suggestionDiv = document.createElement('div');
        suggestionDiv.classList.add('suggestion');

        suggestionDiv.innerHTML = `
            <div class="suggestion-header">
                <strong>${data.name} - ${data.email}</strong>
                <span>${formattedDate}</span>
            </div>
            <p>${data.suggestion}</p>
            <span class="status ${data.status.toLowerCase()}">${data.status}</span>
            <button class="admin-btn">Marcar como ${data.status === 'Pendente' ? 'Visto' : 'Pendente'}</button>
            <button class="delete-btn">Deletar</button>
        `;

        // Botão de alterar status
        const statusBtn = suggestionDiv.querySelector('.admin-btn');
        statusBtn.addEventListener('click', async () => {
            const newStatus = data.status === 'Pendente' ? 'Visto' : 'Pendente';
            const docRef = doc(db, 'suggestions', docSnap.id);
            await updateDoc(docRef, { status: newStatus });
            loadSuggestions();
        });

        // Botão de deletar
        const deleteBtn = suggestionDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', async () => {
            if (confirm('Tem certeza que deseja deletar esta sugestão?')) {
                await deleteDoc(doc(db, 'suggestions', docSnap.id));
                alert('Sugestão deletada com sucesso!');
                loadSuggestions();
            }
        });

        suggestionsContainer.appendChild(suggestionDiv);
    });
}

// Carregar sugestões ao iniciar
window.addEventListener('DOMContentLoaded', loadSuggestions);
