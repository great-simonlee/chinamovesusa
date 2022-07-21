<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php wp_head();?>
        <!-- <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' /> -->
    </head>
    <body <?php body_class();?>>
    <nav class="gnav" id="gnav">
      <section class="gnav-bar">
        <a href="<?php echo site_url('/') ?>" class="gnav-title"><img class="gnav-logo" src="<?php echo get_theme_file_uri('/assets/img/logo/china moves logo(white w_ trans)_937x97.png') ?>" alt="ChinaMovesUSA"></a>
        <ul class="gnav-ul">
          <li><a href="/">首页</a></li>
          <li><a href="/rent">租房</a></li>
          <li><a href="/roommate">找室友</a></li>
          <li><a href="/team">团队</a></li>
          <li><a href="/aboutus">关于我们</a></li>
          <li><a href="/register">发布房源</a></li>
        </ul>
        <div class="login-signup">
          <a href="/member-login">登陆</a>
          <a href="/member-signup" class="gnav-signup">注册</a>
        </div>
      </section>
    </nav>
    <nav class="m-header">
      <div class="mh-space"></div>
      <div class="mh-nav">
        <div class="mh-city">
          <img class="mh-loc-img" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-location.png') ?>" alt="ChinaMovesUSA">
          <p>选择城市</p>
          <img class="mh-dtri-img" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-downtri.png') ?>" alt="ChinaMovesUSA">
        </div>
        <img class="mh-logo-img" src="<?php echo get_theme_file_uri('/assets/img/logo/china moves logo(white w_ trans)_937x97.png') ?>" alt="ChinaMovesUSA">
        <div class="mh-menu">
          <img class="mh-menu-img" src="<?php echo get_theme_file_uri('/assets/img/mobile/m-menu.png') ?>" alt="ChinaMovesUSA">
        </div>
      </div>
    </nav>

