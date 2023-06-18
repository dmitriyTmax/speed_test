(function() {
  // Find all elements with the classes .card__trait and .loading
  const cardTraits = document.querySelectorAll('.card__trait');
  const loadings = document.querySelectorAll('.loading');

  // Function to hide .card__trait elements and show .loading elements
  function hideTraitsAndShowLoadings() {
    // Hide all .card__trait elements
    cardTraits.forEach((cardTrait) => {
      cardTrait.classList.add('hide');
    });

    // Show all .loading elements
    loadings.forEach((loading) => {
      loading.classList.remove('hide');
    });
  }

  // Add event listener to all elements with the class .start-btn
  const startBtns = document.querySelectorAll('.start-btn');
  startBtns.forEach((startBtn) => {
    startBtn.addEventListener('click', () => {
      // Call the hideTraitsAndShowLoadings function when .start-btn is clicked
      hideTraitsAndShowLoadings();
    });
  });
})();