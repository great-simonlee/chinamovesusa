<?php get_header(); ?>
<section class="reg-body">
  <div class="reg-cont">
    <div class="reg-main">
      <div class="reg-title">
        <p>发布房源</p>
        <p>POST LISTING</p>
      </div>
      <div>
        <div>
          <label for="">发布类型：</label>
          <select name="" id="">
            <option disabled selected value style="display:none"></option>
            <option value="">纽约</option>
            <option value="">波士顿</option>
          </select>
        </div>
        <div>
          <label for="">地址：</label>
          <input type="text">
          <input type="checkbox" name="" id="reg-hiddenAddress"><label for="reg-hiddenAddress">隐藏详细地址</label>
        </div>
        <div>
          <p>区域：</p>
          <select name="" id="">
            <option disabled selected value style="display:none"></option>
            <option value="">纽约</option>
            <option value="">波士顿</option>
          </select>
          <select name="" id="">
            <option disabled selected value style="display:none"></option>
            <option value="">纽约</option>
            <option value="">波士顿</option>
          </select>
        </div>
        <div>
          <label for="">ZipCode：</label><input type="text">
        </div>
        <div>
          <img class="reg-loc" src="<?php echo get_theme_file_uri('/assets/img/example/detailLoc.png') ?>" alt="example">
        </div>
        <div>
          <label for="">标题</label>
          <input type="text">
        </div>
        <div>
          <label for="">租金</label>
          <input type="text">
        </div>
        <div>
          <label for="">房型</label>
          <input type="text">
        </div>
        <div>
          <label for="">租期</label>
          <input type="text">
        </div>
        <div>
          <label for="">入住时间</label>
          <input type="text">
        </div>
        <div>
          <label for="">联系方式</label>
          <input type="text">
        </div>
        <div>
          <h4>房屋配置</h4>
          <div style="display:flex;">
            <div>
              <input type="checkbox" name="" id="">
              <label for="">洗衣机</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">烘干机</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">中央空调</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">洗碗机</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">抽油烟机</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">全景落地窗</label>
            </div>
          </div>
        </div>
        <div>
          <h4>大楼设施</h4>
          <div style="display:flex;">
            <div>
              <input type="checkbox" name="" id="">
              <label for="">洗衣机</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">烘干机</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">中央空调</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">洗碗机</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">抽油烟机</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">全景落地窗</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">洗衣机</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">烘干机</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">中央空调</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">洗碗机</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">抽油烟机</label>
            </div>
            <div>
              <input type="checkbox" name="" id="">
              <label for="">全景落地窗</label>
            </div>
          </div>
        </div>
        <div>
          <label for="">详细信息</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  </div>
  <img class="reg-wallpaper" src="<?php echo get_theme_file_uri('/assets/img/banner/member-banner.jpg') ?>">
</section>
<?php get_footer(); ?>
