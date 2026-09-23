document.addEventListener("DOMContentLoaded",()=>{

 const menu=document.querySelector(".menu-btn"),
        nav=document.querySelector(".nav-links");
          menu?.addEventListener("click",()=>nav.classList.toggle("open"));

 const page=location.pathname.split("/").pop()||"index.html";

      document.querySelectorAll(".nav-links a").forEach(a=>{

            if(a.getAttribute("href")===page)a.classList.add("active");
        
          });
      document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
        renderFeatured();
          });
