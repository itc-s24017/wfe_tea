import { getTeaList } from '../_libs/microcms';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const revalidate = 60;

export default async function TypesPage() {
  const teas = await getTeaList();
  
  // カテゴリー別にグループ化
  const teaByCategory = teas.reduce((acc, tea) => {
    if (!acc[tea.category]) {
      acc[tea.category] = [];
    }
    acc[tea.category].push(tea);
    return acc;
  }, {} as Record<string, typeof teas>);

  const categories = Object.keys(teaByCategory);

  return (
    <div className={styles.typesPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>紅茶の種類</h1>
        <p className={styles.pageDescription}>
          カテゴリー別に紅茶をご覧いただけます
        </p>
      </div>

      <div className={styles.content}>
        {categories.length === 0 ? (
          <div className={styles.noData}>
            <p>紅茶がまだ登録されていません。</p>
          </div>
        ) : (
          categories.map((category) => (
            <section key={category} className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              <div className={styles.teaGrid}>
                {teaByCategory[category].map((tea) => (
                  <Link 
                    href={`/tea/${tea.slug}`} 
                    key={tea.id}
                    className={styles.teaCard}
                  >
                    <div className={styles.teaImageWrapper}>
                      <Image
                        src={tea.image.url}
                        alt={tea.title}
                        width={tea.image.width}
                        height={tea.image.height}
                        className={styles.teaImage}
                      />
                    </div>
                    <div className={styles.teaInfo}>
                      <h3 className={styles.teaTitle}>{tea.title}</h3>
                      <p className={styles.teaOrigin}>🌍 {tea.origin}</p>
                      <p className={styles.teaDescription}>{tea.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}