import{a as va}from"./devEnvironmentUtils-D6qIi8Ky.js";import{r as Ue,t as zt,aF as br,n as M,aE as ga,v as Re,aw as fe,k as Rr,ar as j,B as me,x as pe,bc as xa,O as $e,b1 as _a,i as Io,I as nt,q as Gt,z as Zt,ax as Qe,G as Ta,l as Kt,aB as ba,ah as Sr,P as Sa,S as Ea,_ as to,b2 as ro}from"./portalItemUtils-SOz5vLrp.js";import{i as oo,j as Po,n as ya}from"./mat3-CCcDFLh0.js";import{t as ur,e as At,o as ht}from"./mat3f64-q3fE-ZOt.js";import{H as No,G as Lo,i as Er,h as Aa}from"./mat4-Bz0eCsX6.js";import{o as Ut,r as wa,e as Qt}from"./mat4f64-CSKppSlJ.js";import{l as Do,n as er}from"./vec2f64-DA6GkJuH.js";import{i as Ma,A as Ca,G as Oa,P as Fo,h as jt}from"./aaBoundingBox-BFSoHgBK.js";import{ah as Bo,U as zo,ag as Ra,dU as $a,aa as Go,aP as Vo,_ as wt,bW as Ia,n as $r,s as Mt,a8 as Pa,b4 as io,c7 as Na,b$ as pt,d4 as vt,R as ao,dV as La,aA as Da,aD as Fa,dW as Wt,az as Ba,c5 as Fe,aE as za,dX as Ga,k as m,y as G,l as Ir,S as Uo,m as jo,cf as Va,bk as It,e as Ua,dY as ja,A as Wo,c as Ho}from"./index-DxjjwORx.js";import{x as tr,c as yr,y as Wa,u as Ha,q as ka,i as Ht,L as qa,O as Ya,E as Xa}from"./BufferView-BajcuKIt.js";import{e as Ja,f as Za,l as no,o as so}from"./vec3-BUcyzxMc.js";import{n as Ka,s as lo}from"./vec4-B7llIc_f.js";import{l as Qa,n as en,g as Ye,o as tn,h as rn,t as on,i as an}from"./DefaultMaterial_COLOR_GAMMA-DutZsPNm.js";import{a as nn,u as _t,b as Ar,i as sn,e as ve,N as Ie,s as J,O as ko,c as Ct,r as hr}from"./resourceUtils-BAjEH468.js";import{i as ln,f as cn,c as st,u as dn,e as qo,b as un}from"./vec2f32-CGs1eLlR.js";import{r as Yo}from"./Version-DCMlFsZu.js";import{t as hn,l as Xo}from"./Indices-Cs-uwXjb.js";import{I as mn,L as fn,l as kt,t as Ze}from"./orientedBoundingBox-DZ0fVAMJ.js";import{s as k}from"./Util-CW-zNJzi.js";import{s as Jo,_ as Zo,V as Ce}from"./sphere-D2fDDnYZ.js";import{v as pn}from"./lineSegment-_ZbqB29M.js";import"./plane-u7qWL3m_.js";import{e as f}from"./VertexAttribute-BlT9lbVY.js";import{c as we,G as ze,L as ct,D as je,N as Ko,S as Qo,T as co,R as Oe,O as ge,X as uo,E as vn,I as ne,t as gn,_ as xn,f as _n}from"./enums-CxXC-vJk.js";import{H as Tn}from"./InterleavedLayout-53SozgpV.js";import{o as s,n as ye,a as Ot,b as K,t as rr,c as B,d as mr,r as fr}from"./NormalAttribute.glsl-BxIWADfV.js";import{n as Pr,r as Nr}from"./vec4f64-CCf6w8sj.js";import{a as D}from"./BindType-BmZEZMMh.js";import{o as We}from"./vec2-DDHKBXmB.js";import{s as ie}from"./vec42-Bl6Zy0Tn.js";import{n as Rt}from"./compilerUtils-DWBoX8E2.js";import"./commonProperties-CaQYEfc-.js";import"./PortalItem-BqXuNGGG.js";import"./quat-BvPN55gH.js";import"./quatf64-Bdb9ZJJK.js";import"./spatialReferenceEllipsoidUtils-Dql5NhyH.js";import"./computeTranslationToOriginAndRotation-bOTSnVu0.js";import"./types-D0PSWh4d.js";import"./Layer-CFBcAcA1.js";function Pt(t,e=!1){return t<=Bo?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function bn(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(ye.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(ye.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(ye.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(ye.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let ee=class{constructor(e,r,o,a,i=null){if(this.name=e,this.type=r,this.arraySize=i,this.bind={[D.Pass]:null,[D.Draw]:null},a)switch(o){case D.Pass:this.bind[D.Pass]=a;break;case D.Draw:this.bind[D.Draw]=a}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},Tt=class extends ee{constructor(e,r){super(e,"sampler2D",D.Draw,(o,a,i)=>o.bindTexture(e,r(a,i)))}};function ei({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let de=class extends ee{constructor(e,r){super(e,"vec3",D.Draw,(o,a,i,n)=>o.setUniform3fv(e,r(a,i,n)))}},Z=class extends ee{constructor(e,r){super(e,"vec3",D.Pass,(o,a,i)=>o.setUniform3fv(e,r(a,i)))}},se=class extends ee{constructor(e,r){super(e,"float",D.Pass,(o,a,i)=>o.setUniform1f(e,r(a,i)))}},ti=class extends ee{constructor(e,r){super(e,"mat3",D.Draw,(o,a,i)=>o.setUniformMatrix3fv(e,r(a,i)))}},xe=class extends ee{constructor(e,r){super(e,"mat3",D.Pass,(o,a,i)=>o.setUniformMatrix3fv(e,r(a,i)))}},lt=class extends ee{constructor(e,r){super(e,"mat4",D.Pass,(o,a,i)=>o.setUniformMatrix4fv(e,r(a,i)))}};function mt(t){if(t==null)return null;const e=t.offset!=null?t.offset:ln,r=t.rotation!=null?t.rotation:0,o=t.scale!=null?t.scale:cn,a=ur(1,0,0,0,1,0,e[0],e[1],1),i=ur(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=ur(o[0],0,0,0,o[1],0,0,0,1),c=At();return oo(c,i,n),oo(c,a,c),c}let Sn=class{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}},En=class{constructor(e,r,o){this.name=e,this.lodThreshold=r,this.pivotOffset=o,this.stageResources=new Sn,this.numberOfVertices=0}},yn=class{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return this._outer.size===0}get(e,r){var o;return(o=this._outer.get(e))==null?void 0:o.get(r)}set(e,r,o){const a=this._outer.get(e);a?a.set(r,o):this._outer.set(e,new Map([[r,o]]))}delete(e,r){const o=this._outer.get(e);o&&(o.delete(r),o.size===0&&this._outer.delete(e))}forEach(e){this._outer.forEach((r,o)=>e(r,o))}};async function ri(t,e){const{data:r}=await zo(t,{responseType:"image",...e});return r}function An(t){if(t.length<Bo)return Array.from(t);if(Ra(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return $a(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let wn=class oi{constructor(e,r,o){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.position=o,this._children=void 0,k(e.length>=1),k(o.size===3||o.size===4);const{data:a,size:i,indices:n}=o;k(n.length%this._numIndexPerPrimitive==0),k(n.length>=e.length*this._numIndexPerPrimitive);const c=e.length;let l=i*n[this._numIndexPerPrimitive*e[0]];Be.clear(),Be.push(l);const u=Ue(a[l],a[l+1],a[l+2]),d=zt(u);for(let v=0;v<c;++v){const x=this._numIndexPerPrimitive*e[v];for(let _=0;_<this._numIndexPerPrimitive;++_){l=i*n[x+_],Be.push(l);let g=a[l];u[0]=Math.min(g,u[0]),d[0]=Math.max(g,d[0]),g=a[l+1],u[1]=Math.min(g,u[1]),d[1]=Math.max(g,d[1]),g=a[l+2],u[2]=Math.min(g,u[2]),d[2]=Math.max(g,d[2])}}this.bbMin=u,this.bbMax=d;const h=br(M(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-u[0],d[1]-u[1]),d[2]-u[2]);let p=this.radius*this.radius;for(let v=0;v<Be.length;++v){l=Be.at(v);const x=a[l]-h[0],_=a[l+1]-h[1],g=a[l+2]-h[2],$=x*x+_*_+g*g;if($<=p)continue;const C=Math.sqrt($),P=.5*(C-this.radius);this.radius=this.radius+P,p=this.radius*this.radius;const L=P/C;h[0]+=x*L,h[1]+=_*L,h[2]+=g*L}this.center=h,Be.clear()}getChildren(){if(this._children||ga(this.bbMin,this.bbMax)<=1)return this._children;const e=br(M(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,o=new Uint8Array(r),a=new Array(8);for(let d=0;d<8;++d)a[d]=0;const{data:i,size:n,indices:c}=this.position;for(let d=0;d<r;++d){let h=0;const p=this._numIndexPerPrimitive*this.primitiveIndices[d];let v=n*c[p],x=i[v],_=i[v+1],g=i[v+2];for(let $=1;$<this._numIndexPerPrimitive;++$){v=n*c[p+$];const C=i[v],P=i[v+1],L=i[v+2];C<x&&(x=C),P<_&&(_=P),L<g&&(g=L)}x<e[0]&&(h|=1),_<e[1]&&(h|=2),g<e[2]&&(h|=4),o[d]=h,++a[h]}let l=0;for(let d=0;d<8;++d)a[d]>0&&++l;if(l<2)return;const u=new Array(8);for(let d=0;d<8;++d)u[d]=a[d]>0?new Uint32Array(a[d]):void 0;for(let d=0;d<8;++d)a[d]=0;for(let d=0;d<r;++d){const h=o[d];u[h][a[h]++]=this.primitiveIndices[d]}this._children=new Array;for(let d=0;d<8;++d)u[d]!==void 0&&this._children.push(new oi(u[d],this._numIndexPerPrimitive,this.position));return this._children}static prune(){Be.prune()}};const Be=new Go({deallocator:null});let Lr=class{constructor(){this.id=Vo()}};var Me;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"})(Me||(Me={}));function Mn(t){return t?{p0:zt(t.p0),p1:zt(t.p1),p2:zt(t.p2)}:{p0:M(),p1:M(),p2:M()}}function Cn(t,e,r){return Re(pr,e,t),Re(ho,r,t),.5*fe(Rr(pr,pr,ho))}new Jo(pn);new Jo(()=>Mn());const pr=M(),ho=M();function On(t,e){if(!t)return!1;const{size:r,data:o,indices:a}=t;j(e,0,0,0),j(ae,0,0,0);let i=0,n=0;for(let c=0;c<a.length-2;c+=3){const l=a[c]*r,u=a[c+1]*r,d=a[c+2]*r;j(X,o[l],o[l+1],o[l+2]),j(Ae,o[u],o[u+1],o[u+2]),j(Nt,o[d],o[d+1],o[d+2]);const h=Cn(X,Ae,Nt);h?(me(X,X,Ae),me(X,X,Nt),pe(X,X,1/3*h),me(e,e,X),i+=h):(me(ae,ae,X),me(ae,ae,Ae),me(ae,ae,Nt),n+=3)}return(n!==0||i!==0)&&(i!==0?(pe(e,e,1/i),!0):n!==0&&(pe(e,ae,1/n),!0))}function Rn(t,e){if(!t)return!1;const{size:r,data:o,indices:a}=t;j(e,0,0,0);let i=-1,n=0;for(let c=0;c<a.length;c++){const l=a[c]*r;i!==l&&(e[0]+=o[l],e[1]+=o[l+1],e[2]+=o[l+2],n++),i=l}return n>1&&pe(e,e,1/n),n>0}function $n(t,e,r){if(!t)return!1;j(r,0,0,0),j(ae,0,0,0);let o=0,a=0;const{size:i,data:n,indices:c}=t,l=c.length-1,u=l+(e?2:0);for(let d=0;d<u;d+=2){const h=d<l?d+1:0,p=c[d<l?d:l]*i,v=c[h]*i;X[0]=n[p],X[1]=n[p+1],X[2]=n[p+2],Ae[0]=n[v],Ae[1]=n[v+1],Ae[2]=n[v+2],pe(X,me(X,X,Ae),.5);const x=xa(X,Ae);x>0?(me(r,r,pe(X,X,x)),o+=x):o===0&&(me(ae,ae,X),a++)}return o!==0?(pe(r,r,1/o),!0):a!==0&&(pe(r,ae,1/a),!0)}const X=M(),Ae=M(),Nt=M(),ae=M();let In=class{constructor(e){this.channel=e,this.id=Vo()}};function Pn(t,e){const r=t.length;for(let o=0;o<r;++o)et[0]=t[o],e[o]=et[0];return e}function Nn(t,e){const r=t.length;for(let o=0;o<r;++o)et[0]=t[o],et[1]=t[o]-et[0],e[o]=et[1];return e}const et=new Float32Array(2);function Ln(t,e){return t==null&&(t=[]),t.push(e),t}function Dn(t,e){if(t==null)return null;const r=t.filter(o=>o!==e);return r.length===0?null:r}let ii=class ai extends Lr{constructor(e,r,o=null,a=Me.Mesh,i=null,n=-1){super(),this.material=e,this.mapPositions=o,this.type=a,this.objectAndLayerIdColor=i,this.edgeIndicesLength=n,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[c,l]of r)this._attributes.set(c,{...l,indices:hn(l.indices)}),c===f.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(c).indices.length:this.edgeIndicesLength)}instantiate(e={}){const r=new ai(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((o,a)=>{o.exclusive=!1,r._attributes.set(a,o)}),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get attributes(){return this._attributes}getMutableAttribute(e){let r=this._attributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:An(r.data)},this._attributes.set(e,r)),r}setAttributeData(e,r){const o=this._attributes.get(e);o&&this._attributes.set(e,{...o,exclusive:!0,data:r})}get indexCount(){const e=this._attributes.values().next().value.indices;return(e==null?void 0:e.length)??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Me.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Me.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&$e(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.attributes.get(f.POSITION);return On(r,e)}_computeAttachmentOriginLines(e){const r=this.attributes.get(f.POSITION);return $n(r,Fn(this.material.parameters,r),e)}_computeAttachmentOriginPoints(e){const r=this.attributes.get(f.POSITION);return Rn(r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(f.POSITION);if(!e||e.indices.length===0)return null;const r=this.type===Me.Mesh?3:1;k(e.indices.length%r==0,"Indexing error: "+e.indices.length+" not divisible by "+r);const o=Xo(e.indices.length/r);return new wn(o,r,e)}get transformation(){return this._transformation??Ut}set transformation(e){this._transformation=e&&e!==Ut?wa(e):null}addHighlight(){const e=new In(nn.Highlight);return this.highlights=Ln(this.highlights,e),e}removeHighlight(e){this.highlights=Dn(this.highlights,e)}};function Fn(t,e){return!(!("isClosed"in t)||!t.isClosed)&&e.indices.length>2}function Bn(){return mo??(mo=(async()=>{const t=await wt(()=>import("./basis_transcoder-B40h2JNH.js"),[]),e=await t.default({locateFile:r=>Ia(`esri/libs/basisu/${r}`)});return e.initializeBasis(),e})()),mo}let mo;var Ge;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Ge||(Ge={}));let ue=null,Lt=null;async function ni(){return Lt==null&&(Lt=Bn(),ue=await Lt),Lt}function zn(t,e){if(ue==null)return t.byteLength;const r=new ue.BasisFile(new Uint8Array(t)),o=li(r)?si(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),o}function Gn(t,e){if(ue==null)return t.byteLength;const r=new ue.KTX2File(new Uint8Array(t)),o=ci(r)?si(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),o}function si(t,e,r,o,a){const i=dn(e?we.COMPRESSED_RGBA8_ETC2_EAC:we.COMPRESSED_RGB8_ETC2),n=a&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*o*i*n)}function li(t){return t.getNumImages()>=1&&!t.isUASTC()}function ci(t){return t.getFaces()>=1&&t.isETC1S()}async function Vn(t,e,r){ue==null&&(ue=await ni());const o=new ue.BasisFile(new Uint8Array(r));if(!li(o))return null;o.startTranscoding();const a=di(t,e,o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),(i,n)=>o.getImageTranscodedSizeInBytes(0,i,n),(i,n,c)=>o.transcodeImage(c,0,i,n,0,0));return o.close(),o.delete(),a}async function Un(t,e,r){ue==null&&(ue=await ni());const o=new ue.KTX2File(new Uint8Array(r));if(!ci(o))return null;o.startTranscoding();const a=di(t,e,o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),(i,n)=>o.getImageTranscodedSizeInBytes(i,0,0,n),(i,n,c)=>o.transcodeImage(c,i,0,0,n,0,-1,-1));return o.close(),o.delete(),a}function di(t,e,r,o,a,i,n,c){const{compressedTextureETC:l,compressedTextureS3TC:u}=t.capabilities,[d,h]=l?o?[Ge.ETC2_RGBA,we.COMPRESSED_RGBA8_ETC2_EAC]:[Ge.ETC1_RGB,we.COMPRESSED_RGB8_ETC2]:u?o?[Ge.BC3_RGBA,we.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ge.BC1_RGB,we.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ge.RGBA32,ze.RGBA],p=e.hasMipmap?r:Math.min(1,r),v=[];for(let x=0;x<p;x++)v.push(new Uint8Array(n(x,d))),c(x,d,v[x]);return e.internalFormat=h,e.hasMipmap=v.length>1,e.samplingMode=e.hasMipmap?ct.LINEAR_MIPMAP_LINEAR:ct.LINEAR,e.width=a,e.height=i,new st(t,e,{type:"compressed",levels:v})}const Dt=()=>$r.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),jn=542327876,Wn=131072,Hn=4;function Dr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function kn(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const qn=Dr("DXT1"),Yn=Dr("DXT3"),Xn=Dr("DXT5"),Jn=31,Zn=0,Kn=1,Qn=2,es=3,ts=4,rs=7,os=20,is=21;function as(t,e,r){const o=ns(r,e.hasMipmap??!1);if(o==null)throw new Error("DDS texture data is null");const{textureData:a,internalFormat:i,width:n,height:c}=o;return e.samplingMode=a.levels.length>1?ct.LINEAR_MIPMAP_LINEAR:ct.LINEAR,e.hasMipmap=a.levels.length>1,e.internalFormat=i,e.width=n,e.height=c,new st(t,e,a)}function ns(t,e){const r=new Int32Array(t,0,Jn);if(r[Zn]!==jn)return Dt().error("Invalid magic number in DDS header"),null;if(!(r[os]&Hn))return Dt().error("Unsupported format, must contain a FourCC code"),null;const o=r[is];let a,i;switch(o){case qn:a=8,i=we.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Yn:a=16,i=we.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Xn:a=16,i=we.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Dt().error("Unsupported FourCC code:",kn(o)),null}let n=1,c=r[ts],l=r[es];(3&c||3&l)&&(Dt().warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const u=c,d=l;let h,p;r[Qn]&Wn&&e!==!1&&(n=Math.max(1,r[rs]));let v=r[Kn]+4;const x=[];for(let _=0;_<n;++_)p=(c+3>>2)*(l+3>>2)*a,h=new Uint8Array(t,v,p),x.push(h),v+=p,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:x},internalFormat:i,width:u,height:d}}function ss(t,e){let i=t.width*t.height;if(i<4096)return t instanceof ImageData?ui(t):t;let n=t.width,c=t.height;do n=Math.ceil(n/2),c=Math.ceil(c/2),i=n*c;while(i>1048576||e!=null&&(n>e||c>e));return Fr(t,n,c)}function ls(t,e){const r=Math.max(t.width,t.height);if(r<=e)return t;const o=e/r;return Fr(t,Math.round(t.width*o),Math.round(t.height*o))}function Fr(t,e,r){if(t instanceof ImageData)return Fr(ui(t),e,r);const o=document.createElement("canvas");return o.width=e,o.height=r,o.getContext("2d").drawImage(t,0,0,o.width,o.height),o}function ui(t){const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");if(r==null)throw new Mt("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(t,0,0),e}let hi=class extends Lr{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=Me.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Pa,this._parameters={...ds,...r},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(e,r),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(io(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const o=()=>{e.removeEventListener("canplay",o),e.play()};e.addEventListener("canplay",o)}}}_startPreloadImageElement(e){Na(e.src)||io(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const r=new qo;return r.wrapMode=this._parameters.wrap??je.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?ct.LINEAR_MIPMAP_LINEAR:ct.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var e;return((e=this._glTexture)==null?void 0:e.usedMemory)||cs(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new st(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):(pt(r)||vt(r))&&this._parameters.encoding===_t.DDS_ENCODING?this._loadFromDDSData(e,r):(pt(r)||vt(r))&&this._parameters.encoding===_t.KTX2_ENCODING?this._loadFromKTX2(e,r):(pt(r)||vt(r))&&this._parameters.encoding===_t.BASIS_ENCODING?this._loadFromBasis(e,r):vt(r)?this._loadFromPixelData(e,r):pt(r)?this._loadFromPixelData(e,new Uint8Array(r)):null)}_frameUpdate(e,r){return this._glTexture==null||e.readyState<bt.HAVE_CURRENT_DATA||r===e.currentTime?r:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,r){return this._glTexture=as(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>Un(e,this._createDescriptor(e),r).then(o=>(this._glTexture=o,o)))}_loadFromBasis(e,r){return this._loadAsync(()=>Vn(e,this._createDescriptor(e),r).then(o=>(this._glTexture=o,o)))}_loadFromPixelData(e,r){k(this._parameters.width>0&&this._parameters.height>0);const o=this._createDescriptor(e);return o.pixelFormat=this._parameters.components===1?ze.LUMINANCE:this._parameters.components===3?ze.RGB:ze.RGBA,o.width=this._parameters.width??0,o.height=this._parameters.height??0,this._glTexture=new st(e,o,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async o=>{const a=await ri(r,{signal:o});return ao(o),this._loadFromImage(e,a)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async o=>{const a=await La(r,r.src,!1,o);return ao(o),this._loadFromImage(e,a)})}_loadFromVideoElement(e,r){return r.readyState>=bt.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(o=>new Promise((a,i)=>{const n=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),Ba(u)},c=()=>{r.readyState>=bt.HAVE_CURRENT_DATA&&(n(),a(this._loadFromImage(e,r)))},l=d=>{n(),i(d||new Mt("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const u=Da(o,()=>l(Fa()))}))}_loadFromImage(e,r){let o=r;if(!(o instanceof HTMLVideoElement)){const{maxTextureSize:n}=e.parameters;o=this._parameters.downsampleUncompressed?ss(o,n):ls(o,n)}const a=mi(o);this._parameters.width=a.width,this._parameters.height=a.height;const i=this._createDescriptor(e);return i.pixelFormat=this._parameters.components===3?ze.RGB:ze.RGBA,i.width=a.width,i.height=a.height,this._glTexture=new st(e,i,o),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const o=e(r.signal);this._loadingPromise=o;const a=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===o&&(this._loadingPromise=null)};return o.then(a,a),o}unload(){if(this._glTexture=Wt(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function cs(t,e){if(t==null)return 0;if(pt(t)||vt(t))return e.encoding===_t.KTX2_ENCODING?Gn(t,!!e.mipmap):e.encoding===_t.BASIS_ENCODING?zn(t,!!e.mipmap):t.byteLength;const{width:r,height:o}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?mi(t):e;return(e.mipmap?4/3:1)*r*o*(e.components||4)||0}function mi(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var bt;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(bt||(bt={}));const ds={wrap:{s:je.REPEAT,t:je.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};function us(t,e){const r=t.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case re.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case re.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case re.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Rt(e.doubleSidedMode);case re.COUNT:}}var re;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(re||(re={}));var Y;function Ve(t,e){switch(e.textureCoordinateType){case Y.Default:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case Y.Compressed:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case Y.Atlas:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(f.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:Rt(e.textureCoordinateType);case Y.None:return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);case Y.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(Y||(Y={}));function hs(t){t.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function fi(t,e){switch(t.include(Ve,e),e.textureCoordinateType){case Y.Default:case Y.Compressed:return void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case Y.Atlas:return t.include(hs),void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:Rt(e.textureCoordinateType);case Y.None:case Y.COUNT:return}}let Q=class extends ee{constructor(e,r){super(e,"sampler2D",D.Pass,(o,a,i)=>o.bindTexture(e,r(a,i)))}},ms=class{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){this._techniques.release(this._technique)}get technique(){return this._technique}get _stippleTextures(){return this._techniques.constructionContext.stippleTextures}get _markerTextures(){return this._techniques.constructionContext.markerTextures}ensureTechnique(e,r){return this._technique=this._techniques.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return Ar.LOADED}},fs=class extends ms{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Fe(this._texture),this._textureNormal=Fe(this._textureNormal),this._textureEmissive=Fe(this._textureEmissive),this._textureOcclusion=Fe(this._textureOcclusion),this._textureMetallicRoughness=Fe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?Ar.LOADED:Ar.LOADING}get textureBindParameters(){return new ps(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=Fe(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const o=this._textures.acquire(e);if(za(o))return++this._numLoading,void o.then(a=>{if(this._disposed)return Fe(a),void r(null);r(a)}).finally(()=>--this._numLoading);r(o)}},ps=class extends Ot{constructor(e=null,r=null,o=null,a=null,i=null,n,c){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=o,this.textureOcclusion=a,this.textureMetallicRoughness=i,this.scale=n,this.normalTextureTransformMatrix=c}};var N;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Simplified=5]="Simplified",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(N||(N={}));function pi(t,e){const r=t.fragment,o=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===N.Normal&&o&&t.include(fi,e),e.pbrMode!==N.Schematic)if(e.pbrMode!==N.Disabled){if(e.pbrMode===N.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const a=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(a===D.Pass?new Q("texMetallicRoughness",i=>i.textureMetallicRoughness):new Tt("texMetallicRoughness",i=>i.textureMetallicRoughness)),r.code.add(s`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(a===D.Pass?new Q("texEmission",i=>i.textureEmissive):new Tt("texEmission",i=>i.textureEmissive)),r.code.add(s`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(a===D.Pass?new Q("texOcclusion",i=>i.textureOcclusion):new Tt("texOcclusion",i=>i.textureOcclusion)),r.code.add(s`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),a===D.Pass?r.uniforms.add(new Z("emissionFactor",i=>i.emissiveFactor),new Z("mrrFactors",i=>i.mrrFactors)):r.uniforms.add(new de("emissionFactor",i=>i.emissiveFactor),new de("mrrFactors",i=>i.mrrFactors)),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${e.hasMetallicRoughnessTexture?s`applyMetallnessAndRoughness(${e.hasMetallicRoughnessTextureTransform?s`metallicRoughnessUV`:"vuv0"});`:""}

      ${e.hasEmissionTexture?s`applyEmission(${e.hasEmissiveTextureTransform?s`emissiveUV`:"vuv0"});`:""}

      ${e.hasOcclusionTexture?s`applyOcclusion(${e.hasOcclusionTextureTransform?s`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}const or=new Map([[f.POSITION,0],[f.NORMAL,1],[f.NORMALCOMPRESSED,1],[f.UV0,2],[f.COLOR,3],[f.COLORFEATUREATTRIBUTE,3],[f.SIZE,4],[f.TANGENT,4],[f.CENTEROFFSETANDDISTANCE,5],[f.SYMBOLCOLOR,5],[f.FEATUREATTRIBUTE,6],[f.INSTANCEFEATUREATTRIBUTE,6],[f.INSTANCECOLOR,7],[f.OBJECTANDLAYERIDCOLOR,7],[f.INSTANCEOBJECTANDLAYERIDCOLOR,7],[f.INSTANCEMODEL,8],[f.INSTANCEMODELNORMAL,12],[f.INSTANCEMODELORIGINHI,11],[f.INSTANCEMODELORIGINLO,15]]);function vs(t){return Math.abs(t*t*t)}function gs(t,e,r){const o=r.parameters;return vr.scale=Math.min(o.divisor/(e-o.offset),1),vr.factor=vs(t),vr}function xs(t,e){return _a(t*Math.max(e.scale,e.minScaleFactor),t,e.factor)}function _s(t,e,r,o){return xs(t,gs(e,r,o))}const vr={scale:0,factor:0,minScaleFactor:0};function Ts(t,e,r,o,a){let i=(r.screenLength||0)*t.pixelRatio;a!=null&&(i=_s(i,o,e,a));const n=i*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Io(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function vi(t,e){const r=e?vi(e):{};for(const o in t){let a=t[o];a!=null&&a.forEach&&(a=Ss(a)),a==null&&o in r||(r[o]=a)}return r}function bs(t,e){let r=!1;for(const o in e){const a=e[o];a!==void 0&&(Array.isArray(a)?t[o]===null?(t[o]=a.slice(),r=!0):Ga(t[o],a)&&(r=!0):t[o]!==a&&(r=!0,t[o]=a))}return r}function Ss(t){const e=[];return t.forEach(r=>e.push(r)),e}const Es={multiply:1,ignore:2,replace:3,tint:4};let ys=class extends Lr{constructor(e,r){super(),this.type=Me.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=or,this._pp0=Ue(0,0,1),this._pp1=Ue(0,0,0),this._parameters=vi(e,r),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){bs(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===sn.ON)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){var e;(e=this.repository)==null||e.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,r,o,a,i,n){return this._pp0[0]=this._pp1[0]=a[0],this._pp0[1]=this._pp1[1]=a[1],this.intersect(e,r,o,this._pp0,this._pp1,i)}};var wr;(function(t){t[t.None=0]="None",t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(wr||(wr={}));var oe;(function(t){t[t.ColorAlpha=0]="ColorAlpha",t[t.FrontFace=1]="FrontFace",t[t.NONE=2]="NONE",t[t.COUNT=3]="COUNT"})(oe||(oe={}));function gi(t,e,r,o,a=co.ADD,i=co.ADD,n=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:r,dstAlpha:o,opRgb:a,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}const As={face:Ko.BACK,mode:Qo.CCW},ws={face:Ko.FRONT,mode:Qo.CCW},Ms=t=>t===ve.Back?As:t===ve.Front?ws:null,Cs={zNear:0,zFar:1},Br={r:!0,g:!0,b:!0,a:!0};function Os(t){return Bs.intern(t)}function Rs(t){return zs.intern(t)}function $s(t){return Gs.intern(t)}function Is(t){return Vs.intern(t)}function Ps(t){return Us.intern(t)}function Ns(t){return js.intern(t)}function Ls(t){return Ws.intern(t)}function Ds(t){return Hs.intern(t)}function Fs(t){return ks.intern(t)}function zr(t){return qs.intern(t)}let _e=class{constructor(e,r){this._makeKey=e,this._makeRef=r,this._interns=new Map}intern(e){if(!e)return null;const r=this._makeKey(e),o=this._interns;return o.has(r)||o.set(r,this._makeRef(e)),o.get(r)??null}};function Te(t){return"["+t.join(",")+"]"}const Bs=new _e(xi,t=>({__tag:"Blending",...t}));function xi(t){return t?Te([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const zs=new _e(_i,t=>({__tag:"Culling",...t}));function _i(t){return t?Te([t.face,t.mode]):null}const Gs=new _e(Ti,t=>({__tag:"PolygonOffset",...t}));function Ti(t){return t?Te([t.factor,t.units]):null}const Vs=new _e(bi,t=>({__tag:"DepthTest",...t}));function bi(t){return t?Te([t.func]):null}const Us=new _e(Si,t=>({__tag:"StencilTest",...t}));function Si(t){return t?Te([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const js=new _e(Ei,t=>({__tag:"DepthWrite",...t}));function Ei(t){return t?Te([t.zNear,t.zFar]):null}const Ws=new _e(yi,t=>({__tag:"ColorWrite",...t}));function yi(t){return t?Te([t.r,t.g,t.b,t.a]):null}const Hs=new _e(Ai,t=>({__tag:"StencilWrite",...t}));function Ai(t){return t?Te([t.mask]):null}const ks=new _e(wi,t=>({__tag:"DrawBuffers",...t}));function wi(t){return t?Te(t.buffers):null}const qs=new _e(Ys,t=>({blending:Os(t.blending),culling:Rs(t.culling),polygonOffset:$s(t.polygonOffset),depthTest:Is(t.depthTest),stencilTest:Ps(t.stencilTest),depthWrite:Ns(t.depthWrite),colorWrite:Ls(t.colorWrite),stencilWrite:Ds(t.stencilWrite),drawBuffers:Fs(t.drawBuffers)}));function Ys(t){return t?Te([xi(t.blending),_i(t.culling),Ti(t.polygonOffset),bi(t.depthTest),Si(t.stencilTest),Ei(t.depthWrite),yi(t.colorWrite),Ai(t.stencilWrite),wi(t.drawBuffers)]):null}const Xs=gi(Oe.SRC_ALPHA,Oe.ONE,Oe.ONE_MINUS_SRC_ALPHA,Oe.ONE_MINUS_SRC_ALPHA),Js=gi(Oe.ONE,Oe.ZERO,Oe.ONE,Oe.ONE_MINUS_SRC_ALPHA);function Zs(t){return t===oe.FrontFace?null:Js}const Ks=5e5,Qs={factor:-1,units:-2};function el(t){return t?Qs:null}function tl(t,e=ge.LESS){return t===oe.NONE||t===oe.FrontFace?e:ge.LEQUAL}function rl(t){return t===oe.ColorAlpha?{buffers:[uo.COLOR_ATTACHMENT0,uo.COLOR_ATTACHMENT1]}:null}let ol=class{constructor(e=!1,r=!0){this.isVerticalRay=e,this.normalRequired=r}};const Ft=Ma();function il(t,e,r,o,a,i){if(!t.visible)return;const n=nt(xl,o,r),c=(u,d,h)=>{i(u,h,d,!1)},l=new ol(!1,e.options.normalRequired);if(t.boundingInfo){k(t.type===Me.Mesh);const u=e.tolerance;Mi(t.boundingInfo,r,n,u,a,l,c)}else{const u=t.attributes.get(f.POSITION),d=u.indices;sl(r,n,0,d.length/3,d,u.data,u.stride,a,l,c)}}const al=M();function Mi(t,e,r,o,a,i,n){if(t==null)return;const c=ml(r,al);if(Ca(Ft,t.bbMin),Oa(Ft,t.bbMax),a!=null&&a.applyToAabb(Ft),fl(Ft,e,c,o)){const{primitiveIndices:l,position:u}=t,d=l?l.length:u.indices.length/3;if(d>vl){const h=t.getChildren();if(h!==void 0){for(const p of h)Mi(p,e,r,o,a,i,n);return}}nl(e,r,0,d,u.indices,u.data,u.stride,l,a,i,n)}}const gt=M();function nl(t,e,r,o,a,i,n,c,l,u,d){const h=t[0],p=t[1],v=t[2],x=e[0],_=e[1],g=e[2],{normalRequired:$}=u;for(let C=r;C<o;++C){const P=c[C],L=3*P,V=n*a[L];let z=i[V],w=i[V+1],b=i[V+2];const A=n*a[L+1];let R=i[A],S=i[A+1],E=i[A+2];const O=n*a[L+2];let U=i[O],I=i[O+1],F=i[O+2];l!=null&&([z,w,b]=l.applyToVertex(z,w,b,C),[R,S,E]=l.applyToVertex(R,S,E,C),[U,I,F]=l.applyToVertex(U,I,F,C));const W=R-z,le=S-w,he=E-b,Pe=U-z,Ne=I-w,be=F-b,Le=_*be-Ne*g,De=g*Pe-be*x,He=x*Ne-Pe*_,ce=W*Le+le*De+he*He;if(Math.abs(ce)<=gl)continue;const ke=h-z,cr=p-w,dr=v-b,qe=ke*Le+cr*De+dr*He;if(ce>0){if(qe<0||qe>ce)continue}else if(qe>0||qe<ce)continue;const Zr=cr*he-le*dr,Kr=dr*W-he*ke,Qr=ke*le-W*cr,$t=x*Zr+_*Kr+g*Qr;if(ce>0){if($t<0||qe+$t>ce)continue}else if($t>0||qe+$t<ce)continue;const eo=(Pe*Zr+Ne*Kr+be*Qr)/ce;eo>=0&&d(eo,P,$?ul(W,le,he,Pe,Ne,be,gt):null)}}function sl(t,e,r,o,a,i,n,c,l,u){const d=e,h=_l,p=Math.abs(d[0]),v=Math.abs(d[1]),x=Math.abs(d[2]),_=p>=v?p>=x?0:2:v>=x?1:2,g=_,$=d[g]<0?2:1,C=(_+$)%3,P=(_+(3-$))%3,L=d[C]/d[g],V=d[P]/d[g],z=1/d[g],w=ll,b=cl,A=dl,{normalRequired:R}=l;for(let S=r;S<o;++S){const E=3*S,O=n*a[E];j(h[0],i[O+0],i[O+1],i[O+2]);const U=n*a[E+1];j(h[1],i[U+0],i[U+1],i[U+2]);const I=n*a[E+2];j(h[2],i[I+0],i[I+1],i[I+2]),c&&(Gt(h[0],c.applyToVertex(h[0][0],h[0][1],h[0][2],S)),Gt(h[1],c.applyToVertex(h[1][0],h[1][1],h[1][2],S)),Gt(h[2],c.applyToVertex(h[2][0],h[2][1],h[2][2],S))),nt(w,h[0],t),nt(b,h[1],t),nt(A,h[2],t);const F=w[C]-L*w[g],W=w[P]-V*w[g],le=b[C]-L*b[g],he=b[P]-V*b[g],Pe=A[C]-L*A[g],Ne=A[P]-V*A[g],be=Pe*he-Ne*le,Le=F*Ne-W*Pe,De=le*W-he*F;if((be<0||Le<0||De<0)&&(be>0||Le>0||De>0))continue;const He=be+Le+De;if(He===0)continue;const ce=be*(z*w[g])+Le*(z*b[g])+De*(z*A[g]);if(ce*Math.sign(He)<0)continue;const ke=ce/He;ke>=0&&u(ke,S,R?hl(h):null)}}const ll=M(),cl=M(),dl=M();function ul(t,e,r,o,a,i,n){return j(qt,t,e,r),j(Yt,o,a,i),Rr(n,qt,Yt),Zt(n,n),n}function hl(t){return nt(qt,t[1],t[0]),nt(Yt,t[2],t[0]),Rr(gt,qt,Yt),Zt(gt,gt),gt}const qt=M(),Yt=M();function ml(t,e){return j(e,1/t[0],1/t[1],1/t[2])}function fl(t,e,r,o){return pl(t,e,r,o,1/0)}function pl(t,e,r,o,a){const i=(t[0]-o-e[0])*r[0],n=(t[3]+o-e[0])*r[0];let c=Math.min(i,n),l=Math.max(i,n);const u=(t[1]-o-e[1])*r[1],d=(t[4]+o-e[1])*r[1];if(l=Math.min(l,Math.max(u,d)),l<0||(c=Math.max(c,Math.min(u,d)),c>l))return!1;const h=(t[2]-o-e[2])*r[2],p=(t[5]+o-e[2])*r[2];return l=Math.min(l,Math.max(h,p)),!(l<0)&&(c=Math.max(c,Math.min(h,p)),!(c>l)&&c<a)}const vl=1e3,gl=1e-7,xl=M(),_l=[M(),M(),M()];var St;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",t[t.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",t[t.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",t[t.OPAQUE_ENVIRONMENT=12]="OPAQUE_ENVIRONMENT",t[t.TRANSPARENT_ENVIRONMENT=13]="TRANSPARENT_ENVIRONMENT",t[t.LASERLINES=14]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=16]="HUD_MATERIAL",t[t.LABEL_MATERIAL=17]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=18]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",t[t.DRAPED_WATER=21]="DRAPED_WATER",t[t.VIEWSHED=22]="VIEWSHED",t[t.VOXEL=23]="VOXEL",t[t.MAX_SLOTS=24]="MAX_SLOTS"})(St||(St={}));let Tl=class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=M(),this._tmpMbs=Zo(),this._tmpObb=new mn,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=fe(e)}applyToVertex(e,r,o){const a=j(Ci,e,r,o),i=j(El,e,r,o+this.componentLocalOriginLength),n=this._totalOffset/fe(i);return Qe(this._tmpVertex,a,i,n),this._tmpVertex}applyToAabb(e){const r=this.componentLocalOriginLength,o=e[0],a=e[1],i=e[2]+r,n=e[3],c=e[4],l=e[5]+r,u=Math.abs(o),d=Math.abs(a),h=Math.abs(i),p=Math.abs(n),v=Math.abs(c),x=Math.abs(l),_=.5*(1+Math.sign(o*n))*Math.min(u,p),g=.5*(1+Math.sign(a*c))*Math.min(d,v),$=.5*(1+Math.sign(i*l))*Math.min(h,x),C=Math.max(u,p),P=Math.max(d,v),L=Math.max(h,x),V=Math.sqrt(_*_+g*g+$*$),z=Math.sign(u+o),w=Math.sign(d+a),b=Math.sign(h+i),A=Math.sign(p+n),R=Math.sign(v+c),S=Math.sign(x+l),E=this._totalOffset;if(V<E)return e[0]-=(1-z)*E,e[1]-=(1-w)*E,e[2]-=(1-b)*E,e[3]+=A*E,e[4]+=R*E,e[5]+=S*E,e;const O=E/Math.sqrt(C*C+P*P+L*L),U=E/V,I=U-O,F=-I;return e[0]+=o*(z*F+U),e[1]+=a*(w*F+U),e[2]+=i*(b*F+U),e[3]+=n*(A*I+O),e[4]+=c*(R*I+O),e[5]+=l*(S*I+O),e}applyToMbs(e){const r=fe(Ce(e)),o=this._totalOffset/r;return Qe(Ce(this._tmpMbs),Ce(e),Ce(e),o),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/r,this._tmpMbs}applyToObb(e){return fn(e,this._totalOffset,this._totalOffset,kt.Global,this._tmpObb),this._tmpObb}},bl=class{constructor(e=0){this.offset=e,this.sphere=Zo(),this.tmpVertex=M()}applyToVertex(e,r,o){const a=this.objectTransform.transform,i=j(Ci,e,r,o),n=$e(i,i,a),c=this.offset/fe(n);Qe(n,n,n,c);const l=this.objectTransform.inverse;return $e(this.tmpVertex,n,l),this.tmpVertex}applyToMinMax(e,r){const o=this.offset/fe(e);Qe(e,e,e,o);const a=this.offset/fe(r);Qe(r,r,r,a)}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*o,e[4]+=e[4]*o,e[5]+=e[5]*o,e}applyToBoundingSphere(e){const r=fe(Ce(e)),o=this.offset/r;return Qe(Ce(this.sphere),Ce(e),Ce(e),o),this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const fo=new bl;function Sl(t){return t!=null?(fo.offset=t,fo):null}new Tl;const Ci=M(),El=M();function po(t,e,r){const{data:o,indices:a}=t,i=e.typedBuffer,n=e.typedBufferStride,c=a.length;r*=n;for(let l=0;l<c;++l){const u=2*a[l];i[r]=o[u],i[r+1]=o[u+1],r+=n}}function Oi(t,e,r,o){const{data:a,indices:i}=t,n=e.typedBuffer,c=e.typedBufferStride,l=i.length;if(r*=c,o==null||o===1)for(let u=0;u<l;++u){const d=3*i[u];n[r]=a[d],n[r+1]=a[d+1],n[r+2]=a[d+2],r+=c}else for(let u=0;u<l;++u){const d=3*i[u];for(let h=0;h<o;++h)n[r]=a[d],n[r+1]=a[d+1],n[r+2]=a[d+2],r+=c}}function Ri(t,e,r,o=1){const{data:a,indices:i}=t,n=e.typedBuffer,c=e.typedBufferStride,l=i.length;if(r*=c,o===1)for(let u=0;u<l;++u){const d=4*i[u];n[r]=a[d],n[r+1]=a[d+1],n[r+2]=a[d+2],n[r+3]=a[d+3],r+=c}else for(let u=0;u<l;++u){const d=4*i[u];for(let h=0;h<o;++h)n[r]=a[d],n[r+1]=a[d+1],n[r+2]=a[d+2],n[r+3]=a[d+3],r+=c}}function yl(t,e,r,o,a=1){if(!e)return void Oi(t,r,o,a);const{data:i,indices:n}=t,c=r.typedBuffer,l=r.typedBufferStride,u=n.length,d=e[0],h=e[1],p=e[2],v=e[4],x=e[5],_=e[6],g=e[8],$=e[9],C=e[10],P=e[12],L=e[13],V=e[14];o*=l;let z=0,w=0,b=0;const A=No(e)?R=>{z=i[R]+P,w=i[R+1]+L,b=i[R+2]+V}:R=>{const S=i[R],E=i[R+1],O=i[R+2];z=d*S+v*E+g*O+P,w=h*S+x*E+$*O+L,b=p*S+_*E+C*O+V};if(a===1)for(let R=0;R<u;++R)A(3*n[R]),c[o]=z,c[o+1]=w,c[o+2]=b,o+=l;else for(let R=0;R<u;++R){A(3*n[R]);for(let S=0;S<a;++S)c[o]=z,c[o+1]=w,c[o+2]=b,o+=l}}function Al(t,e,r,o,a=1){if(!e)return void Oi(t,r,o,a);const{data:i,indices:n}=t,c=e,l=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=c[0],p=c[1],v=c[2],x=c[4],_=c[5],g=c[6],$=c[8],C=c[9],P=c[10],L=!Lo(c),V=1e-6,z=1-V;o*=u;let w=0,b=0,A=0;const R=No(c)?S=>{w=i[S],b=i[S+1],A=i[S+2]}:S=>{const E=i[S],O=i[S+1],U=i[S+2];w=h*E+x*O+$*U,b=p*E+_*O+C*U,A=v*E+g*O+P*U};if(a===1)if(L)for(let S=0;S<d;++S){R(3*n[S]);const E=w*w+b*b+A*A;if(E<z&&E>V){const O=1/Math.sqrt(E);l[o]=w*O,l[o+1]=b*O,l[o+2]=A*O}else l[o]=w,l[o+1]=b,l[o+2]=A;o+=u}else for(let S=0;S<d;++S)R(3*n[S]),l[o]=w,l[o+1]=b,l[o+2]=A,o+=u;else for(let S=0;S<d;++S){if(R(3*n[S]),L){const E=w*w+b*b+A*A;if(E<z&&E>V){const O=1/Math.sqrt(E);w*=O,b*=O,A*=O}}for(let E=0;E<a;++E)l[o]=w,l[o+1]=b,l[o+2]=A,o+=u}}function wl(t,e,r,o,a=1){if(!e)return void Ri(t,r,o,a);const{data:i,indices:n}=t,c=e,l=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=c[0],p=c[1],v=c[2],x=c[4],_=c[5],g=c[6],$=c[8],C=c[9],P=c[10],L=!Lo(c),V=1e-6,z=1-V;if(o*=u,a===1)for(let w=0;w<d;++w){const b=4*n[w],A=i[b],R=i[b+1],S=i[b+2],E=i[b+3];let O=h*A+x*R+$*S,U=p*A+_*R+C*S,I=v*A+g*R+P*S;if(L){const F=O*O+U*U+I*I;if(F<z&&F>V){const W=1/Math.sqrt(F);O*=W,U*=W,I*=W}}l[o]=O,l[o+1]=U,l[o+2]=I,l[o+3]=E,o+=u}else for(let w=0;w<d;++w){const b=4*n[w],A=i[b],R=i[b+1],S=i[b+2],E=i[b+3];let O=h*A+x*R+$*S,U=p*A+_*R+C*S,I=v*A+g*R+P*S;if(L){const F=O*O+U*U+I*I;if(F<z&&F>V){const W=1/Math.sqrt(F);O*=W,U*=W,I*=W}}for(let F=0;F<a;++F)l[o]=O,l[o+1]=U,l[o+2]=I,l[o+3]=E,o+=u}}function Ml(t,e,r,o,a=1){const{data:i,indices:n}=t,c=r.typedBuffer,l=r.typedBufferStride,u=n.length;if(o*=l,e!==i.length||e!==4)if(a!==1)if(e!==4)for(let d=0;d<u;++d){const h=3*n[d];for(let p=0;p<a;++p)c[o]=i[h],c[o+1]=i[h+1],c[o+2]=i[h+2],c[o+3]=255,o+=l}else for(let d=0;d<u;++d){const h=4*n[d];for(let p=0;p<a;++p)c[o]=i[h],c[o+1]=i[h+1],c[o+2]=i[h+2],c[o+3]=i[h+3],o+=l}else{if(e===4){for(let d=0;d<u;++d){const h=4*n[d];c[o]=i[h],c[o+1]=i[h+1],c[o+2]=i[h+2],c[o+3]=i[h+3],o+=l}return}for(let d=0;d<u;++d){const h=3*n[d];c[o]=i[h],c[o+1]=i[h+1],c[o+2]=i[h+2],c[o+3]=255,o+=l}}else{c[o]=i[0],c[o+1]=i[1],c[o+2]=i[2],c[o+3]=i[3];const d=new Uint32Array(r.typedBuffer.buffer,r.start),h=l/4,p=d[o/=4];o+=h;const v=u*a;for(let x=1;x<v;++x)d[o]=p,o+=h}}function Cl(t,e,r){const{data:o,indices:a}=t,i=e.typedBuffer,n=e.typedBufferStride,c=a.length,l=o[0];r*=n;for(let u=0;u<c;++u)i[r]=l,r+=n}function Ol(t,e,r,o,a=1){const i=e.typedBuffer,n=e.typedBufferStride;if(o*=n,a===1)for(let c=0;c<r;++c)i[o]=t[0],i[o+1]=t[1],i[o+2]=t[2],i[o+3]=t[3],o+=n;else for(let c=0;c<r;++c)for(let l=0;l<a;++l)i[o]=t[0],i[o+1]=t[1],i[o+2]=t[2],i[o+3]=t[3],o+=n}function Rl(t,e,r,o,a,i){var n;for(const c of e.fields.keys()){const l=t.attributes.get(c),u=l==null?void 0:l.indices;if(l&&u)$l(c,l,r,o,a,i);else if(c===f.OBJECTANDLAYERIDCOLOR&&t.objectAndLayerIdColor!=null){const d=(n=t.attributes.get(f.POSITION))==null?void 0:n.indices;if(d){const h=d.length,p=a.getField(c,tr);Ol(t.objectAndLayerIdColor,p,h,i)}}}}function $l(t,e,r,o,a,i){switch(t){case f.POSITION:{k(e.size===3);const n=a.getField(t,Ht);k(!!n,`No buffer view for ${t}`),n&&yl(e,r,n,i);break}case f.NORMAL:{k(e.size===3);const n=a.getField(t,Ht);k(!!n,`No buffer view for ${t}`),n&&Al(e,o,n,i);break}case f.NORMALCOMPRESSED:{k(e.size===2);const n=a.getField(t,ka);k(!!n,`No buffer view for ${t}`),n&&po(e,n,i);break}case f.UV0:{k(e.size===2);const n=a.getField(t,Ha);k(!!n,`No buffer view for ${t}`),n&&po(e,n,i);break}case f.COLOR:case f.SYMBOLCOLOR:{const n=a.getField(t,tr);k(!!n,`No buffer view for ${t}`),k(e.size===3||e.size===4),!n||e.size!==3&&e.size!==4||Ml(e,e.size,n,i);break}case f.COLORFEATUREATTRIBUTE:{const n=a.getField(t,Wa);k(!!n,`No buffer view for ${t}`),k(e.size===1),n&&e.size===1&&Cl(e,n,i);break}case f.TANGENT:{k(e.size===4);const n=a.getField(t,yr);k(!!n,`No buffer view for ${t}`),n&&wl(e,r,n,i);break}case f.PROFILERIGHT:case f.PROFILEUP:case f.PROFILEVERTEXANDNORMAL:case f.FEATUREVALUE:{k(e.size===4);const n=a.getField(t,yr);k(!!n,`No buffer view for ${t}`),n&&Ri(e,n,i)}}}let Il=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(f.POSITION).indices.length}write(e,r,o,a,i){Rl(o,this.vertexBufferLayout,e,r,a,i)}};function Gr(t){t.attributes.add(f.POSITION,"vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function $i(t,e){t.include(Gr);const r=t.vertex;r.include(ei,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add(new Z("transformWorldFromViewTH",o=>o.transformWorldFromViewTH),new Z("transformWorldFromViewTL",o=>o.transformWorldFromViewTL),new xe("transformViewFromCameraRelativeRS",o=>o.transformViewFromCameraRelativeRS),new lt("transformProjFromView",o=>o.transformProjFromView),new ti("transformWorldFromModelRS",o=>o.transformWorldFromModelRS),new de("transformWorldFromModelTH",o=>o.transformWorldFromModelTH),new de("transformWorldFromModelTL",o=>o.transformWorldFromModelTL)),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new Z("transformWorldFromViewTL",o=>o.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class Pl extends Ot{constructor(){super(...arguments),this.transformWorldFromViewTH=M(),this.transformWorldFromViewTL=M(),this.transformViewFromCameraRelativeRS=At(),this.transformProjFromView=Qt()}}function Ii(t,e){switch(e.normalType){case K.Attribute:case K.Compressed:t.include(rr,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new ti("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new xe("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case K.Ground:t.include($i,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case K.ScreenDerivative:t.vertex.code.add(s`void forwardNormal() {}`);break;default:Rt(e.normalType);case K.COUNT:}}let Nl=class extends Pl{constructor(){super(...arguments),this.transformNormalViewFromGlobal=At()}};const Ll=.1,Vr=.001;let ir=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Ur=class{constructor(e,r,o){this.release=o,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=Wt(this._program),this._pipeline=this._configuration=null}reload(e){Wt(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return vn.TRIANGLES}getPipeline(e,r,o){return this._pipeline}initializeConfiguration(e,r){}},jr=class{constructor(e,r,o){this._context=e,this._locations=o,this._textures=new Map,this._freeTextureUnits=new Go({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=un()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if((r==null?void 0:r.glName)==null){const a=this._textures.get(e);return a&&(this._context.bindTexture(null,a.unit),this._freeTextureUnit(a),this._textures.delete(e)),null}let o=this._textures.get(e);return o==null?(o=this._allocTextureUnit(r),this._textures.set(e,o)):o.texture=r,this._context.useProgram(this),this.setUniform1i(e,o.unit),this._context.bindTexture(r,o.unit),o.unit}rebindTextures(){var e;this._context.useProgram(this),this._textures.forEach((r,o)=>{this._context.bindTexture(r.texture,r.unit),this.setUniform1i(o,r.unit)}),(e=this._fragmentUniforms)==null||e.forEach(r=>{r.type!=="sampler2D"&&r.type!=="samplerCube"||this._textures.has(r.name)||console.error(`Texture sampler ${r.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};ge.LESS;ge.ALWAYS;const Dl={mask:255},Fl={function:{func:ge.ALWAYS,ref:Ie.OutlineVisualElementMask,mask:Ie.OutlineVisualElementMask},operation:{fail:ne.KEEP,zFail:ne.KEEP,zPass:ne.ZERO}},Bl={function:{func:ge.ALWAYS,ref:Ie.OutlineVisualElementMask,mask:Ie.OutlineVisualElementMask},operation:{fail:ne.KEEP,zFail:ne.KEEP,zPass:ne.REPLACE}};ge.EQUAL,Ie.OutlineVisualElementMask,Ie.OutlineVisualElementMask,ne.KEEP,ne.KEEP,ne.KEEP;ge.NOTEQUAL,Ie.OutlineVisualElementMask,Ie.OutlineVisualElementMask,ne.KEEP,ne.KEEP,ne.KEEP;function zl({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:r,roughnessFactor:o,emissiveTexture:a,emissiveFactor:i,occlusionTexture:n}){return t==null&&e==null&&a==null&&(i==null||Ta(i,Kt))&&n==null&&(o==null||o===1)&&(r==null||r===1)}const Pi=[1,1,.5],Gl=[0,.6,.2],Vl=[0,1,.2];let dt=class extends ee{constructor(e,r){super(e,"vec2",D.Pass,(o,a,i)=>o.setUniform2fv(e,r(a,i)))}};function vo(t){t.varyings.add("linearDepth","float")}function Ni(t){t.vertex.uniforms.add(new dt("nearFar",(e,r)=>r.camera.nearFar))}function Li(t){t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Di(t,e){const{vertex:r}=t;switch(e.output){case B.Color:if(e.receiveShadows)return vo(t),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case B.Shadow:case B.ShadowHighlight:case B.ShadowExcludeHighlight:case B.ViewshedShadow:return t.include($i,e),vo(t),Ni(t),Li(t),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function Fi(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function tt(t,e){Ul(t,e,new de("slicePlaneOrigin",(r,o)=>jl(e,r,o)),new de("slicePlaneBasis1",(r,o)=>{var a;return go(e,r,o,(a=o.slicePlane)==null?void 0:a.basis1)}),new de("slicePlaneBasis2",(r,o)=>{var a;return go(e,r,o,(a=o.slicePlane)==null?void 0:a.basis2)}))}function Ul(t,e,...r){if(!e.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}e.hasSliceInVertexProgram&&t.vertex.uniforms.add(...r),t.fragment.uniforms.add(...r);const o=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,i=e.hasSliceHighlight?s`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(o),t.fragment.code.add(o),t.fragment.code.add(i)}function Bi(t,e,r){return t.instancedDoublePrecision?j(Wl,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function zi(t,e){return t!=null?Re(Xt,e.origin,t):e.origin}function Gi(t,e,r){return t.hasSliceTranslatedView?e!=null?Er(Hl,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function jl(t,e,r){if(r.slicePlane==null)return Kt;const o=Bi(t,e,r),a=zi(o,r.slicePlane),i=Gi(t,o,r);return i!=null?$e(Xt,a,i):a}function go(t,e,r,o){if(o==null||r.slicePlane==null)return Kt;const a=Bi(t,e,r),i=zi(a,r.slicePlane),n=Gi(t,a,r);return n!=null?(me(ft,o,i),$e(Xt,i,n),$e(ft,ft,n),Re(ft,ft,Xt)):o}const Wl=M(),Xt=M(),ft=M(),Hl=Qt();function rt(t){Li(t),t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let kl=class extends ee{constructor(e,r){super(e,"mat4",D.Draw,(o,a,i)=>o.setUniformMatrix4fv(e,r(a,i)))}};function yt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Kt):t.uniforms.add(new de("cameraPosition",(r,o)=>j(Vi,o.camera.viewInverseTransposeMatrix[3]-r.origin[0],o.camera.viewInverseTransposeMatrix[7]-r.origin[1],o.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function ot(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new lt("proj",(o,a)=>a.camera.projectionMatrix),new kl("view",(o,a)=>Er(xo,a.camera.viewMatrix,o.origin)),new de("localOrigin",o=>o.origin));const r=o=>j(Vi,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]);t.uniforms.add(new lt("proj",(o,a)=>a.camera.projectionMatrix),new lt("view",(o,a)=>Er(xo,a.camera.viewMatrix,r(a))),new Z("localOrigin",(o,a)=>r(a)))}const xo=Qt(),Vi=M();function ql(t){t.uniforms.add(new lt("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}let Yl=class extends Ot{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const o of e)r[o]=this[o];return r}};function T(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const o=e._parameterNames.length-1,a=t.count||2,i=Math.ceil(Math.log2(a)),n=e._parameterBits??[0];let c=0;for(;n[c]+i>16;)c++,c>=n.length&&n.push(0);e._parameterBits=n;const l=n[c],u=(1<<i)-1<<l;n[c]+=i,Object.defineProperty(e,r,{get(){return this[o]},set(d){if(this[o]!==d&&(this[o]=d,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~u|+d<<l&u,typeof d!="number"&&typeof d!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof d)}})}}}let Mr=class extends Yl{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};m([T()],Mr.prototype,"instancedDoublePrecision",void 0),m([T()],Mr.prototype,"hasModelTransformation",void 0);const _o=At();function Ui(t,e){const r=e.hasModelTransformation,o=e.instancedDoublePrecision;r&&(t.vertex.uniforms.add(new lt("model",i=>i.modelTransformation??Ut)),t.vertex.uniforms.add(new xe("normalLocalOriginFromModel",i=>(Po(_o,i.modelTransformation??Ut),_o)))),e.instanced&&o&&(t.attributes.add(f.INSTANCEMODELORIGINHI,"vec3"),t.attributes.add(f.INSTANCEMODELORIGINLO,"vec3"),t.attributes.add(f.INSTANCEMODEL,"mat3"),t.attributes.add(f.INSTANCEMODELNORMAL,"mat3"));const a=t.vertex;o&&(a.include(ei,e),a.uniforms.add(new de("viewOriginHi",(i,n)=>Pn(j(Bt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Bt)),new de("viewOriginLo",(i,n)=>Nn(j(Bt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Bt)))),a.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?s`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),a.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===B.Normal&&(ql(a),a.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),e.hasVertexTangents&&a.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const Bt=M();let ji=class extends ee{constructor(e,r){super(e,"int",D.Pass,(o,a,i)=>o.setUniform1i(e,r(a,i)))}};function Wi(t,e){e.hasSymbolColors?(t.include(bn),t.attributes.add(f.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new ji("colorMixMode",r=>Es[r.colorMixMode])),t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Hi(t,e){e.hasVertexColors?(t.attributes.add(f.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Xl(t){t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Jl(t){t.uniforms.add(new Z("screenSizePerspectiveAlignment",e=>Zl(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function Zl(t){return j(Kl,t.parameters.divisor,t.parameters.offset,t.minScaleFactor)}const Kl=M();let te=class extends ee{constructor(e,r){super(e,"vec4",D.Pass,(o,a,i)=>o.setUniform4fv(e,r(a,i)))}};function ki(t,e){const r=t.vertex;e.hasVerticalOffset?(ec(r),e.hasScreenSizePerspective&&(t.include(Xl),Jl(r),yt(t.vertex,e)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Ql=Pr();function ec(t){t.uniforms.add(new te("verticalOffset",(e,r)=>{const{minWorldLength:o,maxWorldLength:a,screenLength:i}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),c=r.camera.pixelRatio||1;return ie(Ql,i*c,n,o,a)}))}function tc(t,e){const r=e.output===B.ObjectAndLayerIdColor,o=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),o?t.attributes.add(f.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):t.attributes.add(f.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?o?s`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),t.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`fragColor = objectAndLayerIdColorVarying;`:s``} }`)}function qi(t){t.code.add(s`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function rc(t,e){switch(e.output){case B.Shadow:case B.ShadowHighlight:case B.ShadowExcludeHighlight:case B.ViewshedShadow:t.fragment.include(qi),t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}const oc=Nr(1,1,0,1),ic=Nr(1,0,1,1);function ac(t){t.fragment.uniforms.add(new Q("depthTexture",(e,r)=>r.mainDepth)),t.fragment.constants.add("occludedHighlightFlag","vec4",oc).add("unoccludedHighlightFlag","vec4",ic),t.fragment.code.add(s`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}let nc=class extends ee{constructor(e,r,o){super(e,"vec4",D.Pass,(a,i,n)=>a.setUniform4fv(e,r(i,n)),o)}},sc=class extends ee{constructor(e,r,o){super(e,"float",D.Pass,(a,i,n)=>a.setUniform1fv(e,r(i,n)),o)}},H=class extends Uo{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};m([G()],H.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),m([G()],H.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),m([G()],H.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),m([G()],H.prototype,"DECONFLICTOR_SHOW_GRID",void 0),m([G()],H.prototype,"LABELS_SHOW_BORDER",void 0),m([G()],H.prototype,"TEXT_SHOW_BASELINE",void 0),m([G()],H.prototype,"TEXT_SHOW_BORDER",void 0),m([G()],H.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),m([G()],H.prototype,"OVERLAY_SHOW_CENTER",void 0),m([G()],H.prototype,"SHOW_POI",void 0),m([G()],H.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),m([G()],H.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),m([G()],H.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),m([G()],H.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),m([G()],H.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),m([G()],H.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),m([G()],H.prototype,"I3S_TREE_SHOW_TILES",void 0),m([G()],H.prototype,"I3S_SHOW_MODIFICATIONS",void 0),m([G()],H.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),m([G()],H.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),m([G()],H.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),m([G()],H.prototype,"LINE_WIREFRAMES",void 0),H=m([Ir("esri.views.3d.support.debugFlags")],H);new H;var To,bo;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(To||(To={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(bo||(bo={}));const gr=8;function Et(t,e){const{vertex:r,attributes:o}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&o.add(f.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new Z("vvSizeMinSize",a=>a.vvSize.minSize)),r.uniforms.add(new Z("vvSizeMaxSize",a=>a.vvSize.maxSize)),r.uniforms.add(new Z("vvSizeOffset",a=>a.vvSize.offset)),r.uniforms.add(new Z("vvSizeFactor",a=>a.vvSize.factor)),r.uniforms.add(new xe("vvSymbolRotationMatrix",a=>a.vvSymbolRotationMatrix)),r.uniforms.add(new Z("vvSymbolAnchor",a=>a.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",gr),r.uniforms.add(new sc("vvColorValues",a=>a.vvColor.values,gr),new nc("vvColorColors",a=>a.vvColor.colors,gr)),r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function lc(t){t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Vr)}) { discard; } }
  `)}function it(t,e){cc(t,e,new se("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function cc(t,e,r){const o=t.fragment;switch(e.alphaDiscardMode!==J.Mask&&e.alphaDiscardMode!==J.MaskBlend||o.uniforms.add(r),e.alphaDiscardMode){case J.Blend:return t.include(lc);case J.Opaque:o.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case J.Mask:o.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case J.MaskBlend:t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Yi(t,e){const{vertex:r,fragment:o}=t,a=e.hasColorTexture&&e.alphaDiscardMode!==J.Opaque;switch(e.output){case B.Depth:ot(r,e),t.include(rt,e),t.include(tt,e),t.include(Ve,e),a&&o.uniforms.add(new Q("tex",i=>i.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(it,e),o.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
          }
        `);break;case B.Shadow:case B.ShadowHighlight:case B.ShadowExcludeHighlight:case B.ViewshedShadow:case B.ObjectAndLayerIdColor:ot(r,e),t.include(rt,e),t.include(Ve,e),t.include(Et,e),t.include(rc,e),t.include(tt,e),t.include(tc,e),Ni(t),t.varyings.add("depth","float"),a&&o.uniforms.add(new Q("tex",i=>i.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),t.include(it,e),o.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===B.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}
          }
        `);break;case B.Normal:{ot(r,e),t.include(rt,e),t.include(rr,e),t.include(Ii,e),t.include(Ve,e),t.include(Et,e),a&&o.uniforms.add(new Q("tex",n=>n.texture)),e.normalType===K.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const i=e.normalType===K.Attribute||e.normalType===K.Compressed;r.code.add(s`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?s`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:s`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),t.include(tt,e),t.include(it,e),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===K.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionView);`:s`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case B.Highlight:ot(r,e),t.include(rt,e),t.include(Ve,e),t.include(Et,e),a&&o.uniforms.add(new Q("tex",i=>i.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(tt,e),t.include(it,e),t.include(ac,e),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function dc(t,e){const r=t.fragment;e.hasVertexTangents?(t.attributes.add(f.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===re.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),e.textureCoordinateType!==Y.None&&(t.include(fi,e),r.uniforms.add(e.pbrTextureBindType===D.Pass?new Q("normalTexture",o=>o.textureNormal):new Tt("normalTexture",o=>o.textureNormal)),e.hasNormalTextureTransform&&(r.uniforms.add(new dt("scale",o=>o.scale??Do)),r.uniforms.add(new xe("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??ht))),r.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),e.hasNormalTextureTransform&&r.code.add(s`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(s`return tangentSpace * rawNormal;
}`))}var at,So;(function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"})(at||(at={})),function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(So||(So={}));let Ke=class extends Uo{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this._context=null,this._dirty=!0}initialize(){this.addHandles([jo(()=>this.view.ready,e=>{var r;e&&((r=this.view._stage)==null||r.renderer.addRenderNode(this))},Va)])}destroy(){var e,r;(r=(e=this.view._stage)==null?void 0:e.renderer)==null||r.removeRenderNode(this)}render(){throw new Mt("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){var o,a,i;const e=(a=(o=this._frameBuffer)==null?void 0:o.getTexture())==null?void 0:a.descriptor,r=this.view._stage.renderer.fboCache.acquire((e==null?void 0:e.width)??640,(e==null?void 0:e.height)??480,this.produces);return(i=r.fbo)==null||i.initializeAndBind(),r}bindRenderTarget(){var e,r;return(r=(e=this._frameBuffer)==null?void 0:e.fbo)==null||r.initializeAndBind(),this._frameBuffer}requestRender(e){var r;e===ko.UPDATE&&((r=this.view._stage)==null||r.renderView.requestRender(e)),this._dirty=!0}resetWebGLState(){var e;this.renderingContext.resetState(),this.renderingContext.bindFramebuffer((e=this._frameBuffer)==null?void 0:e.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,r){this._context=r,this._frameBuffer=e.find(({name:o})=>o===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};m([G({constructOnly:!0})],Ke.prototype,"view",void 0),m([G({constructOnly:!0})],Ke.prototype,"consumes",void 0),m([G()],Ke.prototype,"produces",void 0),Ke=m([Ir("esri.views.3d.webgl.RenderNode")],Ke);const uc=Ke,hc=3e5,Eo=5e5;function Xi(t,e=!0){t.attributes.add(f.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function Wr(t){t.uniforms.add(new dt("zProjectionMap",(e,r)=>mc(r.camera))),t.code.add(s`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),t.code.add(s`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),t.code.add(s`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function mc(t){const e=t.projectionMatrix;return We(fc,e[14],e[10])}const fc=er();let pc=class extends ee{constructor(e,r){super(e,"vec2",D.Draw,(o,a,i,n)=>o.setUniform2fv(e,r(a,i,n)))}};const vc=()=>$r.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Ji=class{constructor(){this._includedModules=new Map}include(e,r){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,r),e(this.builder,r))}},ar=class extends Ji{constructor(){super(...arguments),this.vertex=new yo,this.fragment=new yo,this.attributes=new _c,this.varyings=new Tc,this.extensions=new ut,this.constants=new Zi,this.outputs=new Cr}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),o=this.attributes.generateSource(e),a=this.varyings.generateSource(e),i=e==="vertex"?this.vertex:this.fragment,n=i.uniforms.generateSource(),c=i.code.generateSource(),l=e==="vertex"?Sc:bc,u=this.constants.generateSource().concat(i.constants.generateSource()),d=this.outputs.generateSource(e);return`#version 300 es
${r.join(`
`)}

${l}

${u.join(`
`)}

${n.join(`
`)}

${o.join(`
`)}

${a.join(`
`)}

${d.join(`
`)}

${c.join(`
`)}`}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(i=>{const n=i.bind[D.Pass];n&&r.set(i.name,n)}),this.fragment.uniforms.entries.forEach(i=>{const n=i.bind[D.Pass];n&&r.set(i.name,n)});const o=Array.from(r.values()),a=o.length;return(i,n)=>{for(let c=0;c<a;++c)o[c](e,i,n)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(i=>{const n=i.bind[D.Draw];n&&r.set(i.name,n)}),this.fragment.uniforms.entries.forEach(i=>{const n=i.bind[D.Draw];n&&r.set(i.name,n)});const o=Array.from(r.values()),a=o.length;return(i,n,c)=>{for(let l=0;l<a;++l)o[l](e,i,n,c)}}},gc=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const r of e)this._add(r);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Mt(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else vc().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},xc=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},yo=class extends Ji{constructor(){super(...arguments),this.uniforms=new gc(this),this.code=new xc(this),this.constants=new Zi}get builder(){return this}},_c=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},Tc=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&k(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((o,a)=>r.push(e==="vertex"?`out ${o} ${a};`:`in ${o} ${a};`)),r}};class ut{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?ut.ALLOWLIST_VERTEX:ut.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(o=>r.includes(o)).map(o=>`#extension ${o} : enable`)}}ut.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],ut.ALLOWLIST_VERTEX=[];let Cr=class Or{constructor(){this._entries=new Map}add(e,r,o=0){const a=this._entries.get(o);a?k(a.name===e&&a.type===r,`Fragment shader output location ${o} occupied`):this._entries.set(o,{name:e,type:r})}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:Or.DEFAULT_NAME,type:Or.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((o,a)=>r.push(`layout(location = ${a}) out ${o.type} ${o.name};`)),r}};Cr.DEFAULT_TYPE="vec4",Cr.DEFAULT_NAME="fragColor";let Zi=class q{constructor(){this._entries=new Set}add(e,r,o){let a="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":a=q._numberToFloatStr(o);break;case"int":a=q._numberToIntStr(o);break;case"bool":a=o.toString();break;case"vec2":a=`vec2(${q._numberToFloatStr(o[0])},                            ${q._numberToFloatStr(o[1])})`;break;case"vec3":a=`vec3(${q._numberToFloatStr(o[0])},                            ${q._numberToFloatStr(o[1])},                            ${q._numberToFloatStr(o[2])})`;break;case"vec4":a=`vec4(${q._numberToFloatStr(o[0])},                            ${q._numberToFloatStr(o[1])},                            ${q._numberToFloatStr(o[2])},                            ${q._numberToFloatStr(o[3])})`;break;case"ivec2":a=`ivec2(${q._numberToIntStr(o[0])},                             ${q._numberToIntStr(o[1])})`;break;case"ivec3":a=`ivec3(${q._numberToIntStr(o[0])},                             ${q._numberToIntStr(o[1])},                             ${q._numberToIntStr(o[2])})`;break;case"ivec4":a=`ivec4(${q._numberToIntStr(o[0])},                             ${q._numberToIntStr(o[1])},                             ${q._numberToIntStr(o[2])},                             ${q._numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":a=`${r}(${Array.prototype.map.call(o,i=>q._numberToFloatStr(i)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${a};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const bc=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Sc=`precision highp float;
precision highp sampler2D;`,xr=4;function Ki(){const t=new ar,e=t.fragment;t.include(Xi);const r=(xr+1)/2,o=1/(2*r*r);return e.include(Wr),e.uniforms.add(new Q("depthMap",a=>a.depthTexture),new Tt("tex",a=>a.colorTexture),new pc("blurSize",a=>a.blurSize),new se("projScale",(a,i)=>{const n=ba(i.camera.eye,i.camera.center);return n>5e4?Math.max(0,a.projScale-(n-5e4)):a.projScale})),e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(xr)}; r <= ${s.int(xr)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),t}const Ec=Object.freeze(Object.defineProperty({__proto__:null,build:Ki},Symbol.toStringTag,{value:"Module"}));let Qi=class ea extends Ur{initializeProgram(e){return new jr(e.rctx,ea.shader.get().build(),or)}initializePipeline(){return zr({colorWrite:Br})}};Qi.shader=new ir(Ec,()=>wt(()=>Promise.resolve().then(()=>Td),void 0));const yc="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let Ac=class extends Ot{constructor(){super(...arguments),this.projScale=1}},wc=class extends Ac{constructor(){super(...arguments),this.intensity=1}},Mc=class extends Ot{},Cc=class extends Mc{constructor(){super(...arguments),this.blurSize=er()}};function Oc(t){t.fragment.uniforms.add(new te("projInfo",(e,r)=>Rc(r.camera))),t.fragment.uniforms.add(new dt("zScale",(e,r)=>$c(r.camera))),t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Rc(t){const e=t.projectionMatrix;return e[11]===0?ie(Ao,2/(t.fullWidth*e[0]),2/(t.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):ie(Ao,-2/(t.fullWidth*e[0]),-2/(t.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const Ao=Pr();function $c(t){return t.projectionMatrix[11]===0?We(wo,0,1):We(wo,1,0)}const wo=er(),Mo=16;function ta(){const t=new ar,e=t.fragment;return t.include(Xi),t.include(Oc),e.include(Wr),e.uniforms.add(new se("radius",(r,o)=>nr(o.camera))).code.add(s`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new Q("normalMap",r=>r.normalTexture),new Q("depthMap",r=>r.depthTexture),new se("projScale",r=>r.projScale),new Q("rnm",r=>r.noiseTexture),new dt("rnmScale",(r,o)=>We(Co,o.camera.fullWidth/r.noiseTexture.descriptor.width,o.camera.fullHeight/r.noiseTexture.descriptor.height)),new se("intensity",r=>r.intensity),new dt("screenSize",(r,o)=>We(Co,o.camera.fullWidth,o.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.code.add(s`
    void main(void) {
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(Mo)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(Mo)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),t}function nr(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const Co=er(),Ic=Object.freeze(Object.defineProperty({__proto__:null,build:ta,getRadius:nr},Symbol.toStringTag,{value:"Module"}));let ra=class oa extends Ur{initializeProgram(e){return new jr(e.rctx,oa.shader.get().build(),or)}initializePipeline(){return zr({colorWrite:Br})}};ra.shader=new ir(Ic,()=>wt(()=>Promise.resolve().then(()=>bd),void 0));const xt=2;let Xe=class extends uc{constructor(t){super(t),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=It(0),this._passParameters=new wc,this._drawParameters=new Cc}initialize(){const t=Uint8Array.from(atob(yc),r=>r.charCodeAt(0)),e=new qo;e.wrapMode=je.CLAMP_TO_EDGE,e.pixelFormat=ze.RGB,e.wrapMode=je.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new st(this.renderingContext,e,t),this._ssaoTechnique=this.techniques.acquire(ra),this._blurTechnique=this.techniques.acquire(Qi),this.addHandles(jo(()=>this.isEnabled(),()=>this._enableTime=It(0)))}destroy(){this._passParameters.noiseTexture=Wt(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(t){const e=this.bindParameters,r=t.find(({name:L})=>L==="normals"),o=r==null?void 0:r.getTexture(),a=r==null?void 0:r.getTexture(gn),i=this.fboCache,n=e.camera,c=n.fullViewport[2],l=n.fullViewport[3],u=Math.round(c/xt),d=Math.round(l/xt);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=It(performance.now()),this.requestRender(),i.acquire(u,d,"ssao",at.RED);this._enableTime===0&&(this._enableTime=It(performance.now()));const h=this.renderingContext,p=this.view.qualitySettings.fadeDuration,v=n.relativeElevation,x=Io((Eo-v)/(Eo-hc),0,1),_=p>0?Math.min(p,performance.now()-this._enableTime)/p:1,g=_*x;this._passParameters.normalTexture=o,this._passParameters.depthTexture=a,this._passParameters.projScale=1/n.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Pc/nr(n)**6*g;const $=i.acquire(c,l,"ssao input",at.RG);h.unbindTexture($.fbo.colorTexture),h.bindFramebuffer($.fbo),h.setViewport(0,0,c,l),h.bindTechnique(this._ssaoTechnique,e,this._passParameters,this._drawParameters),h.screen.draw();const C=i.acquire(u,d,"ssao blur",at.RED);h.unbindTexture(C.fbo.colorTexture),h.bindFramebuffer(C.fbo),this._drawParameters.colorTexture=$.getTexture(),We(this._drawParameters.blurSize,0,xt/l),h.bindTechnique(this._blurTechnique,e,this._passParameters,this._drawParameters),h.setViewport(0,0,u,d),h.screen.draw(),$.release();const P=i.acquire(u,d,"ssao",at.RED);return h.unbindTexture(P.fbo.colorTexture),h.bindFramebuffer(P.fbo),h.setViewport(0,0,c,l),h.setClearColor(1,1,1,0),h.clear(xn.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=C.getTexture(),We(this._drawParameters.blurSize,xt/c,0),h.bindTechnique(this._blurTechnique,e,this._passParameters,this._drawParameters),h.setViewport(0,0,u,d),h.screen.draw(),h.setViewport4fv(n.fullViewport),C.release(),_<1&&this.requestRender(ko.UPDATE),P}};m([G()],Xe.prototype,"consumes",void 0),m([G()],Xe.prototype,"produces",void 0),m([G({constructOnly:!0})],Xe.prototype,"techniques",void 0),m([G({constructOnly:!0})],Xe.prototype,"isEnabled",void 0),Xe=m([Ir("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Xe);const Pc=.5;function Hr(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(new Q("ssaoTex",(o,a)=>{var i;return(i=a.ssao)==null?void 0:i.getTexture()})),r.constants.add("blurSizePixelsInverse","float",1/xt),r.code.add(s`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Nc(t,e){const r=t.fragment,o=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;o===0?(r.uniforms.add(new Z("lightingAmbientSH0",(a,i)=>j(Oo,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(r.uniforms.add(new te("lightingAmbientSH_R",(a,i)=>ie(Se,i.lighting.sh.r[0],i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3])),new te("lightingAmbientSH_G",(a,i)=>ie(Se,i.lighting.sh.g[0],i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3])),new te("lightingAmbientSH_B",(a,i)=>ie(Se,i.lighting.sh.b[0],i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===2&&(r.uniforms.add(new Z("lightingAmbientSH0",(a,i)=>j(Oo,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0])),new te("lightingAmbientSH_R1",(a,i)=>ie(Se,i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3],i.lighting.sh.r[4])),new te("lightingAmbientSH_G1",(a,i)=>ie(Se,i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3],i.lighting.sh.g[4])),new te("lightingAmbientSH_B1",(a,i)=>ie(Se,i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3],i.lighting.sh.b[4])),new te("lightingAmbientSH_R2",(a,i)=>ie(Se,i.lighting.sh.r[5],i.lighting.sh.r[6],i.lighting.sh.r[7],i.lighting.sh.r[8])),new te("lightingAmbientSH_G2",(a,i)=>ie(Se,i.lighting.sh.g[5],i.lighting.sh.g[6],i.lighting.sh.g[7],i.lighting.sh.g[8])),new te("lightingAmbientSH_B2",(a,i)=>ie(Se,i.lighting.sh.b[5],i.lighting.sh.b[6],i.lighting.sh.b[7],i.lighting.sh.b[8]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Oo=M(),Se=Pr();function kr(t){t.uniforms.add(new Z("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function sr(t){t.uniforms.add(new Z("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function Ro(t){kr(t.fragment),sr(t.fragment),t.fragment.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Lc(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function ia(t){t.vertex.code.add(s`const float PI = 3.141592653589793;`),t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function qr(t,e){const r=t.fragment.code;t.include(ia),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic&&e.pbrMode!==N.Simplified&&e.pbrMode!==N.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic||(t.include(Lc),r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let Dc=class extends ee{constructor(e,r){super(e,"bool",D.Pass,(o,a,i)=>o.setUniform1b(e,r(a,i)))}};const Fc=.4;function Yr(t){t.constants.add("ambientBoostFactor","float",Fc)}function Xr(t){t.uniforms.add(new se("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function aa(t,e){const r=t.fragment;switch(t.include(Hr,e),e.pbrMode!==N.Disabled&&t.include(qr,e),t.include(Nc,e),t.include(ia),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===N.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Yr(r),Xr(r),kr(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),sr(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case N.Disabled:case N.WaterOnIntegratedMesh:case N.Water:t.include(Ro),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case N.Normal:case N.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new Dc("hasFillLights",(o,a)=>a.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new se("lightingSpecularStrength",(o,a)=>a.lighting.mainLight.specularStrength),new se("lightingEnvironmentStrength",(o,a)=>a.lighting.mainLight.environmentStrength)),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode!==N.Schematic||e.hasColorTexture?s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case N.Simplified:case N.TerrainWithWater:t.include(Ro),r.code.add(s`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:Rt(e.pbrMode);case N.COUNT:}}function na(t,e){if(!e.multipassEnabled)return;t.fragment.include(Wr),t.fragment.uniforms.add(new Q("terrainDepthTexture",(o,a)=>{var i;return(i=a.multipassTerrain.depth)==null?void 0:i.attachment}));const r=e.occlusionPass;t.fragment.code.add(s`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?s`return fragmentDepth < linearDepth && depth < 1.0;`:s`
          if(fragmentDepth ${e.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}class Bc extends ee{constructor(e,r,o){super(e,"mat4",D.Draw,(a,i,n,c)=>a.setUniformMatrix4fv(e,r(i,n,c)),o)}}let zc=class extends ee{constructor(e,r,o){super(e,"mat4",D.Pass,(a,i,n)=>a.setUniformMatrix4fv(e,r(i,n)),o)}};function sa(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new zc("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),ca(t))}function la(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Bc("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),ca(t))}function ca(t){const e=t.fragment;e.include(qi),e.uniforms.add(new Q("shadowMap",(r,o)=>o.shadowMap.depthTexture),new ji("numCascades",(r,o)=>o.shadowMap.numCascades),new te("cascadeDistances",(r,o)=>o.shadowMap.cascadeDistances)),e.code.add(s`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function Gc(t,e){e.hasColorTextureTransform?(t.vertex.uniforms.add(new xe("colorTextureTransformMatrix",r=>r.colorTextureTransformMatrix??ht)),t.varyings.add("colorUV","vec2"),t.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardColorUV(){}`)}function Vc(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==Y.None?(t.vertex.uniforms.add(new xe("normalTextureTransformMatrix",r=>r.normalTextureTransformMatrix??ht)),t.varyings.add("normalUV","vec2"),t.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardNormalUV(){}`)}function Uc(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==Y.None?(t.vertex.uniforms.add(new xe("emissiveTextureTransformMatrix",r=>r.emissiveTextureTransformMatrix??ht)),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardEmissiveUV(){}`)}function jc(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==Y.None?(t.vertex.uniforms.add(new xe("occlusionTextureTransformMatrix",r=>r.occlusionTextureTransformMatrix??ht)),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardOcclusionUV(){}`)}function Wc(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==Y.None?(t.vertex.uniforms.add(new xe("metallicRoughnessTextureTransformMatrix",r=>r.metallicRoughnessTextureTransformMatrix??ht)),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardMetallicRoughnessUV(){}`)}function Hc(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function da(t){t.include(Hc),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(ye.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(ye.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(ye.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(ye.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(ye.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function ua(t){const e=new ar,{vertex:r,fragment:o,varyings:a}=e;if(ot(r,t),e.include(Gr),a.add("vpos","vec3"),e.include(Et,t),e.include(Ui,t),e.include(ki,t),e.include(Gc,t),t.output===B.Color){e.include(Vc,t),e.include(Uc,t),e.include(jc,t),e.include(Wc,t),yt(r,t),e.include(rr,t),e.include(rt,t);const i=t.normalType===K.Attribute||t.normalType===K.Compressed;i&&t.offsetBackfaces&&e.include(Fi),e.include(dc,t),e.include(Ii,t),t.instancedColor&&e.attributes.add(f.INSTANCECOLOR,"vec4"),a.add("vPositionLocal","vec3"),e.include(Ve,t),e.include(Di,t),e.include(Wi,t),e.include(Hi,t),r.uniforms.add(new te("externalColor",n=>n.externalColor)),a.add("vcolorExt","vec4"),t.multipassEnabled&&a.add("depth","float"),r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(Vr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${i?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${i&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `),e.include(tt,t),e.include(aa,t),e.include(Hr,t),e.include(it,t),e.include(t.instancedDoublePrecision?sa:la,t),e.include(na,t),yt(o,t),o.uniforms.add(r.uniforms.get("localOrigin"),new Z("ambient",n=>n.ambient),new Z("diffuse",n=>n.diffuse),new se("opacity",n=>n.opacity),new se("layerOpacity",n=>n.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Q("tex",n=>n.texture)),e.include(pi,t),e.include(qr,t),o.include(da),e.include(us,t),Yr(o),Xr(o),sr(o),t.transparencyPassType===oe.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===K.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===N.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?s`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${t.hasNormalTextureTransform?s`normalUV`:"vuv0"});`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?s`normalize(posWorld);`:s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===N.Normal||t.pbrMode===N.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===oe.ColorAlpha?s`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
      }
    `)}return e.include(Yi,t),e}const kc=Object.freeze(Object.defineProperty({__proto__:null,build:ua},Symbol.toStringTag,{value:"Module"}));let qc=class extends Nl{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Sr(Pi),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=ve.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=Ue(0,0,0),this.instancedDoublePrecision=!1,this.normalType=K.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Ue(.2,.2,.2),this.diffuse=Ue(.8,.8,.8),this.externalColor=Nr(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=M(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Ct.Less,this.textureAlphaMode=J.Blend,this.textureAlphaCutoff=Ll,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=wr.Occlude,this.isDecoration=!1}},Jr=class ha extends Ur{initializeConfiguration(e,r){r.spherical=e.viewingMode===kt.Global,r.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?Y.Default:Y.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,ha.shader)}_initializeProgram(e,r){return new jr(e.rctx,r.get().build(this.configuration),or)}_makePipeline(e,r){const o=this.configuration,a=e===oe.NONE,i=e===oe.FrontFace;return zr({blending:o.output===B.Color&&o.transparent?a?Xs:Zs(e):null,culling:Xc(o)?Ms(o.cullFace):null,depthTest:{func:tl(e,Yc(o.customDepthTest))},depthWrite:(a||i)&&o.writeDepth?Cs:null,drawBuffers:o.output===B.Depth?{buffers:[_n.NONE]}:rl(e),colorWrite:Br,stencilWrite:o.hasOccludees?Dl:null,stencilTest:o.hasOccludees?r?Bl:Fl:null,polygonOffset:a||i?null:el(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function Yc(t){return t===Ct.Lequal?ge.LEQUAL:ge.LESS}function Xc(t){return t.cullFace!==ve.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}Jr.shader=new ir(kc,()=>wt(()=>Promise.resolve().then(()=>Sd),void 0));let Vt=class extends Mr{};m([T({constValue:!0})],Vt.prototype,"hasSliceHighlight",void 0),m([T({constValue:!1})],Vt.prototype,"hasSliceInVertexProgram",void 0),m([T({constValue:D.Pass})],Vt.prototype,"pbrTextureBindType",void 0);class y extends Vt{constructor(){super(...arguments),this.output=B.Color,this.alphaDiscardMode=J.Opaque,this.doubleSidedMode=re.None,this.pbrMode=N.Disabled,this.cullFace=ve.None,this.transparencyPassType=oe.NONE,this.normalType=K.Attribute,this.textureCoordinateType=Y.None,this.customDepthTest=Ct.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}m([T({count:B.COUNT})],y.prototype,"output",void 0),m([T({count:J.COUNT})],y.prototype,"alphaDiscardMode",void 0),m([T({count:re.COUNT})],y.prototype,"doubleSidedMode",void 0),m([T({count:N.COUNT})],y.prototype,"pbrMode",void 0),m([T({count:ve.COUNT})],y.prototype,"cullFace",void 0),m([T({count:oe.COUNT})],y.prototype,"transparencyPassType",void 0),m([T({count:K.COUNT})],y.prototype,"normalType",void 0),m([T({count:Y.COUNT})],y.prototype,"textureCoordinateType",void 0),m([T({count:Ct.COUNT})],y.prototype,"customDepthTest",void 0),m([T()],y.prototype,"spherical",void 0),m([T()],y.prototype,"hasVertexColors",void 0),m([T()],y.prototype,"hasSymbolColors",void 0),m([T()],y.prototype,"hasVerticalOffset",void 0),m([T()],y.prototype,"hasSlicePlane",void 0),m([T()],y.prototype,"hasSliceHighlight",void 0),m([T()],y.prototype,"hasColorTexture",void 0),m([T()],y.prototype,"hasMetallicRoughnessTexture",void 0),m([T()],y.prototype,"hasEmissionTexture",void 0),m([T()],y.prototype,"hasOcclusionTexture",void 0),m([T()],y.prototype,"hasNormalTexture",void 0),m([T()],y.prototype,"hasScreenSizePerspective",void 0),m([T()],y.prototype,"hasVertexTangents",void 0),m([T()],y.prototype,"hasOccludees",void 0),m([T()],y.prototype,"multipassEnabled",void 0),m([T()],y.prototype,"hasModelTransformation",void 0),m([T()],y.prototype,"offsetBackfaces",void 0),m([T()],y.prototype,"vvSize",void 0),m([T()],y.prototype,"vvColor",void 0),m([T()],y.prototype,"receiveShadows",void 0),m([T()],y.prototype,"receiveAmbientOcclusion",void 0),m([T()],y.prototype,"textureAlphaPremultiplied",void 0),m([T()],y.prototype,"instanced",void 0),m([T()],y.prototype,"instancedColor",void 0),m([T()],y.prototype,"objectAndLayerIdColorInstanced",void 0),m([T()],y.prototype,"instancedDoublePrecision",void 0),m([T()],y.prototype,"doublePrecisionRequiresObfuscation",void 0),m([T()],y.prototype,"writeDepth",void 0),m([T()],y.prototype,"transparent",void 0),m([T()],y.prototype,"enableOffset",void 0),m([T()],y.prototype,"cullAboveGround",void 0),m([T()],y.prototype,"snowCover",void 0),m([T()],y.prototype,"hasColorTextureTransform",void 0),m([T()],y.prototype,"hasEmissionTextureTransform",void 0),m([T()],y.prototype,"hasNormalTextureTransform",void 0),m([T()],y.prototype,"hasOcclusionTextureTransform",void 0),m([T()],y.prototype,"hasMetallicRoughnessTextureTransform",void 0),m([T({constValue:!1})],y.prototype,"occlusionPass",void 0),m([T({constValue:!0})],y.prototype,"hasVvInstancing",void 0),m([T({constValue:!1})],y.prototype,"useCustomDTRExponentForWater",void 0),m([T({constValue:!1})],y.prototype,"supportsTextureAtlas",void 0),m([T({constValue:!0})],y.prototype,"useFillLights",void 0);function ma(t){const e=new ar,{vertex:r,fragment:o,varyings:a}=e;return ot(r,t),e.include(Gr),a.add("vpos","vec3"),e.include(Et,t),e.include(Ui,t),e.include(ki,t),t.output===B.Color&&(yt(e.vertex,t),e.include(rr,t),e.include(rt,t),t.offsetBackfaces&&e.include(Fi),t.instancedColor&&e.attributes.add(f.INSTANCECOLOR,"vec4"),a.add("vNormalWorld","vec3"),a.add("localvpos","vec3"),t.multipassEnabled&&a.add("depth","float"),e.include(Ve,t),e.include(Di,t),e.include(Wi,t),e.include(Hi,t),r.uniforms.add(new te("externalColor",i=>i.externalColor)),a.add("vcolorExt","vec4"),r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(Vr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.multipassEnabled?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===B.Color&&(e.include(tt,t),e.include(aa,t),e.include(Hr,t),e.include(it,t),e.include(t.instancedDoublePrecision?sa:la,t),e.include(na,t),yt(e.fragment,t),kr(o),Yr(o),Xr(o),o.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new Z("ambient",i=>i.ambient),new Z("diffuse",i=>i.diffuse),new se("opacity",i=>i.opacity),new se("layerOpacity",i=>i.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Q("tex",i=>i.texture)),e.include(pi,t),e.include(qr,t),o.include(da),t.transparencyPassType===oe.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),sr(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?s`terrainDepthTest(depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===N.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?s`albedo = mix(albedo, vec3(1), 0.9);`:s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===N.Normal||t.pbrMode===N.Schematic?t.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===N.Normal||t.pbrMode===N.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===oe.ColorAlpha?s`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;`:""}
      }
    `)),e.include(Yi,t),e}const Jc=Object.freeze(Object.defineProperty({__proto__:null,build:ma},Symbol.toStringTag,{value:"Module"}));class lr extends Jr{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=K.Attribute,r.doubleSidedMode=re.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,lr.shader)}}lr.shader=new ir(Jc,()=>wt(()=>Promise.resolve().then(()=>Ed),void 0));let Jt=class extends ys{constructor(e){super(e,Qc),this.supportsEdges=!0,this.produces=new Map([[St.OPAQUE_MATERIAL,r=>(mr(r)||fr(r))&&!this.parameters.transparent],[St.TRANSPARENT_MATERIAL,r=>(mr(r)||fr(r))&&this.parameters.transparent&&this.parameters.writeDepth],[St.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,r=>(mr(r)||fr(r))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new y,this._vertexBufferLayout=ed(this.parameters)}isVisibleForOutput(e){return e!==B.Shadow&&e!==B.ShadowExcludeHighlight&&e!==B.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{hasInstancedColor:r,hasVertexColors:o,hasSymbolColors:a,vvColor:i}=e,n=e.colorMixMode==="replace",c=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0,u=r||i||a;return o&&u?n||c:o?n?l:c:u?n||c:n?l:c}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?ve.None:this.parameters.cullFace,this._configuration.multipassEnabled=r.multipassEnabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,e===B.Color&&(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=re.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?re.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?re.WindingOrder:re.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&r.ssao!=null,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?N.Schematic:N.Normal:N.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<Ks,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,o,a,i,n){if(this.parameters.verticalOffset!=null){const c=o.camera;j(Tr,r[12],r[13],r[14]);let l=null;switch(o.viewingMode){case kt.Global:l=Zt($o,Tr);break;case kt.Local:l=Gt($o,od)}let u=0;const d=Re(id,Tr,c.eye),h=fe(d),p=pe(d,d,1/h);let v=null;this.parameters.screenSizePerspective&&(v=Sa(l,p)),u+=Ts(c,h,this.parameters.verticalOffset,v??0,this.parameters.screenSizePerspective),pe(l,l,u),Ea(_r,l,o.transform.inverseRotation),a=Re(td,a,_r),i=Re(rd,i,_r)}il(e,o,a,i,Sl(o.verticalOffset),n)}createGLMaterial(e){return new Zc(e)}createBufferWriter(){return new Il(this._vertexBufferLayout)}},Zc=class extends fs{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output===B.Color&&(this._updateShadowState(e),this._updateOccludeeState(e));const r=this._material.parameters;this.updateTexture(r.textureId);const o=e.camera.viewInverseTransposeMatrix;return j(r.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?lr:Jr,e)}};class Kc extends qc{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const Qc=new Kc;function ed(t){const e=Tn().vec3f(f.POSITION);return t.normalType===K.Compressed?e.vec2i16(f.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(f.NORMAL),t.hasVertexTangents&&e.vec4f(f.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(f.UV0),t.hasVertexColors&&e.vec4u8(f.COLOR),t.hasSymbolColors&&e.vec4u8(f.SYMBOLCOLOR),Ua("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(f.OBJECTANDLAYERIDCOLOR),e}const td=M(),rd=M(),od=Ue(0,0,1),$o=M(),_r=M(),Tr=M(),id=M(),Ee=()=>$r.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function ad(t,e){const r=await nd(t,e),o=await ud(r.textureDefinitions??{},e);let a=0;for(const i in o)if(o.hasOwnProperty(i)){const n=o[i];a+=n!=null&&n.image?n.image.width*n.image.height*4:0}return{resource:r,textures:o,size:a+ja(r)}}async function nd(t,e){const r=e==null?void 0:e.streamDataRequester;if(r)return sd(t,r,e);const o=await Wo(zo(t,e));if(o.ok===!0)return o.value.data;Ho(o.error),fa(o.error)}async function sd(t,e,r){const o=await Wo(e.request(t,"json",r));if(o.ok===!0)return o.value;Ho(o.error),fa(o.error.details.url)}function fa(t){throw new Mt("",`Request for object resource failed: ${t}`)}function ld(t){const e=t.params,r=e.topology;let o=!0;switch(e.vertexAttributes||(Ee().warn("Geometry must specify vertex attributes"),o=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=e.faces;if(i){if(e.vertexAttributes)for(const n in e.vertexAttributes){const c=i[n];c!=null&&c.values?(c.valueType!=null&&c.valueType!=="UInt32"&&(Ee().warn(`Unsupported indexed geometry indices type '${c.valueType}', only UInt32 is currently supported`),o=!1),c.valuesPerElement!=null&&c.valuesPerElement!==1&&(Ee().warn(`Unsupported indexed geometry values per element '${c.valuesPerElement}', only 1 is currently supported`),o=!1)):(Ee().warn(`Indexed geometry does not specify face indices for '${n}' attribute`),o=!1)}}else Ee().warn("Indexed geometries must specify faces"),o=!1;break}default:Ee().warn(`Unsupported topology '${r}'`),o=!1}t.params.material||(Ee().warn("Geometry requires material"),o=!1);const a=t.params.vertexAttributes;for(const i in a)a[i].values||(Ee().warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function cd(t,e){var x,_;const r=new Array,o=new Array,a=new Array,i=new yn,n=t.resource,c=Yo.parse(n.version||"1.0","wosr");md.validate(c);const l=n.model.name,u=n.model.geometries,d=n.materialDefinitions??{},h=t.textures;let p=0;const v=new Map;for(let g=0;g<u.length;g++){const $=u[g];if(!ld($))continue;const C=hd($),P=$.params.vertexAttributes,L=[],V=I=>{if($.params.topology==="PerAttributeArray")return null;const F=$.params.faces;for(const W in F)if(W===I)return F[W].values;return null},z=P[f.POSITION],w=z.values.length/z.valuesPerElement;for(const I in P){const F=P[I],W=F.values,le=V(I)??Xo(w);L.push([I,new Ze(W,le,F.valuesPerElement,!0)])}const b=C.texture,A=h&&h[b];if(A&&!v.has(b)){const{image:I,parameters:F}=A,W=new hi(I,F);o.push(W),v.set(b,W)}const R=v.get(b),S=R?R.id:void 0,E=C.material;let O=i.get(E,b);if(O==null){const I=d[E.substring(E.lastIndexOf("/")+1)].params;I.transparency===1&&(I.transparency=0);const F=A&&A.alphaChannelUsage,W=I.transparency>0||F==="transparency"||F==="maskAndTransparency",le=A?pa(A.alphaChannelUsage):void 0,he={ambient:Sr(I.diffuse),diffuse:Sr(I.diffuse),opacity:1-(I.transparency||0),transparent:W,textureAlphaMode:le,textureAlphaCutoff:.33,textureId:S,initTextureTransparent:!0,doubleSided:!0,cullFace:ve.None,colorMixMode:I.externalColorMixMode||"tint",textureAlphaPremultiplied:(A==null?void 0:A.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParameters&&Object.assign(he,e.materialParameters),O=new Jt(he),i.set(E,b,O)}a.push(O);const U=new ii(O,L);p+=((_=(x=L.find(I=>I[0]===f.POSITION))==null?void 0:x[1])==null?void 0:_.indices.length)??0,r.push(U)}return{engineResources:[{name:l,stageResources:{textures:o,materials:a,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:p,lodThreshold:null}],referenceBoundingBox:dd(r)}}function dd(t){const e=Fo();return t.forEach(r=>{const o=r.boundingInfo;o!=null&&(jt(e,o.bbMin),jt(e,o.bbMax))}),e}async function ud(t,e){const r=new Array;for(const i in t){const n=t[i],c=n.images[0].data;if(!c){Ee().warn("Externally referenced texture data is not yet supported");continue}const l=n.encoding+";base64,"+c,u="/textureDefinitions/"+i,d=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:je.REPEAT,t:je.REPEAT},preMultiplyAlpha:pa(d)!==J.Opaque},p=e!=null&&e.disableTextures?Promise.resolve(null):ri(l,e);r.push(p.then(v=>({refId:u,image:v,parameters:h,alphaChannelUsage:d})))}const o=await Promise.all(r),a={};for(const i of o)a[i.refId]=i;return a}function pa(t){switch(t){case"mask":return J.Mask;case"maskAndTransparency":return J.MaskBlend;case"none":return J.Opaque;default:return J.Blend}}function hd(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const md=new Yo(1,2,"wosr");async function uh(t,e){var h;const r=fd(va(t));if(r.fileType==="wosr"){const p=await(e.cache?e.cache.loadWOSR(r.url,e):ad(r.url,e)),{engineResources:v,referenceBoundingBox:x}=cd(p,e);return{lods:v,referenceBoundingBox:x,isEsriSymbolResource:!1,isWosr:!0}}const o=await(e.cache?e.cache.loadGLTF(r.url,e,!!e.usePBR):Qa(new en(e.streamDataRequester),r.url,e,e.usePBR)),a=(h=o.model.meta)==null?void 0:h.ESRI_proxyEllipsoid,i=o.meta.isEsriSymbolResource&&a!=null&&o.meta.ESRI_webstyle==="EsriRealisticTreesStyle";i&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,_d(o,a));const n=!!e.usePBR,c=o.meta.isEsriSymbolResource?{usePBR:n,isSchematic:!1,treeRendering:i,mrrFactors:[...Vl]}:{usePBR:n,isSchematic:!1,treeRendering:!1,mrrFactors:[...Pi]},l={...e.materialParameters,treeRendering:i},{engineResources:u,referenceBoundingBox:d}=pd(o,c,l,e.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:u,referenceBoundingBox:d,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function fd(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function pd(t,e,r,o){const a=t.model,i=new Array,n=new Map,c=new Map,l=a.lods.length,u=Fo();return a.lods.forEach((d,h)=>{const p=o.skipHighLods===!0&&(l>1&&h===0||l>3&&h===1)||o.skipHighLods===!1&&o.singleLodIndex!=null&&h!==o.singleLodIndex;if(p&&h!==0)return;const v=new En(d.name,d.lodThreshold,[0,0,0]);d.parts.forEach(x=>{const _=p?new Jt({}):vd(a,x,v,e,r,n,c),{geometry:g,vertexCount:$}=gd(x,_??new Jt({})),C=g.boundingInfo;C!=null&&h===0&&(jt(u,C.bbMin),jt(u,C.bbMax)),_!=null&&(v.stageResources.geometries.push(g),v.numberOfVertices+=$)}),p||i.push(v)}),{engineResources:i,referenceBoundingBox:u}}function vd(t,e,r,o,a,i,n){var v,x;const c=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),l=t.materials.get(e.material),u=e.attributes.texCoord0!=null,d=e.attributes.normal!=null;if(l==null)return null;const h=xd(l.alphaMode);if(!i.has(c)){if(u){const b=(A,R=!1)=>{if(A!=null&&!n.has(A)){const S=t.textures.get(A);if(S!=null){const E=S.data;n.set(A,new hi(hr(E)?E.data:E,{...S.parameters,preMultiplyAlpha:!hr(E)&&R,encoding:hr(E)&&E.encoding!=null?E.encoding:void 0}))}}};b(l.textureColor,h!==J.Opaque),b(l.textureNormal),b(l.textureOcclusion),b(l.textureEmissive),b(l.textureMetallicRoughness)}const _=l.color[0]**(1/Ye),g=l.color[1]**(1/Ye),$=l.color[2]**(1/Ye),C=l.emissiveFactor[0]**(1/Ye),P=l.emissiveFactor[1]**(1/Ye),L=l.emissiveFactor[2]**(1/Ye),V=l.textureColor!=null&&u?n.get(l.textureColor):null,z=zl({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion}),w=((v=l.normalTextureTransform)==null?void 0:v.scale)!=null?(x=l.normalTextureTransform)==null?void 0:x.scale:Do;i.set(c,new Jt({...o,transparent:h===J.Blend,customDepthTest:Ct.Lequal,textureAlphaMode:h,textureAlphaCutoff:l.alphaCutoff,diffuse:[_,g,$],ambient:[_,g,$],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?ve.None:ve.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:d?K.Attribute:K.ScreenDerivative,castShadows:!0,receiveShadows:l.receiveShadows,receiveAmbientOcclusion:l.receiveAmbientOcclustion,textureId:V!=null?V.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:l.textureNormal!=null&&u?n.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:V!=null&&!!V.parameters.preMultiplyAlpha,occlusionTextureId:l.textureOcclusion!=null&&u?n.get(l.textureOcclusion).id:void 0,emissiveTextureId:l.textureEmissive!=null&&u?n.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:l.textureMetallicRoughness!=null&&u?n.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[C,P,L],mrrFactors:z?[...Gl]:[l.metallicFactor,l.roughnessFactor,o.mrrFactors[2]],isSchematic:z,colorTextureTransformMatrix:mt(l.colorTextureTransform),normalTextureTransformMatrix:mt(l.normalTextureTransform),scale:[w[0],w[1]],occlusionTextureTransformMatrix:mt(l.occlusionTextureTransform),emissiveTextureTransformMatrix:mt(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:mt(l.metallicRoughnessTextureTransform),...a}))}const p=i.get(c);if(r.stageResources.materials.push(p),u){const _=g=>{g!=null&&r.stageResources.textures.push(n.get(g))};_(l.textureColor),_(l.textureNormal),_(l.textureOcclusion),_(l.textureEmissive),_(l.textureMetallicRoughness)}return p}function gd(t,e){const r=t.attributes.position.count,o=tn(t.indices||r,t.primitiveType),a=Pt(3*r),{typedBuffer:i,typedBufferStride:n}=t.attributes.position;Ja(a,i,t.transform,3,n);const c=[[f.POSITION,new Ze(a,o,3,!0)]];if(t.attributes.normal!=null){const u=Pt(3*r),{typedBuffer:d,typedBufferStride:h}=t.attributes.normal;Po(Je,t.transform),Za(u,d,Je,3,h),to(Je)&&no(u,u),c.push([f.NORMAL,new Ze(u,o,3,!0)])}if(t.attributes.tangent!=null){const u=Pt(4*r),{typedBuffer:d,typedBufferStride:h}=t.attributes.tangent;ya(Je,t.transform),Ka(u,d,Je,4,h),to(Je)&&no(u,u,4),c.push([f.TANGENT,new Ze(u,o,4,!0)])}if(t.attributes.texCoord0!=null){const u=Pt(2*r),{typedBuffer:d,typedBufferStride:h}=t.attributes.texCoord0;rn(u,d,2,h),c.push([f.UV0,new Ze(u,o,2,!0)])}const l=t.attributes.color;if(l!=null){const u=new Uint8Array(4*r);l.elementCount===4?l instanceof yr?lo(u,l,255):l instanceof tr?on(u,l):l instanceof qa&&lo(u,l,1/256):(u.fill(255),l instanceof Ht?so(u,l.typedBuffer,255,4,l.typedBufferStride):t.attributes.color instanceof Ya?an(u,l.typedBuffer,4,t.attributes.color.typedBufferStride):t.attributes.color instanceof Xa&&so(u,l.typedBuffer,1/256,4,l.typedBufferStride)),c.push([f.COLOR,new Ze(u,o,4,!0)])}return{geometry:new ii(e,c),vertexCount:r}}const Je=At();function xd(t){switch(t){case"BLEND":return J.Blend;case"MASK":return J.Mask;case"OPAQUE":case null:case void 0:return J.Opaque}}function _d(t,e){for(let r=0;r<t.model.lods.length;++r){const o=t.model.lods[r];for(const a of o.parts){const i=a.attributes.normal;if(i==null)return;const n=a.attributes.position,c=n.count,l=M(),u=M(),d=M(),h=new Uint8Array(4*c),p=new Float64Array(3*c),v=Aa(Qt(),a.transform);let x=0,_=0;for(let g=0;g<c;g++){n.getVec(g,u),i.getVec(g,l),$e(u,u,a.transform),Re(d,u,e.center),ro(d,d,e.radius);const $=d[2],C=fe(d),P=Math.min(.45+.55*C*C,1);ro(d,d,e.radius),v!==null&&$e(d,d,v),Zt(d,d),r+1!==t.model.lods.length&&t.model.lods.length>1&&br(d,d,l,$>-1?.2:Math.min(-4*$-3.8,1)),p[x]=d[0],p[x+1]=d[1],p[x+2]=d[2],x+=3,h[_]=255*P,h[_+1]=255*P,h[_+2]=255*P,h[_+3]=255,_+=4}a.attributes.normal=new Ht(p),a.attributes.color=new tr(h)}}}const Td=Object.freeze(Object.defineProperty({__proto__:null,build:Ki},Symbol.toStringTag,{value:"Module"})),bd=Object.freeze(Object.defineProperty({__proto__:null,build:ta,getRadius:nr},Symbol.toStringTag,{value:"Module"})),Sd=Object.freeze(Object.defineProperty({__proto__:null,build:ua},Symbol.toStringTag,{value:"Module"})),Ed=Object.freeze(Object.defineProperty({__proto__:null,build:ma},Symbol.toStringTag,{value:"Module"}));export{uh as fetch,pd as gltfToEngineResources,fd as parseUrl};
