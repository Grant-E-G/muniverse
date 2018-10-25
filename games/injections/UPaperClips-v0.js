(function() {



  localStorage.clear();


  function weightedScore() {
    return (milestoneFlag +1)*Math.atan(clips) || 0;
  }

  window.muniverse = {
    init: function() {
    
      faketime.pause();
      return Promise.resolve(window.reset() != true);
    },
    step: function(millis) {
      faketime.advance(millis);
      return Promise.resolve(milestoneFlag == 15);
    },
    score: function() {
      return Promise.resolve(milestoneFlag == 15  ? 26 : weightedScore());
    }
  };

})();
