"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTelegramPlane, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#700240] text-white">
      {/* بخش بالایی فوتر */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* بخش خدمات مشتریان */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b pb-2 border-gray-500">خدمات مشتریان</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-200 transition">پاسخ به پرسش‌های متداول</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">رویه بازگرداندن کالا</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">شرایط استفاده</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">حریم خصوصی</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">گزارش باگ</Link></li>
            </ul>
          </div>    

          {/* بخش راهنمای خرید */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b pb-2 border-gray-500">راهنمای خرید</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-200 transition">نحوه ثبت سفارش</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">رویه ارسال سفارش</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">شیوه‌های پرداخت</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition">پرسش‌های متداول</Link></li>
            </ul>
          </div>

          {/* بخش تماس با ما */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b pb-2 border-gray-500">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <span>ایمیل: vahidsolimani5689@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <span>تلفن: 09020065689 </span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>آدرس: تهران، خیابان آزادی، خیابان حبیب‌الله، پلاک ۱۲</span>
              </li>
            </ul>
          </div>

          {/* بخش همراه ما باشید */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b pb-2 border-gray-500">همراه ما باشید</h3>
            <div className="flex gap-4">
              <Link href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition">
                <FaTelegramPlane size={20} />
              </Link>
              <Link href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition">
                <FaYoutube size={20} />
              </Link>
            </div>
            
            {/* لوگوهای اطمینان */}
            <div className="pt-4">
            </div>
          </div>
        </div>
      </div>
      <div className="b-[#700240] py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>
            فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
          </p>
          <p className="mt-2">
            دیجی‌کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل کلیدی، پرداخت در محل، تحویل اکسپرس و ضمانت بازگشت کالا، موفق شده تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود.
          </p>
          <p className="mt-4 text-gray-400">
            © 1404 - کلیه حقوق برای دیجی‌کالا محفوظ است.
          </p>
          <p className="mt-4 text-gray-400">
           توسعه یافته توسط وحید سلیمانی نیا
          </p>
        </div>
      </div>
    </footer>
  );
}