const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const ieVersion = Number(document.documentMode) || 0;

const trim = function (string) {
  return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};

export function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
    // or return new RegExp('(^|\\s)' + cls + '(\\s|$)').test(el.className);
  }
}

export function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || "").split(" ");

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " " + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

export function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(" ");
  var curClass = " " + el.className + " ";

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" " + clsName + " ", " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

export function on(el, event, handler) {
  if (el && event && handler) {
    if (document.addEventListener) {
      el.addEventListener(event, handler, false);
    } else {
      el.attachEvent("on" + event, handler);
    }
  }
}

export function off(el, event, handler) {
  if (el && event) {
    if (document.removeEventListener) {
      el.removeEventListener(event, handler, false);
    } else {
      el.detachEvent("on" + event, handler);
    }
  }
}

export function once(el, event, handler) {
  var listener = function () {
    if (handler) {
      handler.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
}

const camelCase = function (name) {
  return name
    .replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    })
    .replace(MOZ_HACK_REGEXP, "Moz$1");
};

export const getStyle =
  ieVersion < 9
    ? function (element, styleName) {
        if (!element || !styleName) return null;
        styleName = camelCase(styleName);
        if (styleName === "float") {
          styleName = "styleFloat";
        }
        try {
          switch (styleName) {
            case "opacity":
              try {
                return element.filters.item("alpha").opacity / 100;
              } catch (e) {
                return 1.0;
              }
            default:
              return element.style[styleName] || element.currentStyle
                ? element.currentStyle[styleName]
                : null;
          }
        } catch (e) {
          return element.style[styleName];
        }
      }
    : function (element, styleName) {
        if (!element || !styleName) return null;
        styleName = camelCase(styleName);
        if (styleName === "float") {
          styleName = "cssFloat";
        }
        try {
          var computed = document.defaultView.getComputedStyle(element, "");
          return element.style[styleName] || computed
            ? computed[styleName]
            : null;
        } catch (e) {
          return element.style[styleName];
        }
      };

export function openNewTab(url) {
  const $a = document.createElement("a");
  $a.target = "_blank";
  $a.href = url;
  if (typeof MouseEvent === "function") {
    const evt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: false
    });
    $a.dispatchEvent(evt);
  }
}

export function getOffsetX(e) {
  e = e || window.event;
  const srcObj = e.currentTarget || e.target || e.srcElement;
  // if (e.offsetX) { // 相对于target计算，冒泡情况不可使用
  //   return e.offsetX
  // } else {
  const rect = srcObj.getBoundingClientRect();
  const clientx = e.clientX;
  return clientx - rect.left;
  // }
}

export function getOffsetY(e) {
  e = e || window.event;
  const srcObj = e.currentTarget || e.target || e.srcElement;
  // if (e.offsetY) {
  //   return e.offsetY
  // } else {
  const rect = srcObj.getBoundingClientRect();
  const clienty = e.clientY;
  return clienty - rect.top;
  // }
}
