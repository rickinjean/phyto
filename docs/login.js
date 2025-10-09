// Authentication mode state
let isLoginMode = true;

// DOM elements
const authTitle = document.getElementById('authTitle');
const authSubtitle = document.getElementById('authSubtitle');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const authToggleText = document.getElementById('authToggleText');
const authToggleLink = document.getElementById('authToggleLink');
const successModal = document.getElementById('successModal');

// Toggle between login and register modes
function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    
    if (isLoginMode) {
        // Switch to login mode
        authTitle.textContent = 'Entrar';
        authSubtitle.textContent = 'Acesse sua conta no Phytografia';
        loginForm.style.display = 'flex';
        registerForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
        authToggleText.innerHTML = 'Não tem uma conta? <a href="#" id="authToggleLink" onclick="toggleAuthMode()">Cadastre-se</a>';
    } else {
        // Switch to register mode
        authTitle.textContent = 'Criar Conta';
        authSubtitle.textContent = 'Junte-se à comunidade Phytografia';
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
        forgotPasswordForm.style.display = 'none';
        authToggleText.innerHTML = 'Já tem uma conta? <a href="#" id="authToggleLink" onclick="toggleAuthMode()">Entrar</a>';
    }
}

// Show forgot password form
function showForgotPassword() {
    authTitle.textContent = 'Recuperar Senha';
    authSubtitle.textContent = 'Digite seu email para recuperar sua senha';
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    forgotPasswordForm.style.display = 'flex';
    authToggleText.innerHTML = 'Lembrou da senha? <a href="#" onclick="backToLogin()">Voltar ao login</a>';
}

// Back to login from forgot password
function backToLogin() {
    isLoginMode = true;
    authTitle.textContent = 'Entrar';
    authSubtitle.textContent = 'Acesse sua conta no Phytografia';
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
    forgotPasswordForm.style.display = 'none';
    authToggleText.innerHTML = 'Não tem uma conta? <a href="#" id="authToggleLink" onclick="toggleAuthMode()">Cadastre-se</a>';
}

// Password visibility toggle
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Real-time validation for registration
function setupValidation() {
    const registerUsername = document.getElementById('registerUsername');
    const registerEmail = document.getElementById('registerEmail');
    const registerPassword = document.getElementById('registerPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    
    // Username validation
    registerUsername.addEventListener('input', validateUsername);
    registerUsername.addEventListener('blur', validateUsername);
    
    // Email validation
    registerEmail.addEventListener('input', validateEmail);
    registerEmail.addEventListener('blur', validateEmail);
    
    // Password validation
    registerPassword.addEventListener('input', validatePassword);
    
    // Confirm password validation
    confirmPassword.addEventListener('input', validateConfirmPassword);
    confirmPassword.addEventListener('blur', validateConfirmPassword);
}

// Username validation
function validateUsername() {
    const username = document.getElementById('registerUsername');
    const validation = document.getElementById('usernameValidation');
    const icon = username.parentElement.querySelector('.validation-icon');
    
    const value = username.value.trim();
    
    if (value.length === 0) {
        hideValidation(validation, icon);
        return;
    }
    
    if (value.length < 3) {
        showValidation(validation, icon, 'Nome de usuário deve ter pelo menos 3 caracteres', 'error');
        return;
    }
    
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        showValidation(validation, icon, 'Nome de usuário pode conter apenas letras, números e underscore', 'error');
        return;
    }
    
    // Simulate checking if username is available
    setTimeout(() => {
        if (value === 'admin' || value === 'test') {
            showValidation(validation, icon, 'Este nome de usuário já está em uso', 'error');
        } else {
            showValidation(validation, icon, 'Nome de usuário disponível', 'success');
        }
    }, 500);
}

// Email validation
function validateEmail() {
    const email = document.getElementById('registerEmail');
    const validation = document.getElementById('emailValidation');
    const icon = email.parentElement.querySelector('.validation-icon');
    
    const value = email.value.trim();
    
    if (value.length === 0) {
        hideValidation(validation, icon);
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showValidation(validation, icon, 'Digite um email válido', 'error');
        return;
    }
    
    // Simulate checking if email is available
    setTimeout(() => {
        if (value === 'admin@test.com' || value === 'test@test.com') {
            showValidation(validation, icon, 'Este email já está cadastrado', 'error');
        } else {
            showValidation(validation, icon, 'Email disponível', 'success');
        }
    }, 500);
}

// Password validation
function validatePassword() {
    const password = document.getElementById('registerPassword');
    const strengthBar = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    const value = password.value;
    
    // Check requirements
    const requirements = {
        length: value.length >= 8,
        upper: /[A-Z]/.test(value),
        lower: /[a-z]/.test(value),
        number: /\d/.test(value),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(value)
    };
    
    // Update requirement indicators
    Object.keys(requirements).forEach(req => {
        const element = document.getElementById(`req-${req}`);
        if (requirements[req]) {
            element.classList.add('valid');
        } else {
            element.classList.remove('valid');
        }
    });
    
    // Calculate strength
    const validCount = Object.values(requirements).filter(Boolean).length;
    let strength = 'weak';
    let strengthPercentage = 0;
    
    if (validCount >= 5) {
        strength = 'strong';
        strengthPercentage = 100;
        strengthText.textContent = 'Senha forte';
    } else if (validCount >= 4) {
        strength = 'good';
        strengthPercentage = 75;
        strengthText.textContent = 'Senha boa';
    } else if (validCount >= 3) {
        strength = 'fair';
        strengthPercentage = 50;
        strengthText.textContent = 'Senha razoável';
    } else if (validCount >= 1) {
        strength = 'weak';
        strengthPercentage = 25;
        strengthText.textContent = 'Senha fraca';
    } else {
        strengthText.textContent = 'Força da senha';
    }
    
    // Update strength bar
    strengthBar.className = `strength-fill ${strength}`;
    strengthBar.style.width = `${strengthPercentage}%`;
}

// Confirm password validation
function validateConfirmPassword() {
    const password = document.getElementById('registerPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const validation = document.getElementById('confirmPasswordValidation');
    const icon = confirmPassword.parentElement.querySelector('.validation-icon');
    
    const passwordValue = password.value;
    const confirmValue = confirmPassword.value;
    
    if (confirmValue.length === 0) {
        hideValidation(validation, icon);
        return;
    }
    
    if (passwordValue !== confirmValue) {
        showValidation(validation, icon, 'As senhas não coincidem', 'error');
        return;
    }
    
    showValidation(validation, icon, 'Senhas coincidem', 'success');
}

// Show validation message
function showValidation(validationElement, iconElement, message, type) {
    validationElement.textContent = message;
    validationElement.className = `validation-message ${type}`;
    
    if (iconElement) {
        iconElement.className = `validation-icon ${type === 'success' ? 'valid' : 'invalid'}`;
    }
}

// Hide validation message
function hideValidation(validationElement, iconElement) {
    validationElement.className = 'validation-message';
    validationElement.textContent = '';
    
    if (iconElement) {
        iconElement.className = 'validation-icon';
    }
}

// Form submissions
function setupFormSubmissions() {
    // Login form
    loginForm.addEventListener('submit', handleLogin);
    
    // Register form
    registerForm.addEventListener('submit', handleRegister);
    
    // Forgot password form
    forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    
    // Social login buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', handleSocialLogin);
    });
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Add loading state
    const submitBtn = e.target.querySelector('.auth-btn');
    submitBtn.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        
        // Simulate successful login
        if (email && password) {
            showModal('Login realizado com sucesso!', 'Bem-vindo de volta ao Phytografia!');
            
            // Simulate redirect after modal close
            setTimeout(() => {
                // window.location.href = 'dashboard.html';
                console.log('Redirecting to dashboard...');
            }, 2000);
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }, 2000);
}

// Handle registration
function handleRegister(e) {
    e.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    // Validate form
    if (!username || !email || !password || !confirmPassword) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }
    
    if (!agreeTerms) {
        alert('Você deve concordar com os termos de uso.');
        return;
    }
    
    // Add loading state
    const submitBtn = e.target.querySelector('.auth-btn');
    submitBtn.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        
        showModal('Conta criada com sucesso!', 'Um email de verificação foi enviado para ' + email);
        
        // Switch to login mode after successful registration
        setTimeout(() => {
            toggleAuthMode();
        }, 2000);
    }, 2000);
}

// Handle forgot password
function handleForgotPassword(e) {
    e.preventDefault();
    
    const email = document.getElementById('forgotEmail').value;
    
    if (!email) {
        alert('Por favor, digite seu email.');
        return;
    }
    
    // Add loading state
    const submitBtn = e.target.querySelector('.auth-btn');
    submitBtn.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        
        showModal('Email enviado!', 'Instruções de recuperação de senha foram enviadas para ' + email);
        
        // Back to login after successful email send
        setTimeout(() => {
            backToLogin();
        }, 2000);
    }, 2000);
}

// Handle social login
function handleSocialLogin(e) {
    const provider = e.currentTarget.querySelector('i').classList.contains('fa-google') ? 'Google' :
                    e.currentTarget.querySelector('i').classList.contains('fa-facebook-f') ? 'Facebook' : 'GitHub';
    
    // Add loading state
    e.currentTarget.style.opacity = '0.7';
    e.currentTarget.style.pointerEvents = 'none';
    
    // Simulate OAuth flow
    setTimeout(() => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.pointerEvents = 'auto';
        
        showModal('Login realizado com sucesso!', `Bem-vindo! Você entrou usando ${provider}.`);
        
        // Simulate redirect
        setTimeout(() => {
            console.log(`Redirecting after ${provider} login...`);
        }, 2000);
    }, 1500);
}

// Modal functions
function showModal(title, message) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').textContent = message;
    successModal.style.display = 'block';
}

function closeModal() {
    successModal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Close modal with Escape key
    if (e.key === 'Escape' && successModal.style.display === 'block') {
        closeModal();
    }
    
    // Submit form with Enter key
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const form = e.target.closest('form');
        if (form && form.style.display !== 'none') {
            form.dispatchEvent(new Event('submit'));
        }
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupValidation();
    setupFormSubmissions();
    
    // Add smooth animations
    document.querySelector('.auth-card').style.animation = 'fadeInUp 0.6s ease-out';
    document.querySelector('.auth-info').style.animation = 'fadeInUp 0.8s ease-out';
    
    console.log('Authentication page loaded successfully!');
});

// Auto-focus first input
window.addEventListener('load', () => {
    const firstInput = document.querySelector('.auth-form:not([style*="display: none"]) input');
    if (firstInput) {
        firstInput.focus();
    }
});

// Form field animations
document.querySelectorAll('.input-group input').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'scale(1.02)';
        input.parentElement.style.transition = 'transform 0.2s ease';
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'scale(1)';
    });
});

// Prevent form submission on Enter in password fields (except when intended)
document.querySelectorAll('input[type="password"]').forEach(input => {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const form = input.closest('form');
            const submitBtn = form.querySelector('.auth-btn');
            if (submitBtn) {
                submitBtn.click();
            }
        }
    });
});

