// const phoneMask = IMask(document.getElementById("user-phone"), {
//   mask: "+{38}(\\000)000 00 00",
//   lazy: false, // make placeholder always visible
//   placeholderChar: " ", // defaults to '_'
// });

var element = document.getElementById("uPhone");
var maskOptions = {
  mask: "+{380}(00)000-00-00",
};
var mask = IMask(element, maskOptions);
