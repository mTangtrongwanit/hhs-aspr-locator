import"./portalItemUtils-SOz5vLrp.js";import{n as l}from"./compilerUtils-DWBoX8E2.js";import{e as d}from"./VertexAttribute-BlT9lbVY.js";var c;(function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"})(c||(c={}));let u=class{};const C=u;function i(e,...o){let a="";for(let n=0;n<o.length;n++)a+=e[n]+o[n];return a+=e[e.length-1],a}(function(e){function o(n){return Math.round(n).toString()}function a(n){return n.toPrecision(8)}e.int=o,e.float=a})(i||(i={}));var r;function b(e){return e===r.Shadow||e===r.ShadowHighlight||e===r.ShadowExcludeHighlight||e===r.ViewshedShadow}function N(e){return g(e)||e===r.Normal}function s(e){return e===r.Highlight||e===r.ObjectAndLayerIdColor}function h(e){return e===r.Color}function m(e){return h(e)||s(e)}function g(e){return m(e)||f(e)}function f(e){return e===r.Depth}(function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.ViewshedShadow=6]="ViewshedShadow",e[e.Highlight=7]="Highlight",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"})(r||(r={}));function O(e,o){switch(o.normalType){case t.Compressed:e.attributes.add(d.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case t.Attribute:e.attributes.add(d.NORMAL,"vec3"),e.vertex.code.add(i`vec3 normalModel() {
return normal;
}`);break;case t.ScreenDerivative:e.fragment.code.add(i`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:l(o.normalType);case t.COUNT:case t.Ground:}}var t;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"})(t||(t={}));export{C as a,t as b,r as c,N as d,c as n,i as o,b as r,O as t};
