function validateEmail(e) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e);
}
function sanitizeInput(e) {
  let t = document.createElement("div");
  return (t.textContent = e), t.innerHTML;
}
async function sendEmail(elementToHide) {
  let status = 200;
  let e = document.getElementById("contactEmail"),
    t = document.getElementById("emailResponse"),
    n = document.getElementById("subscribeBtn"),
    a = e.value;

  if (!validateEmail((a = sanitizeInput(a)))) {
    (t.textContent = "Please enter a valid email address."),
      t.classList.remove("hidden", "text-green-600"),
      t.classList.add("text-red-600");
    return;
  }
  (n.textContent = "Subscribing..."), (n.disabled = !0);
  try {
    let i = await fetch("https://allwyse-api-prod.onrender.com/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: a })
    });

    status = i.status;
    if (!i.ok) throw Error("Failed to send email");
    (t.textContent = "Email sent successfully!"),
      t.classList.remove("hidden", "text-red-600"),
      t.classList.add("text-green-600"),
      (e.value = "");

    setTimeout(() => {
      if (elementToHide) {
        document.getElementById(elementToHide).classList.add("hidden");
      }
    }, 2000);
  } catch (s) {
    console.log("Error:", s.message),
      (t.textContent =
        status === 400
          ? "Email already subscribed"
          : "There was an error sending the email. Please try again."),
      t.classList.remove("hidden", "text-green-600"),
      t.classList.add("text-red-600");
  } finally {
    (n.textContent = "Subscribe"), (n.disabled = !1);
  }
}
