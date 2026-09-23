document.addEventListener("DOMContentLoaded",()=>{
 const t=getTotals();
 document.querySelector("#payTotal").textContent=money(t.total);
 document.querySelector("#paymentForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const method=new FormData(e.target).get("method");
  const order="SP"+Math.floor(10000+Math.random()*89999);
  localStorage.setItem("smashpro_last_order",JSON.stringify({order,total:t.total,method,status:"Order Confirmed"}));
  localStorage.removeItem("smashpro_cart");
  location.href="delivery.html";
 });
});
