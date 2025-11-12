'use client';

import React, { useState, useEffect } from 'react';
import { Coffee, Clock, ArrowRight } from 'lucide-react';
import { Tea } from '@/_constants';
import { fetchTeas } from '@/_libs/microcms';
import Link from 'next/link';

const TeaList: React.FC = () => {
  const [teas, setTeas] = useState<Tea[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeas = async () => {
      try {
        const data = await fetchTeas();
        setTeas(data);
      } catch (error) {
        console.error('Failed to fetch teas:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTeas();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Coffee className="w-16 h-16 text-teal-600 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <div className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0a1628 0%, #134e4a 50%, #1e3a8a 100%)',
          }}
        >
          {/* 斜めのオーバーレイ */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-600/20"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
            }}
          />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            紅茶の力で世界を変える
          </h1>
          <p className="text-xl md:text-2xl text-teal-100">
            私たちは市場をリードしているグローバルカンパニーです。
          </p>
        </div>
      </div>

      {/* ナビゲーション */}
      <nav className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              simple
            </Link>
            <div className="flex gap-8">
              <Link href="/news" className="text-gray-600 hover:text-teal-600 transition-colors">
                ニュース
              </Link>
              <Link href="/members" className="text-teal-600 font-medium">
                メンバー
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tea Selection</h2>
          <div className="flex items-center justify-center gap-4 text-gray-500">
            <span className="text-sm">━━</span>
            <span className="text-lg">紅茶</span>
            <span className="text-sm">━━</span>
          </div>
        </div>

        <div className="space-y-12">
          {teas.map((tea, index) => (
            <div 
              key={tea.id}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/3">
                <div className="aspect-square bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-8xl">{tea.image}</span>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {tea.title}
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    {tea.category}
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  {tea.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">産地</p>
                    <p className="font-medium text-gray-800">{tea.origin}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">抽出温度</p>
                    <p className="font-medium text-gray-800">{tea.brewTemp}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">抽出時間</p>
                    <p className="font-medium text-gray-800">{tea.brewTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">香味</p>
                    <p className="font-medium text-gray-800">{tea.flavor}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* もっと見るボタン */}
        <div className="flex justify-center mt-16">
          <button className="bg-gray-800 text-white px-12 py-4 rounded hover:bg-gray-700 transition-colors flex items-center gap-2 group">
            <span>もっと見る</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-50 border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-center gap-8 text-sm text-gray-600">
            <Link href="/news" className="hover:text-teal-600 transition-colors">
              ニュース
            </Link>
            <Link href="/members" className="hover:text-teal-600 transition-colors">
              メンバー
            </Link>
            <Link href="/contact" className="hover:text-teal-600 transition-colors">
              お問い合わせ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeaList;