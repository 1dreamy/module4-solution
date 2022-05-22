(function (window) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for ( var eachName of names) {  
        if (eachName[0]=='j' || eachName[0]=='J') {  
          byeSpeaker(eachName);
        } else {
          helloSpeaker(eachName);
        }
      }
})(window)
