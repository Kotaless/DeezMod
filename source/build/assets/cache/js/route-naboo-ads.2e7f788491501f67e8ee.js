(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[4569],{GQUU:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Pe});var a=s("q1tI"),r=s("TRpf"),n=s("X6oL"),o=s("juqV"),i=s("PMuG"),d=s("axbb"),l=s("FuY1"),u=s("fPrZ"),c=s("Vd8Q"),p=s("WKgy");class h extends a.Component{constructor(...e){super(...e),this.state={}}static getDerivedStateFromProps(e){const t=e.id?`_${e.id}`:"";let s=c.default.get("smartAds");const{type:r}=e,n={top:s.formatId.northBanner,bottom:s.formatId.southBanner,interstitial:s.formatId.interstitial,wallpaper:s.formatId.hpto,audio:s.formatId.audioBanner,sponsoredPlaylist:s.formatId.sponsoredPlaylist},o=(0,u.xj)(e.shownFormatIds,n[r])?{display:"none"}:null,i={top:a.createElement("div",{className:"ads ads-top",style:o},a.createElement("div",{id:`sas_${s.formatId.northBanner}${t}`})),bottom:a.createElement("div",{className:"ads ads-bottom ads-bottom-alone",style:o},a.createElement("div",{id:`sas_${s.formatId.southBanner}${t}`})),interstitial:a.createElement("div",{id:`sas_${s.formatId.interstitial}${t}`,style:o}),wallpaper:a.createElement("div",{className:"page-ads",id:`sas_${s.formatId.hpto}${t}`,style:o}),audio:a.createElement("div",{className:"ads ads-bottom ads-bottom-with-audio",style:o},a.createElement("div",{id:`sas_${s.formatId.audioBanner}${t}`})),sponsoredPlaylist:a.createElement("div",{id:`sas_${s.formatId.sponsoredPlaylist}${t}`,style:o})}[r],d=n[r];return s.formatId.audioBanner!==d&&e.addFormat(d),{format:d,template:i}}render(){return this.state.format&&this.state.template?this.state.template:null}}h.defaultProps={id:""},p.A.addReducers({ads:u.Ay});const m={addFormat:u.tt},A=(0,r.Ng)((({ads:{formatIds:e,shownFormatIds:t}})=>({formatIds:e,shownFormatIds:t})),m)(h);var g=s("H/eQ"),_=s("u7vQ"),y=s("tZCQ"),f=(s("/eM8"),s("AfN5")),E=s("+9dH"),v=s("vGT4");const w=e=>a.forwardRef(((t,s)=>a.createElement(v.A.Consumer,null,(r=>a.createElement(e,(0,E.A)({consentContext:r},t,{ref:s}))))));var b=s("nrKQ"),S=s("LOQS"),T=s("GXXn");class I extends a.Component{constructor(...e){super(...e),this.audioEl=void 0,this._onAudioError=()=>{g.A.trigger(g.A.ads.adError)},this._onAudioEnd=()=>{g.A.trigger(g.A.triton.audioEnd),g.A.trigger(g.A.ads.adEnd)},this._onAudioPlay=()=>{this.props.hasAdBlock||g.A.trigger(g.A.ads.adBegin)}}componentDidMount(){const e=this.audioEl;e&&(e.load(),e.addEventListener("ended",this._onAudioEnd),e.addEventListener("error",this._onAudioError),e.addEventListener("play",this._onAudioPlay))}componentWillUnmount(){const e=this.audioEl;e&&(e.removeEventListener("ended",this._onAudioEnd),e.removeEventListener("error",this._onAudioError),e.removeEventListener("play",this._onAudioPlay))}play(){this.audioEl&&this.audioEl.play()}render(){return a.createElement("audio",{"data-testid":"jinglePlayer",autoPlay:!1,className:"jinglePlayer",controls:!1,loop:!1,ref:e=>this.audioEl=e,src:this.props.audioSrc})}}I.defaultProps={audioSrc:"",hasAdBlock:!1};var P=s("VwKc"),k=s("GOtF");class C extends a.Component{constructor(...e){super(...e),this.state={listenAudio:!1,tracked:[],tritonAdReady:!1,timer:null},this._onAdsEnd=(e=!0)=>{this._adsPlayed=!0,e&&this.props.adsContext.displayAdSlot()},this._onPlay=()=>{this._adsPlayed||(_.Ay.control.pause(),_.Ay.previousPlayerType=_.Ay.getPlayerType())},this._trackingCall=e=>{const{audioBreakState:t}=this.props.audioBreakContext,{tracking:s}=t;s.progress_events[e].forEach((e=>{window.fetch&&fetch(e.url,{mode:"no-cors"})}))}}componentDidMount(){g.A.subscribe(g.A.player.play,this._onPlay),g.A.subscribe(g.A.triton.audioEnd,this._onAdsEnd),g.A.subscribe(g.A.ads.adEnd,(()=>this._onAdsEnd(!1))),this._playAds()}componentWillUnmount(){var e;const t=this.props.consentContext?null===(e=this.props.consentContext.state.settings)||void 0===e?void 0:e.consentString:void 0;this.props.audioBreakContext.loadAudioBreak(t),clearInterval(this.state.timer),g.A.unsubscribe(g.A.player.play,this._onPlay),g.A.unsubscribe(g.A.triton.audioEnd,this._onAdsEnd),g.A.unsubscribe(g.A.ads.adEnd,this._onAdsEnd)}render(){var e;const{audioBreakState:t}=this.props.audioBreakContext;if(void 0===t.content)return null;if(!t.content)return null;const s="VIDEO_AD"===t.type;return a.createElement(I,{ref:e=>this.audioPlayer=e,audioSrc:s?null:null===(e=t.content.audio)||void 0===e?void 0:e.url,hasAdBlock:this.props.hasAdBlock})}_prepareTracking(){var e;const{audioBreakState:t}=this.props.audioBreakContext;if("VIDEO_AD"!==t.type&&null!==(e=t.tracking)&&void 0!==e&&e.progress_events)if(!0===this.props.hasAdBlock){var s;const e=Object.values(null===(s=t.tracking)||void 0===s?void 0:s.progress_events);let a=[];e.forEach((e=>e.forEach((e=>a.push(e.url))))),b.A.call({method:"triton.pixelTracking",data:{URLS:a}})}else{var a;const e=Object.keys(null===(a=t.tracking)||void 0===a?void 0:a.progress_events).map((e=>parseInt(e))),s=Math.max(...e);let r=0;const n=setInterval((()=>{var e;null!==(e=t.tracking)&&void 0!==e&&e.progress_events[r]&&this._trackingCall(r),r>=s&&clearInterval(this.state.timer),r+=1}),1e3);this.setState({timer:n})}y.A.isAllowed("ad_collect_rec_logs")&&S.A.log((0,T.L)("ads.monitoring","2.0.0",{content:{user_profile:"regular",country:this.props.userCountry,session_id:this.props.userSessionId,request_source:"server",ad_count:1,event:{type:"call",status:"ok"},ad:{source:"triton",type:"audio"},adblock:this.props.hasAdBlock}}))}_prepareBanner(){const{audioBreakState:e}=this.props.audioBreakContext,t=document.getElementById("adslot1");if(this.props.adsContext.destroySlot1(),e&&e.content&&e.content.artwork&&t){const t=document.getElementById("companion_banner");t.style.display="block",t.href=e.cta.url,t.children[0].src=e.content.artwork.url}}_playAds(){const{triggerVideoAds:e}=this.props.audioBreakContext;_.Ay.getMediaType()!==f.zu.LIVE_STREAM&&this.audioPlayer&&this.audioPlayer.play?(this.audioPlayer.play(),_.Ay.previousPlayerType=_.Ay.getPlayerType(),_.Ay.control.pause(),_.Ay.setPlayerType(f.Cc.TRITON_AD),this._prepareTracking(),this._prepareBanner(),e()):(setTimeout((()=>g.A.trigger(g.A.triton.audioEnd)),100),setTimeout((()=>g.A.trigger(g.A.ads.adEnd)),100))}}const D={updateTrack:P.FZ},B=(0,r.Ng)((({app:e,user:t})=>({userCountry:t.COUNTRY,userSessionId:t.SESSION_ID,hasAdBlock:e.hasAdBlock})),D)(w((0,k.A)(C)));var F=s("+Whx");const R=e=>{if(F.$r)return F.H6;switch(e){case"pressure_1_stream":return F.FP;case"pressure_2_stream":return F.yK;default:return F.iy}};class N extends a.Component{constructor(...e){super(...e),this.state={useAudiobreakAd:!1},this.resetTritonAd=()=>{const e=document.getElementById("companion_banner");e&&(e.style.display="none"),this.setState({useAudiobreakAd:!1})},this._onListenSmartAdsForAudiobreak=()=>{this.setState({useAudiobreakAd:!0})},this._onPlay=()=>{this._isActive||this._startTimer()},this._onAudioRequest=()=>{window.addEventListener(g.A.ads.adEnd,this._onEnd),g.A.subscribe(g.A.triton.audioEnd,this._onEndAudiobreakAd),window.addEventListener(g.A.ads.adError,this._onEnd),this.props.fetchAds("audio"),(!0===this.props.hasAdBlock&&!0===_.Ay.hasAudioAds||y.A.isAllowed("ad_audio_break_hubvisor"))&&g.A.trigger(g.A.ads.prioTriton)},this._onEnd=()=>{g.A.unsubscribe(g.A.player.trackSkipped),g.A.unsubscribe(g.A.player.trackChange),g.A.unsubscribe(g.A.player.displayNextSong),window.removeEventListener(g.A.ads.adEnd,this._onEnd),g.A.unsubscribe(g.A.triton.audioEnd,this._onEnd),window.removeEventListener(g.A.ads.adError,this._onEnd),this.props.fetchAds("afterAudio"),this._delay=R(this.props.userFreeProfileType),this._startTimer(),y.A.isAllowed("ad_audio_break_hubvisor")&&_.Ay.control.play()},this._onEndAudiobreakAd=()=>{this._onEnd(),_.Ay.hasAudioAds=!1,_.Ay.eventAudio=!1,_.Ay.stopAudioAds(!1),this.resetTritonAd()},this._onReady=()=>{_.Ay.onAudioAdsReady()},this._startTimer=()=>{this._isActive=!0,this._timer=setTimeout(this._onReady,this._delay)},this._clearTimer=()=>{this._isActive=!1,clearTimeout(this._timer)},this._isActive=!1,this._delay=R(this.props.userFreeProfileType)}componentDidMount(){if(!this.props.hasAudioAds)return null;g.A.subscribe(g.A.ads.prioTriton,this._onListenSmartAdsForAudiobreak),g.A.subscribe(g.A.ads.callAudio,this._onAudioRequest),g.A.subscribe(g.A.player.play,this._onPlay),this._onReady()}componentWillUnmount(){this._clearTimer(),g.A.unsubscribe(g.A.ads.callAudio,this._onAudioRequest),g.A.unsubscribe(g.A.player.play,this._onPlay),g.A.unsubscribe(g.A.ads.prioTriton,this._onListenSmartAdsForAudiobreak),g.A.unsubscribe(g.A.triton.audioEnd,this._onEnd),window.removeEventListener(g.A.ads.adEnd,this._onEnd),window.removeEventListener(g.A.ads.adError,this._onEnd),!0===_.Ay.hasAudioAds&&g.A.trigger(g.A.ads.adEnd)}render(){return!1===this.state.useAudiobreakAd?a.createElement("div",{id:`sas_${c.default.get(["smartAds","formatId","audio"])}`}):a.createElement(a.Fragment,null,a.createElement(B,{resetTritonAd:this.resetTritonAd}),y.A.isAllowed("ad_audio_break_hubvisor")?null:a.createElement("div",{id:`sas_${c.default.get(["smartAds","formatId","audio"])}`}))}}const x=(0,r.Ng)((({app:e,user:t})=>({hasAdBlock:e.hasAdBlock,hasAudioAds:t.USER.OPTIONS.ads_audio})))(N);class O extends Error{constructor(e,t,s){super(e),this.payload=void 0,this.name="Ad Error",this.payload={id:t,...s}}}var L=s("xobL"),$=s("BcXB"),M=s("PKMp");class U extends a.Component{constructor(...e){super(...e),this._fetchAds=()=>{this.props.fetchAds("navigation")}}componentDidMount(){this.props.fetchAds("initial")}componentDidUpdate({currentPage:e}){e!==this.props.currentPage&&this._fetchAds()}render(){return null}}const H=(0,r.Ng)((({app:{currentPage:e}})=>({currentPage:e})))(U);class G extends a.Component{constructor(){super(),this._onPlayerPlaying=()=>{this._startTimer()},this._onPlayerPaused=()=>{this._startTimer()},this._onTimeout=e=>{this._clearTimer(),(this.props.hasFocus||e)&&(this.props.fetchAds("inactivity"),this._startTimer())},this._startTimer=()=>{this.state.isActive||(this._setIsActive(!0),this._timer=setTimeout(this._onTimeout,6e4))},this._clearTimer=()=>{this._setIsActive(!1),clearTimeout(this._timer)},this._resetTimer=()=>{this._clearTimer(),this._startTimer()},this._setIsActive=e=>{this.setState({isActive:e})},this.state={isActive:!1}}componentDidMount(){_.Ay.playing||this._resetTimer(),g.A.subscribe(g.A.ads.refreshDisplay,this._resetTimer),g.A.subscribe(g.A.navigation.page_displayed,this._resetTimer),g.A.subscribe(g.A.player.playing,this._onPlayerPlaying),g.A.subscribe(g.A.player.paused,this._onPlayerPaused),g.A.subscribe(g.A.player.finishTrackList,this._resetTimer)}componentDidUpdate(e,t){e.hasFocus||!this.props.hasFocus||t.isActive||this._onTimeout(!0)}componentWillUnmount(){this._clearTimer(),g.A.unsubscribe(g.A.ads.refreshDisplay,this._resetTimer),g.A.unsubscribe(g.A.navigation.page_displayed,this._resetTimer),g.A.unsubscribe(g.A.player.playing,this._onPlayerPlaying),g.A.unsubscribe(g.A.player.paused,this._onPlayerPaused),g.A.unsubscribe(g.A.player.finishTrackList,this._resetTimer)}render(){return null}}var j=s("J/yO");const z=({fetchAds:e=(()=>{}),hasAdBlock:t=!1,isReady:s=!0})=>{const{state:r}=(0,v.b)(),{getProfileType:n,getProfileReg:o}=(0,j.Y9)(),{loadAudioBreak:i,audioBreakState:d}=(0,F.ZQ)(),[l,u]=(0,a.useState)(!0),c=()=>u(!0),p=()=>u(!1);return(0,a.useEffect)((()=>(window.addEventListener(g.A.ads.blur,p),window.addEventListener(g.A.ads.focus,c),()=>{window.removeEventListener(g.A.ads.blur,p),window.removeEventListener(g.A.ads.focus,c)})),[]),(0,a.useEffect)((()=>{var e;null!=r&&null!==(e=r.settings)&&void 0!==e&&e.consentString&&void 0!==r.settings.consentString&&i(r.settings.consentString)}),[r]),s||t?a.createElement("div",null,a.createElement(H,{fetchAds:e}),a.createElement(G,{fetchAds:e,hasFocus:l}),!0===t&&Object.values(d).length>0||!1===t?a.createElement(x,{fetchAds:e,userReg:o(),userFreeProfileType:n()}):null):null};var Q,V,K,q;class W extends a.Component{constructor(...e){super(...e),this.state={isSmartAdsScriptReady:!1,hasFocus:!0},this.fetchAds=(e,t=!0)=>{let{audio:s,northBanner:a,southBanner:r,interstitial:n,hpto:o,sponsoredPlaylist:i}=c.default.get(["smartAds","formatId"]);"audio"===e?(this.props.cleanAds(),this.props.addFormat(s)):"afterAudio"===e&&(this.props.cleanAds(),this.props.removeFormat(s)),this.props.adsConfigContext.hasDisplayAds()||[a,r,n,o,i].forEach((e=>{this.props.removeFormat(e)})),this.props.fetchAds({clean:t,context:e,hasBillboard:!1,audioBreak:this.props.audioBreakContext.audioBreakState,hasFocus:this.state.hasFocus,consentSettings:this.props.consentContext&&this.props.consentContext.state?this.props.consentContext.state.settings:void 0},{resetTimestamp:!0})},this._onBlur=()=>{this.setState({hasFocus:!1})},this._onFocus=()=>{this.setState({hasFocus:!0})},this._onError=()=>{this.props.cleanAds(),this.setState({isSmartAdsScriptReady:!1})},this._onHideFormat=e=>{this.props.hideFormat(e)},this._onUnhideFormat=e=>{this.props.unhideFormat(e)},this._onMessage=e=>{if(!e.data||!e.data.type)return null;switch(e.data.type){case g.A.ads.hideFormat:return this._onHideFormat(e.data.value);case g.A.ads.unhideFormat:return this._onUnhideFormat(e.data.value);default:return null}},this._updateAds=()=>{const{consentContext:e}=this.props,{loadAudioBreak:t}=this.props.audioBreakContext;try{e&&void 0!==e.state&&void 0!==e.state.settings&&void 0!==e.state.settings.consentString&&t(e.state.settings.consentString)}catch{}},this._script=null}componentDidMount(){try{this._initAds()}catch(e){}}componentDidUpdate(e){this.props.consentContext&&this.props.consentContext!==e.consentContext&&this._updateAds(),this._player&&e.isNormalized!==this.props.isNormalized&&(this._player.volume=this._defaultVolume||1)}componentWillUnmount(){this._script&&(this._script.parentNode.removeChild(this._script),delete this._script,window.removeEventListener(g.A.ads.blur,this._onBlur),window.removeEventListener(g.A.ads.focus,this._onFocus),window.removeEventListener(g.A.ads.adEnd,this._updateAds),window.removeEventListener("message",this._onMessage),this._defaultDescriptor&&Object.defineProperty(HTMLMediaElement.prototype,"volume",this._defaultDescriptor),delete this._defaultDescriptor,delete this._defaultVolume,delete this._player)}get _audio(){return a.createElement(x,{fetchAds:this.fetchAds,userFreeProfileType:this.props.adsConfigContext.getProfileType()})}_hasDisplayAdsAuthorization(){return this.props.isAdsAllowed&&this.props.adsConfigContext.hasDisplayAds()}render(){const{hasAdBlock:e}=this.props;return a.createElement(a.Fragment,null,a.createElement(z,{isReady:this.state.isSmartAdsScriptReady,hasAdBlock:e,hasFocus:this.state.hasFocus,fetchAds:this.fetchAds}),this._hasDisplayAdsAuthorization()&&(Q||(Q=a.createElement(a.Fragment,null,a.createElement(A,{type:"sponsoredPlaylist"}),a.createElement(A,{type:"bottom"})))),this.props.isAdsAllowed&&(V||(V=a.createElement(a.Fragment,null,a.createElement(A,{type:"audio"})))),a.createElement("div",{className:"page-wrapper"},a.createElement("div",{className:"page-content"},this._hasDisplayAdsAuthorization()&&(K||(K=a.createElement(A,{type:"top"}))),this.props.children),this._hasDisplayAdsAuthorization()&&(q||(q=a.createElement(A,{type:"wallpaper"})))))}_isAudioAdsAvailable(){return!0===this.props.hasAdBlock&&Object.values(this.props.audioBreakContext.audioBreakState).length>0||!1===this.props.hasAdBlock}_initAds(){this._script=document.createElement("script"),this._script.async=!0;let e=document.getElementsByTagName("script")[0];if(e.parentNode.insertBefore(this._script,e),this._script.src="https://ced.sascdn.com/tag/400/smart.js",this._script.onerror=e=>{M.A.error(new O("Ad script loading error",this.props.userId,{error:e}))},window.sas=window.sas||{},window.sas.cmd=window.sas.cmd?window.sas.cmd:[],window.sas.cmd.push((()=>{window.sas.setup({networkid:400,domain:"https://ww400.smartadserver.com",async:!0,renderMode:0})})),window.ads=c.default.get("smartAds")||{},window.sas.cmd.push((()=>{this._script&&this.setState({isSmartAdsScriptReady:!0})})),window.addEventListener(g.A.ads.blur,this._onBlur),window.addEventListener(g.A.ads.focus,this._onFocus),window.addEventListener(g.A.ads.adEnd,this._updateAds),window.addEventListener("message",this._onMessage),!this.props.loudnessTarget||!this.props.defaultAdsGain)return;const t=this;this._defaultDescriptor=Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype,"volume"),this._defaultDescriptor&&Object.defineProperty(HTMLMediaElement.prototype,"volume",{...this._defaultDescriptor,set(e){this.parentNode&&Array.from(this.parentNode.classList).some((e=>/^sas/.test(e)))&&(t._player=this,t._defaultVolume=e,t.props.isNormalized&&(e*=Math.pow(10,(t.props.loudnessTarget-t.props.defaultAdsGain)/20),e=Math.min(Math.max(e,0),1))),t._defaultDescriptor.set.call(this,e)}})}}W.defaultProps={adsArgs:{}};const Z={fetchAds:u.xH,cleanAds:u.CY,addFormat:u.tt,removeFormat:u.k2,hideFormat:u.Ui,unhideFormat:u.hE},Y=(0,r.Ng)((({app:e,player:t,user:s})=>({currentPage:e.currentPage,userId:s.USER.USER_ID,defaultAdsGain:(0,L.RU)(s),loudnessTarget:(0,L.nd)(s),hasAdBlock:e.hasAdBlock,isNormalized:(0,$.mQ)({player:t})})),Z)(w((0,k.A)(W)));var X=s("ntT5"),J=s("nxAS"),ee=s("aHAS"),te=s("MeIc"),se=s("mUtM"),ae=s("TqF5"),re=s("UA58"),ne=s("MAes"),oe=s("Ty5D"),ie=s("ea/m"),de=s("45CL");var ue=s("4PKR");const ce=()=>{const{isArchBanner:e}=(0,ue.gA)(),{pathname:t}=(0,oe.zy)();return t.includes("account")?null:a.createElement("div",{className:"page-wrapper","data-testid":"adslot1"},a.createElement("div",{className:"page-content"},a.createElement("div",{id:"adslot1",className:"ads ads-top"+(e?" has-ads-full":"")})))};var pe,he=s("RFor");const me=()=>{const e=y.A.isAllowed("revamp2023"),{pathname:t}=(0,oe.zy)();return t.includes("playlist")?a.createElement("div",{className:he.A.wrapper},a.createElement("div",{className:e?he.A.gradientRevamp:he.A.gradient}),a.createElement("div",{"data-testid":"sponsored_playlist",id:"sponsored_playlist",className:e?he.A.containerRevamp:he.A.container}),pe||(pe=a.createElement("div",{className:"ads ads-bottom ads-bottom-alone"},a.createElement("div",{"data-testid":"adslot2",id:"adslot2"})))):null};var Ae,ge;const _e=({type:e})=>"sponsored_playlist"===e?Ae||(Ae=a.createElement(me,null)):ge||(ge=a.createElement(ce,null));var ye,fe;const Ee=e=>{switch(e){case"home":return"homepage";case"loved":return"favorite_tracks";case"channels_explore":return"channel_home";default:return e}},ve=({children:e})=>{const{isScriptLoaded:t,setIsSponsored:s,displayAdSlot:n,destroySlot1:o}=(0,ue.gA)(),{getProfileType:i,getProfileReg:d,getDzgroup:l,adsConfigReady:u}=(0,j.Y9)(),[c,p]=(0,a.useState)(),[h,m]=(0,a.useState)(!1),A=(0,r.d4)((({user:e})=>e)),g=(0,L.Z0)(A),y=location.pathname.replace(/[^0-9]/g,""),E=e=>e===v?y:null,v=(0,r.d4)((({app:e})=>e.currentPage)),w=(0,r.d4)((({app:e})=>"channels"===e.currentPage?e.currentPath.split("/").slice(-1):"")),b=e=>`/104134276/deezer_app_windows/${Ee(v)}/${e}/${g}${w?"/"+w:""}`,S=(0,a.useCallback)((()=>{const e=window.googletag;if(e){const t=e.pubads().setTargeting("pagetype",Ee(v)).setTargeting("user_gender",(e=>{switch(e){case"F":return"female";case"M":return"male";case"NonBinary":return"non_binary";default:return"other"}})((0,L.o_)(A))).setTargeting("user_age",Math.min((0,L.QO)(A),99).toString()).setTargeting("user_age_range",(e=>{switch(!0){case e<18:return"-18";case e<25:return"18-24";case e<35:return"25-34";case e<50:return"35-49";default:return"over65"}})((0,L.QO)(A))).setTargeting("user_id",((0,L.F6)(A)||0).toString()).setTargeting("user_profile",i()).setTargeting("user_reg_days",d()),s=l(),a=E("album"),r=E("artist"),n=E("playlist"),o=E("show");a&&t.setTargeting("album_id",a),r&&t.setTargeting("artist_id",r),n&&t.setTargeting("playlist_id",n),o&&t.setTargeting("podcast_id",o),s&&t.setTargeting("dzgroup",s),w&&t.setTargeting("channel",w)}}),[t,v,A]),T=(0,a.useCallback)((()=>{if(!h){const e=window.googletag;null==e||e.pubads().collapseEmptyDivs(),null==e||e.pubads().disableInitialLoad(),null==e||e.pubads().enableSingleRequest(),null==e||e.enableServices(),m(!0)}}),[t,u,h]),I=(0,a.useCallback)((()=>{var e;if(_.Ay.getPlayerType()===f.Cc.ADS||_.Ay.getPlayerType()===f.Cc.TRITON_AD)return;const t=window.googletag;null==t||null===(e=t.destroySlots)||void 0===e||e.call(t),t&&n(b("web_adslot1"))}),[t,v]);return(0,a.useEffect)((()=>{if(t&&u){const e=window.googletag;if(e.cmd.push((()=>{T(),S(),null==e||e.destroySlots(),p(void 0)})),"playlist"===v){if(void 0!==c&&!c)return void s(!1);e.cmd.push((()=>{var t,a;const r=null===(t=e.defineSlot(b("web_adslot2"),[[1e3,90],[728,90]],"adslot2"))||void 0===t?void 0:t.addService(e.pubads()).setTargeting("placement","web_adslot2"),n=null===(a=e.defineSlot(b("web_sponsored_playlist"),[1630,360],"sponsored_playlist"))||void 0===a?void 0:a.addService(e.pubads()).setTargeting("placement","web_sponsored_playlist");e.pubads().refresh(r&&n&&[n,r]);const o=e=>{e.slot.getAdUnitPath()===(null==n?void 0:n.getAdUnitPath())&&(p(!e.isEmpty),s(!e.isEmpty),e.isEmpty&&I())};return e.pubads().addEventListener("slotRenderEnded",o),()=>{e.pubads().removeEventListener("slotRenderEnded",o)}}))}else s(!1),I()}}),[t,u,v,location]),"account"===v||"page"===v?(t&&o(),a.createElement(a.Fragment,null,e)):a.createElement("div",null,a.createElement("a",{id:"companion_banner",target:"_blank",style:{height:250,display:"none"}},a.createElement("img",{style:{height:"100%",margin:"auto"}})),"playlist"===v&&a.createElement("div",{style:{display:c?"block":"none"}},ye||(ye=a.createElement(_e,{type:"sponsored_playlist"}))),!c&&(fe||(fe=a.createElement(_e,{type:"adslot1"}))),e)};var we,be;class Se extends i.App{constructor(e){super(e),this.state={...this.state,mainPageClasses:{}}}static getDerivedStateFromProps(e){const{northBanner:t,southBanner:s,audioBanner:a,hpto:r,sponsoredPlaylist:n}=c.default.get(["smartAds","formatId"]);let i={"page-main":!0,"has-ads-top":!1,"has-ads-bottom":!1,"has-ads-full":!1,"has-ads-bottom-with-audio":!1,"has-ads-sponsored-playlist":!1};return!0===e.isAdsAllowed&&e.shownFormatIds.forEach((o=>{o===t&&e.adsConfigContext.hasDisplayAds()?i["has-ads-top"]=!0:o===s&&e.adsConfigContext.hasDisplayAds()?i["has-ads-bottom"]=!0:o===r&&e.adsConfigContext.hasDisplayAds()?i["has-ads-full"]=!0:o===a?i["has-ads-bottom-with-audio"]=!0:o===n&&e.adsConfigContext.hasDisplayAds()&&(i["has-ads-sponsored-playlist"]=!0)})),{mainPageClasses:(0,o.A)(i)}}componentDidMount(){super.componentDidMount&&super.componentDidMount(),this._updateAdsArgs(),this.props.adsConfigContext.loadAdConfig();const e={url:`https://${c.default.get("host_common_assets_ssl")}/js/yzfdmoan.js`,id:"837slaBksSjd9jh"};(function(e){return new Promise((t=>{const s=[(0,de.detectAnyAdblocker)()],{url:a,id:r,scriptKey:n}=e||{};var o;a&&r&&s.push((o={url:a,id:r},new Promise((e=>{const t=document.createElement("script");t.onload=()=>{e(!document.getElementById(o.id))},t.onerror=()=>{e(!0)},t.src=o.url,t.async=!0,document.body.appendChild(t)})))),n&&s.push(function(e){return new Promise((t=>{t(void 0===window[e])}))}(n)),Promise.all(s).then((e=>{t(e.some((e=>!0===e)))})).catch((()=>{t(!1)}))}))})(y.A.isAllowed("adblock_bait_file")?e:null).then((e=>{e&&this.props.updateHasAdBlock(e)}))}componentDidUpdate(...e){this._updateAdsArgs(),super.componentDidUpdate&&super.componentDidUpdate(...e)}shouldComponentUpdate(e,t){return super.shouldComponentUpdate(e,t)||this.props.shownFormatIds!==e.shownFormatIds||this.props.isAdsAllowed!==e.isAdsAllowed}_updateAdsArgs(){const e=this.props.location.pathname,t=(0,ne.A)(e);let s={element_type:t,element_id:this.props.match.params.id?this.props.match.params.id:"",element_data:""};if("search"===t&&(s={element_type:"result",element_id:"ALL",element_data:this.props.match.params.query||this.props.match.params.tags||""}),""===s.element_id){const t=/[0-9]*/g;e.split("/").forEach((e=>{e.match(t)&&(s.element_id=e)}))}this.props.setAdsArgs(s)}_hasDisplayAdsAuthorization(){return this.props.isAdsAllowed&&this.props.adsConfigContext.hasDisplayAds()}_renderMain(){if(this.state.error)return a.createElement("div",{className:this.state.mainPageClasses,id:"page_content",role:"main"},we||(we=a.createElement(l.A,null)));const e=this.props.location.pathname.replace(/^\/|\/$/g,"")===this.props.userLanguage,t=a.createElement(a.Fragment,null,a.createElement(ie.A,{displayContentCard:e}),be||(be=a.createElement(d.s,null)),this.props.children);return a.createElement("main",{className:this.state.mainPageClasses,id:"page_content",key:"main",role:"main"},y.A.isAllowed("ad_display_hubvisor")?a.createElement(ve,null,a.createElement(z,{hasAdBlock:this.props.hasAdBlock}),t):a.createElement(Y,{adsArgs:this.props.adsArgs,isAdsAllowed:this.props.isAdsAllowed},t))}}const Te=(0,r.Ng)((({app:{currentPage:e,hasAdBlock:t},user:s,ads:a,alerts:r,entities:n},{location:o})=>({useFamilyScreen:!0===s.__DZR_GATEKEEPS__.family_screen,userID:s.USER.USER_ID,isConnected:(0,L.UJ)(s),hasOnBoarding:s.USER.ONBOARDING_MODAL,userAge:(0,L.QO)(s),userGender:(0,L.o_)(s),userLanguage:(0,L.Z0)(s),userOfferId:(0,L.id)(s),adsArgs:a.args,shownFormatIds:a.shownFormatIds,hasNoChildAccountSelected:!1,alerts:r,isSubProfile:(0,L.W$)(s),hasParent:(0,L.p7)(s),hasMultiAccountEnabled:(0,L.mE)(s),isSubAccount:(0,L.m0)(s),isAdsAllowed:(0,re.Mq)(n,{id:o.pathname.replace(/[^0-9]/g,""),currentPage:e}),hasAdBlock:t})),{selectChildAccount:ee.me,setAdsArgs:u.TE,cleanAds:u.CY,updateCurrentPage:te.yf,updateHasAdBlock:te.eT,openScreen:J.J2,dispatchShowAlert:se.S7,dispatchHideAlert:se.Hd,openModal:ae.qf,fetchChildAccount:ee.C9}),Ie=(0,n.Ay)((e=>({virtualpageurl:e.location.pathname,language:e.userLanguage,uilogged:e.isConnected})),{process:e=>e.pagename?e:null,dispatch:e=>{void 0!==window.dataLayer&&window.dataLayer.push(e),(0,X.TD)(e)}}),Pe=(0,oe.y)(Te(Ie((0,k.A)(Se))))},fPrZ:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>C,CY:()=>R,TE:()=>F,Ui:()=>O,hE:()=>L,k2:()=>B,tt:()=>D,wH:()=>x,xH:()=>N,xj:()=>E});var a=s("Vd8Q"),r=s("nrKQ"),n=s("u7vQ"),o=s("AfN5"),i=s("H/eQ"),d=s("xobL"),l=s("lXQd");const u="ads/LOAD_ADS",c="ads/ERROR_FORMAT_ADS",p="ads/ADD_FORMAT",h="ads/ADD_ARGS_ADS",m="ads/REMOVE_FORMAT_ADS",A="ads/HIDE_FORMAT",g="ads/UNHIDE_FORMAT",_="ads/CAN_SEND_LOGS",y=document.styleSheets.length,f={formatIds:[],args:{},shownFormatIds:[]},E=(e,t)=>-1===e.indexOf(t);function v(e,t,s,o,d,{formatId:l,hasAd:u,tagId:c}){s&&r.A.call({method:"log_central.log",data:{BATCH:[{channel:"ads",params:{act:"call",ad_type:String(l),ad_server:"SmartAd",status:u?"OK":"NO_ADS",foc:o,page_id:d}}]}});const p=t().ads.shownFormatIds;l=Number(l);const h=document.getElementById(c),m=Boolean(h.children&&h.children.length),A=u||m;if(A){let{audio:t,interstitial:s,hpto:r}=a.default.get(["smartAds","formatId"]);E(p,l)&&e(L(l)),u&&l===t&&(E(p,l)||e(O(l)),N()),u&&l===s&&n.Ay.onInterstitialAdsReady(),A||E(p,l)||e(O(l)),i.A.trigger(i.A.ads.refreshDisplay,l),i.A.trigger(i.A.layout.adsBackground,{display:r===l})}}function w(){let e=document.createEvent("HTMLEvents");e.initEvent(i.A.ads.adError,!0,!0),window.dispatchEvent(e)}function b(e,t,s,n,o,{formatId:i}){s&&r.A.call({method:"log_central.log",data:{BATCH:[{channel:"ads",params:{act:"call",ad_type:String(i),ad_server:"SmartAd",status:"NO_ADS",foc:n,page_id:o}}]}});const d=t().ads.shownFormatIds;i=Number(i),E(d,i)||e(O(i));let{audio:l}=a.default.get(["smartAds","formatId"]);Number(i)===l&&w()}function S(e,t,s,a){e&&r.A.call({method:"log_central.log",data:{BATCH:[{channel:"ads",params:{act:"call",ad_type:String(a.formatId),ad_server:"SmartAd",status:"FAILED",foc:t,page_id:s}}]}}),w(),window.sas&&window.sas.clean&&window.sas.clean()}function T(e,t,s,a){e&&r.A.call({method:"log_central.log",data:{BATCH:[{channel:"ads",params:{act:"display",ad_type:String(a.formatId),ad_server:"SmartAd",status:"OK",foc:t,page_id:s}}]}})}function I(e=""){return e.toLowerCase().replace(/[^\w]/g,"")}function P(e,t){for(let s of t)if({}.hasOwnProperty.call(e,s)&&e[s])return!0;return!1}function k(e=!1,t,{currentPage:s,adsArgs:r,userPartners:i,userFavoriteTag:d,userLang:l,userAdsOffer:u,userAge:c,userGender:p,userID:h,userOfferID:m,userFacebookUID:A,userNotificationMail:g,userNotificationMobile:_,userNewsletter:y,userHasOffer:f,userAdsTestFormat:E,userConsentSettings:v,userSegments:w,smartAdsMediationParameters:b}){const S=n.Ay.getMediaType(),T=["artist_new_release","artist_status","friend_follow","new_message","playlist_comment","playlist_follow","share"],{targetedAdvertising:k}=v;if(!k)return"";let C=a.default.get(["smartAds","target"]);C+=`;element_type=${{}.hasOwnProperty.call(r,"element_type")?r.element_type:""}`,C+=`;element_id=${{}.hasOwnProperty.call(r,"element_id")?r.element_id:""}`,C+=`;element_data=${{}.hasOwnProperty.call(r,"element_data")?r.element_data:""}`,"channels"===s&&(C+=`;channel_id=${I(document.location.pathname.replace(/([a-z]{2})\/channels\//,""))}`),C+=`;partners=${encodeURIComponent(i)}`,C+=`;favorite_tag=${d}`,C+=`;lang=${l}`;const D=Object.keys(w);D.length>0&&(C+=`;dzgroup=${D.join(";dzgroup=")}`);let B="UNKNOWN";switch(a.default.get("env")){case"preproduction":B="PREPROD";break;case"development":B="DEV";break;default:B="PROD"}if(a.default.get("env").includes("preprod")&&(B="PREPROD"),C+=`;env=${B}`,C+=`;focus=${t}`,C+=`;billboard=${e}`,C+=`;site=${a.default.get(["smartAds","smartSite"])}`,C+=`;mt=${u}`,C+=`;tf=${E}`,C+=`;user_age=${0===c?"unknown":c}`,C+=`;user_sexe=${p}`,S===o.zu.SONG?(C+=`;player_art_name=${I(n.Ay.getCurrentSong("ART_NAME"))}`,C+=`;player_alb_title=${I(n.Ay.getCurrentSong("ALB_TITLE"))}`,C+=`;player_sng_title=${I(n.Ay.getCurrentSong("SNG_TITLE"))}`):S===o.zu.EPISODE&&(C+=`;talk_show_name=${I(n.Ay.getCurrentSong("SHOW_NAME"))}`),C+=";pr="+(f?"1":"0"),C+=`;user_id=${h}`,C+=`;offer_id=${m}`,C+=";user_fc="+(A?"1":"0"),C+=";player_play="+(n.Ay.playing?"1":"0"),C+=";newsletter="+(P(y,["editor","event","game","panel","special_offer","talk"])?"1":"0"),C+=";notif_mail="+(P(g,T)?"1":"0"),C+=";notif_mobile="+(P(_,T)?"1":"0"),S===o.zu.SONG?(C+=`;player_provider_id=${n.Ay.getCurrentSong("PROVIDER_ID")}`,C+=`;player_art_id=${n.Ay.getCurrentSong("ART_ID")}`,C+=`;player_alb_id=${n.Ay.getCurrentSong("ALB_ID")}`,C+=`;player_sng_id=${n.Ay.getCurrentSong("SNG_ID")}`,C+=`;player_rank_sng=${n.Ay.getCurrentSong("RANK_SNG")}`,C+=`;player_duration=${n.Ay.getCurrentSong("DURATION")}`,C+=`;player_plist_id=${n.Ay.getContext("ID")}`):S===o.zu.EPISODE&&(C+=`;talk_duration=${n.Ay.getCurrentSong("DURATION")}`),Object.keys(b).length>0){const e=Object.keys(b);C+=`;${e[0]}=${b[e[0]]}`}return C}const C=(e=f,t)=>{const{type:s,formatIds:a,args:r}=t;switch(s){case p:return-1===e.formatIds.indexOf(a[0])?{...e,formatIds:[...e.formatIds,...a]}:e;case h:return{...e,args:r};case m:return{...e,formatIds:e.formatIds.filter((e=>e!==a))};case A:return-1===e.shownFormatIds.indexOf(t.formatId)?e:{...e,shownFormatIds:e.shownFormatIds.filter((e=>e!==t.formatId))};case g:return-1!==e.shownFormatIds.indexOf(t.formatId)?e:{...e,shownFormatIds:[...e.shownFormatIds,t.formatId]};case _:return{...e,canSendLog:t.canSendLog};default:return e}},D=e=>"string"!=typeof e&&"number"!=typeof e?{type:c}:{type:p,formatIds:[e]};function B(e){return!Array.isArray(e)&&"object"!=typeof e||"string"==typeof e||"number"==typeof e?{type:m,formatIds:e}:{type:c}}function F(e){return{type:h,args:e}}const R=e=>(t,s)=>{let a;e&&(a=`sas_${e}`),window.sas&&window.sas.clean&&(window.sas.clean(a),e?t(O(e)):s().ads.shownFormatIds.forEach((e=>{t(O(e))})));const r=/sas_[0-9]{0,}/,n=document.styleSheets.length;if(n!==y&&n>0){const e=n-1,t=document.styleSheets[e];!1!==r.test(t.innerHTML)&&t.ownerNode.parentNode.removeChild(t.ownerNode)}return t({type:"ads/CLEAN_ADS"})};function N({formatId:e,hasFocus:t,tagId:s,context:r,consentSettings:n={},audioBreak:c}={},p,h){return(m,A)=>{const{ads:{formatIds:g,args:_,canSendLog:y},user:f,app:{currentPage:E},player:{config:{playerType:w}}}=A();if(w===o.Cc.ADS&&"afterAudio"!==r)return;let{pageId:I,formatId:{audioBanner:P,audio:C,sponsoredPlaylist:D},siteId:B}=a.default.get("smartAds");const F=I[E];if(F&&F.id&&("audio"===r&&F.audio||"audio"!==r&&F.display)){let o="onecall";if(s?(o="std",s=`sas_${e}_${s}`,e=[e]):e=g,"audio"===r&&F.audio&&(m(L(P)),e=[C,P]),"initial"===r){m(O(a.default.get(["smartAds","formatId","audioBanner"])));const e=Math.random()<=.01;m($(e))}"playlist"===E&&m(L(D));const i={currentPage:E,adsArgs:_,userPartners:f.USER.PARTNERS,userFavoriteTag:f.USER.FAVORITE_TAG,userNewsletter:f.USER.SETTING.newsletter,userAdsOffer:f.USER.ADS_OFFER,userAge:f.USER.USER_AGE,userGender:f.USER.USER_GENDER,userID:f.USER.USER_ID,userFacebookUID:f.USER.FACEBOOK.UID,userOfferID:f.OFFER_ID,userNotificationMail:f.USER.SETTING.notification_mail,userNotificationMobile:f.USER.SETTING.notification_mobile,userLang:f.SETTING_LANG,userHasOffer:(0,d.jQ)(f),userAdsTestFormat:f.USER.ADS_TEST_FORMAT,userConsentSettings:n,userSegments:(0,l.A)(f,"USER.ADS_CONFIG.SEGMENTS",{}),smartAdsMediationParameters:c&&0!==Object.keys(c).length?c.smartad_mediation_parameters:0};if(void 0===window.sas||void 0===window.sas.call||void 0===g||!g.length)return void m(R());window.sas_manager={formats:{},noad:()=>{}},window.sas.cmd.push((()=>{window.sas.call(o,{formats:e.map((e=>({id:e}))),pageId:F.id,siteId:B,tagId:s,target:k(h,t,i)},{...p,onLoad:v.bind(this,m,A,y,t,F.id),onNoad:b.bind(this,m,A,y,t,F.id),onError:S.bind(this,y,t,F.id),beforeRender:T.bind(this,y,t,F.id)})})),e.forEach(window.sas.render),m({type:u})}else{if("audio"===r)return void window.dispatchEvent(new Event(i.A.ads.adError));m(R())}}}const x=e=>"none"===document.getElementById(`sas_${e}`).style.display,O=e=>({type:A,formatId:e}),L=e=>({type:g,formatId:e}),$=e=>({type:_,canSendLog:e})},"45CL":function(e){e.exports=function(){"use strict";function e(){return void 0!==navigator.brave&&void 0!==navigator.brave.isBrave}function t(){return"string"==typeof navigator.userAgent&&navigator.userAgent.match(/Opera|OPR\//)}function s(){return new Promise((function(e,t){var s=new XMLHttpRequest;s.onreadystatechange=function(){4==s.readyState&&e(s)},s.open("GET","https://raw.githubusercontent.com/wmcmurray/just-detect-adblock/master/baits/pagead2.googlesyndication.com",!0),s.send()}))}function a(e){return 200===e.status&&!e.responseText.match(/^thistextshouldbethere(\n|)$/)}function r(e){return 0===e.status&&!e.responseText.match(/^thistextshouldbethere(\n|)$/)}function n(){if(null!==window.document.body.getAttribute("abp"))return!0;var e=function(){var e=document.createElement("div");return e.setAttribute("class","pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad-text adSense adBlock adContent adBanner"),e.setAttribute("style","width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"),e}();window.document.body.appendChild(e);var t=function(e){if(null===e.offsetParent||0==e.offsetHeight||0==e.offsetLeft||0==e.offsetTop||0==e.offsetWidth||0==e.clientHeight||0==e.clientWidth)return!0;if(void 0!==window.getComputedStyle){var t=window.getComputedStyle(e,null);if(t&&("none"==t.getPropertyValue("display")||"hidden"==t.getPropertyValue("visibility")))return!0}return!1}(e);return window.document.body.removeChild(e),t}var o;return{detectAnyAdblocker:function(){return new Promise((function(o,i){if(n())return o(!0);e()||t()?s().then((function(s){return e()?o(a(s)):t()?o(r(s)):void o(!1)})):o(!1)}))},detectDomAdblocker:(o=n,function(){var e=arguments;return new Promise((function(t,s){t(o.apply(this,e))}))}),detectBraveShields:function(){return new Promise((function(t,r){e()?s().then((function(e){t(a(e))})):t(!1)}))},detectOperaAdblocker:function(){return new Promise((function(e,a){t()?s().then((function(t){e(r(t))})):e(!1)}))},isDetected:function(e,t){return function(){return console.warn("just-detect-adblock : The `isDetected()` method is now deprecated, please use `detectAnyAdblocker()` instead, which returns a Promise and can detect more stuff (like Brave Shields)."),e.apply(this,arguments)}}(n)}}()},RFor:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});const a={wrapper:"S5aHZ",containerRevamp:"n7Pze",container:"M0TJf",gradientRevamp:"oS89a",gradient:"oYrBR",button:"XuiT3"}}}]);