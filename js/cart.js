function renderCart(){
 const box=document.querySelector("#cartItems"), c=cart();
 if(!c.length){box.innerHTML='<div class="empty">Your cart is empty.<br><br><a class="btn btn-gold" href="products.html">Continue Shopping</a></div>';updateSummary(0);return}
 box.innerHTML=c.map(item=>{
  const p=getProduct(item.id);
  return `<div class="cart-item">
   <img src="${p.image}" alt="${p.name}">
   <div><h3>${p.name}</h3><small>${money(p.price)} × ${item.qty}</small><br><button class="remove" onclick="removeFromCart(${p.id})">Remove</button></div>
   <strong>${money(p.price*item.qty)}</strong>
  </div>`
 }).join("");
 updateSummary(c.reduce((s,x)=>s+getProduct(x.id).price*x.qty,0));
}
function updateSummary(sub){
 document.querySelector("#subtotal").textContent=money(sub);
 document.querySelector("#total").textContent=money(sub);
}
document.addEventListener("DOMContentLoaded",renderCart);
