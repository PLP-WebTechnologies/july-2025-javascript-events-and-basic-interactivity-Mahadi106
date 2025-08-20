// Bascule mode clair 
const boutonTheme = document.getElementById("themeToggle");

boutonTheme.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// FAQ pliable 
document.querySelectorAll(".question").forEach(q => {
  q.addEventListener("click", function() {
    const reponse = this.nextElementSibling;
    reponse.style.display = reponse.style.display === "none" ? "block" : "none";
  });
});

// Bouton interactif 
const btnMessage = document.getElementById("btnMessage");
const message = document.getElementById("message");

btnMessage.addEventListener("click", function() {
  message.textContent = "Vous avez cliqué sur le bouton ! 🎉";
});

// Validation de formulaire
const formulaire = document.getElementById("monFormulaire");
const erreur = document.getElementById("erreur");

formulaire.addEventListener("submit", function(event) {
  let messages = [];

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const mdp = document.getElementById("mdp").value.trim();

  // Vérification des champs
  if (nom === "") messages.push("Le nom est requis");
  if (email === "") messages.push("L'email est requis");
  if (!email.includes("@")) messages.push("Email invalide");
  if (mdp.length < 6) messages.push("Le mot de passe doit faire au moins 6 caractères");

  if (messages.length > 0) {
    event.preventDefault(); // Empêche la soumission
    erreur.textContent = messages.join(" | ");
    erreur.style.color = "red";
  } else {
    erreur.textContent = "Formulaire envoyé avec succès ✅";
    erreur.style.color = "green";
  }
});
