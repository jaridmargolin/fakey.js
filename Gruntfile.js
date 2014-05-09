/*!
 * Gruntfile.js
 * 
 * Copyright (c) 2014 Jarid Margolin
 */


module.exports = function(grunt) {


// Load tasks
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

// Browsers
var browsers = [
  // Latest Versions
  { browserName: 'firefox', platform: 'WIN8' },
  { browserName: 'chrome', platform: 'WIN8' },
  // { browserName: 'opera', platform: 'WIN7' },

  // Internet Explorer
  { browserName: 'internet explorer', platform: 'WIN8', version: '10' },
  { browserName: 'internet explorer', platform: 'VISTA', version: '9' },
  { browserName: 'internet explorer', platform: 'XP', version: '8' }
];

// Config
grunt.initConfig({

  // --------------------------------------------------------------------------
  // PKG CONFIG
  // --------------------------------------------------------------------------
  'pkg': grunt.file.readJSON('package.json'),

  // --------------------------------------------------------------------------
  // JSHINT
  // --------------------------------------------------------------------------
  'jshint': {
    src: [
      'Gruntfile.js',
      'src/**/*.js',
      'test/**/*.js'
    ],
    build: [
      'dist/*.js',
      '!dist/*.min.js'
    ],
    options: {
      force: true,
      es3: true,
      // Bad line breaking before '?'.
      '-W014': true,
      // Expected a conditional expression and instead saw an assignment.
      '-W084': true,
      // Is better written in dot notation.
      '-W069': true
    }
  },

  // --------------------------------------------------------------------------
  // CLEAN (EMPTY DIRECTORY)
  // --------------------------------------------------------------------------
  'clean': ['lib'],

  // --------------------------------------------------------------------------
  // REQUIREJS BUILD
  // --------------------------------------------------------------------------
  'requirejs': {
    compile: {
      options: {
        name: 'fakey',
        baseUrl: 'src',
        out: 'dist/fakey.js',
        optimize: 'none',
        skipModuleInsertion: true,
        onBuildWrite: function(name, path, contents) {
          return require('amdclean').clean({
            code: contents,
            commentCleanName: 'amdclean-ignore',
            prefixMode: 'camelCase',
            escodegen: {
              format: {
                indent: { style: '  ' }
              }
            }
          });
        }
      }
    }
  },

  // --------------------------------------------------------------------------
  // WRAP JQUERY AND UMD
  // --------------------------------------------------------------------------
  'umd': {
    umd: {
      src: 'dist/fakey.js',
      template: 'src/tmpls/umd.hbs',
      objectToExport: 'fakey',
      globalAlias: 'fakey'
    }
  },

  // --------------------------------------------------------------------------
  // ADD BANNER
  // --------------------------------------------------------------------------
  'concat': {
    options: {
      banner: '/*!\n' +
        ' * v<%= pkg.version %>\n' +
        ' * Copyright (c) 2014 Jarid Margolin\n' +
        ' * fakey.js is open sourced under the MIT license.\n' +
        ' */ \n\n',
      stripBanners: true
    },
    umd: {
      src: 'dist/fakey.js',
      dest: 'dist/fakey.js'
    }
  },

  // --------------------------------------------------------------------------
  // MINIFY
  // --------------------------------------------------------------------------
  'uglify': {
    umd: {
      src: 'dist/fakey.js',
      dest: 'dist/fakey.min.js'
    }
  },

  // --------------------------------------------------------------------------
  // SERVER
  // --------------------------------------------------------------------------
  'connect': {
    test: {
      options: { base: "", port: 9999 }
    }
  },

  // --------------------------------------------------------------------------
  // TEST PLATFORM
  // --------------------------------------------------------------------------
  'saucelabs-mocha': {
    all: {
      options: {
        urls: ["http://127.0.0.1:9999/test/_runner.html"],
        build: process.env.TRAVIS_JOB_ID || '<%= pkg.version %>',
        tunnelTimeout: 5,
        concurrency: 3,
        browsers: browsers,
        testname: "fakey"
      }
    }
  },

  // --------------------------------------------------------------------------
  // TEST LOCAL
  // --------------------------------------------------------------------------
  'mocha_phantomjs': {
    all: ['test/_runner.html']
  }

});

// Tasks    
grunt.registerTask('default', ['jshint:src', 'clean', 'requirejs', 'umd', 'concat', 'uglify', 'jshint:build']);
grunt.registerTask('test-platform', ['default', 'connect:test', 'saucelabs-mocha']);
grunt.registerTask('test-local', ['default', 'mocha_phantomjs']);


};