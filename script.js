document.getElementById("applyFilters").addEventListener("click", () => {
  const region = document.getElementById("regionFilter").value;
  const brand = document.getElementById("brandFilter").value;

  // Update Placeholder Data Dynamically
  document.getElementById("dailySales").textContent = `$${Math.floor(Math.random() * 50000 + 20000)}`;
  document.getElementById("monthlySales").textContent = `$${Math.floor(Math.random() * 800000 + 200000)}`;
  document.getElementById("yearlySales").textContent = `$${Math.floor(Math.random() * 9000000 + 5000000)}`;
  document.getElementById("profitByRegion").textContent = `$${Math.floor(Math.random() * 4000000 + 1000000)}`;
  document.getElementById("profitByState").textContent = `$${Math.floor(Math.random() * 2000000 + 500000)}`;

  // Update Top Customers
  const topCustomers = document.getElementById("topCustomers");
  topCustomers.innerHTML = `
    <li>${region === "North" ? "North Supplies" : "Global Traders"}</li>
    <li>Green Valley Inc.</li>
    <li>Trail & Farm Dealers</li>
  `;

  // Reinitialize Charts with New Data
  renderCharts(region, brand);
});

function renderCharts(region, brand) {
  // Example data based on region and brand
  const regionSales = {
    North: 500000,
    South: 600000,
    East: 700000,
    West: 800000,
    all: 1000000,
  };

  const ctx1 = document.getElementById("salesByRegionChart").getContext("2d");
  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["North", "South", "East", "West"],
      datasets: [
        {
          label: "Sales",
          data: Object.values(regionSales),
          backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
        },
      ],
    },
  });

  const ctx2 = document.getElementById("salesByProductChart").getContext("2d");
  new Chart(ctx2, {
    type: "doughnut",
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
