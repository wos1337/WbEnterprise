// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Sample Data
  const salesByRegionData = {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [300000, 250000, 200000, 400000],
        backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
      }
    ]
  };

  const salesByProductData = {
    labels: ['Windshield', 'Blades', 'Tracks', 'Lights', 'Seats'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [120000, 150000, 180000, 220000, 60000],
        backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8']
      }
    ]
  };

  const topProductsData = {
    labels: ['Tracks', 'Blades', 'Lights', 'Seats', 'Windshield'],
    datasets: [
      {
        label: 'Units Sold',
        data: [300, 250, 200, 180, 150],
        backgroundColor: ['#dc3545', '#28a745', '#ffc107', '#007bff', '#17a2b8']
      }
    ]
  };

  const callAnalyticsData = {
    labels: ['Total Calls', 'Avg Talk Time (min)', 'Missed Calls'],
    datasets: [
      {
        label: 'Call Data',
        data: [1200, 8, 45],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545']
      }
    ]
  };

  // Initialize Charts
  const initChart = (ctx, data) => new Chart(ctx, { type: 'bar', data });

  const regionCtx = document.getElementById('salesByRegionChart').getContext('2d');
  const productCtx = document.getElementById('salesByProductChart').getContext('2d');
  const topProductsCtx = document.getElementById('topProductsChart').getContext('2d');
  const callAnalyticsCtx = document.getElementById('callAnalyticsChart').getContext('2d');

  initChart(regionCtx, salesByRegionData);
  initChart(productCtx, salesByProductData);
  initChart(topProductsCtx, topProductsData);
  initChart(callAnalyticsCtx, callAnalyticsData);

  // Filter Button (Demo functionality)
  document.getElementById('applyFilters').addEventListener('click', () => {
    alert('Filters applied (Demo functionality).');
  });
});
 
