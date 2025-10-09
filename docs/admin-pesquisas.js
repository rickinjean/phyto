// Admin Search Analytics page functionality
let searchAnalyticsData = {
    totalSearches: 18456,
    searchesPerHour: 156,
    noResults: 892,
    uniqueSearchers: 3247
};

// Sample search data
const searchTermsData = [
    { term: "rosa", count: 1234, percentage: 6.7, results: 45, clickRate: 78.5, trend: 12 },
    { term: "lavanda", count: 987, percentage: 5.3, results: 23, clickRate: 82.1, trend: 8 },
    { term: "suculenta", count: 756, percentage: 4.1, results: 67, clickRate: 65.3, trend: 15 },
    { term: "orquídea", count: 642, percentage: 3.5, results: 34, clickRate: 71.2, trend: -3 },
    { term: "manjericão", count: 589, percentage: 3.2, results: 12, clickRate: 89.4, trend: 22 }
];

const noResultsData = [
    { term: "plantas carnívoras", attempts: 45, lastSearch: "2 horas atrás", suggestion: "Adicionar categoria" },
    { term: "bonsai ficus", attempts: 32, lastSearch: "4 horas atrás", suggestion: "Expandir categoria bonsai" },
    { term: "plantas aquáticas", attempts: 28, lastSearch: "6 horas atrás", suggestion: "Nova categoria" },
    { term: "ervas medicinais", attempts: 23, lastSearch: "8 horas atrás", suggestion: "Expandir seção medicinal" },
    { term: "cactos raros", attempts: 19, lastSearch: "12 horas atrás", suggestion: "Subcategoria de cactos" }
];

// Chart instances
let totalSearchesChart, searchesPerHourChart, noResultsChart, uniqueSearchersChart;
let searchVolumeChart, searchSuccessChart, topSearchTermsChart;
let searchCategoriesChart, searchPatternsChart;

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    setupSearchEventListeners();
    initSearchCharts();
    updateSearchStats();
    loadSearchActivity();
    renderTopTermsTable();
    renderNoResultsTable();
});

// Event Listeners
function setupSearchEventListeners() {
    // Activity filters
    document.querySelectorAll(".activity-filters .filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".activity-filters .filter-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            filterSearchActivity(e.target.dataset.filter);
        });
    });

    // Chart period selectors
    const volumePeriodSelect = document.getElementById("searchVolumePeriod");
    if (volumePeriodSelect) {
        volumePeriodSelect.addEventListener("change", updateSearchVolumeChart);
    }

    const termsPeriodSelect = document.getElementById("searchTermsPeriod");
    if (termsPeriodSelect) {
        termsPeriodSelect.addEventListener("change", updateSearchTermsChart);
    }
}

// Initialize charts
function initSearchCharts() {
    // Total Searches Chart (small stat chart)
    const totalSearchesCtx = document.getElementById("totalSearchesChart");
    if (totalSearchesCtx) {
        totalSearchesChart = new Chart(totalSearchesCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [{
                    data: [16500, 17200, 17800, 18100, 18300, 18400, 18456],
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

    // Searches Per Hour Chart (small stat chart)
    const searchesPerHourCtx = document.getElementById("searchesPerHourChart");
    if (searchesPerHourCtx) {
        searchesPerHourChart = new Chart(searchesPerHourCtx.getContext("2d"), {
            type: "bar",
            data: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [{
                    data: [120, 135, 145, 150, 155, 152, 156],
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

    // No Results Chart (small stat chart)
    const noResultsCtx = document.getElementById("noResultsChart");
    if (noResultsCtx) {
        noResultsChart = new Chart(noResultsCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [{
                    data: [95, 102, 89, 98, 105, 88, 92],
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

    // Unique Searchers Chart (small stat chart)
    const uniqueSearchersCtx = document.getElementById("uniqueSearchersChart");
    if (uniqueSearchersCtx) {
        uniqueSearchersChart = new Chart(uniqueSearchersCtx.getContext("2d"), {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [3247, 880],
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

    // Search Volume Chart
    const searchVolumeCtx = document.getElementById("searchVolumeChart");
    if (searchVolumeCtx) {
        searchVolumeChart = new Chart(searchVolumeCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
                datasets: [
                    {
                        label: "Pesquisas Totais",
                        data: [2100, 2300, 2500, 2800, 3200, 2900, 2600],
                        borderColor: "#556B2F",
                        backgroundColor: "rgba(85, 107, 47, 0.1)",
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: "Pesquisas com Resultados",
                        data: [1995, 2185, 2375, 2660, 3040, 2755, 2470],
                        borderColor: "#28a745",
                        backgroundColor: "rgba(40, 167, 69, 0.1)",
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

    // Search Success Rate Chart
    const searchSuccessCtx = document.getElementById("searchSuccessChart");
    if (searchSuccessCtx) {
        searchSuccessChart = new Chart(searchSuccessCtx.getContext("2d"), {
            type: "doughnut",
            data: {
                labels: ["Com Resultados", "Sem Resultados"],
                datasets: [{
                    data: [95.2, 4.8],
                    backgroundColor: ["#28a745", "#dc3545"]
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

    // Top Search Terms Chart
    const topSearchTermsCtx = document.getElementById("topSearchTermsChart");
    if (topSearchTermsCtx) {
        topSearchTermsChart = new Chart(topSearchTermsCtx.getContext("2d"), {
            type: "bar",
            data: {
                labels: ["rosa", "lavanda", "suculenta", "orquídea", "manjericão"],
                datasets: [{
                    label: "Pesquisas",
                    data: [1234, 987, 756, 642, 589],
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

    // Search Categories Chart
    const searchCategoriesCtx = document.getElementById("searchCategoriesChart");
    if (searchCategoriesCtx) {
        searchCategoriesChart = new Chart(searchCategoriesCtx.getContext("2d"), {
            type: "pie",
            data: {
                labels: ["Ornamental", "Medicinal", "Alimentícia", "Aromática", "Suculenta"],
                datasets: [{
                    data: [35, 25, 20, 12, 8],
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

    // Search Patterns Chart
    const searchPatternsCtx = document.getElementById("searchPatternsChart");
    if (searchPatternsCtx) {
        searchPatternsChart = new Chart(searchPatternsCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["0h", "2h", "4h", "6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h"],
                datasets: [{
                    label: "Pesquisas por Hora",
                    data: [25, 15, 8, 12, 45, 89, 156, 234, 312, 189, 98, 45],
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
}

// Update statistics
function updateSearchStats() {
    // Update stat cards with animation
    animateNumber("totalSearchesCount", searchAnalyticsData.totalSearches);
    animateNumber("searchesPerHour", searchAnalyticsData.searchesPerHour);
    animateNumber("noResultsCount", searchAnalyticsData.noResults);
    animateNumber("uniqueSearchersCount", searchAnalyticsData.uniqueSearchers);
}

// Load search activity
function loadSearchActivity() {
    const activityList = document.getElementById("searchActivityList");
    if (!activityList) return;

    // Activity is already populated in HTML, but we can add real-time updates here
    setInterval(() => {
        // Simulate new search activity
        if (Math.random() > 0.6) {
            addNewSearchActivity();
        }
    }, 20000); // Check every 20 seconds
}

// Add new search activity
function addNewSearchActivity() {
    const activityList = document.getElementById("searchActivityList");
    const users = ["Ana Costa", "Carlos Silva", "Maria Santos", "João Oliveira", "Fernanda Lima"];
    const terms = ["rosa", "lavanda", "suculenta", "orquídea", "manjericão", "cacto", "samambaia"];
    const activities = [
        {
            type: "successful",
            icon: "fas fa-search",
            user: users[Math.floor(Math.random() * users.length)],
            term: terms[Math.floor(Math.random() * terms.length)],
            results: Math.floor(Math.random() * 20) + 1,
            time: "agora"
        },
        {
            type: "failed",
            icon: "fas fa-search-minus",
            user: users[Math.floor(Math.random() * users.length)],
            term: "plantas carnívoras",
            results: 0,
            time: "agora"
        }
    ];

    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    
    const newActivity = document.createElement("div");
    newActivity.className = `activity-item ${randomActivity.type}`;
    
    if (randomActivity.results > 0) {
        newActivity.innerHTML = `
            <div class="activity-icon">
                <i class="${randomActivity.icon}"></i>
            </div>
            <div class="activity-content">
                <p><strong>${randomActivity.user}</strong> pesquisou por "${randomActivity.term}" - <span class="result-count">${randomActivity.results} resultados</span></p>
                <span>${randomActivity.time}</span>
            </div>
        `;
    } else {
        newActivity.innerHTML = `
            <div class="activity-icon">
                <i class="${randomActivity.icon}"></i>
            </div>
            <div class="activity-content">
                <p><strong>${randomActivity.user}</strong> pesquisou por "${randomActivity.term}" - <span class="no-results">0 resultados</span></p>
                <span>${randomActivity.time}</span>
            </div>
        `;
    }

    activityList.insertBefore(newActivity, activityList.firstChild);

    // Remove last item if too many
    if (activityList.children.length > 8) {
        activityList.removeChild(activityList.lastChild);
    }
}

// Render tables
function renderTopTermsTable() {
    const tbody = document.getElementById("topTermsTableBody");
    if (!tbody) return;

    tbody.innerHTML = searchTermsData.map((term, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${term.term}</td>
            <td>${term.count.toLocaleString()}</td>
            <td>${term.percentage}%</td>
            <td>${term.results}</td>
            <td>${term.clickRate}%</td>
            <td>
                <span class="trend ${term.trend > 0 ? 'positive' : 'negative'}">
                    ${term.trend > 0 ? '↗' : '↘'} ${Math.abs(term.trend)}%
                </span>
            </td>
        </tr>
    `).join("");
}

function renderNoResultsTable() {
    const tbody = document.getElementById("noResultsTableBody");
    if (!tbody) return;

    tbody.innerHTML = noResultsData.map(item => `
        <tr>
            <td>${item.term}</td>
            <td>${item.attempts}</td>
            <td>${item.lastSearch}</td>
            <td>${item.suggestion}</td>
            <td><button class="btn small primary" onclick="createContent('${item.term}')">Criar Conteúdo</button></td>
        </tr>
    `).join("");
}

// Filter search activity
function filterSearchActivity(filter) {
    const activities = document.querySelectorAll("#searchActivityList .activity-item");
    
    activities.forEach(activity => {
        if (filter === "all" || activity.dataset.type === filter) {
            activity.style.display = "flex";
        } else {
            activity.style.display = "none";
        }
    });
}

// Chart update functions
function updateSearchVolumeChart() {
    const period = document.getElementById("searchVolumePeriod").value;
    showNotification(`Atualizando gráfico para ${period}`, "info");
    
    // Update chart data based on period (simulation)
    if (period === "24h") {
        searchVolumeChart.data.labels = ["0h", "4h", "8h", "12h", "16h", "20h"];
        searchVolumeChart.data.datasets[0].data = [45, 89, 156, 234, 312, 189];
        searchVolumeChart.data.datasets[1].data = [42, 85, 148, 222, 296, 179];
    } else if (period === "30d") {
        searchVolumeChart.data.labels = ["Sem 1", "Sem 2", "Sem 3", "Sem 4"];
        searchVolumeChart.data.datasets[0].data = [15000, 16500, 17200, 18456];
        searchVolumeChart.data.datasets[1].data = [14250, 15675, 16340, 17554];
    }
    
    searchVolumeChart.update();
}

function updateSearchTermsChart() {
    const period = document.getElementById("searchTermsPeriod").value;
    showNotification(`Atualizando termos mais pesquisados para ${period}`, "info");
}

// Table update functions
function updateTopTermsTable() {
    const period = document.getElementById("topTermsPeriod").value;
    showNotification(`Atualizando tabela para ${period}`, "info");
}

function updateNoResultsTable() {
    const period = document.getElementById("noResultsPeriod").value;
    showNotification(`Atualizando pesquisas sem resultados para ${period}`, "info");
}

// Action functions
function createContent(term) {
    showNotification(`Iniciando criação de conteúdo para "${term}"`, "info");
    // In a real app, this would open a content creation modal or redirect
}

function exportSearchData() {
    showNotification("Exportando dados de pesquisa...", "info");
    // Simulate export process
    setTimeout(() => {
        showNotification("Dados de pesquisa exportados com sucesso!", "success");
    }, 2000);
}

function generateSearchReport() {
    showNotification("Gerando relatório de pesquisas...", "info");
    // Simulate report generation
    setTimeout(() => {
        showNotification("Relatório de pesquisas gerado com sucesso!", "success");
    }, 3000);
}

// Load more activity
function loadMoreSearchActivity() {
    showNotification("Carregando mais atividades de pesquisa...", "info");
    // Simulate loading more activities
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            addNewSearchActivity();
        }
        showNotification("Mais atividades carregadas!", "success");
    }, 1000);
}

// Refresh insights
function refreshInsights() {
    showNotification("Atualizando insights de pesquisa...", "info");
    setTimeout(() => {
        showNotification("Insights atualizados!", "success");
    }, 1500);
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
