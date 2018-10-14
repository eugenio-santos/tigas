function run() {
  var rightCol = document.getElementById('right-col');

  rightCol.style.height = window.innerHeight / 1.5 + "px";

  (function () {
    var throttle = function (type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function () {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(function () {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
  })();

  // handle event
  window.addEventListener("optimizedResize", function () {
    rightCol.style.height = window.innerHeight / 1.5 + "px";
    console.log(rightCol.style.height);
  });
}

if (document.readyState != 'loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function () {
  if (document.readyState == 'complete') run();
});