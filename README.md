# grunt-frontnote

> StyleGuide Generator [FrontNote](https://github.com/frontainer/frontnote)  Plugin for Grunt.

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

Options supported by [frontnote](https://github.com/frontainer/frontnote)


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

