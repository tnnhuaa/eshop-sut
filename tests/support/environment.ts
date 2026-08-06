export const environment = {
  studentId: process.env.STUDENT_ID ?? "23127280",
  webBaseUrl: process.env.WEB_BASE_URL ?? "http://127.0.0.1:5173",
  adminBaseUrl: process.env.ADMIN_BASE_URL ?? "http://127.0.0.1:5174",
  apiBaseUrl: process.env.API_BASE_URL ?? "http://127.0.0.1:3000/api",
  user: {
    email: process.env.USER_EMAIL ?? "test@eshop.com",
    password: process.env.USER_PASSWORD ?? "Test1234!",
  },
  admin: {
    email: process.env.ADMIN_EMAIL ?? "admin@eshop.com",
    password: process.env.ADMIN_PASSWORD ?? "Admin123!",
  },
} as const;
