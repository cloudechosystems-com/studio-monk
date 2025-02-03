(() => {
  var e = {};
  (e.id = 994),
    (e.ids = [994]),
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
      575: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => p,
            pages: () => u,
            routeModule: () => c,
            tree: () => l,
          });
        var o = r(260),
          s = r(8203),
          i = r(5155),
          n = r.n(i),
          a = r(7292),
          d = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => a[e]);
        r.d(t, d);
        let l = [
            "",
            {
              children: [
                "upload",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 5781)),
                        "/Users/vikeshbk/go/src/studioMonk.io/studio-monk/src/app/upload/page.tsx",
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
            "/Users/vikeshbk/go/src/studioMonk.io/studio-monk/src/app/upload/page.tsx",
          ],
          p = { require: r, loadChunk: () => Promise.resolve() },
          c = new o.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: "/upload/page",
              pathname: "/upload",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
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
      9842: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5781));
      },
      7994: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 1297));
      },
      1297: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        var o = r(5512);
        function s() {
          return (0, o.jsx)("div", { className: "min-h-screen p-8" });
        }
      },
      9772: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => p, metadata: () => u });
        var o = r(2740),
          s = r(2202),
          i = r.n(s),
          n = r(4988),
          a = r.n(n),
          d = r(9876);
        let l = {
          userPoolId: "your-user-pool-id",
          userPoolWebClientId: "your-client-id",
        };
        r(1135),
          d.E.configure({
            Auth: {
              Cognito: {
                userPoolId: l.userPoolId,
                userPoolClientId: l.userPoolWebClientId,
              },
            },
          });
        let u = {
          title: "StudioMonk - Stock Video Downloads",
          description: "Download high-quality stock videos for your projects",
        };
        function p({ children: e }) {
          return (0, o.jsx)("html", {
            lang: "en",
            children: (0, o.jsx)("body", {
              className: `${i().variable} ${a().variable} antialiased`,
              children: e,
            }),
          });
        }
      },
      5781: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o });
        let o = (0, r(6760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"/Users/vikeshbk/go/src/studioMonk.io/studio-monk/src/app/upload/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          "/Users/vikeshbk/go/src/studioMonk.io/studio-monk/src/app/upload/page.tsx",
          "default"
        );
      },
      440: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        var o = r(8077);
        let s = async (e) => [
          {
            type: "image/x-icon",
            sizes: "16x16",
            url:
              (0, o.fillMetadataSegment)(".", await e.params, "favicon.ico") +
              "",
          },
        ];
      },
      1135: () => {},
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    o = t.X(0, [638, 850, 77], () => r(575));
  module.exports = o;
})();
