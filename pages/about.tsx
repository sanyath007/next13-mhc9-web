import Head from "next/head"

export default function About() {
    return (
        <>
            <Head>
                <title>ประวัติความเป็นมา - Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="pb-5 pt-[1rem]">
                <div className="container mx-auto border bg-white p-4 rounded-lg overflow-hidden">
                    <h1 className="title text-3xl">ประวัติความเป็นมา</h1>

                    <hr className="my-2" />

                    <div className="structure h-full my-5">
                        <div className="container">
                            {/* ======================== Content ======================== */}
                            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FBangkok&showTitle=0&src=c2FueWF0aDAwN0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZnJlZWxhbmNlYmF5LmNvbV9uN2JsbXFmcWIxNWdobGhyaWxtMDRqcmF0MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=dGgudGgjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%23E4C441&color=%23009688" style={{ border: '0' }} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
                            {/* ======================== End Content ======================== */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
