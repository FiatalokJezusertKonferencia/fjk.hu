'use strict';

const _ = require('lodash');

module.exports = function(grunt) {

  const config = { pkg: grunt.file.readJSON('./package.json') };

  const loadConfigs = function(path) {
    const configs = {};
    grunt.file.recurse(path, function(abspath) {
      _.extend(configs, require('./' + abspath));
    });
    return configs;
  };

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('tasks');

  _.extend(config, loadConfigs('tasks/options'));
  _.extend(config, {
    watch: {
      files: ['./src/**/*'],
      tasks: ['default']
    }
  });

  grunt.initConfig(config);

};
