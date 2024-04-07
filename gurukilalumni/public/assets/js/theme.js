function BannerSlider () {
    var banner = $(".banner-one");
    if (banner.length) {
      banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
        height: '40%',
        pagination: false,
        navigation: true,
        thumbnails: false,
        playPause: false,
        pauseOnClick: false,
        autoPlay:true,
        hover: false,
        overlayer: true,
        loader: 'none',
        minHeight: '600px',
        time: 4000,
      });
    };
  }
  
  
  // Theme-banner slider 
  function BannerSliderTwo () {
    var bannertwo = $(".banner-two");
    if (bannertwo.length) {
      bannertwo.camera({ //here I declared some settings, the height and the presence of the thumbnails 
        height: '40%',
        pagination: false,
        navigation: true,
        thumbnails: false,
        playPause: false,
        pauseOnClick: false,
        autoPlay:true,
        hover: false,
        overlayer: true,
        loader: 'none',
        minHeight: '700px',
        time: 4000,
      });
    };
  }
  