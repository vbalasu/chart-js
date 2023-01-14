import { Chart } from "chart.js/auto";

(async function() {
    const data = [
      { brand: 'apple', price: 1200 },
      { brand: 'samsung', price: 1100 },
      { brand: 'xiaomi', price: 900 },
    ];
  
    new Chart(
      document.getElementById('acquisitions'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.brand),
          datasets: [
            {
              label: 'Price by brand',
              data: data.map(row => row.price)
            }
          ]
        }
      }
    );
  })();