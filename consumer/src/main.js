import App from "./App.svelte";

//membaca hostpage dengan nama module Header
window.header.get('./Header').then(data=>{
  const Header = data().default;
  new Header({
    target: document.getElementById("header"), //id header berada di index.html
  });
})
// this is for button 

console.log(window.header.get('./Button'))
window.header.get('./Button').then(data=>{
  const Header = data().default;
  new Header({
    target: document.getElementById("button"), //id header berada di index.html
  });
})

const app = new App({
  target: document.getElementById("app"),
});

window.app = app;

export default app;
