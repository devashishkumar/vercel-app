const username = "devashishkumar";

// Initialize theme from localStorage
const savedTheme = localStorage.getItem("theme") || "dark";
if (savedTheme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
}

// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Mobile menu toggle
const btn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
// Dynamic Year
document.getElementById("year").innerHTML =
  `${new Date().getFullYear()}`;

// Fetch GitHub Profile
async function fetchProfile() {
  const res = await fetch(`https://api.github.com/users/${username}`);
  return res.json();
}

// Fetch Top Repos
async function fetchRepos() {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,
  );
  return res.json();
}

// Display Profile
function displayProfile(user) {
  const profileDiv = document.getElementById("profile");
  profileDiv.innerHTML = `
    <div class="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 transform transition hover:scale-105">
      <img class="w-32 h-32 rounded-full mx-auto border-4 border-indigo-500" src="${user.avatar_url}" alt="Avatar">
      <h1 class="text-3xl font-bold mt-4">${user.name}</h1>
      <p class="text-indigo-500 mt-2">${user.login}</p>
      <p class="text-gray-600 dark:text-gray-300 mt-2">${user.bio || ""}</p>
      <div class="flex justify-center gap-6 mt-4 text-sm font-medium">
        <span>⭐ ${user.followers} Followers</span>
        <span>🔁 ${user.following} Following</span>
        <span>📦 ${user.public_repos} Repos</span>
      </div>
      <a href="${user.html_url}" target="_blank" class="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition">View GitHub</a>
    </div>
  `;
}

// Display Repos
function displayRepos(repos) {
  const container = document.getElementById("repos");
  repos.forEach((repo) => {
    if (!["devashishkumar", "vercel-app"].includes(repo.name)) {
      container.innerHTML += `
      <div class="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition">
        <a href="${repo.html_url}" target="_blank" class="text-lg font-semibold text-indigo-600 hover:underline">${repo.name}</a>
        <p class="text-gray-600 dark:text-gray-300 mt-2">${repo.description || ""}</p>
        <div class="mt-3 text-sm text-gray-700 dark:text-gray-400 flex justify-between items-center">
          <span>${repo.language ? `🛠 ${repo.language}` : ""}</span>
          <span>⭐ ${repo.stargazers_count}</span>
        </div>
      </div>
    `;
    }
  });
}

// Initialize
async function init() {
  const profile = await fetchProfile();
  displayProfile(profile);

  const repos = await fetchRepos();
  displayRepos(repos);
}

init();
