// Ensure DOM loads before drawing elements
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. AIR QUALITY LINE CHART INITIALIZATION ---
    const airCtx = document.getElementById('airTrendChart').getContext('2d');
    new Chart(airCtx, {
        type: 'line',
        data: {
            labels: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
            datasets: [
                {
                    label: 'PM2.5 Levels (µg/m³)',
                    data: [22, 28, 45, 52, 38, 30],
                    borderColor: '#10b981', // Green theme
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'PM10 Levels (µg/m³)',
                    data: [40, 55, 78, 90, 72, 58],
                    borderColor: '#f59e0b', // Amber alert color
                    backgroundColor: 'rgba(245, 158, 11, 0.05)',
                    tension: 0.3,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top' }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Concentration Values' }
                }
            }
        }
    });

    // --- 2. WATER QUALITY RADAR / RADIAL BREAKDOWN ---
    const waterCtx = document.getElementById('waterCompositionChart').getContext('2d');
    new Chart(waterCtx, {
        type: 'bar',
        data: {
            labels: ['Dissolved Oxygen', 'Calcium', 'Magnesium', 'Chlorides', 'Sulfate'],
            datasets: [{
                label: 'Observed Levels (mg/L)',
                data: [7.8, 45, 18, 110, 35],
                backgroundColor: [
                    '#38bdf8', // Sky Blue
                    '#60a5fa', // Blue
                    '#818cf8', // Indigo
                    '#a78bfa', // Purple
                    '#f472b6'  // Pink
                ],
                borderWidth: 0,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Milligrams per Liter (mg/L)' }
                }
            }
        }
    });
});