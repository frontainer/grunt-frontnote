# grunt-frontnote

> StyleGuide Generator StyleNote  Plugin for Grunt.

## Getting Started
This plugin requires 

* [Grunt](http://gruntjs.com/) `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. 

Once you're familiar with that process, you may install this plugin with this command:

```js
grunt.loadNpmTasks('grunt-frontnote');
```

## The "frontNote" task

### Overview
In your project's Gruntfile, add a section named `frontNote` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  frontNote: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      files: [
        // Target files path.
      ]
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.overview
Type: `String`
Default value: `__dirname + '/styleguide.md'`

StyleGuide overview file's path.
Overview file is required Markdown format. 

#### options.template
Type: `String`
Default value: `__dirname + '/template/index.html'`

StyleGuide template path. 

#### options.out
Type: `String`
Default value: `./guide`

Directory in which to generate a style guide.

#### options.includeAssetPath
Type: `String`
Default value: `assets/**/*`

The path of the file you want to copy the generated directory.

#### options.css
Type: `String|Array`
Default value: `./style.css`

Path of CSS that you want to read in HTML. In the array or string.

#### options.script
Type: `String|Array`
Default value: `null`

Path of JS that you want to read in HTML. In the array or string.

#### options.verbose
Type: `Boolean`
Default value: `false`

Display a detailed log.


### Usage Examples
	frontNote: {
            options: {
                out: './doc',
                template: './my-template',
                overview: './overview.md',
                includePath: 'assets/**/*'
            },
            dev: {
                options: {
                },
                files: [
                	'/path/to/**/*.css',
                	'/path/to/**/*.sass',
                	'/path/to/**/*.less'
                ]
            }
        }

