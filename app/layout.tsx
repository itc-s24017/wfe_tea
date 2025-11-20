import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tea Collection - 紅茶の世界へようこそ",
  description: "世界中の美味しい紅茶をご紹介します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Link href="/">
              <h1 className={styles.logo}>Tea Collection</h1>
            </Link>
            <nav className={styles.nav}>
              <Link href="/">ホーム</Link>
              <Link href="/types">種類</Link>
              <Link href="/brewing">淹れ方</Link>
              <Link href="/tea">紅茶一覧</Link>
            </nav>
          </div>
        </header>
        
        <main className={styles.mainContent}>
          {children}
        </main>
        
        <footer className={styles.footer}>
          <p>© 2024 Tea Collection. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}