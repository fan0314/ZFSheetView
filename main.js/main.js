require('UIButton,UIImage,UIBarButtonItem');
defineClass('DConfirmOrderViewController', {
    viewDidLoad: function() {
        self.super().viewDidLoad();

            self.setCustomTitle("确认订单");
            self.setAutomaticallyAdjustsScrollViewInsets(NO);

            self.loadData();
            self.registerCell();
            
            console.log('mian.js 开始')
            
            var btn = require('UIButton').alloc().initWithFrame({x:0, y:100, width:300, height:50})
            btn.setTitle_forState('这个按钮是通过JSPatch动态添加上去的啊', 0)
            btn.addTarget_action_forControlEvents(self, "handleBtn:", 1 << 6)
            btn.setBackgroundColor(require('UIColor').grayColor())
            self.view().addSubview(btn)
            
            },
            
        handleBtn: function(sender) {
            console.log('这是动态添加的按钮响应事件')
        },
            
});
