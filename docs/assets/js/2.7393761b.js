(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  Array(104).concat([
    function(t, e, n) {
      "use strict";
      n.d(e, "d", function() {
        return i;
      }),
        n.d(e, "a", function() {
          return a;
        }),
        n.d(e, "j", function() {
          return r;
        }),
        n.d(e, "i", function() {
          return o;
        }),
        n.d(e, "f", function() {
          return l;
        }),
        n.d(e, "g", function() {
          return u;
        }),
        n.d(e, "h", function() {
          return c;
        }),
        n.d(e, "b", function() {
          return h;
        }),
        n.d(e, "e", function() {
          return p;
        }),
        n.d(e, "l", function() {
          return d;
        }),
        n.d(e, "m", function() {
          return f;
        }),
        n.d(e, "c", function() {
          return g;
        }),
        n.d(e, "k", function() {
          return v;
        });
      const i = /#.*$/,
        s = /\.(md|html)$/,
        a = /\/$/,
        r = /^(https?:|mailto:|tel:)/;
      function o(t) {
        return decodeURI(t)
          .replace(i, "")
          .replace(s, "");
      }
      function l(t) {
        return r.test(t);
      }
      function u(t) {
        return /^mailto:/.test(t);
      }
      function c(t) {
        return /^tel:/.test(t);
      }
      function h(t) {
        if (l(t)) return t;
        const e = t.match(i),
          n = e ? e[0] : "",
          s = o(t);
        return a.test(s) ? t : s + ".html" + n;
      }
      function p(t, e) {
        const n = t.hash,
          s = (function(t) {
            const e = t.match(i);
            if (e) return e[0];
          })(e);
        return (!s || n === s) && o(t.path) === o(e);
      }
      function d(t, e, n) {
        n &&
          (e = (function(t, e, n) {
            const i = t.charAt(0);
            if ("/" === i) return t;
            if ("?" === i || "#" === i) return e + t;
            const s = e.split("/");
            (n && s[s.length - 1]) || s.pop();
            const a = t.replace(/^\//, "").split("/");
            for (let t = 0; t < a.length; t++) {
              const e = a[t];
              ".." === e ? s.pop() : "." !== e && s.push(e);
            }
            "" !== s[0] && s.unshift("");
            return s.join("/");
          })(e, n));
        const i = o(e);
        for (let e = 0; e < t.length; e++)
          if (o(t[e].regularPath) === i)
            return Object.assign({}, t[e], {
              type: "page",
              path: h(t[e].path)
            });
        return (
          console.error(
            `[vuepress] No matching page found for sidebar item "${e}"`
          ),
          {}
        );
      }
      function f(t, e, n, i) {
        const { pages: s, themeConfig: a } = n,
          r = (i && a.locales && a.locales[i]) || a;
        if ("auto" === (t.frontmatter.sidebar || r.sidebar || a.sidebar))
          return (function(t) {
            const e = g(t.headers || []);
            return [
              {
                type: "group",
                collapsable: !1,
                title: t.title,
                path: null,
                children: e.map(e => ({
                  type: "auto",
                  title: e.title,
                  basePath: t.path,
                  path: t.path + "#" + e.slug,
                  children: e.children || []
                }))
              }
            ];
          })(t);
        const o = r.sidebar || a.sidebar;
        if (o) {
          const { base: t, config: n } = (function(t, e) {
            if (Array.isArray(e)) return { base: "/", config: e };
            for (const i in e)
              if (
                0 === ((n = t), /(\.html|\/)$/.test(n) ? n : n + "/").indexOf(i)
              )
                return { base: i, config: e[i] };
            var n;
            return {};
          })(e, o);
          return n
            ? n.map(e =>
                (function t(e, n, i, s = 1) {
                  if ("string" == typeof e) return d(n, e, i);
                  if (Array.isArray(e))
                    return Object.assign(d(n, e[0], i), { title: e[1] });
                  {
                    s > 3 &&
                      console.error(
                        "[vuepress] detected a too deep nested sidebar group."
                      );
                    const a = e.children || [];
                    return 0 === a.length
                      ? Object.assign(d(n, e.path, i), { title: e.title })
                      : {
                          type: "group",
                          path: e.path,
                          title: e.title,
                          sidebarDepth: e.sidebarDepth,
                          children: a.map(e => t(e, n, i, s + 1)),
                          collapsable: !1 !== e.collapsable
                        };
                  }
                })(e, s, t)
              )
            : [];
        }
        return [];
      }
      function g(t) {
        let e;
        return (
          (t = t.map(t => Object.assign({}, t))).forEach(t => {
            2 === t.level
              ? (e = t)
              : e && (e.children || (e.children = [])).push(t);
          }),
          t.filter(t => 2 === t.level)
        );
      }
      function v(t) {
        return Object.assign(t, {
          type: t.items && t.items.length ? "links" : "link"
        });
      }
    },
    ,
    function(t, e, n) {},
    function(t, e, n) {},
    function(t, e, n) {},
    function(t, e, n) {},
    function(t, e, n) {},
    function(t, e, n) {},
    function(t, e, n) {},
    function(t, e, n) {},
    function(t, e, n) {},
    function(t, e, n) {},
    function(t, e, n) {},
    function(t, e, n) {},
    function(t, e, n) {},
    ,
    function(t, e, n) {
      n(68)("match", 1, function(t, e, n) {
        return [
          function(n) {
            "use strict";
            var i = t(this),
              s = null == n ? void 0 : n[e];
            return void 0 !== s ? s.call(n, i) : new RegExp(n)[e](String(i));
          },
          n
        ];
      });
    },
    function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n(104),
        s = {
          name: "SidebarGroup",
          props: ["item", "open", "collapsable", "depth"],
          components: { DropdownTransition: n(122).a },
          beforeCreate: function() {
            this.$options.components.SidebarLinks = n(121).default;
          },
          methods: { isActive: i.e }
        },
        a = (n(136), n(17)),
        r = Object(a.a)(
          s,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              {
                staticClass: "sidebar-group",
                class: [
                  { collapsable: t.collapsable, "is-sub-group": 0 !== t.depth },
                  "depth-" + t.depth
                ]
              },
              [
                t.item.path
                  ? n(
                      "router-link",
                      {
                        staticClass: "sidebar-heading clickable",
                        class: {
                          open: t.open,
                          active: t.isActive(t.$route, t.item.path)
                        },
                        attrs: { to: t.item.path },
                        nativeOn: {
                          click: function(e) {
                            return t.$emit("toggle");
                          }
                        }
                      },
                      [
                        n("span", [t._v(t._s(t.item.title))]),
                        t._v(" "),
                        t.collapsable
                          ? n("span", {
                              staticClass: "arrow",
                              class: t.open ? "down" : "right"
                            })
                          : t._e()
                      ]
                    )
                  : n(
                      "p",
                      {
                        staticClass: "sidebar-heading",
                        class: { open: t.open },
                        on: {
                          click: function(e) {
                            return t.$emit("toggle");
                          }
                        }
                      },
                      [
                        n("span", [t._v(t._s(t.item.title))]),
                        t._v(" "),
                        t.collapsable
                          ? n("span", {
                              staticClass: "arrow",
                              class: t.open ? "down" : "right"
                            })
                          : t._e()
                      ]
                    ),
                t._v(" "),
                n(
                  "DropdownTransition",
                  [
                    t.open || !t.collapsable
                      ? n("SidebarLinks", {
                          staticClass: "sidebar-group-items",
                          attrs: {
                            items: t.item.children,
                            sidebarDepth: t.item.sidebarDepth,
                            depth: t.depth + 1
                          }
                        })
                      : t._e()
                  ],
                  1
                )
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      r.options.__file = "SidebarGroup.vue";
      var o = r.exports;
      function l(t, e, n, i) {
        return t(
          "router-link",
          {
            props: { to: e, activeClass: "", exactActiveClass: "" },
            class: { active: i, "sidebar-link": !0 }
          },
          n
        );
      }
      function u(t, e, n, s, a) {
        var r =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        return !e || r > a
          ? null
          : t(
              "ul",
              { class: "sidebar-sub-headers" },
              e.map(function(e) {
                var o = Object(i.e)(s, n + "#" + e.slug);
                return t("li", { class: "sidebar-sub-header" }, [
                  l(t, n + "#" + e.slug, e.title, o),
                  u(t, e.children, n, s, a, r + 1)
                ]);
              })
            );
      }
      var c = {
          functional: !0,
          props: ["item", "sidebarDepth"],
          render: function(t, e) {
            var n = e.parent,
              s = n.$page,
              a = (n.$site, n.$route),
              r = n.$themeConfig,
              o = n.$themeLocaleConfig,
              c = e.props,
              h = c.item,
              p = c.sidebarDepth,
              d = Object(i.e)(a, h.path),
              f =
                "auto" === h.type
                  ? d ||
                    h.children.some(function(t) {
                      return Object(i.e)(a, h.basePath + "#" + t.slug);
                    })
                  : d,
              g = l(t, h.path, h.title || h.path, f),
              v =
                s.frontmatter.sidebarDepth ||
                p ||
                o.sidebarDepth ||
                r.sidebarDepth,
              m = null == v ? 1 : v,
              b = o.displayAllHeaders || r.displayAllHeaders;
            return "auto" === h.type
              ? [g, u(t, h.children, h.basePath, a, m)]
              : (f || b) && h.headers && !i.d.test(h.path)
              ? [g, u(t, Object(i.c)(h.headers), h.path, a, m)]
              : g;
          }
        },
        h = (n(137), Object(a.a)(c, void 0, void 0, !1, null, null, null));
      h.options.__file = "SidebarLink.vue";
      var p = {
          name: "SidebarLinks",
          components: { SidebarGroup: o, SidebarLink: h.exports },
          props: ["items", "depth", "sidebarDepth"],
          data: function() {
            return { openGroupIndex: 0 };
          },
          created: function() {
            this.refreshIndex();
          },
          watch: {
            $route: function() {
              this.refreshIndex();
            }
          },
          methods: {
            refreshIndex: function() {
              var t = (function(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var s = e[n];
                  if (
                    "group" === s.type &&
                    s.children.some(function(e) {
                      return "page" === e.type && Object(i.e)(t, e.path);
                    })
                  )
                    return n;
                }
                return -1;
              })(this.$route, this.items);
              t > -1 && (this.openGroupIndex = t);
            },
            toggleGroup: function(t) {
              this.openGroupIndex = t === this.openGroupIndex ? -1 : t;
            },
            isActive: function(t) {
              return Object(i.e)(this.$route, t.regularPath);
            }
          }
        },
        d = Object(a.a)(
          p,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.items.length
              ? n(
                  "ul",
                  { staticClass: "sidebar-links" },
                  t._l(t.items, function(e, i) {
                    return n(
                      "li",
                      { key: i },
                      [
                        "group" === e.type
                          ? n("SidebarGroup", {
                              attrs: {
                                item: e,
                                open: i === t.openGroupIndex,
                                collapsable: e.collapsable || e.collapsible,
                                depth: t.depth
                              },
                              on: {
                                toggle: function(e) {
                                  return t.toggleGroup(i);
                                }
                              }
                            })
                          : n("SidebarLink", {
                              attrs: { sidebarDepth: t.sidebarDepth, item: e }
                            })
                      ],
                      1
                    );
                  }),
                  0
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      d.options.__file = "SidebarLinks.vue";
      e.default = d.exports;
    },
    function(t, e, n) {
      "use strict";
      var i = {
          name: "DropdownTransition",
          methods: {
            setHeight: function(t) {
              t.style.height = t.scrollHeight + "px";
            },
            unsetHeight: function(t) {
              t.style.height = "";
            }
          }
        },
        s = (n(131), n(17)),
        a = Object(s.a)(
          i,
          function() {
            var t = this.$createElement;
            return (this._self._c || t)(
              "transition",
              {
                attrs: { name: "dropdown" },
                on: {
                  enter: this.setHeight,
                  "after-enter": this.unsetHeight,
                  "before-leave": this.setHeight
                }
              },
              [this._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      a.options.__file = "DropdownTransition.vue";
      e.a = a.exports;
    },
    ,
    function(t, e, n) {
      "use strict";
      n(125)("link", function(t) {
        return function(e) {
          return t(this, "a", "href", e);
        };
      });
    },
    function(t, e, n) {
      var i = n(4),
        s = n(5),
        a = n(13),
        r = /"/g,
        o = function(t, e, n, i) {
          var s = String(a(t)),
            o = "<" + e;
          return (
            "" !== n &&
              (o += " " + n + '="' + String(i).replace(r, "&quot;") + '"'),
            o + ">" + s + "</" + e + ">"
          );
        };
      t.exports = function(t, e) {
        var n = {};
        (n[t] = e(o)),
          i(
            i.P +
              i.F *
                s(function() {
                  var e = ""[t]('"');
                  return e !== e.toLowerCase() || e.split('"').length > 3;
                }),
            "String",
            n
          );
      };
    },
    function(t, e, n) {
      "use strict";
      var i = n(106);
      n.n(i).a;
    },
    function(t, e, n) {
      "use strict";
      var i = n(107);
      n.n(i).a;
    },
    function(t, e, n) {
      "use strict";
      var i = n(108);
      n.n(i).a;
    },
    function(t, e, n) {
      var i = n(1),
        s = n(67),
        a = n(6).f,
        r = n(66).f,
        o = n(65),
        l = n(130),
        u = i.RegExp,
        c = u,
        h = u.prototype,
        p = /a/g,
        d = /a/g,
        f = new u(p) !== p;
      if (
        n(7) &&
        (!f ||
          n(5)(function() {
            return (
              (d[n(0)("match")] = !1),
              u(p) != p || u(d) == d || "/a/i" != u(p, "i")
            );
          }))
      ) {
        u = function(t, e) {
          var n = this instanceof u,
            i = o(t),
            a = void 0 === e;
          return !n && i && t.constructor === u && a
            ? t
            : s(
                f
                  ? new c(i && !a ? t.source : t, e)
                  : c(
                      (i = t instanceof u) ? t.source : t,
                      i && a ? l.call(t) : e
                    ),
                n ? this : h,
                u
              );
        };
        for (
          var g = function(t) {
              (t in u) ||
                a(u, t, {
                  configurable: !0,
                  get: function() {
                    return c[t];
                  },
                  set: function(e) {
                    c[t] = e;
                  }
                });
            },
            v = r(c),
            m = 0;
          v.length > m;

        )
          g(v[m++]);
        (h.constructor = u), (u.prototype = h), n(10)(i, "RegExp", u);
      }
      n(41)("RegExp");
    },
    function(t, e, n) {
      "use strict";
      var i = n(3);
      t.exports = function() {
        var t = i(this),
          e = "";
        return (
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.unicode && (e += "u"),
          t.sticky && (e += "y"),
          e
        );
      };
    },
    function(t, e, n) {
      "use strict";
      var i = n(109);
      n.n(i).a;
    },
    function(t, e, n) {
      "use strict";
      var i = n(110);
      n.n(i).a;
    },
    function(t, e, n) {
      "use strict";
      var i = n(111);
      n.n(i).a;
    },
    function(t, e, n) {
      "use strict";
      var i = n(112);
      n.n(i).a;
    },
    function(t, e, n) {
      "use strict";
      var i = n(113);
      n.n(i).a;
    },
    function(t, e, n) {
      "use strict";
      var i = n(114);
      n.n(i).a;
    },
    function(t, e, n) {
      "use strict";
      var i = n(115);
      n.n(i).a;
    },
    function(t, e, n) {
      "use strict";
      var i = n(116);
      n.n(i).a;
    },
    function(t, e, n) {
      "use strict";
      var i = n(117);
      n.n(i).a;
    },
    function(t, e, n) {
      "use strict";
      var i = n(118);
      n.n(i).a;
    },
    ,
    function(t, e, n) {
      "use strict";
      n.r(e);
      n(18), n(40), n(124);
      var i = n(104),
        s = {
          props: { item: { required: !0 } },
          computed: {
            link: function() {
              return Object(i.b)(this.item.link);
            },
            exact: function() {
              var t = this;
              return this.$site.locales
                ? Object.keys(this.$site.locales).some(function(e) {
                    return e === t.link;
                  })
                : "/" === this.link;
            }
          },
          methods: { isExternal: i.f, isMailto: i.g, isTel: i.h }
        },
        a = n(17),
        r = Object(a.a)(
          s,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.isExternal(t.link)
              ? n(
                  "a",
                  {
                    staticClass: "nav-link external",
                    attrs: {
                      href: t.link,
                      target:
                        t.isMailto(t.link) || t.isTel(t.link) ? null : "_blank",
                      rel:
                        t.isMailto(t.link) || t.isTel(t.link)
                          ? null
                          : "noopener noreferrer"
                    }
                  },
                  [
                    t._v("\n  " + t._s(t.item.text) + "\n  "),
                    n("OutboundLink")
                  ],
                  1
                )
              : n(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { to: t.link, exact: t.exact }
                  },
                  [t._v(t._s(t.item.text))]
                );
          },
          [],
          !1,
          null,
          null,
          null
        );
      r.options.__file = "NavLink.vue";
      var o = r.exports,
        l = {
          components: { NavLink: o },
          computed: {
            data: function() {
              return this.$page.frontmatter;
            },
            actionLink: function() {
              return { link: this.data.actionLink, text: this.data.actionText };
            }
          }
        },
        u =
          (n(126),
          Object(a.a)(
            l,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "main",
                {
                  staticClass: "home",
                  attrs: { "aria-labelledby": "main-title" }
                },
                [
                  n("header", { staticClass: "hero" }, [
                    t.data.heroImage
                      ? n("img", {
                          attrs: {
                            src: t.$withBase(t.data.heroImage),
                            alt: "hero"
                          }
                        })
                      : t._e(),
                    t._v(" "),
                    n("h1", { attrs: { id: "main-title" } }, [
                      t._v(t._s(t.data.heroText || t.$title || "Hello"))
                    ]),
                    t._v(" "),
                    n("p", { staticClass: "description" }, [
                      t._v(
                        "\n      " +
                          t._s(
                            t.data.tagline ||
                              t.$description ||
                              "Welcome to your VuePress site"
                          ) +
                          "\n    "
                      )
                    ]),
                    t._v(" "),
                    t.data.actionText && t.data.actionLink
                      ? n(
                          "p",
                          { staticClass: "action" },
                          [
                            n("NavLink", {
                              staticClass: "action-button",
                              attrs: { item: t.actionLink }
                            })
                          ],
                          1
                        )
                      : t._e()
                  ]),
                  t._v(" "),
                  t.data.features && t.data.features.length
                    ? n(
                        "div",
                        { staticClass: "features" },
                        t._l(t.data.features, function(e, i) {
                          return n("div", { key: i, staticClass: "feature" }, [
                            n("h2", [t._v(t._s(e.title))]),
                            t._v(" "),
                            n("p", [t._v(t._s(e.details))])
                          ]);
                        }),
                        0
                      )
                    : t._e(),
                  t._v(" "),
                  n("Content", { staticClass: "custom" }),
                  t._v(" "),
                  t.data.footer
                    ? n("div", { staticClass: "footer" }, [
                        t._v("\n    " + t._s(t.data.footer) + "\n  ")
                      ])
                    : t._e()
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ));
      u.options.__file = "Home.vue";
      var c = u.exports,
        h =
          (n(127),
          Object(a.a)(
            {},
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                {
                  staticClass: "sidebar-button",
                  on: {
                    click: function(e) {
                      return t.$emit("toggle-sidebar");
                    }
                  }
                },
                [
                  n(
                    "svg",
                    {
                      staticClass: "icon",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-hidden": "true",
                        role: "img",
                        viewBox: "0 0 448 512"
                      }
                    },
                    [
                      n("path", {
                        attrs: {
                          fill: "currentColor",
                          d:
                            "M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
                        }
                      })
                    ]
                  )
                ]
              );
            },
            [],
            !1,
            null,
            null,
            null
          ));
      h.options.__file = "SidebarButton.vue";
      var p = h.exports,
        d =
          (n(120),
          n(39),
          {
            data: function() {
              return { query: "", focused: !1, focusIndex: 0 };
            },
            computed: {
              showSuggestions: function() {
                return (
                  this.focused && this.suggestions && this.suggestions.length
                );
              },
              suggestions: function() {
                var t = this.query.trim().toLowerCase();
                if (t) {
                  for (
                    var e = this.$site.pages,
                      n = this.$localePath,
                      i = function(e) {
                        return e.title && e.title.toLowerCase().indexOf(t) > -1;
                      },
                      s = [],
                      a = 0;
                    a < e.length && !(s.length >= 5);
                    a++
                  ) {
                    var r = e[a];
                    if (this.getPageLocalePath(r) === n && this.isSearchable(r))
                      if (i(r)) s.push(r);
                      else if (r.headers)
                        for (
                          var o = 0;
                          o < r.headers.length && !(s.length >= 5);
                          o++
                        ) {
                          var l = r.headers[o];
                          i(l) &&
                            s.push(
                              Object.assign({}, r, {
                                path: r.path + "#" + l.slug,
                                header: l
                              })
                            );
                        }
                  }
                  return s;
                }
              },
              alignRight: function() {
                return (
                  (this.$site.themeConfig.nav || []).length +
                    (this.$site.repo ? 1 : 0) <=
                  2
                );
              }
            },
            methods: {
              getPageLocalePath: function(t) {
                for (var e in this.$site.locales || {})
                  if ("/" !== e && 0 === t.path.indexOf(e)) return e;
                return "/";
              },
              isSearchable: function(t) {
                var e = null;
                return (
                  null === e ||
                  (e = Array.isArray(e) ? e : new Array(e)).filter(function(e) {
                    return t.path.match(e);
                  }).length > 0
                );
              },
              onUp: function() {
                this.showSuggestions &&
                  (this.focusIndex > 0
                    ? this.focusIndex--
                    : (this.focusIndex = this.suggestions.length - 1));
              },
              onDown: function() {
                this.showSuggestions &&
                  (this.focusIndex < this.suggestions.length - 1
                    ? this.focusIndex++
                    : (this.focusIndex = 0));
              },
              go: function(t) {
                this.showSuggestions &&
                  (this.$router.push(this.suggestions[t].path),
                  (this.query = ""),
                  (this.focusIndex = 0));
              },
              focus: function(t) {
                this.focusIndex = t;
              },
              unfocus: function() {
                this.focusIndex = -1;
              }
            }
          }),
        f =
          (n(128),
          Object(a.a)(
            d,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", { staticClass: "search-box" }, [
                n("input", {
                  class: { focused: t.focused },
                  attrs: {
                    "aria-label": "Search",
                    autocomplete: "off",
                    spellcheck: "false"
                  },
                  domProps: { value: t.query },
                  on: {
                    input: function(e) {
                      t.query = e.target.value;
                    },
                    focus: function(e) {
                      t.focused = !0;
                    },
                    blur: function(e) {
                      t.focused = !1;
                    },
                    keyup: [
                      function(e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "enter", 13, e.key, "Enter")
                          ? null
                          : t.go(t.focusIndex);
                      },
                      function(e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"])
                          ? null
                          : t.onUp(e);
                      },
                      function(e) {
                        return !e.type.indexOf("key") &&
                          t._k(e.keyCode, "down", 40, e.key, [
                            "Down",
                            "ArrowDown"
                          ])
                          ? null
                          : t.onDown(e);
                      }
                    ]
                  }
                }),
                t._v(" "),
                t.showSuggestions
                  ? n(
                      "ul",
                      {
                        staticClass: "suggestions",
                        class: { "align-right": t.alignRight },
                        on: { mouseleave: t.unfocus }
                      },
                      t._l(t.suggestions, function(e, i) {
                        return n(
                          "li",
                          {
                            staticClass: "suggestion",
                            class: { focused: i === t.focusIndex },
                            on: {
                              mousedown: function(e) {
                                return t.go(i);
                              },
                              mouseenter: function(e) {
                                return t.focus(i);
                              }
                            }
                          },
                          [
                            n(
                              "a",
                              {
                                attrs: { href: e.path },
                                on: {
                                  click: function(t) {
                                    t.preventDefault();
                                  }
                                }
                              },
                              [
                                n("span", { staticClass: "page-title" }, [
                                  t._v(t._s(e.title || e.path))
                                ]),
                                t._v(" "),
                                e.header
                                  ? n("span", { staticClass: "header" }, [
                                      t._v("> " + t._s(e.header.title))
                                    ])
                                  : t._e()
                              ]
                            )
                          ]
                        );
                      }),
                      0
                    )
                  : t._e()
              ]);
            },
            [],
            !1,
            null,
            null,
            null
          ));
      f.options.__file = "SearchBox.vue";
      var g = f.exports,
        v = (n(129), n(25)),
        m =
          (n(64),
          {
            components: { NavLink: o, DropdownTransition: n(122).a },
            data: function() {
              return { open: !1 };
            },
            props: { item: { required: !0 } },
            methods: {
              toggle: function() {
                this.open = !this.open;
              }
            }
          }),
        b =
          (n(132),
          Object(a.a)(
            m,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "dropdown-wrapper", class: { open: t.open } },
                [
                  n(
                    "a",
                    { staticClass: "dropdown-title", on: { click: t.toggle } },
                    [
                      n("span", { staticClass: "title" }, [
                        t._v(t._s(t.item.text))
                      ]),
                      t._v(" "),
                      n("span", {
                        staticClass: "arrow",
                        class: t.open ? "down" : "right"
                      })
                    ]
                  ),
                  t._v(" "),
                  n("DropdownTransition", [
                    n(
                      "ul",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.open,
                            expression: "open"
                          }
                        ],
                        staticClass: "nav-dropdown"
                      },
                      t._l(t.item.items, function(e, i) {
                        return n(
                          "li",
                          { key: e.link || i, staticClass: "dropdown-item" },
                          [
                            "links" === e.type
                              ? n("h4", [t._v(t._s(e.text))])
                              : t._e(),
                            t._v(" "),
                            "links" === e.type
                              ? n(
                                  "ul",
                                  { staticClass: "dropdown-subitem-wrapper" },
                                  t._l(e.items, function(t) {
                                    return n(
                                      "li",
                                      {
                                        key: t.link,
                                        staticClass: "dropdown-subitem"
                                      },
                                      [n("NavLink", { attrs: { item: t } })],
                                      1
                                    );
                                  }),
                                  0
                                )
                              : n("NavLink", { attrs: { item: e } })
                          ],
                          1
                        );
                      }),
                      0
                    )
                  ])
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ));
      b.options.__file = "DropdownLink.vue";
      var _ = {
          components: { NavLink: o, DropdownLink: b.exports },
          computed: {
            userNav: function() {
              return (
                this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
              );
            },
            nav: function() {
              var t = this,
                e = this.$site.locales;
              if (e && Object.keys(e).length > 1) {
                var n = this.$page.path,
                  i = this.$router.options.routes,
                  s = this.$site.themeConfig.locales || {},
                  a = {
                    text: this.$themeLocaleConfig.selectText || "Languages",
                    items: Object.keys(e).map(function(a) {
                      var r,
                        o = e[a],
                        l = (s[a] && s[a].label) || o.lang;
                      return (
                        o.lang === t.$lang
                          ? (r = n)
                          : ((r = n.replace(t.$localeConfig.path, a)),
                            i.some(function(t) {
                              return t.path === r;
                            }) || (r = a)),
                        { text: l, link: r }
                      );
                    })
                  };
                return Object(v.a)(this.userNav).concat([a]);
              }
              return this.userNav;
            },
            userLinks: function() {
              return (this.nav || []).map(function(t) {
                return Object.assign(Object(i.k)(t), {
                  items: (t.items || []).map(i.k)
                });
              });
            },
            repoLink: function() {
              var t = this.$site.themeConfig.repo;
              if (t)
                return /^https?:/.test(t) ? t : "https://github.com/".concat(t);
            },
            repoLabel: function() {
              if (this.repoLink) {
                if (this.$site.themeConfig.repoLabel)
                  return this.$site.themeConfig.repoLabel;
                for (
                  var t = this.repoLink.match(/^https?:\/\/[^\/]+/)[0],
                    e = ["GitHub", "GitLab", "Bitbucket"],
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  var i = e[n];
                  if (new RegExp(i, "i").test(t)) return i;
                }
                return "Source";
              }
            }
          }
        },
        k =
          (n(133),
          Object(a.a)(
            _,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return t.userLinks.length || t.repoLink
                ? n(
                    "nav",
                    { staticClass: "nav-links" },
                    [
                      t._l(t.userLinks, function(t) {
                        return n(
                          "div",
                          { key: t.link, staticClass: "nav-item" },
                          [
                            "links" === t.type
                              ? n("DropdownLink", { attrs: { item: t } })
                              : n("NavLink", { attrs: { item: t } })
                          ],
                          1
                        );
                      }),
                      t._v(" "),
                      t.repoLink
                        ? n(
                            "a",
                            {
                              staticClass: "repo-link",
                              attrs: {
                                href: t.repoLink,
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }
                            },
                            [
                              t._v("\n    " + t._s(t.repoLabel) + "\n    "),
                              n("OutboundLink")
                            ],
                            1
                          )
                        : t._e()
                    ],
                    2
                  )
                : t._e();
            },
            [],
            !1,
            null,
            null,
            null
          ));
      k.options.__file = "NavLinks.vue";
      var x = k.exports;
      function $(t, e) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)[e];
      }
      var C = {
          components: {
            SidebarButton: p,
            NavLinks: x,
            SearchBox: g,
            AlgoliaSearchBox: {}
          },
          data: function() {
            return { linksWrapMaxWidth: null };
          },
          mounted: function() {
            var t = this,
              e =
                parseInt($(this.$el, "paddingLeft")) +
                parseInt($(this.$el, "paddingRight")),
              n = function() {
                document.documentElement.clientWidth < 719
                  ? (t.linksWrapMaxWidth = null)
                  : (t.linksWrapMaxWidth =
                      t.$el.offsetWidth -
                      e -
                      ((t.$refs.siteName && t.$refs.siteName.offsetWidth) ||
                        0));
              };
            n(), window.addEventListener("resize", n, !1);
          },
          computed: {
            algolia: function() {
              return (
                this.$themeLocaleConfig.algolia ||
                this.$site.themeConfig.algolia ||
                {}
              );
            },
            isAlgoliaSearch: function() {
              return (
                this.algolia && this.algolia.apiKey && this.algolia.indexName
              );
            }
          }
        },
        L =
          (n(134),
          Object(a.a)(
            C,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "header",
                { staticClass: "navbar" },
                [
                  n("SidebarButton", {
                    on: {
                      "toggle-sidebar": function(e) {
                        return t.$emit("toggle-sidebar");
                      }
                    }
                  }),
                  t._v(" "),
                  n(
                    "router-link",
                    { staticClass: "home-link", attrs: { to: t.$localePath } },
                    [
                      t.$site.themeConfig.logo
                        ? n("img", {
                            staticClass: "logo",
                            attrs: {
                              src: t.$withBase(t.$site.themeConfig.logo),
                              alt: t.$siteTitle
                            }
                          })
                        : t._e(),
                      t._v(" "),
                      t.$siteTitle
                        ? n(
                            "span",
                            {
                              ref: "siteName",
                              staticClass: "site-name",
                              class: { "can-hide": t.$site.themeConfig.logo }
                            },
                            [t._v(t._s(t.$siteTitle))]
                          )
                        : t._e()
                    ]
                  ),
                  t._v(" "),
                  n(
                    "div",
                    {
                      staticClass: "links",
                      style: t.linksWrapMaxWidth
                        ? { "max-width": t.linksWrapMaxWidth + "px" }
                        : {}
                    },
                    [
                      t.isAlgoliaSearch
                        ? n("AlgoliaSearchBox", {
                            attrs: { options: t.algolia }
                          })
                        : !1 !== t.$site.themeConfig.search
                        ? n("SearchBox")
                        : t._e(),
                      t._v(" "),
                      n("NavLinks", { staticClass: "can-hide" })
                    ],
                    1
                  )
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ));
      L.options.__file = "Navbar.vue";
      var w = L.exports;
      function y(t, e, n) {
        var i = [];
        !(function t(e, n) {
          for (var i = 0, s = e.length; i < s; i++)
            "group" === e[i].type ? t(e[i].children || [], n) : n.push(e[i]);
        })(e, i);
        for (var s = 0; s < i.length; s++) {
          var a = i[s];
          if ("page" === a.type && a.path === decodeURIComponent(t.path))
            return i[s + n];
        }
      }
      var S = {
          props: ["sidebarItems"],
          computed: {
            lastUpdated: function() {
              return this.$page.lastUpdated;
            },
            lastUpdatedText: function() {
              return "string" == typeof this.$themeLocaleConfig.lastUpdated
                ? this.$themeLocaleConfig.lastUpdated
                : "string" == typeof this.$site.themeConfig.lastUpdated
                ? this.$site.themeConfig.lastUpdated
                : "Last Updated";
            },
            prev: function() {
              var t,
                e,
                n = this.$page.frontmatter.prev;
              return !1 === n
                ? void 0
                : n
                ? Object(i.l)(this.$site.pages, n, this.$route.path)
                : ((t = this.$page), (e = this.sidebarItems), y(t, e, -1));
            },
            next: function() {
              var t,
                e,
                n = this.$page.frontmatter.next;
              return !1 === n
                ? void 0
                : n
                ? Object(i.l)(this.$site.pages, n, this.$route.path)
                : ((t = this.$page), (e = this.sidebarItems), y(t, e, 1));
            },
            editLink: function() {
              if (!1 !== this.$page.frontmatter.editLink) {
                var t = this.$site.themeConfig,
                  e = t.repo,
                  n = t.editLinks,
                  s = t.docsDir,
                  a = void 0 === s ? "" : s,
                  r = t.docsBranch,
                  o = void 0 === r ? "master" : r,
                  l = t.docsRepo,
                  u = void 0 === l ? e : l,
                  c = Object(i.i)(this.$page.path);
                return (
                  i.a.test(c) ? (c += "README.md") : (c += ".md"),
                  u && n ? this.createEditLink(e, u, a, o, c) : void 0
                );
              }
            },
            editLinkText: function() {
              return (
                this.$themeLocaleConfig.editLinkText ||
                this.$site.themeConfig.editLinkText ||
                "Edit this page"
              );
            }
          },
          methods: {
            createEditLink: function(t, e, n, s, a) {
              return /bitbucket.org/.test(t)
                ? (i.j.test(e) ? e : t).replace(i.a, "") +
                    "/src" +
                    "/".concat(s) +
                    (n ? "/" + n.replace(i.a, "") : "") +
                    a +
                    "?mode=edit&spa=0&at=".concat(
                      s,
                      "&fileviewer=file-view-default"
                    )
                : (i.j.test(e) ? e : "https://github.com/".concat(e)).replace(
                    i.a,
                    ""
                  ) +
                    "/edit/".concat(s) +
                    (n ? "/" + n.replace(i.a, "") : "") +
                    a;
            }
          }
        },
        O =
          (n(135),
          Object(a.a)(
            S,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "main",
                { staticClass: "page" },
                [
                  t._t("top"),
                  t._v(" "),
                  n("Content"),
                  t._v(" "),
                  n("footer", { staticClass: "page-edit" }, [
                    t.editLink
                      ? n(
                          "div",
                          { staticClass: "edit-link" },
                          [
                            n(
                              "a",
                              {
                                attrs: {
                                  href: t.editLink,
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                }
                              },
                              [t._v(t._s(t.editLinkText))]
                            ),
                            t._v(" "),
                            n("OutboundLink")
                          ],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    t.lastUpdated
                      ? n("div", { staticClass: "last-updated" }, [
                          n("span", { staticClass: "prefix" }, [
                            t._v(t._s(t.lastUpdatedText) + ": ")
                          ]),
                          t._v(" "),
                          n("span", { staticClass: "time" }, [
                            t._v(t._s(t.lastUpdated))
                          ])
                        ])
                      : t._e()
                  ]),
                  t._v(" "),
                  t.prev || t.next
                    ? n("div", { staticClass: "page-nav" }, [
                        n("p", { staticClass: "inner" }, [
                          t.prev
                            ? n(
                                "span",
                                { staticClass: "prev" },
                                [
                                  t._v("\n        ←\n        "),
                                  t.prev
                                    ? n(
                                        "router-link",
                                        {
                                          staticClass: "prev",
                                          attrs: { to: t.prev.path }
                                        },
                                        [
                                          t._v(
                                            "\n          " +
                                              t._s(
                                                t.prev.title || t.prev.path
                                              ) +
                                              "\n        "
                                          )
                                        ]
                                      )
                                    : t._e()
                                ],
                                1
                              )
                            : t._e(),
                          t._v(" "),
                          t.next
                            ? n(
                                "span",
                                { staticClass: "next" },
                                [
                                  t.next
                                    ? n(
                                        "router-link",
                                        { attrs: { to: t.next.path } },
                                        [
                                          t._v(
                                            "\n          " +
                                              t._s(
                                                t.next.title || t.next.path
                                              ) +
                                              "\n        "
                                          )
                                        ]
                                      )
                                    : t._e(),
                                  t._v("\n        →\n      ")
                                ],
                                1
                              )
                            : t._e()
                        ])
                      ])
                    : t._e(),
                  t._v(" "),
                  t._t("bottom")
                ],
                2
              );
            },
            [],
            !1,
            null,
            null,
            null
          ));
      O.options.__file = "Page.vue";
      var j = O.exports,
        I = {
          name: "Sidebar",
          components: { SidebarLinks: n(121).default, NavLinks: x },
          props: ["items"]
        },
        E =
          (n(138),
          Object(a.a)(
            I,
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "aside",
                { staticClass: "sidebar" },
                [
                  e("NavLinks"),
                  this._v(" "),
                  this._t("top"),
                  this._v(" "),
                  e("SidebarLinks", { attrs: { depth: 0, items: this.items } }),
                  this._v(" "),
                  this._t("bottom")
                ],
                2
              );
            },
            [],
            !1,
            null,
            null,
            null
          ));
      E.options.__file = "Sidebar.vue";
      var T = {
          components: { Home: c, Page: j, Sidebar: E.exports, Navbar: w },
          data: function() {
            return { isSidebarOpen: !1 };
          },
          computed: {
            shouldShowNavbar: function() {
              var t = this.$site.themeConfig;
              return (
                !1 !== this.$page.frontmatter.navbar &&
                !1 !== t.navbar &&
                (this.$title ||
                  t.logo ||
                  t.repo ||
                  t.nav ||
                  this.$themeLocaleConfig.nav)
              );
            },
            shouldShowSidebar: function() {
              var t = this.$page.frontmatter;
              return !t.home && !1 !== t.sidebar && this.sidebarItems.length;
            },
            sidebarItems: function() {
              return Object(i.m)(
                this.$page,
                this.$page.regularPath,
                this.$site,
                this.$localePath
              );
            },
            pageClasses: function() {
              var t = this.$page.frontmatter.pageClass;
              return [
                {
                  "no-navbar": !this.shouldShowNavbar,
                  "sidebar-open": this.isSidebarOpen,
                  "no-sidebar": !this.shouldShowSidebar
                },
                t
              ];
            }
          },
          mounted: function() {
            var t = this;
            this.$router.afterEach(function() {
              t.isSidebarOpen = !1;
            });
          },
          methods: {
            toggleSidebar: function(t) {
              this.isSidebarOpen =
                "boolean" == typeof t ? t : !this.isSidebarOpen;
            },
            onTouchStart: function(t) {
              this.touchStart = {
                x: t.changedTouches[0].clientX,
                y: t.changedTouches[0].clientY
              };
            },
            onTouchEnd: function(t) {
              var e = t.changedTouches[0].clientX - this.touchStart.x,
                n = t.changedTouches[0].clientY - this.touchStart.y;
              Math.abs(e) > Math.abs(n) &&
                Math.abs(e) > 40 &&
                (e > 0 && this.touchStart.x <= 80
                  ? this.toggleSidebar(!0)
                  : this.toggleSidebar(!1));
            }
          }
        },
        D =
          (n(139),
          n(140),
          Object(a.a)(
            T,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                {
                  staticClass: "theme-container",
                  class: t.pageClasses,
                  on: { touchstart: t.onTouchStart, touchend: t.onTouchEnd }
                },
                [
                  t.shouldShowNavbar
                    ? n("Navbar", { on: { "toggle-sidebar": t.toggleSidebar } })
                    : t._e(),
                  t._v(" "),
                  n("div", {
                    staticClass: "sidebar-mask",
                    on: {
                      click: function(e) {
                        return t.toggleSidebar(!1);
                      }
                    }
                  }),
                  t._v(" "),
                  n(
                    "Sidebar",
                    {
                      attrs: { items: t.sidebarItems },
                      on: { "toggle-sidebar": t.toggleSidebar }
                    },
                    [
                      t._t("sidebar-top", null, { slot: "top" }),
                      t._v(" "),
                      t._t("sidebar-bottom", null, { slot: "bottom" })
                    ],
                    2
                  ),
                  t._v(" "),
                  t.$page.frontmatter.home
                    ? n("Home")
                    : n(
                        "Page",
                        { attrs: { "sidebar-items": t.sidebarItems } },
                        [
                          t._t("page-top", null, { slot: "top" }),
                          t._v(" "),
                          t._t("page-bottom", null, { slot: "bottom" })
                        ],
                        2
                      )
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ));
      D.options.__file = "Layout.vue";
      e.default = D.exports;
    }
  ])
]);
