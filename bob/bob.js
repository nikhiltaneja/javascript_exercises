var Bob = function(){
  this.hey = function(input){

    if (input.trim() == ""){
      return "Fine. Be that way!";
    } else if (input.toUpperCase() == input){
      return "Woah, chill out!";
    } else if(input[input.length - 1] === "?"){
      return "Sure.";
    } else {
      return "Whatever.";
    }
  };
};

module.exports = Bob;
