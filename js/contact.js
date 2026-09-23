document.addEventListener("DOMContentLoaded",()=>{
 document.querySelector("#contactForm")?.addEventListener("submit",e=>{
  e.preventDefault(); e.target.reset(); toast("Thanks! Your enquiry has been received.");
 });
});
