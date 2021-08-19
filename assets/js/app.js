const HOSTNAME = window.location.hostname;
const DEV_SCRIPT = './src/index.js';
const PROD_SCRIPT = './dist/js/fv.bundle.min.js';

const script = document.createElement('script');

if (HOSTNAME.includes('localhost')) {
  script.setAttribute('src', DEV_SCRIPT);
  script.setAttribute('env', 'dev');
} else {
  script.setAttribute('src', DEV_SCRIPT);
  script.setAttribute('env', 'prod');
}

script.setAttribute('type', 'module');
document.body.appendChild(script);
