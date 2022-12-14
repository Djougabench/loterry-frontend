import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import ManualHeader from "../Components/ManualHeader"
import Header from "../Components/Header"
import LoterryEntrance from '../Components/LotteryEntrance'
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*  <ManualHeader/>*/} <Header />
            <LoterryEntrance/>
        </div>
    )
}
