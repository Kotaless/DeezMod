"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[5918],{"7HKI":(e,t,a)=>{a.d(t,{_:()=>r});var n=a("nKUr");const r=(0,a("AGAM").w)({displayName:"CheckCircleFilledIcon",viewBox:"0 0 24 24",pathSmall:[(0,n.jsx)("path",{fillRule:"evenodd",d:"M4 12c0-5.138 2.862-8 8-8 5.137 0 8 2.862 8 8 0 5.137-2.863 8-8 8-5.138 0-8-2.863-8-8Zm7.109.996 2.905-4.303 1.104.746-3.732 5.53-3.248-2.723.856-1.023 2.115 1.773Z",clipRule:"evenodd"})],pathMedium:[(0,n.jsx)("path",{fillRule:"evenodd",d:"M1 12C1 4.936 4.936 1 12 1s11 3.936 11 11-3.936 11-11 11S1 19.064 1 12Zm10.456 1.45L15.813 7l1.658 1.12-5.599 8.288L7 12.326l1.284-1.533 3.172 2.658Z",clipRule:"evenodd"})]});r.defaultProps={fill:"currentColor",boxSize:"24px",display:"block","data-testid":"CheckCircleFilledIcon"}},y8BT:(e,t,a)=>{a.d(t,{A:()=>u});var n,r=a("q1tI"),i=a("TRpf"),s=a("GkjM"),l=a("Wp0Y"),o=a("WmA5"),c=a("HmE0");class d extends r.Component{constructor(e){super(e),this._onClick=this._onClick.bind(this)}render(){const{userID:e,userLang:t}=this.props,a=(0,l.AP)("Pour profiter du meilleur de Deezer, jetez un œil à nos <a %1$s>Univers</a> ou à <a %2$s>vos Coups de cœur</a>.",{sprintf:[`href="/${t}/channels/explore"`,`href="/${t}/profile/${e}/loved"`]});return r.createElement("div",{className:"naboo-not-found"},n||(n=r.createElement("div",{className:"title"},"404")),r.createElement("div",{className:"unavailable"},(0,l.AP)("Désolé, nous ne trouvons pas la page que vous recherchez")),r.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a},onClick:this._onClick}),r.createElement(c.$n,{as:s.A,to:`/${this.props.userLang}/`},(0,l.AP)("Explorer")))}_onClick(e){const t=e.target;"a"===t.tagName.toLowerCase()&&(o.A.replace(t.getAttribute("href")),e.preventDefault())}}const u=(0,i.Ng)((({user:e})=>({userID:e.id,userLang:e.SETTING_LANG})))(d)},FSqQ:(e,t,a)=>{a.d(t,{A:()=>s});var n,r=a("q1tI"),i=a("juqV");class s extends r.Component{render(){const{className:e}=this.props;let t=(0,i.A)("loader-container",e);return r.createElement("div",{className:t,"data-testid":"loader"},n||(n=r.createElement("div",{className:"loader animate-spin"})))}}},MTsA:(e,t,a)=>{a.d(t,{A:()=>p});var n,r,i=a("q1tI"),s=a("juqV"),l=a("Wp0Y"),o=a("H/eQ"),c=a("GPus"),d=a("yCtO"),u=a("NSet");class m extends i.Component{constructor(e){super(e),this._onResize=this._onResize.bind(this),this._onToggleDropDown=this._onToggleDropDown.bind(this),this.state={items:e.items,lastVisibleElementIndex:1/0,isOpenDropDown:!1}}componentDidMount(){this._getTabWidth(),o.A.subscribe(o.A.layout.resize,this._onResize),o.A.subscribe(o.A.layout.adsBackground,this._onResize),o.A.trigger(o.A.navigation.tab_displayed,{type:this.props.active})}UNSAFE_componentWillReceiveProps(e){this.setState({lastVisibleElementIndex:1/0,items:e.items},this._getTabWidth)}componentWillUnmount(){o.A.unsubscribe(o.A.layout.resize,this._onResize),o.A.unsubscribe(o.A.layout.adsBackground,this._onResize)}render(){const e=(0,s.A)({navbar:!0,"navbar-center":"center"===this.props.align});return i.createElement("nav",{className:e},i.createElement("div",{style:this.props.style,className:"container"},i.createElement("ul",{className:"navbar-nav",ref:e=>this._navbarLinks=e,role:"tablist"},this._renderList())))}_renderList(){const e=[],{items:t,lastVisibleElementIndex:a}=this.state;for(let n=0,r=t.length;n<r;n++)if(!t[n].disabled){if(!(n<a)){e.push(this._renderViewMore(n));break}e.push(this._renderItem(n))}return e}_renderItem(e,t=!1){const{active:a,textSize:n}=this.props,r=this.state.items[e],l=(0,s.A)({"navbar-item":!t,"dropdown-item":t,active:a===r.id}),o=r.isButton&&a!==r.id,c=(0,s.A)({"navbar-link":!t,"navbar-button":o}),d=a===r.id?void 0:this._onItemClick.bind(this,r);return i.createElement("li",{key:r.id,className:l},i.createElement(u.EY,{as:"a",color:o?"white":"text.secondary",fontWeight:a===r.id?"semibold":"normal",_hover:{color:o?"white":"text.main"},className:c,role:"tab",tabIndex:"0","aria-selected":a===r.id,onClick:d,onKeyDown:d,"data-testid":`${r.id}-tab`,variant:{large:"body.l.default",medium:"body.m.default"}[n]},r.label))}_renderViewMore(e){const{isOpenDropDown:t,items:a,lastVisibleElementIndex:o}=this.state,m=(0,s.A)("navbar-item","navbar-dropdown",{"dropdown-active":t}),p=[];for(let t=e,n=a.length;t<n;t++)a[t].disabled||p.push(this._renderItem(t,!0));return i.createElement("li",{className:m,key:"viewmore_"+o},i.createElement(u.EY,{as:"button",color:"text.secondary",_hover:{color:"text.main"},className:"navbar-link",type:"button","data-testid":"more_button",onClick:this._onToggleDropDown},(0,l.AP)("Plus"),t?n||(n=i.createElement(c.o,{marginStart:"5px",marginTop:"3px"})):r||(r=i.createElement(d.e,{marginStart:"5px",marginTop:"3px"}))),i.createElement("ul",{className:"dropdown-menu is-right"},p))}_onToggleDropDown(e){if(e.stopPropagation(),void 0!==e.keyCode&&13!==e.keyCode)return;const t=!this.state.isOpenDropDown;this.setState({isOpenDropDown:t}),t?document.addEventListener("click",this._onToggleDropDown):document.removeEventListener("click",this._onToggleDropDown)}_onItemClick(e,t){void 0!==t.keyCode&&13!==t.keyCode||(e.action&&e.action(e),o.A.trigger(o.A.navigation.tab_displayed,{type:e.id}))}_onResize(){let e=1/0,t=0,a=0;const n=this._navbarLinks.offsetWidth,r=this._linksWidth.entries();for(const[i,s]of r){if(t+=s,t>n){e=a;break}a=i}this.state.lastVisibleElementIndex!==e&&this.setState({lastVisibleElementIndex:e})}_getTabWidth(){this._linksWidth=[],Array.from(this._navbarLinks.childNodes).forEach(((e,t)=>{this._linksWidth[t]=e.getBoundingClientRect().width})),this._onResize()}}m.defaultProps={align:"left",textSize:"large"};const p=m},"6f6B":(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n,r,i=a("q1tI"),s=a("nrKQ"),l=a("Ty5D"),o=a("NSet"),c=a("FSqQ"),d=a("MTsA"),u=a("y8BT"),m=(a("aRRr"),a("Vd8Q")),p=a("LOQS"),h=a("7HKI"),g=a("koXx"),b=a("wZBD"),v=a("HmE0");const _=(e,t)=>{e.value&&"string"!=typeof e.value&&"properties"in e.value&&p.A.log({type:"cdp",eventName:t||e.value.event,customAttributes:e.value.properties})},f=({data:e})=>{(0,i.useEffect)((()=>{if(!e)return;const t=e.on_display.actions.find((({type:e})=>"analytic_layer_tracking"===e));t&&_(t)}));const t=(0,i.useMemo)((()=>{var t;return null==e||null===(t=e.primary_cta)||void 0===t||null===(t=t.actions.find((({type:e})=>"deeplink"===e)))||void 0===t?void 0:t.value}),[e]);return e?i.createElement(o.ov,{w:"100%",h:"100%",p:"spacing.xl"},i.createElement(o.mc,{background:"background.neutral.secondary.default",borderRadius:"sm",maxW:"container.lg",padding:"spacing.xl"},i.createElement(o.Tk,{spacing:"spacing.xl",alignItems:"stretch"},n||(n=i.createElement(o.DZ,{as:"h2",variant:"heading.xl"},"DAZN")),i.createElement(o.Tk,{spacing:"spacing.2xl",alignItems:"stretch"},e.landscape_banner&&i.createElement(o.so,{height:"160px",width:"full",bg:e.banner_background,justifyContent:"center",alignItems:"center"},i.createElement(g._V,{src:`https://${m.default.get("host_img_url_ssl")}/${e.landscape_banner.type}/${e.landscape_banner.md5}/160x0-none-90-0-1.${e.landscape_banner.format}`})),i.createElement(o.Tk,{spacing:"spacing.xl",alignItems:"start"},e.above_title&&i.createElement(b.J,{variant:"live"},e.above_title),i.createElement(o.DZ,{variant:"heading.l"},e.title),i.createElement(o.EY,{dangerouslySetInnerHTML:{__html:e.description},color:"text.neutral.secondary.default",variant:"body.l.default"}),i.createElement(o.Tk,{spacing:"spacing.s",alignItems:"stretch",w:"100%"},i.createElement(o.EY,{variant:"body.xl.default"},e.list.header),i.createElement(o.Tk,{bg:"background.neutral.tertiary.default",spacing:"spacing.m",alignItems:"flex-start",p:"spacing.l",borderRadius:"lg",role:"list"},e.list.items.map((e=>i.createElement(o.zt,{spacing:"spacing.m",alignItems:"flex-start",key:e,role:"listitem"},r||(r=i.createElement(h._,{color:"icon.feedback.success.default",boxSize:"icon.m"})),i.createElement(o.EY,{marginBlockStart:"spacing.s",variant:"body.l.default"},e))))))),e.primary_cta&&"string"==typeof t&&i.createElement(o.Tk,{spacing:"spacing.l",alignItems:"start"},i.createElement(v.$n,{as:"a",href:t,target:"_blank",onClick:()=>{var t;const a=null==e||null===(t=e.primary_cta)||void 0===t?void 0:t.actions.find((({type:e})=>"analytic_layer_tracking"===e));a&&_(a,"codistribution_clicked")}},e.primary_cta.label),i.createElement(o.EY,{dangerouslySetInnerHTML:{__html:e.caption},color:"text.neutral.secondary.default",variant:"body.2xs.default"})))))):null},y={dazn:"DAZN"},E={[y.dazn]:"dazn_paywall"};var k,A;const x=(0,l.y)((({tab:e,isFetching:t,data:a=null,history:n})=>{var r;return i.createElement(o.az,{id:"page_partners",paddingTop:"spacing.xl"},i.createElement(d.A,{items:[{id:y.dazn,label:"DAZN",action:e=>{const t=e.id===y.dazn?"":"/"+e.id;n.push("/partners"+t)}}],active:e}),t?k||(k=i.createElement(c.A,null)):e===y.dazn?r||(r=i.createElement(f,{data:a})):A||(A=i.createElement(u.A,null)))})),D=e=>{const t=e.match.params.tab||y.dazn,[a,n]=(0,i.useState)({isFetching:!1,data:null,error:null}),r=(0,i.useCallback)((e=>(n({isFetching:!0,data:null,error:null}),s.A.call({method:"appcusto.getCustomization",data:{ID:E[e]},success:({data:e})=>{n({isFetching:!1,data:e,error:null})},error:e=>{n({isFetching:!1,data:null,error:e})}}))),[]);if((0,i.useEffect)((()=>{if(!Object.values(y).includes(t))return;const e=r(t);return()=>{s.A.cancel(e)}}),[t]),a.error)throw a.error;return i.createElement(x,{data:a.data,tab:t,isFetching:a.isFetching})}},juqV:(e,t,a)=>{function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.d(t,{A:()=>r});const r=function(){for(var e,t,a=0,r="",i=arguments.length;a<i;a++)(e=arguments[a])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}}}]);