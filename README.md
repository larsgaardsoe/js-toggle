# js-toggle
Quick and dirty javascript for toggling classes on click using data attributes. Good for prototyping css animations. No need for jQuery.

## How to use
```html
<button class="js-toggle" data-element="menu">Show/Hide menu</button>
<nav id="menu">
 ...
</nav>
```

Click on button will add or remove `class="js-action"` på `<nav>`

Use `data-group="drawer"` to remove `class="js-action"` from other elements with `class="drawer"`

Use `.js-active-default` and media queries if you need some element to active by default on some viewports and not others.

## Full script

```javascript
    function ready(event) {
      function addEventListenerList(list, event, fn) {
        for (var i = 0, len = list.length; i < len; i++) {
          list[i].addEventListener(event, fn, false);
        }
      }

      function handleClick() {
        var dataElement = this.dataset.element;
        var group = document.getElementsByClassName(this.dataset.group);
        var element = document.getElementById(dataElement);
        if (element.className === 'js-active-default') {
          element.classList.remove('js-active-default');
        } else {
          if (!element.className === 'js-active') {
            if (group) {
              Array.prototype.forEach.call(group, function(el) {
                el.classList.remove('js-active');
              });
            }
            element.classList.toggle('js-active');
          } else {
            element.classList.toggle('js-active');
          }
        }
      }
      var listJsToggle = document.getElementsByClassName('js-toggle');
      addEventListenerList(listJsToggle, 'click', handleClick);
      // clean up event binding
      window.removeEventListener('DOMContentLoaded', ready);
    }
    // bind to the load event
    window.addEventListener('DOMContentLoaded', ready);
```
