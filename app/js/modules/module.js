"use strict";

(function () {

  /*
    Some description
	*/
  // private varibles;
  var newoObj = {};

  // private functions
  function someFunc(arg1, arg2, arg3) {
    console.log(arg1 + " " + arg2 + " " + arg3);
  }

  // functions which active in module
  function run() {
    someFunc("This", "is", "module");
  }

  window.module = {
    // public method export init
    init: run
  };
}());
