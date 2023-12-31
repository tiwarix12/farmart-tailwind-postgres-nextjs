
'use client'
import { Toaster } from './components/toaster';
import {useEffect, useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import Login from './login/page';
import SignOut from './components/sign-out';
import { getSession } from 'next-auth/react';
import {useRouter} from 'next/navigation'

export default function IndexPage() {
  const router = useRouter();
  useEffect(() => {
    const checkAuthentication = async () => {
      if (typeof window === 'undefined') {
        return;
      }

      const session = await getSession();
      if (!session) {
        console.error('Not authenticated');
        router.push('/login');
      }
    };
        checkAuthentication();
     
  }, []);
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Toaster />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ justifyContent: 'center' }}>
          Welcome to the Farmart Dropbox
        </h1>
        <div>
          <img src="/favicon.ico" alt="favicon" style={{ padding: '100px' }} />
        </div>
      </div>
    </main>
  );
}
