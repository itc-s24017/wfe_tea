/** @type {import('next').NextConfig} */
const nextConfig = {
  // その他の設定...
  images: {
    // 許可する外部ホスト名（ドメイン）をここに記述します
    domains: [
      'images.microcms-assets.io', // <<< これを追加
      // 他に使用しているドメインがあれば追加
    ],
  },
};


export default nextConfig;
