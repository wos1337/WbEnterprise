// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Sample Data
  const salesByRegionData = {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [{
      label: 'Sales ($)',
      data: [250000, 200000, 150000, 400000],
      backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
    }]
  };

  const salesByProductData = {
    labels: ['Windshield', 'Blades', 'Tracks', 'Lights', 'Seats'],
    datasets: [{
      label: 'Sales ($)',
      data: [100000, 120000, 150000, 200000, 50000],
      backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8']
    }]
  };

  // Initialize Charts
  const initChart = (ctx, data) => new Chart(ctx, { type: 'bar', data });

  const regionCtx = document.getElementById('salesByRegion').getContext('2d');
  const productCtx = document.getElementById('salesByProduct').getContext('2d');

  initChart(regionCtx, salesByRegionData);
  initChart(productCtx, salesByProductData);

  // Filter Button (for interactivity)
  document.getElementById('filterButton').addEventListener('click', () => {
    alert('Filters applied (Demo functionality).');
  });
});
