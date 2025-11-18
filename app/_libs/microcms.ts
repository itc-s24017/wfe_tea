import { createClient } from 'microcms-js-sdk';

// 紅茶データの型定義
export type Tea = {
  id: string;
  title: string;
  slug: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  description: string;
  origin: string;
  flavor: string;
  brewingMethod: string;
  temperature: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

// microCMSクライアントの作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

// 紅茶一覧を取得
export const getTeaList = async () => {
  try {
    const data = await client.get({
      endpoint: 'tea',
    });
    return data.contents as Tea[];
  } catch (error) {
    console.error('紅茶一覧の取得に失敗しました:', error);
    return [];
  }
};

// 紅茶詳細を取得
export const getTeaDetail = async (slug: string) => {
  try {
    const data = await client.get({
      endpoint: 'tea',
      queries: {
        filters: `slug[equals]${slug}`,
      },
    });
    return data.contents[0] as Tea;
  } catch (error) {
    console.error('紅茶詳細の取得に失敗しました:', error);
    return null;
  }
};