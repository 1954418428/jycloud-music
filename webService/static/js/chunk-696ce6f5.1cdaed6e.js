(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-696ce6f5"],{"09af":function(t,e,n){t.exports=n.p+"img/用户.a819ba08.png"},"1d19":function(t,e,n){},"408a":function(t,e,n){var o=n("e330");t.exports=o(1..valueOf)},"7bdd":function(t,e,n){t.exports=n.p+"img/歌单.ff022558.png"},"8f06":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"song-sheet-item-box",on:{mouseover:function(e){t.bofangBtnIsShow=!0},mouseleave:function(e){t.bofangBtnIsShow=!1}}},[o("router-link",{staticClass:"img-a",attrs:{to:"/playlist?id="+t.songSheetItem.id}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:(t.songSheetItem.picUrl||t.songSheetItem.coverImgUrl)+"?param=160y160",error:n("7bdd"),loading:n("7bdd")},expression:"{\n        src:\n          (songSheetItem.picUrl || songSheetItem.coverImgUrl) +\n          '?param=160y160',\n        error: require('@/assets/img/歌单.png'),\n        loading: require('@/assets/img/歌单.png')\n      }"}],staticClass:"song-sheet-img",attrs:{alt:""}}),o("router-link",{directives:[{name:"show",rawName:"v-show",value:t.bofangBtnIsShow,expression:"bofangBtnIsShow"}],staticClass:"bofang-btn",attrs:{to:"/playlist?id="+t.songSheetItem.id},on:{mouseover:function(e){t.bofangBtnIsShow=!0},mouseleave:function(e){t.bofangBtnIsShow=!1}}},[o("i",{staticClass:"iconfont icon-bofang"})])],1),o("div",{staticClass:"song-sheet-name"},[o("router-link",{attrs:{to:"/playlist?id="+t.songSheetItem.id}},[t._v(" "+t._s(t.songSheetItem.name)+" ")]),t.songSheetItem.creator?o("router-link",{attrs:{to:"/singer"}},[t._v(" by "+t._s(t.songSheetItem.creator.nickname)+" ")]):t._e()],1),o("span",{staticClass:"song-sheet-play-count"},[o("i",{staticClass:"iconfont icon-bofang"}),t._v(" "+t._s(t.parseCount(this.songSheetItem.playCount))+" ")])],1)},s=[],a=n("1da1"),i=(n("96cf"),{name:"",components:{},data:function(){return{bofangBtnIsShow:!1}},props:{songSheetItem:{type:Object,required:!0}},computed:{},watch:{},methods:{},beforeCreated:function(){},created:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){},deactivated:function(){}}),r=i,c=(n("a732"),n("2877")),l=Object(c["a"])(r,o,s,!1,null,"609d82e6",null);e["a"]=l.exports},a732:function(t,e,n){"use strict";n("fff2")},a9e3:function(t,e,n){"use strict";var o=n("83ab"),s=n("da84"),a=n("e330"),i=n("94ca"),r=n("6eeb"),c=n("1a2d"),l=n("7156"),u=n("3a9b"),f=n("d9b5"),d=n("c04e"),h=n("d039"),g=n("241c").f,p=n("06cf").f,m=n("9bf2").f,v=n("408a"),b=n("58a8").trim,y="Number",S=s[y],C=S.prototype,w=s.TypeError,_=a("".slice),I=a("".charCodeAt),k=function(t){var e=d(t,"number");return"bigint"==typeof e?e:x(e)},x=function(t){var e,n,o,s,a,i,r,c,l=d(t,"number");if(f(l))throw w("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=b(l),e=I(l,0),43===e||45===e){if(n=I(l,2),88===n||120===n)return NaN}else if(48===e){switch(I(l,1)){case 66:case 98:o=2,s=49;break;case 79:case 111:o=8,s=55;break;default:return+l}for(a=_(l,2),i=a.length,r=0;r<i;r++)if(c=I(a,r),c<48||c>s)return NaN;return parseInt(a,o)}return+l};if(i(y,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var N,D=function(t){var e=arguments.length<1?0:S(k(t)),n=this;return u(C,n)&&h((function(){v(n)}))?l(Object(e),n,D):e},P=o?g(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;P.length>E;E++)c(S,N=P[E])&&!c(D,N)&&m(D,N,p(S,N));D.prototype=C,C.constructor=D,r(s,y,D)}},aad1:function(t,e,n){"use strict";n("1d19")},acc7:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-sheet"},[n("div",{staticClass:"s-top"},[n("h3",[t._v("歌曲列表")]),n("span",[t._v(t._s(t.trackCount)+"首歌")]),t.playCount?n("div",[t._v(" 播放: "),n("strong",[t._v(t._s(t.playCount))]),t._v(" 次 ")]):t._e()]),n("div",{staticClass:"sheet-table-wrap"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:0==t.songs.length,expression:"songs.length == 0"}],ref:"sheettable",staticStyle:{width:"100%"},attrs:{data:t.songs,"element-loading-text":"拼命加载中",stripe:""},on:{"row-click":t.rowClick}},[n("el-table-column",{attrs:{label:"操作",width:t.c1},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"operation"},[n("span",[t._v(" "+t._s(e.$index+1))]),n("i",{staticClass:"iconfont icon-bofang",attrs:{title:"播放"},on:{click:function(n){return n.stopPropagation(),t.btnBf(e.$index)}}}),n("i",{staticClass:"iconfont icon-xiazai"})])]}}])}),n("el-table-column",{attrs:{label:"歌曲标题","show-overflow-tooltip":"",width:t.c2},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" "),e.row.mv?n("a",{staticStyle:{"font-size":"18px",position:"relative",top:"1px",color:"rgb(236, 65, 65)"},attrs:{href:"javascript:void(0)"},on:{click:function(n){return n.preventDefault(),t.gotoMv(e.row.mv)}}},[n("i",{staticClass:"iconfont icon-MV"})]):t._e()]}}])}),n("el-table-column",{attrs:{label:"时间",width:t.c3},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.formatTime(e.row.dt/1e3))+" ")]}}])}),n("el-table-column",{attrs:{label:"歌手",width:t.c4,"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.ar?n("div",t._l(e.row.ar,(function(e,o){return n("router-link",{key:e.id+o,attrs:{to:"/singer?id="+e.id}},[t._v(" "+t._s(0!=o?"|":"")+" "+t._s(e.name)+" ")])})),1):t._e()]}}])}),n("el-table-column",{attrs:{label:"专辑",width:t.c5,"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"/album?id="+e.row.al.id}},[t._v(" "+t._s(e.row.al.name)+" ")])]}}])}),t.c6IsShow?n("el-table-column",{attrs:{label:"次数",width:160,"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(" "+t._s(e.row.recordPlayCount)+" ")])]}}],null,!1,4166948044)}):t._e()],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.menuIsShow,expression:"menuIsShow"}],ref:"menu",staticClass:"menu"},[n("ul",[n("li",{on:{click:t.bofang}},[n("i",{staticClass:"iconfont icon-bofang"}),t._v(" 立即播放 ")]),n("li",{staticClass:"next-bofang",on:{click:t.nextBofang}},[n("i",{staticClass:"iconfont icon-bofang1"}),t._v(" 下一首播放 ")]),n("li",{on:{click:t.collectSongClicked}},[n("i",{staticClass:"iconfont icon-shoucang"}),t._v(" 收藏到歌单 ")]),t._m(0),t.isMeCreated?n("li",{on:{click:t.deleteSong}},[n("i",{staticClass:"iconfont icon-shanchu"}),t._v(" 从歌单中移除 ")]):t._e()])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("i",{staticClass:"iconfont icon-lianjie"}),t._v(" 复制链接 ")])}],a=n("5530"),i=(n("a9e3"),n("b0c0"),n("2f62")),r=n("fedc"),c=n("365c"),l={name:"",components:{},data:function(){return{menuIsShow:!1,currentIndex:-1}},props:{songs:{type:Array,required:!0},playCount:{type:Number},trackCount:{type:Number},isMeCreated:{type:Boolean,default:!1},c1:{type:Number,default:120},c2:{type:Number,default:188},c3:{type:Number,default:80},c4:{type:Number,default:150},c5:{type:Number,default:110},c6IsShow:{type:Boolean,default:!1}},computed:{},watch:{},methods:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(i["c"])("PlayerModule",["pause"])),Object(i["b"])("PlayerModule",["cutSongSheet","asyncUpdateIsLock","addNextSong","asyncUpdateIsLock"])),Object(i["b"])("CollectModule",["collectClicked"])),{},{rowClick:function(t,e,n){var o=n.clientX,s=n.clientY,a=this.$refs.menu;a.style.top=s+10+"px",a.style.left=o+"px",this.menuIsShow=!0;var i=this.getCurrentIndex(t,this.songs);this.currentIndex=i,console.log("rowClick",i)},NonTargetIsClicked:function(t){if(this.menuIsShow){var e=t.target,n=this.$refs.menu,o=document.getElementsByTagName("table")[1],s=Object(r["a"])(e,n,o);s||(this.menuIsShow=!1,this.currentIndex=-1)}},getCurrentIndex:function(t,e){var n=0;while(n<e.length){if(e[n].id==t.id)return n;n++}return-1},btnBf:function(t){this.currentIndex=t,this.bofang()},bofang:function(){this.cutSongSheet({songs:this.songs,currentIndex:this.currentIndex}),this.asyncUpdateIsLock({isLock:!0}),this.menuIsShow=!1,this.currentIndex=-1},nextBofang:function(){var t=this.songs[this.currentIndex];console.log(t),this.addNextSong({songs:[t]}),this.menuIsShow=!1,this.currentIndex=-1},bofangALL:function(){},gotoMv:function(t){console.log(t),this.pause(),this.$router.push({path:"/mv?id=".concat(t)}),this.asyncUpdateIsLock({isLock:!1})},collectSongClicked:function(){var t=this.songs[this.currentIndex];this.collectClicked({tracks:[t.id]}),this.menuIsShow=!1},deleteSong:function(){var t=this,e=this.songs[this.currentIndex],n=this.currentIndex;console.log(e),this.$confirm("确定从歌单中删除歌曲 《".concat(e.name,"》 ?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){c["c"].addOrDeleteSong({op:"del",pid:t.$route.query.id,tracks:e.id}).then((function(e){t.$emit("emitDeleteCreatedPlaylistSong",n),t.menuIsShow=!1,t.$message({type:"success",message:"删除成功!"}),t.catchStorage.removeCatchItem("playlistDetail:".concat(t.$route.query.id)),t.catchStorage.removeCatchItem("playlistSongs:".concat(t.$route.query.id))}))})).catch((function(){}))}}),beforeCreated:function(){},created:function(){document.addEventListener("click",this.NonTargetIsClicked)},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){document.removeEventListener("click",this.NonTargetIsClicked)},destroyed:function(){},activated:function(){},deactivated:function(){}},u=l,f=(n("aad1"),n("2877")),d=Object(f["a"])(u,o,s,!1,null,"d3415a1c",null);e["a"]=d.exports},ad67:function(t,e,n){},b5db:function(t,e,n){"use strict";n("ad67")},fc51:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"userhome-box"},[o("div",{staticClass:"userhome-wrap"},[o("div",{staticClass:"user-info-wrap"},[o("div",{staticClass:"user-img"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:t.userData.profile.avatarUrl+"?param=180y180",error:n("09af"),loading:n("09af")},expression:"{\n            src: userData.profile.avatarUrl + '?param=180y180',\n            error: require('@/assets/img/用户.png'),\n            loading: require('@/assets/img/用户.png')\n          }"}],attrs:{alt:""}})]),o("div",{staticClass:"user-info"},[o("h2",[o("span",{staticClass:"name"},[t._v(t._s(t.userData.profile.nickname))]),t.userData.profile.gender?o("span",{staticClass:"sex"},[1==t.userData.profile.gender?o("i",{staticClass:"iconfont icon-nan",staticStyle:{color:"rgb(38, 166, 228)"}}):o("i",{staticClass:"iconfont icon-nv",staticStyle:{color:"rgb(255, 181, 211)"}})]):t._e(),t.userData.level?o("span",{staticClass:"usertype"},[t._v("Lv"+t._s(t.userData.level))]):t._e()]),o("div",{staticClass:"user-desc"},[t._v("个人简介:"+t._s(t.userData.profile.signature))])])]),t.CreatedPlaylist.length?o("div",{staticClass:"user-record"},[o("h3",[t._v(" 听歌排行 "),o("span",{staticStyle:{"font-size":"14px","margin-right":"12px"}},[t._v("最近一周")]),o("span",{class:10==t.showCount?"count-active":"",on:{click:function(e){t.showCount=10}}},[t._v("10首")]),o("span",{class:50==t.showCount?"count-active":"",on:{click:function(e){t.showCount=50}}},[t._v("50首")]),o("span",{class:100==t.showCount?"count-active":"",on:{click:function(e){t.showCount=100}}},[t._v("100首")])]),o("div",[o("SongSheet",{staticStyle:{margin:"0 auto"},attrs:{songs:t.recordSongs.slice(0,t.showCount),playCount:0,trackCount:t.recordSongs.slice(0,t.showCount).length,c6IsShow:!0,c2:160,c3:120,c4:160,c5:160}})],1)]):o("div",{staticStyle:{"font-size":"24px","font-weight":"700"}},[t._v(" 正在努力加载数据！ ")]),t.CreatedPlaylist.length?o("div",{staticClass:"create-sheet"},[o("h3",[t._v(" "+t._s(t.isMe?"我":t.userData.profile.nickname+"-")+"创建的歌单("+t._s(t.CreatedPlaylist.length)+") ")]),o("ul",t._l(t.CreatedPlaylist,(function(t,e){return o("li",{key:t.id+"-"+e},[o("SongSheetItem",{attrs:{songSheetItem:t}})],1)})),0)]):t._e(),t.SubPlaylist.length?o("div",{staticClass:"collect-sheet"},[o("h3",[t._v(" "+t._s(t.isMe?"我":t.userData.profile.nickname+"-")+"收藏的歌单("+t._s(t.SubPlaylist.length)+") ")]),o("ul",t._l(t.SubPlaylist,(function(t,e){return o("li",{key:t.id+"-"+e},[o("SongSheetItem",{attrs:{songSheetItem:t}})],1)})),0)]):t._e()])])},s=[],a=n("5530"),i=(n("fb6a"),n("d3b7"),n("159b"),n("2f62")),r=n("8f06"),c=n("acc7"),l=n("365c"),u={name:"",components:{SongSheetItem:r["a"],SongSheet:c["a"]},data:function(){return{userData:{profile:{}},CreatedPlaylist:[],SubPlaylist:[],isMe:!1,recordSongs:[],showCount:10}},props:{},computed:Object(a["a"])({},Object(i["d"])("UserModule",["userInfo"])),watch:{"$route.query":{handler:function(){var t=this;if(this.$route.query.id){var e=this.$route.query.id;e==this.userInfo.userId&&(this.isMe=!0),this.CreatedPlaylist=[],this.SubPlaylist=[],l["h"].getUserDetail(e).then((function(n){t.userData=n;var o=t.userData.profile.playlistCount;l["c"].getUserPlayList(e,100).then((function(e){t.CreatedPlaylist=e.playlist.slice(0,o),t.SubPlaylist=e.playlist.slice(o,e.playlist.length)}))})).catch((function(t){})),l["h"].getUserRecord(e).then((function(e){e.weekData.forEach((function(e){e.song.recordPlayCount=e.playCount,t.recordSongs.push(e.song)}))}))}},immediate:!0}},methods:{},beforeCreated:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){},deactivated:function(){}},f=u,d=(n("b5db"),n("2877")),h=Object(d["a"])(f,o,s,!1,null,"8f904bae",null);e["default"]=h.exports},fedc:function(t,e,n){"use strict";e["a"]=function(t,e,n){return e.contains(t)||n.contains(t)}},fff2:function(t,e,n){}}]);
//# sourceMappingURL=chunk-696ce6f5.1cdaed6e.js.map