import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import PostList from '../components/posts/post-list'
import SlideHeros from '../components/heros/slide-heros'
import VideoList from '../components/videos/video-list'
import dynamic from "next/dynamic"
import OptionMenu from '../components/option-menu/OptionMenu'
import Director from '../components/director/director'
import NewsList from '../components/posts/news-list'
import SlideLogos from '../components/bottom-logos/slide-logos'
import axios, { AxiosResponse } from 'axios'
import { ContentItem } from '../models/ContentItem'

const inter = Inter({ subsets: ['latin'] })
const Map = dynamic(() => import('../components/maps/map-area'), {
    ssr: false
})

export async function getStaticProps() {
    const resPosts: AxiosResponse<any, any> = await axios.get('http://localhost:8088/laravel80-mhc9web/public/api/contents?type=Relations');
    const contents = resPosts.data;

    const resJobNews = await axios.get('http://localhost:8088/laravel80-mhc9web/public/api/contents?type=Job');
    const jobNews = resJobNews.data;

    const resPoNews = await axios.get('http://localhost:8088/laravel80-mhc9web/public/api/contents?type=Purchase2');
    const poNews = resPoNews.data;

    const resOthNews = await axios.get('http://localhost:8088/laravel80-mhc9web/public/api/contents?type=Gallery');
    const othNews = resOthNews.data;

    return {
        props: { contents, jobNews, poNews, othNews }
    }
}

export default function Home(
    { contents, jobNews, poNews, othNews }:{ contents: any[], jobNews: any[], poNews: any[], othNews: any[] }
) {
    const [posts, setPosts] = useState<ContentItem[]>([]);
    const [headLine, setHeadLine] = useState<ContentItem>();

    useEffect(() => {
        if (contents.length > 0) {
            const postLists = contents.filter((item: ContentItem, index: number) => index > 0);
            const hl = contents[0];

            setHeadLine(hl);
            setPosts(postLists)
        }
    }, [contents]);

    console.log(jobNews)

    return (
        <>
            <Head>
                <title>หน้าหลัก - Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Section 1 */}
            <SlideHeros />

            {/* Section 2 */}
            <OptionMenu />

            <section className="pb-5 pt-[1.5rem] xl:px-4">
                <div className="container mx-auto border bg-white p-4 rounded-lg overflow-hidden">

                    {/* Posts Section */}
                    <div className="flex gap-4">
                        <div className="w-full lg:w-3/4 xl:4/6">
                            <PostList contents={posts} headline={headLine!} />
                        </div>

                        <div className="lg:w-1/4 xl:w-2/6 flex flex-col pl-4 space-y-2 sm:hidden lg:block">
                            <Director />
                        </div>
                    </div>

                    {/* Videos Section */}
                    <VideoList />

                    {/* News Section */}
                    {/* {(jobNews && poNews && othNews) &&<NewsList news={[ ...jobNews, ...poNews, ...othNews ]} />} */}

                    {/* Map Section */}
                    {/* <Map /> */}

                </div>
            </section>

            {/* Bottom Section */}
            <section className="bg-white h-[240px]">
                <SlideLogos />
            </section>
        </>
    )
}
