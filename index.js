var ppt= {
    $btn_l : $('.btn_l'),
    nowIndex : 0,
    init : function () {
        this.bindEvent();
        this.show();
        this.go();
    },
    bindEvent: function (){
        var _this = this;
        $('.btn_l').on('click', function() {
            if(_this.nowIndex != 0){
                _this.nowIndex--;
                _this.show();
            }else{
                _this.nowIndex=2;
                _this.show();
            }
           
        })
        $('.btn_r').on('click', function() {
            if(_this.nowIndex != 2){
                _this.nowIndex++;
                _this.show();
            }else{
                _this.nowIndex = 0;
                _this.show();
            }

        })
    },
    show: function () {
        $('.ppt_wra').removeClass('active');
        $('.ppt_wra').eq(this.nowIndex).addClass('active');
    },
    go: function () {
    	var _this = this;
    	setInterval(function () {
    		if(_this.nowIndex != 0){
                _this.nowIndex--;
                _this.show();
            }else{
                _this.nowIndex=2;
                _this.show();
            }
    	},3000)
    }
}
ppt.init();