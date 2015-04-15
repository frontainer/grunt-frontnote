/*
 * grunt-frontnote
 * https://github.com/frontainer/grunt-frontnote
 *
 * Copyright (c) 2014 frontainer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        frontNote: {
            all: [
                './sample/**/*.scss'
            ],
            options: {
                out: './docs',
                verbose: false,
                clear: true
            }
        }
    });
    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');
    // By default, lint and run all tests.
    grunt.registerTask('default', ['frontNote']);
};