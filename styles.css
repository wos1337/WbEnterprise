document.getElementById("applyFilters").addEventListener("click", () => {
  const region = document.getElementById("regionFilter").value;
  const brand = document.getElementById("brandFilter").value;

  // Update Placeholder Data Dynamically
  document.getElementById("dailySales").textContent = `$${Math.floor(Math.random() * 50000 + 20000)}`;
  document.getElementById("monthlySales").textContent = `$${Math.floor(Math.random() * 800000 + 200000)}`;
  document.getElementById("yearlySales").textContent = `$${Math.floor(Math.random() * 9000000 + 5000000)}`;
  document.getElementById("profitByRegion").textContent = `$${Math.floor(Math.random() * 4000000 + 1000000)}`;
  document.getElementById("profitByState").textContent = `$${Math.floor(Math.random() * 2000000 + 500000)}`;
  document.getElementById("totalCalls").textContent = Math.floor(Math.random() * 500 + 100);
  document.getElementById("avgTalkTime").textContent = `${Math.floor(Math.random() * 3 + 2)} mins ${Math.floor(Math.random() * 59)} secs`;
  document.getElementById("missedCalls").textContent = Math.floor(Math.random() * 20 + 5);

  // Update Top Customers and Products
  document.getElementById("topCustomers").innerHTML = `
    <li>${region === "North" ? "North Supplies" : "Global Traders"}</li>
    <li>Green Valley Inc.</li>
    <li>Trail & Farm Dealers</li>
  `;

  document.getElementById("topProducts").innerHTML = `
    <li>${brand === "Kubota" ? "Kubota Tractor Blades" : "Camso Tracks"}</li>
    <li>UTV Windshields</li>
    <li>Lawn Tractor Mowers</li>
    <li>Trailer Hitch Kits</li>
    <li>LED Light Bars</li>
  `;

  // Reinitialize Charts with New Data
  renderCharts(region, brand);
});

function renderCharts(region, brand) {
  const ctx1 = document.getElementById("salesByRegionChart").getContext("2d");
  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["North", "South", "East", "West"],
      datasets: [
        {
          label: "Sales",
          data: [300000, 500000, 400000, 200000],
          backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
        },
      ],
    },
  });

  const ctx2 = document.getElementById("salesByProductChart").getContext("2d");
  new Chart(ctx2, {
    type: "pie",
    data: {
      labels: ["Product A", "Product B", "Product C", "Product D"],
      datasets: [
        {
          label: "Product Sales",
          data: [300, 500, 200, 400],
          backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
        },
      ],
    },
  });
}

// Render default charts on load
renderCharts("all", "all");
