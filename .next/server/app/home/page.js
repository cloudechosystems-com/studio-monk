(() => {
  var e = {};
  (e.id = 620),
    (e.ids = [620]),
    (e.modules = {
      846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      9121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      9294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      3033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      9428: (e) => {
        "use strict";
        e.exports = require("buffer");
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      9551: (e) => {
        "use strict";
        e.exports = require("url");
      },
      99: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => c,
            pages: () => u,
            routeModule: () => p,
            tree: () => d,
          });
        var s = r(260),
          o = r(8203),
          i = r(5155),
          n = r.n(i),
          a = r(7292),
          l = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => a[e]);
        r.d(t, l);
        let d = [
            "",
            {
              children: [
                "home",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 6851)),
                        "/Users/vikeshbk/go/src/studioMonk.io/studio-monk/src/app/home/page.tsx",
                      ],
                    },
                  ],
                },
                {
                  metadata: {
                    icon: [
                      async (e) =>
                        (await Promise.resolve().then(r.bind(r, 440))).default(
                          e
                        ),
                    ],
                    apple: [],
                    openGraph: [],
                    twitter: [],
                    manifest: void 0,
                  },
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 9772)),
                "/Users/vikeshbk/go/src/studioMonk.io/studio-monk/src/app/layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 9937, 23)),
                "next/dist/client/components/not-found-error",
              ],
              forbidden: [
                () => Promise.resolve().then(r.t.bind(r, 9116, 23)),
                "next/dist/client/components/forbidden-error",
              ],
              unauthorized: [
                () => Promise.resolve().then(r.t.bind(r, 1485, 23)),
                "next/dist/client/components/unauthorized-error",
              ],
              metadata: {
                icon: [
                  async (e) =>
                    (await Promise.resolve().then(r.bind(r, 440))).default(e),
                ],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          u = [
            "/Users/vikeshbk/go/src/studioMonk.io/studio-monk/src/app/home/page.tsx",
          ],
          c = { require: r, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: "/home/page",
              pathname: "/home",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      6319: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 3219, 23)),
          Promise.resolve().then(r.t.bind(r, 4863, 23)),
          Promise.resolve().then(r.t.bind(r, 5155, 23)),
          Promise.resolve().then(r.t.bind(r, 802, 23)),
          Promise.resolve().then(r.t.bind(r, 9350, 23)),
          Promise.resolve().then(r.t.bind(r, 8530, 23)),
          Promise.resolve().then(r.t.bind(r, 8921, 23));
      },
      3271: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 6959, 23)),
          Promise.resolve().then(r.t.bind(r, 3875, 23)),
          Promise.resolve().then(r.t.bind(r, 8903, 23)),
          Promise.resolve().then(r.t.bind(r, 7174, 23)),
          Promise.resolve().then(r.t.bind(r, 4178, 23)),
          Promise.resolve().then(r.t.bind(r, 7190, 23)),
          Promise.resolve().then(r.t.bind(r, 1365, 23));
      },
      1343: () => {},
      5767: () => {},
      4308: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 6851));
      },
      8276: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 277));
      },
      3864: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            default: function () {
              return l;
            },
            getImageProps: function () {
              return a;
            },
          });
        let s = r(5488),
          o = r(2034),
          i = r(1902),
          n = s._(r(1628));
        function a(e) {
          let { props: t } = (0, o.getImgProps)(e, {
            defaultLoader: n.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        }
        let l = i.Image;
      },
      277: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => d });
        var s = r(5512),
          o = r(8009),
          i = r(3864),
          n = r.n(i);
        function a({ title: e, thumbnailUrl: t, duration: r, author: o }) {
          return (0, s.jsxs)("div", {
            className: "rounded-lg overflow-hidden shadow-lg group relative",
            children: [
              (0, s.jsxs)("div", {
                className: "relative aspect-video",
                children: [
                  (0, s.jsx)(n(), {
                    src: t,
                    alt: e,
                    width: 1920,
                    height: 1080,
                    className: "w-full h-full object-cover",
                  }),
                  (0, s.jsx)("span", {
                    className:
                      "absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded",
                    children: r,
                  }),
                  (0, s.jsx)("button", {
                    className:
                      "absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity",
                    children: (0, s.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-12 w-12 text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: (0, s.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                      }),
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "p-4",
                children: [
                  (0, s.jsx)("h3", {
                    className: "font-semibold mb-2",
                    children: e,
                  }),
                  (0, s.jsxs)("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: ["By ", o],
                  }),
                ],
              }),
            ],
          });
        }
        let l = {
          src: "/_next/static/media/blue_tinted_image.96a8354b.png",
          height: 1024,
          width: 1792,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAUVBMVEVncbdWT3lvVn11gc5maZNGS4OYeKsmMWR9gLZEUnuXpetEQWmFicdpe719bKp5dqmRfrVsZKNZe8pfV46tsN2okbRMYaFZabI5S5WckLDGlpC5+s16AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nAXBBwKAIAwEsGupXW5BQf//UBOYjf7YNAMlWxYEdn+/e3FBSMV5rAFWuoh1+wEnqwGiiQznwgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        };
        function d() {
          let [e, t] = (0, o.useState)("");
          return (0, s.jsxs)("div", {
            className: "min-h-screen p-8",
            children: [
              (0, s.jsxs)("header", {
                className: "mb-8",
                children: [
                  (0, s.jsx)("h1", {
                    className: "text-3xl font-bold mb-4",
                    children: "Studio",
                  }),
                  (0, s.jsx)("div", {
                    className: "max-w-2xl",
                    children: (0, s.jsx)("input", {
                      type: "search",
                      placeholder: "Search for stock videos...",
                      className:
                        "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700",
                      value: e,
                      onChange: (e) => t(e.target.value),
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("main", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: [1, 2, 3, 4, 5, 6].map((e) =>
                  (0, s.jsx)(
                    a,
                    {
                      title: `Sample Video ${e}`,
                      thumbnailUrl: l,
                      duration: "0:30",
                      author: "Studio Monk",
                    },
                    e
                  )
                ),
              }),
            ],
          });
        }
      },
      6851: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        let s = (0, r(6760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"/Users/vikeshbk/go/src/studioMonk.io/studio-monk/src/app/home/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          "/Users/vikeshbk/go/src/studioMonk.io/studio-monk/src/app/home/page.tsx",
          "default"
        );
      },
      9772: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => c, metadata: () => u });
        var s = r(2740),
          o = r(2202),
          i = r.n(o),
          n = r(4988),
          a = r.n(n),
          l = r(9876);
        let d = {
          userPoolId: "your-user-pool-id",
          userPoolWebClientId: "your-client-id",
        };
        r(1135),
          l.E.configure({
            Auth: {
              Cognito: {
                userPoolId: d.userPoolId,
                userPoolClientId: d.userPoolWebClientId,
              },
            },
          });
        let u = {
          title: "StudioMonk - Stock Video Downloads",
          description: "Download high-quality stock videos for your projects",
        };
        function c({ children: e }) {
          return (0, s.jsx)("html", {
            lang: "en",
            children: (0, s.jsx)("body", {
              className: `${i().variable} ${a().variable} antialiased`,
              children: e,
            }),
          });
        }
      },
      440: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o });
        var s = r(8077);
        let o = async (e) => [
          {
            type: "image/x-icon",
            sizes: "16x16",
            url:
              (0, s.fillMetadataSegment)(".", await e.params, "favicon.ico") +
              "",
          },
        ];
      },
      1135: () => {},
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [638, 850, 77, 902], () => r(99));
  module.exports = s;
})();
