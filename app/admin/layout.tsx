'use client';

import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <aside className="w-64 bg-white shadow-md min-h-screen p-4">
          <div className="space-y-4">
            <div className="text-xl font-bold">Admin Dashboard</div>
            <nav className="space-y-2">
              <Link href="/admin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Overview
              </Link>
              <Link href="/admin/users" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Users
              </Link>
              <Link href="/admin/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Orders
              </Link>
              <Link href="/admin/quotes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Quotes
              </Link>
              <Link href="/admin/analytics" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Analytics
              </Link>
              <Link href="/admin/impact-tracker" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Tracker
              </Link>
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
