(function(){"use strict";var e={394:function(e,t,r){var n=r(963),a=r(252),i=r(577);const o={class:"search-box"},u={key:0,class:"weather-wrap"},s={class:"location-box"},c={class:"location"},h={class:"date"},l={class:"weather-box"},d={class:"temp"},f={class:"weather"};function p(e,t,r,p,w,y){return(0,a.wg)(),(0,a.iD)("div",{id:"app",class:(0,i.C_)("undefined"!=typeof w.weather.main&&w.weather.main.temp>18?"warm":"")},[(0,a._)("main",null,[(0,a._)("div",o,[(0,a.wy)((0,a._)("input",{type:"text",class:"search-bar",placeholder:"Search...","onUpdate:modelValue":t[0]||(t[0]=e=>w.query=e),onKeypress:t[1]||(t[1]=(...e)=>y.fetchWeather&&y.fetchWeather(...e))},null,544),[[n.nr,w.query]])]),"undefined"!=typeof w.weather.main?((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",s,[(0,a._)("div",c,(0,i.zw)(w.weather.name)+", "+(0,i.zw)(w.weather.sys.country),1),(0,a._)("div",h,(0,i.zw)(y.dateBuilder()),1)]),(0,a._)("div",l,[(0,a._)("div",d,(0,i.zw)(Math.round(w.weather.main.temp))+"°c",1),(0,a._)("div",f,(0,i.zw)(w.weather.weather[0].main),1)])])):(0,a.kq)("",!0)])],2)}var w={name:"App",data(){return{api_key:"c7879bb47b8707e3a059189b44a8eed6",url_base:"https://api.openweathermap.org/data/2.5/",query:"",weather:{}}},methods:{fetchWeather(e){"Enter"==e.key&&fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`).then((e=>e.json())).then(this.setResults)},setResults(e){this.weather=e},dateBuilder(){let e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"],r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=r[e.getDay()],a=e.getDate(),i=t[e.getMonth()],o=e.getFullYear();return`${n} ${a} ${i} ${o}`}}},y=r(744);const v=(0,y.Z)(w,[["render",p]]);var b=v;(0,n.ri)(b).mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,i){if(!n){var o=1/0;for(h=0;h<e.length;h++){n=e[h][0],a=e[h][1],i=e[h][2];for(var u=!0,s=0;s<n.length;s++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(u=!1,i<o&&(o=i));if(u){e.splice(h--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[n,a,i]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,o=n[0],u=n[1],s=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in u)r.o(u,a)&&(r.m[a]=u[a]);if(s)var h=s(r)}for(t&&t(n);c<o.length;c++)i=o[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(h)},n=self["webpackChunkvue_weather"]=self["webpackChunkvue_weather"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(394)}));n=r.O(n)})();
//# sourceMappingURL=app.640d736f.js.map