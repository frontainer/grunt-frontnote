/*
 * grunt-frontnote
 * https://github.com/frontainer/grunt-frontnote
 *
 * Copyright (c) 2014 frontainer
 */

'use strict';

var FrontNote = require('frontnote');

module.exports = function (grunt) {
    grunt.registerMultiTask('frontNote', 'StyleGuide Generator for Grunt', function () {
        var done = this.async(),
            options = this.options();
        var files = [];
        this.files.forEach(function (f) {
            // filepathのマッピング
            var filteredFiles = f.src.filter(function(filepath) {
                return grunt.file.isFile(filepath);
            }).map(function(filepath) {
               return filepath;
            });
            files = files.concat(filteredFiles);
        });
        var note = new FrontNote(options);
        note.render(files,done);
    });
};
