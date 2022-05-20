const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;
import OneSignal from 'react-onesignal';

  //instal SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

//listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

self.addEventListener("push", (pushing) => {
  if (pushing.data) {
    pushdata = JSON.parse(pushing.data.text());
    console.log("Service Worker: I received this:", pushdata);
    if (pushdata["title"] != "" && pushdata["message"] != "") {
      const options = { body: pushdata["message"] };
      self.registration.showNotification(pushdata["title"], options);
      console.log("Service Worker: I made a notification for the user");
    } else {
      console.log(
        "Service Worker: I didn't make a notification for the user, not all the info was there :("
      );
    }
  }

  console.log(
    "Service Worker: I received some push data, but because I am still very simple I don't know what to do with it :("
  );
});

//Asking for permission with the Notification API
if(typeof Notification!==typeof undefined){ //First check if the API is available in the browser
	Notification.requestPermission().then(function(result){ 
		//If accepted, then save subscriberinfo in database
		if(result==="granted"){
			console.log("Browser: User accepted receiving notifications, save as subscriber data!");
			navigator.serviceWorker.ready.then(function(serviceworker){ //When the Service Worker is ready, generate the subscription with our Serice Worker's pushManager and save it to our list
				const VAPIDPublicKey=
          "BDHIx9muNlvmXEopgoowGCzye3yo_RCpKpPMZP67-oebNtNfI8mKsNaKaqOGhh1Vkkk4bmaojugr9Z1R9k-DDW0";
           // Fill in your VAPID publicKey here
				const options={applicationServerKey:VAPIDPublicKey,userVisibleOnly:true} //Option userVisibleOnly is neccesary for Chrome
				serviceworker.pushManager.subscribe(options).then((subscription)=>{
          //POST the generated subscription to our saving script (this needs to happen server-side, (client-side) JavaScript can't write files or databases)
					let subscriberFormData=new FormData();
					subscriberFormData.append("json",JSON.stringify(subscription));
					fetch("data/saveSubscription.php",{method:"POST",body:subscriberFormData});
				});
			});
		}
	}).catch((error)=>{
		console.log(error);
	});
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
