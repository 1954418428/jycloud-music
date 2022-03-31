(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47fc3411"],{"071b":function(e,t,r){},"1abe":function(e,t,r){"use strict";r("071b")},"71ba":function(e,t,r){e.exports=r.p+"img/qr_guide.fe695c03.png"},d40d:function(e,t,r){e.exports=r.p+"img/qr-login.bf6856b7.png"},e6ef:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-box"},[n("div",{staticClass:"login-wrap"},[n("div",{staticClass:"lg"},[n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.loginModel,expression:"loginModel == 1"}],staticClass:"phone-login-wrap"},[n("div",{staticClass:"login-title"},[e._v("用户登入")]),n("div",{staticClass:"login-form"},[n("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.loginFormRules}},[n("el-form-item",{attrs:{prop:"phone"}},[n("el-input",{staticStyle:{height:"48px","line-height":"48px"},attrs:{type:"text",placeholder:"请输入登入手机号",size:"large"},model:{value:e.loginForm.phone,callback:function(t){e.$set(e.loginForm,"phone",t)},expression:"loginForm.phone"}},[n("i",{staticClass:"iconfont icon-yonghu",attrs:{slot:"prefix"},slot:"prefix"})])],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{staticStyle:{height:"48px","line-height":"48px"},attrs:{type:"password","show-password":"",placeholder:"请输入登入密码",size:"large"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[n("i",{staticClass:"iconfont icon-shuyi_guansuo",attrs:{slot:"prefix"},slot:"prefix"})])],1),n("el-form-item",[n("el-button",{staticStyle:{"margin-top":"8px",width:"100%"},attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("loginForm")}}},[e._v("登录")])],1)],1)],1),n("div",{staticClass:"item-list"},[n("a",{attrs:{href:"/#"}},[e._v("注册用户")]),n("a",[e._v("忘记密码")]),n("a",[e._v("登入遇到问题")]),n("router-link",{attrs:{to:"/"}},[e._v("主页")])],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:2==e.loginModel,expression:"loginModel == 2"}],staticClass:"qr-login-wrap"},[e._m(0),n("div",{staticClass:"qr-wrap"},[n("div",{staticClass:"t"},[e._v("扫码登入")]),n("div",{staticClass:"qr-img"},[n("img",{attrs:{src:e.qr.base64,alt:""}}),e.qr.isExpire?n("div",{staticClass:"qr-isExpire"},[n("div",[n("span",[e._v(" 二维码已经失效 ")]),n("br"),n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.checkQRLogin.apply(null,arguments)}}},[e._v("点击刷新")])])]):e._e()]),e._m(1)]),n("div",{staticClass:"update-btn"},[n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.checkPhoneLogin.apply(null,arguments)}}},[e._v("选择其他登入方式")])])]),n("img",{directives:[{name:"show",rawName:"v-show",value:1==e.loginModel,expression:"loginModel == 1"}],staticClass:"qr-login",attrs:{src:r("d40d"),alt:"二维码登入"},on:{click:e.checkQRLogin}})])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"qr_guide-wrap"},[n("img",{attrs:{src:r("71ba"),alt:""}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"b"},[e._v(" 使用"),r("a",{attrs:{href:"https://music.163.com/#/download"}},[e._v("网易云音乐APP")]),e._v("扫码登入 ")])}],i=r("1da1"),a=r("5530"),s=(r("96cf"),r("d9e2"),r("ac1f"),r("00b4"),r("d3b7"),r("2f62")),c=r("365c"),l={name:"Login",components:{},data:function(){var e=function(e,t,r){""===t?r(new Error("请填写登入手机号")):/^1[3456789]\d{9}$/.test(t)?r():r(new Error("您输入的手机号格式错误"))},t=function(e,t,r){""===t?r(new Error("请填写登入密码")):t.length<8?r(new Error("密码长度不能小于8位")):r()};return{loginModel:1,loginForm:{phone:"13142211138",password:"",captcha:""},loginFormRules:{phone:[{validator:e,required:!0,trigger:"blur"}],password:[{validator:t,required:!0,trigger:"blur"}]},qr:{unikey:"",base64:"",isExpire:!0},fromPath:""}},props:{},computed:{},watch:{},beforeRouteEnter:function(e,t,r){r((function(e){}))},methods:Object(a["a"])(Object(a["a"])({},Object(s["c"])("UserModule",["updateUserInfo","updateUserState"])),{},{checkQRLogin:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.initQR();case 2:r=t.sent,r?(e.loginModel=2,e.qr.isExpire=!1,e.checkQR(2e3)):console.log("二维码初始化错误");case 4:case"end":return t.stop()}}),t)})))()},checkPhoneLogin:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.QRTimer&&clearInterval(e.QRTimer),e.loginModel=1;case 2:case"end":return t.stop()}}),t)})))()},checkQR:function(e){var t=this;console.log("等待用户扫码！"),this.QRTimer=setInterval((function(){c["f"].checkQRState(t.qr.unikey).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(r),803!=r.code){e.next=10;break}return console.log(r.cookie),e.next=5,c["h"].getUserAccountInfo(r.cookie);case 5:return n=e.sent,t.updateUserInfo({profile:n.profile}),t.updateUserState({userState:{isLogin:!0,cookie:r.cookie}}),t.$router.push("/"),e.abrupt("return");case 10:if(800!=r.code){e.next=14;break}return t.qr.isExpire=!0,clearInterval(t.QRTimer),e.abrupt("return");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),e)},initQR:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){c["f"].getQRKey().then((function(t){return e.qr.unikey=t.data.unikey,c["f"].createQR(t.data.unikey)})).then((function(r){e.qr.base64=r.data.qrimg,t(!0)})).catch((function(e){console.log(e),r(!1)}))})));case 1:case"end":return t.stop()}}),t)})))()},handleSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e?c["f"].login(t.loginForm).then((function(e){console.log(e),200==e.code?(t.updateUserInfo({profile:e.profile}),t.updateUserState({userState:{isLogin:!0,cookie:e.cookie}}),t.$router.push("/")):(console.log(e.code),t.$message({message:"密码错误！",type:"error"}))})).catch((function(e){console.log(e),t.$message({message:"账号不存在！",type:"error"})})):t.$message({message:"请输入正确格式的账号与密码！",type:"error"})}))},a:function(){c["f"].getLoginStatus().then((function(e){console.log("登入状态:",e)}))}}),beforeCreated:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){this.QRTimer&&clearInterval(this.QRTimer)},destroyed:function(){},activated:function(){},deactivated:function(){}},u=l,p=(r("1abe"),r("2877")),f=Object(p["a"])(u,n,o,!1,null,"6dd573d6",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-47fc3411.9e9b9ded.js.map