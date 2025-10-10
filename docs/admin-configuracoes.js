// Admin Settings JavaScript

// Initialize settings page
document.addEventListener('DOMContentLoaded', function() {
    initializeSettings();
    setupEventListeners();
    loadSettings();
});

function initializeSettings() {
    console.log('Inicializando configurações do sistema...');
    
    // Set active tab
    showTabContent('general');
    
    // Load initial data
    loadSecurityLogs();
    loadBlockedIPs();
    loadBackupHistory();
}

function setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.content-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });

    // Form inputs change tracking
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('change', function() {
            markAsChanged();
        });
    });

    // Auto-save functionality
    setInterval(autoSave, 30000); // Auto-save every 30 seconds
}

function loadSettings() {
    // Simulate loading settings from server
    console.log('Carregando configurações...');
    
    // This would typically load from an API
    const settings = {
        siteName: 'Phytografia',
        siteDescription: 'Sua plataforma completa para identificação e cuidado de plantas',
        siteUrl: 'https://phytografia.com',
        adminEmail: 'admin@phytografia.com',
        timezone: 'America/Sao_Paulo',
        language: 'pt-BR',
        allowRegistration: true,
        requireEmailVerification: true,
        enableUserProfiles: false,
        defaultUserRole: 'user',
        moderateContent: true,
        allowComments: true,
        enableRatings: true,
        maxFileSize: 10
    };

    // Populate form fields
    Object.keys(settings).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.type === 'checkbox') {
                element.checked = settings[key];
            } else {
                element.value = settings[key];
            }
        }
    });
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
        case 'general':
            // General settings already loaded
            break;
        case 'security':
            loadSecurityLogs();
            loadBlockedIPs();
            break;
        case 'email':
            // Email settings already loaded
            break;
        case 'backup':
            loadBackupHistory();
            break;
        case 'integrations':
            // Integrations already loaded
            break;
        case 'advanced':
            // Advanced settings already loaded
            break;
    }
}

function showTabContent(tabName) {
    switchTab(tabName);
}

function loadSecurityLogs() {
    const logsTable = document.getElementById('securityLogsTable');
    
    // Simulate security logs data
    const logs = [
        {
            datetime: '2024-01-16 14:30:25',
            event: 'Login bem-sucedido',
            user: 'admin@phytografia.com',
            ip: '192.168.1.100',
            status: 'success'
        },
        {
            datetime: '2024-01-16 14:25:12',
            event: 'Tentativa de login falhada',
            user: 'hacker@malicious.com',
            ip: '203.0.113.45',
            status: 'failed'
        },
        {
            datetime: '2024-01-16 13:45:33',
            event: 'Alteração de configuração',
            user: 'admin@phytografia.com',
            ip: '192.168.1.100',
            status: 'success'
        },
        {
            datetime: '2024-01-16 12:15:44',
            event: 'Múltiplas tentativas de login',
            user: 'attacker@spam.com',
            ip: '198.51.100.23',
            status: 'blocked'
        },
        {
            datetime: '2024-01-16 11:30:15',
            event: 'Backup automático',
            user: 'Sistema',
            ip: 'localhost',
            status: 'success'
        }
    ];

    logsTable.innerHTML = '';
    logs.forEach(log => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${log.datetime}</td>
            <td>${log.event}</td>
            <td>${log.user}</td>
            <td>${log.ip}</td>
            <td><span class="status-badge ${log.status}">${getStatusText(log.status)}</span></td>
        `;
        logsTable.appendChild(row);
    });
}

function loadBlockedIPs() {
    const blockedList = document.getElementById('blockedIPsList');
    
    // Simulate blocked IPs data
    const blockedIPs = [
        {
            ip: '203.0.113.45',
            reason: 'Múltiplas tentativas de login',
            blockedAt: '2024-01-16 14:25:12',
            attempts: 15
        },
        {
            ip: '198.51.100.23',
            reason: 'Comportamento suspeito',
            blockedAt: '2024-01-16 12:15:44',
            attempts: 8
        },
        {
            ip: '192.0.2.100',
            reason: 'Spam de formulários',
            blockedAt: '2024-01-15 16:30:22',
            attempts: 25
        }
    ];

    blockedList.innerHTML = '';
    blockedIPs.forEach(blocked => {
        const item = document.createElement('div');
        item.className = 'blocked-ip-item';
        item.innerHTML = `
            <div class="blocked-ip-info">
                <div class="ip-header">
                    <h5>${blocked.ip}</h5>
                    <span class="status-badge blocked">Bloqueado</span>
                </div>
                <div class="ip-meta">
                    <span><i class="fas fa-exclamation-triangle"></i> ${blocked.reason}</span>
                    <span><i class="fas fa-calendar"></i> ${blocked.blockedAt}</span>
                    <span><i class="fas fa-times-circle"></i> ${blocked.attempts} tentativas</span>
                </div>
            </div>
            <div class="blocked-ip-actions">
                <button class="btn small success" onclick="unblockIP('${blocked.ip}')">
                    <i class="fas fa-unlock"></i> Desbloquear
                </button>
                <button class="btn small danger" onclick="deleteBlockedIP('${blocked.ip}')">
                    <i class="fas fa-trash"></i> Remover
                </button>
            </div>
        `;
        blockedList.appendChild(item);
    });
}

function loadBackupHistory() {
    const historyList = document.getElementById('backupHistoryList');
    
    // Simulate backup history data
    const backups = [
        {
            id: 1,
            filename: 'backup_2024-01-16_02-00-00.zip',
            size: '45.2 MB',
            date: '2024-01-16 02:00:00',
            type: 'Automático',
            status: 'success'
        },
        {
            id: 2,
            filename: 'backup_2024-01-15_02-00-00.zip',
            size: '44.8 MB',
            date: '2024-01-15 02:00:00',
            type: 'Automático',
            status: 'success'
        },
        {
            id: 3,
            filename: 'backup_manual_2024-01-14_15-30-00.zip',
            size: '44.5 MB',
            date: '2024-01-14 15:30:00',
            type: 'Manual',
            status: 'success'
        },
        {
            id: 4,
            filename: 'backup_2024-01-14_02-00-00.zip',
            size: '0 MB',
            date: '2024-01-14 02:00:00',
            type: 'Automático',
            status: 'failed'
        },
        {
            id: 5,
            filename: 'backup_2024-01-13_02-00-00.zip',
            size: '43.9 MB',
            date: '2024-01-13 02:00:00',
            type: 'Automático',
            status: 'success'
        }
    ];

    historyList.innerHTML = '';
    backups.forEach(backup => {
        const item = document.createElement('div');
        item.className = 'backup-item';
        item.innerHTML = `
            <div class="backup-info">
                <div class="backup-header">
                    <h5>${backup.filename}</h5>
                    <span class="status-badge ${backup.status}">${getStatusText(backup.status)}</span>
                </div>
                <div class="backup-meta">
                    <span><i class="fas fa-calendar"></i> ${backup.date}</span>
                    <span><i class="fas fa-weight-hanging"></i> ${backup.size}</span>
                    <span><i class="fas fa-tag"></i> ${backup.type}</span>
                </div>
            </div>
            <div class="backup-actions">
                ${backup.status === 'success' ? `
                    <button class="btn small secondary" onclick="downloadBackup(${backup.id})">
                        <i class="fas fa-download"></i> Download
                    </button>
                    <button class="btn small warning" onclick="restoreFromBackup(${backup.id})">
                        <i class="fas fa-undo"></i> Restaurar
                    </button>
                ` : ''}
                <button class="btn small danger" onclick="deleteBackup(${backup.id})">
                    <i class="fas fa-trash"></i> Excluir
                </button>
            </div>
        `;
        historyList.appendChild(item);
    });
}

// Utility functions
function getStatusText(status) {
    const statusMap = {
        'success': 'Sucesso',
        'failed': 'Falhou',
        'blocked': 'Bloqueado',
        'pending': 'Pendente',
        'active': 'Ativo',
        'inactive': 'Inativo'
    };
    return statusMap[status] || status;
}

function markAsChanged() {
    // Mark form as changed (could show unsaved changes indicator)
    console.log('Configurações alteradas');
}

function autoSave() {
    // Auto-save functionality
    console.log('Auto-salvando configurações...');
}

// Event handlers
function saveAllSettings() {
    console.log('Salvando todas as configurações...');
    
    // Collect all form data
    const formData = new FormData();
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            formData.append(input.id, input.checked);
        } else if (input.type !== 'file') {
            formData.append(input.id, input.value);
        }
    });
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Configurações salvas com sucesso!', 'success');
    }, 1000);
}

function resetToDefaults() {
    if (confirm('Tem certeza que deseja restaurar todas as configurações para os valores padrão?')) {
        console.log('Restaurando configurações padrão...');
        
        // Reset all form fields to default values
        loadSettings();
        
        showNotification('Configurações restauradas para os valores padrão!', 'success');
    }
}

// Security functions
function refreshSecurityLogs() {
    console.log('Atualizando logs de segurança...');
    loadSecurityLogs();
    showNotification('Logs de segurança atualizados!', 'success');
}

function addIPBlock() {
    const ip = prompt('Digite o IP a ser bloqueado:');
    if (ip) {
        console.log('Bloqueando IP:', ip);
        showNotification(`IP ${ip} bloqueado com sucesso!`, 'success');
        loadBlockedIPs();
    }
}

function unblockIP(ip) {
    if (confirm(`Tem certeza que deseja desbloquear o IP ${ip}?`)) {
        console.log('Desbloqueando IP:', ip);
        showNotification(`IP ${ip} desbloqueado com sucesso!`, 'success');
        loadBlockedIPs();
    }
}

function deleteBlockedIP(ip) {
    if (confirm(`Tem certeza que deseja remover o IP ${ip} da lista de bloqueados?`)) {
        console.log('Removendo IP bloqueado:', ip);
        showNotification(`IP ${ip} removido da lista!`, 'success');
        loadBlockedIPs();
    }
}

// Email functions
function testEmailConnection() {
    console.log('Testando conexão de email...');
    
    // Simulate email test
    setTimeout(() => {
        showNotification('Conexão de email testada com sucesso!', 'success');
    }, 2000);
}

function editEmailTemplate() {
    console.log('Abrindo editor de templates de email...');
    showNotification('Abrindo editor de templates...', 'info');
}

function previewTemplate(templateName) {
    console.log('Visualizando template:', templateName);
    showNotification(`Visualizando template: ${templateName}`, 'info');
}

function editTemplate(templateName) {
    console.log('Editando template:', templateName);
    showNotification(`Editando template: ${templateName}`, 'info');
}

// Backup functions
function createBackup() {
    console.log('Criando backup manual...');
    
    // Simulate backup creation
    setTimeout(() => {
        showNotification('Backup criado com sucesso!', 'success');
        loadBackupHistory();
    }, 3000);
}

function refreshBackupHistory() {
    console.log('Atualizando histórico de backups...');
    loadBackupHistory();
    showNotification('Histórico de backups atualizado!', 'success');
}

function downloadBackup(backupId) {
    console.log('Baixando backup:', backupId);
    showNotification('Download do backup iniciado!', 'info');
}

function restoreFromBackup(backupId) {
    if (confirm('Tem certeza que deseja restaurar este backup? Esta ação irá sobrescrever todos os dados atuais.')) {
        console.log('Restaurando backup:', backupId);
        showNotification('Restauração iniciada. Isso pode levar alguns minutos...', 'info');
    }
}

function deleteBackup(backupId) {
    if (confirm('Tem certeza que deseja excluir este backup?')) {
        console.log('Excluindo backup:', backupId);
        showNotification('Backup excluído com sucesso!', 'success');
        loadBackupHistory();
    }
}

function restoreBackup() {
    const fileInput = document.getElementById('restoreFile');
    if (!fileInput.files.length) {
        showNotification('Por favor, selecione um arquivo de backup!', 'error');
        return;
    }
    
    if (confirm('ATENÇÃO: Esta ação irá sobrescrever todos os dados atuais. Tem certeza que deseja continuar?')) {
        console.log('Restaurando backup do arquivo:', fileInput.files[0].name);
        showNotification('Restauração iniciada. Isso pode levar alguns minutos...', 'info');
    }
}

// Integration functions
function connectIntegration(integrationName) {
    console.log('Conectando integração:', integrationName);
    showNotification(`Conectando com ${integrationName}...`, 'info');
}

function configureIntegration(integrationName) {
    console.log('Configurando integração:', integrationName);
    showNotification(`Abrindo configurações de ${integrationName}...`, 'info');
}

// Advanced functions
function generateAPIKey() {
    if (confirm('Gerar uma nova chave API irá invalidar a chave atual. Continuar?')) {
        console.log('Gerando nova chave API...');
        
        // Generate random API key
        const newKey = 'pk_live_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        document.getElementById('apiKey').value = newKey;
        
        showNotification('Nova chave API gerada com sucesso!', 'success');
    }
}

function toggleAPIKeyVisibility() {
    const apiKeyInput = document.getElementById('apiKey');
    const eyeIcon = document.querySelector('.btn.secondary i.fa-eye');
    
    if (apiKeyInput.type === 'password') {
        apiKeyInput.type = 'text';
        eyeIcon.className = 'fas fa-eye-slash';
    } else {
        apiKeyInput.type = 'password';
        eyeIcon.className = 'fas fa-eye';
    }
}

function copyAPIKey() {
    const apiKeyInput = document.getElementById('apiKey');
    apiKeyInput.select();
    document.execCommand('copy');
    showNotification('Chave API copiada para a área de transferência!', 'success');
}

function clearCache() {
    if (confirm('Tem certeza que deseja limpar todo o cache do sistema?')) {
        console.log('Limpando cache do sistema...');
        
        setTimeout(() => {
            showNotification('Cache limpo com sucesso!', 'success');
        }, 2000);
    }
}

function optimizeDatabase() {
    if (confirm('A otimização do banco de dados pode levar alguns minutos. Continuar?')) {
        console.log('Otimizando banco de dados...');
        
        setTimeout(() => {
            showNotification('Banco de dados otimizado com sucesso!', 'success');
        }, 5000);
    }
}

function checkSystemHealth() {
    console.log('Verificando saúde do sistema...');
    
    setTimeout(() => {
        showNotification('Sistema funcionando normalmente!', 'success');
    }, 3000);
}

function enableMaintenanceMode() {
    if (confirm('Ativar o modo de manutenção irá tornar o site inacessível para os usuários. Continuar?')) {
        console.log('Ativando modo de manutenção...');
        showNotification('Modo de manutenção ativado!', 'warning');
    }
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
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : type === 'warning' ? '#ffc107' : '#17a2b8'};
        color: ${type === 'warning' ? '#000' : 'white'};
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
