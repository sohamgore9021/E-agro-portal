function showUserName() {
    const userName = localStorage.getItem("userName");
    if (userName) {
        document.getElementById("user-name").textContent = "Welcome, " + userName;
        document.getElementById("logout-btn").style.display = "inline-block";
    } else {
        document.getElementById("user-name").textContent = "";
        document.getElementById("logout-btn").style.display = "none";
    }
}

// Handle login
function loginUser() {
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!name || !mobile || !email || !address) {
        alert("Please fill in all fields.");
        return;
    }

    localStorage.setItem("userName", name);
    window.location.href = "products.html";
}

// Handle logout
function logoutUser() {
    localStorage.removeItem("userName");
    alert("You have been logged out.");
    window.location.href = "login.html";
}

// Show product info popup
function showInfo(product) {
    let infoText = "";

    switch (product) {

        case "SugarCane":
            infoText =
                "🌿 Sugarcane – Full Lifecycle Guide\n\n" +

                "🌱 Soil: Fertile, well-drained loamy soil with good moisture.\n" +
                "🌤 Climate: Hot and humid (20–35°C).\n\n" +

                "🌾 Planting:\n" +
                "- Done using stalk cuttings (setts)\n" +
                "- Time: Feb–Apr or Sept–Oct\n\n" +

                "💧 Care:\n" +
                "- Requires heavy irrigation\n" +
                "- Regular fertilization (Nitrogen-rich)\n\n" +

                "⏳ Growth:\n" +
                "- Takes 10–18 months\n" +
                "- Sugar accumulates in stalks over time\n\n" +

                "🌾 Harvesting:\n" +
                "- Cut close to ground\n" +
                "- Done manually or mechanically\n\n" +

                "💰 Market Rate (India): ₹3000 – ₹3500 per ton\n";
            break;


        case "Onion":
            infoText =
                "🧅 Onion – Full Lifecycle Guide\n\n" +

                "🌱 Soil: Well-drained sandy loam soil\n" +
                "🌤 Climate: Mild temperature\n\n" +

                "🌾 Planting:\n" +
                "- Seeds or seedlings used\n" +
                "- Time: Oct–Nov or Jan–Feb\n\n" +

                "💧 Care:\n" +
                "- Light irrigation\n" +
                "- Weed control important\n\n" +

                "⏳ Growth:\n" +
                "- 90–150 days\n" +
                "- Bulb forms underground\n\n" +

                "🌾 Harvesting:\n" +
                "- When tops turn yellow\n" +
                "- Dry in sunlight before storage\n\n" +

                "💰 Market Rate: ₹10 – ₹30 per kg (fluctuates heavily)\n";
            break;


        case "Maize":
            infoText =
                "🌽 Maize – Full Lifecycle Guide\n\n" +

                "🌱 Soil: Well-drained fertile soil\n" +
                "🌤 Climate: Warm climate\n\n" +

                "🌾 Planting:\n" +
                "- Direct seed sowing\n" +
                "- Time: June–July (Kharif)\n\n" +

                "💧 Care:\n" +
                "- Needs nitrogen fertilizer\n" +
                "- Moderate irrigation\n\n" +

                "⏳ Growth:\n" +
                "- 90–120 days\n" +
                "- Pollination via tasseling & silking\n\n" +

                "🌾 Harvesting:\n" +
                "- Sweet corn early\n" +
                "- Dry corn when kernels hard\n\n" +

                "💰 Market Rate: ₹15 – ₹25 per kg\n";
            break;


        case "Wheat":
            infoText =
                "🌾 Wheat – Full Lifecycle Guide\n\n" +

                "🌱 Soil: Loamy or clay loam soil\n" +
                "🌤 Climate: Cool growing, warm harvesting\n\n" +

                "🌾 Planting:\n" +
                "- Sown in Oct–Dec\n\n" +

                "💧 Care:\n" +
                "- Irrigation at critical stages\n" +
                "- Fertilizers required\n\n" +

                "⏳ Growth:\n" +
                "- 120–150 days\n" +
                "- Turns green → golden\n\n" +

                "🌾 Harvesting:\n" +
                "- Done in March–April\n" +
                "- Combine harvester used\n\n" +

                "💰 Market Rate: ₹20 – ₹25 per kg (MSP based)\n";
            break;


        case "Rice":
            infoText =
                "🍚 Rice – Full Lifecycle Guide\n\n" +

                "🌱 Soil: Clayey soil, water-retentive\n" +
                "🌤 Climate: Hot and humid\n\n" +

                "🌾 Planting:\n" +
                "- Nursery → transplant to fields\n" +
                "- Time: June–July\n\n" +

                "💧 Care:\n" +
                "- Requires standing water\n\n" +

                "⏳ Growth:\n" +
                "- 100–150 days\n" +
                "- Tillering stage increases yield\n\n" +

                "🌾 Harvesting:\n" +
                "- Cut when golden\n" +
                "- Fields drained before harvest\n\n" +

                "💰 Market Rate: ₹18 – ₹25 per kg\n";
            break;


        case "Cotton":
            infoText =
                "🌿 Cotton – Full Lifecycle Guide\n\n" +

                "🌱 Soil: Black soil (best)\n" +
                "🌤 Climate: Warm climate\n\n" +

                "🌾 Planting:\n" +
                "- Time: April–June\n\n" +

                "💧 Care:\n" +
                "- Moderate irrigation\n" +
                "- Pest control important\n\n" +

                "⏳ Growth:\n" +
                "- 150–180 days\n" +
                "- Flowers → bolls\n\n" +

                "🌾 Harvesting:\n" +
                "- Bolls burst open\n" +
                "- Hand picking done\n\n" +

                "💰 Market Rate: ₹6000 – ₹8000 per quintal\n";
            break;


        default:
            infoText = "No information available.";
    }

    alert(infoText);
}
