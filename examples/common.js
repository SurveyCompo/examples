// reset example survey upon complete button clicked
window.addEventListener('surveychange', (e) => {
  if (e.detail.name === 'COMPLETE_OK' || e.detail.name === 'SURVEY_CLOSE') {
    var searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('close')) {
      window.close();
    } else {
      e.target.api.reset();
    }
  }
});