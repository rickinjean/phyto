// Admin Reviews page functionality
let reviewsAnalyticsData = {
    totalReviews: 9876,
    pendingReviews: 12,
    reportedReviews: 3,
    averageRating: 4.7
};

// Sample reviews data
const adminReviewsData = [
    {
        id: 1,
        reviewer: {
            name: "Maria Silva",
            avatar: "https://via.placeholder.com/50x50/F5DEB3/4A2C2A?text=MS"
        },
        plant: {
            name: "Rosa Vermelha",
            image: "https://via.placeholder.com/40x40/8B4513/FFFFFF?text=R"
        },
        rating: 5,
        title: "Linda e fácil de cuidar!",
        content: "Minhas rosas estão florindo lindamente graças às dicas do site. O cuidado é mais simples do que imaginava e o resultado é maravilhoso. Recomendo muito para iniciantes!",
        status: "approved",
        createdAt: "2024-03-15T12:30:00Z",
        sentiment: "positive"
    },
    {
        id: 2,
        reviewer: {
            name: "Carlos Mendes",
            avatar: "https://via.placeholder.com/50x50/4A2C2A/FFFFFF?text=CM"
        },
        plant: {
            name: "Orquídea Phalaenopsis",
            image: "https://via.placeholder.com/40x40/9932CC/FFFFFF?text=O"
        },
        rating: 3,
        title: "Um pouco difícil para iniciantes",
        content: "Achei as instruções um pouco vagas para o cultivo de orquídeas. Minha planta não está indo muito bem, talvez precise de mais detalhes sobre rega e luminosidade.",
        status: "pending",
        createdAt: "2024-03-15T08:15:00Z",
        sentiment: "neutral"
    },
    {
        id: 3,
        reviewer: {
            name: "Ana Paula",
            avatar: "https://via.placeholder.com/50x50/8B4513/FFFFFF?text=AP"
        },
        plant: {
            name: "Samambaia Americana",
            image: "https://via.placeholder.com/40x40/228B22/FFFFFF?text=S"
        },
        rating: 1,
        title: "Conteúdo inadequado",
        content: "Esta avaliação contém linguagem imprópria e deve ser removida. [Conteúdo censurado por moderação automática]",
        status: "reported",
        createdAt: "2024-03-15T06:45:00Z",
        sentiment: "negative",
        reports: 3
    }
];

// Chart instances
let totalReviewsChart, pendingReviewsChart, reportedReviewsChart, averageRatingChart;
let reviewTrendsChart, ratingDistributionChart, categoryReviewsChart;
let sentimentChart, moderationTimeChart;

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    setupReviewsEventListeners();
    renderReviewsList();
    initReviewsCharts();
    updateReviewsStats();
    loadReviewActivity();
});

// Event Listeners
function setupReviewsEventListeners() {
    // Search and filters
    const reviewSearch = document.getElementById("reviewSearch");
    if (reviewSearch) {
        reviewSearch.addEventListener("input", filterReviews);
    }

    const reviewStatus = document.getElementById("reviewStatus");
    if (reviewStatus) {
        reviewStatus.addEventListener("change", filterReviews);
    }

    const reviewRating = document.getElementById("reviewRating");
    if (reviewRating) {
        reviewRating.addEventListener("change", filterReviews);
    }

    // Activity filters
    document.querySelectorAll(".activity-filters .filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".activity-filters .filter-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            filterReviewActivity(e.target.dataset.filter);
        });
    });

    // View options
    document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            switchReviewsView(e.target.dataset.view);
        });
    });
}

// Initialize charts
function initReviewsCharts() {
    // Total Reviews Chart (small stat chart)
    const totalReviewsCtx = document.getElementById("totalReviewsChart");
    if (totalReviewsCtx) {
        totalReviewsChart = new Chart(totalReviewsCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [{
                    data: [9200, 9350, 9500, 9650, 9750, 9820, 9876],
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

    // Pending Reviews Chart (small stat chart)
    const pendingReviewsCtx = document.getElementById("pendingReviewsChart");
    if (pendingReviewsCtx) {
        pendingReviewsChart = new Chart(pendingReviewsCtx.getContext("2d"), {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [12, 9864],
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

    // Reported Reviews Chart (small stat chart)
    const reportedReviewsCtx = document.getElementById("reportedReviewsChart");
    if (reportedReviewsCtx) {
        reportedReviewsChart = new Chart(reportedReviewsCtx.getContext("2d"), {
            type: "bar",
            data: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [{
                    data: [1, 2, 1, 0, 3, 2, 3],
                    backgroundColor: "#dc3545",
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

    // Average Rating Chart (small stat chart)
    const averageRatingCtx = document.getElementById("averageRatingChart");
    if (averageRatingCtx) {
        averageRatingChart = new Chart(averageRatingCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [{
                    data: [4.5, 4.6, 4.65, 4.68, 4.69, 4.7, 4.7],
                    borderColor: "#28a745",
                    backgroundColor: "rgba(40, 167, 69, 0.1)",
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

    // Review Trends Chart
    const reviewTrendsCtx = document.getElementById("reviewTrendsChart");
    if (reviewTrendsCtx) {
        reviewTrendsChart = new Chart(reviewTrendsCtx.getContext("2d"), {
            type: "line",
            data: {
                labels: ["1 Mar", "5 Mar", "10 Mar", "15 Mar", "20 Mar", "25 Mar", "30 Mar"],
                datasets: [
                    {
                        label: "Novas Avaliações",
                        data: [45, 52, 48, 61, 55, 67, 58],
                        borderColor: "#556B2F",
                        backgroundColor: "rgba(85, 107, 47, 0.1)",
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: "Avaliações Aprovadas",
                        data: [42, 50, 46, 58, 53, 65, 56],
                        borderColor: "#28a745",
                        backgroundColor: "rgba(40, 167, 69, 0.1)",
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: "Avaliações Rejeitadas",
                        data: [2, 1, 1, 2, 1, 1, 1],
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

    // Rating Distribution Chart
    const ratingDistributionCtx = document.getElementById("ratingDistributionChart");
    if (ratingDistributionCtx) {
        ratingDistributionChart = new Chart(ratingDistributionCtx.getContext("2d"), {
            type: "bar",
            data: {
                labels: ["1★", "2★", "3★", "4★", "5★"],
                datasets: [{
                    label: "Quantidade",
                    data: [156, 234, 567, 2345, 6574],
                    backgroundColor: ["#dc3545", "#fd7e14", "#ffc107", "#28a745", "#556B2F"]
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

    // Category Reviews Chart
    const categoryReviewsCtx = document.getElementById("categoryReviewsChart");
    if (categoryReviewsCtx) {
        categoryReviewsChart = new Chart(categoryReviewsCtx.getContext("2d"), {
            type: "doughnut",
            data: {
                labels: ["Ornamental", "Medicinal", "Alimentícia", "Aromática", "Suculenta"],
                datasets: [{
                    data: [3500, 2100, 1800, 1200, 1276],
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

    // Sentiment Analysis Chart
    const sentimentCtx = document.getElementById("sentimentChart");
    if (sentimentCtx) {
        sentimentChart = new Chart(sentimentCtx.getContext("2d"), {
            type: "pie",
            data: {
                labels: ["Positivo", "Neutro", "Negativo"],
                datasets: [{
                    data: [78, 18, 4],
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

    // Moderation Time Chart
    const moderationTimeCtx = document.getElementById("moderationTimeChart");
    if (moderationTimeCtx) {
        moderationTimeChart = new Chart(moderationTimeCtx.getContext("2d"), {
            type: "bar",
            data: {
                labels: ["< 1h", "1-4h", "4-12h", "12-24h", "> 24h"],
                datasets: [{
                    label: "Avaliações",
                    data: [45, 78, 23, 12, 3],
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
}

// Update statistics
function updateReviewsStats() {
    // Update stat cards with animation
    animateNumber("totalReviewsCount", reviewsAnalyticsData.totalReviews);
    animateNumber("pendingReviewsCount", reviewsAnalyticsData.pendingReviews);
    animateNumber("reportedReviewsCount", reviewsAnalyticsData.reportedReviews);
    
    // Animate average rating
    const avgElement = document.getElementById("averageRating");
    if (avgElement) {
        let current = 0;
        const target = reviewsAnalyticsData.averageRating;
        const increment = target / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            avgElement.textContent = current.toFixed(1);
        }, 20);
    }
}

// Render reviews list
function renderReviewsList() {
    const container = document.getElementById("reviewsContainer");
    if (!container) return;

    container.innerHTML = adminReviewsData.map(review => `
        <div class="review-item ${review.status === 'reported' ? 'reported' : ''}">
            <div class="review-header">
                <div class="reviewer-info">
                    <img src="${review.reviewer.avatar}" alt="${review.reviewer.name}" class="reviewer-avatar">
                    <div class="review-meta">
                        <h5>${review.reviewer.name}</h5>
                        <span>${formatTimeAgo(review.createdAt)}</span>
                    </div>
                </div>
                <div class="review-rating">
                    <div class="stars">${generateStars(review.rating)}</div>
                    <span class="status-badge ${review.status}">${capitalizeFirstLetter(review.status)}</span>
                </div>
            </div>
            <div class="review-plant">
                <img src="${review.plant.image}" alt="${review.plant.name}">
                <span>Avaliação de <strong>${review.plant.name}</strong></span>
            </div>
            <h4 class="review-title">${review.title}</h4>
            <p class="review-text">${review.content}</p>
            ${review.reports ? `
                <div class="report-info">
                    <i class="fas fa-flag"></i>
                    <span>Reportado por ${review.reports} usuários por linguagem inadequada</span>
                </div>
            ` : ''}
            <div class="review-actions">
                ${review.status === 'pending' ? `
                    <button class="btn small success" onclick="approveReview(${review.id})">
                        <i class="fas fa-check"></i> Aprovar
                    </button>
                    <button class="btn small warning" onclick="rejectReview(${review.id})">
                        <i class="fas fa-times"></i> Rejeitar
                    </button>
                ` : ''}
                ${review.status === 'reported' ? `
                    <button class="btn small success" onclick="resolveReport(${review.id})">
                        <i class="fas fa-gavel"></i> Resolver
                    </button>
                    <button class="btn small warning" onclick="banUser(${review.id})">
                        <i class="fas fa-ban"></i> Banir Usuário
                    </button>
                ` : ''}
                <button class="btn small secondary" onclick="editReview(${review.id})">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn small danger" onclick="deleteReview(${review.id})">
                    <i class="fas fa-trash"></i> Excluir
                </button>
                <button class="btn small info" onclick="viewReviewDetails(${review.id})">
                    <i class="fas fa-eye"></i> Detalhes
                </button>
            </div>
        </div>
    `).join("");
}

// Load review activity
function loadReviewActivity() {
    const activityList = document.getElementById("reviewActivityList");
    if (!activityList) return;

    // Activity is already populated in HTML, but we can add real-time updates here
    setInterval(() => {
        // Simulate new review activity
        if (Math.random() > 0.7) {
            addNewReviewActivity();
        }
    }, 25000); // Check every 25 seconds
}

// Add new review activity
function addNewReviewActivity() {
    const activityList = document.getElementById("reviewActivityList");
    const users = ["Pedro Costa", "Lucia Santos", "Roberto Silva", "Carla Oliveira", "Marcos Lima"];
    const plants = ["Rosa Branca", "Lavanda Francesa", "Suculenta Jade", "Orquídea Amarela", "Manjericão Roxo"];
    const activities = [
        {
            type: "new",
            icon: "fas fa-star",
            user: users[Math.floor(Math.random() * users.length)],
            plant: plants[Math.floor(Math.random() * plants.length)],
            rating: Math.floor(Math.random() * 5) + 1,
            time: "agora"
        },
        {
            type: "moderated",
            icon: "fas fa-check-circle",
            action: "aprovada",
            time: "agora"
        }
    ];

    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    
    const newActivity = document.createElement("div");
    newActivity.className = `activity-item ${randomActivity.type}`;
    
    if (randomActivity.type === "new") {
        newActivity.innerHTML = `
            <div class="activity-icon">
                <i class="${randomActivity.icon}"></i>
            </div>
            <div class="activity-content">
                <p><strong>${randomActivity.user}</strong> avaliou <strong>${randomActivity.plant}</strong> com ${randomActivity.rating} estrelas</p>
                <span>${randomActivity.time}</span>
            </div>
        `;
    } else {
        newActivity.innerHTML = `
            <div class="activity-icon">
                <i class="${randomActivity.icon}"></i>
            </div>
            <div class="activity-content">
                <p>Avaliação foi ${randomActivity.action} pela moderação</p>
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

// Review management functions
function approveReview(reviewId) {
    const review = adminReviewsData.find(r => r.id === reviewId);
    if (review) {
        review.status = "approved";
        renderReviewsList();
        showNotification(`Avaliação de ${review.reviewer.name} aprovada!`, "success");
    }
}

function rejectReview(reviewId) {
    const review = adminReviewsData.find(r => r.id === reviewId);
    if (review && confirm(`Rejeitar avaliação de ${review.reviewer.name}?`)) {
        review.status = "rejected";
        renderReviewsList();
        showNotification(`Avaliação de ${review.reviewer.name} rejeitada!`, "warning");
    }
}

function resolveReport(reviewId) {
    const review = adminReviewsData.find(r => r.id === reviewId);
    if (review && confirm(`Resolver report da avaliação de ${review.reviewer.name}?`)) {
        review.status = "approved";
        delete review.reports;
        renderReviewsList();
        showNotification(`Report resolvido e avaliação aprovada!`, "success");
    }
}

function editReview(reviewId) {
    showNotification(`Editar avaliação ${reviewId} - funcionalidade em desenvolvimento`, "info");
}

function deleteReview(reviewId) {
    const review = adminReviewsData.find(r => r.id === reviewId);
    if (review && confirm(`Excluir permanentemente a avaliação de ${review.reviewer.name}?`)) {
        const reviewIndex = adminReviewsData.findIndex(r => r.id === reviewId);
        adminReviewsData.splice(reviewIndex, 1);
        renderReviewsList();
        showNotification(`Avaliação excluída com sucesso!`, "success");
    }
}

function viewReviewDetails(reviewId) {
    const review = adminReviewsData.find(r => r.id === reviewId);
    if (review) {
        showNotification(`Visualizando detalhes da avaliação de ${review.reviewer.name}`, "info");
    }
}

function banUser(reviewId) {
    const review = adminReviewsData.find(r => r.id === reviewId);
    if (review && confirm(`Banir usuário ${review.reviewer.name}?`)) {
        showNotification(`Usuário ${review.reviewer.name} foi banido!`, "warning");
    }
}

// Filter functions
function filterReviews() {
    const searchTerm = document.getElementById("reviewSearch").value.toLowerCase();
    const statusFilter = document.getElementById("reviewStatus").value;
    const ratingFilter = document.getElementById("reviewRating").value;

    showNotification("Filtros aplicados - funcionalidade em desenvolvimento", "info");
}

function filterReviewActivity(filter) {
    const activities = document.querySelectorAll("#reviewActivityList .activity-item");
    
    activities.forEach(activity => {
        if (filter === "all" || activity.dataset.type === filter) {
            activity.style.display = "flex";
        } else {
            activity.style.display = "none";
        }
    });
}

// View functions
function switchReviewsView(view) {
    if (view === "cards") {
        showNotification("Visualização em cards - funcionalidade em desenvolvimento", "info");
    }
}

// Export and bulk actions
function exportReviews() {
    showNotification("Exportando avaliações...", "info");
    setTimeout(() => {
        showNotification("Avaliações exportadas com sucesso!", "success");
    }, 2000);
}

function moderateAll() {
    showNotification("Moderando todas as avaliações pendentes...", "info");
    setTimeout(() => {
        adminReviewsData.forEach(review => {
            if (review.status === "pending") {
                review.status = "approved";
            }
        });
        renderReviewsList();
        showNotification("Todas as avaliações pendentes foram aprovadas!", "success");
    }, 2000);
}

// Chart update functions
function updateReviewTrendsChart() {
    const period = document.getElementById("reviewTrendsPeriod").value;
    showNotification(`Atualizando tendências para ${period}`, "info");
}

function updateCategoryReviewsChart() {
    const type = document.getElementById("categoryReviewsType").value;
    showNotification(`Visualizando avaliações por ${type}`, "info");
}

// Top lists functions
function updateTopRated() {
    const period = document.getElementById("topRatedPeriod").value;
    showNotification(`Atualizando plantas mais bem avaliadas para ${period}`, "info");
}

function refreshActiveReviewers() {
    showNotification("Atualizando usuários mais ativos...", "info");
    setTimeout(() => {
        showNotification("Lista de usuários ativos atualizada!", "success");
    }, 1000);
}

// Load more activity
function loadMoreReviewActivity() {
    showNotification("Carregando mais atividades de avaliação...", "info");
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            addNewReviewActivity();
        }
        showNotification("Mais atividades carregadas!", "success");
    }, 1000);
}

// Utility functions
function generateStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "★" : "☆";
    }
    return stars;
}

function formatTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Há poucos minutos";
    if (diffInHours === 1) return "Há 1 hora";
    if (diffInHours < 24) return `Há ${diffInHours} horas`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return "Há 1 dia";
    return `Há ${diffInDays} dias`;
}

function capitalizeFirstLetter(string) {
    const translations = {
        approved: "Aprovado",
        pending: "Pendente",
        rejected: "Rejeitado",
        reported: "Reportado"
    };
    return translations[string] || string.charAt(0).toUpperCase() + string.slice(1);
}

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
