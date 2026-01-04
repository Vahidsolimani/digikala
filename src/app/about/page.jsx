// app/about/page.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gray-50"> 
      {/* هیرو بخش */}
      <div className="relative h-96 w-full overflow-hidden">
       
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">دیجی‌کالا؛ بزرگترین فروشگاه اینترنتی ایران</h1>
            <p className="text-xl md:text-2xl">
              سال‌هاست که به انتخاب اول میلیون‌ها ایرانی برای خرید آنلاین تبدیل شده‌ایم
            </p>
          </div>
        </div>
      </div>

      {/* داستان ما */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              از آغاز تا امروز
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                دیجی‌کالا در سال 1400 با هدف ایجاد تحولی اساسی در تجربه خرید آنلاین ایرانیان تأسیس شد. 
                ما باور داریم که خرید آنلاین باید ساده، مطمئن و لذت‌بخش باشد.
              </p>
              <p>
                امروز با بیش از 10 میلیون محصول در 500 دسته‌بندی مختلف، بزرگترین بازار آنلاین کشور هستیم.
                هر روز به هزاران هم‌وطن کمک می‌کنیم تا نیازهایشان را به ساده‌ترین شکل ممکن تأمین کنند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ارزش‌های ما */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ارزش‌های دیجی‌کالا
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'ارسال سریع',
                description: 'تحویل در کمتر از 24 ساعت در شهرهای بزرگ'
              },
              {
                icon: '🔒',
                title: 'ضمانت اصالت',
                description: 'گارانتی بازگشت کالا برای تمام محصولات'
              },
              {
                icon: '💎',
                title: 'تنوع بی‌نظیر',
                description: 'بیش از 10 میلیون محصول از برندهای معتبر'
              },
              {
                icon: '📱',
                title: 'تجربه کاربری',
                description: 'طراحی ساده و کاربرپسند'
              },
              {
                icon: '🤝',
                title: 'پشتیبانی حرفه‌ای',
                description: 'پشتیبانی 24 ساعته در 7 روز هفته'
              },
              {
                icon: '💰',
                title: 'قیمت مناسب',
                description: 'تضمین بهترین قیمت در بازار'
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* آمار و ارقام */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            دیجی‌کالا در یک نگاه
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: '10M+',
                label: 'محصول'
              },
              {
                number: '500+',
                label: 'دسته‌بندی'
              },
              {
                number: '20M+',
                label: 'مشتری'
              },
              {
                number: '1000+',
                label: 'همکار'
              }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            به خانواده بزرگ دیجی‌کالا بپیوندید
          </h2>
          <p className="text-xl mb-8">
            همین حالا می‌توانید تجربه خرید متفاوت را آغاز کنید
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
           <Link href={'/'}> شروع خرید </Link>
          </button>
        </div>
      </section>
    </div>
  );
}