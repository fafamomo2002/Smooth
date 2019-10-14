// when the dom is ready
jQuery(function($){
	// grab each slider (multiple supported)    
	////抓取每個滑塊
	$('.cover-slider').each(function(){
		// find the slides in this slider
		//在此滑塊中找到幻燈片
       	var $slides = $(this).find('.cover-slider__slide');
		// get the 0 based amount of slides
		//從0開始計算幻燈片數量
        var numSlides = $slides.length - 1;
		// incrementor
		//增量器
        var i = 0;
       
        // rotate slides
		//旋轉幻燈片
       	var rotate = function(){
            // remove all sliding classes
			//刪除所有滑動類
            $slides.removeClass('active inactive');
            // add inactive to the current slide
			//將無效的添加到當前幻燈片
            $slides.eq(i).addClass('inactive');
            // reset counter if last slide (so animates first one)
			//如果最後一張幻燈片重置計數器（因此動畫第一張）
            if(i == numSlides){
                i = -1;
            }
            // add active to incremented slide (next slide)
			//將活動添加到增量幻燈片（下一張幻燈片）
            $slides.eq(++i).addClass('active');
            // call this every few seconds
			//每隔幾秒鐘調用一次
           	var timer = window.setTimeout(rotate, 10000);
       	};
        // initialize the slider
		//初始化滑塊
       	rotate();
	});
});