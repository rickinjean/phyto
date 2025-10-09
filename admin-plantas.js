// Admin Plants page functionality
let currentPlantsPage = 1;
let plantsPerPage = 20;
let totalPlants = 1289;

// Sample plants data
const adminPlantsData = [
    {
        id: 1,
        image: "https://via.placeholder.com/50x50/8B4513/FFFFFF?text=R",
        name: "Rosa Vermelha",
        scientificName: "Rosa rubiginosa",
        category: "ornamental",
        status: "published",
        difficulty: "easy",
        favorites: 2456,
        reviews: 234,
        createdAt: "2023-01-10"
    },
    {
        id: 2,
        image: "https://via.placeholder.com/50x50/556B2F/FFFFFF?text=L",
        name: "Lavanda",
        scientificName: "Lavandula angustifolia",
        category: "aromatica",
        status: "published",
        difficulty: "easy",
        favorites: 1987,
        reviews: 189,
        createdAt: "2023-02-15"
    },
    {
        id: 3,
        image: "https://via.placeholder.com/50x50/228B22/FFFFFF?text=S",
        name: "Suculenta Echeveria",
        scientificName: "Echeveria elegans",
        category: "suculenta",
        status: "published",
        difficulty: "easy",
        favorites: 1756,
        reviews: 156,
        createdAt: "2023-03-01"
    },
    {
        id: 4,
        image: "https://via.placeholder.com/50x50/9932CC/FFFFFF?text=O",
        name: "Orquídea Phalaenopsis",
        scientificName: "Phalaenopsis amabilis",
        category: "ornamental",
        status: "published",
        difficulty: "hard",
        favorites: 1542,
        reviews: 142,
        createdAt: "2023-04-20"
    },
    {
        id: 5,
        image: "https://via.placeholder.com/50x50/32CD32/FFFFFF?text=M",
        name: "Manjericão",
        scientificName: "Ocimum basilicum",
        category: "alimenticia",
        status: "published",
        difficulty: "easy",
        favorites: 1389,
        reviews: 128,
        createdAt: "2023-05-10"
    },
    {
        id: 6,
        image: "https://via.placeholder.com/50x50/FF6347/FFFFFF?text=C",
        name: "Cacto Mandacaru",
        scientificName: "Cereus jamacaru",
        category: "suculenta",
        status: "pending",
        difficulty: "medium",
        favorites: 0,
        reviews: 0,
        createdAt: "2024-03-15"
    }
];

// Chart instances
let totalPlantsChart, newPlantsChart, pendingPlantsChart, favoritePlantsChart;
let plantCategoriesChart, plantAdditionTrendsChart, popularPlantsChart;
let plantCareChart, seasonalTrendsChart;

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    setupPlantsEventListeners();
    renderPlantsTable();
    initPlantsCharts();
    updatePlantsStats();
    loadPlantActivity();
});

// Event Listeners
function setupPlantsEventListeners() {
    // Search and filters
    document.getElementById("plantSearch").addEventListener("input", filterPlants);
    document.getElementById("plantCategory").addEventListener("change", filterPlants);
    document.getElementById("plantStatus").addEventListener("change", filterPlants);
    document.getElementById("plantDifficulty").addEventListener("change", filterPlants);
    
    // Activity filters
    document.querySelectorAll(".activity-filters .filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".activity-filters .filter-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            filterPlantActivity(e.target.dataset.filter);
        });
    });

    // View options
    document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            switchPlantsView(e.target.dataset.view);
        });
    });

    // Add Plant Modal
    const addPlantModal = document.getElementById("addPlantModal");
    if (addPlantModal) {
        document.querySelector(".close-modal").addEventListener("click", closeAddPlantModal);
        document.getElementById("addPlantForm").addEventListener("submit", handleAddPlantSubmit);
        document.getElementById("plantImages").addEventListener("change", handleImageUpload);
    }
}

// Render plants table
function renderPlantsTable() {
    const tbody = document.getElementById("plantsTableBody");
    if (!tbody) return;

    tbody.innerHTML = adminPlantsData.map(plant => `
        <tr>
            <td><input type="checkbox" data-plant-id="${plant.id}"></td>
            <td><img src="${plant.image}" alt="${plant.name}" class="plant-image"></td>
            <td>${plant.name}</td>
            <td><em>${plant.scientificName}</em></td>
            <td><span class="category-badge ${plant.category}">${capitalizeFirstLetter(plant.category)}</span></td>
            <td><span class="status-badge ${plant.status}">${capitalizeFirstLetter(plant.status)}</span></td>
            <td><span class="difficulty-badge ${plant.difficulty}">${capitalizeFirstLetter(plant.difficulty)}</span></td>
            <td>${plant.favorites.toLocaleString()}</td>
            <td>${plant.reviews}</td>
            <td>${formatDate(plant.createdAt)}</td>
            <td class="action-buttons">
                <button onclick="editPlant(${plant.id})" title="Editar planta">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="viewPlantDetails(${plant.id})" title="Ver detalhes">
                    <i class="fas fa-eye"></i>
                </button>
                ${plant.status === 'pending' ? `
                    <button onclick="approvePlant(${plant.id})" title="Aprovar planta" class="success">
                        <i class="fas fa-check"></i>
                    </button>
                ` : ''}
                <button onclick="deletePlant(${plant.id})" title="Excluir planta" class="danger">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join("");
}

// Initialize charts
function initPlantsCharts() {
    // Total Plants Chart (small stat chart)
    const totalPlantsCtx = document.getElementById("totalPlantsChart");
    if (totalPlantsCtx) {
        totalPlantsChart = new Chart(totalPlantsCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [{
                    data: [1200, 1220, 1245, 1260, 1275, 1285, 1289],
                    borderColor: "#556B2F",
                    backgroundColor: "rgba(85, 107, 47, 0.1)",
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { display: false },
                    y: { display: false }
                },
                elements: { point: { radius: 0 } }
            }
        });
    }

    // New Plants Chart (small stat chart)
    const newPlantsCtx = document.getElementById("newPlantsChart");
    if (newPlantsCtx) {
        newPlantsChart = new Chart(newPlantsCtx.getContext("2d"), {
            type: "bar",
            data: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [{
                    data: [5, 8, 6, 7, 9, 5, 8],
                    backgroundColor: "#8B4513",
                    borderRadius: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { display: false },
                    y: { display: false }
                }
            }
        });
    }

    // Pending Plants Chart (small stat chart)
    const pendingPlantsCtx = document.getElementById("pendingPlantsChart");
    if (pendingPlantsCtx) {
        pendingPlantsChart = new Chart(pendingPlantsCtx.getContext("2d"), {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [8, 1281],
                    backgroundColor: ["#ffc107", "#e9ecef"],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                cutout: "70%"
            }
        });
    }

    // Favorite Plants Chart (small stat chart)
    const favoritePlantsCtx = document.getElementById("favoritePlantsChart");
    if (favoritePlantsCtx) {
        favoritePlantsChart = new Chart(favoritePlantsCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [{
                    data: [14000, 14500, 15000, 15200, 15400, 15600, 15678],
                    borderColor: "#dc3545",
                    backgroundColor: "rgba(220, 53, 69, 0.1)",
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { display: false },
                    y: { display: false }
                },
                elements: { point: { radius: 0 } }
            }
        });
    }

    // Plant Categories Distribution Chart
    const plantCategoriesCtx = document.getElementById("plantCategoriesChart");
    if (plantCategoriesCtx) {
        plantCategoriesChart = new Chart(plantCategoriesCtx.getContext("2d"), {
            type: "doughnut",
            data: {
                labels: ["Ornamental", "Medicinal", "Alimentícia", "Aromática", "Suculenta"],
                datasets: [{
                    data: [450, 320, 280, 150, 89],
                    backgroundColor: ["#556B2F", "#8B4513", "#F5DEB3", "#4A2C2A", "#228B22"]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: "bottom" }
                }
            }
        });
    }

    // Plant Addition Trends Chart
    const plantAdditionTrendsCtx = document.getElementById("plantAdditionTrendsChart");
    if (plantAdditionTrendsCtx) {
        plantAdditionTrendsChart = new Chart(plantAdditionTrendsCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                datasets: [{
                    label: "Plantas Adicionadas",
                    data: [45, 52, 48, 61, 55, 67, 73, 69, 58, 64, 71, 42],
                    borderColor: "#556B2F",
                    backgroundColor: "rgba(85, 107, 47, 0.1)",
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }

    // Popular Plants Chart
    const popularPlantsCtx = document.getElementById("popularPlantsChart");
    if (popularPlantsCtx) {
        popularPlantsChart = new Chart(popularPlantsCtx.getContext("2d"), {
            type: "bar",
            data: {
                labels: ["Rosa", "Lavanda", "Suculenta", "Orquídea", "Manjericão"],
                datasets: [{
                    label: "Favoritos",
                    data: [2456, 1987, 1756, 1542, 1389],
                    backgroundColor: "#556B2F"
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }

    // Plant Care Difficulty Chart
    const plantCareCtx = document.getElementById("plantCareChart");
    if (plantCareCtx) {
        plantCareChart = new Chart(plantCareCtx.getContext("2d"), {
            type: "pie",
            data: {
                labels: ["Fácil", "Médio", "Difícil"],
                datasets: [{
                    data: [65, 25, 10],
                    backgroundColor: ["#28a745", "#ffc107", "#dc3545"]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: "bottom" }
                }
            }
        });
    }

    // Seasonal Trends Chart
    const seasonalTrendsCtx = document.getElementById("seasonalTrendsChart");
    if (seasonalTrendsCtx) {
        seasonalTrendsChart = new Chart(seasonalTrendsCtx.getContext("2d"), {
            type: "radar",
            data: {
                labels: ["Primavera", "Verão", "Outono", "Inverno"],
                datasets: [
                    {
                        label: "Interesse por Ornamentais",
                        data: [85, 70, 60, 45],
                        borderColor: "#556B2F",
                        backgroundColor: "rgba(85, 107, 47, 0.2)"
                    },
                    {
                        label: "Interesse por Alimentícias",
                        data: [90, 95, 80, 30],
                        borderColor: "#8B4513",
                        backgroundColor: "rgba(139, 69, 19, 0.2)"
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: "bottom" }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
}

// Update statistics
function updatePlantsStats() {
    // Update stat cards with animation
    animateNumber("totalPlantsCount", 1289);
    animateNumber("newPlantsCount", 42);
    animateNumber("pendingPlantsCount", 8);
    animateNumber("favoritePlantsCount", 15678);
}

// Load plant activity
function loadPlantActivity() {
    const activityList = document.getElementById("plantActivityList");
    if (!activityList) return;

    // Activity is already populated in HTML, but we can add real-time updates here
    setInterval(() => {
        // Simulate new activity
        if (Math.random() > 0.7) {
            addNewPlantActivity();
        }
    }, 45000); // Check every 45 seconds
}

// Add new plant activity
function addNewPlantActivity() {
    const activityList = document.getElementById("plantActivityList");
    const activities = [
        {
            type: "added",
            icon: "fas fa-plus-circle",
            text: "Nova planta <strong>Cacto Estrela</strong> foi adicionada ao catálogo",
            time: "agora"
        },
        {
            type: "favorited",
            icon: "fas fa-heart",
            text: "<strong>Rosa Vermelha</strong> foi favoritada por um usuário",
            time: "agora"
        },
        {
            type: "updated",
            icon: "fas fa-edit",
            text: "Informações da <strong>Lavanda</strong> foram atualizadas",
            time: "agora"
        }
    ];

    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    
    const newActivity = document.createElement("div");
    newActivity.className = `activity-item ${randomActivity.type}`;
    newActivity.innerHTML = `
        <div class="activity-icon">
            <i class="${randomActivity.icon}"></i>
        </div>
        <div class="activity-content">
            <p>${randomActivity.text}</p>
            <span>${randomActivity.time}</span>
        </div>
    `;

    activityList.insertBefore(newActivity, activityList.firstChild);

    // Remove last item if too many
    if (activityList.children.length > 8) {
        activityList.removeChild(activityList.lastChild);
    }
}

// Filter plants
function filterPlants() {
    const searchTerm = document.getElementById("plantSearch").value.toLowerCase();
    const categoryFilter = document.getElementById("plantCategory").value;
    const statusFilter = document.getElementById("plantStatus").value;
    const difficultyFilter = document.getElementById("plantDifficulty").value;

    // In a real application, this would make an API call
    showNotification("Filtros aplicados - funcionalidade em desenvolvimento", "info");
}

// Filter plant activity
function filterPlantActivity(filter) {
    const activities = document.querySelectorAll("#plantActivityList .activity-item");
    
    activities.forEach(activity => {
        if (filter === "all" || activity.dataset.type === filter) {
            activity.style.display = "flex";
        } else {
            activity.style.display = "none";
        }
    });
}

// Switch plants view
function switchPlantsView(view) {
    const tableContainer = document.querySelector(".plants-table-container");
    
    if (view === "grid") {
        // Convert to grid view (simplified implementation)
        showNotification("Visualização em grade - funcionalidade em desenvolvimento", "info");
    } else {
        // Table view is default
        tableContainer.style.display = "block";
    }
}

// Plant management functions
function editPlant(plantId) {
    showNotification(`Editar planta ${plantId} - funcionalidade em desenvolvimento`, "info");
}

function viewPlantDetails(plantId) {
    const plant = adminPlantsData.find(p => p.id === plantId);
    if (plant) {
        showNotification(`Visualizando detalhes de ${plant.name}`, "info");
        // In a real app, this would open a modal or navigate to a detail page
    }
}

function approvePlant(plantId) {
    if (confirm(`Aprovar a planta ${plantId}?`)) {
        const plant = adminPlantsData.find(p => p.id === plantId);
        if (plant) {
            plant.status = "published";
            renderPlantsTable();
            showNotification(`Planta ${plant.name} aprovada e publicada!`, "success");
        }
    }
}

function deletePlant(plantId) {
    if (confirm(`Tem certeza que deseja excluir permanentemente a planta ${plantId}?`)) {
        const plantIndex = adminPlantsData.findIndex(p => p.id === plantId);
        if (plantIndex !== -1) {
            const plantName = adminPlantsData[plantIndex].name;
            adminPlantsData.splice(plantIndex, 1);
            renderPlantsTable();
            showNotification(`Planta ${plantName} excluída com sucesso!`, "success");
        }
    }
}

// Export functions
function exportPlants() {
    showNotification("Exportando catálogo de plantas...", "info");
    // Simulate export process
    setTimeout(() => {
        showNotification("Catálogo de plantas exportado com sucesso!", "success");
    }, 2000);
}

// Modal functions
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

// Image upload handling
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

// Form submission
function handleAddPlantSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById("plantName").value,
        scientificName: document.getElementById("scientificName").value,
        category: document.getElementById("plantCategorySelect").value,
        description: document.getElementById("plantDescription").value,
        difficulty: document.getElementById("careDifficulty").value
    };
    
    // Simulate adding plant
    showNotification("Nova planta adicionada com sucesso!", "success");
    closeAddPlantModal();
    
    // Add to plants list (simulation)
    const newPlant = {
        id: adminPlantsData.length + 1,
        image: `https://via.placeholder.com/50x50/556B2F/FFFFFF?text=${formData.name.charAt(0)}`,
        name: formData.name,
        scientificName: formData.scientificName,
        category: formData.category,
        status: "pending",
        difficulty: formData.difficulty,
        favorites: 0,
        reviews: 0,
        createdAt: new Date().toISOString().split("T")[0]
    };
    
    adminPlantsData.unshift(newPlant);
    renderPlantsTable();
}

// Chart update functions
function updateCategoryChart() {
    const view = document.getElementById("categoryView").value;
    showNotification(`Atualizando gráfico por ${view}`, "info");
}

function updatePopularityChart() {
    const metric = document.getElementById("popularityMetric").value;
    showNotification(`Visualizando plantas por ${metric}`, "info");
}

// Top lists functions
function updateTopSearched() {
    const period = document.getElementById("searchPeriod").value;
    showNotification(`Atualizando top pesquisadas para ${period}`, "info");
}

function refreshFavorites() {
    showNotification("Atualizando plantas mais favoritadas...", "info");
    setTimeout(() => {
        showNotification("Lista de favoritas atualizada!", "success");
    }, 1000);
}

// Load more activity
function loadMorePlantActivity() {
    showNotification("Carregando mais atividades...", "info");
    // Simulate loading more activities
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            addNewPlantActivity();
        }
        showNotification("Mais atividades carregadas!", "success");
    }, 1000);
}

// Utility functions
function animateNumber(elementId, targetNumber) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const startNumber = 0;
    const duration = 2000;
    const startTime = performance.now();

    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * progress);
        
        element.textContent = currentNumber.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
}
