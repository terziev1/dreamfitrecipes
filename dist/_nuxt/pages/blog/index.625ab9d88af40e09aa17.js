webpackJsonp([3],{"2vnx":function(t,e,a){var s=a("PhG5");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("845d883c",s,!1,{sourceMap:!1})},"4yYW":function(t,e,a){"use strict";var s=a("fQ5t"),i=(a.n(s),a("BZTh")),n=a("Fb5d"),r=Object(s.createClient)();e.a={asyncData:function(t){var e=t.env;t.params;return r.getEntries({content_type:e.CTF_BLOG_POST_TYPE_ID,order:"-sys.createdAt"}).then(function(t){return{posts:t.items}})},components:{ArticlePreview:n.a,Navigation:i.a}}},BZTh:function(t,e,a){"use strict";var s=a("Rhy+"),i=!1;var n=function(t){i||a("pgF7")},r=a("VU/8")(null,s.a,!1,n,"data-v-2ab9f78f",null);r.options.__file="components/navigation.vue",e.a=r.exports},E9nm:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"nav[data-v-2ab9f78f]{width:100%;position:fixed;top:0;left:0;background:#fff;z-index:99}.nav[data-v-2ab9f78f]{display:flex;justify-content:space-between;align-items:center;height:60px}.menu[data-v-2ab9f78f]{display:flex}.menu li[data-v-2ab9f78f]{padding:12px 24px}.menu a[data-v-2ab9f78f]{text-decoration:none;color:#222}",""])},Fb5d:function(t,e,a){"use strict";var s=a("Z7V3"),i=a("oxw3"),n=!1;var r=function(t){n||a("2vnx")},o=a("VU/8")(s.a,i.a,!1,r,null,null);o.options.__file="components/article-preview.vue",e.a=o.exports},JFl0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4yYW"),i=a("Rulc"),n=a("VU/8")(s.a,i.a,!1,null,null,null);n.options.__file="pages/blog/index.vue",e.default=n.exports},PhG5:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".thumbnail{margin-bottom:1em}.title{text-decoration:none;font-size:22px;color:#373f49}.tags{padding:1em 0;margin-bottom:2em}.tag:link,.tag:visited{color:#a0a0a0;text-decoration:none;display:inline-block;padding:.33333rem .5rem;line-height:1;border-radius:2px;border:1px solid #a0a0a0;margin-right:.5em}.tag:active,.tag:focus,.tag:hover{color:#606060;border-color:#606060}",""])},"Rhy+":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{role:"navigation"}},[a("div",{staticClass:"wrapper nav"},[a("a",{attrs:{href:"/"}},[t._v("DreamFitRecipes")]),a("ul",{staticClass:"menu"},t._l(this.$router.options.routes,function(e){return/\/.*?\/.*/.test(e.path)?t._e():a("li",[a("nuxt-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.name.charAt(0).toUpperCase()+e.name.slice(1)))])],1)}))])])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},Rulc:function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("header",{staticClass:"blog header"},[e("div",{staticClass:"foreground"},[e("div",{staticClass:"page-bar wrapper"},[e("a",{staticClass:"person-name",attrs:{href:"/"}},[this._v("Dreamfitrecipes")]),e("Navigation")],1),this._m(0)])]),e("section",{staticClass:"body-container"},[e("div",{staticClass:"items-bar wrapper"},[e("h2",[this._v("All articles ("+this._s(this.posts.length)+")")])]),e("ul",{staticClass:"items-list wrapper"},this._l(this.posts,function(t){return e("li",{staticClass:"item"},[e("article-preview",{attrs:{post:t}})],1)}))])])};s._withStripped=!0;var i={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-info wrapper"},[e("h2",[this._v("Blog")])])}]};e.a=i},Z7V3:function(t,e,a){"use strict";e.a={props:["post"]}},oxw3:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("img",{staticClass:"thumbnail",attrs:{src:t.post.fields.heroImage.fields.file.url+"?fit=scale&w=350&h=196",srcset:t.post.fields.heroImage.fields.file.url+"?w=350&h=196&fit=fill 350w, "+t.post.fields.heroImage.fields.file.url+"?w=1000&h=562&fit=fill 1000w, "+t.post.fields.heroImage.fields.file.url+"?w=2000&h=1125&fit=fill 2000w",sizes:"(min-width: 1024px) 400px, 100vw"}}),a("time",{staticClass:"tiny date"},[t._v(t._s(new Date(t.post.fields.publishDate).toDateString()))]),a("h4",[a("nuxt-link",{staticClass:"title",attrs:{to:{name:"blog-slug",params:{slug:t.post.fields.slug}}}},[t._v(t._s(t.post.fields.title))])],1),a("p",[t._v(t._s(t.post.fields.description))]),a("div",{staticClass:"tags"},t._l(t.post.fields.tags,function(e){return a("nuxt-link",{key:e,staticClass:"tag",attrs:{to:{name:"tags-tag",params:{tag:e}}}},[t._v(t._s(e))])}))])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},pgF7:function(t,e,a){var s=a("E9nm");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("9ac0a4cc",s,!1,{sourceMap:!1})}});