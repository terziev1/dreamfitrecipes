webpackJsonp([1],{"/TYz":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("HG7Q"),s=e("rGQh"),r=!1;var n=function(t){r||e("RxLx")},o=e("VU/8")(i.a,s.a,!1,n,"data-v-2a183b29",null);o.options.__file="pages/index.vue",a.default=o.exports},"5PlU":function(t,a,e){var i=e("RY/4"),s=e("dSzd")("iterator"),r=e("/bQp");t.exports=e("FeBl").isIterable=function(t){var a=Object(t);return void 0!==a[s]||"@@iterator"in a||r.hasOwnProperty(i(a))}},"6/AW":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".home.header[data-v-2a183b29]{overflow:hidden;position:relative;height:300px;display:flex;align-items:center;justify-content:center}.home.header img[data-v-2a183b29]{height:100%}.page-info[data-v-2a183b29]{display:flex;align-items:center;justify-content:flex-end;flex-direction:column;height:100%;flex-basis:30%}.page-img img[data-v-2a183b29]{width:100%;height:100%;object-fit:cover}.page-info p[data-v-2a183b29]{width:100%;object-fit:contain;text-align:center;margin-bottom:16px}.item-list-wrapper[data-v-2a183b29]{display:flex}.item-list-container[data-v-2a183b29]{flex-basis:70%}h2[data-v-2a183b29]{font-size:32px;margin-left:16px;margin-bottom:8px}.items-list[data-v-2a183b29]{flex-wrap:wrap;display:flex;padding:10px}.item[data-v-2a183b29]{flex-basis:100%;display:flex}@media(max-width:640px){.item-list-wrapper[data-v-2a183b29]{flex-wrap:wrap}.page-info[data-v-2a183b29]{flex-basis:100%;margin-bottom:30px}.item-list-container[data-v-2a183b29]{flex-basis:100%}.items-list[data-v-2a183b29]{padding:10px 0}h2[data-v-2a183b29]{margin-left:5px}}",""])},BZTh:function(t,a,e){"use strict";var i=e("Rhy+"),s=!1;var r=function(t){s||e("pgF7")},n=e("VU/8")(null,i.a,!1,r,"data-v-2ab9f78f",null);n.options.__file="components/navigation.vue",a.a=n.exports},E9nm:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"nav[data-v-2ab9f78f]{width:100%;position:fixed;top:0;left:0;background:#fff;z-index:99;box-shadow:0 0 8px 0 rgba(0,0,0,.1)}.logo[data-v-2ab9f78f]{height:100%;padding:8px 0;display:flex;align-items:center;justify-content:center}.logo img[data-v-2ab9f78f]{height:100%}.nav[data-v-2ab9f78f]{display:flex;justify-content:space-between;align-items:center;height:60px}.menu[data-v-2ab9f78f]{display:flex}.menu li[data-v-2ab9f78f]{padding:12px}.menu a[data-v-2ab9f78f]{text-decoration:none;color:#222}",""])},HG7Q:function(t,a,e){"use strict";var i=e("d7EF"),s=e.n(i),r=e("//Fk"),n=e.n(r),o=e("fQ5t"),l=(e.n(o),e("BZTh")),d=e("ybxc"),c=Object(o.createClient)();a.a={asyncData:function(t){var a=t.env;return n.a.all([c.getEntries({"sys.id":a.CTF_PERSON_ID}),c.getEntries({content_type:a.CTF_BLOG_POST_TYPE_ID,order:"-sys.createdAt"})]).then(function(t){var a=s()(t,2),e=a[0],i=a[1];return{person:e.items[0],posts:i.items}}).catch(console.error)},components:{Navigation:l.a,ArticlePreviewBig:d.a}}},PdTJ:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("article",[e("nuxt-link",{staticClass:"thumbnail-wrapper",attrs:{to:{name:"blog-slug",params:{slug:t.post.fields.slug}}}},[e("img",{staticClass:"thumbnail",attrs:{src:t.post.fields.heroImage.fields.file.url+"?fit=scale&w=350&h=196",srcset:t.post.fields.heroImage.fields.file.url+"?w=350&h=196&fit=fill 350w, "+t.post.fields.heroImage.fields.file.url+"?w=1000&h=562&fit=fill 1000w, "+t.post.fields.heroImage.fields.file.url+"?w=2000&h=1125&fit=fill 2000w",sizes:"(min-width: 1024px) 400px, 100vw"}})]),e("div",{staticClass:"article-content"},[e("time",{staticClass:"tiny date"},[t._v(t._s(new Date(t.post.fields.publishDate).toDateString()))]),e("h4",[e("nuxt-link",{staticClass:"title",attrs:{to:{name:"blog-slug",params:{slug:t.post.fields.slug}}}},[t._v(t._s(t.post.fields.title))])],1),e("p",[t._v(t._s(t.post.fields.description))]),e("div",{staticClass:"tags"},t._l(t.post.fields.tags,function(a){return e("nuxt-link",{key:a,staticClass:"tag",attrs:{to:{name:"tags-tag",params:{tag:a}}}},[t._v(t._s(a))])}),1)])],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};a.a=s},"Rhy+":function(t,a,e){"use strict";var i=function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{attrs:{role:"navigation"}},[a("div",{staticClass:"wrapper nav"},[this._m(0),a("ul",{staticClass:"menu"},[a("li",[a("nuxt-link",{attrs:{to:"/"}},[this._v("Начало")])],1),a("li",[a("nuxt-link",{attrs:{to:"/blog"}},[this._v("Всички рецепти")])],1)])])])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"logo",attrs:{href:"/"}},[a("img",{attrs:{src:"/logo.png",alt:""}})])}]};a.a=s},RxLx:function(t,a,e){var i=e("6/AW");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("bd328596",i,!1,{sourceMap:!1})},Xd32:function(t,a,e){e("+tPU"),e("zQR9"),t.exports=e("5PlU")},cnrz:function(t,a,e){var i=e("tzjQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("33a5b778",i,!1,{sourceMap:!1})},d7EF:function(t,a,e){"use strict";a.__esModule=!0;var i=r(e("us/S")),s=r(e("BO1k"));function r(t){return t&&t.__esModule?t:{default:t}}a.default=function(){return function(t,a){if(Array.isArray(t))return t;if((0,i.default)(Object(t)))return function(t,a){var e=[],i=!0,r=!1,n=void 0;try{for(var o,l=(0,s.default)(t);!(i=(o=l.next()).done)&&(e.push(o.value),!a||e.length!==a);i=!0);}catch(t){r=!0,n=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw n}}return e}(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},pgF7:function(t,a,e){var i=e("E9nm");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("9ac0a4cc",i,!1,{sourceMap:!1})},pwT3:function(t,a,e){"use strict";a.a={props:["post"]}},rGQh:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("header",{staticClass:"home header"},[e("img",{attrs:{src:t.person.fields.logo.fields.file.url,alt:""}}),e("Navigation")],1),e("section",{staticClass:"body-container wrapper"},[e("div",{staticClass:"item-list-wrapper"},[e("div",{staticClass:"item-list-container"},[e("h2",[t._v("Скоро качени")]),e("ul",{staticClass:"items-list "},t._l(t.posts,function(t,a){return e("li",{key:a,staticClass:"item"},[e("article-preview-big",{attrs:{post:t}})],1)}),0)]),e("div",{staticClass:"page-info"},[e("div",{staticClass:"page-img"},[e("img",{attrs:{src:t.person.fields.image.fields.file.url,alt:""}})]),e("p",[t._v(t._s(t.person.fields.shortBio))]),t._m(0)])])])])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{attrs:{href:"https://www.instagram.com/dreamfitrecipes/"}},[a("img",{attrs:{src:"/instagram.svg",width:"30px",alt:""}})])}]};a.a=s},tzjQ:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"article[data-v-276aba39]{display:flex;height:300px;width:100%;margin-bottom:2em;border-bottom:1px solid #ddd;padding-bottom:1em}.thumbnail[data-v-276aba39]{margin-bottom:.5em;margin-right:.5em;display:block;height:100%;width:100%;object-fit:cover;border-radius:4px}.thumbnail-wrapper[data-v-276aba39]{flex-basis:40%;display:block}.article-content[data-v-276aba39]{flex-basis:60%;padding:16px}.title[data-v-276aba39]{text-decoration:none;font-size:28px;color:#373f49}time[data-v-276aba39]{font-size:14px;margin-bottom:.5em}.tags[data-v-276aba39]{padding:1em 0;margin-bottom:2em}.tag[data-v-276aba39]:link,.tag[data-v-276aba39]:visited{color:#a0a0a0;text-decoration:none;display:inline-block;padding:4px 6px;line-height:1;border-radius:3px;border:1px solid #a0a0a0;margin-right:.5em}.tag[data-v-276aba39]{margin-bottom:.5em;font-size:14px}.tag[data-v-276aba39]:active,.tag[data-v-276aba39]:focus,.tag[data-v-276aba39]:hover{color:#606060;border-color:#606060}@media(max-width:640px){article[data-v-276aba39]{flex-wrap:wrap;height:auto;margin-bottom:1em;padding-bottom:0}.thumbnail-wrapper[data-v-276aba39]{flex-basis:100%}.article-content[data-v-276aba39]{flex-basis:100%;padding:0}.tags[data-v-276aba39]{margin-bottom:.5em}}",""])},"us/S":function(t,a,e){t.exports={default:e("Xd32"),__esModule:!0}},ybxc:function(t,a,e){"use strict";var i=e("pwT3"),s=e("PdTJ"),r=!1;var n=function(t){r||e("cnrz")},o=e("VU/8")(i.a,s.a,!1,n,"data-v-276aba39",null);o.options.__file="components/article-preview-big.vue",a.a=o.exports}});