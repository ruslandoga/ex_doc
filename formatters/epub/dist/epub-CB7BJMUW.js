(()=>{var g=document.querySelector.bind(document),i=document.querySelectorAll.bind(document);function r(o){document.readyState!=="loading"?o():document.addEventListener("DOMContentLoaded",o)}var l="ex_doc:settings",d={tooltips:!0,theme:null,livebookUrl:null},s=class{constructor(){this._subscribers=[],this._settings=d,this._loadSettings()}get(){return this._settings}update(t){let e=this._settings;this._settings={...this._settings,...t},this._subscribers.forEach(n=>n(this._settings,e)),this._storeSettings()}getAndSubscribe(t){this._subscribers.push(t),t(this._settings)}_loadSettings(){try{let t=localStorage.getItem(l);if(t){let e=JSON.parse(t);this._settings={...this._settings,...e}}this._loadSettingsLegacy()}catch(t){console.error(`Failed to load settings: ${t}`)}}_storeSettings(){try{this._storeSettingsLegacy(),localStorage.setItem(l,JSON.stringify(this._settings))}catch(t){console.error(`Failed to persist settings: ${t}`)}}_loadSettingsLegacy(){localStorage.getItem("tooltipsDisabled")!==null&&(this._settings={...this._settings,tooltips:!1}),localStorage.getItem("night-mode")==="true"&&(this._settings={...this._settings,nightMode:!0}),this._settings.nightMode===!0&&(this._settings={...this._settings,theme:"dark"})}_storeSettingsLegacy(){this._settings.tooltips?localStorage.removeItem("tooltipsDisabled"):localStorage.setItem("tooltipsDisabled","true"),this._settings.nightMode!==null?localStorage.setItem("night-mode",this._settings.nightMode===!0?"true":"false"):localStorage.removeItem("night-mode"),this._settings.theme!==null?(localStorage.setItem("night-mode",this._settings.theme==="dark"?"true":"false"),this._settings.nightMode=this._settings.theme==="dark"):(delete this._settings.nightMode,localStorage.removeItem("night-mode"))}},h=new s;function c(){["warning","info","error","neutral","tip"].forEach(t=>{i(`blockquote h3.${t}, blockquote h4.${t}`).forEach(e=>{e.closest("blockquote").classList.add(t)})})}var m="hll";function u(){f()}function f(){i("[data-group-id]").forEach(t=>{let e=t.getAttribute("data-group-id");t.addEventListener("mouseenter",n=>{a(e,!0)}),t.addEventListener("mouseleave",n=>{a(e,!1)})})}function a(o,t){i(`[data-group-id="${o}"]`).forEach(n=>{n.classList.toggle(m,t)})}r(()=>{u(),c()});})();