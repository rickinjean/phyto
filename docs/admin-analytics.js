// Admin Analytics JavaScript

// Global variables for charts
let trafficChart, trafficSourcesChart, devicesChart, conversionsChart, realTimeChart;
let viewsChart, activeUsersChart, sessionTimeChart, bounceRateChart;

// Initialize analytics page
document.addEventListener('DOMContentLoaded', function() {
    initializeAnalytics();
    setupEventListeners();
    startRealTimeUpdates();
});

function initializeAnalytics() {
    loadKeyMetrics();
    initializeCharts();
    loadTopPages();
    loadLocationData();
    loadInsights();
    updateRealTimeData();
}

function setupEventListeners() {
    // Date range selector
    document.getElementById('dateRange').addEventListener('change', function() {
        if (this.value === 'custom') {
            document.getElementById('startDate').style.display = 'inline-block';
            document.getElementById('endDate').style.display = 'inline-block';
        } else {
            document.getElementById('startDate').style.display = 'none';
            document.getElementById('endDate').style.display = 'none';
        }
        updateAnalytics();
    });

    // View options
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updateAnalyticsView(this.dataset.view);
        });
    });

    // Traffic metric selector
    document.getElementById('trafficMetric').addEventListener('change', function() {
        updateTrafficChart();
    });

    // Period selectors
    document.getElementById('pagesPeriod').addEventListener('change', function() {
        loadTopPages();
    });

    document.getElementById('conversionPeriod').addEventListener('change', function() {
        updateConversionsChart();
    });
}

function loadKeyMetrics() {
    // Simulate loading key metrics
    const metrics = {
        totalViews: 45678,
        activeUsers: 3892,
        avgSessionTime: '4:32',
        bounceRate: '32.5%'
    };

    document.getElementById('totalViews').textContent = metrics.totalViews.toLocaleString();
    document.getElementById('activeUsers').textContent = metrics.activeUsers.toLocaleString();
    document.getElementById('avgSessionTime').textContent = metrics.avgSessionTime;
    document.getElementById('bounceRate').textContent = metrics.bounceRate;

    // Initialize mini charts
    initializeMiniCharts();
}

function initializeMiniCharts() {
    // Views mini chart
    const viewsCtx = document.getElementById('viewsChart').getContext('2d');
    viewsChart = new Chart(viewsCtx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                data: [120, 135, 128, 145, 152, 148, 165],
                borderColor: '#28a745',
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
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

    // Active users mini chart
    const activeUsersCtx = document.getElementById('activeUsersChart').getContext('2d');
    activeUsersChart = new Chart(activeUsersCtx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                data: [85, 92, 88, 95, 102, 98, 105],
                borderColor: '#17a2b8',
                backgroundColor: 'rgba(23, 162, 184, 0.1)',
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

    // Session time mini chart
    const sessionTimeCtx = document.getElementById('sessionTimeChart').getContext('2d');
    sessionTimeChart = new Chart(sessionTimeCtx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                data: [275, 268, 272, 265, 270, 262, 258],
                borderColor: '#dc3545',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
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

    // Bounce rate mini chart
    const bounceRateCtx = document.getElementById('bounceRateChart').getContext('2d');
    bounceRateChart = new Chart(bounceRateCtx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                data: [38, 36, 37, 35, 34, 33, 32],
                borderColor: '#28a745',
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
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

function initializeCharts() {
    initializeTrafficChart();
    initializeTrafficSourcesChart();
    initializeDevicesChart();
    initializeConversionsChart();
    initializeRealTimeChart();
}

function initializeTrafficChart() {
    const ctx = document.getElementById('trafficChart').getContext('2d');
    trafficChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: generateDateLabels(30),
            datasets: [{
                label: 'Visualizações de Página',
                data: generateRandomData(30, 800, 1500),
                borderColor: '#556B2F',
                backgroundColor: 'rgba(85, 107, 47, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    });
}

function initializeTrafficSourcesChart() {
    const ctx = document.getElementById('trafficSourcesChart').getContext('2d');
    trafficSourcesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Busca Orgânica', 'Direto', 'Redes Sociais', 'Referências', 'Email'],
            datasets: [{
                data: [45, 25, 15, 10, 5],
                backgroundColor: [
                    '#556B2F',
                    '#4A2C2A',
                    '#17a2b8',
                    '#ffc107',
                    '#28a745'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

function initializeDevicesChart() {
    const ctx = document.getElementById('devicesChart').getContext('2d');
    devicesChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Mobile', 'Desktop', 'Tablet'],
            datasets: [{
                data: [67, 28, 5],
                backgroundColor: [
                    '#556B2F',
                    '#4A2C2A',
                    '#17a2b8'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

function initializeConversionsChart() {
    const ctx = document.getElementById('conversionsChart').getContext('2d');
    conversionsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cadastros', 'Avaliações', 'Compartilhamentos', 'Downloads'],
            datasets: [{
                label: 'Conversões',
                data: [156, 89, 234, 67],
                backgroundColor: [
                    'rgba(85, 107, 47, 0.8)',
                    'rgba(74, 44, 42, 0.8)',
                    'rgba(23, 162, 184, 0.8)',
                    'rgba(255, 193, 7, 0.8)'
                ],
                borderColor: [
                    '#556B2F',
                    '#4A2C2A',
                    '#17a2b8',
                    '#ffc107'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function initializeRealTimeChart() {
    const ctx = document.getElementById('realTimeChart').getContext('2d');
    realTimeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: generateTimeLabels(20),
            datasets: [{
                label: 'Usuários Online',
                data: generateRandomData(20, 15, 45),
                borderColor: '#28a745',
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    });
}

function loadTopPages() {
    const period = document.getElementById('pagesPeriod').value;
    const tableBody = document.getElementById('topPagesTable');
    
    // Simulate top pages data
    const pages = [
        { page: '/catalog.html', views: 2456, avgTime: '3:45', exitRate: '25%' },
        { page: '/plant-details.html', views: 1892, avgTime: '5:12', exitRate: '18%' },
        { page: '/guides.html', views: 1634, avgTime: '4:28', exitRate: '22%' },
        { page: '/about.html', views: 1245, avgTime: '2:15', exitRate: '35%' },
        { page: '/profile.html', views: 987, avgTime: '3:02', exitRate: '28%' }
    ];

    tableBody.innerHTML = '';
    pages.forEach(page => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${page.page}</td>
            <td>${page.views.toLocaleString()}</td>
            <td>${page.avgTime}</td>
            <td>${page.exitRate}</td>
        `;
        tableBody.appendChild(row);
    });
}

function loadLocationData() {
    const tableBody = document.getElementById('locationTable');
    
    // Simulate location data
    const locations = [
        { country: 'Brasil', users: 2456, sessions: 3892, percentage: '68.5%' },
        { country: 'Portugal', users: 456, sessions: 678, percentage: '12.7%' },
        { country: 'Estados Unidos', users: 234, sessions: 345, percentage: '6.5%' },
        { country: 'Argentina', users: 189, sessions: 267, percentage: '5.3%' },
        { country: 'Espanha', users: 123, sessions: 178, percentage: '3.4%' },
        { country: 'Outros', users: 98, sessions: 145, percentage: '3.6%' }
    ];

    tableBody.innerHTML = '';
    locations.forEach(location => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${location.country}</td>
            <td>${location.users.toLocaleString()}</td>
            <td>${location.sessions.toLocaleString()}</td>
            <td>${location.percentage}</td>
        `;
        tableBody.appendChild(row);
    });
}

function updateRealTimeData() {
    // Simulate real-time data
    document.getElementById('realTimeUsers').textContent = Math.floor(Math.random() * 50) + 15;
    document.getElementById('realTimePageviews').textContent = Math.floor(Math.random() * 20) + 5;
    document.getElementById('realTimeTopPage').textContent = '/catalog.html';
    document.getElementById('realTimeTopSource').textContent = 'Google';

    // Update real-time chart
    if (realTimeChart) {
        const newData = Math.floor(Math.random() * 30) + 15;
        realTimeChart.data.datasets[0].data.push(newData);
        realTimeChart.data.datasets[0].data.shift();
        
        const newLabel = new Date().toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        realTimeChart.data.labels.push(newLabel);
        realTimeChart.data.labels.shift();
        
        realTimeChart.update('none');
    }
}

function startRealTimeUpdates() {
    // Update real-time data every 5 seconds
    setInterval(updateRealTimeData, 5000);
}

// Utility functions
function generateDateLabels(days) {
    const labels = [];
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }));
    }
    return labels;
}

function generateTimeLabels(minutes) {
    const labels = [];
    for (let i = minutes - 1; i >= 0; i--) {
        const time = new Date();
        time.setMinutes(time.getMinutes() - i);
        labels.push(time.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        }));
    }
    return labels;
}

function generateRandomData(length, min, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

// Event handlers
function updateAnalytics() {
    const period = document.getElementById('dateRange').value;
    console.log('Atualizando análises para período:', period);
    
    // Simulate data update
    loadKeyMetrics();
    updateTrafficChart();
    loadTopPages();
    loadLocationData();
    
    showNotification('Dados atualizados com sucesso!', 'success');
}

function updateAnalyticsView(view) {
    console.log('Mudando visualização para:', view);
    
    // Here you would implement different views
    switch(view) {
        case 'overview':
            // Show overview data
            break;
        case 'detailed':
            // Show detailed data
            break;
        case 'comparison':
            // Show comparison data
            break;
    }
    
    showNotification(`Visualização alterada para: ${view}`, 'info');
}

function updateTrafficChart() {
    const metric = document.getElementById('trafficMetric').value;
    
    if (trafficChart) {
        // Update chart data based on selected metric
        let newData, label;
        
        switch(metric) {
            case 'pageviews':
                newData = generateRandomData(30, 800, 1500);
                label = 'Visualizações de Página';
                break;
            case 'sessions':
                newData = generateRandomData(30, 400, 800);
                label = 'Sessões';
                break;
            case 'users':
                newData = generateRandomData(30, 200, 600);
                label = 'Usuários Únicos';
                break;
        }
        
        trafficChart.data.datasets[0].data = newData;
        trafficChart.data.datasets[0].label = label;
        trafficChart.update();
    }
}

function updateConversionsChart() {
    const period = document.getElementById('conversionPeriod').value;
    
    if (conversionsChart) {
        // Update conversions data based on period
        let newData;
        
        switch(period) {
            case 'week':
                newData = [23, 15, 34, 12];
                break;
            case 'month':
                newData = [156, 89, 234, 67];
                break;
            case 'quarter':
                newData = [456, 289, 634, 187];
                break;
        }
        
        conversionsChart.data.datasets[0].data = newData;
        conversionsChart.update();
    }
}

function refreshTrafficSources() {
    console.log('Atualizando fontes de tráfego...');
    
    if (trafficSourcesChart) {
        const newData = [
            Math.floor(Math.random() * 20) + 35,
            Math.floor(Math.random() * 15) + 20,
            Math.floor(Math.random() * 10) + 10,
            Math.floor(Math.random() * 8) + 7,
            Math.floor(Math.random() * 5) + 3
        ];
        
        trafficSourcesChart.data.datasets[0].data = newData;
        trafficSourcesChart.update();
    }
    
    showNotification('Fontes de tráfego atualizadas!', 'success');
}

function refreshDeviceData() {
    console.log('Atualizando dados de dispositivos...');
    
    if (devicesChart) {
        const newData = [
            Math.floor(Math.random() * 10) + 60,
            Math.floor(Math.random() * 10) + 25,
            Math.floor(Math.random() * 5) + 3
        ];
        
        devicesChart.data.datasets[0].data = newData;
        devicesChart.update();
    }
    
    showNotification('Dados de dispositivos atualizados!', 'success');
}

function refreshLocationData() {
    console.log('Atualizando dados de localização...');
    loadLocationData();
    showNotification('Dados de localização atualizados!', 'success');
}

function refreshInsights() {
    console.log('Atualizando insights...');
    showNotification('Insights atualizados!', 'success');
}

function refreshRealTime() {
    console.log('Atualizando dados em tempo real...');
    updateRealTimeData();
    showNotification('Dados em tempo real atualizados!', 'success');
}

function exportAnalytics() {
    console.log('Exportando relatório de análises...');
    showNotification('Relatório exportado com sucesso!', 'success');
}

function generateReport() {
    console.log('Gerando relatório personalizado...');
    showNotification('Relatório personalizado gerado!', 'success');
}

function loadInsights() {
    console.log('Carregando insights de performance...');
    // Insights are already loaded in the HTML
}

// Notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}
