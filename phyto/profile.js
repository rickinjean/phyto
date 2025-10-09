// Profile page functionality
let currentTab = 'overview';

// Sample data to simulate a real user profile
const sampleData = {
    gardenPlants: [
        { id: 1, name: "Rosa Vermelha", nickname: "Rosa do jardim", image: "https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Rosa", location: "garden", plantedDate: "2024-01-15", status: "flowering" },
        { id: 2, name: "Lavanda", nickname: "Lavanda da varanda", image: "https://via.placeholder.com/300x200/4A2C2A/FFFFFF?text=Lavanda", location: "balcony", plantedDate: "2024-02-01", status: "healthy" },
        { id: 3, name: "Manjericão", nickname: "Manjericão da cozinha", image: "https://via.placeholder.com/300x200/556B2F/FFFFFF?text=Manjericão", location: "indoor", plantedDate: "2024-02-20", status: "needs-care" }
    ],
    favoritePlants: [
        { id: 4, name: "Orquídea", scientificName: "Orchidaceae", image: "https://via.placeholder.com/280x200/6A5ACD/FFFFFF?text=Orquídea", category: "Ornamental" },
        { id: 2, name: "Girassol", scientificName: "Helianthus annuus", image: "https://via.placeholder.com/280x200/FFD700/000000?text=Girassol", category: "Alimentícia" }
    ],
    userReviews: [
        { id: 1, plantName: "Rosa", rating: 5, title: "Maravilhosa!", text: "Segui as dicas e minhas rosas nunca estiveram tão lindas. Recomendo!", date: "2024-03-10" },
        { id: 2, plantName: "Jiboia", rating: 4, title: "Muito fácil de cuidar", text: "Ótima para quem está começando. Cresce rápido e é linda.", date: "2024-02-25" }
    ],
    achievements: [
        { id: 1, name: "Primeiro Plantio", description: "Adicionou sua primeira planta ao jardim.", icon: "fas fa-seedling", unlocked: true, unlockedDate: "2024-01-15" },
        { id: 2, name: "Jardineiro Iniciante", description: "Cultivou 3 plantas diferentes.", icon: "fas fa-leaf", unlocked: true, unlockedDate: "2024-02-20" },
        { id: 3, name: "Avaliador", description: "Escreveu sua primeira avaliação.", icon: "fas fa-star", unlocked: true, unlockedDate: "2024-02-25" },
        { id: 4, name: "Mestre Botânico", description: "Cultivou 50 plantas diferentes.", icon: "fas fa-crown", unlocked: false, unlockedDate: null }
    ],
    searchedPlants: [
        { id: 19, name: "Costela-de-Adão", image: "https://via.placeholder.com/80x80/228B22/FFFFFF?text=Monstera", date: "2024-03-15", category: "Ornamental" },
        { id: 15, name: "Zamioculca", image: "https://via.placeholder.com/80x80/006400/FFFFFF?text=Zamioculca", date: "2024-03-14", category: "Ornamental" }
    ]
};

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    switchTab('overview'); // Start on the overview tab
    updateProfileStats();
    animateProgressBars();
});

// Event listeners
function setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });

    // Form submissions
    document.getElementById('personalInfoForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Informações pessoais salvas com sucesso!', 'success');
    });
    document.getElementById('passwordChangeForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Senha alterada com sucesso!', 'success');
        e.target.reset();
    });
    document.getElementById('notificationSettingsForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Preferências de notificação salvas!', 'success');
    });
    document.getElementById('deleteAccountForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (confirm('Tem certeza que deseja excluir sua conta? Esta ação é permanente.')) {
            showNotification('Conta excluída com sucesso.', 'error');
            setTimeout(() => window.location.href = 'index.html', 2000);
        }
    });
}

// Tab functionality
function switchTab(tabName) {
    currentTab = tabName;
    document.querySelectorAll('.profile-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');

    // Load content for the selected tab
    switch (tabName) {
        case 'garden': renderGardenPlants(); break;
        case 'favorites': renderFavoritePlants(); break;
        case 'searched': renderSearchedPlants(); break;
        case 'reviews': renderUserReviews(); break;
        case 'achievements': renderAchievements(); break;
    }
}

// --- RENDER FUNCTIONS ---

function renderGardenPlants() {
    const container = document.getElementById('gardenGrid');
    if (!container) return;
    const plants = sampleData.gardenPlants;

    if (plants.length === 0) {
        container.innerHTML = `<p class="empty-state">Nenhuma planta adicionada ao seu jardim ainda.</p>`;
        return;
    }
    container.innerHTML = plants.map(plant => `
        <div class="garden-plant-card">
            <img src="${plant.image}" alt="${plant.name}">
            <div class="garden-plant-card-content">
                <h4>${plant.name}</h4>
                <p>${plant.nickname}</p>
                <div class="garden-plant-card-actions">
                    <a href="plant-details.html?id=${plant.id}" class="btn primary">Ver Detalhes</a>
                    <button class="btn secondary" onclick="showNotification('Funcionalidade indisponível.', 'info')">Remover</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderFavoritePlants() {
    const container = document.getElementById('favoritesGrid');
    if (!container) return;
    const plants = sampleData.favoritePlants;

    if (plants.length === 0) {
        container.innerHTML = `<p class="empty-state">Nenhuma planta favorita ainda.</p>`;
        return;
    }
    container.innerHTML = plants.map(plant => `
        <div class="favorite-plant-card">
            <img src="${plant.image}" alt="${plant.name}">
            <div class="favorite-plant-card-content">
                <h4>${plant.name}</h4>
                <p>${plant.scientificName}</p>
                <div class="favorite-plant-card-actions">
                     <a href="plant-details.html?id=${plant.id}" class="btn primary">Ver Detalhes</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderSearchedPlants() {
    const container = document.getElementById('searchedPlantsList');
    if (!container) return;
    const plants = sampleData.searchedPlants;

    if (plants.length === 0) {
        container.innerHTML = `<p class="empty-state">Nenhuma planta pesquisada recentemente.</p>`;
        return;
    }
    container.innerHTML = plants.map(plant => `
        <div class="searched-item">
            <img src="${plant.image}" alt="${plant.name}">
            <div class="searched-item-details">
                <h4>${plant.name}</h4>
                <p>${plant.category}</p>
                <span>Pesquisado em: ${new Date(plant.date).toLocaleDateString('pt-BR')}</span>
            </div>
            <div class="searched-item-actions">
                <a href="plant-details.html?id=${plant.id}" class="btn primary">Ver Novamente</a>
            </div>
        </div>
    `).join('');
}

function renderUserReviews() {
    const container = document.getElementById('userReviewsList');
    if (!container) return;
    const reviews = sampleData.userReviews;

    if (reviews.length === 0) {
        container.innerHTML = `<p class="empty-state">Você ainda não fez nenhuma avaliação.</p>`;
        return;
    }
    container.innerHTML = reviews.map(review => `
        <div class="user-review-card">
            <div class="user-review-card-header">
                <h4>${review.plantName}</h4>
                <div class="user-review-card-rating">
                    ${'<i></i>'.repeat(review.rating).replace(/<i>/g, '<i class="fas fa-star"></i>')}
                    ${'<i></i>'.repeat(5 - review.rating).replace(/<i>/g, '<i class="far fa-star"></i>')}
                </div>
            </div>
            <div class="user-review-card-content">
                <p><strong>"${review.title}"</strong></p>
                <p>${review.text}</p>
                <small>Avaliado em: ${new Date(review.date).toLocaleDateString('pt-BR')}</small>
            </div>
        </div>
    `).join('');
}

function renderAchievements() {
    const container = document.getElementById('achievementsGrid');
    if (!container) return;
    const achievements = sampleData.achievements;

    if (achievements.length === 0) {
        container.innerHTML = `<p class="empty-state">Nenhuma conquista disponível.</p>`;
        return;
    }
    container.innerHTML = achievements.map(ach => `
        <div class="achievement-card ${ach.unlocked ? 'unlocked' : ''}">
            <div class="achievement-icon"><i class="${ach.icon}"></i></div>
            <h4>${ach.name}</h4>
            <p>${ach.description}</p>
            ${ach.unlocked ? `<small>Desbloqueado em: ${new Date(ach.unlockedDate).toLocaleDateString('pt-BR')}</small>` : ''}
        </div>
    `).join('');
}

// --- UTILITY FUNCTIONS ---

function updateProfileStats() {
    document.getElementById('plantsInGardenCount').textContent = sampleData.gardenPlants.length;
    document.getElementById('favoritesCount').textContent = sampleData.favoritePlants.length;
    document.getElementById('searchedPlantsCount').textContent = sampleData.searchedPlants.length;
    document.getElementById('reviewsCount').textContent = sampleData.userReviews.length;
    document.getElementById('achievementsCount').textContent = sampleData.achievements.filter(a => a.unlocked).length;
}

function animateProgressBars() {
    document.querySelectorAll('.progress-fill').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.transition = 'width 0.8s ease-out';
            bar.style.width = width;
        }, 100);
    });
}

function showNotification(message, type = 'success') {
    const container = document.body;
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const colors = { success: '#27ae60', error: '#e74c3c', info: '#3498db' };
    notification.style.cssText = `
        position: fixed; top: 100px; right: 20px;
        background-color: ${colors[type] || colors.info};
        color: white; padding: 1rem 1.5rem; border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10001;
        transform: translateX(120%); transition: transform 0.3s ease-out;
    `;
    
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(120%)';
        notification.addEventListener('transitionend', () => notification.remove());
    }, 3500);
}

function logout() {
    showNotification("Você foi desconectado.", "info");
    setTimeout(() => window.location.href = "login.html", 1500);
}
