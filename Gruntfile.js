module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //
    // JSHINT
    //
    jshint: {
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
    clean: ['dist'],

    //
    // REQUIRE.JS
    //
    requirejs: {
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
    uglify: {
      all: {
        src: 'dist/fakey.js',
        dest: 'dist/fakey.min.js'
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Tasks    
  grunt.registerTask('default', ['jshint', 'clean', 'requirejs', 'uglify']);
};