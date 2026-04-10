# ⚽ Mundial FIFA 2026 - PWA

Aplicación web progresiva (PWA) para seguir el Mundial FIFA 2026 con calendario completo, predicciones, favoritos y notificaciones.

## 🚀 Características

- ✅ **Calendario completo** de todos los partidos del Mundial 2026
- ⭐ **Favoritos**: Marcá tus partidos preferidos
- 🎯 **Predicciones**: Predecí los resultados y seguí tu precisión
- 🔔 **Notificaciones**: Alertas para tus partidos favoritos
- 📱 **PWA**: Instalable como app nativa en móvil y desktop
- 🌐 **Offline**: Funciona sin conexión gracias al Service Worker
- 🎨 **Diseño FIFA**: Colores oficiales azul y blanco

## 📦 Instalación en GitHub Pages

### Opción 1: Subir archivos directamente

1. Creá un nuevo repositorio llamado `mundial2026` en GitHub
2. Subí todos los archivos de este proyecto al repositorio
3. Andá a **Settings** → **Pages**
4. En **Source**, seleccioná **Deploy from a branch**
5. En **Branch**, seleccioná `main` y carpeta `/` (root)
6. Hacé click en **Save**
7. Esperá unos minutos y tu app estará disponible en:
   ```
   https://tu-usuario.github.io/mundial2026/
   ```

### Opción 2: Usando Git desde la terminal

```bash
# Inicializar repositorio
git init
git add .
git commit -m "Initial commit - Mundial 2026 PWA"

# Conectar con GitHub
git remote add origin https://github.com/tu-usuario/mundial2026.git
git branch -M main
git push -u origin main
```

Luego seguí los pasos 3-7 de la Opción 1.

## 📁 Estructura del proyecto

```
mundial2026/
├── index.html           # Página principal
├── styles.css           # Estilos CSS
├── scripts.js           # Lógica de la aplicación
├── service-worker.js    # Service Worker para PWA
├── manifest.json        # Manifest de la PWA
├── icons/               # Íconos de la app
│   ├── icon-192x192.png
│   └── icon-512x512.png
└── README.md           # Este archivo
```

## 🎮 Uso

### Navegación por tabs
- **Partidos**: Ver todos los partidos con filtros por fase y fecha
- **Favoritos**: Acceso rápido a tus partidos marcados
- **Predicciones**: Tus pronósticos y estadísticas de aciertos
- **Resultados**: Partidos finalizados con marcadores

### Marcar favoritos
- Hacé click en la estrella (☆) de cualquier partido

### Hacer predicciones
- Hacé click en el ícono de objetivo (🎯)
- Ingresá tu pronóstico del marcador
- Guardá la predicción

### Configurar notificaciones
- Hacé click en el ícono de campana (🔔) en el header
- Activá las notificaciones que querés recibir:
  - Partidos favoritos (1 hora antes)
  - Partidos de Argentina
  - Octavos, Cuartos, Semis y Final

### Instalar como app
- **Android/Chrome**: Click en el ícono "Instalar" o menú → "Instalar app"
- **iOS/Safari**: Click en "Compartir" → "Agregar a pantalla de inicio"
- **Desktop**: Click en el ícono de instalación en la barra de direcciones

## 🔧 Desarrollo local

Para probar la app localmente:

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: Node.js
npx http-server

# Opción 3: PHP
php -S localhost:8000
```

Luego abrí: `http://localhost:8000`

## 📝 Notas técnicas

- **Service Worker**: Todos los archivos usan rutas relativas (`./`) para funcionar en GitHub Pages
- **Cache**: La app cachea todos los recursos para funcionar offline
- **localStorage**: Los favoritos, predicciones y configuraciones se guardan localmente
- **Banderas**: Usa la API de flagcdn.com para las banderas de países

## 🛠️ Personalización

### Cambiar colores
Editá las variables CSS en `styles.css`:
```css
:root {
    --fifa-blue: #003087;
    --fifa-light-blue: #0066cc;
    --fifa-gold: #ffd700;
}
```

### Agregar más partidos
Editá el array `partidosData` en `scripts.js`

### Modificar íconos
Reemplazá los archivos PNG en la carpeta `/icons/`

## 🐛 Troubleshooting

**La app no carga en GitHub Pages:**
- Verificá que el repositorio sea público
- Asegurate que GitHub Pages esté habilitado en Settings
- Esperá 2-5 minutos después de hacer push

**Las notificaciones no funcionan:**
- Verificá que tengas permisos de notificación en tu navegador
- Las notificaciones no funcionan en modo incógnito/privado

**La app no se instala:**
- Asegurate de estar usando HTTPS (GitHub Pages usa HTTPS automáticamente)
- Verificá que el manifest.json sea válido

## 📄 Licencia

MIT License - Usá, modificá y compartí libremente

## 👨‍💻 Autor

Desarrollado con ⚽ para el Mundial FIFA 2026

---

**¡Disfrutá el Mundial! 🏆**
