(function() {

  var LOAD_TIMEOUT = 60000;

  // Game depends on a certain framerate.
  // window.faketime.animationFrameRate = 60;

  localStorage.clear();


  function weightedScore() {
    return (milestoneFlag +1)*Math.atan(clips) || 0;
  }

  window.muniverse = {
    init: function() {
    
      window.reset();
      
     
    },
    step: function(millis) {
      faketime.advance(millis);
      return Promise.resolve(milestoneFlag == 15);
    },
    score: function() {
      return Promise.resolve(milestoneFlag == 15  ?  : weightedScore());
    }
  };

})();
