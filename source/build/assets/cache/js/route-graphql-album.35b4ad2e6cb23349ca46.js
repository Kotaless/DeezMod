"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[7480],{VAa1:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var a,i=r("q1tI"),l=r("TRpf"),n=r("A2sV"),s=r("xobL"),d=r("q7N2"),o=r("p/gB"),u=r("5G9X"),c=r("sAMA"),m=r("FSqQ"),b=r("d6cg"),p=r("G929"),A=r("PMxo"),g=r("0JBE");const f=({params:e,dataFromStore:t})=>{const{data:r,loading:f,error:E}=(0,n.OD9)({variables:{albumId:e.id}}),S=(0,l.d4)((e=>(0,s.Uw)(e.user)===c.g));if(!t)return null;if(String(e.id)!==String(t.ALB_ID)||t.partial||f)return a||(a=i.createElement(m.A,null));if(E)throw E;if(!r||!r.album){const e=new Error("missing data in album graphql call");throw e.cause=JSON.stringify(r),e}const{id:w,SONGS:x}=t,h={ID:e.id,TYPE:(0,o.Us)(u.Ay.Album)};return i.createElement(g.OJ,{value:{page:"album",entity:"album",entityId:e.id}},i.createElement(b.A,{dataFromStore:t,id:Number(e.id),context:h},i.createElement(p.A,(0,d.Bx)(r.album,t)),i.createElement(A.A,{id:w,context:h,items:x,shouldExplicitBeHidden:S})))}}}]);