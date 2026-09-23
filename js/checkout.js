



document.addEventListener("DOMContentLoaded", function () {

    const checkoutForm = document.getElementById("checkoutForm");
    const continueButton = document.getElementById("continuePaymentBtn");

    checkoutForm.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("Checkout form submitted");

        // Disable button while sending
        continueButton.disabled = true;
        continueButton.innerText = "Sending Confirmation...";

        /*
        ========================================
        EMAILJS
        ========================================
        */

        emailjs.sendForm(
            "service_2eavpqu",
            "template_ljayzgw",
            checkoutForm
        )

        .then(function (response) {

            console.log("EMAIL SENT SUCCESSFULLY");
            console.log("Status:", response.status);
            console.log("Message:", response.text);

            alert(
                "Order confirmation email has been sent to " +
                checkoutForm.elements["email"].value
            );

            /*
            ========================================
            GO TO PAYMENT PAGE
            ========================================
            */

            window.location.href = "payment.html";

        })

        .catch(function (error) {

            console.error("EMAILJS ERROR");
            console.error(error);

            alert(
                "The confirmation email could not be sent.\n\n" +
                "Please try again."
            );

            // Enable button again
            continueButton.disabled = false;
            continueButton.innerText = "Continue to Payment →";

        });

    });

});


 function getTotals(){
  const sub=cart().reduce((s,x)=>s+getProduct(x.id).price*x.qty,0);
  return {sub,ship:sub>=5000?0:99,total:sub+(sub? (sub>=5000?0:99):0)};
 }
 document.addEventListener("DOMContentLoaded",()=>{
  const t=getTotals();
  document.querySelector("#checkoutSubtotal").textContent=money(t.sub);
  document.querySelector("#checkoutShipping").textContent=t.ship?money(t.ship):"FREE";
  document.querySelector("#checkoutTotal").textContent=money(t.total);
  document.querySelector("#checkoutForm")?.addEventListener("submit",e=>{
   e.preventDefault();
   if(!cart().length){toast("Your cart is empty");return}
   const data=Object.fromEntries(new FormData(e.target));
   sessionStorage.setItem("smashpro_address",JSON.stringify(data));
   location.href="payment.html";
  });
 });