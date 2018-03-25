export default function throttle(fn, delay) {
  var delayFlag = true;
  var firstInvoke = true;
  return function _throttle(e) {
    if (delayFlag) {
      delayFlag = false;
      setTimeout(function () {
        delayFlag = true;
        fn(e);
      }, delay);
      if (firstInvoke) {
        fn(e);
        firstInvoke = false;
      }
    }
  };
}