let filtered=[...PRODUCTS];
function renderShop(){
 const grid=document.querySelector("#shopGrid"), count=document.querySelector("#resultCount");
 if(grid)grid.innerHTML=filtered.map(productCard).join("");
 if(count)count.textContent=`${filtered.length} products`;
}
function applyFilters(){
 const cat=document.querySelector(".category-list button.active")?.dataset.cat||"All";
 const max=Number(document.querySelector("#priceRange")?.value||15000);
 const sort=document.querySelector("#sort")?.value||"default";
 filtered=PRODUCTS.filter(p=>(cat==="All"||p.category===cat)&&p.price<=max);
 if(sort==="low")filtered.sort((a,b)=>a.price-b.price);
 if(sort==="high")filtered.sort((a,b)=>b.price-a.price);
 if(sort==="rating")filtered.sort((a,b)=>b.rating-a.rating);
 renderShop();
}
document.addEventListener("DOMContentLoaded",()=>{
 document.querySelectorAll(".category-list button").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".category-list button").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");applyFilters();
 });
 document.querySelector("#priceRange")?.addEventListener("input",e=>{
  document.querySelector("#maxPrice").textContent=money(e.target.value);applyFilters()
 });
 document.querySelector("#sort")?.addEventListener("change",applyFilters);
 renderShop();
});
