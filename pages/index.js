import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import All from "../components/All";

export default function Home() {
  return (
    <div className="w-full">
      <All />
    </div>
  );
}
