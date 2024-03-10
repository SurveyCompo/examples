// reset example survey upon complete button clicked
window.addEventListener('surveychange', (e) => {
  if (e.detail.name === 'COMPLETE_OK') {
    e.target.api.reset();
  }
});