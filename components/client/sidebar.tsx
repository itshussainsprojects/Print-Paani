import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingCart, User, LogOut } from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">PrintPaani</h1>
      </div>
      <nav className="mt-8">
        <Link
          href="/client"
          className={`flex items-center px-6 py-3 ${
            isActive('/client') ? 'bg-gray-100 text-gray-900' : 'text-gray-600'
          }`}
        >
          <Home className="w-5 h-5 mr-3" />
          Overview
        </Link>
        <Link
          href="/client/orders"
          className={`flex items-center px-6 py-3 ${
            isActive('/client/orders') ? 'bg-gray-100 text-gray-900' : 'text-gray-600'
          }`}
        >
          <ShoppingCart className="w-5 h-5 mr-3" />
          Orders
        </Link>
        <Link
          href="/client/profile"
          className={`flex items-center px-6 py-3 ${
            isActive('/client/profile') ? 'bg-gray-100 text-gray-900' : 'text-gray-600'
          }`}
        >
          <User className="w-5 h-5 mr-3" />
          Profile
        </Link>
        <button
          onClick={() => {
            // Handle logout
            window.location.href = '/login';
          }}
          className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 w-full"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </nav>
    </div>
  );
} 