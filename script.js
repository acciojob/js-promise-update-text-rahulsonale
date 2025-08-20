//your JS code here. If required.
function SayHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 1000);
  });
}

SayHello().then((message) => {
  document.querySelector("p").textContent = message;
});
