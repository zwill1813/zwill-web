window.onload = function () {
    //各个正则表达式
    var regtel = /^1[3|5|7|8|9]\d{9}$/;//手机号码
    var regqq = /^[1-9]\d{4,}$/;//qq
    var regnc = /^[\u4e00-\u9fa5]{3,8}$/;//昵称
    var regmsg = /^\d{6}$/;//短信验证
    var regpwd = /^[a-zA-Z0-9]{6,18}$/;//密码

    //获取元素
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    //调用函数
    regexg(tel, regtel);
    regexg(qq, regqq);
    regexg(nc, regnc);
    regexg(msg, regmsg);
    regexg(pwd, regpwd);
    regexg(tel, regtel);
    //封装一公共的函数
    function regexg(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确 ';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 你输入有误;请重新输入 ';
            }
        }

    };
    //确认密码需要单独验证  判断是否与输入密码一致即可
    surepwd.onblur = function () {
        if (surepwd.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确 ';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 密码输入不一致 ';
        }
    }
}