# E-Commerce Next.js + NestJS + PostgreSQL

โปรเจกต์นี้เป็นตัวอย่างระบบ E-Commerce โดยใช้ Next.js (frontend)

## การติดตั้งและรันโปรเจกต์

### 1. สร้างโปรเจกต์ใหม่ Next.js

```bash
npx create-next-app@latest ชื่อโปรเจกต์
cd ชื่อโปรเจกต์
```

### 2. ติดตั้ง Material UI (MUI)

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### 3. ติดตั้ง Font Roboto

```bash
npm install @fontsource/roboto
```

### 4. ติดตั้ง MUI Icons

```bash
npm install @mui/icons-material
```

### 5. รัน Frontend (Next.js)

```bash
npm run dev
```

---

## เพจที่มีในระบบ

- `/` : หน้าแรก
- `/product` : รายการสินค้า
- `/product/[id]` : รายละเอียดสินค้า
- `/order` : รายการสินค้าในออเดอร์
- `/add-product` : เพิ่มสินค้าใหม่
- `/edit-product/[id]` : แก้ไขสินค้า

---

## ใช้ Package อะไรบ้าง

- `next`
- `react`
- `@mui/material`
- `@emotion/react`
- `@emotion/styled`
- `@mui/icons-material`
- `@fontsource/roboto`
