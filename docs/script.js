console.log("script.js carregado!");

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}


// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}));

// Search functionality for the main page (index.html)
const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
const mainSearchForm = document.getElementById("mainSearchForm");

if (searchInput && mainSearchForm) {
    if (searchSuggestions) {
        searchInput.addEventListener("focus", () => {
            searchSuggestions.style.display = "block";
        });

        searchInput.addEventListener("blur", () => {
            setTimeout(() => {
                searchSuggestions.style.display = "none";
            }, 200);
        });

        searchInput.addEventListener("input", (e) => {
            const value = e.target.value.toLowerCase();
            const suggestions = document.querySelectorAll(".suggestion-item");
            
            suggestions.forEach(suggestion => {
                const text = suggestion.textContent.toLowerCase();
                if (text.includes(value)) {
                    suggestion.style.display = "block";
                } else {
                    suggestion.style.display = "none";
                }
            });
        });

        document.querySelectorAll(".suggestion-item").forEach(item => {
            item.addEventListener("click", () => {
                searchInput.value = item.textContent.split(" (")[0];
                searchSuggestions.style.display = "none";
                mainSearchForm.submit();
            });
        });
    }

    mainSearchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Redirect to catalog.html with the search query
            window.location.href = `catalog.html?query=${encodeURIComponent(searchTerm)}`;
        } else {
            showNotification("Por favor, digite um termo de pesquisa.", "warning");
        }
    });
}

// Featured plants tabs
const tabButtons = document.querySelectorAll(".featured-tabs .tab-btn");
const tabContents = document.querySelectorAll(".featured-content .tab-content");

if (tabButtons.length > 0 && tabContents.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");
            
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));
            
            button.classList.add("active");
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });
}


// Statistics counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start).toLocaleString("pt-BR");
        
        if (start >= target) {
            element.textContent = target.toLocaleString("pt-BR");
            clearInterval(timer);
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("stat-number") && entry.target.dataset.target) {
                const target = parseInt(entry.target.getAttribute("data-target"));
                animateCounter(entry.target, target);
                obs.unobserve(entry.target);
            } else {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    // Adiciona um pequeno atraso para garantir que o DOM esteja completamente carregado e renderizado
    setTimeout(() => {
        document.querySelectorAll(".stat-number").forEach(stat => {
            observer.observe(stat);
        });
        
        document.querySelectorAll(".quick-access-card, .plant-card, .stat-card").forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(30px)";
            card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            observer.observe(card);
        });
    }, 100); // Atraso de 100ms
});


// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector(".header");

if (header) {
    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }
        
        if (scrollTop > 50) {
            header.style.background = "rgba(255, 255, 255, 0.95)";
            header.style.backdropFilter = "blur(10px)";
        } else {
            header.style.background = "var(--white)";
            header.backdropFilter = "none";
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}


// Notification system
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
        transform: translateX(120%);
        transition: transform 0.3s ease-out;
    `;
    
    notificationContainer.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = "translateX(0)";
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = "translateX(120%)";
        notification.addEventListener("transitionend", () => notification.remove());
    }, 3000);
}

// Logout function (mock)
function logout() {
    showNotification("Você foi desconectado.", "info");
    setTimeout(() => window.location.href = "login.html", 1500);
}
