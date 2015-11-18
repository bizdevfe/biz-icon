BizIcon - A generator of webfonts
===============

[![Build Status][travis-image]][travis-url]
[![NPM Version][npm-image]][npm-url]

[![NPM Stat][npm-stat-image]][npm-stat-url]

A generator of webfonts from SVG icons based [webfonts-generator](https://github.com/sunflowerdeath/webfonts-generator).

Features:
--------
* Supported font format: WOFF, EOT, TTF and SVG.
* Supported browsers: IE6+, Firefox, Chrome, Safari and Opera.

Download
--------

    npm install biz-icon
    bower install biz-icon

or download from [GitHub](https://github.com/bizdevfe/biz-icon/releases).

Usage
--------

    $ npm install grunt-cli -g
    $ npm install
    $ grunt

Configration
--------
To add or remove icons, just edit the `icons.json` file:

    {
	  "fontName": "BizIcon",         // Name of font and the font files
      "fontDest": "font/",           // Path for generated font files
      "cssDest": "css/biz-icon.css", // Path for generated css file
      "cssFontsPath": "../font/"     // Fonts path used in css file
      "root": "svg/", // SVG files root directory
      "icons": [
        {
          "name": "search",   // Suffix name of css class
          "svg": "search.svg" // SVG files path relative to root
        },
		...
      ]
    }

License
-------
Licensed under the [MIT license](http://opensource.org/licenses/MIT).

[travis-image]: https://travis-ci.org/bizdevfe/biz-icon.svg
[travis-url]: https://travis-ci.org/bizdevfe/biz-icon
[npm-image]: http://img.shields.io/npm/v/biz-icon.svg
[npm-url]: https://npmjs.org/package/biz-icon
[npm-stat-image]: https://nodei.co/npm/biz-icon.png?downloads=true
[npm-stat-url]: https://nodei.co/npm/biz-icon