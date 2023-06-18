function animateSpeedometerValue(startValue, endValue, duration) {
  const labelElement = document.querySelector('#speedometer-label');
  const range = endValue - startValue;
  const startTime = performance.now();

  function updateSpeedometerLabel(currentTime) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime >= duration) {
      // Animation completed
      labelElement.textContent = endValue.toFixed(2);
    } else {
      const progress = elapsedTime / duration;
      const currentValue = startValue + range * progress;
      labelElement.textContent = currentValue.toFixed(2);
      window.requestAnimationFrame(updateSpeedometerLabel);
    }
  }

  window.requestAnimationFrame(updateSpeedometerLabel);
}

// Обробник події натискання на кнопку "start-btn"
document.querySelector('.start-btn').addEventListener('click', () => {
  // Затримка в 10 секунд перед виконанням функції
  setTimeout(() => {
    animateSpeedometerValue(50.00, 0.00, 7000);
  }, 12000);
});
