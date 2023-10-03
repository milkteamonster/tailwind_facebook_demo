// import $ from 'jquery'
import './index.css'

const loginBtn = document.querySelector("#login")
const window = document.querySelector("#window")
const closeBtn = document.querySelector("#close")

loginBtn.addEventListener("click", ()=>{
  window.classList.remove('opacity-0', 'pointer-events-none')
})

closeBtn.addEventListener("click", ()=>{
  window.classList.add('opacity-0', 'pointer-events-none')
})


function renderList(id) {
  const targetUl = document.getElementById(id);

  let svgColor = "text-primary";
  let textColor = "text-salte-900";

  if (id === "list2") {
    svgColor = "text-white";
    textColor = "text-white"
  }

  const templateLi = `
    <li class="flex items-center mt-6 ${textColor}"">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-4 stroke-current ${svgColor}"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        /></svg
      >item bla bla bla bla
    </li>
  `;

  let htmlStr = "";

  for (let i = 0; i < 4; i++) {
    htmlStr = htmlStr + templateLi;
  }
  
  targetUl.innerHTML = htmlStr;
}

renderList("list1");
renderList("list2");
renderList("list3");



