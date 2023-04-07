console.log('js connected')
const toggleArea = document.getElementById("toggle");
const toggleBtn = document.getElementById("btn")
const basicPrice = document.getElementById("p1");
const profPrice = document.getElementById("p2");
const masterPrice = document.getElementById("p3");
let f=true;
toggleArea.addEventListener("click", function () {
    if(f==true){
        toggleBtn.style.translate = '-25px'
        basicPrice.innerHTML = `<p class="price-1"> <span class="dollar-sign">&dollar;</span>199.99</p>`;
        profPrice.innerHTML = `  <p class="price-2"> <span class="dollar-sign">&dollar;</span>249.99</p>`;
        masterPrice.innerHTML = `  <p class="price-3"> 
        <span class="dollar-sign">&dollar; </span>339.99</p>`;
        f = false;
    }
    else{
        toggleBtn.style.translate = '0'
        basicPrice.innerHTML = `<p class="price-1"> <span class="dollar-sign">&dollar;</span>19.99</p>`;
        profPrice.innerHTML = `  <p class="price-2"> <span class="dollar-sign">&dollar;</span>24.99</p>`;
        masterPrice.innerHTML = `  <p class="price-3"> 
        <span class="dollar-sign">&dollar;</span>39.99</p>`;
        f = true;
    }
    
  })

