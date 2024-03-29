import Head from "next/head"

export default function Executives() {
    return (
        <>
            <Head>
                <title>ผู้บริหารหน่วยงาน - Executives</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="pb-5 pt-[1rem] xl:px-4">
                <div className="container mx-auto border bg-white p-4 rounded-lg overflow-hidden">
                    <h1 className="title text-3xl">ผู้บริหารหน่วยงาน</h1>

                    <hr className="my-2" />

                    <div className="vision min-h-[400px] mb-10">
                        <div className="flex flex-col justify-between items-center py-5">
                            <div className="flex flex-col items-center justify-center text-center mb-[40px]">
                                <img src="./executive-01.png" alt="executive-pic" className="w-[240px]" />
                                <div>
                                    <h3 className="text-2xl font-bold">นางสาวศิริลักษณ์ แก้วเกียรติพงษ์</h3>
                                    <h4 className="text-xl">ผู้อำนวยการศูนย์สุขภาพจิตที่ 9</h4>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center gap-10 w-4/5">
                                <div className="w-[400px] flex flex-col items-center justify-center text-center">
                                    <img src="./executive-02.png" alt="executive-pic" className="w-[240px]" />
                                    <div>
                                        <h3 className="text-xl font-bold">นางณัฏฐา ศิริผล</h3>
                                        <h4 className="text-lg">หัวหน้ากลุ่มงานอำนวยการ</h4>
                                    </div>
                                </div>
                                <div className="w-[400px] flex flex-col items-center justify-center text-center">
                                    <img src="./executive-03.png" alt="executive-pic" className="w-[240px]" />
                                    <div>
                                        <h3 className="text-xl font-bold">นางภัทรานิษฐ์ ทองตันไตรย์</h3>
                                        <h4 className="text-lg">หัวหน้ากลุ่มงานวิชาการสุขภาพจิต</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
