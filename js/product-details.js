document.addEventListener("DOMContentLoaded",()=>{
 const id=new URLSearchParams(location.search).get("id")||1,p=getProduct(id);
 if(!p)return;
 document.querySelector("#productName").textContent=p.name;
 document.querySelector("#productPrice").textContent=money(p.price);
 document.querySelector("#productOld").textContent=money(p.old);
 document.querySelector("#productRating").textContent=`★ ${p.rating}  ·  124 reviews`;
 document.querySelector("#productDesc").textContent=p.desc;
 document.querySelector("#productImage").src=p.image;
 document.querySelector("#weight").textContent=p.weight;
 document.querySelector("#balance").textContent=p.balance;
 document.querySelector("#material").textContent=p.material;
 document.querySelectorAll(".thumb img").forEach(i=>i.src=p.image);
 document.querySelector("#addBtn").onclick=()=>addToCart(p.id,Number(document.querySelector("#qty").value||1));
 document.querySelector("#buyBtn").onclick=()=>{addToCart(p.id,Number(document.querySelector("#qty").value||1));location.href="cart.html"};
 document.querySelector("#plus").onclick=()=>document.querySelector("#qty").value=Number(document.querySelector("#qty").value)+1;
 document.querySelector("#minus").onclick=()=>{let x=Number(document.querySelector("#qty").value);if(x>1)document.querySelector("#qty").value=x-1};
});
