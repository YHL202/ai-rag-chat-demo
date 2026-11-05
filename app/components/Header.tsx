'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: '首页', path: '/' },
    { name: 'AI问答', path: '/chat' },
    { name: '非遗名录', path: '/list' },
    { name: '文创好物', path: '/goods' },
    { name: '项目介绍', path: '/intro' },
  ];

  return (
    <header>
      <div className="logo">黑龙江非遗AI问答系统</div>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={pathname === item.path ? 'active' : ''}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}