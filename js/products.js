const PRODUCTS = [
 {id:1,name:"Yonex Astrox 100ZZ",category:"Rackets",price:12999,old:14999,rating:4.8,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBehxZbeVCAP1n0259UIKUCaSfg0G-Kxvkjmlx9jK9ai3YqrtPaFobk4b&s=10",desc:"Premium head-heavy racket built for advanced attacking players.",weight:"4U (80-84g)",balance:"Head Heavy",material:"NAMD Graphite"},
 {id:2,name:"Li-Ning 3D Calibar 900",category:"Rackets",price:10999,old:12999,rating:4.7,image:"https://www.sportsuncle.com/image/catalog/images/lining/rackets/49756127_10156983786791118_480846241899479040_n.jpg",desc:"Power-focused racket with a responsive frame and fast handling.",weight:"3U (85-89g)",balance:"Head Heavy",material:"Carbon Fiber"},
 {id:3,name:"Victor Brave Sword 12",category:"Rackets",price:8999,old:9999,rating:4.6,image:"https://jzonebadminton.com/cdn/shop/files/95018_0_20230505134312.jpg?v=1715126292&width=1445",desc:"A versatile racket designed for speed, control and precision.",weight:"4U (80-84g)",balance:"Even",material:"High Resilience Graphite"},
 {id:4,name:"Yonex Badminton Shoes",category:"Shoes",price:4499,old:4999,rating:4.7,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuDZpSFQM_ARiC9ppmvaP25hsdaX0FMs2v8_EbSBHHg&s=10",desc:"Court shoes with stable grip, cushioning and lateral support.",weight:"Lightweight",balance:"Court",material:"Synthetic Mesh"},
 {id:5,name:"Premium Shuttlecock Tube",category:"Shuttlecocks",price:799,old:899,rating:4.8,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDNE5SrhDUkRVRK--UXCZoID5GHcHqPFcPf9tk5Md1Q&s",desc:"Durable feather shuttlecocks for consistent flight and practice.",weight:"Standard",balance:"Stable Flight",material:"Goose Feather"},
 {id:6,name:"Yonex Kit Bag",category:"Kit Bags",price:1999,old:2499,rating:4.6,image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbEAb6FOGXXHabwlXx8CO_IvHEG_S0WCaqjp0iKjNc2ZaZOHFsiCIMDIIgh8VyEO8WNfrMv9SJF2AKERMORKbI9_S60rIkwo0uo4JzZ-91s7p2JyyIr9kwJzTeYpNf9rfNavl_6RdV&usqp=CAc",desc:"Spacious badminton kit bag with dedicated racket compartments.",weight:"Medium",balance:"Multiple Pockets",material:"Polyester"},
 {id:7,name:"Premium Grip Pack",category:"Grips",price:499,old:599,rating:4.5,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iNE2Q8pyWpRsJJUmEh6SdGMOpp2nP978NH2ukEG57w&s=10",desc:"Comfortable anti-slip grips for better control and confidence.",weight:"Light",balance:"Tacky",material:"PU"},
 {id:8,name:"SmashPro Wristband Set",category:"Accessories",price:399,old:499,rating:4.4,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIHNAW03kxQY86zuxSpbyTSe-eqmouVBYM7S60CNmsQ&s=10",desc:"Soft performance wristbands designed for long training sessions.",weight:"Light",balance:"Comfort",material:"Cotton Blend"}
];

function money(n){return "₹"+Number(n).toLocaleString("en-IN")}
function getProduct(id){return PRODUCTS.find(p=>p.id===Number(id))}
function cart(){return JSON.parse(localStorage.getItem("smashpro_cart")||"[]")}
function saveCart(c){localStorage.setItem("smashpro_cart",JSON.stringify(c));updateCartCount()}
function addToCart(id,qty=1){
 const c=cart(), item=c.find(x=>x.id===Number(id));
 if(item)item.qty+=qty; else c.push({id:Number(id),qty});
 saveCart(c); toast("Product added to cart");
}
function removeFromCart(id){saveCart(cart().filter(x=>x.id!==Number(id)));renderCart?.()}
function updateCartCount(){
 const n=cart().reduce((s,x)=>s+x.qty,0);
 document.querySelectorAll(".cart-count").forEach(e=>e.textContent=n);
}
function toast(msg){
 let t=document.querySelector(".toast"); if(!t)return;
 t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)
}
function productCard(p){
 return `<article class="card">
  <a href="product-details.html?id=${p.id}" class="card-img"><img src="${p.image}" alt="${p.name}"></a>
  <div class="card-body">
   <h3>${p.name}</h3><div class="rating">★ ${p.rating}</div>
   <div class="price">${money(p.price)} <span class="old">${money(p.old)}</span></div>
   <div class="card-actions">
    <a class="btn btn-outline" href="product-details.html?id=${p.id}">View Details</a>
    <button class="btn btn-gold" onclick="addToCart(${p.id})">Add to Cart</button>
   </div>
  </div>
 </article>`
}
function renderFeatured(target=".featured-products"){
 const el=document.querySelector(target); if(!el)return;
 el.innerHTML=PRODUCTS.slice(0,4).map(productCard).join("")
}
document.addEventListener("DOMContentLoaded",updateCartCount);
