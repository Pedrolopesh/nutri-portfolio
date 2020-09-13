function receivePushNotification(event) {
  console.log("[Service Worker] Push Received.");

  //const { image, tag, url, title, text } = event.data.json();
  const notificationText = event.data.text();
  const title = "Ju Nutri: "

  const options = {
    //data: url,
    //data: "something you want to send within the notification, such an URL to open",
    body: notificationText,
    icon: "./logo.svg",
    vibrate: [200, 100, 200],
    //tag: tag,
    //image: image,
    badge: "https://res.cloudinary.com/everything/image/upload/v1599953231/avhg0x2plum7jtjjk5k0.ico",
    //actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }]
  };
  //call the method showNotification to show the notification
  event.waitUntil(self.registration.showNotification(title, options));
}
self.addEventListener("push", receivePushNotification);
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});