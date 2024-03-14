// reset example survey upon complete button clicked
window.addEventListener('surveychange', (e) => {
  if (e.detail.name === 'COMPLETE_OK' || e.detail.name === 'SURVEY_CLOSE') {
    e.target.api.reset();
  }
});