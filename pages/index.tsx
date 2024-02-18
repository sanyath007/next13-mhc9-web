// import { Suspense } from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import PostList from '../components/posts/post-list'
import SlideHeros from '../components/heros/slide-heros'
import VideoList from '../components/videos/video-list'
import dynamic from "next/dynamic"
import OptionMenu from '../components/option-menu/OptionMenu'
import Director from '../components/director/director'
// import NewsList from '../components/posts/news-list'
import SlideLogos from '../components/bottom-logos/slide-logos'
// import Loading from '../components/Loading'
import { Post } from '../models/Post'
import { getPosts } from '../lib/api'

// const inter = Inter({ subsets: ['latin'] })
const Map = dynamic(() => import('../components/maps/map-area'), {
    ssr: false
})

export async function getStaticProps() {
    const { data } = await getPosts();

    const posts = data ? data.filter((item: Post, index: number) => index > 0) : [];
    const headline = data ? data[0] : null;

    return {
        props: { posts, headline }
    }
}

export default function Index({ posts, headline }: { posts: any[], headline: any }) {
    return (
        <>
            <Head>
                <title>หน้าหลัก - Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Hero Section */}
            <section className="hero">
                {/* Slide Heros */}
                <SlideHeros />

                {/* Option Menus */}
                <OptionMenu />
            </section>

            {/* Contents Section */}
            <section className="pb-5 pt-[1.5rem] xl:px-4">
                <div className="container mx-auto border bg-white p-4 rounded-lg overflow-hidden">
                    {/* Posts */}
                    <div className="row">
                        <div className="col-md-9">
                            <PostList contents={posts} headline={headline!} />
                        </div>

                        <div className="col-md-3">
                            <Director />
                        </div>
                    </div>

                    {/* Videos */}
                    <VideoList />

                    {/* News */}
                    {/* {(jobNews && poNews && othNews) &&<NewsList news={[ ...jobNews, ...poNews, ...othNews ]} />} */}

                    {/* Map */}
                    {/* <Map /> */}
                </div>
            </section>

            {/* Logos Section */}
            <section className="bg-white h-[240px]">
                <SlideLogos />
            </section>
        </>
    )
}
