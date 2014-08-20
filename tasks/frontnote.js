/*
 * grunt-frontnote
 * https://github.com/frontainer/grunt-frontnote
 *
 * Copyright (c) 2014 frontainer
 */

'use strict';

var styleGuide = require('frontnote'),
    fs = require('fs');

module.exports = function (grunt) {
    grunt.registerMultiTask('frontNote', 'StyleGuide Generator for Grunt', function () {
        var done = this.async(),
            options = this.options();
        this.files.forEach(function (f) {

            // filepathのマッピング
            var files = f.src.filter(function(filepath) {
                return grunt.file.isFile(filepath);
            }).map(function(filepath) {
                if (options.cwd) {
                    var reg = new RegExp('^' + options.cwd + '/');
                    filepath = filepath.replace(reg,'');
                }
                return filepath;
            });
            console.log(files);
            styleGuide(files,options,done);
        });
    });
};
