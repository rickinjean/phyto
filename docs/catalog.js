// Sample plant data (Expanded to 20 plants)
const plantsData = [
    { id: 1, name: "Rosa", scientificName: "Rosa spp.", description: "Flor símbolo do amor e da beleza, com variedades em diversas cores e fragrâncias.", image: "/../imagens/rosavermelha1.jpg", category: "ornamental", size: "medio", light: "sol-pleno", water: "moderada", difficulty: "moderado", tags: ["Ornamental", "Perfumada"], popularity: 95 },
    { id: 2, name: "Girassol", scientificName: "Helianthus annuus", description: "Planta que segue o movimento do sol, conhecida por suas sementes nutritivas.", image: "/../imagens/girassol1.webp", category: "alimenticia", size: "grande", light: "sol-pleno", water: "moderada", difficulty: "facil", tags: ["Alimentícia", "Ornamental"], popularity: 88 },
    { id: 3, name: "Lavanda", scientificName: "Lavandula angustifolia", description: "Planta aromática conhecida por suas propriedades relaxantes e medicinais.", image: "/../imagens/lavanda1.webp", category: "medicinal", size: "pequeno", light: "sol-pleno", water: "baixa", difficulty: "facil", tags: ["Medicinal", "Aromática"], popularity: 92 },
    { id: 4, name: "Orquídea", scientificName: "Orchidaceae", description: "Família de plantas com flores exóticas e elegantes, muito apreciadas na decoração.", image: "/../imagens/orquideaazul1.webp", category: "ornamental", size: "pequeno", light: "meia-sombra", water: "moderada", difficulty: "dificil", tags: ["Ornamental", "Exótica"], popularity: 85 },
    { id: 5, name: "Ipê Amarelo", scientificName: "Handroanthus albus", description: "Árvore brasileira que floresce no inverno, símbolo da chegada da primavera.", image: "/../imagens/ipeamarelo1.webp", category: "nativa", size: "grande", light: "sol-pleno", water: "moderada", difficulty: "moderado", tags: ["Nativa", "Ornamental"], popularity: 78 },
    { id: 6, name: "Manjericão", scientificName: "Ocimum basilicum", description: "Erva aromática amplamente utilizada na culinária e medicina tradicional.", image: "/../imagens/manjericao1.webp", category: "aromatica", size: "pequeno", light: "sol-pleno", water: "moderada", difficulty: "facil", tags: ["Aromática", "Culinária"], popularity: 90 },
    { id: 7, name: "Samambaia", scientificName: "Nephrolepis exaltata", description: "Planta ornamental ideal para ambientes internos e sombreados.", image: "/../imagens/samambaia1.webp", category: "ornamental", size: "medio", light: "sombra", water: "alta", difficulty: "moderado", tags: ["Ornamental", "Interior"], popularity: 82 },
    { id: 8, name: "Aloe Vera", scientificName: "Aloe barbadensis", description: "Planta suculenta conhecida por suas propriedades medicinais e cosméticas.", image: "/../imagens/aloevera2.webp", category: "medicinal", size: "pequeno", light: "sol-pleno", water: "baixa", difficulty: "facil", tags: ["Medicinal", "Suculenta"], popularity: 87 },
    { id: 9, name: "Cacto", scientificName: "Cactaceae", description: "Planta suculenta adaptada a ambientes secos, com espinhos e formas variadas.", image: "/../imagens/cacto1.webp", category: "ornamental", size: "pequeno", light: "sol-pleno", water: "baixa", difficulty: "facil", tags: ["Suculenta", "Exótica"], popularity: 80 },
    { id: 10, name: "Hortelã", scientificName: "Mentha spicata", description: "Erva aromática refrescante, usada em chás, bebidas e pratos culinários.", image: "/../imagens/hortela1.webp", category: "aromatica", size: "pequeno", light: "meia-sombra", water: "alta", difficulty: "facil", tags: ["Aromática", "Culinária", "Medicinal"], popularity: 89 },
    { id: 11, name: "Tomate Cereja", scientificName: "Solanum lycopersicum var. cerasiforme", description: "Pequeno fruto saboroso, ideal para cultivo em vasos e usado em saladas e molhos.", image: "/../imagens/tomatecereja1.webp", category: "alimenticia", size: "medio", light: "sol-pleno", water: "moderada", difficulty: "moderado", tags: ["Alimentícia", "Horta"], popularity: 86 },
    { id: 12, name: "Jiboia", scientificName: "Epipremnum aureum", description: "Planta trepadeira muito resistente, ideal para iniciantes e ambientes internos.", image: "/../imagens/jiboia1.jpg", category: "ornamental", size: "medio", light: "meia-sombra", water: "moderada", difficulty: "facil", tags: ["Interior", "Purificadora"], popularity: 93 },
    { id: 13, name: "Pitangueira", scientificName: "Eugenia uniflora", description: "Árvore frutífera nativa do Brasil, produz frutos saborosos e atrai pássaros.", image: "/../imagens/PITANGAS1.jpg", category: "nativa", size: "grande", light: "sol-pleno", water: "moderada", difficulty: "facil", tags: ["Nativa", "Frutífera"], popularity: 75 },
    { id: 14, name: "Camomila", scientificName: "Matricaria chamomilla", description: "Planta medicinal com flores delicadas, usada para fazer chás calmantes.", image: "/../imagens/camomila1.webp", category: "medicinal", size: "pequeno", light: "sol-pleno", water: "moderada", difficulty: "facil", tags: ["Medicinal", "Chá"], popularity: 84 },
    { id: 15, name: "Zamioculca", scientificName: "Zamioculcas zamiifolia", description: "Planta extremamente resistente à falta de água e luz, perfeita para escritórios.", image: "/../imagens/zamio1.jpeg", category: "ornamental", size: "medio", light: "sombra", water: "baixa", difficulty: "facil", tags: ["Interior", "Resistente"], popularity: 91 },
    { id: 16, name: "Alecrim", scientificName: "Rosmarinus officinalis", description: "Arbusto aromático usado como tempero e em óleos essenciais. Estimula a memória.", image: "/../imagens/alecrim1.webp", category: "aromatica", size: "medio", light: "sol-pleno", water: "baixa", difficulty: "facil", tags: ["Aromática", "Culinária"], popularity: 88 },
    { id: 17, name: "Bromélia", scientificName: "Bromeliaceae", description: "Planta tropical com folhas coloridas e uma inflorescência exótica no centro.", image: "/../imagens/bromelia1.webp", category: "ornamental", size: "pequeno", light: "meia-sombra", water: "moderada", difficulty: "moderado", tags: ["Tropical", "Exótica"], popularity: 79 },
    { id: 18, name: "Jabuticabeira", scientificName: "Plinia cauliflora", description: "Árvore frutífera nativa do Brasil, cujos frutos crescem diretamente no tronco.", image: "/../imagens/jabuticaba1.webp", category: "nativa", size: "grande", light: "sol-pleno", water: "alta", difficulty: "moderado", tags: ["Nativa", "Frutífera"], popularity: 81 },
    { id: 19, name: "Costela-de-Adão", scientificName: "Monstera deliciosa", description: "Planta com folhas grandes e recortadas, muito popular na decoração de interiores.", image: "/../imagens/costeladeadao1.jpg", category: "ornamental", size: "grande", light: "meia-sombra", water: "moderada", difficulty: "facil", tags: ["Interior", "Tropical"], popularity: 94 },
    { id: 20, name: "Pimenta", scientificName: "Capsicum spp.", description: "Planta que produz frutos picantes, usada como tempero em todo o mundo.", image: "/../imagens/pimenta1.webp", category: "alimenticia", size: "pequeno", light: "sol-pleno", water: "moderada", difficulty: "moderado", tags: ["Alimentícia", "Horta", "Picante"], popularity: 83 }
];


// State management
let currentView = 'grid';
let currentSort = 'name';
let currentPage = 1;
let itemsPerPage = 8; // Reduced for better pagination testing
let filteredPlants = [...plantsData];
let selectedForComparison = [];

// DOM elements
const plantsContainer = document.getElementById('plantsContainer' );
const viewButtons = document.querySelectorAll('.view-btn');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');
const catalogSearch = document.getElementById('catalogSearch');
const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
const clearFiltersBtn = document.querySelector('.clear-filters');
const paginationContainer = document.querySelector('.pagination');
const compareModal = document.getElementById('compareModal');
const compareGrid = document.getElementById('compareGrid');
const startComparisonBtn = document.getElementById('startComparisonBtn');
const clearComparisonBtn = document.getElementById('clearComparisonBtn');
const closeModalBtn = document.querySelector('.close-modal');

// Initialize catalog
document.addEventListener('DOMContentLoaded', () => {
    if (!plantsContainer) {
        console.error("Elemento 'plantsContainer' não encontrado. O script não será executado.");
        return;
    }
    
    setupEventListeners();
    
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('query');
    if (searchQuery) {
        catalogSearch.value = searchQuery;
    }
    
    applyAllFiltersAndSort();
    updateCompareButton();
});

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Event listeners
function setupEventListeners() {
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentView = btn.dataset.view;
            updateView();
        });
    });

    if (sortSelect) sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        applyAllFiltersAndSort();
    });

    if (catalogSearch) catalogSearch.addEventListener('input', debounce(() => {
        currentPage = 1;
        applyAllFiltersAndSort();
    }, 300));

    filterCheckboxes.forEach(input => input.addEventListener('change', () => {
        currentPage = 1;
        applyAllFiltersAndSort();
    }));

    if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', clearAllFilters);
    
    // Comparison Modal Listeners
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeCompareModal);
    if (compareModal) compareModal.addEventListener('click', (e) => {
        if (e.target === compareModal) closeCompareModal();
    });
    if (startComparisonBtn) startComparisonBtn.addEventListener('click', () => {
        if (selectedForComparison.length < 2) {
            showNotification('Selecione pelo menos 2 plantas para comparar.', 'warning');
            return;
        }
        showNotification(`Comparando ${selectedForComparison.length} plantas!`, 'info');
        console.log('Plants to compare:', selectedForComparison);
        closeCompareModal();
    });
    if (clearComparisonBtn) clearComparisonBtn.addEventListener('click', clearComparisonSelection);
}

// Main function to apply all logic
function applyAllFiltersAndSort() {
    const searchTerm = catalogSearch.value.toLowerCase();
    let tempPlants = plantsData.filter(plant => 
        plant.name.toLowerCase().includes(searchTerm) ||
        plant.scientificName.toLowerCase().includes(searchTerm) ||
        (plant.tags && plant.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
    );

    const activeFilters = {};
    filterCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const group = checkbox.closest('.filter-group').querySelector('h4').textContent.toLowerCase().replace('í', 'i').replace('ú', 'u');
            if (!activeFilters[group]) activeFilters[group] = [];
            activeFilters[group].push(checkbox.value);
        }
    });

    if (Object.keys(activeFilters).length > 0) {
        tempPlants = tempPlants.filter(plant => {
            return Object.entries(activeFilters).every(([group, values]) => {
                if (values.length === 0) return true;
                let key;
                switch(group) {
                    case 'categorias': key = 'category'; break;
                    case 'tamanho': key = 'size'; break;
                    case 'luminosidade': key = 'light'; break;
                    case 'necessidade hidrica': key = 'water'; break;
                    case 'dificuldade de cultivo': key = 'difficulty'; break;
                    default: return true;
                }
                return values.includes(plant[key]);
            });
        });
    }
    
    filteredPlants = tempPlants;
    sortPlants();
    renderPage();
}

// Sorting
function sortPlants() {
    filteredPlants.sort((a, b) => {
        switch (currentSort) {
            case 'name': return a.name.localeCompare(b.name);
            case 'name-desc': return b.name.localeCompare(a.name);
            case 'popularity': return (b.popularity || 0) - (a.popularity || 0);
            case 'date': return b.id - a.id;
            case 'family': return a.scientificName.localeCompare(b.scientificName);
            default: return 0;
        }
    });
}

// Clear all filters
function clearAllFilters() {
    filterCheckboxes.forEach(input => input.checked = false);
    catalogSearch.value = '';
    currentPage = 1;
    applyAllFiltersAndSort();
}

// View management
function updateView() {
    viewButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.view === currentView));
    plantsContainer.className = `plants-container ${currentView}-view`;
}

// Rendering the page
function renderPage() {
    renderPlants();
    renderPagination();
    updateResultsCount();
    updateView();
}

// Rendering plants
function renderPlants() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const plantsToShow = filteredPlants.slice(startIndex, endIndex);

    if (plantsToShow.length === 0) {
        plantsContainer.innerHTML = '<p class="empty-state">Nenhuma planta encontrada com os filtros selecionados.</p>';
        return;
    }

    plantsContainer.innerHTML = plantsToShow.map(plant => createPlantCard(plant)).join('');
    addCardEventListeners();
}

function createPlantCard(plant) {
    const isSelected = selectedForComparison.includes(plant.id);
    return `
        <div class="plant-card" data-plant-id="${plant.id}">
            <div class="plant-image">
                <img src="${plant.image}" alt="${plant.name}" loading="lazy">
                <div class="plant-overlay">
                    <button class="overlay-btn favorite-btn" title="Adicionar aos favoritos"><i class="far fa-heart"></i></button>
                    <button class="overlay-btn share-btn" title="Compartilhar"><i class="fas fa-share"></i></button>
                    <button class="overlay-btn info-btn" title="Mais informações"><i class="fas fa-info"></i></button>
                </div>
            </div>
            <div class="plant-info">
                <h3>${plant.name}</h3>
                <p class="scientific-name">${plant.scientificName}</p>
                <div class="plant-actions">
                    <a href="plant-details.html?id=${plant.id}" class="action-btn">Ver Detalhes</a>
                    <label class="compare-checkbox">
                        <input type="checkbox" ${isSelected ? 'checked' : ''} onchange="toggleComparison(${plant.id}, this)">
                        Comparar
                    </label>
                </div>
            </div>
        </div>
    `;
}

function addCardEventListeners() {
    document.querySelectorAll('.favorite-btn').forEach(btn => btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const icon = btn.querySelector('i');
        icon.classList.toggle('fas');
        icon.classList.toggle('far');
        showNotification(icon.classList.contains('fas') ? 'Adicionado aos favoritos!' : 'Removido dos favoritos.');
    }));
    // Add other listeners for share, info, etc.
}

// Comparison functionality
function toggleComparison(plantId, checkbox) {
    const index = selectedForComparison.indexOf(plantId);
    if (index > -1) {
        selectedForComparison.splice(index, 1);
    } else {
        if (selectedForComparison.length >= 3) {
            showNotification('Você pode comparar no máximo 3 plantas.', 'warning');
            checkbox.checked = false;
            return;
        }
        selectedForComparison.push(plantId);
    }
    updateCompareButton();
}

function updateCompareButton() {
    let compareBtn = document.getElementById('floatingCompareBtn');
    if (selectedForComparison.length > 0) {
        if (!compareBtn) {
            compareBtn = document.createElement('button');
            compareBtn.id = 'floatingCompareBtn';
            compareBtn.className = 'floating-compare-btn';
            compareBtn.onclick = showCompareModal;
            document.body.appendChild(compareBtn);
        }
        compareBtn.innerHTML = `<i class="fas fa-balance-scale"></i> Comparar (<span id="compareCount">${selectedForComparison.length}</span>)`;
    } else if (compareBtn) {
        compareBtn.remove();
    }
}

function showCompareModal() {
    const selectedPlants = selectedForComparison.map(id => plantsData.find(p => p.id === id)).filter(Boolean);
    
    const getDisplayValue = (type, value) => ({
        size: { pequeno: 'Pequeno', medio: 'Médio', grande: 'Grande' },
        light: { 'sol-pleno': 'Sol Pleno', 'meia-sombra': 'Meia Sombra', sombra: 'Sombra' },
        water: { baixa: 'Baixa', moderada: 'Moderada', alta: 'Alta' },
        difficulty: { facil: 'Fácil', moderado: 'Moderado', dificil: 'Difícil' }
    }[type][value] || value);

    compareGrid.innerHTML = selectedPlants.map(plant => `
        <div class="compare-item">
            <img src="${plant.image}" alt="${plant.name}">
            <h4>${plant.name}</h4>
            <p class="scientific">${plant.scientificName}</p>
            <div class="compare-features">
                <div><strong>Tamanho:</strong> ${getDisplayValue('size', plant.size)}</div>
                <div><strong>Luz:</strong> ${getDisplayValue('light', plant.light)}</div>
                <div><strong>Água:</strong> ${getDisplayValue('water', plant.water)}</div>
                <div><strong>Dificuldade:</strong> ${getDisplayValue('difficulty', plant.difficulty)}</div>
                <div><strong>Popularidade:</strong> ${plant.popularity}%</div>
            </div>
        </div>
    `).join('');
    
    compareModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCompareModal() {
    compareModal.style.display = 'none';
    document.body.style.overflow = '';
}

function clearComparisonSelection() {
    selectedForComparison = [];
    document.querySelectorAll('.compare-checkbox input').forEach(checkbox => checkbox.checked = false);
    updateCompareButton();
    closeCompareModal();
    showNotification('Seleção de comparação limpa.', 'info');
}

// Pagination
function renderPagination() {
    if (!paginationContainer) return;
    const totalPages = Math.ceil(filteredPlants.length / itemsPerPage);
    if (totalPages <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }
    paginationContainer.style.display = 'flex';

    const pageNumbersContainer = document.querySelector('.page-numbers');
    pageNumbersContainer.innerHTML = '';

    const createPageBtn = (page, text = page, active = false, disabled = false) => {
        const btn = document.createElement('button');
        btn.className = `page-number ${active ? 'active' : ''}`;
        btn.textContent = text;
        btn.disabled = disabled;
        btn.onclick = () => changePage(page);
        return btn;
    };

    // Prev button
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('prevPage').onclick = () => changePage(currentPage - 1);

    // Page numbers logic
    const maxPagesToShow = 5;
    if (totalPages <= maxPagesToShow) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbersContainer.appendChild(createPageBtn(i, i, i === currentPage));
        }
    } else {
        if (currentPage > 2) {
            pageNumbersContainer.appendChild(createPageBtn(1));
            if (currentPage > 3) pageNumbersContainer.innerHTML += `<span class="page-dots">...</span>`;
        }

        let start = Math.max(1, currentPage - 1);
        let end = Math.min(totalPages, currentPage + 1);
        if (currentPage === 1) end = 3;
        if (currentPage === totalPages) start = totalPages - 2;

        for (let i = start; i <= end; i++) {
            pageNumbersContainer.appendChild(createPageBtn(i, i, i === currentPage));
        }

        if (currentPage < totalPages - 1) {
            if (currentPage < totalPages - 2) pageNumbersContainer.innerHTML += `<span class="page-dots">...</span>`;
            pageNumbersContainer.appendChild(createPageBtn(totalPages));
        }
    }

    // Next button
    document.getElementById('nextPage').disabled = currentPage === totalPages;
    document.getElementById('nextPage').onclick = () => changePage(currentPage + 1);
}

function changePage(page) {
    if (page < 1 || page > Math.ceil(filteredPlants.length / itemsPerPage)) return;
    currentPage = page;
    renderPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update results count
function updateResultsCount() {
    if (!resultsCount) return;
    const total = filteredPlants.length;
    const start = total === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, total);
    resultsCount.textContent = total === 0 ? 'Mostrando 0 plantas' : `Mostrando ${start}-${end} de ${total} plantas`;
}

// Add floating compare button styles
const style = document.createElement('style');
style.textContent = `
    .floating-compare-btn {
        position: fixed; bottom: 30px; right: 30px;
        background: var(--moss-green); color: white; border: none;
        padding: 1rem 1.5rem; border-radius: 50px; cursor: pointer;
        font-weight: 600; box-shadow: 0 4px 20px rgba(85, 107, 47, 0.3);
        z-index: 1000; transition: all 0.3s ease; display: flex;
        align-items: center; gap: 0.5rem;
    }
    .floating-compare-btn:hover {
        background: var(--primary-brown); transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(85, 107, 47, 0.4);
    }
`;
document.head.appendChild(style);
