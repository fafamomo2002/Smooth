// when the dom is ready
jQuery(function($){
	// grab each slider (multiple supported)    
	////����C�ӷƶ�
	$('.cover-slider').each(function(){
		// find the slides in this slider
		//�b���ƶ������ۿO��
       	var $slides = $(this).find('.cover-slider__slide');
		// get the 0 based amount of slides
		//�q0�}�l�p��ۿO���ƶq
        var numSlides = $slides.length - 1;
		// incrementor
		//�W�q��
        var i = 0;
       
        // rotate slides
		//����ۿO��
       	var rotate = function(){
            // remove all sliding classes
			//�R���Ҧ��ư���
            $slides.removeClass('active inactive');
            // add inactive to the current slide
			//�N�L�Ī��K�[���e�ۿO��
            $slides.eq(i).addClass('inactive');
            // reset counter if last slide (so animates first one)
			//�p�G�̫�@�i�ۿO�����m�p�ƾ��]�]���ʵe�Ĥ@�i�^
            if(i == numSlides){
                i = -1;
            }
            // add active to incremented slide (next slide)
			//�N���ʲK�[��W�q�ۿO���]�U�@�i�ۿO���^
            $slides.eq(++i).addClass('active');
            // call this every few seconds
			//�C�j�X�����եΤ@��
           	var timer = window.setTimeout(rotate, 10000);
       	};
        // initialize the slider
		//��l�Ʒƶ�
       	rotate();
	});
});