(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var i=n(11),s=n(9),r=n(12),o=n(13);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class l{constructor(e){a(this,"element",void 0),a(this,"toggleAccordion",e=>{e.preventDefault();const{target:t}=e,n=t.classList.contains("category__header"),i=t.closest("div");n&&i.classList.toggle("category_open")}),a(this,"onSortableListReorder",async e=>{const{target:t}=e,{children:n}=t,i=[...n].map((e,t)=>{const{id:n}=e.dataset;return{id:n,weight:t}});try{await this.send(i),this.showNotificationMessage("Category order saved",{type:"success"})}catch(e){this.showNotificationMessage("Server side error! ".concat(e),{type:"error",duration:3e3})}}),this.data=e,this.render()}showNotificationMessage(e,{duration:t=2e3,type:n}={}){new o.a(e,{duration:t,type:n}).show()}async send(e){const t=new URL("api/rest/subcategories","https://course-js.javascript.ru/"),n={method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)};await Object(s.a)(t,n)}render(){const e=document.createElement("div");e.innerHTML=this.getCategoriesContainerTemplate(this.data);const t=e.firstElementChild;this.element=t,this.appendSubcategoryDraggableList(),this.initEventListeners()}initEventListeners(){this.element.addEventListener("click",this.toggleAccordion),this.element.addEventListener("sortable-list-reorder",this.onSortableListReorder)}removeEventListeners(){this.element.removeEventListener("click",this.toggleAccordion),this.element.removeEventListener("sortable-list-reorder",this.onSortableListReorder)}getCategoriesContainerTemplate(e){return'\n      <div data-element="categoriesContainer">\n        '.concat(this.getCategoryTemplate(e),"\n      </div>\n    ")}getCategoryTemplate(e){return e.map(e=>'\n          <div class="category category_open" data-id="'.concat(e.id,'">\n            <header class="category__header">').concat(Object(i.a)(e.title),'</header>\n            <div class="category__body">\n              <div class="subcategory-list" data-element="subcategoryList">\n              </div>\n            </div>\n          </div>\n        ')).join("")}createSubcategoryList(){return this.data.map(e=>{const{subcategories:t}=e;return t.map(({id:e,title:t,count:n})=>this.getSortableListItemTemplate(e,t,n))})}getSortableListItemTemplate(e,t,n){const s=document.createElement("div");return s.innerHTML='\n      <li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="'.concat(e,'">\n        <strong>').concat(Object(i.a)(t),"</strong>\n        <span><b>").concat(n,"</b> products</span>\n      </li>"),s.firstElementChild}appendSubcategoryDraggableList(){const e=this.createSubcategoryList();this.element.querySelectorAll("[data-element='subcategoryList']").forEach((t,n)=>{const i=new r.a({items:e[n]});t.append(i.element)})}remove(){this.element.remove()}destroy(){this.removeEventListeners(),this.remove()}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class d{constructor(){c(this,"element",void 0),c(this,"subElements",{}),c(this,"components",{}),c(this,"data",{})}async getData(){const e=new URL("api/rest/categories","https://course-js.javascript.ru/");e.searchParams.set("_sort","weight"),e.searchParams.set("_refs","subcategory"),this.data=await Object(s.a)(e)}initComponents(){const e=new l(this.data);this.components.categories=e}get template(){return'\n    <div class="categories">\n      <div class="content__top-panel">\n        <h1 class="page-title">Категории товаров</h1>\n      </div>\n      <div data-element="categories">\n        \x3c!-- categories component --\x3e\n      </div>\n    </div>'}async render(){const e=document.createElement("div");return e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(this.element),await this.getData(),this.initComponents(),this.renderComponents(),this.element}renderComponents(){Object.keys(this.components).forEach(e=>{const t=this.subElements[e],{element:n}=this.components[e];t.append(n)})}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}destroy(){for(const e of Object.values(this.components))e.destroy()}}},,,function(e,t,n){"use strict";t.a=async function(e,t){let n,s;try{n=await fetch(e.toString(),t)}catch(e){throw new i(n,"Network error has occurred.")}if(!n.ok){let e=n.statusText;try{s=await n.json(),e=s.error&&s.error.message||s.data&&s.data.error&&s.data.error.message||e}catch(e){}let t="Error ".concat(n.status,": ").concat(e);throw new i(n,s,t)}try{return await n.json()}catch(e){throw new i(n,null,e.message)}};class i extends Error{constructor(e,t,n){var i,s,r;super(n),r="FetchError",(s="name")in(i=this)?Object.defineProperty(i,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[s]=r,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",e=>{e.reason instanceof i&&alert(e.reason.message)})},,function(e,t,n){"use strict";t.a=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return s}));class s{constructor({items:e=[]}={}){i(this,"element",void 0),i(this,"onDocumentPointerMove",({clientX:e,clientY:t})=>{this.moveDraggingAt(e,t);const{firstElementChild:n,children:i}=this.element,{top:s}=n.getBoundingClientRect(),{bottom:r}=this.element.getBoundingClientRect();if(t<s)this.movePlaceholderAt(0);else if(t>r)this.movePlaceholderAt(i.length);else for(let e=0;e<i.length;e++){const n=i[e];if(n!==this.draggingElem){const{top:i,bottom:s}=n.getBoundingClientRect(),{offsetHeight:r}=n;if(t>i&&t<s){if(t<i+r/2){this.movePlaceholderAt(e);break}this.movePlaceholderAt(e+1);break}}}this.scrollIfCloseToWindowEdge(t)}),i(this,"onDocumentPointerUp",()=>{this.dragStop()}),this.items=e,this.render()}render(){this.element=document.createElement("ul"),this.element.className="sortable-list",this.addItems(),this.initEventListeners()}initEventListeners(){this.element.addEventListener("pointerdown",e=>this.onPointerDown(e))}addItems(){for(let e of this.items)e.classList.add("sortable-list__item");this.element.append(...this.items)}onPointerDown(e){if(1!==e.which)return!1;const t=e.target.closest(".sortable-list__item");t&&(e.target.closest("[data-grab-handle]")&&(e.preventDefault(),this.dragStart(t,e)),e.target.closest("[data-delete-handle]")&&(e.preventDefault(),t.remove()))}dragStart(e,{clientX:t,clientY:n}){this.elementInitialIndex=[...this.element.children].indexOf(e),this.pointerInitialShift={x:t-e.getBoundingClientRect().x,y:n-e.getBoundingClientRect().y},this.draggingElem=e,this.placeholderElem=document.createElement("li"),this.placeholderElem.className="sortable-list__placeholder",e.style.width="".concat(e.offsetWidth,"px"),e.style.height="".concat(e.offsetHeight,"px"),this.placeholderElem.style.width=e.style.width,this.placeholderElem.style.height=e.style.height,e.classList.add("sortable-list__item_dragging"),e.after(this.placeholderElem),this.element.append(e),this.moveDraggingAt(t,n),document.addEventListener("pointermove",this.onDocumentPointerMove),document.addEventListener("pointerup",this.onDocumentPointerUp)}moveDraggingAt(e,t){this.draggingElem.style.left=e-this.pointerInitialShift.x+"px",this.draggingElem.style.top=t-this.pointerInitialShift.y+"px"}scrollIfCloseToWindowEdge(e){e<20?window.scrollBy(0,-10):e>document.documentElement.clientHeight-20&&window.scrollBy(0,10)}movePlaceholderAt(e){const t=this.element.children[e];t!==this.placeholderElem&&this.element.insertBefore(this.placeholderElem,t)}dragStop(){const e=[...this.element.children].indexOf(this.placeholderElem);this.placeholderElem.replaceWith(this.draggingElem),this.draggingElem.classList.remove("sortable-list__item_dragging"),this.draggingElem.style.left="",this.draggingElem.style.top="",this.draggingElem.style.width="",this.draggingElem.style.height="",document.removeEventListener("pointermove",this.onDocumentPointerMove),document.removeEventListener("pointerup",this.onDocumentPointerUp),this.draggingElem=null,e!==this.elementInitialIndex&&this.element.dispatchEvent(new CustomEvent("sortable-list-reorder",{bubbles:!0,detail:{from:this.elementInitialIndex,to:e}}))}remove(){this.element.remove(),document.removeEventListener("pointermove",this.onDocumentPointerMove),document.removeEventListener("pointerup",this.onDocumentPointerUp)}destroy(){this.remove()}}},function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return s}));class s{constructor(e,{duration:t,type:n}={}){i(this,"element",void 0),this.message=e,this.duration=t,this.type=n,this.render()}get template(){return'\n      <div class="notification notification_'.concat(this.type,' show" style="--value:').concat(this.duration/1e3,'s">\n        <div class="notification__content">\n          ').concat(this.message,"\n        </div>\n      </div>\n    ")}render(){s.activeComponent&&s.activeComponent.remove();const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,s.activeComponent=this.element}show(e=document.body){e.append(this.element),setTimeout(()=>{this.remove()},this.duration)}remove(){this.element.remove()}destroy(){this.remove()}}i(s,"activeComponent",void 0)}]]);
//# sourceMappingURL=categories-index-js-1.js.map