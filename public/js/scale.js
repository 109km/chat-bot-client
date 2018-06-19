/**
 * Created by xinheng.shao on 2015-09-18.
 */
document.addEventListener('DOMContentLoaded', function() {
  var scale = 1,
    STAND_WIDTH = 375,
    $wrapper = document.getElementsByTagName('html')[0],
    $body = document.getElementsByTagName('body')[0],
    windowWidth = document.documentElement && document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
    deviceAgent = navigator.userAgent.toLowerCase();

  var setScale = function(scales) {
    if ($wrapper.style.zoom == undefined) {
      $wrapper.style.margin = '0px';
      $wrapper.style.transformOrigin = 'top left';
      $wrapper.style.transform = 'scale(' + scales + ')';
      $wrapper.style.MozTransformOrigin = 'top left';
      $wrapper.style.MozTransform = 'scale(' + scales + ')';
    } else {
      $wrapper.style.zoom = scales;
    }
    $body.style.display = 'block';

  };

  var ifRotate = function() {
    window.onorientationchange = function() {
      if (window.innerHeight > windowWidth) {
        windowWidth = document.documentElement && document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        scale = parseFloat(windowWidth / STAND_WIDTH);
        setScale(scale);
      }

    };
  };

  try {
    // ifRotate();
    if (deviceAgent.match(/(iphone|ipod|android|windows\s*phone|symbianos)/)) {
      scale = parseFloat(windowWidth / STAND_WIDTH);
      if (window.innerHeight > windowWidth) {} else {
        ifRotate();
      }
      //}

      //微信2.3版本的处理
      if (deviceAgent.match(/android\s*2.3/) && deviceAgent.match(/micromessenger/)) {
        scale = 1;
      }
      if ($wrapper) {
        setScale(scale);
      }

    } else {
      if ($wrapper) {
        if (deviceAgent.match(/(ipad)/)) {
          windowWidth = document.documentElement && document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
          scale = parseFloat(windowWidth / STAND_WIDTH);
        } else {
          scale = 1.2;
        }
        setScale(scale);
      }
    }

  } catch (e) {
    windowWidth = document.documentElement && document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    scale = parseFloat(windowWidth / STAND_WIDTH);
    if ($wrapper) {
      setScale(scale);
    }
  }
}, false);