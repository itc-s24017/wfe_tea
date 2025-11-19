import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>紅茶の世界へようこそ</h1>
          <p className={styles.heroSubtitle}>
            世界中から厳選された紅茶をご紹介します。<br />
            香り豊かな一杯で、心安らぐひとときを。
          </p>
          <Link href="/tea" className={styles.ctaButton}>
            紅茶一覧を見る
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌍</div>
            <h3>世界の産地</h3>
            <p>インド、スリランカ、中国など、世界各地の紅茶をお届けします。</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🍵</div>
            <h3>豊富な種類</h3>
            <p>ブラックティー、グリーンティー、ハーブティーなど多彩なラインナップ。</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📖</div>
            <h3>淹れ方ガイド</h3>
            <p>それぞれの紅茶に最適な淹れ方をご紹介しています。</p>
          </div>
        </div>
      </section>
    </div>
  );
}