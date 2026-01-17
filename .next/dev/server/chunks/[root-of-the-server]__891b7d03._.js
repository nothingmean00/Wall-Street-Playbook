module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/wall-street-playbook/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDb",
    ()=>getDb,
    "initDatabase",
    ()=>initDatabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wall-street-playbook/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)");
;
let sql = null;
function getDb() {
    if (!sql) {
        if (!process.env.DATABASE_URL) {
            throw new Error('DATABASE_URL environment variable is not set');
        }
        sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neon"])(process.env.DATABASE_URL);
    }
    return sql;
}
async function initDatabase() {
    const db = getDb();
    await db`
    CREATE TABLE IF NOT EXISTS email_subscribers (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      source VARCHAR(50) DEFAULT 'website',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
    await db`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(100),
      message TEXT NOT NULL,
      status VARCHAR(20) DEFAULT 'new',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
    await db`
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      stripe_session_id VARCHAR(255) UNIQUE,
      stripe_customer_id VARCHAR(255),
      email VARCHAR(255) NOT NULL,
      product_type VARCHAR(50) NOT NULL,
      product_id VARCHAR(100) NOT NULL,
      amount INTEGER NOT NULL,
      status VARCHAR(20) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
    await db`
    CREATE TABLE IF NOT EXISTS resume_submissions (
      id SERIAL PRIMARY KEY,
      name VARCHAR(200) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      service_type VARCHAR(50) NOT NULL,
      target_role VARCHAR(200),
      target_firms TEXT,
      current_status VARCHAR(100),
      experience_level VARCHAR(50),
      timeline VARCHAR(100),
      specific_concerns TEXT,
      additional_notes TEXT,
      resume_url TEXT NOT NULL,
      resume_filename VARCHAR(255),
      status VARCHAR(30) DEFAULT 'pending',
      admin_notes TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
}
}),
"[project]/Downloads/wall-street-playbook/app/api/admin/submissions/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wall-street-playbook/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wall-street-playbook/lib/db.ts [app-route] (ecmascript)");
;
;
// Simple admin auth check
function isAuthorized(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) return false;
    const adminPassword = process.env.ADMIN_PASSWORD?.trim();
    if (!adminPassword) return false;
    const token = authHeader.replace('Bearer ', '').trim();
    return token === adminPassword;
}
async function GET(request) {
    if (!isAuthorized(request)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Unauthorized'
        }, {
            status: 401
        });
    }
    try {
        const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
        const submissions = await sql`
      SELECT 
        id, name, email, phone, service_type, target_role, target_firms,
        current_status, experience_level, timeline, specific_concerns,
        additional_notes, resume_url, resume_filename, status, admin_notes,
        created_at, updated_at
      FROM resume_submissions
      ORDER BY created_at DESC
    `;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            submissions
        });
    } catch (error) {
        console.error('Error fetching submissions:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wall$2d$street$2d$playbook$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch submissions'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__891b7d03._.js.map