'use client';

import { useEffect, useState } from 'react';
import TeaCard from '../_components/teaData/teaCard';
import styles from './page.module.css';
import type { Tea } from '../_libs/microcms';

type Props = {
  initialTeas: Tea[];
};

export default function TeaListClient({ initialTeas }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredTeas, setFilteredTeas] = useState<Tea[]>(initialTeas || []);

  // カテゴリー一覧を取得（初期データがない場合は空配列）
  const categories = initialTeas && initialTeas.length > 0 
    ? ['all', ...Array.from(new Set(initialTeas.map(tea => tea.category)))]
    : ['all'];

  useEffect(() => {
    if (!initialTeas || initialTeas.length === 0) return;
    
    if (selectedCategory === 'all') {
      setFilteredTeas(initialTeas);
    } else {
      setFilteredTeas(initialTeas.filter(tea => tea.category === selectedCategory));
    }
  }, [selectedCategory, initialTeas]);

  // データがない場合の表示
  if (!initialTeas || initialTeas.length === 0) {
    return (
      <div className={styles.teaListPage}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>紅茶コレクション</h1>
          <p className={styles.pageDescription}>
            世界中から集めた厳選された紅茶をご覧ください
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.noTeas}>
            <p>紅茶がまだ登録されていません。</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.teaListPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>紅茶コレクション</h1>
        <p className={styles.pageDescription}>
          世界中から集めた厳選された紅茶をご覧ください
        </p>
      </div>

      <div className={styles.content}>
        {/* カテゴリーフィルター */}
        {categories.length > 1 && (
          <div className={styles.filterSection}>
            <h2 className={styles.filterTitle}>カテゴリーで絞り込み</h2>
            <div className={styles.filterButtons}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'すべて' : category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 紅茶グリッド */}
        {filteredTeas.length === 0 ? (
          <div className={styles.noTeas}>
            <p>該当する紅茶がありません。</p>
          </div>
        ) : (
          <>
            <div className={styles.resultCount}>
              {filteredTeas.length}件の紅茶
            </div>
            <div className={styles.teaGrid}>
              {filteredTeas.map((tea) => (
                <TeaCard key={tea.id} tea={tea} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}