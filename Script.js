// Connect MetaMask
document.getElementById("connectWallet").onclick = async () => {
    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        alert("MetaMask Connected!");
    } else {
        alert("MetaMask not found. Install MetaMask first.");
    }
};

// Live crypto prices (dummy)
const coins = [
    { symbol: "BTC", price: 34000 },
    { symbol: "ETH", price: 2100 },
    { symbol: "SOL", price: 35 },
    { symbol: "USDT", price: 1 }
];

function displayPrices() {
    const container = document.getElementById("coins");
    container.innerHTML = "";
    coins.forEach(c => {
        const div = document.createElement("div");
        div.innerHTML = `${c.symbol}: $${c.price}`;
        container.appendChild(div);
    });
}
displayPrices();

// Turbo Mode Airdrops (dummy)
const airdrops = [
    { name: "ZOZO", status: "Active" },
    { name: "AiMint", status: "Active" },
    { name: "Kresus", status: "Active" }
];

function displayAirdrops() {
    const container = document.getElementById("airdropsList");
    container.innerHTML = "";
    airdrops.forEach(a => {
        const div = document.createElement("div");
        div.innerHTML = `${a.name} - ${a.status} <button onclick="claim('${a.name}')">Claim Airdrop</button>`;
        container.appendChild(div);
    });
}
displayAirdrops();

function claim(name) {
    alert(`Attempting to claim ${name}...`);
}

// Leaderboard example
const leaderboard = [
    { user: "Enny", tokens: 5 },
    { user: "Alice", tokens: 3 },
    { user: "Bob", tokens: 2 }
];

function displayLeaderboard() {
    const container = document.getElementById("leaderboardList");
    container.innerHTML = "";
    leaderboard.forEach(l => {
        const div = document.createElement("div");
        div.innerHTML = `${l.user}: ${l.tokens} tokens`;
        container.appendChild(div);
    });
}
displayLeaderboard();
