import { getTeaList } from '../_libs/microcms';
import TeaCard from '../_components/teaData/teaCard';
import styles from './page.module.css';

export const revalidate = 60; // 60秒ごとに再検証

export default async function TeaListPage() {
  const teas = await getTeaList();

  return (
    <div className={styles.teaListPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>紅茶コレクション</h1>
        <p className={styles.pageDescription}>
          世界中から集めた厳選された紅茶をご覧ください
        </p>
      </div>

      {teas.length === 0 ? (
        <div className={styles.noTeas}>
          <p>紅茶がまだ登録されていません。</p>
        </div>
      ) : (
        <div className={styles.teaGrid}>
          {teas.map((tea) => (
            <TeaCard key={tea.id} tea={tea} />
          ))}
        </div>
      )}
    </div>
  );
}