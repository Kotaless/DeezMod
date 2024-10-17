"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[1827],{X5lq:(e,t,s)=>{s.d(t,{u:()=>a});var r=s("nKUr");const a=(0,s("AGAM").w)({displayName:"InformationIcon",viewBox:"0 0 24 24",pathSmall:[(0,r.jsx)("path",{d:"M13 9c0-.335-.073-.575-.218-.735C12.616 8.08 12.354 8 12 8c-.357 0-.617.084-.782.268-.146.163-.218.403-.218.732 0 .36.082.61.248.77.166.16.416.23.752.23.368 0 .634-.106.799-.31.134-.166.201-.397.201-.69Zm-1.66 7h1.33v-4.67h-1.33V16Z"}),(0,r.jsx)("path",{fillRule:"evenodd",d:"M12 20c5.137 0 8-2.863 8-8 0-5.137-2.863-8-8-8-5.137 0-8 2.863-8 8 0 5.137 2.863 8 8 8Zm0-14.667c4.424 0 6.667 2.243 6.667 6.667 0 4.424-2.243 6.667-6.667 6.667-4.424 0-6.667-2.243-6.667-6.667 0-4.424 2.243-6.667 6.667-6.667Z",clipRule:"evenodd"})],pathMedium:[(0,r.jsx)("path",{d:"M13.5 7.5c0-.503-.11-.862-.327-1.103C12.923 6.12 12.531 6 12 6c-.536 0-.925.126-1.173.403-.219.243-.327.604-.327 1.097 0 .54.123.914.372 1.154.249.24.624.346 1.128.346.552 0 .952-.159 1.199-.465.2-.249.301-.596.301-1.035ZM11 11v7h2v-7h-2Z"}),(0,r.jsx)("path",{fillRule:"evenodd",d:"M12 23c7.064 0 11-3.936 11-11S19.064 1 12 1 1 4.936 1 12s3.936 11 11 11Zm0-20c5.972 0 9 3.028 9 9 0 5.972-3.028 9-9 9-5.972 0-9-3.028-9-9 0-5.972 3.028-9 9-9Z",clipRule:"evenodd"})]});a.defaultProps={fill:"currentColor",boxSize:"24px",display:"block","data-testid":"InformationIcon"}},m4ka:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});var r,a=s("q1tI"),n=s("TRpf"),o=s("Wp0Y"),l=s("nrKQ"),i=s("TqF5"),c=s("jKJc"),p=s("DdAs"),m=s("NSet"),d=s("IXMZ"),u=s("YIja"),h=s("HmE0"),_=s("g1Fm");class f extends a.Component{constructor(e){super(e),this.state={errorMessage:""},this._onSubmit=this._onSubmit.bind(this)}componentWillUnmount(){l.A.cancel(this._apiRef)}render(){const e=(0,o.AP)("emailconfirmation_title_confirmyouridentity_web"),t=(0,o.AP)("emailconfirmation_text_confirmationcodesentforsecurityreason_web"),s=this.props.email,n="https://support.deezer.com/hc/"+this.props.userLang.toLowerCase(),l=(0,o.AP)("emailconfirmation_text_ifnoaccesstoemailcontactdzrsupport_web",{sprintf:[`class="form-link" target="_blank" id="deezer-support-link" href=${n}`]}),i=(0,_.A)((0,o.AP)("emailconfirmation_action_sendcodeUPP_web"),!0);return a.createElement(a.Fragment,null,r||(r=a.createElement(c.s_,null)),a.createElement(p.rQ,null,e),a.createElement(p.cw,null,a.createElement(m.Tk,null,a.createElement(m.EY,{variant:"body.m.default"},`${t} `,a.createElement(d.Bv.span,{display:"inline-block",color:"text.accent.primary.default"},s)),a.createElement(m.EY,{variant:"body.m.default",dangerouslySetInnerHTML:{__html:l}}),this.state.errorMessage?a.createElement(u.N,{status:"error"},this.state.errorMessage):null)),a.createElement(c.jl,null,a.createElement(h.$n,{type:"submit",onClick:this._onSubmit},i)))}_onSubmit(e){e.preventDefault(),this._apiRef=l.A.call({method:"user.requestSecuredSessionCode",data:{},success:()=>{this.props.closeModal(),this.props.openModal({name:"IDENTITY_VERIFICATION",size:"small",props:{email:this.props.email,requestType:this.props.requestType,...this.props.cb&&{cb:this.props.cb}}})},error:e=>{if("Session already secured"===e.response.error[e.name]){const e=()=>{switch(this.props.requestType){case"mail":return"UPDATE_EMAIL";case"request_my_data":return"REQUEST_MY_DATA_CONFIRMATION";default:return"UPDATE_PASSWORD"}};this.props.openModal({name:e(),size:"small"})}else"Secured code already sent"===e.response.error[e.name]&&this.setState({errorMessage:(0,o.AP)("errormessage_text_maximumcodenumbersrequested_web")})}})}}const b=(0,n.Ng)((({user:e})=>({userLang:e.SETTING_LOCALE})),{openModal:i.qf,closeModal:i.Oo})(f)}}]);