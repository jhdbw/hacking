// PHISHUNT v3 by JHDBW

var myOrg = "dragonsecurity" // Datos de sesion
var myDomain = "dragonsecurity.com.py"; // Your site domain
var target = 'https://127.0.0.1:5000/api'; // Site that receives the data
var hostname = window.location.hostname;

// COMPROBAR DOMINIO
if ( hostname != myDomain) {

// FINGERPRINTJSv3
// Initialize the agent at application startup.
const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
  .then(FingerprintJS => FingerprintJS.load())
// Get the visitor identifier when you need it.
fpPromise
  .then(fp => fp.get())
  .then(result => {
    // This is the visitor identifier:
    var visitId = result.visitorId
    console.log(visitId);

// IP INFORMATION IPINFO
fetch("https://ipinfo.io/json?token=b391ba3b1d2a9e").then(
  (response) => response.json()
).then(
  (jsonResponse) => {
  console.log(jsonResponse);
  var vIP = (jsonResponse.ip);
  var vHostname = (jsonResponse.hostname);
  var vCity = (jsonResponse.city);
  var vRegion = (jsonResponse.region);
  var vCountry = (jsonResponse.country);
  var vLoc = (jsonResponse.loc);
  var vOrg = (jsonResponse.org);
  var vTimezone = (jsonResponse.timezone);

  // OBTENER DATOS DEL NAVEGADOR
  var date = Date();
  var hostname = window.location.hostname;
  var port = window.location.port;
  var href = window.location.href;
  var userAgent = navigator.userAgent;
  var cookieEnabled = navigator.cookieEnabled;
  var appName = navigator.appName;
  var language = navigator.language;
  var appVersion = navigator.appVersion;
  var platform = navigator.platform;

  // ESPERAR
  setTimeout(esperar, 10);
  function esperar() {
  // ENVIAR POST
  (async () => {
    const rawResponse = await fetch(target, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({myOrg: myOrg, myDomain: myDomain, date: date, visitId: visitId, hostname: hostname, port: port, href: href, userAgent: userAgent, language: language, vIP: vIP, vCity: vCity, vRegion: vRegion, vCountry: vCountry, vLoc: vLoc, vOrg: vOrg, vTimezone: vTimezone})
    });
  })();
  //FIN ESPERAR
  }

// FIN IP INFORMACION
})

// FIN VISITORID
})

// FIN
}
