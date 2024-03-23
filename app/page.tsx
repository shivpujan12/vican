import Image from "next/image";
import Category from "@/app/components/category";
import styles from "@/app/styles/page.module.css";
export default function Home() {
  return (
      <div className={`${styles.container}`}>
          <Category />
      </div>
  );
}

export const runtime = 'edge' // 'nodejs' (default) | 'edge'
