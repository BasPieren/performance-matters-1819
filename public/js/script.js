if ('serviceWorker' in navigator) {
window.addEventListener('load', function() {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope)

    return registration.update()
  }, function(err) {
    console.log('ServiceWorker registration failed: ', err)
  })
})
}
