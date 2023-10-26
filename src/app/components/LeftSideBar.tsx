import React from 'react'
import {BiHomeCircle, BiUser} from "react-icons/bi";
import {HiOutlineHashtag} from "react-icons/hi";
import {BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitter} from "react-icons/bs";
import {HiEnvelope} from "react-icons/hi2";
import Link from "next/link";

const  NAVIGATION_ITEMS  =  [
    {
        title: '',
        icon: BsTwitter
    },
    {
        title: 'Home',
        icon: BiHomeCircle
    },
    {
        title: 'Explore',
        icon: HiOutlineHashtag
    },
    {
        title: 'Notification',
        icon: BsBell
    },
    {
        title: 'Messages',
        icon: BsEnvelope
    },
    {
        title: 'Bookmarks',
        icon: BsBookmark
    },
    {
        title: 'Profile',
        icon: BiUser
    }
];
const LeftSideBar = () => {
    return (
        <section className="fixed w-[275px] flex flex-col items-stretch h-screen px-4">
            <div className='w-flex flex-col items-stretch h-full space-y-4 mt-4'>
                {
                    NAVIGATION_ITEMS.map( (item) => (
                        <Link
                            className="hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit
                            space-x-4 rounded-3xl py-2 px-6"
                            href={`/${item.title.toLocaleLowerCase}`}
                            key={item.title}>
                            <div>
                                <item.icon />
                            </div>
                            { item.title !== "Twitter" && <div>{item.title}</div> }
                        </Link>
                    ))
                }
                <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200 w-full">
                    Tweet
                </button>
            </div>
            <button className="rounded-full flex items-center m-4 bg-transparent  p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
                <div className='flex items-center space-x-2'>
                    <div className='rounded-full bg-slate-400 w-10 h-10'></div>
                    <div className='text-left text-sm'>
                        <div className='font-semibold'>Club of coders</div>
                        <div className=''>@clubofcoderscom</div>
                    </div>
                </div>
                <div><BsThreeDots /></div>
            </button>
        </section>
    )
}

export default LeftSideBar