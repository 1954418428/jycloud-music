(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3605bf74"],{"092d":function(t,e,n){},"09af":function(t,e,n){t.exports=n.p+"img/用户.a819ba08.png"},"12b5":function(t,e,n){},"1a6a":function(t,e,n){t.exports=n.p+"img/歌手.5ef1abd6.png"},2824:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mv-box"},[i("div",{staticClass:"mv-wrap"},[i("div",{staticClass:"left-wrap"},[i("div",{staticClass:"singer-content"},[i("div",{staticClass:"head"},[i("i",{staticClass:"iconfont icon-13maikefeng-2"}),i("h2",[t._v(t._s(t.artist.name))])]),i("div",{staticClass:"singer-img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:t.artist.cover+"?param=640y300",error:n("d411"),loading:n("d411")},expression:"{\n              src: artist.cover + '?param=640y300',\n              error: require('@/assets/img/歌手详情.jpg'),\n              loading: require('@/assets/img/歌手详情.jpg')\n            }"}],attrs:{alt:""}})]),i("ul",{staticClass:"mn"},[i("li",[i("router-link",{attrs:{to:"/singer?id="+t.singerId,"active-class":"mn-active",exact:""}},[t._v("热门作品")])],1),i("li",[i("router-link",{attrs:{to:"/singer/allalbum?id="+t.singerId,"active-class":"mn-active"}},[t._v("所有专辑")])],1),i("li",[i("router-link",{attrs:{to:"/singer/allmv?id="+t.singerId,"active-class":"mn-active"}},[t._v("相关mv")])],1),i("li",[i("router-link",{attrs:{to:"/singer/singerdesc?id="+t.singerId,"active-class":"mn-active"}},[t._v("艺人介绍")])],1)]),i("div",{staticClass:"a-count"},[i("div",[t._v("单曲数："+t._s(t.artist.musicSize))]),i("div",[t._v("专辑数："+t._s(t.artist.albumSize))]),i("div",[t._v("视频数："+t._s(t.artist.mvSize))])])]),i("keep-alive",[i("router-view",{attrs:{artist:t.artist}})],1)],1),i("div",{staticClass:"right-wrap"},[i("div",{staticClass:"similar-singer"},[i("div",{staticClass:"similar-head"},[t._v("相似歌手")]),i("ul",{staticClass:"sm-list"},t._l(t.simiArtist.slice(0,9),(function(e){return i("li",{key:e.id},[i("router-link",{attrs:{to:"/singer?id="+e.id}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.picUrl+"?param=70y70",error:n("1a6a"),loading:n("1a6a")},expression:"{\n                  src: artist.picUrl + '?param=70y70',\n                  error: require('@/assets/img/歌手.png'),\n                  loading: require('@/assets/img/歌手.png')\n                }"}],attrs:{alt:""}}),i("span",[t._v(t._s(e.name))])])],1)})),0)])])])])},s=[],a=n("1da1"),o=(n("96cf"),n("a78c")),r=n("c109e"),c=n("365c"),m={name:"",components:{Replay:o["a"],Comment:r["a"]},data:function(){return{singerId:0,artist:{},simiArtist:[]}},props:{},computed:{},watch:{"$route.query":{handler:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$route.query.id?(t.singerId=t.$route.query.id,c["d"].getSingerDetail(t.singerId).then((function(e){t.artist=e.data.artist})),c["d"].getSimiSinger(t.singerId).then((function(e){t.simiArtist=e.artists}))):console.log("错误 无歌手 id");case 1:case"end":return e.stop()}}),e)})))()},immediate:!0}},methods:{},beforeCreated:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){},deactivated:function(){}},u=m,d=(n("4088"),n("2877")),l=Object(d["a"])(u,i,s,!1,null,"45da4946",null);e["default"]=l.exports},4088:function(t,e,n){"use strict";n("7f2f")},"5a0b":function(t,e,n){"use strict";n("092d")},7382:function(t,e,n){"use strict";n("12b5")},"7f2f":function(t,e,n){},a78c:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"replyBox",staticClass:"reply-item-box",attrs:{id:"reply-box"}},[i("div",{staticStyle:{"text-align":"center","margin-right":"8px"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:t.userInfo.avatarUrl,error:n("09af"),loading:n("09af")},expression:"{\n        src: userInfo.avatarUrl,\n        error: require('@/assets/img/用户.png'),\n        loading: require('@/assets/img/用户.png')\n      }"}],staticClass:"user-img",style:{height:t.size+"px",width:t.size+"px"},attrs:{alt:""}}),i("div",{staticClass:"user-name"},[t._v(" "+t._s(t.userInfo.nickname||"用户名")+" ")])]),i("div",{staticStyle:{width:"100%"}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"input-conntent",attrs:{rows:"3",placeholder:t.commentQueryData.msg},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),i("span",{staticClass:"btn",on:{click:t.sendComment}},[t._v(" 发表评论 ")]),i("span",{directives:[{name:"show",rawName:"v-show",value:2==t.commentQueryData.t,expression:"commentQueryData.t == 2"}],staticClass:"btn",staticStyle:{"margin-left":"10px","background-color":"#999"},on:{click:t.deleteCommentId}},[t._v(" 取消回复 ")])])])},s=[],a=n("5530"),o=n("2f62"),r=n("365c"),c={name:"ReplyItem",components:{},data:function(){return{}},props:{size:{default:60}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(o["d"])("UserModule",["userState","userInfo"])),Object(o["d"])("CommentModule",["commentQueryData"])),{},{content:{get:function(){return this.$store.state.CommentModule.commentQueryData.content},set:function(t){this.updateContent(t)}}}),watch:{},methods:Object(a["a"])(Object(a["a"])({},Object(o["c"])("CommentModule",["updateContent","deleteCommentId"])),{},{sendComment:function(){var t=this;this.userState.isLogin?this.commentQueryData.content?r["f"].comment({t:this.commentQueryData.t,type:this.commentQueryData.type,id:this.commentQueryData.id,content:this.commentQueryData.content,commentId:this.commentQueryData.commentId}).then((function(e){if(console.log(e),200==e.code){t.$message({message:"评论成功!",type:"success"});var n=[];if(e.comment.beRepliedUser&&e.comment.beRepliedUser.userId){var i={};i.beRepliedCommentId=t.commentQueryData.beRepliedCommentId,i.content=t.commentQueryData.rc,i.user=e.comment.beRepliedUser,n.push(i)}var s=e.comment.commentId,a=e.comment.content,o=e.comment.time,r=e.comment.user,c={beReplied:n,commentId:s,content:a,liked:!1,likedCount:0,time:o,user:r};t.$emit("emitAddComment",c),t.deleteCommentId()}else t.$message({message:"评论太频繁,请稍后再评论!",type:"warning"})})):this.$message({message:"请输入评论内容",type:"warning"}):this.$confirm("您未登入！是否跳转登入界面？","提示").then((function(){t.$router.push({path:"/login"})})).catch((function(){}))},move:function(){var t=this.$refs.replyBox;window.scrollTo(0,t.offsetTop-200)}}),beforeCreated:function(){},created:function(){this.$eventBus.$on("move",this.move)},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){},deactivated:function(){}},m=c,u=(n("5a0b"),n("2877")),d=Object(u["a"])(m,i,s,!1,null,"a14e7ae8",null);e["a"]=d.exports},c109e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"comment-item-box",style:t.comment.commentId?"min-height: 80px;":""},[t.comment.commentId?n("img",{staticClass:"user-img",attrs:{src:t.comment.user.avatarUrl,alt:""}}):t._e(),n("div",{staticClass:"right-box",style:t.comment.commentId?"border-bottom: 1px dashed  rgb(0, 0, 0,0.5);":""},[n("router-link",{staticClass:"user-name",attrs:{to:"/user/home?id="+t.comment.user.userId}},[t._v(t._s(t.comment.user.nickname))]),n("div",{staticClass:"comment-content"},[t._v(" "+t._s(t.comment.content)+" ")]),t.comment.beReplied&&0!=t.comment.beReplied.length?n("div",[n("Comment",{staticStyle:{"background-color":"rgb(240, 240, 240)",padding:"0 4px"},attrs:{comment:t.comment.beReplied[0]}})],1):t._e(),t.comment.commentId?n("div",{staticClass:"right-bottom-box"},[t.comment.time?n("span",{staticClass:"comment-time"},[t._v(t._s(t.moment(parseInt(t.comment.time)).format("YYYY/MM/DD HH:mm:ss")))]):t._e(),n("span",{staticClass:"comment-liked-count"},[n("i",{staticClass:"iconfont icon-dianzan"}),t._v(t._s(t.comment.likedCount))]),n("span",{staticStyle:{cursor:"pointer"},on:{click:t.replyIsChecked}},[t._v("回复")])]):t._e()],1)])])},s=[],a=n("5530"),o=n("2f62"),r={name:"Comment",components:{},data:function(){return{}},props:{comment:{type:Object,required:!0}},computed:Object(a["a"])({},Object(o["d"])("UserModule",["userState"])),watch:{},methods:Object(a["a"])(Object(a["a"])({},Object(o["c"])("CommentModule",["updateCommentId"])),{},{replyIsChecked:function(){var t=this;this.userState.isLogin?(this.updateCommentId({commentId:this.comment.commentId,nickname:this.comment.user.nickname,rc:this.comment.content,beRepliedCommentId:this.comment.beReplied.length?this.comment.beReplied[0].beRepliedCommentId:0}),this.$eventBus.$emit("move")):this.$confirm("您未登入！是否跳转登入界面？","提示",{customClass:"b"}).then((function(){t.$router.push({path:"/login"})})).catch((function(){}))}}),beforeCreated:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){},deactivated:function(){}},c=r,m=(n("7382"),n("2877")),u=Object(m["a"])(c,i,s,!1,null,"de61f676",null);e["a"]=u.exports},d411:function(t,e,n){t.exports=n.p+"img/歌手详情.ea4311d9.jpg"}}]);
//# sourceMappingURL=chunk-3605bf74.e237bc76.js.map