'use client';

import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // メニュー開閉時の処理
  useEffect(() => {
    // 背景スクロールのロックを解除（最小限の変更のため）
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black shadow-md py-4 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#top" className="text-xl font-bold text-white">MT株式会社</a>
          </div>
          {/* PC用メニュー */}
          <nav className="hidden md:flex space-x-6">
            <a href="#top" className="text-white hover:text-gray-300 transition duration-300">
              トップ
            </a>
            <a href="#message" className="text-white hover:text-gray-300 transition duration-300">
              メッセージ
            </a>
            <a href="#basic-info" className="text-white hover:text-gray-300 transition duration-300">
              会社情報
            </a>
            <a href="#services" className="text-white hover:text-gray-300 transition duration-300">
              事業内容
            </a>
            <a href="#achievements" className="text-white hover:text-gray-300 transition duration-300">
              事業実績
            </a>
            <a href="#contact" className="text-white hover:text-gray-300 transition duration-300">
              お問い合わせ
            </a>
          </nav>
          
          {/* モバイル用ハンバーガーメニューボタン（ヘッダー内に配置） */}
          <div className="md:hidden">
            <button 
              className="flex items-center justify-center w-10 h-10 text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="メニュー"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* モバイル用ドロップダウンメニュー（ヘッダーの下に表示） */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 w-64 bg-black shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out z-50 md:hidden">
          <nav className="px-4 py-3 flex flex-col space-y-3">
            <a className="block py-2 transition-colors text-white hover:text-yellow-400 font-bold" href="#top" onClick={closeMenu}>
              トップ
            </a>
            <a className="block py-2 transition-colors text-white hover:text-yellow-400" href="#message" onClick={closeMenu}>
              メッセージ
            </a>
            <a className="block py-2 transition-colors text-white hover:text-yellow-400" href="#basic-info" onClick={closeMenu}>
              会社情報
            </a>
            <a className="block py-2 transition-colors text-white hover:text-yellow-400" href="#services" onClick={closeMenu}>
              事業内容
            </a>
            <a className="block py-2 transition-colors text-white hover:text-yellow-400" href="#achievements" onClick={closeMenu}>
              事業実績
            </a>
            <a className="block py-2 transition-colors text-white hover:text-yellow-400" href="#contact" onClick={closeMenu}>
              お問い合わせ
            </a>
          </nav>
        </div>
      )}
      {/* オーバーレイ背景を削除 - 最小限のデザインに */}
    </header>
  );
};

export default Header;
