// Orders Line Chart (already exists)
const ctx = document.getElementById('ordersChart').getContext('2d');
const ordersChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Orders',
        borderColor: 'orange',
        data: [20000, 30000, 25000, 40000, 60000, 21345, 50000, 65000, 70000, 80000],
        fill: false
      },
      {
        label: 'Profit',
        borderColor: 'purple',
        data: [10000, 20000, 15000, 30000, 50000, 18000, 40000, 45000, 50000, 60000],
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

//  Sales Analytics Pie Chart
const pieCtx = document.getElementById('salesPieChart').getContext('2d');
const salesPieChart = new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Completed Sales', 'Pending Sales', 'Refunded'],
    datasets: [
      {
        label: 'Sales Distribution',
        data: [70, 20, 10],
        backgroundColor: [
          '#4CAF50', // green
          '#FFC107', // yellow
          '#F44336'  // red
        ],
        hoverOffset: 10
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333',
          font: {
            size: 14
          }
        }
      }
    }
  }
}); 

// Toggle sidebar visibility with animation
const toggleBtn = document.getElementById('toggleBtn');
const sidebar   = document.getElementById('sidebar');
const content   = document.querySelector('.main-content');

toggleBtn.addEventListener('click', function() {
  sidebar.classList.toggle('hide');
  content.style.marginLeft = sidebar.classList.contains('hide') ? '60px' : '250px';

  // Swap the toggle icon
  toggleBtn.innerHTML = sidebar.classList.contains('hide')
    ? '<i class="fas fa-arrow-right"></i>'
    : '<i class="fas fa-arrow-left"></i>';
});
