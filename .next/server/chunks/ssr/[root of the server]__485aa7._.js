module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/utils/get-error-message.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getErrorMessage": (()=>getErrorMessage)
});
function getErrorMessage(error) {
    if (error instanceof Error) {
        return error.message;
    }
    if (error && typeof error === "object" && "message" in error) {
        return String(error.message);
    }
    if (typeof error === "string") {
        return error;
    }
    return "An error occured";
}
}}),
"[project]/src/lib/cognitoActions.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "handleConfirmSignUp": (()=>handleConfirmSignUp),
    "handleSendEmailVerificationCode": (()=>handleSendEmailVerificationCode),
    "handleSignIn": (()=>handleSignIn),
    "handleSignOut": (()=>handleSignOut),
    "handleSignUp": (()=>handleSignUp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$error$2d$message$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/get-error-message.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signUp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signUp.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$resendSignUpCode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/resendSignUpCode.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$confirmSignUp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/confirmSignUp.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signIn.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signOut$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signOut.mjs [app-ssr] (ecmascript)");
;
;
;
async function handleSignUp(prevState, formData) {
    try {
        const { isSignUpComplete, userId, nextStep } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signUp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signUp"])({
            username: String(formData.get("email")),
            password: String(formData.get("password")),
            options: {
                userAttributes: {
                    email: String(formData.get("email")),
                    name: String(formData.get("name"))
                },
                //optional
                autoSignIn: true
            }
        });
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$error$2d$message$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redirect"])("/auth/confirm-signup");
}
async function handleSendEmailVerificationCode(prevState, formData) {
    let currentState;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$resendSignUpCode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resendSignUpCode"])({
            username: String(formData.get("email"))
        });
        currentState = {
            ...prevState,
            message: "Code sent successfully"
        };
    } catch (error) {
        currentState = {
            ...prevState,
            errorMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$error$2d$message$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error)
        };
    }
    return currentState;
}
async function handleConfirmSignUp(prevState, formData) {
    try {
        const { isSignUpComplete, nextStep } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$confirmSignUp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmSignUp"])({
            username: String(formData.get("email")),
            confirmationCode: String(formData.get("code"))
        });
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$error$2d$message$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redirect"])("/auth/login");
}
async function handleSignIn(prevState, formData) {
    let redirectLink = "/";
    try {
        const { isSignedIn, nextStep } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signIn$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])({
            username: String(formData.get("email")),
            password: String(formData.get("password"))
        });
        if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$resendSignUpCode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resendSignUpCode"])({
                username: String(formData.get("email"))
            });
            redirectLink = "/auth/confirm-signup";
        }
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$error$2d$message$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redirect"])(redirectLink);
}
async function handleSignOut() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$amplify$2f$auth$2f$dist$2f$esm$2f$providers$2f$cognito$2f$apis$2f$signOut$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])();
    } catch (error) {
        console.log((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$error$2d$message$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redirect"])("/auth/login");
} // export async function handleSignUp(
 //   prevState: string | undefined,
 //   formData: FormData
 // ) {
 //   console.log("signing up");
 //   return "Error creating an account";
 // }
 // export async function handleSendEmailVerificationCode(
 //   prevState: { message: string; errorMessage: string },
 //   formData: FormData
 // ) {
 //   console.log("resending verification code");
 //   const currentState = {
 //     ...prevState,
 //     message: "Code sent successfully",
 //   };
 //   return currentState;
 // }
 // export async function confirmSignUp(
 //   prevState: string | undefined,
 //   formData: FormData
 // ) {
 //   console.log("confirming sign up");
 //   return "Invalid code";
 // }
 // export async function handleSignIn(
 //   prevState: string | undefined,
 //   formData: FormData
 // ) {
 //   console.log("signing in");
 //   return "Error logging in";
 // }
 // export async function handleSignOut() {
 //   console.log("signing out");
 // }
}}),
"[project]/src/ui/dashboard/logout-form.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LogoutForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cognitoActions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cognitoActions.ts [app-ssr] (ecmascript)");
"use client";
;
;
function LogoutForm() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cognitoActions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleSignOut"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: "Sign Out"
            }, void 0, false, {
                fileName: "[project]/src/ui/dashboard/logout-form.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/ui/dashboard/logout-form.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/ui/dashboard/logout-form.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__485aa7._.js.map