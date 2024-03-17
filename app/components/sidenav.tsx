'use client';
import styles from '../styles/sidebar.module.css'
import React, {useState} from "react";
import Image from 'next/image';

export default function SideNav() {
    const [showList, setShowList] = useState(true);
    return (
        <section className={`${styles.sidebarContainer}`}>
            {showList ? <div className={`text-black text-center list-none font-bold ${styles.listContainer}`}>
                <li>Categories</li>
                <li>Categories</li>
                <li>Categories</li>
                <li>Categories</li>
                <li>Categories</li>
                <li>Categories</li>
                <li>Categories</li>
            </div> : null}
            <div className={`${styles.tag2}`} onClick={() => {
                console.log('called!')
                setShowList(!showList);
            }}>
                {
                    showList ? <Image src={'/left-arrow.png'} width={20} height={20} alt={'open'}/> :
                        <Image src={'/right-arrow.png'} width={20} height={20} alt={'close'} />
                }
            </div>
        </section>
    )
}