// Admin Users page functionality
let currentUsersPage = 1;
let usersPerPage = 20;
let totalUsers = 4127;

// Sample users data
const adminUsersData = [
    {
        id: 1,
        avatar: "https://via.placeholder.com/50x50/F5DEB3/4A2C2A?text=MS",
        name: "Maria Silva",
        email: "maria.silva@example.com",
        role: "user",
        status: "active",
        plants: 47,
        lastAccess: "2024-03-15 14:30",
        registeredAt: "2024-01-15"
    },
    {
        id: 2,
        avatar: "https://via.placeholder.com/50x50/8B4513/FFFFFF?text=JS",
        name: "João Santos",
        email: "joao.santos@example.com",
        role: "user",
        status: "active",
        plants: 23,
        lastAccess: "2024-03-15 10:15",
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
        lastAccess: "2024-03-15 15:45",
        registeredAt: "2023-01-01"
    },
    {
        id: 4,
        avatar: "https://via.placeholder.com/50x50/9932CC/FFFFFF?text=AC",
        name: "Ana Costa",
        email: "ana.costa@example.com",
        role: "user",
        status: "active",
        plants: 12,
        lastAccess: "2024-03-15 09:20",
        registeredAt: "2024-03-10"
    },
    {
        id: 5,
        avatar: "https://via.placeholder.com/50x50/32CD32/FFFFFF?text=CS",
        name: "Carlos Silva",
        email: "carlos.silva@example.com",
        role: "moderator",
        status: "active",
        plants: 34,
        lastAccess: "2024-03-14 18:30",
        registeredAt: "2023-11-05"
    }
];

// Chart instances
let totalUsersChart, newUsersChart, deletedUsersChart, activeUsersChart;
let userRegistrationChart, userActivityHeatmap, userDemographicsChart;
let userEngagementChart, userRetentionChart;

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    setupUsersEventListeners();
    renderUsersTable();
    initUsersCharts();
    updateUsersStats();
    loadUserActivity();
});

// Event Listeners
function setupUsersEventListeners() {
    // Search and filters
    document.getElementById("userSearch").addEventListener("input", filterUsers);
    document.getElementById("userRole").addEventListener("change", filterUsers);
    document.getElementById("userStatus").addEventListener("change", filterUsers);
    
    // Activity filters
    document.querySelectorAll(".activity-filters .filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".activity-filters .filter-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            filterUserActivity(e.target.dataset.filter);
        });
    });

    // View options
    document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            switchUsersView(e.target.dataset.view);
        });
    });
}

// Render users table
function renderUsersTable() {
    const tbody = document.getElementById("usersTableBody");
    if (!tbody) return;

    tbody.innerHTML = adminUsersData.map(user => `
        <tr>
            <td><input type="checkbox" data-user-id="${user.id}"></td>
            <td><img src="${user.avatar}" alt="${user.name}" class="user-avatar"></td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><span class="role-badge ${user.role}">${capitalizeFirstLetter(user.role)}</span></td>
            <td><span class="status-badge ${user.status}">${capitalizeFirstLetter(user.status)}</span></td>
            <td>${user.plants}</td>
            <td>${formatDateTime(user.lastAccess)}</td>
            <td>${formatDate(user.registeredAt)}</td>
            <td class="action-buttons">
                <button onclick="editUser(${user.id})" title="Editar usuário">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="viewUserDetails(${user.id})" title="Ver detalhes">
                    <i class="fas fa-eye"></i>
                </button>
                <button onclick="suspendUser(${user.id})" title="Suspender usuário">
                    <i class="fas fa-ban"></i>
                </button>
                <button onclick="deleteUser(${user.id})" title="Excluir usuário" class="danger">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join("");
}

// Initialize charts
function initUsersCharts() {
    // Total Users Chart (small stat chart)
    const totalUsersCtx = document.getElementById("totalUsersChart");
    if (totalUsersCtx) {
        totalUsersChart = new Chart(totalUsersCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [{
                    data: [3800, 3850, 3920, 3980, 4050, 4100, 4127],
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

    // New Users Chart (small stat chart)
    const newUsersCtx = document.getElementById("newUsersChart");
    if (newUsersCtx) {
        newUsersChart = new Chart(newUsersCtx.getContext("2d"), {
            type: "bar",
            data: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [{
                    data: [20, 25, 30, 28, 35, 32, 40],
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

    // Deleted Users Chart (small stat chart)
    const deletedUsersCtx = document.getElementById("deletedUsersChart");
    if (deletedUsersCtx) {
        deletedUsersChart = new Chart(deletedUsersCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [{
                    data: [1, 2, 1, 3, 2, 1, 2],
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

    // Active Users Chart (small stat chart)
    const activeUsersCtx = document.getElementById("activeUsersChart");
    if (activeUsersCtx) {
        activeUsersChart = new Chart(activeUsersCtx.getContext("2d"), {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [3892, 235],
                    backgroundColor: ["#28a745", "#e9ecef"],
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

    // User Registration Trends Chart
    const userRegistrationCtx = document.getElementById("userRegistrationChart");
    if (userRegistrationCtx) {
        userRegistrationChart = new Chart(userRegistrationCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["1 Mar", "5 Mar", "10 Mar", "15 Mar", "20 Mar", "25 Mar", "30 Mar"],
                datasets: [
                    {
                        label: "Novos Cadastros",
                        data: [25, 30, 28, 35, 32, 40, 38],
                        borderColor: "#556B2F",
                        backgroundColor: "rgba(85, 107, 47, 0.1)",
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: "Contas Excluídas",
                        data: [2, 1, 3, 2, 1, 2, 1],
                        borderColor: "#dc3545",
                        backgroundColor: "rgba(220, 53, 69, 0.1)",
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: "top" }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }

    // User Activity Heatmap
    const userActivityHeatmapCtx = document.getElementById("userActivityHeatmap");
    if (userActivityHeatmapCtx) {
        userActivityHeatmap = new Chart(userActivityHeatmapCtx.getContext("2d"), {
            type: "bar",
            data: {
                labels: ["0h", "2h", "4h", "6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h"],
                datasets: [{
                    label: "Usuários Ativos",
                    data: [45, 23, 12, 34, 89, 156, 234, 312, 289, 198, 145, 78],
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

    // User Demographics Chart
    const userDemographicsCtx = document.getElementById("userDemographicsChart");
    if (userDemographicsCtx) {
        userDemographicsChart = new Chart(userDemographicsCtx.getContext("2d"), {
            type: "doughnut",
            data: {
                labels: ["18-25", "26-35", "36-45", "46-55", "55+"],
                datasets: [{
                    data: [15, 35, 25, 15, 10],
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

    // User Engagement Chart
    const userEngagementCtx = document.getElementById("userEngagementChart");
    if (userEngagementCtx) {
        userEngagementChart = new Chart(userEngagementCtx.getContext("2d"), {
            type: "bar",
            data: {
                labels: ["Diário", "Semanal", "Mensal", "Ocasional", "Inativo"],
                datasets: [{
                    label: "Usuários",
                    data: [1200, 1800, 900, 400, 227],
                    backgroundColor: ["#28a745", "#556B2F", "#ffc107", "#fd7e14", "#dc3545"]
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

    // User Retention Chart
    const userRetentionCtx = document.getElementById("userRetentionChart");
    if (userRetentionCtx) {
        userRetentionChart = new Chart(userRetentionCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Mês 2", "Mês 3"],
                datasets: [{
                    label: "Taxa de Retenção (%)",
                    data: [100, 75, 60, 50, 40, 35],
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
                    y: { 
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
}

// Update statistics
function updateUsersStats() {
    // Update stat cards with animation
    animateNumber("totalUsersCount", 4127);
    animateNumber("newUsersCount", 186);
    animateNumber("deletedUsersCount", 12);
    animateNumber("activeUsersCount", 3892);
}

// Load user activity
function loadUserActivity() {
    const activityList = document.getElementById("userActivityList");
    if (!activityList) return;

    // Activity is already populated in HTML, but we can add real-time updates here
    setInterval(() => {
        // Simulate new activity
        if (Math.random() > 0.8) {
            addNewUserActivity();
        }
    }, 30000); // Check every 30 seconds
}

// Add new user activity
function addNewUserActivity() {
    const activityList = document.getElementById("userActivityList");
    const activities = [
        {
            type: "registration",
            icon: "fas fa-user-plus",
            text: "<strong>Novo usuário</strong> se cadastrou no sistema",
            time: "agora"
        },
        {
            type: "login",
            icon: "fas fa-sign-in-alt",
            text: "<strong>Usuário ativo</strong> fez login no sistema",
            time: "agora"
        },
        {
            type: "activity",
            icon: "fas fa-heart",
            text: "<strong>Usuário</strong> favoritou uma planta",
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
    if (activityList.children.length > 10) {
        activityList.removeChild(activityList.lastChild);
    }
}

// Filter users
function filterUsers() {
    const searchTerm = document.getElementById("userSearch").value.toLowerCase();
    const roleFilter = document.getElementById("userRole").value;
    const statusFilter = document.getElementById("userStatus").value;

    // In a real application, this would make an API call
    // For now, we'll just show a notification
    showNotification("Filtros aplicados - funcionalidade em desenvolvimento", "info");
}

// Filter user activity
function filterUserActivity(filter) {
    const activities = document.querySelectorAll("#userActivityList .activity-item");
    
    activities.forEach(activity => {
        if (filter === "all" || activity.dataset.type === filter) {
            activity.style.display = "flex";
        } else {
            activity.style.display = "none";
        }
    });
}

// Switch users view
function switchUsersView(view) {
    const tableContainer = document.querySelector(".users-table-container");
    
    if (view === "grid") {
        // Convert to grid view (simplified implementation)
        showNotification("Visualização em grade - funcionalidade em desenvolvimento", "info");
    } else {
        // Table view is default
        tableContainer.style.display = "block";
    }
}

// User management functions
function editUser(userId) {
    showNotification(`Editar usuário ${userId} - funcionalidade em desenvolvimento`, "info");
}

function viewUserDetails(userId) {
    const user = adminUsersData.find(u => u.id === userId);
    if (user) {
        showNotification(`Visualizando detalhes de ${user.name}`, "info");
        // In a real app, this would open a modal or navigate to a detail page
    }
}

function suspendUser(userId) {
    if (confirm(`Tem certeza que deseja suspender o usuário ${userId}?`)) {
        showNotification(`Usuário ${userId} suspenso temporariamente`, "warning");
        // Update user status in the table
        const user = adminUsersData.find(u => u.id === userId);
        if (user) {
            user.status = "suspended";
            renderUsersTable();
        }
    }
}

function deleteUser(userId) {
    if (confirm(`Tem certeza que deseja excluir permanentemente o usuário ${userId}?`)) {
        const userIndex = adminUsersData.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            adminUsersData.splice(userIndex, 1);
            renderUsersTable();
            showNotification(`Usuário ${userId} excluído com sucesso!`, "success");
        }
    }
}

// Export functions
function exportUsers() {
    showNotification("Exportando dados dos usuários...", "info");
    // Simulate export process
    setTimeout(() => {
        showNotification("Dados dos usuários exportados com sucesso!", "success");
    }, 2000);
}

// Modal functions
function openAddUserModal() {
    document.getElementById("addUserModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeAddUserModal() {
    document.getElementById("addUserModal").style.display = "none";
    document.body.style.overflow = "";
    document.getElementById("addUserForm").reset();
}

// Chart update functions
function updateRegistrationChart() {
    const period = document.getElementById("registrationPeriod").value;
    // Update chart data based on period
    showNotification(`Atualizando gráfico para ${period} dias`, "info");
}

function updateDemographicChart() {
    const type = document.getElementById("demographicType").value;
    // Update chart data based on type
    showNotification(`Visualizando demografia por ${type}`, "info");
}

// Load more activity
function loadMoreUserActivity() {
    showNotification("Carregando mais atividades...", "info");
    // Simulate loading more activities
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            addNewUserActivity();
        }
        showNotification("Mais atividades carregadas!", "success");
    }, 1000);
}

// Refresh functions
function refreshQuickStats() {
    showNotification("Atualizando estatísticas...", "info");
    setTimeout(() => {
        updateUsersStats();
        showNotification("Estatísticas atualizadas!", "success");
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

function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    return date.toLocaleDateString("pt-BR") + " " + date.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    });
}

// Add form submission handler
document.addEventListener("DOMContentLoaded", () => {
    const addUserForm = document.getElementById("addUserForm");
    if (addUserForm) {
        addUserForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const formData = new FormData(addUserForm);
            const userData = {
                name: document.getElementById("userName").value,
                email: document.getElementById("userEmail").value,
                role: document.getElementById("userRoleSelect").value
            };
            
            // Simulate adding user
            showNotification("Novo usuário adicionado com sucesso!", "success");
            closeAddUserModal();
            
            // Add to users list (simulation)
            const newUser = {
                id: adminUsersData.length + 1,
                avatar: `https://via.placeholder.com/50x50/556B2F/FFFFFF?text=${userData.name.charAt(0)}`,
                name: userData.name,
                email: userData.email,
                role: userData.role,
                status: "active",
                plants: 0,
                lastAccess: new Date().toISOString(),
                registeredAt: new Date().toISOString().split("T")[0]
            };
            
            adminUsersData.unshift(newUser);
            renderUsersTable();
        });
    }
});
