// 例: app/brewing/page.tsx (サーバーコンポーネント側)

import { client } from '../_libs/microcms'; // microCMSクライアント
import { Tea } from '../_libs/microcms';
import TeaListClient from '@/app/tea/TeaListClient'; // クライアントコンポーネント

// microCMSからデータを取得する関数 (仮)
async function getTeasData(): Promise<Tea[]> {
  const data = await client.get({
    endpoint: 'brewing', // microCMSのエンドポイント名に合わせてください
    // クエリパラメータ: 'fields'に 'brewing' を追加することで、このフィールドも取得できます。
    queries: { fields: 'id,name,category,brewing,other_fields_...' }, 
  });
  return data.contents;
}

export default async function BrewingPage() {
  // サーバー側でデータフェッチを実行
  let initialTeas: Tea[] = [];
  try {
    initialTeas = await getTeasData();
  } catch (error) {
    console.error('Failed to fetch teas data:', error);
    // エラー時は空配列を渡す
    initialTeas = []; 
  }

  return (
    // クライアントコンポーネントにデータを渡す
    <TeaListClient initialTeas={initialTeas} />
  );
}