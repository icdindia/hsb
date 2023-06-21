module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // auto prefixer

        // CSS Minify task


        // WebP conversion task
        cwebp: {
          dynamic: {
              options: {
                  // Quality of WebP images: 
                  q: 75 
              }, 
              files: [{
                  // Output a new WebP file for every source image:
                   expand: true, 
                   // Where to find the images we'd like to be converted: 
                   cwd: 'assets/images/B1/', 
                   // The file formats to convert: 
                   src: ['**/*.{png,jpg,gif}'], 
                   // Where to place the resulting WebP files: 
                   dest: 'assets/images/B1'
              }] 
          }
      },

      //this is the watch
      watch : {
        
        img:{
          files : ["assets/images/B1/**/*.{png,jpg,gif}"], 
          tasks : ["cwebp"]
        },

      },
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('');
  
    // Default task(s).
    // grunt.registerTask('run', function(){
    //     console.log('test');
    // });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-browserify');

    // Minify CSS
    // grunt.loadNpmTasks('grunt-contrib-cssmin');


    require('load-grunt-tasks')(grunt);

    // grunt.loadNpmTasks('grunt-autoprefixer');
    // Run the task when we type "grunt dev" in to the terminal
    grunt.registerTask('dev', ['cwebp:dynamic']);

    // grunt.registerTask('auto', ['autoprefixer']);

    // Default task(s).
    grunt.registerTask('check', ['watch']);

  
  };