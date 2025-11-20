import { getTeaList } from '../_libs/microcms';
import TeaCard from '../_components/teaData/teaCard';
import styles from './page.module.css';

export const revalidate = 60;

export default async function TeaListPage() {
  const teas = await getTeaList();

  return (
    <div className={styles.teaListPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>紅茶一覧</h1>
        <p className={styles.pageDescription}>
          すべての紅茶をご覧いただけます
        </p>
      </div>

      <div className={styles.content}>
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
    </div>
  );
}