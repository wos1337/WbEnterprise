// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Sample Data
  const salesByRegionData = {
    labels: ['Northeast', 'Midwest', 'South', 'West'],
    datasets: [{
      label: 'Sales ($)',
      data: [120000, 90000, 110000, 95000],
      backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
    }]
  };

  const salesByStateData = {
    labels: ['CA', 'TX', 'FL', 'NY', 'IL'],
    datasets: [{
      label: 'Sales ($)',
      data: [30000, 25000, 20000, 15000, 10000],
      backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8']
    }]
  };

  const salesByBrandData = {
    labels: ['Kubota', 'John Deere', 'New Holland', 'Mahindra', 'Case IH'],
    datasets: [{
      label: 'Sales ($)',
      data: [45000, 55000, 20000, 15000, 10000],
      backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8']
    }]
  };

  const salesByProductData = {
    labels: ['Windshield', 'Tracks', 'Blades', 'Lights', 'Seats'],
    datasets: [{
      label: 'Sales ($)',
      data: [10000, 20000, 15000, 30000, 5000],
      backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8']
    }]
  };

  // Initialize Charts
  const initChart = (ctx, data) => new Chart(ctx, { type: 'bar', data });

  initChart(document.getElementById('sales-by-region').getContext('2d'), salesByRegionData);
  initChart(document.getElementById('sales-by-state').getContext('2d'), salesByStateData);
  initChart(document.getElementById('sales-by-brand').getContext('2d'), salesByBrandData);
  initChart(document.getElementById('sales-by-product').getContext('2d'), salesByProductData);
});
