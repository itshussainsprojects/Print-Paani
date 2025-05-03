'use client';

import Link from "next/link"
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Header() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if user has admin role (you can implement your own admin check logic)
        const isUserAdmin = user.email === 'admin@printpaani.com'; // Replace with your admin check
        setIsAdmin(isUserAdmin);
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          PrintPaani
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-blue-600">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600">
                Blog
              </Link>
            </li>
            {isAdmin && (
              <li>
                <Link href="/admin" className="flex items-center hover:text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1">Admin</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

