//.getDate is a method we make up so that we can set our module to more than one function 

module.exports.getDate = function() {

  const today = new Date(); //Date object
  //Long meaning want word form vs numeric form
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  return today.toLocaleDateString("en-CA", options);
}

module.exports.getDay = function() {

  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-CA", options);
}

console.log(module.exports);

