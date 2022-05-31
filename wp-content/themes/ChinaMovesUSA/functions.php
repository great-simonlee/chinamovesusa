<?php 
    function cmu_files() {
        wp_enqueue_style('custom-google-font', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
        wp_enqueue_style('lato-google-font', '//fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
        wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
        wp_enqueue_style('cmu_main_styles', get_stylesheet_uri());
    };
    add_action('wp_enqueue_scripts', 'cmu_files');
?>