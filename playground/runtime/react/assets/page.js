import{A as App$2,g as getUrlParam,R as ReactDOM}from"./index.4f90b8fe.js";import{r as react,A as AppContent,R as React}from"./Text.35d811ca.js";import{e as entry}from"./components.js";var App$1=(()=>`html,body,#root{width:100%;height:100%}#root{position:relative;overflow:auto}#root::-webkit-scrollbar{width:0!important;display:none}
`)();function App(){var t,o;const e=react.exports.useContext(AppContent);if(!((t=e==null?void 0:e.page)!=null&&t.data))return null;const r=e.resolveComponent("page");return React.createElement(r,{config:(o=e==null?void 0:e.page)==null?void 0:o.data})}const getLocalConfig=()=>{const configStr=localStorage.getItem("magicUiConfig");if(!configStr)return[];try{return[eval(`(${configStr})`)]}catch(e){return[]}};window.magicDSL=[];const app=new App$2({config:((getUrlParam("localPreview")?getLocalConfig():window.magicDSL)||[])[0]||{},curPage:getUrlParam("page")});Object.keys(entry.components).forEach(e=>app.registerComponent(e,entry.components[e]));ReactDOM.render(React.createElement(React.StrictMode,null,React.createElement(AppContent.Provider,{value:app},React.createElement(App,null))),document.getElementById("root"));
//# sourceMappingURL=page.js.map
