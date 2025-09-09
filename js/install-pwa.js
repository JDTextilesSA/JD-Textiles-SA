let deferredPrompt;
const btn = document.createElement('button');
btn.id = 'install-pwa-btn';
btn.textContent = 'Instalar JD Textiles';
btn.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:10px 14px;border-radius:8px;z-index:9999;background:#000;color:#fff;border:none;';

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.body.appendChild(btn);
});

btn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
        console.log('Usuario aceptó instalar');
    } else {
        console.log('Usuario rechazó instalar');
    }
    deferredPrompt = null;
    btn.remove();
});

// Registra service worker (si el navegador lo soporta)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').catch((err) => {
        console.warn('SW registro fallido:', err);
    });
}
