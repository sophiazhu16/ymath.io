exports.ids = [3];
exports.modules = {

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2e056a62", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_course_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_course_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_course_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_course_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_course_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".katex-html{display:none}.vs-sidebar-content{background-color:transparent!important;background-image:url(/backsplash.jpg);background-size:auto 60%}.vs-sidebar,.vs-sidebar__footer{background:rgba(var(--vs-background),1)}.vs-sidebar__footer{border-bottom-right-radius:30px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/_course.vue?vue&type=template&id=dd2abda2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin-top":"6em","padding":"2em 1em"}},[_c('ClientOnly',[_c('vs-sidebar',{attrs:{"background":"primary","textWhite":"","open":""},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('h1',[_vm._v(_vm._s(_vm.title))])]},proxy:true},{key:"logo",fn:function(){return [_c('img',{staticStyle:{"border-radius":"5px"},attrs:{"src":"/favicon.png"}})]},proxy:true},{key:"footer",fn:function(){return [_c('vs-row',{attrs:{"justify":"space-between"}},[_c('vs-button',{attrs:{"icon":""}},[_c('i',{staticClass:"bx bxs-moon"})]),_vm._v(" "),_c('vs-button',{attrs:{"icon":"","badge-color":"danger","badge-position":"top-right"},scopedSlots:_vm._u([{key:"badge",fn:function(){return [_vm._v("\n                28\n              ")]},proxy:true}])},[_c('i',{staticClass:"bx bx-bell"})])],1)]},proxy:true}]),model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_vm._v(" "),_vm._v(" "),_c('vs-sidebar-item',{attrs:{"id":("/courses/" + (_vm.params.course)),"to":("/courses/" + (_vm.params.course))},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bx-home"})]},proxy:true}])},[_vm._v("\n          Home\n        ")]),_vm._v(" "),_vm._l((_vm.contents),function(unit,undex){return _c('vs-sidebar-group',{key:undex,scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('vs-sidebar-item',{attrs:{"active":unit.path===_vm.params.unit,"arrow":""},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{class:"bx bx-circle"})]},proxy:true}],null,true)},[_vm._v("\n              "+_vm._s(unit.unit)+"\n            ")])]},proxy:true}],null,true)},[_vm._v(" "),_vm._l((unit.children),function(lesson,lindex){return _c('vs-sidebar-item',{key:lindex,attrs:{"to":("/courses/" + (_vm.params.course) + "/" + (unit.path) + "/" + (lesson.path)),"id":("/courses/" + (_vm.params.course) + "/" + (unit.path) + "/" + (lesson.path))},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('i',{staticClass:"bx bx-circle"})]},proxy:true}],null,true)},[_vm._v("\n            "+_vm._s(lesson.title)+"\n          ")])})],2)})],2)],1),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"margin-left:20em\">","</div>",[_c('NuxtChild')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/courses/_course.vue?vue&type=template&id=dd2abda2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/_course.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _coursevue_type_script_lang_js_ = ({
  // we only want to fetch the title of the course, and also open up the directory where the course files are stored, and list those out.
  data: () => ({
    page: 1
  }),

  async asyncData({
    params,
    $content,
    error
  }) {
    const {
      title
    } = await $content(params.course + '*').only(['title']).fetch().catch(err => {
      error({
        statusCode: 404,
        message: 'Page not found'
      });
    });
    const children = await $content(params.course, {
      deep: true
    }).sortBy('index').fetch(); //const course = params.course // When calling /abc the slug will be "abc"

    return {
      title,
      params,
      children,
      active: `/courses/${params.course}/${params.unit}/${params.lesson}`
    };
  },

  computed: {
    contents() {
      let c = this.children; // array {title, path, extension}

      let f = []; // the final array

      for (const {
        title,
        path,
        unit
      } of c) {
        //console.log(title)
        let s = path.split('/');
        s.shift();
        s.shift(); //console.log(s)
        // see if s[0] is a valid 'path' attribute in any of them

        let a = f.filter(a => a.path === s[0])[0];

        if (!a) {
          f.push({
            unit,
            path: s[0],
            children: []
          });
          a = f.filter(a => a.path === s[0])[0];
        }

        a.children.push({
          title,
          path: s[1]
        });
      }

      return f;
    }

  }
});
// CONCATENATED MODULE: ./pages/courses/_course.vue?vue&type=script&lang=js&
 /* harmony default export */ var courses_coursevue_type_script_lang_js_ = (_coursevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/courses/_course.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  courses_coursevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "028e4447"
  
)

/* harmony default export */ var _course = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_course.js.map