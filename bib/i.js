/*!
 *
 *  # Pipi: BiB/i Putter
 *
 *  - "Putting EPUBs in a Web Page with BiB/i."
 *  - (c) Satoru MATSUSHIMA - http://bibi.epub.link or https://github.com/satorumurmur/bibi
 *  - Licensed under the MIT license. - http://www.opensource.org/licenses/mit-license.php
 */
!function(){if(!window["bibi:pipi"]){var e=window["bibi:pipi"]={version:"0.999.9-pb.2",build:201704051728,Status:"",Bibis:[],Anchors:[],Holders:[],Frames:[],TrustworthyOrigins:[location.origin],Loaded:0};e.Path=function(){if(document.currentScript)return document.currentScript.src;var e=document.getElementsByTagName("script");return e[e.length-1].src}(),e.embed=function(){e.Status="Started";for(var t=document.body.querySelectorAll("a[data-bibi]"),i=t.length,n=0;n<i;n++)if(t[n].getAttribute("href")&&!t[n].Bibi){var o={Index:n,Number:n+1},a=o.Anchor=t[n];/ bibi-anchor /.test(" "+a.className+" ")||(a.className="bibi-anchor"+(a.className?" "+a.className:""));var r=Href=a.getAttribute("href"),d=a.getAttribute("data-bibi-class"),s=a.getAttribute("data-bibi-id"),b=a.getAttribute("data-bibi-style"),u=a.getAttribute("data-bibi-reader-view-mode"),c=a.getAttribute("data-bibi-fix-reader-view-mode"),l=a.getAttribute("data-bibi-autostart"),m=a.getAttribute("data-bibi-start-in-new-window"),h=a.getAttribute("data-bibi-use-slider"),g=a.getAttribute("data-bibi-use-arrows"),p=a.getAttribute("data-bibi-use-keys"),f=a.getAttribute("data-bibi-use-swipe"),v=a.getAttribute("data-bibi-use-cookie"),w=a.getAttribute("data-bibi-to"),y=a.getAttribute("data-bibi-nav"),E=a.innerHTML;a.origin!=location.origin&&e.TrustworthyOrigins.push(a.origin),a.addEventListener("bibi:loaded",function(e){console.log("BiB/i: Loaded. - #"+e.detail.Number+": "+e.detail.Anchor.href)},!1),e.Anchors.push(a);var B=o.Holder=e.create("span",{className:"bibi-holder",id:"bibi-holder-"+(n+1),title:(a.innerText?a.innerText+" ":"")+"(powered by BiB/i)"});d&&(B.className+=" "+d),s&&(B.id=s),b&&B.setAttribute("style",b),e.Holders.push(B);var A=new e.Fragment;A.add("parent-title",e.encode(document.title)),A.add("parent-uri",e.encode(location.href)),A.add("parent-origin",e.encode(location.origin)),A.add("parent-pipi-path",e.encode(e.Path)),A.add("parent-bibi-label",e.encode(E)),A.add("parent-holder-id",B.id),/^(horizontal|vertical|paged)$/.test(u)&&A.add("reader-view-mode",u),/^(true|false|yes|no|mobile|desktop)?$/.test(c)&&A.add("fix-reader-view-mode",c),/^(true|false|yes|no|mobile|desktop)?$/.test(l)&&A.add("autostart",l),/^(true|false|yes|no|mobile|desktop)?$/.test(m)&&A.add("start-in-new-window",m),/^(true|false|yes|no|mobile|desktop)?$/.test(h)&&A.add("use-slider",h),/^(true|false|yes|no|mobile|desktop)?$/.test(g)&&A.add("use-arrows",g),/^(true|false|yes|no|mobile|desktop)?$/.test(p)&&A.add("use-keys",p),/^(true|false|yes|no|mobile|desktop)?$/.test(f)&&A.add("use-swipe",f),/^(true|false|yes|no|mobile|desktop)?$/.test(v)&&A.add("use-cookie",v),/^[1-9][\d\-\.]*$/.test(w)&&A.add("to",w),/^[1-9]\d*$/.test(y)&&A.add("nav",y);var C=o.Frame=B.appendChild(e.create("iframe",{className:"bibi-frame",frameborder:"0",scrolling:"auto",allowfullscreen:"true",src:r+(/#/.test(r)?",":"#")+A.make()}));C.addEventListener("load",function(){e.Loaded++,this.Bibi.Anchor.dispatchEvent(new CustomEvent("bibi:loaded",{detail:this.Bibi})),"Timeouted"!=e.Status&&e.Loaded==e.Bibis.length&&(e.Status="Loaded",document.dispatchEvent(new CustomEvent("bibi:loaded",{detail:e})))},!1),e.Frames.push(C),e.Bibis.push(o),C.Bibi=B.Bibi=a.Bibi=o}for(var n=0,i=e.Bibis.length;n<i;n++)if(!e.Bibis[n].Embedded){var o=e.Bibis[n];o.move=function(e){"number"==typeof Target&&this.Frame.contentWindow.postMessage('{"bibi:commands:move":"'+e+'"}',this.Anchor.origin)},o.focus=function(e){"string"!=typeof e&&"number"!=typeof e||this.Frame.contentWindow.postMessage('{"bibi:commands:focus":"'+e+'"}',this.Anchor.origin)},o.changeView=function(e){"string"==typeof Target&&this.Frame.contentWindow.postMessage('{"bibi:commands:change-view":"'+e+'"}',this.Anchor.origin)},o.togglePanel=function(){this.Frame.contentWindow.postMessage('{"bibi:command:toggle-panel":""}',this.Anchor.origin)},o.Anchor.style.display="none",o.Anchor.parentNode.insertBefore(o.Holder,o.Anchor),o.Anchor.dispatchEvent(new CustomEvent("bibi:readied",{detail:o}))}return setTimeout(function(){"Loaded"!=e.Status&&(e.Status="Timeouted",document.dispatchEvent(new CustomEvent("bibi:timed-out",{detail:e})))},12e3),e.Status="Readied",document.dispatchEvent(new CustomEvent("bibi:readied",{detail:e})),e.Bibis},e.encode=function(e){return encodeURIComponent(e).replace("(","_BibiKakkoOpen_").replace(")","_BibiKakkoClose_")},e.create=function(e,t){var i=document.createElement(e);for(var n in t)i[n]=t[n];return i},e.Fragment=function(){return this.Fragment=[],this.add=function(e,t){this.Fragment.push([e,t].join(":"))},this.make=function(){return this.Fragment.length?"pipi("+this.Fragment.join(",")+")":""},this},(!window.CustomEvent||"function"!=typeof window.CustomEvent&&window.CustomEvent.toString().indexOf("CustomEventConstructor")===-1)&&(window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i},window.CustomEvent.prototype=window.Event.prototype),window.addEventListener("message",function(t){if(t&&t.data)for(var i=0,n=e.TrustworthyOrigins.length;i<n;i++)if(t.origin==e.TrustworthyOrigins[i]){var o=t.data;try{if(o=JSON.parse(o),"object"!=typeof o||!o)return!1;for(var a in o)/^bibi:commands:/.test(a)&&document.dispatchEvent(new CustomEvent(a,{detail:o[a]}));return!0}catch(r){}return!1}},!1),document.getElementsByTagName("head")[0].appendChild(e.create("link",{rel:"stylesheet",id:"bibi-css",href:e.Path.replace(/\.js$/,".css")})),document.addEventListener("bibi:readied",function(e){console.log("BiB/i: Readied. - "+e.detail.Bibis.length+" Bibi(s).")},!1),document.addEventListener("bibi:loaded",function(e){console.log("BiB/i: Loaded. - "+e.detail.Bibis.length+" Bibi(s).")},!1),document.addEventListener("bibi:timed-out",function(e){console.log("BiB/i: Timed Out.")},!1),document.addEventListener("DOMContentLoaded",e.embed,!1)}}();