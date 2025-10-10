// Admin Content Management JavaScript

// Initialize content management page
document.addEventListener('DOMContentLoaded', function() {
    initializeContentManagement();
    setupEventListeners();
    loadContentStats();
    loadPages();
});

function initializeContentManagement() {
    console.log('Inicializando gerenciamento de conteúdo...');
    
    // Set active tab
    showTabContent('pages');
    
    // Load initial data
    loadContentStats();
    loadPages();
    loadGuides();
    loadMedia();
    loadSEOData();
}

function setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.content-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });

    // Search inputs
    document.getElementById('pagesSearch').addEventListener('input', function() {
        filterPages(this.value);
    });

    document.getElementById('guidesSearch').addEventListener('input', function() {
        filterGuides(this.value);
    });

    document.getElementById('mediaSearch').addEventListener('input', function() {
        filterMedia(this.value);
    });

    // Status filters
    document.getElementById('pagesStatus').addEventListener('change', function() {
        filterPagesByStatus(this.value);
    });

    document.getElementById('guidesStatus').addEventListener('change', function() {
        filterGuidesByStatus(this.value);
    });

    // View options
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            switchView(view, this);
        });
    });

    // File upload
    document.getElementById('mediaUpload').addEventListener('change', function() {
        handleFileUpload(this.files);
    });

    // Form submissions
    document.getElementById('addContentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleAddContent();
    });

    document.getElementById('addGuideForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleAddGuide();
    });
}

function loadContentStats() {
    // Simulate loading content statistics
    const stats = {
        totalPages: 24,
        totalGuides: 67,
        totalMedia: 342,
        pendingContent: 5
    };

    document.getElementById('totalPages').textContent = stats.totalPages;
    document.getElementById('totalGuides').textContent = stats.totalGuides;
    document.getElementById('totalMedia').textContent = stats.totalMedia;
    document.getElementById('pendingContent').textContent = stats.pendingContent;
}

function switchTab(tabName) {
    // Remove active class from all tabs and contents
    document.querySelectorAll('.content-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.content-tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Add active class to selected tab and content
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-content`).classList.add('active');

    // Load content for the selected tab
    switch(tabName) {
        case 'pages':
            loadPages();
            break;
        case 'guides':
            loadGuides();
            break;
        case 'media':
            loadMedia();
            break;
        case 'seo':
            loadSEOData();
            break;
    }
}

function showTabContent(tabName) {
    switchTab(tabName);
}

function loadPages() {
    const pagesList = document.getElementById('pagesList');
    
    // Simulate pages data
    const pages = [
        {
            id: 1,
            title: 'Página Inicial',
            slug: 'index',
            type: 'static',
            status: 'published',
            lastModified: '2024-01-15',
            author: 'Admin',
            views: 15420
        },
        {
            id: 2,
            title: 'Catálogo de Plantas',
            slug: 'catalog',
            type: 'dynamic',
            status: 'published',
            lastModified: '2024-01-14',
            author: 'Editor',
            views: 8930
        },
        {
            id: 3,
            title: 'Sobre Nós',
            slug: 'about',
            type: 'static',
            status: 'published',
            lastModified: '2024-01-10',
            author: 'Admin',
            views: 3450
        },
        {
            id: 4,
            title: 'Nova Landing Page',
            slug: 'landing-promocional',
            type: 'landing',
            status: 'draft',
            lastModified: '2024-01-16',
            author: 'Marketing',
            views: 0
        },
        {
            id: 5,
            title: 'Política de Privacidade',
            slug: 'privacy-policy',
            type: 'static',
            status: 'pending',
            lastModified: '2024-01-12',
            author: 'Legal',
            views: 1250
        }
    ];

    pagesList.innerHTML = '';
    pages.forEach(page => {
        const pageItem = document.createElement('div');
        pageItem.className = 'page-item';
        pageItem.innerHTML = `
            <div class="page-info">
                <div class="page-header">
                    <h4>${page.title}</h4>
                    <span class="status-badge ${page.status}">${getStatusText(page.status)}</span>
                </div>
                <div class="page-meta">
                    <span><i class="fas fa-link"></i> /${page.slug}</span>
                    <span><i class="fas fa-tag"></i> ${getTypeText(page.type)}</span>
                    <span><i class="fas fa-user"></i> ${page.author}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(page.lastModified)}</span>
                    <span><i class="fas fa-eye"></i> ${page.views.toLocaleString()} visualizações</span>
                </div>
            </div>
            <div class="page-actions">
                <button class="btn small secondary" onclick="editPage(${page.id})">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn small info" onclick="previewPage(${page.id})">
                    <i class="fas fa-eye"></i> Visualizar
                </button>
                <button class="btn small ${page.status === 'published' ? 'warning' : 'success'}" onclick="togglePageStatus(${page.id})">
                    <i class="fas fa-${page.status === 'published' ? 'pause' : 'play'}"></i>
                    ${page.status === 'published' ? 'Despublicar' : 'Publicar'}
                </button>
                <button class="btn small danger" onclick="deletePage(${page.id})">
                    <i class="fas fa-trash"></i> Excluir
                </button>
            </div>
        `;
        pagesList.appendChild(pageItem);
    });
}

function loadGuides() {
    const guidesList = document.getElementById('guidesList');
    
    // Simulate guides data
    const guides = [
        {
            id: 1,
            title: 'Como Cuidar de Suculentas',
            category: 'care',
            difficulty: 'easy',
            status: 'published',
            author: 'Especialista',
            publishDate: '2024-01-10',
            views: 2340,
            rating: 4.8
        },
        {
            id: 2,
            title: 'Plantio de Orquídeas para Iniciantes',
            category: 'planting',
            difficulty: 'medium',
            status: 'published',
            author: 'Botânico',
            publishDate: '2024-01-08',
            views: 1890,
            rating: 4.6
        },
        {
            id: 3,
            title: 'Identificando Doenças em Plantas',
            category: 'diseases',
            difficulty: 'hard',
            status: 'draft',
            author: 'Fitopatologista',
            publishDate: null,
            views: 0,
            rating: 0
        },
        {
            id: 4,
            title: 'Fertilização Orgânica Caseira',
            category: 'fertilization',
            difficulty: 'easy',
            status: 'pending',
            author: 'Agricultor',
            publishDate: null,
            views: 0,
            rating: 0
        }
    ];

    guidesList.innerHTML = '';
    guides.forEach(guide => {
        const guideItem = document.createElement('div');
        guideItem.className = 'guide-item';
        guideItem.innerHTML = `
            <div class="guide-info">
                <div class="guide-header">
                    <h4>${guide.title}</h4>
                    <div class="guide-badges">
                        <span class="status-badge ${guide.status}">${getStatusText(guide.status)}</span>
                        <span class="category-badge ${guide.category}">${getCategoryText(guide.category)}</span>
                        <span class="difficulty-badge ${guide.difficulty}">${getDifficultyText(guide.difficulty)}</span>
                    </div>
                </div>
                <div class="guide-meta">
                    <span><i class="fas fa-user"></i> ${guide.author}</span>
                    ${guide.publishDate ? `<span><i class="fas fa-calendar"></i> ${formatDate(guide.publishDate)}</span>` : ''}
                    <span><i class="fas fa-eye"></i> ${guide.views.toLocaleString()} visualizações</span>
                    ${guide.rating > 0 ? `<span><i class="fas fa-star"></i> ${guide.rating}/5</span>` : ''}
                </div>
            </div>
            <div class="guide-actions">
                <button class="btn small secondary" onclick="editGuide(${guide.id})">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn small info" onclick="previewGuide(${guide.id})">
                    <i class="fas fa-eye"></i> Visualizar
                </button>
                <button class="btn small ${guide.status === 'published' ? 'warning' : 'success'}" onclick="toggleGuideStatus(${guide.id})">
                    <i class="fas fa-${guide.status === 'published' ? 'pause' : 'play'}"></i>
                    ${guide.status === 'published' ? 'Despublicar' : 'Publicar'}
                </button>
                <button class="btn small danger" onclick="deleteGuide(${guide.id})">
                    <i class="fas fa-trash"></i> Excluir
                </button>
            </div>
        `;
        guidesList.appendChild(guideItem);
    });
}

function loadMedia() {
    const mediaGrid = document.getElementById('mediaGrid');
    
    // Simulate media files data
    const mediaFiles = [
        {
            id: 1,
            name: 'rosa-vermelha.jpg',
            type: 'image',
            size: '2.3 MB',
            uploadDate: '2024-01-15',
            url: 'https://via.placeholder.com/200x150/556B2F/FFFFFF?text=Rosa',
            dimensions: '1920x1080'
        },
        {
            id: 2,
            name: 'suculenta-cuidados.jpg',
            type: 'image',
            size: '1.8 MB',
            uploadDate: '2024-01-14',
            url: 'https://via.placeholder.com/200x150/4A2C2A/FFFFFF?text=Suculenta',
            dimensions: '1600x900'
        },
        {
            id: 3,
            name: 'orquidea-plantio.mp4',
            type: 'video',
            size: '15.2 MB',
            uploadDate: '2024-01-13',
            url: 'https://via.placeholder.com/200x150/17a2b8/FFFFFF?text=Video',
            duration: '3:45'
        },
        {
            id: 4,
            name: 'guia-plantas.pdf',
            type: 'document',
            size: '5.7 MB',
            uploadDate: '2024-01-12',
            url: 'https://via.placeholder.com/200x150/ffc107/000000?text=PDF',
            pages: 24
        },
        {
            id: 5,
            name: 'jardim-vertical.jpg',
            type: 'image',
            size: '3.1 MB',
            uploadDate: '2024-01-11',
            url: 'https://via.placeholder.com/200x150/28a745/FFFFFF?text=Jardim',
            dimensions: '2048x1536'
        },
        {
            id: 6,
            name: 'fertilizacao-organica.jpg',
            type: 'image',
            size: '2.7 MB',
            uploadDate: '2024-01-10',
            url: 'https://via.placeholder.com/200x150/dc3545/FFFFFF?text=Fertilizacao',
            dimensions: '1800x1200'
        }
    ];

    mediaGrid.innerHTML = '';
    mediaFiles.forEach(file => {
        const mediaItem = document.createElement('div');
        mediaItem.className = 'media-item';
        mediaItem.innerHTML = `
            <div class="media-preview">
                <img src="${file.url}" alt="${file.name}">
                <div class="media-overlay">
                    <button class="btn small primary" onclick="selectMedia(${file.id})">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn small secondary" onclick="previewMedia(${file.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn small danger" onclick="deleteMedia(${file.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="media-info">
                <h5>${file.name}</h5>
                <div class="media-meta">
                    <span><i class="fas fa-${getFileIcon(file.type)}"></i> ${file.type.toUpperCase()}</span>
                    <span><i class="fas fa-weight-hanging"></i> ${file.size}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(file.uploadDate)}</span>
                    ${file.dimensions ? `<span><i class="fas fa-expand-arrows-alt"></i> ${file.dimensions}</span>` : ''}
                    ${file.duration ? `<span><i class="fas fa-clock"></i> ${file.duration}</span>` : ''}
                    ${file.pages ? `<span><i class="fas fa-file-alt"></i> ${file.pages} páginas</span>` : ''}
                </div>
            </div>
        `;
        mediaGrid.appendChild(mediaItem);
    });
}

function loadSEOData() {
    // Load SEO statistics
    document.getElementById('seoScore').textContent = '87';
    document.getElementById('indexedPages').textContent = '156';
    document.getElementById('organicTraffic').textContent = '12.4K';
    document.getElementById('avgPosition').textContent = '8.2';

    // Load SEO issues
    loadSEOIssues();
    
    // Load keywords data
    loadKeywordsData();
}

function loadSEOIssues() {
    const issuesList = document.getElementById('seoIssuesList');
    
    const issues = [
        {
            type: 'warning',
            title: 'Meta descrições ausentes',
            description: '3 páginas não possuem meta descrição',
            pages: ['landing-promocional', 'nova-pagina', 'teste-seo']
        },
        {
            type: 'error',
            title: 'Títulos duplicados',
            description: '2 páginas possuem títulos idênticos',
            pages: ['about-duplicate', 'sobre-nos']
        },
        {
            type: 'info',
            title: 'Imagens sem alt text',
            description: '15 imagens não possuem texto alternativo',
            pages: ['catalog', 'guides', 'plant-details']
        }
    ];

    issuesList.innerHTML = '';
    issues.forEach(issue => {
        const issueItem = document.createElement('div');
        issueItem.className = `seo-issue ${issue.type}`;
        issueItem.innerHTML = `
            <div class="issue-icon">
                <i class="fas fa-${issue.type === 'error' ? 'exclamation-circle' : issue.type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            </div>
            <div class="issue-content">
                <h5>${issue.title}</h5>
                <p>${issue.description}</p>
                <div class="issue-pages">
                    <strong>Páginas afetadas:</strong> ${issue.pages.join(', ')}
                </div>
            </div>
            <div class="issue-actions">
                <button class="btn small primary" onclick="fixSEOIssue('${issue.type}')">
                    <i class="fas fa-wrench"></i> Corrigir
                </button>
            </div>
        `;
        issuesList.appendChild(issueItem);
    });
}

function loadKeywordsData() {
    const keywordsTable = document.getElementById('keywordsTable');
    
    const keywords = [
        {
            keyword: 'plantas para apartamento',
            position: 3,
            volume: '8.1K',
            clicks: 245,
            ctr: '12.3%',
            trend: 'up'
        },
        {
            keyword: 'cuidados com suculentas',
            position: 5,
            volume: '5.2K',
            clicks: 189,
            ctr: '9.8%',
            trend: 'up'
        },
        {
            keyword: 'como plantar orquídeas',
            position: 8,
            volume: '3.7K',
            clicks: 134,
            ctr: '7.2%',
            trend: 'down'
        },
        {
            keyword: 'plantas medicinais',
            position: 12,
            volume: '6.3K',
            clicks: 98,
            ctr: '4.1%',
            trend: 'stable'
        },
        {
            keyword: 'jardim vertical',
            position: 15,
            volume: '2.9K',
            clicks: 67,
            ctr: '3.8%',
            trend: 'up'
        }
    ];

    keywordsTable.innerHTML = '';
    keywords.forEach(keyword => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${keyword.keyword}</td>
            <td>${keyword.position}º</td>
            <td>${keyword.volume}</td>
            <td>${keyword.clicks}</td>
            <td>${keyword.ctr}</td>
            <td>
                <span class="trend ${keyword.trend}">
                    <i class="fas fa-arrow-${keyword.trend === 'up' ? 'up' : keyword.trend === 'down' ? 'down' : 'right'}"></i>
                </span>
            </td>
        `;
        keywordsTable.appendChild(row);
    });
}

// Utility functions
function getStatusText(status) {
    const statusMap = {
        'published': 'Publicado',
        'draft': 'Rascunho',
        'pending': 'Pendente',
        'archived': 'Arquivado'
    };
    return statusMap[status] || status;
}

function getTypeText(type) {
    const typeMap = {
        'static': 'Estática',
        'dynamic': 'Dinâmica',
        'landing': 'Landing Page'
    };
    return typeMap[type] || type;
}

function getCategoryText(category) {
    const categoryMap = {
        'care': 'Cuidados',
        'planting': 'Plantio',
        'diseases': 'Doenças',
        'fertilization': 'Fertilização'
    };
    return categoryMap[category] || category;
}

function getDifficultyText(difficulty) {
    const difficultyMap = {
        'easy': 'Fácil',
        'medium': 'Médio',
        'hard': 'Difícil'
    };
    return difficultyMap[difficulty] || difficulty;
}

function getFileIcon(type) {
    const iconMap = {
        'image': 'image',
        'video': 'video',
        'document': 'file-pdf'
    };
    return iconMap[type] || 'file';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

// Event handlers
function filterPages(searchTerm) {
    console.log('Filtrando páginas por:', searchTerm);
    // Implement page filtering logic
}

function filterGuides(searchTerm) {
    console.log('Filtrando guias por:', searchTerm);
    // Implement guide filtering logic
}

function filterMedia(searchTerm) {
    console.log('Filtrando mídia por:', searchTerm);
    // Implement media filtering logic
}

function filterPagesByStatus(status) {
    console.log('Filtrando páginas por status:', status);
    // Implement status filtering logic
}

function filterGuidesByStatus(status) {
    console.log('Filtrando guias por status:', status);
    // Implement status filtering logic
}

function switchView(view, button) {
    // Update active view button
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    console.log('Mudando visualização para:', view);
    // Implement view switching logic
}

function openMediaUpload() {
    document.getElementById('mediaUpload').click();
}

function handleFileUpload(files) {
    console.log('Fazendo upload de', files.length, 'arquivo(s)');
    
    Array.from(files).forEach(file => {
        console.log('Uploading:', file.name, file.size, 'bytes');
    });
    
    showNotification(`${files.length} arquivo(s) carregado(s) com sucesso!`, 'success');
    
    // Reload media after upload
    setTimeout(() => {
        loadMedia();
    }, 1000);
}

function openAddContentModal() {
    document.getElementById('addContentModal').classList.add('show');
}

function openAddGuideModal() {
    document.getElementById('addGuideModal').classList.add('show');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

function handleAddContent() {
    const formData = {
        type: document.getElementById('contentType').value,
        title: document.getElementById('contentTitle').value,
        slug: document.getElementById('contentSlug').value,
        description: document.getElementById('contentDescription').value,
        status: document.getElementById('contentStatus').value
    };
    
    console.log('Adicionando novo conteúdo:', formData);
    
    showNotification('Conteúdo criado com sucesso!', 'success');
    closeModal('addContentModal');
    
    // Reset form
    document.getElementById('addContentForm').reset();
    
    // Reload pages
    loadPages();
}

function handleAddGuide() {
    const formData = {
        title: document.getElementById('guideTitle').value,
        category: document.getElementById('guideCategory').value,
        difficulty: document.getElementById('guideDifficulty').value,
        content: document.getElementById('guideContent').value
    };
    
    console.log('Adicionando novo guia:', formData);
    
    showNotification('Guia criado com sucesso!', 'success');
    closeModal('addGuideModal');
    
    // Reset form
    document.getElementById('addGuideForm').reset();
    
    // Reload guides
    loadGuides();
}

// Page actions
function editPage(pageId) {
    console.log('Editando página:', pageId);
    showNotification('Abrindo editor de página...', 'info');
}

function previewPage(pageId) {
    console.log('Visualizando página:', pageId);
    showNotification('Abrindo visualização da página...', 'info');
}

function togglePageStatus(pageId) {
    console.log('Alterando status da página:', pageId);
    showNotification('Status da página alterado!', 'success');
    loadPages();
}

function deletePage(pageId) {
    if (confirm('Tem certeza que deseja excluir esta página?')) {
        console.log('Excluindo página:', pageId);
        showNotification('Página excluída com sucesso!', 'success');
        loadPages();
    }
}

// Guide actions
function editGuide(guideId) {
    console.log('Editando guia:', guideId);
    showNotification('Abrindo editor de guia...', 'info');
}

function previewGuide(guideId) {
    console.log('Visualizando guia:', guideId);
    showNotification('Abrindo visualização do guia...', 'info');
}

function toggleGuideStatus(guideId) {
    console.log('Alterando status do guia:', guideId);
    showNotification('Status do guia alterado!', 'success');
    loadGuides();
}

function deleteGuide(guideId) {
    if (confirm('Tem certeza que deseja excluir este guia?')) {
        console.log('Excluindo guia:', guideId);
        showNotification('Guia excluído com sucesso!', 'success');
        loadGuides();
    }
}

// Media actions
function selectMedia(mediaId) {
    console.log('Selecionando mídia:', mediaId);
    showNotification('Mídia selecionada!', 'info');
}

function previewMedia(mediaId) {
    console.log('Visualizando mídia:', mediaId);
    showNotification('Abrindo visualização da mídia...', 'info');
}

function deleteMedia(mediaId) {
    if (confirm('Tem certeza que deseja excluir este arquivo?')) {
        console.log('Excluindo mídia:', mediaId);
        showNotification('Arquivo excluído com sucesso!', 'success');
        loadMedia();
    }
}

// SEO actions
function refreshSEOData() {
    console.log('Atualizando dados de SEO...');
    showNotification('Dados de SEO atualizados!', 'success');
    loadSEOData();
}

function fixSEOIssue(issueType) {
    console.log('Corrigindo problema de SEO:', issueType);
    showNotification('Problema de SEO corrigido!', 'success');
    loadSEOIssues();
}

function exportKeywords() {
    console.log('Exportando palavras-chave...');
    showNotification('Palavras-chave exportadas!', 'success');
}

// Bulk actions
function bulkActions() {
    console.log('Abrindo ações em lote...');
    showNotification('Funcionalidade de ações em lote em desenvolvimento!', 'info');
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
