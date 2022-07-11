import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <meta
                    name='description'
                    content='Learn how to build a personal website using Next.js'
                />
            </Head>
            {children}
        </div>
    )
}