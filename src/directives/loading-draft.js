// default options for loading overlay
var _defaults = {
  style: {
    backgroundColor: "rgba(255,255,255, 1)",
    opacity: "0.8"
  },
  text: '',
  html: '',
  active: false,
  container: '',
};

const Loading = {

  install(Vue, options) {

    if (options) {
      _defaults = Object.assign(_defaults, options);
    }

    // Register a global custom directive called `v-loading`
    Vue.directive('loading', {
      // When the bound element is inserted into the DOM...
      inserted(el, binding) {

        let id = randomId()
        el.setAttribute('data-id', id);

        let mask = document.createElement('div');
        mask.setAttribute('id', id);
        mask.setAttribute('class', 'overlay');

        let loader = document.createElement('i');
        loader.setAttribute('class', 'fas fa-2x fa-sync-alt fa-spin');

        mask.appendChild(loader);

        process(el, binding, mask);

      },
      unbind(el, binding) {
        console.log('UNBIND');
        let id = el.getAttribute("data-id");
        let mask = document.getElementById(id);

        mask !== null && document.body.removeChild(mask);
      },
      update: process,
    })
  }

}

const process = (el, binding, mask) => {
  console.log('PROCESS', binding.value, mask.classList);
  if (binding.value) {
    if (!mask) return;

    if (el.hasChildNodes()) {
      if (!mask.id)
        document.getElementById(mask.elm.getAttribute("data-id"));
      else
        el.insertBefore(mask, el.firstChild);
    }
  } else {
    if (mask?.elm) {
      var ele = document.getElementById(mask.elm.getAttribute("data-id"));
      ele?.remove();
    }
  }
}

// random id generator
const randomId = function () {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export default Loading;
