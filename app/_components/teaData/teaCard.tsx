import Link from 'next/link';
import Image from 'next/image';
import type { Tea } from '../../_libs/microcms';
import styles from './TeaCard.module.css';

type Props = {
  tea: Tea;
};

export default function TeaCard({ tea }: Props) {
  return (
    <Link href={`/tea/${tea.slug}`} className={styles.teaCard}>
      <div className={styles.teaImageWrapper}>
        <Image
          src={tea.image.url}
          alt={tea.title}
          width={tea.image.width}
          height={tea.image.height}
          className={styles.teaImage}
        />
        <div className={styles.categoryBadge}>{tea.category}</div>
      </div>
      <div className={styles.teaContent}>
        <h3 className={styles.teaTitle}>{tea.title}</h3>
        <p className={styles.teaOrigin}>🌍 {tea.origin}</p>
        <p className={styles.teaDescription}>{tea.description}</p>
      </div>
    </Link>
  );
}