"use client"

import { useEffect, useState } from 'react';
import { addToCalendar } from '../utils/addToCalendar';
import Image from 'next/image';
import Link from 'next/link';

function CountDown() {
    const [time, setTime] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const countdownDate = new Date("03/29/2025").getTime();
        console.log(countdownDate);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime({
                days: days.toString().padStart(2, '0'),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0'),
            });

            if (distance < 0) {
                clearInterval(interval);
                setTime({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00',
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="content-countdown h-full">
            <div className="relative h-full max-w-[500px] m-auto bg-[#fff]">
                <div className="wrapper relative h-full p-6">
                    <div className="body relative z-10 w-full h-full flex items-center justify-between transition-all text-center">
                        <div className="w-full min-w-60 text-center" onClick={addToCalendar}>
                            <div className="w-full flex flex-wrap justify-center gap-4 py-4 min-h-16">
                                <div className="flex flex-col justify-center items-center py-4 border-r border-[#FFD1D1] pr-4">
                                    <span className="text-3xl font-bold">{time.days}</span>
                                    <span className="text-xs">Gün</span>
                                </div>
                                <div className="flex flex-col justify-center items-center py-4 border-r border-[#FFD1D1] pr-4">
                                    <span className="text-3xl font-bold">{time.hours}</span>
                                    <span className="text-xs">Saat</span>
                                </div>
                                <div className="flex flex-col justify-center items-center py-4 border-r border-[#FFD1D1] pr-4">
                                    <span className="text-3xl font-bold">{time.minutes}</span>
                                    <span className="text-xs">Dakika</span>
                                </div>
                                <div className="flex flex-col justify-center items-center py-4">
                                    <span className="text-3xl font-bold">{time.seconds}</span>
                                    <span className="text-xs">Saniye</span>
                                </div>
                            </div>
                            <button className="w-full flex-none text-xs underline">Takvime hatırlatıcı olarak ekle</button>
                        </div>
                    </div>
                </div>
                <Link href="/" className='absolute z-50 right-4 top-4 w-10 h-10 flex justify-center items-center'>
                    <Image src="/images/icon-close.svg" alt="Close" width={15} height={15} className='transition-all md:hover:scale-125'/>
                </Link>
            </div>
            <Image src="/images/bg/16x9/bg-1.png" alt="Berrin ve Bayram" width={1920} height={1080} className='absolute top-0 left-0 w-full h-full object-cover object-right-top opacity-40 hidden md:block' />
            <Image src="/images/bg/9x16/bg-2.png" alt="Berrin ve Bayram" width={860} height={1864} className='absolute top-0 left-0 w-full h-full object-cover object-right-top opacity-40 block md:hidden' />
        </div>
    );
}

export default CountDown;