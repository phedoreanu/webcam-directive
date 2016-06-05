
module.exports = function (grunt) {
  'use strict';

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var component = require('./bower.json'),
    version = component.version;

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist',
    appVersion: version
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    connect: {
      test: {
        options: {
          port: 9000,
          // Change this to '0.0.0.0' to access the server from outside.
          hostname: 'localhost',
          base: 'app'
        }
      }
    },
    clean: {
      gen: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/scripts',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp',
      dist: '<%= yeoman.dist %>'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        'test/spec/{,*/}*.js'
      ]
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: false
      },
      ci: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      },
      watch: {
        configFile: 'karma.conf.js',
        autoWatch: true
      }
    },
    concat: {
      dist: {
        files: {
          '<%= yeoman.dist %>/scripts/scripts.js': [
            '.tmp/scripts/{,*/}*.js',
            '<%= yeoman.app %>/scripts/{,*/}*.js'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/webcam.min.js': [
            '<%= yeoman.dist %>/scripts/scripts.js'
          ],
        }
      }
    }
  });

  grunt.registerTask('test', [
    'jshint',
    'clean:server',
    'connect:test',
    'karma:unit'
  ]);

  grunt.registerTask('ci', [
    'jshint',
    'clean:server',
    'connect:test',
    'karma:ci'
  ]);

  grunt.registerTask('watch', [
    'clean:server',
    'connect:test',
    'karma:watch'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'clean:gen',
    'test',
    'concat',
    'uglify',
    'clean:gen'
  ]);

  grunt.registerTask('default', ['test']);
};
