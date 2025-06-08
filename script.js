// Initialize Lucide icons
lucide.createIcons();

// Sample donor data
const donors = [
  {
    name: "সাজিদ আহমেদ",
    bloodGroup: "A+",
    location: "মিরপুর",
    phone: "01712345678",
    image: "img/donor1.jpg"
  },
  {
    name: "তানিয়া রহমান",
    bloodGroup: "O-",
    location: "ধানমন্ডি",
    phone: "01876543210",
    image: "img/donor2.jpg"
  },
  {
    name: "মাহমুদুল হাসান",
    bloodGroup: "B+",
    location: "উত্তরা",
    phone: "01987654321",
    image: "img/donor3.jpg"
  },
  {
    name: "রুবিনা ইসলাম",
    bloodGroup: "AB+",
    location: "গুলশান",
    phone: "01611223344",
    image: "img/donor4.jpg"
  },
  {
    name: "মোজাম্মেল হক",
    bloodGroup: "A-",
    location: "মোহাম্মদপুর",
    phone: "01555667788",
    image: "img/donor5.jpg"
  },
  {
    name: "শারমিন জাহান",
    bloodGroup: "O+",
    location: "বনানী",
    phone: "01799887766",
    image: "img/donor6.jpg"
  }
];

// DOM references
const donorContainer = document.querySelector(".donor-cards");
const donorCount = document.getElementById("donor-count");
const bloodTypeFilter = document.getElementById("blood-type-filter");
const locationFilter = document.getElementById("location-filter");
const noDonorsDiv = document.querySelector(".no-donors");

// Function to render donors
function renderDonors(filteredDonors) {
  donorContainer.innerHTML = "";

  if (filteredDonors.length === 0) {
    noDonorsDiv.style.display = "block";
    donorCount.textContent = "0";
    return;
  }

  noDonorsDiv.style.display = "none";
  donorCount.textContent = filteredDonors.length.toString();

  filteredDonors.forEach(donor => {
    const card = document.createElement("div");
    card.classList.add("donor-card");

    card.innerHTML = `
      <div class="donor-image">
        <img src="${donor.image}" alt="${donor.name}">
      </div>
      <div class="donor-info">
        <h3>${donor.name}</h3>
        <p><strong>গ্রুপ:</strong> ${donor.bloodGroup}</p>
        <p><strong>এলাকা:</strong> ${donor.location}</p>
        <p><strong>ফোন:</strong> <a href="tel:${donor.phone}">${donor.phone}</a></p>
      </div>
    `;

    donorContainer.appendChild(card);
  });
}

// Filter donors based on dropdowns
function applyFilters() {
  const selectedBlood = bloodTypeFilter.value;
  const selectedLocation = locationFilter.value;

  const filtered = donors.filter(donor => {
    const bloodMatch = selectedBlood === "all" || donor.bloodGroup === selectedBlood;
    const locationMatch = selectedLocation === "all" || donor.location === selectedLocation;
    return bloodMatch && locationMatch;
  });

  renderDonors(filtered);
}

// Event listeners for filters
bloodTypeFilter.addEventListener("change", applyFilters);
locationFilter.addEventListener("change", applyFilters);

// Initial render
renderDonors(donors);
