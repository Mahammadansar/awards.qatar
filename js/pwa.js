// Progressive Web App functionality for AwardsQatar

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration.scope);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New service worker available
              showUpdateNotification();
            }
          });
        });
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// PWA Install Prompt
let deferredPrompt;
const installButton = document.getElementById('installButton');

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  // Show install button
  showInstallButton();
});

// Show install button
function showInstallButton() {
  const installBtn = document.getElementById('installButton');
  if (installBtn) {
    installBtn.style.display = 'block';
    installBtn.addEventListener('click', installApp);
  } else {
    // Create install button if it doesn't exist
    createInstallButton();
  }
}

// Create install button
function createInstallButton() {
  const installBtn = document.createElement('button');
  installBtn.id = 'installButton';
  installBtn.className = 'pwa-install-btn';
  installBtn.innerHTML = '<i class="fas fa-download"></i> Install App';
  installBtn.style.display = 'none';
  document.body.appendChild(installBtn);
  installBtn.addEventListener('click', installApp);
}

// Install app
async function installApp() {
  if (!deferredPrompt) {
    return;
  }

  // Show the install prompt
  deferredPrompt.prompt();
  
  // Wait for the user to respond
  const { outcome } = await deferredPrompt.userChoice;
  
  if (outcome === 'accepted') {
    console.log('User accepted the install prompt');
    hideInstallButton();
  } else {
    console.log('User dismissed the install prompt');
  }
  
  // Clear the deferredPrompt
  deferredPrompt = null;
}

// Hide install button
function hideInstallButton() {
  const installBtn = document.getElementById('installButton');
  if (installBtn) {
    installBtn.style.display = 'none';
  }
}

// Check if app is already installed
window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
  hideInstallButton();
  showNotification('App installed successfully!', 'success');
});

// Offline/Online detection
window.addEventListener('online', () => {
  showNotification('You are back online!', 'success');
  syncOfflineData();
});

window.addEventListener('offline', () => {
  showNotification('You are offline. Some features may be limited.', 'info');
});

// Show notification
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotification = document.querySelector('.pwa-notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement('div');
  notification.className = `pwa-notification pwa-notification-${type}`;
  notification.innerHTML = `
    <div class="pwa-notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
      <button class="pwa-notification-close">&times;</button>
    </div>
  `;

  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);

  // Auto hide after 5 seconds
  setTimeout(() => {
    hideNotification(notification);
  }, 5000);

  // Close button
  notification.querySelector('.pwa-notification-close').addEventListener('click', () => {
    hideNotification(notification);
  });
}

// Hide notification
function hideNotification(notification) {
  notification.classList.remove('show');
  setTimeout(() => {
    notification.remove();
  }, 300);
}

// Show update notification
function showUpdateNotification() {
  const updateNotification = document.createElement('div');
  updateNotification.className = 'pwa-update-notification';
  updateNotification.innerHTML = `
    <div class="pwa-update-content">
      <i class="fas fa-sync-alt"></i>
      <span>New version available!</span>
      <button class="pwa-update-btn" onclick="window.location.reload()">Update</button>
      <button class="pwa-update-close">&times;</button>
    </div>
  `;

  document.body.appendChild(updateNotification);

  setTimeout(() => {
    updateNotification.classList.add('show');
  }, 100);

  updateNotification.querySelector('.pwa-update-close').addEventListener('click', () => {
    updateNotification.classList.remove('show');
    setTimeout(() => {
      updateNotification.remove();
    }, 300);
  });
}

// Sync offline data when back online
async function syncOfflineData() {
  try {
    // Sync cart
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.length > 0) {
      // Here you would sync with your backend API
      console.log('Syncing cart data...', cart);
    }

    // Sync user actions
    const offlineActions = JSON.parse(localStorage.getItem('offlineActions') || '[]');
    if (offlineActions.length > 0) {
      // Process offline actions
      console.log('Processing offline actions...', offlineActions);
      localStorage.removeItem('offlineActions');
    }
  } catch (error) {
    console.error('Error syncing offline data:', error);
  }
}

// Initialize IndexedDB for offline storage
function initIndexedDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('AwardsQatarDB', 1);

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Create cart store
      if (!db.objectStoreNames.contains('cart')) {
        const cartStore = db.createObjectStore('cart', { keyPath: 'id' });
        cartStore.createIndex('productId', 'productId', { unique: false });
      }

      // Create products store for offline access
      if (!db.objectStoreNames.contains('products')) {
        const productsStore = db.createObjectStore('products', { keyPath: 'id' });
        productsStore.createIndex('category', 'category', { unique: false });
      }
    };
  });
}

// Initialize PWA features
document.addEventListener('DOMContentLoaded', () => {
  // Initialize IndexedDB
  initIndexedDB()
    .then(() => {
      console.log('IndexedDB initialized');
    })
    .catch((error) => {
      console.error('IndexedDB initialization failed:', error);
    });

  // Check if app is running in standalone mode
  if (window.matchMedia('(display-mode: standalone)').matches) {
    document.body.classList.add('standalone-mode');
  }

  // Add touch event listeners for better mobile experience
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
  }
});

// Share API support
if (navigator.share) {
  // Add share buttons to product pages
  const shareButtons = document.querySelectorAll('.share-button');
  shareButtons.forEach(button => {
    button.addEventListener('click', async () => {
      try {
        await navigator.share({
          title: document.title,
          text: 'Check out this product on AwardsQatar',
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    });
  });
}

// Badge API for notifications (if supported)
if ('setAppBadge' in navigator) {
  function updateBadge(count) {
    if (count > 0) {
      navigator.setAppBadge(count);
    } else {
      navigator.clearAppBadge();
    }
  }

  // Update badge based on cart count
  function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    updateBadge(totalItems);
  }

  // Listen for cart changes
  window.addEventListener('storage', (e) => {
    if (e.key === 'cart') {
      updateCartBadge();
    }
  });

  // Initial badge update
  updateCartBadge();
}

