<?php get_header(); ?>
<section class="reg-body">
  <div class="reg-cont">
    <div class="reg-main">
      <div class="reg-main-wid">
        <div class="reg-title">
          <p class="reg-title-text">发布房源</p>
          <p class="reg-subtitle-text">RELEASE LISTINGS</p>
        </div>
        <div>
          <div class="reg-que-cont">
            <label class="rq-title" for="rq-city">房源类型：</label>
            <select class="rq-select" name="" id="rq-city">
              <option disabled selected value="" hidden>选择房源类型</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </select>
          </div>
          <div class="reg-que-cont">
            <p class="rq-title">区域：</p>
            <select class="rq-select" style="margin-right: 16px;" name="" id="rq-area">
              <option disabled selected value="" hidden>选择区域</option>
              <option value="newyork" map-point="new york">纽约</option>
              <option value="newjersey" map-point="new jersey">新泽西</option>
              <option value="boston" map-point="boston">波士顿</option>
            </select>
          </div>
          <div class="reg-que-cont">
            <label class="rq-title" for="">ZipCode：</label><input class="rq-text" type="text" id="rq-zip">
          </div>
          <div class="reg-que-cont">
            <label class="rq-title" for="">地址：</label>
            <input class="rq-text rq-address" id="rq-address" type="text" placeholder="请输入详细地址">
            <!-- <input class="rq-checkbox" type="checkbox" name="" id="reg-hiddenAddress"><label class="reg-hiddenAddress-text" for="reg-hiddenAddress">隐藏详细地址</label> -->
          </div>
          <div class="reg-que-cont">
            <div class="reg-mapbox" id="maptestDiv"></div>
            
            <img style="display:none;" class="reg-loc" src="<?php echo get_theme_file_uri('/assets/img/example/detailLoc.png') ?>" alt="example">
          </div>
          <div class="reg-que-cont">
            <label class="rq-title" for="">标题：</label>
            <input class="rq-text rq-address" type="text" id="rq-title">
          </div>
          <div class="reg-que-cont">
            <label class="rq-title" for="">租金：</label>
            <input class="rq-text" type="number" step="10" min="0" id="rq-price">
          </div>
          <div class="reg-que-cont">
            <label class="rq-title" for="rq-type">房型：</label>
            <select class="rq-select" name="" id="rq-type">
              <option disabled selected value="" hidden>选择房型</option>
              <option value="studio">Studio</option>
              <option value="1b1b">一室一卫</option>
              <option value="1b2b">一室两卫</option>
              <option value="2b1b">两室一卫</option>
              <option value="2b2b">两室两卫</option>
              <option value="3b1b">三室一卫</option>
              <option value="3b2b">三室两卫</option>
              <option value="4b2b">四室两卫</option>
              <option value="etc">其他</option>
            </select>
          </div>
          <div class="reg-que-cont">
            <label class="rq-title" for="rq-length">租期：</label>
            <select class="rq-select" name="" id="rq-length">
              <option disabled selected value="" hidden>选择入住月份</option>
              <option value="1m">1个月</option>
              <option value="2m">2个月</option>
              <option value="3m">3个月</option>
              <option value="4m">4个月</option>
              <option value="5m">5个月</option>
              <option value="6m">6个月</option>
              <option value="7m">7个月</option>
              <option value="8m">8个月</option>
              <option value="9m">9个月</option>
              <option value="10m">10个月</option>
              <option value="11m">11个月</option>
              <option value="12m">12个月</option>
              <option value="1y">一年以上</option>
            </select>
          </div>
          <div class="reg-que-cont">
            <label class="rq-title" for="rq-movdate">入住时间：</label>
            <input class="rq-date" type="date" id="rq-movdate">
          </div>
          <div class="reg-que-cont">
            <label class="rq-title" for="rq-contact">联系方式：</label>
            <input class="rq-text" type="text" id="rq-contact" placeholder="Ex) Email or Phone number">
          </div>
          <div class="reg-que-cont" style="align-items: start;">
            <p class="rq-title" style="padding-top: 6px;">房屋配置：</p>
            <div class="rq-fea-cont">
              <div>
                <input class="rq-feaame-checkbox rq-fea" type="checkbox" id="rq-fea-washer" data-input="washer">
                <label class="rq-feaame-label" for="rq-fea-washer"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Washer.png') ?>" alt="">洗衣机</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-fea" type="checkbox" id="rq-fea-dryer" data-input="dryer">
                <label class="rq-feaame-label" for="rq-fea-dryer"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Dryer.png') ?>" alt="">烘干机</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-fea" type="checkbox" id="rq-fea-dish" data-input="dishwasher">
                <label class="rq-feaame-label" for="rq-fea-dish"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Dishwasher.png') ?>" alt="">洗碗机</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-fea" type="checkbox" id="rq-fea-balcony" data-input="balcony">
                <label class="rq-feaame-label" for="rq-fea-balcony"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Balcony.png') ?>" alt="">阳台</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-fea" type="checkbox" id="rq-fea-ac" data-input="ac">
                <label class="rq-feaame-label" for="rq-fea-ac"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/AC.png') ?>" alt="">中央空调</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-fea" type="checkbox" id="rq-fea-kitair" data-input="kitair">
                <label class="rq-feaame-label" for="rq-fea-kitair"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Rangehood.png') ?>" alt="">抽油烟机</label>
              </div>
            </div>
          </div>
          <div class="reg-que-cont" style="align-items: start;">
            <p class="rq-title" style="padding-top: 6px;" >大楼设施：</p>
            <div class="rq-ame-cont">
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-concierge" data-input="concierge">
                <label class="rq-feaame-label" for="rq-ame-concierge"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Concierge.png') ?>" alt="">24h门卫</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-gym" data-input="gym">
                <label class="rq-feaame-label" for="rq-ame-gym"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Gym.png') ?>" alt="">健身房</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-lobby" data-input="lobby">
                <label class="rq-feaame-label" for="rq-ame-lobby"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Lounge.png') ?>" alt="">Lobby</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-elevator" data-input="elevator">
                <label class="rq-feaame-label" for="rq-ame-elevator"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Elevator.png') ?>" alt="">电梯</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-pet" data-input="pet">
                <label class="rq-feaame-label" for="rq-ame-pet"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/PetFriendly.png') ?>" alt="">宠物友好</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-garage" data-input="garage">
                <label class="rq-feaame-label" for="rq-ame-garage"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Garage.png') ?>" alt="">车库/车位</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-view" data-input="view">
                <label class="rq-feaame-label" for="rq-ame-view"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/RooftopDeck.png') ?>" alt="">景观露台</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-laundry" data-input="laundry">
                <label class="rq-feaame-label" for="rq-ame-laundry"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/LaundryRoom.png') ?>" alt="">洗衣房</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-basket" data-input="basket">
                <label class="rq-feaame-label" for="rq-ame-basket"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Basketball.png') ?>" alt="">篮球场</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-bbq" data-input="bbq">
                <label class="rq-feaame-label" for="rq-ame-bbq"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/BBQ.png') ?>" alt="">BBQ</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-biliard" data-input="biliard">
                <label class="rq-feaame-label" for="rq-ame-biliard"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Billiard.png') ?>" alt="">台球场</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-golf" data-input="golf">
                <label class="rq-feaame-label" for="rq-ame-golf"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Golf.png') ?>" alt="">高尔夫</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-kitchen" data-input="kitchen">
                <label class="rq-feaame-label" for="rq-ame-kitchen"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Kitchen.png') ?>" alt="">公用厨房</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-pool" data-input="pool">
                <label class="rq-feaame-label" for="rq-ame-pool"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Pool.png') ?>" alt="">泳池</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-tennis" data-input="tennis">
                <label class="rq-feaame-label" for="rq-ame-tennis"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Tennis.png') ?>" alt="">网球场</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-movie" data-input="movie">
                <label class="rq-feaame-label" for="rq-ame-movie"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Theater.png') ?>" alt="">观影室</label>
              </div>
              <div>
                <input class="rq-feaame-checkbox rq-ame" type="checkbox" id="rq-ame-wifi" data-input="wifi">
                <label class="rq-feaame-label" for="rq-ame-wifi"><img src="<?php echo get_theme_file_uri('/assets/img/icon/detail/white/Wifi.png') ?>" alt="">公共无线网</label>
              </div>
            </div>
          </div>
          <div class="reg-que-cont" style="align-items: start;">
            <label class="rq-title" style="padding-top: 6px;"for="">详细信息：</label>
            <textarea class="rq-textarea" name="" id="rq-desc"></textarea>
          </div>
          <br>
          <br>
          <hr>
          <div class="reg-que-cont" style="align-items: start;">
            <label class="rq-title" style="padding-top: 6px;" for="">上传照片：</label>
            <div class="rq-pic-cont">
              <!-- <input type="file" multiple> -->

              <input type="file" id="inputFiles" style="display: none;" multiple>
              <label class="text-unit input-files" for="inputFiles">选择照片</label>
              <!-- <div class="text-unit" ><p>选择照片</p></div> -->
              <div class="preview-container" id="previewPicDiv"></div>
              <!-- <div class="text-unit" ><img src="<?php echo get_theme_file_uri('/assets/img/example/listing5.png') ?>"></div>
              <div class="text-unit" ><img src="<?php echo get_theme_file_uri('/assets/img/example/listing5.png') ?>"></div>
              <div class="text-unit" ><img src="<?php echo get_theme_file_uri('/assets/img/example/listing5.png') ?>"></div>
              <div class="text-unit" ><img src="<?php echo get_theme_file_uri('/assets/img/example/listing5.png') ?>"></div>
              <div class="text-unit" ><img src="<?php echo get_theme_file_uri('/assets/img/example/listing5.png') ?>"></div> -->
              <!-- <div style="width: 100%; height: 100%; display: flex; align-items: center;">
                <button class="reg-img-submit-btn"><span>保存照片</span></button>
              </div> -->
            </div>
          </div>
          <br>
          <p class="reg-img-inst">( 第一张为首图，最多可上传20张，长按图片拖动可修改封面图片 )</p>
          <br>

          <br>
          <!-- <input type="file" multiple>> -->
          <hr>
        </div>
        <div class="reg-submit-cont">
          <button class="reg-submit-btn" id="regSubmitBtn">立即发布</button>
        </div>
      </div>
    </div>
  </div>
  <img class="reg-wallpaper" src="<?php echo get_theme_file_uri('/assets/img/banner/member-banner.jpg') ?>">
</section>
<?php get_footer(); ?>
