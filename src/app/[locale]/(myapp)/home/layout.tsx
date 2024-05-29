'use client';

import '@/styles/global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="">{children}</main>;
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
