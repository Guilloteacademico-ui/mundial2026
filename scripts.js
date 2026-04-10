// Mundial 2026 App - Main JavaScript

// Data de partidos del Mundial 2026
const partidosData = [
    // FASE DE GRUPOS - Grupo A
    {
        id: 1,
        fase: 'Grupo A',
        equipo1: 'México',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/mx.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-06-11',
        hora: '11:00',
        estadio: 'Estadio Azteca',
        ciudad: 'Ciudad de México',
        status: 'upcoming'
    },
    {
        id: 2,
        fase: 'Grupo A',
        equipo1: 'Estados Unidos',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/us.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-06-12',
        hora: '14:00',
        estadio: 'SoFi Stadium',
        ciudad: 'Los Ángeles',
        status: 'upcoming'
    },
    {
        id: 3,
        fase: 'Grupo A',
        equipo1: 'Canadá',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/ca.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-06-12',
        hora: '17:00',
        estadio: 'BMO Field',
        ciudad: 'Toronto',
        status: 'upcoming'
    },
    // FASE DE GRUPOS - Grupo B (con Argentina)
    {
        id: 4,
        fase: 'Grupo B',
        equipo1: 'Argentina',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/ar.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-06-13',
        hora: '16:00',
        estadio: 'MetLife Stadium',
        ciudad: 'Nueva York',
        status: 'upcoming'
    },
    {
        id: 5,
        fase: 'Grupo B',
        equipo1: 'Brasil',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/br.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-06-13',
        hora: '19:00',
        estadio: 'Hard Rock Stadium',
        ciudad: 'Miami',
        status: 'upcoming'
    },
    // Más partidos de grupos
    {
        id: 6,
        fase: 'Grupo C',
        equipo1: 'Francia',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/fr.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-06-14',
        hora: '14:00',
        estadio: 'AT&T Stadium',
        ciudad: 'Dallas',
        status: 'upcoming'
    },
    {
        id: 7,
        fase: 'Grupo C',
        equipo1: 'España',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/es.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-06-14',
        hora: '17:00',
        estadio: 'Arrowhead Stadium',
        ciudad: 'Kansas City',
        status: 'upcoming'
    },
    {
        id: 8,
        fase: 'Grupo D',
        equipo1: 'Alemania',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/de.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-06-15',
        hora: '12:00',
        estadio: 'Gillette Stadium',
        ciudad: 'Boston',
        status: 'upcoming'
    },
    {
        id: 9,
        fase: 'Grupo D',
        equipo1: 'Inglaterra',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/gb-eng.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-06-15',
        hora: '15:00',
        estadio: 'Lincoln Financial Field',
        ciudad: 'Filadelfia',
        status: 'upcoming'
    },
    // OCTAVOS DE FINAL
    {
        id: 50,
        fase: 'Octavos de Final',
        equipo1: '1° Grupo A',
        equipo2: '2° Grupo B',
        bandera1: 'https://flagcdn.com/w80/un.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-07-04',
        hora: '15:00',
        estadio: 'SoFi Stadium',
        ciudad: 'Los Ángeles',
        status: 'upcoming'
    },
    {
        id: 51,
        fase: 'Octavos de Final',
        equipo1: '1° Grupo B',
        equipo2: '2° Grupo A',
        bandera1: 'https://flagcdn.com/w80/un.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-07-04',
        hora: '19:00',
        estadio: 'MetLife Stadium',
        ciudad: 'Nueva York',
        status: 'upcoming'
    },
    // CUARTOS DE FINAL
    {
        id: 58,
        fase: 'Cuartos de Final',
        equipo1: 'TBD',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/un.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-07-09',
        hora: '16:00',
        estadio: 'Estadio Azteca',
        ciudad: 'Ciudad de México',
        status: 'upcoming'
    },
    // SEMIFINALES
    {
        id: 62,
        fase: 'Semifinal',
        equipo1: 'TBD',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/un.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-07-14',
        hora: '19:00',
        estadio: 'AT&T Stadium',
        ciudad: 'Dallas',
        status: 'upcoming'
    },
    {
        id: 63,
        fase: 'Semifinal',
        equipo1: 'TBD',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/un.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-07-15',
        hora: '19:00',
        estadio: 'Mercedes-Benz Stadium',
        ciudad: 'Atlanta',
        status: 'upcoming'
    },
    // FINAL
    {
        id: 64,
        fase: 'Final',
        equipo1: 'TBD',
        equipo2: 'TBD',
        bandera1: 'https://flagcdn.com/w80/un.png',
        bandera2: 'https://flagcdn.com/w80/un.png',
        fecha: '2026-07-19',
        hora: '15:00',
        estadio: 'MetLife Stadium',
        ciudad: 'Nueva York',
        status: 'upcoming'
    }
];

// Estado de la aplicación
let appState = {
    favoritos: JSON.parse(localStorage.getItem('favoritos')) || [],
    predicciones: JSON.parse(localStorage.getItem('predicciones')) || {},
    notificaciones: JSON.parse(localStorage.getItem('notificaciones')) || {
        favoritos: false,
        argentina: false,
        eliminatorias: false
    },
    currentTab: 'partidos',
    filters: {
        fase: 'all',
        fecha: 'all'
    }
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initFilters();
    initModals();
    initNotifications();
    renderPartidos();
    updateStats();
});

// Tabs
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(`tab-${tabName}`).classList.add('active');
    
    appState.currentTab = tabName;
    
    // Render content based on tab
    switch(tabName) {
        case 'partidos':
            renderPartidos();
            break;
        case 'favoritos':
            renderFavoritos();
            break;
        case 'predicciones':
            renderPredicciones();
            break;
        case 'resultados':
            renderResultados();
            break;
    }
}

// Filters
function initFilters() {
    document.getElementById('fase-filter').addEventListener('change', (e) => {
        appState.filters.fase = e.target.value;
        renderPartidos();
    });
    
    document.getElementById('fecha-filter').addEventListener('change', (e) => {
        appState.filters.fecha = e.target.value;
        renderPartidos();
    });
}

// Render Partidos
function renderPartidos() {
    const container = document.getElementById('partidos-list');
    const filtered = filterPartidos(partidosData);
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">⚽</span>
                <p>No hay partidos para mostrar</p>
                <small>Intentá cambiar los filtros</small>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(partido => createPartidoCard(partido)).join('');
    attachPartidoEvents();
}

function filterPartidos(partidos) {
    return partidos.filter(p => {
        // Filter by fase
        if (appState.filters.fase !== 'all') {
            const faseMap = {
                'grupos': p.fase.includes('Grupo'),
                'octavos': p.fase.includes('Octavos'),
                'cuartos': p.fase.includes('Cuartos'),
                'semi': p.fase.includes('Semifinal'),
                'final': p.fase === 'Final'
            };
            if (!faseMap[appState.filters.fase]) return false;
        }
        
        // Filter by fecha
        if (appState.filters.fecha !== 'all') {
            const matchDate = new Date(p.fecha);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            const weekEnd = new Date(today);
            weekEnd.setDate(weekEnd.getDate() + 7);
            
            switch(appState.filters.fecha) {
                case 'hoy':
                    if (matchDate.toDateString() !== today.toDateString()) return false;
                    break;
                case 'manana':
                    if (matchDate.toDateString() !== tomorrow.toDateString()) return false;
                    break;
                case 'semana':
                    if (matchDate < today || matchDate > weekEnd) return false;
                    break;
            }
        }
        
        return true;
    });
}

function createPartidoCard(partido) {
    const isFavorito = appState.favoritos.includes(partido.id);
    const prediccion = appState.predicciones[partido.id];
    const fechaFormateada = formatearFecha(partido.fecha);
    
    return `
        <div class="partido-card" data-id="${partido.id}">
            <div class="partido-header">
                <div class="partido-info">
                    <span class="partido-fase">${partido.fase}</span>
                    <span class="partido-fecha">📅 ${fechaFormateada} - ${partido.hora} hs</span>
                </div>
                <div class="partido-actions">
                    <button class="action-btn fav-btn ${isFavorito ? 'active' : ''}" title="Favorito">
                        ${isFavorito ? '⭐' : '☆'}
                    </button>
                    <button class="action-btn pred-btn ${prediccion ? 'active' : ''}" title="Predecir">
                        🎯
                    </button>
                </div>
            </div>
            <div class="partido-teams">
                <div class="team">
                    <img class="flag" src="${partido.bandera1}" alt="${partido.equipo1}">
                    <span class="team-name">${partido.equipo1}</span>
                    ${partido.score1 !== undefined ? `<span class="score">${partido.score1}</span>` : ''}
                </div>
                <div class="vs">VS</div>
                <div class="team">
                    <img class="flag" src="${partido.bandera2}" alt="${partido.equipo2}">
                    <span class="team-name">${partido.equipo2}</span>
                    ${partido.score2 !== undefined ? `<span class="score">${partido.score2}</span>` : ''}
                </div>
            </div>
            ${prediccion ? `
                <div class="partido-location" style="border-top: 2px solid #ffd700; padding-top: 1rem; margin-top: 1rem;">
                    <span style="color: #003087; font-weight: 600;">Tu predicción: ${prediccion.score1} - ${prediccion.score2}</span>
                </div>
            ` : ''}
            <div class="partido-location">
                <span class="stadium">🏟️ ${partido.estadio}, ${partido.ciudad}</span>
                <span class="partido-status status-${partido.status}">
                    ${partido.status === 'upcoming' ? 'Próximamente' : partido.status === 'live' ? '🔴 En Vivo' : 'Finalizado'}
                </span>
            </div>
        </div>
    `;
}

function attachPartidoEvents() {
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = e.target.closest('.partido-card');
            const id = parseInt(card.dataset.id);
            toggleFavorito(id);
        });
    });
    
    document.querySelectorAll('.pred-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = e.target.closest('.partido-card');
            const id = parseInt(card.dataset.id);
            openPredictionModal(id);
        });
    });
}

// Favoritos
function toggleFavorito(id) {
    const index = appState.favoritos.indexOf(id);
    if (index > -1) {
        appState.favoritos.splice(index, 1);
    } else {
        appState.favoritos.push(id);
    }
    localStorage.setItem('favoritos', JSON.stringify(appState.favoritos));
    
    // Re-render current view
    if (appState.currentTab === 'favoritos') {
        renderFavoritos();
    } else {
        renderPartidos();
    }
}

function renderFavoritos() {
    const container = document.getElementById('favoritos-list');
    const favPartidos = partidosData.filter(p => appState.favoritos.includes(p.id));
    
    if (favPartidos.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">⭐</span>
                <p>No tenés partidos favoritos</p>
                <small>Tocá la estrella en cualquier partido para agregarlo</small>
            </div>
        `;
        return;
    }
    
    container.innerHTML = favPartidos.map(p => createPartidoCard(p)).join('');
    attachPartidoEvents();
}

// Predicciones
function openPredictionModal(id) {
    const partido = partidosData.find(p => p.id === id);
    if (!partido) return;
    
    const modal = document.getElementById('prediction-modal');
    const prediccion = appState.predicciones[id] || { score1: 0, score2: 0 };
    
    document.getElementById('pred-team1').textContent = partido.equipo1;
    document.getElementById('pred-team2').textContent = partido.equipo2;
    document.getElementById('pred-flag1').src = partido.bandera1;
    document.getElementById('pred-flag2').src = partido.bandera2;
    document.getElementById('pred-score1').value = prediccion.score1;
    document.getElementById('pred-score2').value = prediccion.score2;
    
    modal.classList.add('active');
    
    // Save prediction
    document.getElementById('save-prediction').onclick = () => {
        const score1 = parseInt(document.getElementById('pred-score1').value);
        const score2 = parseInt(document.getElementById('pred-score2').value);
        
        appState.predicciones[id] = { score1, score2 };
        localStorage.setItem('predicciones', JSON.stringify(appState.predicciones));
        
        modal.classList.remove('active');
        updateStats();
        
        if (appState.currentTab === 'predicciones') {
            renderPredicciones();
        } else {
            renderPartidos();
        }
    };
}

function renderPredicciones() {
    const container = document.getElementById('predicciones-list');
    const predPartidos = partidosData.filter(p => appState.predicciones[p.id]);
    
    if (predPartidos.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🎯</span>
                <p>No hiciste predicciones todavía</p>
                <small>Predecí el resultado de los partidos antes que empiecen</small>
            </div>
        `;
        return;
    }
    
    container.innerHTML = predPartidos.map(p => createPartidoCard(p)).join('');
    attachPartidoEvents();
}

function updateStats() {
    const totalPred = Object.keys(appState.predicciones).length;
    let aciertos = 0;
    
    // Calcular aciertos (solo para partidos finalizados)
    Object.keys(appState.predicciones).forEach(id => {
        const partido = partidosData.find(p => p.id === parseInt(id));
        const pred = appState.predicciones[id];
        
        if (partido && partido.status === 'finished' && partido.score1 !== undefined) {
            if (pred.score1 === partido.score1 && pred.score2 === partido.score2) {
                aciertos++;
            }
        }
    });
    
    const porcentaje = totalPred > 0 ? Math.round((aciertos / totalPred) * 100) : 0;
    
    document.getElementById('total-predicciones').textContent = totalPred;
    document.getElementById('aciertos').textContent = aciertos;
    document.getElementById('porcentaje').textContent = porcentaje + '%';
}

// Resultados
function renderResultados() {
    const container = document.getElementById('resultados-list');
    const finalizados = partidosData.filter(p => p.status === 'finished');
    
    if (finalizados.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🏆</span>
                <p>Todavía no hay resultados</p>
                <small>Los partidos finalizados aparecerán acá</small>
            </div>
        `;
        return;
    }
    
    container.innerHTML = finalizados.map(p => createPartidoCard(p)).join('');
    attachPartidoEvents();
}

// Modals
function initModals() {
    // Close buttons
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').classList.remove('active');
        });
    });
    
    // Cancel prediction
    document.getElementById('cancel-prediction').addEventListener('click', () => {
        document.getElementById('prediction-modal').classList.remove('active');
    });
    
    // Click outside to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Notification settings
    document.getElementById('notif-btn').addEventListener('click', () => {
        openNotificationModal();
    });
    
    document.getElementById('save-notif').addEventListener('click', () => {
        saveNotificationSettings();
    });
}

// Notifications
function initNotifications() {
    // Request permission if needed
    if ('Notification' in window && Notification.permission === 'default') {
        // Will request when user enables notifications
    }
}

function openNotificationModal() {
    const modal = document.getElementById('notif-modal');
    
    // Load current settings
    document.getElementById('notif-favoritos').checked = appState.notificaciones.favoritos;
    document.getElementById('notif-argentina').checked = appState.notificaciones.argentina;
    document.getElementById('notif-eliminatorias').checked = appState.notificaciones.eliminatorias;
    
    modal.classList.add('active');
}

function saveNotificationSettings() {
    appState.notificaciones = {
        favoritos: document.getElementById('notif-favoritos').checked,
        argentina: document.getElementById('notif-argentina').checked,
        eliminatorias: document.getElementById('notif-eliminatorias').checked
    };
    
    localStorage.setItem('notificaciones', JSON.stringify(appState.notificaciones));
    
    // Request permission if any notification is enabled
    if (Object.values(appState.notificaciones).some(v => v)) {
        if ('Notification' in window && Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }
    
    document.getElementById('notif-modal').classList.remove('active');
    
    // Schedule notifications
    scheduleNotifications();
}

function scheduleNotifications() {
    // This would integrate with service worker for actual notifications
    // For now, just log
    console.log('Notificaciones configuradas:', appState.notificaciones);
}

// Utilities
function formatearFecha(fechaStr) {
    const fecha = new Date(fechaStr);
    const opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return fecha.toLocaleDateString('es-AR', opciones);
}

// PWA Install
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Could show custom install button here
});

window.addEventListener('appinstalled', () => {
    console.log('PWA instalada exitosamente');
    deferredPrompt = null;
});
