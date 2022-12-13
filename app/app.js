if(window.location.hash) window.setTimeout(() => { window.scrollTo(0, 0); }, 1);

function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./icons', true, /\.svg$/));

// Load plugins
import 'jquery'
import IMask from 'imask'

import svg4everybody from 'svg4everybody'
window.svg4everybody = svg4everybody;

import objectFitImages from 'object-fit-images'
window.objectFitImages = objectFitImages;

import imagesLoaded from 'imagesloaded'
window.imagesLoaded = imagesLoaded;

import 'bootstrap'

// load modules
import Utils from'./js/utils/utils'
import SvgUse from'./js/svgUse'
import Media from './js/media'
import Dropdown from "./js/dropdown";
import Sliders from "./js/sliders";

// Load styles
import './styles/app.js';

window.App = {
    nameProject: 'example',
    debug: false,
    lang: 'ru'
};

if (window.SITE_LANG) {
    App.lang = window.SITE_LANG;
}

if (App.debug) {
    console.log('Debug: ' + App.debug);
    console.log('Lang: ' + App.lang);
}

document.addEventListener('DOMContentLoaded', function() {
    objectFitImages();

    if('ontouchstart' in window || navigator.maxTouchPoints) $(document.body).addClass("touch");

    App.Utils = new Utils();
    App.SvgUse = new SvgUse();
    App.Media = new Media();
    App.Dropdown = new Dropdown();
    App.Sliders = new Sliders();

    $('.js-burger').on('click', function (e) {
      e.preventDefault();
      $('[data-mobile-menu]').toggleClass('open');
    })
});
