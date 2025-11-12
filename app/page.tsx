import styles from "./page.module.css";
import Image from "next/image";
// import { getNewsList } from "@/app/_libs/microcms"; // 紅茶情報取得用の新しい関数に置き換える
// import { TOP_NEWS_LIMIT } from "@/app/_constants"; // ニュース制限を商品の表示制限などに置き換える
import TeaList from "@/app/_components/TeaList"; // NewsListをTeaListに置き換える
import ButtonLink from "@/app/_components/ButtonLink";
import { getTeaProducts } from "@/app/_libs/teaData"; // 仮のデータ取得関数

export const revalidate = 60; // データの再生成時間を秒で指定

export default async function Home() {
  const tea = "紅茶"; // コンポーネント内で使用する変数を紅茶関連のものに変更

  // 🍵 紅茶のプロダクトデータを取得する（getNewsListの代わりに）
  const data = await getTeaProducts({
    limit: 3, // トップページに表示する商品数を指定
  });

  return (
    <>
      {/* ☕ メインビジュアルセクション */}
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>
            最高の**{tea}**と安らぎをあなたに
          </h1>
          <p className={styles.description}>
            厳選された茶葉が織りなす、至tea福のひとときをお届けします。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-tea-mv.jpg" // 画像のパスを紅茶のイメージに変更
          alt="カップに入った温かい紅茶と茶葉"
          width={4000}
          height={1200}
          priority
          sizes="100vw"
        />
      </section>

      {/* 🛍️ 商品紹介セクション */}
      <section className={styles.news}>
        <h2 className={styles.newstitle}>Our Teas</h2> {/* 見出しを商品紹介に変更 */}
        {/* NewsListをTeaListコンポーネントに置き換える */}
        <TeaList products={data.contents} /> 
        <div className={styles.newsLink}>
          <ButtonLink href="/products">商品一覧をみる</ButtonLink>
        </div>
      </section>
    </>
  );
}