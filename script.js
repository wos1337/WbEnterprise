// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Sample data for charts
    const salesByRegionData = {
      labels: ['Northeast', 'Midwest', 'South', 'West'],
      datasets: [
        {
          label: 'Sales by Region',
          data: [50000, 70000, 85000, 60000],
          backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
        }
      ]
    };
  
    const salesByStateData = {
      labels: ['CA', 'TX', 'FL', 'NY', 'IL'],
      datasets: [
        {
          label: 'Sales by State',
          data: [30000, 25000, 20000, 15000, 10000],
          backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8']
        }
      ]
    };
  
    const salesByBrandData = {
      labels: ['Kubota', 'John Deere', 'New Holland', 'Mahindra', 'Case IH'],
      datasets: [
        {
          label: 'Sales by Brand',
          data: [45000, 55000, 20000, 15000, 10000],
          backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8']
        }
      ]
    };
  
    const salesByProductData = {
      labels: ['Windshield', 'Tracks', 'Blades', 'Lights', 'Seats'],
      datasets: [
        {
          label: 'Sales by Product',
          data: [10000, 20000, 15000, 30000, 5000],
          backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8']
        }
      ]
    };
  
    const profitByRegionData = {
      labels: ['Northeast', 'Midwest', 'South', 'West'],
      datasets: [
        {
          label: 'Profit by Region',
          data: [15000, 25000, 30000, 20000],
          backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
        }
      ]
    };
  
    // Initialize charts
    const initChart = (ctx, data) => new Chart(ctx, { type: 'bar', data });
  
    initChart(document.getElementById('sales-by-region').getContext('2d'), salesByRegionData);
    initChart(document
  