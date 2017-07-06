document.addEventListener('DOMContentLoaded', function() {

  var lightSwitch = document.querySelector('.switch');
  var status = document.querySelector('.status');
  var body = document.querySelector('body');

  var off = function() {
    lightSwitch.className = "switch off";
    body.className = 'dark';
    status.innerText = "Hey, who turned off the lights?";
  };

  var on = function() {
    lightSwitch.className = "switch on";
    body.className = 'light';
    status.innerText = "It's so bright in here!"
  }

  lightSwitch.addEventListener('click', function(light) {
    light.preventDefault();
    light.stopPropagation();

    if(lightSwitch.classList.contains('on'))
      off();
    else
      on();

  });

});
