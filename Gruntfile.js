var path = require('path');
var _ = require('lodash');

module.exports = function(grunt) {
    /*var materialPath = './node_modules/material-design-icons/',
        indexFile = grunt.file.read(materialPath + 'index.html'),
        pattern = /<div><img\ssrc='(.*)'><br>(.*)<\/div>/ig,
        result = indexFile.match(pattern),
        mdiIcons = _.map(result, function(val) {
            var svg = val.replace(pattern, '$1').replace(/^\.\//, '');
            return {
                name: path.basename(svg).replace(/_(26x)?24px.svg$/, ''),
                svg: svg
            };
        }),
        config = require('./icons.json'),
        mdiConfig = {
            fontName: config.fontName,
            fontDest: config.fontDest,
            cssDest: config.cssDest,
            cssFontsPath: config.cssFontsPath,
            root: materialPath,
            icons: mdiIcons
        };

    grunt.initConfig({
        json_generator: {
            target: {
                dest: "./mid-icons.json",
                options: mdiConfig
            }
        }
    });*/
    
    grunt.registerTask('add_patch', function() {
        var patchPath = './patch/',
            srcPath = './node_modules/webfonts-generator/src/',
            cssPatch = 'renderCss.js',
            htmlPatch = 'renderHtml.js';
        grunt.file.copy(patchPath + cssPatch, srcPath + cssPatch);
        grunt.file.copy(patchPath + htmlPatch, srcPath + htmlPatch);
    });
    
    grunt.registerTask('generate_font', function() {
        var done = this.async();
        var webfontsGenerator = require('webfonts-generator');
        var config = require('./icons.json');
        var iconFiles = config.icons.map(function(icon) {
            return config.root + icon.svg;
        });

        webfontsGenerator({
            fontName: config.fontName,
            files: iconFiles,
            dest: config.fontDest,
            types: ['svg', 'ttf', 'woff', 'eot'],
            rename: function(iconPath) {
                var fileName = path.basename(iconPath);
                return _.result(_.find(config.icons, function(icon) {
                    return path.basename(icon.svg) === fileName;
                }), 'name');
            },
            cssDest: config.cssDest,
            cssFontsPath: config.cssFontsPath,
            cssTemplate: './template/css.hbs',
            templateOptions: {
                classPrefix: 'biz-icon-',
                baseClass: 'biz-icon'
            },
            html: true,
            htmlDest: './preview.html',
            htmlTemplate: './template/html.hbs'
        }, function(error) {
            if (error) {
                console.error(error);
                done(false);
            } else {
                done();
            }
        });
    });
    
    grunt.loadNpmTasks('grunt-json-generator');
    
    grunt.registerTask('default', ['add_patch', 'generate_font']);
};
