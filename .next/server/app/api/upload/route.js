(() => {
  var e = {};
  (e.id = 413),
    (e.ids = [413]),
    (e.modules = {
      846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      4870: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");
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
      2605: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            patchFetch: () => tB,
            routeModule: () => tK,
            serverHooks: () => tY,
            workAsyncStorage: () => tz,
            workUnitAsyncStorage: () => tV,
          });
        var i,
          n,
          s,
          a,
          o,
          c,
          l,
          u,
          h,
          d,
          g,
          f,
          p,
          y,
          w,
          S,
          E,
          m,
          A,
          R,
          v,
          C,
          b,
          T,
          I,
          P,
          _,
          O,
          $,
          H,
          D,
          x,
          j,
          L,
          q,
          k,
          U,
          N,
          F,
          M,
          W,
          K,
          z,
          V,
          Y = {};
        r.r(Y), r.d(Y, { POST: () => tW });
        var B = r(2706),
          X = r(8203),
          Q = r(5994);
        let G = require("@aws-sdk/client-s3"),
          J = (e) => encodeURIComponent(e).replace(/[!'()*]/g, Z),
          Z = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
          ee = async (e) => {
            let t = e?.Bucket || "";
            if (
              ("string" == typeof e.Bucket &&
                (e.Bucket = t
                  .replace(/#/g, encodeURIComponent("#"))
                  .replace(/\?/g, encodeURIComponent("?"))),
              es(t))
            ) {
              if (!0 === e.ForcePathStyle)
                throw Error(
                  "Path-style addressing cannot be used with ARN buckets"
                );
            } else
              (en(t) &&
                (-1 === t.indexOf(".") ||
                  String(e.Endpoint).startsWith("http:")) &&
                t.toLowerCase() === t &&
                !(t.length < 3)) ||
                (e.ForcePathStyle = !0);
            return (
              e.DisableMultiRegionAccessPoints &&
                ((e.disableMultiRegionAccessPoints = !0), (e.DisableMRAP = !0)),
              e
            );
          },
          et = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
          er = /(\d+\.){3}\d+/,
          ei = /\.\./,
          en = (e) => et.test(e) && !er.test(e) && !ei.test(e),
          es = (e) => {
            let [t, r, i, , , n] = e.split(":"),
              s = "arn" === t && e.split(":").length >= 6,
              a = !!(s && r && i && n);
            if (s && !a) throw Error(`Invalid ARN: ${e} was an invalid ARN.`);
            return a;
          },
          ea = (e, t, r) => {
            let i = async () => {
              let i = r[e] ?? r[t];
              return "function" == typeof i ? i() : i;
            };
            return "credentialScope" === e || "CredentialScope" === t
              ? async () => {
                  let e =
                    "function" == typeof r.credentials
                      ? await r.credentials()
                      : r.credentials;
                  return e?.credentialScope ?? e?.CredentialScope;
                }
              : "accountId" === e || "AccountId" === t
                ? async () => {
                    let e =
                      "function" == typeof r.credentials
                        ? await r.credentials()
                        : r.credentials;
                    return e?.accountId ?? e?.AccountId;
                  }
                : "endpoint" === e || "endpoint" === t
                  ? async () => {
                      let e = await i();
                      if (e && "object" == typeof e) {
                        if ("url" in e) return e.url.href;
                        if ("hostname" in e) {
                          let {
                            protocol: t,
                            hostname: r,
                            port: i,
                            path: n,
                          } = e;
                          return `${t}//${r}${i ? ":" + i : ""}${n}`;
                        }
                      }
                      return e;
                    }
                  : i;
          };
        class eo extends Error {
          constructor(e, t = !0) {
            let r;
            let i = !0;
            "boolean" == typeof t
              ? ((r = void 0), (i = t))
              : null != t &&
                "object" == typeof t &&
                ((r = t.logger), (i = t.tryNextLink ?? !0)),
              super(e),
              (this.name = "ProviderError"),
              (this.tryNextLink = i),
              Object.setPrototypeOf(this, eo.prototype),
              r?.debug?.(`@smithy/property-provider ${i ? "->" : "(!)"} ${e}`);
          }
          static from(e, t = !0) {
            return Object.assign(new this(e.message, t), e);
          }
        }
        class ec extends eo {
          constructor(e, t = !0) {
            super(e, t),
              (this.name = "CredentialsProviderError"),
              Object.setPrototypeOf(this, ec.prototype);
          }
        }
        let el =
            (...e) =>
            async () => {
              let t;
              if (0 === e.length) throw new eo("No providers in chain");
              for (let r of e)
                try {
                  return await r();
                } catch (e) {
                  if (((t = e), e?.tryNextLink)) continue;
                  throw e;
                }
              throw t;
            },
          eu = (e) => () => Promise.resolve(e),
          eh = (e, t, r) => {
            let i, n, s;
            let a = !1,
              o = async () => {
                n || (n = e());
                try {
                  (i = await n), (s = !0), (a = !1);
                } finally {
                  n = void 0;
                }
                return i;
              };
            return void 0 === t
              ? async (e) => ((!s || e?.forceRefresh) && (i = await o()), i)
              : async (e) => (
                  (!s || e?.forceRefresh) && (i = await o()),
                  a || (r && !r(i) ? (a = !0) : t(i) && (await o())),
                  i
                );
          };
        function ed(e) {
          try {
            let t = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
            return (
              t.delete("CONFIG"),
              t.delete("CONFIG_PREFIX_SEPARATOR"),
              t.delete("ENV"),
              [...t].join(", ")
            );
          } catch (t) {
            return e;
          }
        }
        let eg = (e, t) => async () => {
            try {
              let t = e(process.env);
              if (void 0 === t) throw Error();
              return t;
            } catch (r) {
              throw new ec(
                r.message || `Not found in ENV: ${ed(e.toString())}`,
                { logger: t }
              );
            }
          },
          ef = require("os");
        var ep = r(3873);
        let ey = {},
          ew = () =>
            process && process.geteuid ? `${process.geteuid()}` : "DEFAULT",
          eS = () => {
            let {
              HOME: e,
              USERPROFILE: t,
              HOMEPATH: r,
              HOMEDRIVE: i = `C:${ep.sep}`,
            } = process.env;
            if (e) return e;
            if (t) return t;
            if (r) return `${i}${r}`;
            let n = ew();
            return ey[n] || (ey[n] = (0, ef.homedir)()), ey[n];
          },
          eE = (e) => e.profile || process.env.AWS_PROFILE || "default";
        require("crypto");
        let em = require("fs"),
          { readFile: eA } = em.promises;
        (function (e) {
          (e.HEADER = "header"), (e.QUERY = "query");
        })(i || (i = {})),
          (function (e) {
            (e.HEADER = "header"), (e.QUERY = "query");
          })(n || (n = {})),
          (function (e) {
            (e.HTTP = "http"), (e.HTTPS = "https");
          })(s || (s = {})),
          (function (e) {
            (e.MD5 = "md5"),
              (e.CRC32 = "crc32"),
              (e.CRC32C = "crc32c"),
              (e.SHA1 = "sha1"),
              (e.SHA256 = "sha256");
          })(a || (a = {})),
          (function (e) {
            (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
          })(o || (o = {})),
          (function (e) {
            (e.PROFILE = "profile"),
              (e.SSO_SESSION = "sso-session"),
              (e.SERVICES = "services");
          })(c || (c = {})),
          (function (e) {
            (e.HTTP_0_9 = "http/0.9"),
              (e.HTTP_1_0 = "http/1.0"),
              (e.TDS_8_0 = "tds/8.0");
          })(l || (l = {}));
        let eR = (e) =>
            Object.entries(e)
              .filter(([e]) => {
                let t = e.indexOf(eH);
                return -1 !== t && Object.values(c).includes(e.substring(0, t));
              })
              .reduce(
                (e, [t, r]) => {
                  let i = t.indexOf(eH);
                  return (
                    (e[
                      t.substring(0, i) === c.PROFILE ? t.substring(i + 1) : t
                    ] = r),
                    e
                  );
                },
                { ...(e.default && { default: e.default }) }
              ),
          ev = () =>
            process.env.AWS_CONFIG_FILE || (0, ep.join)(eS(), ".aws", "config"),
          eC = () =>
            process.env.AWS_SHARED_CREDENTIALS_FILE ||
            (0, ep.join)(eS(), ".aws", "credentials"),
          eb = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/,
          eT = ["__proto__", "profile __proto__"],
          eI = (e) => {
            let t, r;
            let i = {};
            for (let n of e.split(/\r?\n/)) {
              let e = n.split(/(^|\s)[;#]/)[0].trim();
              if ("[" === e[0] && "]" === e[e.length - 1]) {
                (t = void 0), (r = void 0);
                let i = e.substring(1, e.length - 1),
                  n = eb.exec(i);
                if (n) {
                  let [, e, , r] = n;
                  Object.values(c).includes(e) && (t = [e, r].join(eH));
                } else t = i;
                if (eT.includes(i))
                  throw Error(`Found invalid profile name "${i}"`);
              } else if (t) {
                let s = e.indexOf("=");
                if (![0, -1].includes(s)) {
                  let [a, o] = [
                    e.substring(0, s).trim(),
                    e.substring(s + 1).trim(),
                  ];
                  if ("" === o) r = a;
                  else {
                    r && n.trimStart() === n && (r = void 0),
                      (i[t] = i[t] || {});
                    let e = r ? [r, a].join(eH) : a;
                    i[t][e] = o;
                  }
                }
              }
            }
            return i;
          },
          { readFile: eP } = em.promises,
          e_ = {},
          eO = (e, t) => (
            (!e_[e] || t?.ignoreCache) && (e_[e] = eP(e, "utf8")), e_[e]
          ),
          e$ = () => ({}),
          eH = ".",
          eD = async (e = {}) => {
            let { filepath: t = eC(), configFilepath: r = ev() } = e,
              i = eS(),
              n = t;
            t.startsWith("~/") && (n = (0, ep.join)(i, t.slice(2)));
            let s = r;
            r.startsWith("~/") && (s = (0, ep.join)(i, r.slice(2)));
            let a = await Promise.all([
              eO(s, { ignoreCache: e.ignoreCache }).then(eI).then(eR).catch(e$),
              eO(n, { ignoreCache: e.ignoreCache }).then(eI).catch(e$),
            ]);
            return { configFile: a[0], credentialsFile: a[1] };
          },
          ex =
            (e, { preferredFile: t = "config", ...r } = {}) =>
            async () => {
              let i = eE(r),
                { configFile: n, credentialsFile: s } = await eD(r),
                a = s[i] || {},
                o = n[i] || {},
                c = "config" === t ? { ...a, ...o } : { ...o, ...a };
              try {
                let r = "config" === t ? n : s,
                  i = e(c, r);
                if (void 0 === i) throw Error();
                return i;
              } catch (t) {
                throw new ec(
                  t.message ||
                    `Not found in config files w/ profile [${i}]: ${ed(e.toString())}`,
                  { logger: r.logger }
                );
              }
            },
          ej = (e) => "function" == typeof e,
          eL = (e) => (ej(e) ? async () => await e() : eu(e)),
          eq = (
            {
              environmentVariableSelector: e,
              configFileSelector: t,
              default: r,
            },
            i = {}
          ) => eh(el(eg(e), ex(t, i), eL(r))),
          ek = "AWS_ENDPOINT_URL",
          eU = "endpoint_url",
          eN = (e) => ({
            environmentVariableSelector: (t) => {
              let r =
                t[[ek, ...e.split(" ").map((e) => e.toUpperCase())].join("_")];
              if (r) return r;
              let i = t[ek];
              if (i) return i;
            },
            configFileSelector: (t, r) => {
              if (r && t.services) {
                let i = r[["services", t.services].join(eH)];
                if (i) {
                  let t =
                    i[
                      [
                        e
                          .split(" ")
                          .map((e) => e.toLowerCase())
                          .join("_"),
                        eU,
                      ].join(eH)
                    ];
                  if (t) return t;
                }
              }
              let i = t[eU];
              if (i) return i;
            },
            default: void 0,
          }),
          eF = async (e) => eq(eN(e ?? ""))(),
          eM = (e) => {
            let t;
            if ("string" == typeof e) return eM(new URL(e));
            let {
              hostname: r,
              pathname: i,
              port: n,
              protocol: s,
              search: a,
            } = e;
            return (
              a &&
                (t = (function (e) {
                  let t = {};
                  if ((e = e.replace(/^\?/, "")))
                    for (let r of e.split("&")) {
                      let [e, i = null] = r.split("=");
                      (e = decodeURIComponent(e)),
                        i && (i = decodeURIComponent(i)),
                        e in t
                          ? Array.isArray(t[e])
                            ? t[e].push(i)
                            : (t[e] = [t[e], i])
                          : (t[e] = i);
                    }
                  return t;
                })(a)),
              {
                hostname: r,
                port: n ? parseInt(n) : void 0,
                protocol: s,
                path: i,
                query: t,
              }
            );
          },
          eW = (e) =>
            "object" == typeof e ? ("url" in e ? eM(e.url) : e) : eM(e),
          eK = async (e, t, r, i) => {
            if (!r.endpoint) {
              let e;
              (e = r.serviceConfiguredEndpoint
                ? await r.serviceConfiguredEndpoint()
                : await eF(r.serviceId)) &&
                (r.endpoint = () => Promise.resolve(eW(e)));
            }
            let n = await ez(e, t, r);
            if ("function" != typeof r.endpointProvider)
              throw Error("config.endpointProvider is not set.");
            return r.endpointProvider(n, i);
          },
          ez = async (e, t, r) => {
            let i = {},
              n = t?.getEndpointParameterInstructions?.() || {};
            for (let [t, s] of Object.entries(n))
              switch (s.type) {
                case "staticContextParams":
                  i[t] = s.value;
                  break;
                case "contextParams":
                  i[t] = e[s.name];
                  break;
                case "clientContextParams":
                case "builtInParams":
                  i[t] = await ea(s.name, t, r)();
                  break;
                default:
                  throw Error(
                    "Unrecognized endpoint parameter instruction: " +
                      JSON.stringify(s)
                  );
              }
            return (
              0 === Object.keys(n).length && Object.assign(i, r),
              "s3" === String(r.serviceId).toLowerCase() && (await ee(i)),
              i
            );
          };
        (function (e) {
          (e.HEADER = "header"), (e.QUERY = "query");
        })(u || (u = {})),
          (function (e) {
            (e.HEADER = "header"), (e.QUERY = "query");
          })(h || (h = {})),
          (function (e) {
            (e.HTTP = "http"), (e.HTTPS = "https");
          })(d || (d = {})),
          (function (e) {
            (e.MD5 = "md5"),
              (e.CRC32 = "crc32"),
              (e.CRC32C = "crc32c"),
              (e.SHA1 = "sha1"),
              (e.SHA256 = "sha256");
          })(g || (g = {})),
          (function (e) {
            (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
          })(f || (f = {})),
          (function (e) {
            (e.PROFILE = "profile"),
              (e.SSO_SESSION = "sso-session"),
              (e.SERVICES = "services");
          })(p || (p = {})),
          (function (e) {
            (e.HTTP_0_9 = "http/0.9"),
              (e.HTTP_1_0 = "http/1.0"),
              (e.TDS_8_0 = "tds/8.0");
          })(y || (y = {})),
          (function (e) {
            (e.HEADER = "header"), (e.QUERY = "query");
          })(w || (w = {})),
          (function (e) {
            (e.HEADER = "header"), (e.QUERY = "query");
          })(S || (S = {})),
          (function (e) {
            (e.HTTP = "http"), (e.HTTPS = "https");
          })(E || (E = {})),
          (function (e) {
            (e.MD5 = "md5"),
              (e.CRC32 = "crc32"),
              (e.CRC32C = "crc32c"),
              (e.SHA1 = "sha1"),
              (e.SHA256 = "sha256");
          })(m || (m = {})),
          (function (e) {
            (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
          })(A || (A = {})),
          (function (e) {
            (e.PROFILE = "profile"),
              (e.SSO_SESSION = "sso-session"),
              (e.SERVICES = "services");
          })(R || (R = {})),
          (function (e) {
            (e.HTTP_0_9 = "http/0.9"),
              (e.HTTP_1_0 = "http/1.0"),
              (e.TDS_8_0 = "tds/8.0");
          })(v || (v = {}));
        let eV = (e) => {
            if ("function" == typeof e) return e;
            let t = Promise.resolve(e);
            return () => t;
          },
          eY = { name: "serializerMiddleware" };
        eY.name,
          (function (e) {
            (e.HEADER = "header"), (e.QUERY = "query");
          })(C || (C = {})),
          (function (e) {
            (e.HEADER = "header"), (e.QUERY = "query");
          })(b || (b = {})),
          (function (e) {
            (e.HTTP = "http"), (e.HTTPS = "https");
          })(T || (T = {})),
          (function (e) {
            (e.MD5 = "md5"),
              (e.CRC32 = "crc32"),
              (e.CRC32C = "crc32c"),
              (e.SHA1 = "sha1"),
              (e.SHA256 = "sha256");
          })(I || (I = {})),
          (function (e) {
            (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
          })(P || (P = {})),
          (function (e) {
            (e.PROFILE = "profile"),
              (e.SSO_SESSION = "sso-session"),
              (e.SERVICES = "services");
          })(_ || (_ = {})),
          (function (e) {
            (e.HTTP_0_9 = "http/0.9"),
              (e.HTTP_1_0 = "http/1.0"),
              (e.TDS_8_0 = "tds/8.0");
          })(O || (O = {}));
        class eB {
          constructor(e) {
            (this.method = e.method || "GET"),
              (this.hostname = e.hostname || "localhost"),
              (this.port = e.port),
              (this.query = e.query || {}),
              (this.headers = e.headers || {}),
              (this.body = e.body),
              (this.protocol = e.protocol
                ? ":" !== e.protocol.slice(-1)
                  ? `${e.protocol}:`
                  : e.protocol
                : "https:"),
              (this.path = e.path
                ? "/" !== e.path.charAt(0)
                  ? `/${e.path}`
                  : e.path
                : "/"),
              (this.username = e.username),
              (this.password = e.password),
              (this.fragment = e.fragment);
          }
          static clone(e) {
            var t;
            let r = new eB({ ...e, headers: { ...e.headers } });
            return (
              r.query &&
                (r.query = Object.keys((t = r.query)).reduce((e, r) => {
                  let i = t[r];
                  return { ...e, [r]: Array.isArray(i) ? [...i] : i };
                }, {})),
              r
            );
          }
          static isInstance(e) {
            return (
              !!e &&
              "method" in e &&
              "protocol" in e &&
              "hostname" in e &&
              "path" in e &&
              "object" == typeof e.query &&
              "object" == typeof e.headers
            );
          }
          clone() {
            return eB.clone(this);
          }
        }
        var eX = r(9428);
        require("stream"),
          require("http"),
          require("https"),
          require("http2"),
          Symbol.iterator;
        let eQ = {},
          eG = {};
        for (let e = 0; e < 256; e++) {
          let t = e.toString(16).toLowerCase();
          1 === t.length && (t = `0${t}`), (eQ[e] = t), (eG[t] = e);
        }
        function eJ(e) {
          return Object.assign(new String(e), {
            deserializeJSON: () => JSON.parse(String(e)),
            toString: () => String(e),
            toJSON: () => String(e),
          });
        }
        "function" == typeof ReadableStream && ReadableStream,
          eY.name,
          (function (e) {
            (e.HEADER = "header"), (e.QUERY = "query");
          })($ || ($ = {})),
          (function (e) {
            (e.HEADER = "header"), (e.QUERY = "query");
          })(H || (H = {})),
          (function (e) {
            (e.HTTP = "http"), (e.HTTPS = "https");
          })(D || (D = {})),
          (function (e) {
            (e.MD5 = "md5"),
              (e.CRC32 = "crc32"),
              (e.CRC32C = "crc32c"),
              (e.SHA1 = "sha1"),
              (e.SHA256 = "sha256");
          })(x || (x = {})),
          (function (e) {
            (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
          })(j || (j = {})),
          (function (e) {
            (e.PROFILE = "profile"),
              (e.SSO_SESSION = "sso-session"),
              (e.SERVICES = "services");
          })(L || (L = {})),
          (function (e) {
            (e.HTTP_0_9 = "http/0.9"),
              (e.HTTP_1_0 = "http/1.0"),
              (e.TDS_8_0 = "tds/8.0");
          })(q || (q = {})),
          console.warn,
          (eJ.from = (e) =>
            e &&
            "object" == typeof e &&
            (e instanceof eJ || "deserializeJSON" in e)
              ? e
              : "string" == typeof e ||
                  Object.getPrototypeOf(e) === String.prototype
                ? eJ(String(e))
                : eJ(JSON.stringify(e))),
          (eJ.fromObject = eJ.from);
        class eZ {
          constructor(e = {}) {
            (this.data = e), (this.lastPurgeTime = Date.now());
          }
          get(e) {
            let t = this.data[e];
            if (t) return t;
          }
          set(e, t) {
            return (this.data[e] = t), t;
          }
          delete(e) {
            delete this.data[e];
          }
          async purgeExpired() {
            let e = Date.now();
            if (
              !(
                this.lastPurgeTime + eZ.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS >
                e
              )
            )
              for (let t in this.data) {
                let r = this.data[t];
                if (!r.isRefreshing) {
                  let i = await r.identity;
                  i.expiration &&
                    i.expiration.getTime() < e &&
                    delete this.data[t];
                }
              }
          }
        }
        eZ.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;
        class e0 {
          constructor(e, t = !1, r = Date.now()) {
            (this._identity = e), (this.isRefreshing = t), (this.accessed = r);
          }
          get identity() {
            return (this.accessed = Date.now()), this._identity;
          }
        }
        class e1 {
          constructor(e, t = new eZ()) {
            (this.createSessionFn = e), (this.cache = t);
          }
          async getS3ExpressIdentity(e, t) {
            let r = t.Bucket,
              { cache: i } = this,
              n = i.get(r);
            return n
              ? n.identity.then((e) =>
                  (e.expiration?.getTime() ?? 0) < Date.now()
                    ? i.set(r, new e0(this.getIdentity(r))).identity
                    : ((e.expiration?.getTime() ?? 0) <
                        Date.now() + e1.REFRESH_WINDOW_MS &&
                        !n.isRefreshing &&
                        ((n.isRefreshing = !0),
                        this.getIdentity(r).then((e) => {
                          i.set(r, new e0(Promise.resolve(e)));
                        })),
                      e)
                )
              : i.set(r, new e0(this.getIdentity(r))).identity;
          }
          async getIdentity(e) {
            await this.cache.purgeExpired().catch((e) => {
              console.warn(
                "Error while clearing expired entries in S3ExpressIdentityCache: \n" +
                  e
              );
            });
            let t = await this.createSessionFn(e);
            if (!t.Credentials?.AccessKeyId || !t.Credentials?.SecretAccessKey)
              throw Error(
                "s3#createSession response credential missing AccessKeyId or SecretAccessKey."
              );
            return {
              accessKeyId: t.Credentials.AccessKeyId,
              secretAccessKey: t.Credentials.SecretAccessKey,
              sessionToken: t.Credentials.SessionToken,
              expiration: t.Credentials.Expiration
                ? new Date(t.Credentials.Expiration)
                : void 0,
            };
          }
        }
        e1.REFRESH_WINDOW_MS = 6e4;
        let e2 = {},
          e3 = {};
        for (let e = 0; e < 256; e++) {
          let t = e.toString(16).toLowerCase();
          1 === t.length && (t = `0${t}`), (e2[e] = t), (e3[t] = e);
        }
        function e8(e) {
          let t = "";
          for (let r = 0; r < e.byteLength; r++) t += e2[e[r]];
          return t;
        }
        let e4 = (e, t) => {
            if ("string" != typeof e)
              throw TypeError(
                `The "input" argument must be of type string. Received type ${typeof e} (${e})`
              );
            return t ? eX.Buffer.from(e, t) : eX.Buffer.from(e);
          },
          e5 = (e) => {
            let t = e4(e, "utf8");
            return new Uint8Array(
              t.buffer,
              t.byteOffset,
              t.byteLength / Uint8Array.BYTES_PER_ELEMENT
            );
          },
          e6 = (e) =>
            "string" == typeof e
              ? e5(e)
              : ArrayBuffer.isView(e)
                ? new Uint8Array(
                    e.buffer,
                    e.byteOffset,
                    e.byteLength / Uint8Array.BYTES_PER_ELEMENT
                  )
                : new Uint8Array(e),
          e9 = "X-Amz-Date",
          e7 = "X-Amz-Signature",
          te = "X-Amz-Security-Token",
          tt = "authorization",
          tr = e9.toLowerCase(),
          ti = [tt, tr, "date"],
          tn = e7.toLowerCase(),
          ts = "x-amz-content-sha256",
          ta = te.toLowerCase(),
          to = {
            authorization: !0,
            "cache-control": !0,
            connection: !0,
            expect: !0,
            from: !0,
            "keep-alive": !0,
            "max-forwards": !0,
            pragma: !0,
            referer: !0,
            te: !0,
            trailer: !0,
            "transfer-encoding": !0,
            upgrade: !0,
            "user-agent": !0,
            "x-amzn-trace-id": !0,
          },
          tc = /^proxy-/,
          tl = /^sec-/,
          tu = "AWS4-HMAC-SHA256",
          th = "aws4_request",
          td = {},
          tg = [],
          tf = (e, t, r) => `${e}/${t}/${r}/${th}`,
          tp = async (e, t, r, i, n) => {
            let s = await ty(e, t.secretAccessKey, t.accessKeyId),
              a = `${r}:${i}:${n}:${e8(s)}:${t.sessionToken}`;
            if (a in td) return td[a];
            for (tg.push(a); tg.length > 50; ) delete td[tg.shift()];
            let o = `AWS4${t.secretAccessKey}`;
            for (let t of [r, i, n, th]) o = await ty(e, o, t);
            return (td[a] = o);
          },
          ty = (e, t, r) => {
            let i = new e(t);
            return i.update(e6(r)), i.digest();
          },
          tw = ({ headers: e }, t, r) => {
            let i = {};
            for (let n of Object.keys(e).sort()) {
              if (void 0 == e[n]) continue;
              let s = n.toLowerCase();
              (!(s in to || t?.has(s) || tc.test(s) || tl.test(s)) ||
                (r && (!r || r.has(s)))) &&
                (i[s] = e[n].trim().replace(/\s+/g, " "));
            }
            return i;
          },
          tS = ({ query: e = {} }) => {
            let t = [],
              r = {};
            for (let i of Object.keys(e)) {
              if (i.toLowerCase() === tn) continue;
              let n = J(i);
              t.push(n);
              let s = e[i];
              "string" == typeof s
                ? (r[n] = `${n}=${J(s)}`)
                : Array.isArray(s) &&
                  (r[n] = s
                    .slice(0)
                    .reduce((e, t) => e.concat([`${n}=${J(t)}`]), [])
                    .sort()
                    .join("&"));
            }
            return t
              .sort()
              .map((e) => r[e])
              .filter((e) => e)
              .join("&");
          },
          tE = (e) =>
            ("function" == typeof ArrayBuffer && e instanceof ArrayBuffer) ||
            "[object ArrayBuffer]" === Object.prototype.toString.call(e),
          tm = async ({ headers: e, body: t }, r) => {
            for (let t of Object.keys(e))
              if (t.toLowerCase() === ts) return e[t];
            if (void 0 == t)
              return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
            if ("string" == typeof t || ArrayBuffer.isView(t) || tE(t)) {
              let e = new r();
              return e.update(e6(t)), e8(await e.digest());
            }
            return "UNSIGNED-PAYLOAD";
          };
        class tA {
          format(e) {
            let t = [];
            for (let r of Object.keys(e)) {
              let i = e5(r);
              t.push(
                Uint8Array.from([i.byteLength]),
                i,
                this.formatHeaderValue(e[r])
              );
            }
            let r = new Uint8Array(t.reduce((e, t) => e + t.byteLength, 0)),
              i = 0;
            for (let e of t) r.set(e, i), (i += e.byteLength);
            return r;
          }
          formatHeaderValue(e) {
            switch (e.type) {
              case "boolean":
                return Uint8Array.from([e.value ? 0 : 1]);
              case "byte":
                return Uint8Array.from([2, e.value]);
              case "short":
                let t = new DataView(new ArrayBuffer(3));
                return (
                  t.setUint8(0, 3),
                  t.setInt16(1, e.value, !1),
                  new Uint8Array(t.buffer)
                );
              case "integer":
                let r = new DataView(new ArrayBuffer(5));
                return (
                  r.setUint8(0, 4),
                  r.setInt32(1, e.value, !1),
                  new Uint8Array(r.buffer)
                );
              case "long":
                let i = new Uint8Array(9);
                return (i[0] = 5), i.set(e.value.bytes, 1), i;
              case "binary":
                let n = new DataView(new ArrayBuffer(3 + e.value.byteLength));
                n.setUint8(0, 6), n.setUint16(1, e.value.byteLength, !1);
                let s = new Uint8Array(n.buffer);
                return s.set(e.value, 3), s;
              case "string":
                let a = e5(e.value),
                  o = new DataView(new ArrayBuffer(3 + a.byteLength));
                o.setUint8(0, 7), o.setUint16(1, a.byteLength, !1);
                let c = new Uint8Array(o.buffer);
                return c.set(a, 3), c;
              case "timestamp":
                let l = new Uint8Array(9);
                return (
                  (l[0] = 8),
                  l.set(tv.fromNumber(e.value.valueOf()).bytes, 1),
                  l
                );
              case "uuid":
                if (!tR.test(e.value))
                  throw Error(`Invalid UUID received: ${e.value}`);
                let u = new Uint8Array(17);
                return (
                  (u[0] = 9),
                  u.set(
                    (function (e) {
                      if (e.length % 2 != 0)
                        throw Error(
                          "Hex encoded strings must have an even number length"
                        );
                      let t = new Uint8Array(e.length / 2);
                      for (let r = 0; r < e.length; r += 2) {
                        let i = e.slice(r, r + 2).toLowerCase();
                        if (i in e3) t[r / 2] = e3[i];
                        else
                          throw Error(
                            `Cannot decode unrecognized sequence ${i} as hexadecimal`
                          );
                      }
                      return t;
                    })(e.value.replace(/\-/g, "")),
                    1
                  ),
                  u
                );
            }
          }
        }
        !(function (e) {
          (e[(e.boolTrue = 0)] = "boolTrue"),
            (e[(e.boolFalse = 1)] = "boolFalse"),
            (e[(e.byte = 2)] = "byte"),
            (e[(e.short = 3)] = "short"),
            (e[(e.integer = 4)] = "integer"),
            (e[(e.long = 5)] = "long"),
            (e[(e.byteArray = 6)] = "byteArray"),
            (e[(e.string = 7)] = "string"),
            (e[(e.timestamp = 8)] = "timestamp"),
            (e[(e.uuid = 9)] = "uuid");
        })(k || (k = {}));
        let tR =
          /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
        class tv {
          constructor(e) {
            if (((this.bytes = e), 8 !== e.byteLength))
              throw Error("Int64 buffers must be exactly 8 bytes");
          }
          static fromNumber(e) {
            if (e > 0x8000000000000000 || e < -0x8000000000000000)
              throw Error(
                `${e} is too large (or, if negative, too small) to represent as an Int64`
              );
            let t = new Uint8Array(8);
            for (
              let r = 7, i = Math.abs(Math.round(e));
              r > -1 && i > 0;
              r--, i /= 256
            )
              t[r] = i;
            return e < 0 && tC(t), new tv(t);
          }
          valueOf() {
            let e = this.bytes.slice(0),
              t = 128 & e[0];
            return t && tC(e), parseInt(e8(e), 16) * (t ? -1 : 1);
          }
          toString() {
            return String(this.valueOf());
          }
        }
        function tC(e) {
          for (let t = 0; t < 8; t++) e[t] ^= 255;
          for (let t = 7; t > -1 && (e[t]++, 0 === e[t]); t--);
        }
        let tb = (e, t) => {
            for (let r of ((e = e.toLowerCase()), Object.keys(t)))
              if (e === r.toLowerCase()) return !0;
            return !1;
          },
          tT = (e, t = {}) => {
            let { headers: r, query: i = {} } = eB.clone(e);
            for (let e of Object.keys(r)) {
              let n = e.toLowerCase();
              (("x-amz-" === n.slice(0, 6) && !t.unhoistableHeaders?.has(n)) ||
                t.hoistableHeaders?.has(n)) &&
                ((i[e] = r[e]), delete r[e]);
            }
            return { ...e, headers: r, query: i };
          },
          tI = (e) => {
            for (let t of Object.keys((e = eB.clone(e)).headers))
              ti.indexOf(t.toLowerCase()) > -1 && delete e.headers[t];
            return e;
          },
          tP = (e) =>
            t_(e)
              .toISOString()
              .replace(/\.\d{3}Z$/, "Z"),
          t_ = (e) =>
            "number" == typeof e
              ? new Date(1e3 * e)
              : "string" == typeof e
                ? new Date(Number(e) ? 1e3 * Number(e) : e)
                : e;
        class tO {
          constructor({
            applyChecksum: e,
            credentials: t,
            region: r,
            service: i,
            sha256: n,
            uriEscapePath: s = !0,
          }) {
            (this.headerFormatter = new tA()),
              (this.service = i),
              (this.sha256 = n),
              (this.uriEscapePath = s),
              (this.applyChecksum = "boolean" != typeof e || e),
              (this.regionProvider = eV(r)),
              (this.credentialProvider = eV(t));
          }
          async presign(e, t = {}) {
            let {
                signingDate: r = new Date(),
                expiresIn: i = 3600,
                unsignableHeaders: n,
                unhoistableHeaders: s,
                signableHeaders: a,
                hoistableHeaders: o,
                signingRegion: c,
                signingService: l,
              } = t,
              u = await this.credentialProvider();
            this.validateResolvedCredentials(u);
            let h = c ?? (await this.regionProvider()),
              { longDate: d, shortDate: g } = t$(r);
            if (i > 604800)
              return Promise.reject(
                "Signature version 4 presigned URLs must have an expiration date less than one week in the future"
              );
            let f = tf(g, h, l ?? this.service),
              p = tT(tI(e), { unhoistableHeaders: s, hoistableHeaders: o });
            u.sessionToken && (p.query[te] = u.sessionToken),
              (p.query["X-Amz-Algorithm"] = tu),
              (p.query["X-Amz-Credential"] = `${u.accessKeyId}/${f}`),
              (p.query[e9] = d),
              (p.query["X-Amz-Expires"] = i.toString(10));
            let y = tw(p, n, a);
            return (
              (p.query["X-Amz-SignedHeaders"] = tH(y)),
              (p.query[e7] = await this.getSignature(
                d,
                f,
                this.getSigningKey(u, h, g, l),
                this.createCanonicalRequest(p, y, await tm(e, this.sha256))
              )),
              p
            );
          }
          async sign(e, t) {
            return "string" == typeof e
              ? this.signString(e, t)
              : e.headers && e.payload
                ? this.signEvent(e, t)
                : e.message
                  ? this.signMessage(e, t)
                  : this.signRequest(e, t);
          }
          async signEvent(
            { headers: e, payload: t },
            {
              signingDate: r = new Date(),
              priorSignature: i,
              signingRegion: n,
              signingService: s,
            }
          ) {
            let a = n ?? (await this.regionProvider()),
              { shortDate: o, longDate: c } = t$(r),
              l = tf(o, a, s ?? this.service),
              u = await tm({ headers: {}, body: t }, this.sha256),
              h = new this.sha256();
            h.update(e);
            let d = [
              "AWS4-HMAC-SHA256-PAYLOAD",
              c,
              l,
              i,
              e8(await h.digest()),
              u,
            ].join("\n");
            return this.signString(d, {
              signingDate: r,
              signingRegion: a,
              signingService: s,
            });
          }
          async signMessage(
            e,
            { signingDate: t = new Date(), signingRegion: r, signingService: i }
          ) {
            return this.signEvent(
              {
                headers: this.headerFormatter.format(e.message.headers),
                payload: e.message.body,
              },
              {
                signingDate: t,
                signingRegion: r,
                signingService: i,
                priorSignature: e.priorSignature,
              }
            ).then((t) => ({ message: e.message, signature: t }));
          }
          async signString(
            e,
            {
              signingDate: t = new Date(),
              signingRegion: r,
              signingService: i,
            } = {}
          ) {
            let n = await this.credentialProvider();
            this.validateResolvedCredentials(n);
            let s = r ?? (await this.regionProvider()),
              { shortDate: a } = t$(t),
              o = new this.sha256(await this.getSigningKey(n, s, a, i));
            return o.update(e6(e)), e8(await o.digest());
          }
          async signRequest(
            e,
            {
              signingDate: t = new Date(),
              signableHeaders: r,
              unsignableHeaders: i,
              signingRegion: n,
              signingService: s,
            } = {}
          ) {
            let a = await this.credentialProvider();
            this.validateResolvedCredentials(a);
            let o = n ?? (await this.regionProvider()),
              c = tI(e),
              { longDate: l, shortDate: u } = t$(t),
              h = tf(u, o, s ?? this.service);
            (c.headers[tr] = l),
              a.sessionToken && (c.headers[ta] = a.sessionToken);
            let d = await tm(c, this.sha256);
            !tb(ts, c.headers) && this.applyChecksum && (c.headers[ts] = d);
            let g = tw(c, i, r),
              f = await this.getSignature(
                l,
                h,
                this.getSigningKey(a, o, u, s),
                this.createCanonicalRequest(c, g, d)
              );
            return (
              (c.headers[tt] =
                `${tu} Credential=${a.accessKeyId}/${h}, SignedHeaders=${tH(g)}, Signature=${f}`),
              c
            );
          }
          createCanonicalRequest(e, t, r) {
            let i = Object.keys(t).sort();
            return `${e.method}
${this.getCanonicalPath(e)}
${tS(e)}
${i.map((e) => `${e}:${t[e]}`).join("\n")}

${i.join(";")}
${r}`;
          }
          async createStringToSign(e, t, r) {
            let i = new this.sha256();
            i.update(e6(r));
            let n = await i.digest();
            return `${tu}
${e}
${t}
${e8(n)}`;
          }
          getCanonicalPath({ path: e }) {
            if (this.uriEscapePath) {
              let t = [];
              for (let r of e.split("/"))
                r?.length !== 0 &&
                  "." !== r &&
                  (".." === r ? t.pop() : t.push(r));
              return J(
                `${e?.startsWith("/") ? "/" : ""}${t.join("/")}${t.length > 0 && e?.endsWith("/") ? "/" : ""}`
              ).replace(/%2F/g, "/");
            }
            return e;
          }
          async getSignature(e, t, r, i) {
            let n = await this.createStringToSign(e, t, i),
              s = new this.sha256(await r);
            return s.update(e6(n)), e8(await s.digest());
          }
          getSigningKey(e, t, r, i) {
            return tp(this.sha256, e, r, t, i || this.service);
          }
          validateResolvedCredentials(e) {
            if (
              "object" != typeof e ||
              "string" != typeof e.accessKeyId ||
              "string" != typeof e.secretAccessKey
            )
              throw Error("Resolved credential object is not valid");
          }
        }
        let t$ = (e) => {
            let t = tP(e).replace(/[\-:]/g, "");
            return { longDate: t, shortDate: t.slice(0, 8) };
          },
          tH = (e) => Object.keys(e).sort().join(";");
        !(function (e) {
          (e.ENV = "env"), (e.CONFIG = "shared config entry");
        })(U || (U = {}));
        let tD = "X-Amz-S3session-Token",
          tx = tD.toLowerCase();
        class tj extends tO {
          async signWithCredentials(e, t, r) {
            let i = tL(t);
            return (
              (e.headers[tx] = t.sessionToken),
              tq(this, i),
              this.signRequest(e, r ?? {})
            );
          }
          async presignWithCredentials(e, t, r) {
            let i = tL(t);
            return (
              delete e.headers[tx],
              (e.headers[tD] = t.sessionToken),
              (e.query = e.query ?? {}),
              (e.query[tD] = t.sessionToken),
              tq(this, i),
              this.presign(e, r)
            );
          }
        }
        function tL(e) {
          return {
            accessKeyId: e.accessKeyId,
            secretAccessKey: e.secretAccessKey,
            expiration: e.expiration,
          };
        }
        function tq(e, t) {
          let r = setTimeout(() => {
              throw Error(
                "SignatureV4S3Express credential override was created but not called."
              );
            }, 10),
            i = e.credentialProvider;
          e.credentialProvider = () => (
            clearTimeout(r), (e.credentialProvider = i), Promise.resolve(t)
          );
        }
        (function (e) {
          (e.HEADER = "header"), (e.QUERY = "query");
        })(N || (N = {})),
          (function (e) {
            (e.HEADER = "header"), (e.QUERY = "query");
          })(F || (F = {})),
          (function (e) {
            (e.HTTP = "http"), (e.HTTPS = "https");
          })(M || (M = {})),
          (function (e) {
            (e.MD5 = "md5"),
              (e.CRC32 = "crc32"),
              (e.CRC32C = "crc32c"),
              (e.SHA1 = "sha1"),
              (e.SHA256 = "sha256");
          })(W || (W = {})),
          (function (e) {
            (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
          })(K || (K = {})),
          (function (e) {
            (e.PROFILE = "profile"),
              (e.SSO_SESSION = "sso-session"),
              (e.SERVICES = "services");
          })(z || (z = {})),
          (function (e) {
            (e.HTTP_0_9 = "http/0.9"),
              (e.HTTP_1_0 = "http/1.0"),
              (e.TDS_8_0 = "tds/8.0");
          })(V || (V = {}));
        let tk = { CrtSignerV4: null };
        class tU {
          constructor(e) {
            (this.sigv4Signer = new tj(e)), (this.signerOptions = e);
          }
          async sign(e, t = {}) {
            if ("*" === t.signingRegion) {
              if ("node" !== this.signerOptions.runtime)
                throw Error(
                  "This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js"
                );
              return this.getSigv4aSigner().sign(e, t);
            }
            return this.sigv4Signer.sign(e, t);
          }
          async signWithCredentials(e, t, r = {}) {
            if ("*" === r.signingRegion) {
              if ("node" !== this.signerOptions.runtime)
                throw Error(
                  "This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js"
                );
              return this.getSigv4aSigner().signWithCredentials(e, t, r);
            }
            return this.sigv4Signer.signWithCredentials(e, t, r);
          }
          async presign(e, t = {}) {
            if ("*" === t.signingRegion) {
              if ("node" !== this.signerOptions.runtime)
                throw Error(
                  "This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js"
                );
              return this.getSigv4aSigner().presign(e, t);
            }
            return this.sigv4Signer.presign(e, t);
          }
          async presignWithCredentials(e, t, r = {}) {
            if ("*" === r.signingRegion)
              throw Error(
                "Method presignWithCredentials is not supported for [signingRegion=*]."
              );
            return this.sigv4Signer.presignWithCredentials(e, t, r);
          }
          getSigv4aSigner() {
            if (!this.sigv4aSigner) {
              let e = null;
              try {
                if (((e = tk.CrtSignerV4), "function" != typeof e))
                  throw Error();
              } catch (e) {
                throw (
                  ((e.message = `${e.message}
Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. 
You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. 
For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`),
                  e)
                );
              }
              this.sigv4aSigner = new e({
                ...this.signerOptions,
                signingAlgorithm: 1,
              });
            }
            return this.sigv4aSigner;
          }
        }
        class tN {
          constructor(e) {
            let t = {
              service: e.signingName || e.service || "s3",
              uriEscapePath: e.uriEscapePath || !1,
              applyChecksum: e.applyChecksum || !1,
              ...e,
            };
            this.signer = new tU(t);
          }
          presign(
            e,
            {
              unsignableHeaders: t = new Set(),
              hoistableHeaders: r = new Set(),
              unhoistableHeaders: i = new Set(),
              ...n
            } = {}
          ) {
            return (
              this.prepareRequest(e, {
                unsignableHeaders: t,
                unhoistableHeaders: i,
                hoistableHeaders: r,
              }),
              this.signer.presign(e, {
                expiresIn: 900,
                unsignableHeaders: t,
                unhoistableHeaders: i,
                ...n,
              })
            );
          }
          presignWithCredentials(
            e,
            t,
            {
              unsignableHeaders: r = new Set(),
              hoistableHeaders: i = new Set(),
              unhoistableHeaders: n = new Set(),
              ...s
            } = {}
          ) {
            return (
              this.prepareRequest(e, {
                unsignableHeaders: r,
                unhoistableHeaders: n,
                hoistableHeaders: i,
              }),
              this.signer.presignWithCredentials(e, t, {
                expiresIn: 900,
                unsignableHeaders: r,
                unhoistableHeaders: n,
                ...s,
              })
            );
          }
          prepareRequest(
            e,
            {
              unsignableHeaders: t = new Set(),
              unhoistableHeaders: r = new Set(),
              hoistableHeaders: i = new Set(),
            } = {}
          ) {
            t.add("content-type"),
              Object.keys(e.headers)
                .map((e) => e.toLowerCase())
                .filter((e) => e.startsWith("x-amz-server-side-encryption"))
                .forEach((e) => {
                  i.has(e) || r.add(e);
                }),
              (e.headers["X-Amz-Content-Sha256"] = "UNSIGNED-PAYLOAD");
            let n = e.headers.host,
              s = e.port,
              a = `${e.hostname}${null != e.port ? ":" + s : ""}`;
            (n && (n !== e.hostname || null == e.port)) || (e.headers.host = a);
          }
        }
        let tF = async (e, t, r = {}) => {
          let i, n;
          if ("function" == typeof e.config.endpointProvider) {
            let r = await eK(t.input, t.constructor, e.config),
              s = r.properties?.authSchemes?.[0];
            (n =
              s?.name === "sigv4a"
                ? s?.signingRegionSet?.join(",")
                : s?.signingRegion),
              (i = new tN({
                ...e.config,
                signingName: s?.signingName,
                region: async () => n,
              }));
          } else i = new tN(e.config);
          let s = e.middlewareStack.clone();
          s.addRelativeTo(
            (e, t) => async (e) => {
              let { request: s } = e;
              if (!eB.isInstance(s))
                throw Error(
                  "Request to be presigned is not an valid HTTP request."
                );
              delete s.headers["amz-sdk-invocation-id"],
                delete s.headers["amz-sdk-request"],
                delete s.headers["x-amz-user-agent"];
              let a = {
                ...r,
                signingRegion: r.signingRegion ?? t.signing_region ?? n,
                signingService: r.signingService ?? t.signing_service,
              };
              return {
                response: {},
                output: {
                  $metadata: { httpStatusCode: 200 },
                  presigned: t.s3ExpressIdentity
                    ? await i.presignWithCredentials(s, t.s3ExpressIdentity, a)
                    : await i.presign(s, a),
                },
              };
            },
            {
              name: "presignInterceptMiddleware",
              relation: "before",
              toMiddleware: "awsAuthMiddleware",
              override: !0,
            }
          );
          let a = t.resolveMiddleware(s, e.config, {}),
            { output: o } = await a({ input: t.input }),
            { presigned: c } = o;
          return (function (e) {
            let { port: t, query: r } = e,
              { protocol: i, path: n, hostname: s } = e;
            i && ":" !== i.slice(-1) && (i += ":"),
              t && (s += `:${t}`),
              n && "/" !== n.charAt(0) && (n = `/${n}`);
            let a = r
              ? (function (e) {
                  let t = [];
                  for (let r of Object.keys(e).sort()) {
                    let i = e[r];
                    if (((r = J(r)), Array.isArray(i)))
                      for (let e = 0, n = i.length; e < n; e++)
                        t.push(`${r}=${J(i[e])}`);
                    else {
                      let e = r;
                      (i || "string" == typeof i) && (e += `=${J(i)}`),
                        t.push(e);
                    }
                  }
                  return t.join("&");
                })(r)
              : "";
            a && "?" !== a[0] && (a = `?${a}`);
            let o = "";
            if (null != e.username || null != e.password) {
              let t = e.username ?? "",
                r = e.password ?? "";
              o = `${t}:${r}@`;
            }
            let c = "";
            return (
              e.fragment && (c = `#${e.fragment}`), `${i}//${o}${s}${n}${a}${c}`
            );
          })(c);
        };
        var tM = r(9187);
        async function tW(e) {
          let { filename: t, contentType: r } = await e.json(),
            i = new G.S3Client({
              region: process.env.AWS_REGION,
              credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
              },
            }),
            n = new G.PutObjectCommand({
              Bucket: process.env.AWS_BUCKET_NAME,
              Key: t,
              ContentType: r,
            });
          try {
            let e = await tF(i, n, { expiresIn: 3600 });
            return tM.NextResponse.json({ presignedUrl: e });
          } catch (e) {
            return tM.NextResponse.json(
              { error: e ?? "Failed to generate URL" },
              { status: 500 }
            );
          }
        }
        let tK = new B.AppRouteRouteModule({
            definition: {
              kind: X.RouteKind.APP_ROUTE,
              page: "/api/upload/route",
              pathname: "/api/upload",
              filename: "route",
              bundlePath: "app/api/upload/route",
            },
            resolvedPagePath:
              "/Users/vikeshbk/go/src/studioMonk.io/studio-monk/src/app/api/upload/route.ts",
            nextConfigOutput: "",
            userland: Y,
          }),
          {
            workAsyncStorage: tz,
            workUnitAsyncStorage: tV,
            serverHooks: tY,
          } = tK;
        function tB() {
          return (0, Q.patchFetch)({
            workAsyncStorage: tz,
            workUnitAsyncStorage: tV,
          });
        }
      },
      6487: () => {},
      8335: () => {},
    });
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    i = t.X(0, [638, 452], () => r(2605));
  module.exports = i;
})();
