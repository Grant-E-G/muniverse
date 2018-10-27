(function() {
  var LOAD_TIMEOUT = 6000;

  window.faketime.animationFrameRate = 15
  localStorage.clear();


  function weightedScore() {
    return (milestoneFlag +1)*Math.atan(clips) || 0;
  }

  window.muniverse = {
    init: function() {
    return pollAndWait(LOAD_TIMEOUT, function() {
        return milestoneFlag == 0;
      }).then(function() {
        faketime.pause();
        });
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
