// Guides page functionality

document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    renderGuides();
});

const sampleGuides = [
    {
        id: 1,
        title: "Cultivo de Plantas Perenes",
        description: "Descubra as melhores práticas para cuidar de plantas que vivem por mais de dois anos.",
        image: "https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Plantas+Perenes",
        category: "perenes",
        difficulty: "iniciante"
    },
    {
        id: 2,
        title: "Plantas de Pequeno Porte para Apartamentos",
        description: "Guia completo para escolher e cuidar de plantas ideais para espaços pequenos.",
        image: "https://via.placeholder.com/300x200/4A2C2A/FFFFFF?text=Pequeno+Porte",
        category: "pequeno-porte",
        difficulty: "iniciante"
    },
    {
        id: 3,
        title: "Como Cultivar Hortaliças em Casa",
        description: "Passo a passo para ter sua própria horta orgânica, mesmo em pequenos espaços.",
        image: "https://via.placeholder.com/300x200/556B2F/FFFFFF?text=Hortaliças",
        category: "hortalicas",
        difficulty: "intermediario"
    },
    {
        id: 4,
        title: "Cuidado Essencial com Orquídeas",
        description: "Dicas e truques para manter suas orquídeas saudáveis e florindo o ano todo.",
        image: "https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Orquídeas",
        category: "ornamentais",
        difficulty: "avancado"
    },
    {
        id: 5,
        title: "Plantas Medicinais e Seus Usos",
        description: "Um guia sobre as propriedades e o cultivo de plantas com fins medicinais.",
        image: "https://via.placeholder.com/300x200/4A2C2A/FFFFFF?text=Medicinais",
        category: "medicinais",
        difficulty: "intermediario"
    },
    {
        id: 6,
        title: "Jardinagem para Iniciantes: Primeiros Passos",
        description: "Tudo o que você precisa saber para começar seu primeiro jardim com sucesso.",
        image: "https://via.placeholder.com/300x200/556B2F/FFFFFF?text=Iniciantes",
        category: "geral",
        difficulty: "iniciante"
    }
];

let currentGuides = [...sampleGuides];

function setupEventListeners() {
    const guideSearchInput = document.getElementById("guideSearchInput");
    const guideSearchBtn = document.getElementById("guideSearchBtn");
    const guideCategoryFilter = document.getElementById("guideCategoryFilter");
    const guideDifficultyFilter = document.getElementById("guideDifficultyFilter");

    if (guideSearchInput) {
        guideSearchInput.addEventListener("input", filterAndRenderGuides);
    }
    if (guideSearchBtn) {
        guideSearchBtn.addEventListener("click", filterAndRenderGuides);
    }
    if (guideCategoryFilter) {
        guideCategoryFilter.addEventListener("change", filterAndRenderGuides);
    }
    if (guideDifficultyFilter) {
        guideDifficultyFilter.addEventListener("change", filterAndRenderGuides);
    }
}

function renderGuides(guidesToRender = currentGuides) {
    const guidesGrid = document.getElementById("guidesGrid");
    if (!guidesGrid) return;

    if (guidesToRender.length === 0) {
        guidesGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-book" style="font-size: 3rem; color: var(--medium-brown); margin-bottom: 1rem;"></i>
                <h3>Nenhum guia encontrado</h3>
                <p>Tente ajustar seus filtros ou termos de pesquisa.</p>
            </div>
        `;
        return;
    }

    guidesGrid.innerHTML = guidesToRender.map(guide => `
        <div class="guide-card">
            <img src="${guide.image}" alt="${guide.title}">
            <div class="guide-card-content">
                <h3>${guide.title}</h3>
                <p>${guide.description}</p>
                <div class="guide-meta">
                    <span><i class="fas fa-layer-group"></i> ${capitalizeFirstLetter(guide.category)}</span>
                    <span><i class="fas fa-star"></i> ${capitalizeFirstLetter(guide.difficulty)}</span>
                </div>
                <a href="#" class="btn primary">Ler Guia</a>
            </div>
        </div>
    `).join("");
}

function filterAndRenderGuides() {
    const searchTerm = document.getElementById("guideSearchInput").value.toLowerCase();
    const categoryFilter = document.getElementById("guideCategoryFilter").value;
    const difficultyFilter = document.getElementById("guideDifficultyFilter").value;

    let filteredGuides = sampleGuides.filter(guide => {
        const matchesSearch = guide.title.toLowerCase().includes(searchTerm) ||
                              guide.description.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryFilter === "all" || guide.category === categoryFilter;
        const matchesDifficulty = difficultyFilter === "all" || guide.difficulty === difficultyFilter;
        
        return matchesSearch && matchesCategory && matchesDifficulty;
    });

    currentGuides = filteredGuides;
    renderGuides(currentGuides);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// General notification system (copied from script.js for standalone functionality)
function showNotification(message, type = "success") {
    let notificationContainer = document.getElementById("notification-container");
    if (!notificationContainer) {
        notificationContainer = document.createElement("div");
        notificationContainer.id = "notification-container";
        document.body.appendChild(notificationContainer);
    }

    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--moss-green);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = "translateX(0)";
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = "translateX(100%)";
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Logout function (mock)
function logout() {
    showNotification("Você foi desconectado.", "info");
    setTimeout(() => window.location.href = "login.html", 1500);
}


