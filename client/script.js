document.querySelector('.register-btn').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.container').scrollIntoView({
    behavior: 'smooth'
  });
});

document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    year: document.getElementById("year").value,
    branch: document.getElementById("branch").value,
  };

  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    alert(result.message || "Registered successfully!");
    this.reset();
  } catch (err) {
    console.error(err);
    alert(" Something went wrong. Try again later.",err);
  }
});
