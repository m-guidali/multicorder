(function(e){function o(o){for(var r,s,c=o[0],a=o[1],l=o[2],u=0,v=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);d&&d(o);while(v.length)v.shift()();return n.push.apply(n,l||[]),t()}function t(){for(var e,o=0;o<n.length;o++){for(var t=n[o],r=!0,c=1;c<t.length;c++){var a=t[c];0!==i[a]&&(r=!1)}r&&(n.splice(o--,1),e=s(s.s=t[0]))}return e}var r={},i={app:0},n=[];function s(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,o,t){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)s.d(t,r,function(o){return e[o]}.bind(null,r));return t},s.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=o,c=c.slice();for(var l=0;l<c.length;l++)o(c[l]);var d=a;n.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},1:function(e,o){},10:function(e,o){},11:function(e,o){},12:function(e,o){},13:function(e,o){},14:function(e,o){},2:function(e,o){},3:function(e,o){},4:function(e,o){},5:function(e,o){},"56d7":function(e,o,t){"use strict";t.r(o);t("e623"),t("e379"),t("5dc8"),t("37e1");var r=t("2b0e"),i=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-app",[t("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[t("div",{staticClass:"d-flex align-center"},[t("h1",[e._v("Multicorder Demo")])]),t("v-spacer"),t("v-btn",{attrs:{href:"https://github.com/bwinkers/multicorder/releases/latest",target:"_blank",text:""}},[t("span",{staticClass:"mr-2"},[e._v("Latest Release")]),t("v-icon",[e._v("mdi-open-in-new")])],1)],1),t("v-main",[t("v-row",{attrs:{justify:"center",align:"center"}},[t("v-col",{attrs:{cols:"12",sm:"4",border:"1"}},[t("MulticorderUI",{attrs:{videoTypes:["screen","camera"]}})],1)],1)],1)],1)},n=[],s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-container",{staticClass:"text-center  ma-0 pa-0"},[t("v-row",{staticClass:"text-center "},[t("v-col",{attrs:{cols:"12"}},[t("div",{staticClass:"videobox"},[t("Multicorder",{ref:"multicorder",attrs:{"video-source":e.videoSource,videoTypes:e.videoTypes,recorderMode:e.recorderMode},on:{error:e.onError,cameras:e.onCameras,"video-live":e.onVideoLive,"view-change":e.onViewChange,"new-recording":e.onNewRecording,"delete-recording":e.onDeleteRecording,"player-loaded":e.onPlayerLoaded}})],1),null==e.videoSource?t("v-select",{directives:[{name:"show",rawName:"v-show",value:"video"==e.view,expression:"view == 'video'"}],attrs:{items:e.videoSourceList,"return-object":!0,label:"Select video input"},model:{value:e.videoSource,callback:function(o){e.videoSource=o},expression:"videoSource"}}):e._e(),e.videoSource?t("div",{staticClass:"grey--text videobox",attrs:{align:"right","background-color":"black"}},[e._v(" "+e._s(e.videoSource.text)+" "),t("v-icon",{attrs:{color:"grey"},on:{click:e.videoClose}},[e._v("mdi-close-circle")])],1):e._e(),t("v-row",{directives:[{name:"show",rawName:"v-show",value:"videoPlayer"==e.view,expression:"view == 'videoPlayer'"}],staticClass:"text-center  mt-3 pt-0"},[t("v-col",{attrs:{cols:"auto",align:"left"}},[e.isPlayerMuted?e._e():t("v-icon",{staticClass:"mx-2",attrs:{large:"",color:"red"},on:{click:e.togglePlayerMuted}},[e._v("mdi-speaker")]),e.isPlayerMuted?t("v-icon",{staticClass:"mx-2",attrs:{large:""},on:{click:e.togglePlayerMuted}},[e._v("mdi-speaker-off")]):e._e()],1),t("v-col",{attrs:{align:"center"}},[t("v-btn",{staticClass:"mx-2",attrs:{fab:"","mdi-icon":"","x-small":"",light:""},on:{click:e.playRecording}},[t("v-icon",{attrs:{"x-large":"",color:"red"}},[e._v("mdi-play-circle")])],1),t("v-btn",{staticClass:"mx-2",attrs:{fab:"","mdi-icon":"","x-small":"",light:""},on:{click:e.downloadRecording}},[t("v-icon",{attrs:{"x-large":""}},[e._v("mdi-download-circle")])],1),t("v-btn",{staticClass:"mx-2",attrs:{fab:"","mdi-icon":"","x-small":"",light:""},on:{click:e.deleteRecording}},[t("v-icon",{attrs:{"x-large":"",color:"red"}},[e._v("mdi-delete-circle")])],1)],1),t("v-col",{attrs:{cols:"auto",align:"right"}},[t("v-icon",{attrs:{"x-large":"",color:"teal"},on:{click:e.videoSnapshot}},[e._v("mdi-camera")])],1)],1),t("v-row",{directives:[{name:"show",rawName:"v-show",value:"video"==e.view&&null!=e.videoSource,expression:"view == 'video' && videoSource != null"}]},[t("v-col",{attrs:{cols:"auto",align:"center"}},[e.isMuted?e._e():t("v-icon",{attrs:{large:"",color:"red"},on:{click:e.toggleMuted}},[e._v("mdi-microphone")]),e.isMuted?t("v-icon",{attrs:{large:""},on:{click:e.toggleMuted}},[e._v("mdi-microphone-off")]):e._e()],1),t("v-col",{attrs:{align:"center"}},[t("v-btn",{directives:[{name:"show",rawName:"v-show",value:"liveVideo"==e.controls,expression:"controls == 'liveVideo'"}],staticClass:"mx-2",attrs:{fab:"","mdi-icon":"","x-small":"",light:""},on:{click:e.videoRecord}},[t("v-icon",{attrs:{"x-large":"",color:"red"}},[e._v("mdi-record-circle")])],1),t("v-btn",{directives:[{name:"show",rawName:"v-show",value:"recordingVideo"==e.controls,expression:"controls == 'recordingVideo'"}],staticClass:"mx-2",attrs:{fab:"","mdi-icon":"","x-small":"",light:""},on:{click:e.videoStopRecording}},[t("v-icon",{attrs:{"x-large":"",color:"red"}},[e._v("mdi-stop-circle")])],1),e.isPaused?e._e():t("v-btn",{directives:[{name:"show",rawName:"v-show",value:"recordingVideo"==e.controls,expression:"controls == 'recordingVideo'"}],staticClass:"mx-2",attrs:{fab:"","mdi-icon":"","x-small":"",light:""},on:{click:e.pause}},[t("v-icon",{attrs:{"x-large":""}},[e._v("mdi-pause-circle")])],1),e.isPaused?t("v-btn",{directives:[{name:"show",rawName:"v-show",value:"recordingVideo"==e.controls,expression:"controls == 'recordingVideo'"}],staticClass:"mx-2",attrs:{fab:"","mdi-icon":"","x-small":"",dark:""},on:{click:e.resume}},[t("v-icon",{attrs:{"x-large":""}},[e._v("mdi-pause-circle")])],1):e._e()],1),t("v-col",{attrs:{cols:"auto",align:"center"}},[t("v-icon",{attrs:{"x-large":"",color:"teal"},on:{click:e.videoSnapshot}},[e._v("mdi-camera")])],1)],1),t("v-row",{directives:[{name:"show",rawName:"v-show",value:"snapshot"==e.view,expression:"view == 'snapshot'"}]},[t("v-col",[t("v-btn",{staticClass:"mx-2",attrs:{fab:"","mdi-icon":"","x-small":"",light:""},on:{click:e.closeSnapshot}},[t("v-icon",{attrs:{"x-large":"",color:"red"}},[e._v("mdi-close-circle")])],1),t("v-btn",{staticClass:"mx-2",attrs:{fab:"","mdi-icon":"","x-small":"",light:""},on:{click:e.snapshotDownload}},[t("v-icon",{attrs:{"x-large":""}},[e._v("mdi-download-circle")])],1)],1)],1)],1)],1)],1)},c=[],a=t("1da1"),l=(t("96cf"),t("a434"),t("d299")),d={name:"MulticorderUI",components:{Multicorder:l["a"]},props:{videoTypes:{type:Array,default:function(){return["camera","screen"]}},recorderMode:{type:String,default:"single"}},data:function(){return{controls:null,videoSource:null,videoSourceList:[],isPaused:!1,isPlayerPaused:!1,isMuted:!0,isPlayerMuted:!0,view:"video",recordings:[]}},methods:{onError:function(e){console.log("Error emitted",e)},onCameras:function(e){console.log("Available cameras",e),this.videoSourceList=this.$refs.multicorder.listFromCameras(e)},onVideoLive:function(){this.controls="liveVideo"},onViewChange:function(e){this.view=e},onNewRecording:function(e){this.recordings.push(e),"single"==this.recorderMode&&this.loadRecording(0)},onDeleteRecording:function(e){this.recordings.splice(e,1),"single"==this.recorderMode&&(this.controls="liveVideo")},onPlayerLoaded:function(){},videoRecord:function(){this.controls="recordingVideo",this.$refs.multicorder.startVideoRecording()},videoSnapshot:function(){this.view="snapshot",this.$refs.multicorder.videoSnapshot()},videoClose:function(){this.$refs.multicorder.stopVideo(),this.view="video",this.controls="liveVideo",this.videoSource=null},videoStopRecording:function(){this.$refs.multicorder.stopRecording(),this.resume()},resume:function(){this.isPaused=!1,this.$refs.multicorder.resume()},pause:function(){this.isPaused=!0,this.$refs.multicorder.pause()},closeSnapshot:function(){this.$refs.multicorder.closeSnapshot()},snapshotDownload:function(){this.$refs.multicorder.downloadSnapshot()},downloadRecording:function(e){"single"===this.recorderMode&&(e=0),this.$refs.multicorder.downloadRecording(e)},deleteRecording:function(e){"single"===this.recorderMode&&(e=0),this.$refs.multicorder.deleteRecording(e)},loadRecording:function(e){var o=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.$refs.multicorder.loadRecording(e);case 2:case"end":return t.stop()}}),t)})))()},playRecording:function(){this.isPlayerPaused=!1,this.$refs.multicorder.playRecording()},pausePlayer:function(){this.isPlayerPaused=!0,this.$refs.multicorder.pausePlayer()},resumePlayer:function(){this.isPlayerPaused=!1,this.$refs.multicorder.resumePlayer()},deletePlayerRecording:function(){this.$refs.multicorder.deletePlayerRecording()},closePlayer:function(){this.$refs.multicorder.closePlayer()},toggleMuted:function(){this.isMuted=!this.isMuted},togglePlayerMuted:function(){this.isPlayerMuted=!this.isPlayerMuted}}},u=d,v=(t("a1c9"),t("2877")),f=t("6544"),m=t.n(f),p=t("8336"),h=t("62ad"),g=t("a523"),w=t("132d"),x=t("0fd9b"),b=t("b974"),y=Object(v["a"])(u,s,c,!1,null,"624d4a5e",null),P=y.exports;m()(y,{VBtn:p["a"],VCol:h["a"],VContainer:g["a"],VIcon:w["a"],VRow:x["a"],VSelect:b["a"]});var _={name:"App",components:{MulticorderUI:P},data:function(){return{}}},M=_,S=(t("f6ff"),t("7496")),V=t("40dc"),k=t("f6c4"),R=t("2fa4"),C=Object(v["a"])(M,i,n,!1,null,"38351c42",null),$=C.exports;m()(C,{VApp:S["a"],VAppBar:V["a"],VBtn:p["a"],VCol:h["a"],VIcon:w["a"],VMain:k["a"],VRow:x["a"],VSpacer:R["a"]});var j=t("f309");r["a"].use(j["a"]);var O=new j["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:O,render:function(e){return e($)}}).$mount("#app")},6:function(e,o){},7:function(e,o){},"730f":function(e,o,t){},"7b39":function(e,o,t){},8:function(e,o){},9:function(e,o){},a1c9:function(e,o,t){"use strict";t("7b39")},f6ff:function(e,o,t){"use strict";t("730f")}});
//# sourceMappingURL=app.079aacaa.js.map