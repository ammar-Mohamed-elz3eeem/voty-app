import React from 'react'
import styles from '@/app/home.module.css';
import TopNav from './TopNav';
import { DMSerifDisplay, outfit } from '@/app/fonts';

function Header() {
  return (
    <div className="flex items-center justify-end">
      <div className="p-10">
        <TopNav />
      </div>
    </div>
  )
}

export default Header