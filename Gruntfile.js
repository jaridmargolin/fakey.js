module.exports = function(grunt) {

  // Browsers
  var browsers = [
    // {
    //   browserName: 'internet explorer',
    //   platform: 'VISTA',
    //   version: '9'
    // },
    // {
    //   browserName: 'internet explorer',
    //   platform: 'XP',
    //   version: '8'
    // },
    {
      browserName: "firefox",
      platform: "WIN8"
    },
    {
      browserName: "chrome",
      platform: "WIN8"
    },
    {
      browserName: "opera",
      platform: "WIN7"
    },
    {
      browserName: 'internet explorer',
      platform: 'WIN8',
      version: '10'
    }
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //
    // JSHINT
    //
    'jshint': {
      all: [
        'Gruntfile.js',
        'src/*.js'
      ],
      options: {
        force: true,
        // Bad line breaking before '?'.
        '-W014': true,
        // Expected a conditional expression and instead saw an assignment.
        '-W084': true,
        // Is better written in dot notation.
        '-W069': true
      }
    },

    //
    // CLEAN GFX
    //
    'clean': ['dist'],

    //
    // REQUIRE.JS
    //
    'requirejs': {
      compile: {
        options: {
          name: 'fakey',
          baseUrl: "src",
          out: 'dist/fakey.js',
          optimize: 'none',
          onBuildWrite: function(name, path, contents ) {
            return require('amdclean').clean(contents);
          },
          wrap: {
              startFile: ['src/tmpls/intro.js'],
              endFile: ['src/tmpls/outro.js']
          }
        }
      }
    },

    //
    // MINIFY JS
    //
    'uglify': {
      all: {
        src: 'dist/fakey.js',
        dest: 'dist/fakey.min.js'
      }
    },

    //
    // Server
    //
    'connect': {
      server: {
        options: {
          base: "",
          port: 9999
        }
      }
    },

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
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-saucelabs');

  // Tasks    
  grunt.registerTask('default', ['jshint', 'clean', 'requirejs', 'uglify']);
  grunt.registerTask('test', ['connect', 'saucelabs-mocha']);
};