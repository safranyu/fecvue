(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{533:function(t,a,n){"use strict";n.r(a);var e={data:function(){return{tableHead:"参数 | 说明 | 类型 | 可选值 | 默认值",tableBody:["rowCount |\t数据总条数，必需 | number | — | — ","PageSize |\t每页显示多少条数据，必需 | number | — | — ","changePageIndex |\t当点击前一页、后一页（prev，next），执行父组件的方法（获取新的列表数据），必需 | number | — | — "]}}},s=n(3),r=Object(s.a)(e,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"pagination-分页"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pagination-分页","aria-hidden":"true"}},[t._v("#")]),t._v(" Pagination 分页")]),t._v(" "),n("p",[t._v("当数据量过多时，使用分页分解数据。")]),t._v(" "),n("blockquote",[n("p",[t._v("使用方式：")]),t._v(" "),n("ol",[n("li",[t._v("在要使用的页面引入该组件  "),n("code",[t._v("import pageNation from '@/assembly/pageNation'")]),t._v("//组件的位置")]),t._v(" "),n("li",[t._v("注册组件 "),n("code",[t._v("components:{ pageNation }")])]),t._v(" "),n("li",[t._v("在你要使用该组件的位置挂载该组件 "),n("code",[t._v("<pageNation :rowCount='rowCount' :PageSize='pageInfo.pageSize' @prev='changePageIndex' @next='changePageIndex'></pageNation>")])])])]),t._v(" "),n("h3",{attrs:{id:"父组件，举个栗子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#父组件，举个栗子","aria-hidden":"true"}},[t._v("#")]),t._v(" 父组件，举个栗子")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrapper"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pageNation"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pageNation "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("rowCount"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rowCount'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("PageSize"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pageInfo.pageSize'")]),t._v(" @prev"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'changePageIndex'")]),t._v(" @next"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'changePageIndex'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pageNation"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pageNation "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/assembly/pageNation'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分页组件")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rowCount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      pageInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        pageIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        pageSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n      * 分页，改变页码执行的方法\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("changePageIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pageNation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("baseComponent-codeBox",{attrs:{title:"分页组件",description:"",onlineLink:"http://www.ruixiangvip.com/"}},[n("demo-pagination-pagination"),t._v(" "),n("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[n("pre",[n("code",[t._v('<template>\n  <div class="pagination">\n    <el-button style="margin-bottom:-5px" class="fr" type="primary" size="small">确定</el-button>\n    <el-pagination  class="fr" v-if="rowCount>0" @size-change="handleSizeChange" @current-change="handleCurrentChange"  :current-page="CurrentPage"   background\n      prev-text="&lt; 上一页"\n      next-text="下一页 &gt;"\n      layout="prev, pager,next,slot,jumper"\n      :page-count="Math.ceil(rowCount/PageSize)">\n    <span style="font-size: 13px;font-weight:initial;">共'+t._s(Math.ceil(t.rowCount/t.PageSize))+'页</span>\n    </el-pagination>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      pageIndex: ""\n    };\n  },\n  props: {\n    rowCount: {\n      type: Number\n    },\n    PageSize: {\n      type: Number\n    },\n    CurrentPage: {\n      type: Number,\n      default:1\n    }\n  },\n  components: {},\n  computed: {},\n  mounted() {},\n  methods: {\n    handleSizeChange(val) {\n      //分页上一页\n      this.pageIndex = val;\n    },\n    handleCurrentChange(val) {\n      //分页下一页\n      this.pageIndex = val;\n      this.$emit("next", this.pageIndex);\n    }\n  }\n};\n<\/script>\n<style>\n/* 分页器 */\n.fr {\n    float: right;\n}\n.pagination {\n  text-align: right;\n  overflow: hidden;\n}\n.el-pagination button,\n.el-pagination span:not([class*="suffix"]),\n.el-pager li {\n  padding: 0 10px;\n  height: 36px;\n  line-height: 36px;\n}\n.el-pagination.is-background .el-pager li {\n  min-width: 36px;\n}\n.pagination{\n  position: relative;\n}\n.pagination .pagesize{\n  position: absolute;\n      height: 40px;\n    line-height: 40px;\n    right: 177px;\n    font-size: 13px\n}\n</style>\n')])])])],1),t._v(" "),n("baseComponent-apiTable",{attrs:{title:"Attributes",tableBody:t.tableBody,tableHead:t.tableHead}})],1)},[],!1,null,null,null);a.default=r.exports}}]);