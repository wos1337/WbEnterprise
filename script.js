// Sample data for charts
const sampleData = {
  salesByRegion: {
    labels: ["North", "South", "East", "West"],
    data: [120000, 95000, 112000, 134000]
  },
  salesByProduct: {
    labels: ["Tractor Attachments", "Mower Blades", "UTV Windshields", "Engine Oil", "LED Lights"],
    data: [40000, 30000, 50000, 20000, 15000]
  },
  topProducts: {
    labels: ["Mower Blades", "UTV Windshields", "LED Lights", "Tractor Attachments", "Engine Oil"],
    data: [30000, 50000, 15000, 40000, 20000]
  },
  callAnalytics: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    calls: [80, 120, 95, 100, 110],
    avgTalkTime: [3.2, 3.5, 3.0, 3.8, 3.6] // in minutes
  }
};

// Initialize charts
document.addEventListener("DOMContentLoaded", () => {
  // Sales by Region Chart
  const salesByRegionCtx = document.getElementById("salesByRegionChart").getContext("2d");
  new Chart(salesByRegionCtx, {
    type: "bar",
    data: {
      labels: sampleData.salesByRegion.labels,
      datasets: [{
        label: "Sales ($)",
        data: sampleData.salesByRegion.data,
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#9C27B0"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Sales by Product Chart
  const salesByProductCtx = document.getElementById("salesByProductChart").getContext("2d");
  new Chart(salesByProductCtx, {
    type: "pie",
    data: {
      labels: sampleData.salesByProduct.labels,
      datasets: [{
        label: "Sales ($)",
        data: sampleData.salesByProduct.data,
        backgroundColor: ["#F44336", "#FFC107", "#4CAF50", "#2196F3", "#9C27B0"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "right" }
      }
    }
  });

  // Top 5 Products Chart
  const topProductsCtx = document.getElementById("topProductsChart").getContext("2d");
  new Chart(topProductsCtx, {
    type: "horizontalBar",
    data: {
      labels: sampleData.topProducts.labels,
      datasets: [{
        label: "Sales ($)",
        data: sampleData.topProducts.data,
        backgroundColor: ["#673AB7", "#3F51B5", "#009688", "#FF5722", "#E91E63"]
      }]
    },
    options: {
      responsive: true,
      indexAxis: "y",
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { beginAtZero: true }
      }
    }
  });

  // Call Analytics Chart
  const callAnalyticsCtx = document.getElementById("callAnalyticsChart").getContext("2d");
  new Chart(callAnalyticsCtx, {
    type: "line",
    data: {
      labels: sampleData.callAnalytics.labels,
      datasets: [
        {
          label: "Number of Calls",
          data: sampleData.callAnalytics.calls,
          borderColor: "#FF9800",
          backgroundColor: "rgba(255, 152, 0, 0.2)",
          fill: true
        },
        {
          label: "Average Talk Time (mins)",
          data: sampleData.callAnalytics.avgTalkTime,
          borderColor: "#4CAF50",
          backgroundColor: "rgba(76, 175, 80, 0.2)",
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});
