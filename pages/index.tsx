import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { getWindowDimensions } from '../utils'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import PostList from '../components/posts/post-list'
import SlideHeros from '../components/heros/slide-heros'
import VideoList from '../components/videos/video-list'
import dynamic from "next/dynamic"

const inter = Inter({ subsets: ['latin'] })
const initialState = {
    width: 0,
    height: 0
}
const Map = dynamic(() => import('../components/maps/map-area'), {
    ssr: false
})

export default function Home() {
    const [screen, setScreen] = useState(initialState)

    useEffect(() => {
        function handleResize() {
            setScreen(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{ minHeight: '100vh' }}>
                <Navbar screenWidth={screen.width} />

                <main className="container mx-auto" style={{ minHeight: '80vh' }}>
                    {/* Section 1 */}
                    <SlideHeros />

                    {/* Section 2 */}
                    <PostList />

                    {/* Videos */}
                    <VideoList />

                    {/* Map */}
                    <Map />

                    {/* Bottom */}
                    <div className="bg-white flex items-center justify-center" style={{ margin: '20px 0', height: '150px' }}>
                        Bottom
                    </div>
                </main>

                <Footer />
            </div>
        </>
    )
}
