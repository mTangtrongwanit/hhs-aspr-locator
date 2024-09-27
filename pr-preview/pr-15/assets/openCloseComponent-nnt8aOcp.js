import{bl as r,bp as s}from"./index-DGV7wdQ6.js";import{b as t}from"./icon-Cnefcet4.js";import{w as a}from"./component-DyFfvRg5.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.0
 */let o;const l={childList:!0};function C(e){o||(o=t("mutation",f)),o.observe(e.el,l)}function c(e){o.unobserve(e.el)}function f(e){e.forEach(({target:i})=>{r(i)})}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.0
 */const u=s;function n(e){return"opened"in e?e.opened:e.open}function O(e){u(()=>{e.transitionEl&&a(e.transitionEl,e.openTransitionProp,()=>{n(e)?e.onBeforeOpen():e.onBeforeClose()},()=>{n(e)?e.onOpen():e.onClose()})})}export{C as c,c as d,O as o};
