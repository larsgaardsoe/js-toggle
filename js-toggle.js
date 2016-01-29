    // Generic .js-toggle using data-element and data-group. Use .js-active-default if needed in responsive design
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
