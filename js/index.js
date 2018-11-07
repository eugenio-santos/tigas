function run() {
  function getAjax(url, success) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState > 3 && xhr.status == 200) success(xhr.responseText);
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
  }



  window.onhashchange = function (event) {
    console.log(location.hash, event);
    if (location.hash === '') {
      document.getElementById('center-col').style.display = 'block';
      document.getElementById('right-col').style.display = 'block';
    }
    if (location.hash === '#photo') {
      document.getElementById('center-col').style.display = 'none';
      document.getElementById('right-col').style.display = 'none';
      getAjax('./t.html', function (data) {
        console.log(data);

      })
    }
  };
}

if (document.readyState != 'loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function () {
  if (document.readyState == 'complete') run();
});