'use client';

import React from 'react';
import Image from 'next/image';

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow">
      {/* ヒーローセクション */}
      <section id="top" className="relative text-white flex items-center justify-center" style={{height: '66vh'}}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/top.jpg"
            alt="MT株式会社"
            fill
            style={{objectFit: 'cover'}}
            priority
          />
          <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              夢を実現する、<br className="hidden md:block" />成長へのパートナー
            </h1>
          </div>
        </div>
      </section>
      
      {/* トップメッセージセクション */}
      <section id="message" className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-1">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 p-8 border-l-4 border-blue-600 bg-white shadow-lg rounded-lg">
              <div className="text-center">
                <p className="text-xl text-gray-700 mb-4">
                  神奈川で事業の立直しや収益化を中心とした経営コンサルタント・COO代行会社です。
                </p>
                <p className="text-xl text-gray-700">
                  全国でも支援させていただき、お客様に寄り添い、共に乗り越えていきます。
                </p>
              </div>
            </div>
            
            <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-white shadow-lg rounded-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">CORPORATE MESSAGE</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="order-last md:order-first space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <span className="text-xl font-semibold text-blue-800 block mb-4">成長し続けれるように、価値を提供し続けます</span>
                      当社は、御社の夢と成長と課題解決を実現するためのパートナーです。今までの経験から独自の視点で御社のビジネスを深く理解し、具体的な戦略と実行計画を提案します。当社はあなたのビジョンを実現するために必要な知識、ツール、サポートを提供します。御社の成功は当社の成功です。当社は御社と共に歩みます。
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <span className="text-xl font-semibold text-blue-800 block mb-4">不安を払拭するお手伝いはお任せ下さい</span>
                      ビジネスや人生は不確実性に満ちていますが、当社は御社の不安を払拭するサポートを提供します。いかに御社の気持ちに寄り添うことが大事か、その気持ちが信頼関係を構築していきます。リスク管理から、戦略立案まで、一貫したサポートを通じて、ビジネスや人生のあらゆる段階での不安を解消できるように致します。当社と共に、確かな一歩を踏み出しましょう。御社の成功と成長を全力でサポートします。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center order-first md:order-last">
                  <img src="/message.jpg" alt="代表メッセージ" className="rounded-lg shadow-lg max-h-[500px] w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 事業内容セクション */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-1">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">SERVICE</h2>
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <div className="text-center">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  経営コンサルタント、COO代行でお客様のお困りごとを支援致します。
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  内容としては赤字事業立直し、事業戦略、業務効率化、組織構築、DX、KPI管理など幅広いお客様の経営課題でのお困りごとを支援致します。
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  経験豊富かつ丁寧な対応を行い、満足いただけるサービスを提供します。
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  お悩み解消のパートナーとしてお力添えします。
                </p>
              </div>
            </div>
            
            <div className="space-y-16">
              {/* 経営コンサルタント */}
              <div id="consultant" className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row w-full overflow-hidden">
                  <div className="w-full md:w-1/3 overflow-hidden order-first">
                    <div className="h-64 md:h-full w-full">
                      <img src="/service1.jpg" alt="経営コンサルタント" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">① 経営コンサルタント</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      当社は、中小企業や地方に根ざした企業が持つ固有の課題に対して、実践的なソリューションを提供します。
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      財務改善から運営効率化、市場にフィットした戦略まで、あらゆる面でお客様のビジネスをサポートします。
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                      <li>赤字事業の立直し支援</li>
                      <li>経営計画の策定と実行</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* COO代行 */}
              <div id="coo" className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row w-full overflow-hidden">
                  <div className="w-full md:w-2/3 p-8 order-last md:order-first">
                    <h3 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">② COO代行（社長・幹部の右腕）</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      特に中小企業や製造業において、日々の運営管理に関する負担は大きな課題となります。
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      当社のCOO代行は、経営層の一員として直接事業に参加し、運営の全般を支援します。
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                      <li>運営管理の最適化</li>
                      <li>人材管理と育成</li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/3 overflow-hidden order-first md:order-last">
                    <div className="h-64 md:h-full w-full">
                      <img src="/service2.jpg" alt="COO代行サービス" className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* ビジネスの人生設計コーチング */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row w-full overflow-hidden">
                  <div className="w-full md:w-1/3 overflow-hidden order-first">
                    <div className="h-64 md:h-full w-full">
                      <img src="/service3.jpg" alt="ビジネスコーチング" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">③ ビジネスの人生設計コーチング</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      ビジネスパーソンとしてのキャリアと個人の人生設計を調和させるためのコーチングを提供します。
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      仕事とプライベートのバランス、キャリア目標の設定、ストレス管理などをサポートします。
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                      <li>ワークライフバランスの改善</li>
                      <li>キャリア計画の策定と実行</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 事業実績セクション */}
      <section id="achievements" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-1">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-black">WORKS</h2>
            
            {/* 得意分野カード */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">得意分野</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">中小企業の事業再建と成長促進</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  弊社の得意分野は赤字事業立直しです。また幅広い経営課題に対しても一緒に寄り添って問題解決をしていきます。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  これまで多くのお客様から信頼をいただいてまいりました。特に製造業の中小企業様においては実績があり、ご好評をいただいています。
                </p>
              </div>
            </div>
            
            {/* 事業実績事例 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2">事業実績</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-400 relative overflow-hidden">
                  <div className="absolute inset-0 z-0 opacity-80">
                    <img src="/work1.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10">
                    <div style={{backgroundColor: 'rgba(29, 78, 216, 0.7)'}} className="shadow-md rounded-t-lg mb-4">
                      <h4 className="text-xl font-semibold text-white border-b border-blue-200 pb-2 px-3 py-2">支援先①：樹脂製造会社</h4>
                    </div>
                    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} className="grid md:grid-cols-2 gap-6 mb-6 p-4 rounded-lg">
                      <div className="flex items-center">
                        <span className="font-medium text-blue-800 mr-2">従業員：</span>
                        <span className="text-gray-700">約20名</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-blue-800 mr-2">売上：</span>
                        <span className="text-gray-700">約20億円</span>
                      </div>
                    </div>
                    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} className="p-4 rounded-lg">
                      <h5 className="font-medium text-blue-700 mb-2">課題と支援内容</h5>
                      <p className="text-gray-700 leading-relaxed">
                        新型コロナウイルス流行以前から3年連続で年間営業利益が約4,000万円の赤字という厳しい状況にありました。当社は原材料高騰の市場環境下で、適正な価格転化の実現とコスト構造の根本的見直しを支援しました。経営資源の最適化と業務プロセスの改善により、約2年間で営業利益を黒字化することに成功しました。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-400 relative overflow-hidden">
                  <div className="absolute inset-0 z-0 opacity-80">
                    <img src="/work2.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10">
                    <div style={{backgroundColor: 'rgba(29, 78, 216, 0.7)'}} className="shadow-md rounded-t-lg mb-4">
                      <h4 className="text-xl font-semibold text-white border-b border-blue-200 pb-2 px-3 py-2">支援先②：健康関係会社</h4>
                    </div>
                    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} className="grid md:grid-cols-2 gap-6 mb-6 p-4 rounded-lg">
                      <div className="flex items-center">
                        <span className="font-medium text-blue-800 mr-2">従業員：</span>
                        <span className="text-gray-700">約30名</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-blue-800 mr-2">売上：</span>
                        <span className="text-gray-700">約7億円</span>
                      </div>
                    </div>
                    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} className="p-4 rounded-lg">
                      <h5 className="font-medium text-blue-700 mb-2">課題と支援内容</h5>
                      <p className="text-gray-700 leading-relaxed">
                        年間営業利益が赤字から実質ゼロの状態が続いていました。営業体制が脆弱で、受動的な客先対応が中心という課題がありました。当社は財務分析から商品戦略、組織体制の再構築まで包括的な改革を支援し、新たな顧客獲得プロセスの確立と社内研修の充実により、約2年で年間利益2,000万円の黒字化を実現しました。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-400 relative overflow-hidden">
                  <div className="absolute inset-0 z-0 opacity-80">
                    <img src="/work3.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10">
                    <div style={{backgroundColor: 'rgba(29, 78, 216, 0.7)'}} className="shadow-md rounded-t-lg mb-4">
                      <h4 className="text-xl font-semibold text-white border-b border-blue-200 pb-2 px-3 py-2">支援先③：資材卸会社</h4>
                    </div>
                    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} className="grid md:grid-cols-2 gap-6 mb-6 p-4 rounded-lg">
                      <div className="flex items-center">
                        <span className="font-medium text-blue-800 mr-2">従業員：</span>
                        <span className="text-gray-700">約10名</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-blue-800 mr-2">売上：</span>
                        <span className="text-gray-700">約5億円</span>
                      </div>
                    </div>
                    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} className="p-4 rounded-lg">
                      <h5 className="font-medium text-blue-700 mb-2">課題と支援内容</h5>
                      <p className="text-gray-700 leading-relaxed">
                        年間営業利益はわずかな黒字で推移していましたが、利益率の改善余地が大きい状況でした。当社は市場分析に基づく価格戦略の見直しと商品構成の最適化を支援しました。また、調達ルートの見直しと在庫管理の効率化を実現し、コスト削減と売上向上の両面から、全体の利益率を5％以上向上させることに成功しました。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-400 relative overflow-hidden">
                  <div className="absolute inset-0 z-0 opacity-80">
                    <img src="/work4.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10">
                    <div style={{backgroundColor: 'rgba(29, 78, 216, 0.7)'}} className="shadow-md rounded-t-lg mb-4">
                      <h4 className="text-xl font-semibold text-white border-b border-blue-200 pb-2 px-3 py-2">支援先④：製造会社</h4>
                    </div>
                    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} className="grid md:grid-cols-2 gap-6 mb-6 p-4 rounded-lg">
                      <div className="flex items-center">
                        <span className="font-medium text-blue-800 mr-2">従業員：</span>
                        <span className="text-gray-700">約100名</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-blue-800 mr-2">売上：</span>
                        <span className="text-gray-700">約10億円</span>
                      </div>
                    </div>
                    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} className="p-4 rounded-lg">
                      <h5 className="font-medium text-blue-700 mb-2">課題と支援内容</h5>
                      <p className="text-gray-700 leading-relaxed">
                        年間約2,000万円の営業赤字と債務超過の状況にありました。当社は全社的な経営改善計画の立案と実行を包括的に支援しました。生産プロセスの最適化、品質管理体制の強化、販売チャネルの見直しを通じて、わずか1年で営業利益を黒字化し、さらに約2年で債務超過の解消に成功しました。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 会社情報セクション */}
      <section id="basic-info" className="py-16">
        <div className="container mx-auto px-1">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">COMPANY INFO</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4 items-center border-b border-gray-200 pb-4">
                  <div className="font-semibold text-gray-700">会社名</div>
                  <div className="md:col-span-2 text-black">MT株式会社</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 items-center border-b border-gray-200 pb-4">
                  <div className="font-semibold text-gray-700">所在地</div>
                  <div className="md:col-span-2 text-black">〒220-0011　神奈川県横浜市西区高島二丁目11番2号スカイメナー横浜519</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 items-start border-b border-gray-200 pb-4">
                  <div className="font-semibold text-gray-700">事業内容</div>
                  <div className="md:col-span-2 text-black">
                    <ul className="space-y-1">
                      <li>経営コンサルタント</li>
                      <li>COO代行</li>
                      <li>起業家支援</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 items-center border-b border-gray-200 pb-4">
                  <div className="font-semibold text-gray-700">得意分野</div>
                  <div className="md:col-span-2 text-black">中小企業の事業再建と成長促進</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 items-start">
                  <div className="font-semibold text-gray-700">取引実績</div>
                  <div className="md:col-span-2 text-black">
                    <ul className="grid grid-cols-1 gap-2 text-black">
                      <li>樹脂製造会社</li>
                      <li>飲料卸会社</li>
                      <li>貿易会社</li>
                      <li>製造会社</li>
                      <li>資材卸会社</li>
                      <li>健康関係会社</li>
                      <li>漢方会社</li>
                      <li>IT会社</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* お問い合わせセクション */}
      <section id="contact" className="py-16 bg-white text-black">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">CONTACT</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
            経営課題や業務改善についてのご相談など、<br className="hidden md:block" />お気軽にメールでお問い合わせください。
          </p>
          <p className="text-2xl font-semibold text-black">
            info@mt-value.com
          </p>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
