import "./globals.css";
import Header from './components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        {/* 全局挂载导航栏 */}
        <Header />
        {children}
      </body>
    </html>
  );
}