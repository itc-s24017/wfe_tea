import Image from "next/image";
import { TEAS_LIST_LIMIT } from "../_constants";
import styles from "./page.module.css";

export default function Tea() {
  const data = await getTeasList({ limit: TEAS_LIST_LIMIT });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((tea) => (
            <li key={tea.id} className={styles.list}>
              <Image
                src={tea.image.url}
                alt=""
                width={tea.image.width}
                height={tea.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{tea.name}</dt>
                <dd className={styles.position}>{tea.position}</dd>
                <dd className={styles.profile}>{tea.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
