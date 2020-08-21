window.addEventListener('load', function () {
    //1,获取元素
    var arrowl = document.querySelector('.arrow-l');
    var arrowr = document.querySelector('.arrow-r');
    var fous = document.querySelector('.fous');
    var fousWidth = fous.offsetWidth;
    //2，鼠标经过fous显示隐藏左右按钮
    //1），鼠标经过fous显示按钮
    fous.addEventListener('mouseenter', function () {

        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    fous.addEventListener('mouseleave', function () {
        //鼠标离开fous隐藏按钮
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
        // 每个四秒自动播放
        timer = setInterval(function () {
            arrowr.click();
        }, 4000)
    })
    //3，动态获取ol里的li--有几张图就会有几个li
    //获取fous里的ul ，ol
    var ul = fous.querySelector('ul');
    var ol = fous.querySelector('ol');
    for (var i = 0; i < ul.children.length; i++) {
        //创建li 
        var li = document.createElement('li');
        //纪录当前小圆圈索引号，通过自定义属性来做
        li.setAttribute('index', i);
        //把创建的li插入ol中
        ol.appendChild(li);

        //4,小圆圈的排他思想 可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            // 把所有的小li 清除 current 类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            //当前的小li 设置current 类名
            this.className = 'current';

            //5, 点击小圆圈，移动图片 当然移动的是 ul 
            // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li 的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把这个li 的索引号给 num
            num = index;
            // 当我们点击了某个小li 就要把这个li 的索引号给 circle
            circle = index;

            animate(ul, -index * fousWidth);
        })
    }
    //把ol中的第一个li设置类名current
    ol.children[0].className = 'current';

    //克隆第一张图片 放到ul的后面

    var frist = ul.children[0].cloneNode('ture');
    ul.appendChild(frist);
    //点击右侧按钮，图片滚动一张
    var num = 0;
    //circle  控制小圆圈的播放
    var circle = 0;
    //flag节流阀  目的：防止轮播图连续点击播放过快
    var flag = true;
    //点击右侧按钮做法
    arrowr.addEventListener('click', function () {
        if (flag) {
            flag = false;//关闭节流阀


            //如果走到了最后一张图片  此时 ul要快速复原left改为0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * fousWidth, function () {
                flag = true;
            });
            // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle++;
            // / 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            circlechange();
        }
    });

    //点击左侧按钮做法
    arrowl.addEventListener('click', function () {
        if (flag) {
            flag = false;//关闭节流阀

            if (num == 0) {
                num = ul.children.length - 1;

                ul.style.left = -num * fousWidth + 'px';
            }
            num--;
            animate(ul, -num * fousWidth, function () {
                flag = true
            });
            //  点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle--;
            // / 如果circle <0 说明第一张图片，则小圆圈要改为第4个小圆圈（3）
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circlechange();//调用函数
        }
    });
    function circlechange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    //自动播放轮播图
    var timer = setInterval(function () {
        arrowr.click();//手动掉用点击事件
    }, 4000)
})