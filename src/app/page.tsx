import React from 'react'
import LeftSideBar from "@/app/components/LeftSideBar";

export default function Home() {
    return (
        <div className="w-full h-full flex justify-center items-center relative bg-black">
            <div className="max-w-screen-lg w-full h-full flex relative">
                <LeftSideBar />
                <main className='ml-[275px] flex w-[600] x-full flex-col border-r border-gray-600'>
                    <h1 className='text-3xl font-bold'>Home</h1>
                </main>
                <section></section>
            </div>
        </div>
    )
}
