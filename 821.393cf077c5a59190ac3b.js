(self.webpackChunkyoutube_search=self.webpackChunkyoutube_search||[]).push([[821],{821:(e,t,i)=>{"use strict";i.r(t),i.d(t,{VideoPlayerModule:()=>N});var a=i(1116),s=i(1690),n=i(5366),r=i(5959),o=i(8512),l=i(878),h=i(1784),d=i(8470),p=i(5024),y=i(9996);function u(e,t,i){return i?u(e,t).pipe((0,y.U)(e=>(0,d.k)(e)?i(...e):i(e))):new h.y(i=>{const a=(...e)=>i.next(1===e.length?e[0]:e);let s;try{s=e(a)}catch(n){return void i.error(n)}if((0,p.m)(t))return()=>t(a,s)})}var c=i(1305),g=i(6541),_=i(1906),b=i(611),v=i(6238),S=i(6599),P=i(5416),f=i(6598),w=i(4689),m=i(3982),k=i(9829),C=i(7e3);function R(...e){return t=>{let i;return"function"==typeof e[e.length-1]&&(i=e.pop()),t.lift(new x(e,i))}}class x{constructor(e,t){this.observables=e,this.project=t}call(e,t){return t.subscribe(new I(e,this.observables,this.project))}}class I extends k.L{constructor(e,t,i){super(e),this.observables=t,this.project=i,this.toRespond=[];const a=t.length;this.values=new Array(a);for(let s=0;s<a;s++)this.toRespond.push(s);for(let s=0;s<a;s++)this.add((0,C.D)(this,t[s],void 0,s))}notifyNext(e,t,i){this.values[i]=t;const a=this.toRespond;if(a.length>0){const e=a.indexOf(i);-1!==e&&a.splice(e,1)}}notifyComplete(){}_next(e){if(0===this.toRespond.length){const t=[e,...this.values];this.project?this._tryProject(t):this.destination.next(t)}}_tryProject(e){let t;try{t=this.project.apply(this,e)}catch(i){return void this.destination.error(i)}this.destination.next(t)}}var V=i(2023),A=i(8720),T=i(9764),E=i(6673);class Q{constructor(e){this.predicate=e}call(e,t){return t.subscribe(new L(e,this.predicate))}}class L extends E.L{constructor(e,t){super(e),this.predicate=t,this.skipping=!0,this.index=0}_next(e){const t=this.destination;this.skipping&&this.tryCallPredicate(e),this.skipping||t.next(e)}tryCallPredicate(e){try{const t=this.predicate(e,this.index++);this.skipping=Boolean(t)}catch(t){this.destination.error(t)}}}var Y=i(3835);const j=["youtubeContainer"];let z=(()=>{class e{constructor(e,t){this._ngZone=e,this._youtubeContainer=new r.xQ,this._destroyed=new r.xQ,this._playerChanges=new o.X(void 0),this._videoId=new o.X(void 0),this._height=new o.X(390),this._width=new o.X(640),this._startSeconds=new o.X(void 0),this._endSeconds=new o.X(void 0),this._suggestedQuality=new o.X(void 0),this._playerVars=new o.X(void 0),this.ready=this._getLazyEmitter("onReady"),this.stateChange=this._getLazyEmitter("onStateChange"),this.error=this._getLazyEmitter("onError"),this.apiChange=this._getLazyEmitter("onApiChange"),this.playbackQualityChange=this._getLazyEmitter("onPlaybackQualityChange"),this.playbackRateChange=this._getLazyEmitter("onPlaybackRateChange"),this._isBrowser=(0,a.NF)(t)}get videoId(){return this._videoId.value}set videoId(e){this._videoId.next(e)}get height(){return this._height.value}set height(e){this._height.next(e||390)}get width(){return this._width.value}set width(e){this._width.next(e||640)}set startSeconds(e){this._startSeconds.next(e)}set endSeconds(e){this._endSeconds.next(e)}set suggestedQuality(e){this._suggestedQuality.next(e)}get playerVars(){return this._playerVars.value}set playerVars(e){this._playerVars.next(e)}ngOnInit(){if(!this._isBrowser)return;let e=(0,l.of)(!0);if(!window.YT||!window.YT.Player){const t=new r.xQ;this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback&&this._existingApiReadyCallback(),this._ngZone.run(()=>t.next(!0))},e=t.pipe((0,b.q)(1),(0,v.O)(!1))}const t=function(e,t,i,a,s,n,r){const o=(0,c.aj)([t,n]).pipe(R((0,c.aj)([a,s])),(0,y.U)(([e,t])=>{const[i,a]=e,[s,n]=t;return i?{videoId:i,playerVars:a,width:s,height:n}:void 0}));return(0,c.aj)([e,o,(0,l.of)(r)]).pipe((0,g.z)(function(...e){let t=null;return"function"==typeof e[e.length-1]&&(t=e.pop()),1===e.length&&(0,d.k)(e[0])&&(e=e[0].slice()),i=>i.lift.call((0,T.D)([i,...e]),new c.Ms(t))}(i),(h=([e,t])=>!t,e=>e.lift(new Q(h))),(0,y.U)(([e])=>e)),(0,V.R)(U,void 0),(0,A.x)());var h}(this._youtubeContainer,this._videoId,e,this._width,this._height,this._playerVars,this._ngZone).pipe((0,S.b)(e=>{this._playerChanges.next(e)}),(i=e=>{B(e)||e.destroy()},(0,m.zg)(e=>e?B(e)?(0,l.of)(e):new h.y(t=>{let a=!1,s=!1;const n=e=>{s=!0,a||(e.target.removeEventListener("onReady",n),t.next(e.target))};return e.addEventListener("onReady",n),()=>{a=!0,s||i(e)}}).pipe((0,b.q)(1),(0,v.O)(void 0)):(0,l.of)(void 0))),(0,P.R)(this._destroyed),(0,f.O)(new r.xQ));var i;t.subscribe(e=>{this._player=e,e&&this._pendingPlayerState&&this._initializePlayer(e,this._pendingPlayerState),this._pendingPlayerState=void 0}),function(e,t,i){(0,c.aj)([e,t,i]).subscribe(([e,t,i])=>e&&e.setSize(t,i))}(t,this._width,this._height),function(e,t){(0,c.aj)([e,t]).subscribe(([e,t])=>e&&t&&e.setPlaybackQuality(t))}(t,this._suggestedQuality),function(e,t,i,a,s,n){const r=(0,c.aj)([i,a]).pipe((0,y.U)(([e,t])=>({startSeconds:e,endSeconds:t}))),o=r.pipe(D(e,e=>!!e&&!function(e){const t=e.getPlayerState();return t!==YT.PlayerState.UNSTARTED&&t!==YT.PlayerState.CUED}(e))),l=t.pipe(D(e,(e,t)=>!!e&&e.videoId!==t)),h=e.pipe(D((0,c.aj)([t,r]),([e,t],i)=>!(!i||e==i.videoId&&!t.startSeconds&&!t.endSeconds)));(0,_.T)(h,l,o).pipe(R((0,c.aj)([e,t,r,s])),(0,y.U)(([e,t])=>t),(0,P.R)(n)).subscribe(([e,t,i,a])=>{t&&e&&(e.videoId=t,e.cueVideoById(Object.assign({videoId:t,suggestedQuality:a},i)))})}(t,this._videoId,this._startSeconds,this._endSeconds,this._suggestedQuality,this._destroyed),t.connect()}createEventsBoundInZone(){return{}}ngAfterViewInit(){this._youtubeContainer.next(this.youtubeContainer.nativeElement)}ngOnDestroy(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._playerChanges.complete(),this._videoId.complete(),this._height.complete(),this._width.complete(),this._startSeconds.complete(),this._endSeconds.complete(),this._suggestedQuality.complete(),this._youtubeContainer.complete(),this._playerVars.complete(),this._destroyed.next(),this._destroyed.complete()}playVideo(){this._player?this._player.playVideo():this._getPendingState().playbackState=YT.PlayerState.PLAYING}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=YT.PlayerState.PAUSED}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=YT.PlayerState.CUED}seekTo(e,t){this._player?this._player.seekTo(e,t):this._getPendingState().seek={seconds:e,allowSeekAhead:t}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():!!this._pendingPlayerState&&!!this._pendingPlayerState.muted}setVolume(e){this._player?this._player.setVolume(e):this._getPendingState().volume=e}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&null!=this._pendingPlayerState.volume?this._pendingPlayerState.volume:0}setPlaybackRate(e){if(this._player)return this._player.setPlaybackRate(e);this._getPendingState().playbackRate=e}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackRate?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(this._isBrowser&&window.YT)return this._player?this._player.getPlayerState():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackState?this._pendingPlayerState.playbackState:YT.PlayerState.UNSTARTED}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_initializePlayer(e,t){const{playbackState:i,playbackRate:a,volume:s,muted:n,seek:r}=t;switch(i){case YT.PlayerState.PLAYING:e.playVideo();break;case YT.PlayerState.PAUSED:e.pauseVideo();break;case YT.PlayerState.CUED:e.stopVideo()}null!=a&&e.setPlaybackRate(a),null!=s&&e.setVolume(s),null!=n&&(n?e.mute():e.unMute()),null!=r&&e.seekTo(r.seconds,r.allowSeekAhead)}_getLazyEmitter(e){return this._playerChanges.pipe((0,w.w)(t=>t?u(i=>{t.addEventListener(e,i)},i=>{try{t.removeEventListener&&t.removeEventListener(e,i)}catch(a){}}):(0,l.of)()),e=>new h.y(t=>e.subscribe({next:e=>this._ngZone.run(()=>t.next(e)),error:e=>t.error(e),complete:()=>t.complete()})),(0,P.R)(this._destroyed))}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.R0b),n.Y36(n.Lbi))},e.\u0275cmp=n.Xpm({type:e,selectors:[["youtube-player"]],viewQuery:function(e,t){if(1&e&&n.Gf(j,5),2&e){let e;n.iGM(e=n.CRH())&&(t.youtubeContainer=e.first)}},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",playerVars:"playerVars",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(e,t){1&e&&n._UZ(0,"div",null,0)},encapsulation:2,changeDetection:0}),e})();function U(e,[t,i,a]){if(e&&i&&e.playerVars!==i.playerVars)e.destroy();else{if(!i)return void(e&&e.destroy());if(e)return e}const s=a.runOutsideAngular(()=>new YT.Player(t,i));return s.videoId=i.videoId,s.playerVars=i.playerVars,s}function B(e){return"getPlayerStatus"in e}function D(e,t){return(0,g.z)(R(e),(0,Y.h)(([e,i])=>t(i,e)),(0,y.U)(([e])=>e))}let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({}),e})(),X=!1;const M=[{path:"",component:(()=>{class e{constructor(e,t){this.route=e,this.router=t,this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.videoId=this.route.snapshot.queryParams.videoId}ngOnInit(){if(!X){const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.body.appendChild(e),X=!0}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s.gz),n.Y36(s.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-video-player"]],decls:2,vars:1,consts:[[1,"player-wrapper"],[3,"videoId"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"youtube-player",1),n.qZA()),2&e&&(n.xp6(1),n.Q6J("videoId",t.videoId))},directives:[z],styles:[".player-wrapper[_ngcontent-%COMP%]{padding-top:20px;width:100%;display:flex;justify-content:center}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.Bz.forChild(M)],s.Bz]}),e})(),N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.ez,Z,O]]}),e})()}}]);