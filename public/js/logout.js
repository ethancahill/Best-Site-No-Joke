const logoutBtn = document.querySelector("#logout");
const logoutBtn2 = document.querySelector("#logout2");


const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert("Failed to log out.");
  }
};


if (logoutBtn) {
  logoutBtn.addEventListener("click", logout);
};

if (logoutBtn2) {
  logoutBtn2.addEventListener("click", logout);
};
