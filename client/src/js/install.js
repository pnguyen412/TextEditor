const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Stores the triggered events
  window.deferredPrompt = event;

  // removes hidden class from button
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
    // prompt is shown when clicked
    promptEvent.prompt();
  
    // button to install can only be used once
    window.deferredPrompt = null;
    butInstall.classList.toggle("hidden", true);
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App Installed!');
  // removes prompt when installed
  window.deferredPrompt = null;
});