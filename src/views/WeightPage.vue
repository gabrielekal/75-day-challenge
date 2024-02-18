<script setup lang="ts">
import { ref, onMounted} from 'vue';
import Chart from 'chart.js/auto';
import BackArrow from '@/components/BackArrow.vue';

const weightsData = ref<Record<string, number | null>>(({}));

onMounted(() => {
    for (let i = 1; i <= 75; i += 1) {
        const storedWeight = localStorage.getItem(`day-${i}`);
        weightsData.value[`day-${i}`] = storedWeight !== null ? parseFloat(storedWeight) : null;
    }

    const ctx = document.getElementById('weightsChart') as HTMLCanvasElement;
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Object.keys(weightsData.value),
                datasets: [{
                    label: 'Your Weight',
                    data: Object.values(weightsData.value),
                    borderColor: '#D08BB9',
                    backgroundColor: 'rgba(0, 99, 178, 0.2)',
                    borderWidth: 2,
                    pointRadius: 5,
                    pointBackgroundColor: '#D08BB9',
                }]
            },
            options: {
                scales: {
                    x: {
                        grid: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)',
                        },
                        ticks: {
                            font: {
                                size: 12,
                            },
                        },
                        title: {
                            display: true,
                            text: 'Day',
                            font: {
                                size: 14,
                                weight: 'bold',
                            },
                        },
                    },
                    y: {
                        grid: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)',
                        },
                        ticks: {
                            font: {
                                size: 12,
                            },
                        },
                        title: {
                            display: true,
                            text: 'Weight (kg)',
                            font: {
                                size: 14,
                                weight: 'bold',
                            },
                        },
                    },
                },
                plugins: {
                    tooltip: {
                        enabled: true,
                        backgroundColor: '#D08BB9',
                        titleFont: {
                            size: 14,
                            weight: 'bold',
                        },
                        bodyFont: {
                            size: 12,
                        },
                        callbacks: {
                            label(context) {
                                return `Weight: ${context.raw}`;
                            },
                        },
                    },
                },
                animation: {
                    duration: 1000,
                },
                responsive: true,
                maintainAspectRatio: false,
            },
        });
    }
});

</script>

<template>
    <main class="container">
      <BackArrow />
      <hr>
      <div class="title-container">
        <h1 class="title">WEIGHT TRACKER</h1>
      </div>
      <div class="chart-container">
        <canvas id="weightsChart" width="400" height="400"></canvas>
      </div>
    </main>
  </template>

  <style scoped>
  .container {
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding: 10px;
    margin: 10px;
  }

  .title {
    font-size: 60px;
    color: #344F34;
    font-family: Anton, sans-serif;
    align-content: center;
  }

  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
  }

  .circles-container {
    display: grid;
    grid-template-columns: repeat(6, 80px);
    gap: 2px;
  }
  </style>
