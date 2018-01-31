<!-- 封装原生js -->
倒计时调用方式
han.countDown = '2018/1/26 10:55:00';
盒子
<div class="countDown"></div>

URL参数获取
han.getQueryString('han');

随机色
han.bgcolor();

获取浏览器本地存储
han.getStorage(key)

设置浏览器本地存储
han.setStorage(key, value)

打乱对象方式   <!-- 传一个对象数组 -->
han.shuffle(me.list)  

随机数  (n - m)的随机范围
han.rndNum(5,15)

生成指定位数的随机整数  b个数 (n - m)的随机范围 （填小于10的值）
han.randomNum(5,5,9)

显示每周星期三的10点抽奖倒计时
han.cardslide();
盒子
<div class="countdownOnWednesday"></div>

千位分隔符 s要分割的数值 n保留的小数位数
han.function(s,n)

toast 弹窗
han.toast('弹窗的数据')
盒子
<div class="toast-wrap">
    <span class="toast-msg"></span>
</div>
