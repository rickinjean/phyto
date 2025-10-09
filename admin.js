// Admin page functionality
let currentAdminSection = 'dashboard';

// Sample data for admin panel
const adminPlants = [
    {
        id: 1,
        image: "https://via.placeholder.com/50x50/8B4513/FFFFFF?text=R",
        name: "Rosa",
        scientificName: "Rosa spp.",
        category: "Ornamental",
        status: "published",
        reviews: 120,
        createdAt: "2023-01-10"
    },
    {
        id: 2,
        image: "https://via.placeholder.com/50x50/556B2F/FFFFFF?text=L",
        name: "Lavanda",
        scientificName: "Lavandula angustifolia",
        category: "Aromática",
        status: "published",
        reviews: 85,
        createdAt: "2023-02-15"
    },
    {
        id: 3,
        image: "https://via.placeholder.com/50x50/4A2C2A/FFFFFF?text=M",
        name: "Manjericão",
        scientificName: "Ocimum basilicum",
        category: "Alimentícia",
        status: "draft",
        reviews: 0,
        createdAt: "2024-03-01"
    }
];

const adminUsers = [
    {
        id: 1,
        avatar: "https://via.placeholder.com/50x50/F5DEB3/4A2C2A?text=MS",
        name: "Maria Silva",
        email: "maria.silva@example.com",
        role: "user",
        status: "active",
        plants: 47,
        registeredAt: "2024-03-15"
    },
    {
        id: 2,
        avatar: "https://via.placeholder.com/50x50/8B4513/FFFFFF?text=JS",
        name: "João Santos",
        email: "joao.santos@example.com",
        role: "user",
        status: "active",
        plants: 23,
        registeredAt: "2024-02-20"
    },
    {
        id: 3,
        avatar: "https://via.placeholder.com/50x50/556B2F/FFFFFF?text=AD",
        name: "Admin User",
        email: "admin@phytografia.com",
        role: "admin",
        status: "active",
        plants: 0,
        registeredAt: "2023-01-01"
    }
];

const adminReviews = [
    {
        id: 1,
        reviewer: "Maria Silva",
        reviewerAvatar: "https://via.placeholder.com/40x40/F5DEB3/4A2C2A?text=MS",
        plantName: "Rosa",
        rating: 5,
        title: "Linda e fácil de cuidar!",
        text: "Minhas rosas estão florindo lindamente graças às dicas do site. Recomendo muito!",
        date: "2024-03-10",
        status: "approved"
    },
    {
        id: 2,
        reviewer: "Carlos Mendes",
        reviewerAvatar: "https://via.placeholder.com/40x40/4A2C2A/FFFFFF?text=CM",
        plantName: "Orquídea",
        rating: 3,
        title: "Um pouco difícil",
        text: "Achei as instruções um pouco vagas para o cultivo de orquídeas. Minha planta não está indo muito bem.",
        date: "2024-03-12",
        status: "pending"
    },
    {
        id: 3,
        reviewer: "Ana Paula",
        reviewerAvatar: "https://via.placeholder.com/40x40/8B4513/FFFFFF?text=AP",
        plantName: "Samambaia",
        rating: 1,
        title: "Conteúdo ofensivo",
        text: "Esta avaliação contém linguagem imprópria e deve ser removida.",
        date: "2024-03-14",
        status: "reported"
    }
];

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    showSection(currentAdminSection);
    renderPlantsTable();
    renderUsersTable();
    renderReviewsList();
    initCharts();
});

// Event Listeners
function setupEventListeners() {
    // Sidebar navigation
    document.querySelectorAll(".sidebar-menu .menu-item a").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            const sectionId = item.closest(".menu-item").dataset.section;
            showSection(sectionId);
        });
    });

    // Notification dropdown
    document.querySelector(".notification-btn").addEventListener("click", () => {
        document.getElementById("notificationsDropdown").classList.toggle("active");
    });

    // User menu dropdown
    document.querySelector(".user-menu-btn").addEventListener("click", () => {
        document.getElementById("userMenuDropdown").classList.toggle("active");
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".admin-notifications")) {
            document.getElementById("notificationsDropdown").classList.remove("active");
        }
        if (!e.target.closest(".admin-user-menu")) {
            document.getElementById("userMenuDropdown").classList.remove("active");
        }
    });

    // Add Plant Modal
    document.querySelector(".admin-section#plants .primary-btn").addEventListener("click", openAddPlantModal);
    document.querySelector("#addPlantModal .close-modal").addEventListener("click", closeAddPlantModal);
    document.getElementById("addPlantForm").addEventListener("submit", handleAddPlantSubmit);
    document.getElementById("plantImages").addEventListener("change", handleImageUpload);

    // Content tabs
    document.querySelectorAll(".content-tab").forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            const tabName = e.target.dataset.tab;
            switchContentTab(tabName);
        });
    });
}

// Section switching
function showSection(sectionId) {
    document.querySelectorAll(".admin-section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");

    document.querySelectorAll(".sidebar-menu .menu-item").forEach(item => {
        item.classList.remove("active");
    });
    const activeMenuItem = document.querySelector(`.sidebar-menu .menu-item[data-section="${sectionId}"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add("active");
    }

    currentAdminSection = sectionId;

    // Render content for the active section
    switch (sectionId) {
        case 'dashboard':
            initCharts(); // Re-initialize charts for dashboard if needed
            break;
        case 'users':
            renderUsersTable();
            initUserCharts(); // Assuming there are user-specific charts
            break;
        case 'plants':
            renderPlantsTable();
            initPlantCharts(); // Assuming there are plant-specific charts
            break;
        case 'reviews':
            renderReviewsList();
            initReviewCharts(); // Assuming there are review-specific charts
            break;
        case 'searches':
            renderSearchTermsTable(); // Assuming a function to render search terms
            initSearchCharts(); // Assuming there are search-specific charts
            break;
        case 'content':
            renderContentTable(); // Assuming a function to render content
            initContentCharts(); // Assuming there are content-specific charts
            break;
        case 'analytics':
            initAnalyticsCharts(); // Assuming there are analytics-specific charts
            break;
        case 'settings':
            // Settings usually don't require dynamic rendering beyond initial load
            break;
    }
}

// Notifications
function toggleNotifications() {
    const dropdown = document.getElementById("notificationsDropdown");
    dropdown.classList.toggle("active");
}

function markAllAsRead() {
    document.querySelectorAll(".notification-item").forEach(item => {
        item.classList.remove("unread");
    });
    document.querySelector(".notification-count").style.display = "none";
    showNotification("Todas as notificações marcadas como lidas", "info");
}

function toggleUserMenu() {
    const dropdown = document.getElementById("userMenuDropdown");
    dropdown.classList.toggle("active");
}

function logout() {
    if (confirm("Tem certeza que deseja sair do painel administrativo?")) {
        window.location.href = "index.html";
    }
}

// Plants Section
function renderPlantsTable() {
    const tbody = document.getElementById("plantsTableBody");
    tbody.innerHTML = adminPlants.map(plant => `
        <tr>
            <td><input type="checkbox" data-plant-id="${plant.id}"></td>
            <td><img src="${plant.image}" alt="${plant.name}"></td>
            <td>${plant.name}</td>
            <td>${plant.scientificName}</td>
            <td>${plant.category}</td>
            <td><span class="status-badge ${plant.status}">${capitalizeFirstLetter(plant.status)}</span></td>
            <td>${plant.reviews}</td>
            <td>${formatDate(plant.createdAt)}</td>
            <td class="action-buttons">
                <button onclick="editPlant(${plant.id})"><i class="fas fa-edit"></i></button>
                <button onclick="deletePlant(${plant.id})"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join("");
}

function openAddPlantModal() {
    document.getElementById("addPlantModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeAddPlantModal() {
    document.getElementById("addPlantModal").style.display = "none";
    document.body.style.overflow = "";
    document.getElementById("addPlantForm").reset();
    document.getElementById("uploadedImages").innerHTML = "";
}

function handleImageUpload(event) {
    const files = event.target.files;
    const uploadedImagesContainer = document.getElementById("uploadedImages");
    uploadedImagesContainer.innerHTML = ""; // Clear previous images

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imgItem = document.createElement("div");
            imgItem.className = "uploaded-image-item";
            imgItem.innerHTML = `
                <img src="${e.target.result}" alt="Uploaded Image">
                <button class="remove-image-btn" onclick="removeImage(this)">&times;</button>
            `;
            uploadedImagesContainer.appendChild(imgItem);
        };
        reader.readAsDataURL(file);
    });
}

function removeImage(button) {
    button.closest(".uploaded-image-item").remove();
}

function triggerFileUpload() {
    document.getElementById("plantImages").click();
}

function handleAddPlantSubmit(event) {
    event.preventDefault();
    // In a real application, send data to backend
    showNotification("Nova planta adicionada com sucesso!", "success");
    closeAddPlantModal();
    // Re-render table to show new plant (simulated)
    adminPlants.unshift({
        id: adminPlants.length + 1,
        image: "https://via.placeholder.com/50x50/F5DEB3/4A2C2A?text=N",
        name: document.getElementById("plantName").value,
        scientificName: document.getElementById("scientificName").value,
        category: document.getElementById("plantCategorySelect").value,
        status: "pending",
        reviews: 0,
        createdAt: new Date().toISOString().split("T")[0]
    });
    renderPlantsTable();
}

function editPlant(plantId) {
    showNotification(`Editar planta ${plantId} - funcionalidade em desenvolvimento`, "info");
}

function deletePlant(plantId) {
    if (confirm(`Tem certeza que deseja excluir a planta ${plantId}?`)) {
        adminPlants = adminPlants.filter(plant => plant.id !== plantId);
        renderPlantsTable();
        showNotification(`Planta ${plantId} excluída com sucesso!`, "success");
    }
}

// Users Section
function renderUsersTable() {
    const tbody = document.getElementById("usersTableBody");
    tbody.innerHTML = adminUsers.map(user => `
        <tr>
            <td><input type="checkbox" data-user-id="${user.id}"></td>
            <td><img src="${user.avatar}" alt="${user.name}"></td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${capitalizeFirstLetter(user.role)}</td>
            <td><span class="status-badge ${user.status}">${capitalizeFirstLetter(user.status)}</span></td>
            <td>${user.plants}</td>
            <td>${formatDate(user.registeredAt)}</td>
            <td class="action-buttons">
                <button onclick="editUser(${user.id})"><i class="fas fa-edit"></i></button>
                <button onclick="deleteUser(${user.id})"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join("");
}

function editUser(userId) {
    showNotification(`Editar usuário ${userId} - funcionalidade em desenvolvimento`, "info");
}

function deleteUser(userId) {
    if (confirm(`Tem certeza que deseja excluir o usuário ${userId}?`)) {
        adminUsers = adminUsers.filter(user => user.id !== userId);
        renderUsersTable();
        showNotification(`Usuário ${userId} excluído com sucesso!`, "success");
    }
}

// Reviews Section
function renderReviewsList() {
    const container = document.getElementById("reviewsList");
    container.innerHTML = adminReviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="reviewer-info">
                    <img src="${review.reviewerAvatar}" alt="${review.reviewer}" class="reviewer-avatar">
                    <div class="review-meta">
                        <h5>${review.reviewer}</h5>
                        <span>${formatDate(review.date)}</span>
                    </div>
                </div>
                <div class="review-rating">
                    ${generateStarHTML(review.rating)}
                </div>
            </div>
            <h4 style="color: var(--primary-brown); margin-bottom: 0.5rem;">Avaliação de ${review.plantName}: ${review.title}</h4>
            <p class="review-text">${review.text}</p>
            <div class="review-actions">
                ${review.status === "pending" ? `<button onclick="approveReview(${review.id})">Aprovar</button>` : ""}
                ${review.status !== "rejected" ? `<button class="reject" onclick="rejectReview(${review.id})">Rejeitar</button>` : ""}
                ${review.status === "reported" ? `<button class="report" onclick="resolveReport(${review.id})">Resolver Reporte</button>` : ""}
                <button onclick="editReviewAdmin(${review.id})">Editar</button>
                <button class="reject" onclick="deleteReviewAdmin(${review.id})">Excluir</button>
            </div>
        </div>
    `).join("");
}

function approveReview(reviewId) {
    const review = adminReviews.find(r => r.id === reviewId);
    if (review) {
        review.status = "approved";
        renderReviewsList();
        showNotification(`Avaliação ${reviewId} aprovada!`, "success");
    }
}

function rejectReview(reviewId) {
    const review = adminReviews.find(r => r.id === reviewId);
    if (review) {
        review.status = "rejected";
        renderReviewsList();
        showNotification(`Avaliação ${reviewId} rejeitada!`, "info");
    }
}

function resolveReport(reviewId) {
    const review = adminReviews.find(r => r.id === reviewId);
    if (review) {
        review.status = "approved"; // Or rejected, depending on resolution
        renderReviewsList();
        showNotification(`Reporte da avaliação ${reviewId} resolvido!`, "success");
    }
}

function editReviewAdmin(reviewId) {
    showNotification(`Editar avaliação ${reviewId} - funcionalidade em desenvolvimento`, "info");
}

function deleteReviewAdmin(reviewId) {
    if (confirm(`Tem certeza que deseja excluir a avaliação ${reviewId}?`)) {
        adminReviews = adminReviews.filter(review => review.id !== reviewId);
        renderReviewsList();
        showNotification(`Avaliação ${reviewId} excluída com sucesso!`, "success");
    }
}

// Content Section
function switchContentTab(tabName) {
    document.querySelectorAll(".content-tab").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".content-tab-content").forEach(content => content.classList.remove("active"));

    document.querySelector(`.content-tab[data-tab="${tabName}"]`).classList.add("active");
    document.getElementById(tabName).classList.add("active");
}

function openContentEditor() {
    showNotification("Editor de conteúdo - funcionalidade em desenvolvimento", "info");
}

// Analytics Section (Chart.js integration)
let activityChart, usersChart, plantsChart, reviewsChart, devicesChart;

function initCharts() {
    const activityCtx = document.getElementById("activityChart").getContext("2d");
    activityChart = new Chart(activityCtx, {
        type: "line",
        data: {
            labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
            datasets: [{
                label: "Novos Usuários",
                data: [12, 19, 3, 5, 2, 3, 7],
                borderColor: "#556B2F",
                tension: 0.3,
                fill: false
            }, {
                label: "Novas Plantas",
                data: [5, 8, 10, 6, 4, 7, 9],
                borderColor: "#8B4513",
                tension: 0.3,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const usersCtx = document.getElementById("usersChart").getContext("2d");
    usersChart = new Chart(usersCtx, {
        type: "bar",
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
            datasets: [{
                label: "Usuários Ativos",
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: "#556B2F"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const plantsCtx = document.getElementById("plantsChart").getContext("2d");
    plantsChart = new Chart(plantsCtx, {
        type: "doughnut",
        data: {
            labels: ["Rosa", "Orquídea", "Samambaia", "Lavanda", "Manjericão"],
            datasets: [{
                data: [300, 200, 150, 100, 80],
                backgroundColor: ["#8B4513", "#4A2C2A", "#556B2F", "#F5DEB3", "#A0522D"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    const reviewsCtx = document.getElementById("reviewsChart").getContext("2d");
    reviewsChart = new Chart(reviewsCtx, {
        type: "line",
        data: {
            labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4"],
            datasets: [{
                label: "Novas Avaliações",
                data: [10, 15, 8, 20],
                borderColor: "#4A2C2A",
                tension: 0.3,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const devicesCtx = document.getElementById("devicesChart").getContext("2d");
    devicesChart = new Chart(devicesCtx, {
        type: "pie",
        data: {
            labels: ["Desktop", "Mobile", "Tablet"],
            datasets: [{
                data: [60, 30, 10],
                backgroundColor: ["#556B2F", "#8B4513", "#F5DEB3"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}

function refreshActivity() {
    showNotification("Atualizando atividade...", "info");
    // Simulate data refresh
    setTimeout(() => {
        activityChart.data.datasets[0].data = [15, 20, 5, 8, 4, 6, 10];
        activityChart.data.datasets[1].data = [7, 10, 12, 8, 6, 9, 11];
        activityChart.update();
        showNotification("Atividade atualizada!", "success");
    }, 1000);
}

function exportData() {
    showNotification("Exportando dados...", "info");
    // Simulate data export
    setTimeout(() => {
        showNotification("Dados exportados com sucesso!", "success");
    }, 1500);
}

// Utility functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
}

function generateStarHTML(rating) {
    let html = "";
    for (let i = 1; i <= 5; i++) {
        html += `<i class="fa${i <= rating ? "s" : "r"} fa-star"></i>`;
    }
    return html;
}

function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;

    const colors = {
        success: "#27ae60",
        error: "#e74c3c",
        info: "#3498db",
        warning: "#f39c12"
    };

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;

    document.body.appendChild(notification);

    setTimeout(() => notification.style.transform = "translateX(0)", 100);
    setTimeout(() => {
        notification.style.transform = "translateX(100%)";
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}




// Placeholder functions for charts and table rendering for other sections
function initUserCharts() {
    // Logic to initialize charts for the users section
    console.log('Initializing user charts...');
    // Example: const usersCtx = document.getElementById("userRegistrationChart").getContext("2d");
    // new Chart(usersCtx, { ... });
}

function initPlantCharts() {
    // Logic to initialize charts for the plants section
    console.log('Initializing plant charts...');
}

function initReviewCharts() {
    // Logic to initialize charts for the reviews section
    console.log('Initializing review charts...');
}

function renderSearchTermsTable() {
    // Logic to render the search terms table
    console.log('Rendering search terms table...');
    const tbody = document.getElementById("searchTermsTableBody");
    if (tbody) tbody.innerHTML = ''; // Clear existing content
    // Populate with actual data if available
}

function initSearchCharts() {
    // Logic to initialize charts for the searches section
    console.log('Initializing search charts...');
}

function renderContentTable() {
    // Logic to render the content table
    console.log('Rendering content table...');
    const tbody = document.getElementById("contentTableBody");
    if (tbody) tbody.innerHTML = ''; // Clear existing content
    // Populate with actual data if available
}

function initContentCharts() {
    // Logic to initialize charts for the content section
    console.log('Initializing content charts...');
}

function initAnalyticsCharts() {
    // Logic to initialize charts for the analytics section
    console.log('Initializing analytics charts...');
}

// Initial calls for sections that are active on page load
document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    showSection(currentAdminSection);
    renderPlantsTable();
    renderUsersTable();
    renderReviewsList();
    initCharts(); // This is for the dashboard charts
    // Add initial calls for other sections if they should be rendered on load
    // e.g., renderSearchTermsTable(); initSearchCharts();
    // For now, they will be called by showSection when navigated to.
});

