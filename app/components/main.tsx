import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { addToCalendar } from '../utils/addToCalendar';

const Main = () => {
  
    return (
        <div className="h-full">
            <div className="relative h-full max-w-[500px] m-auto bg-[#fff]">
                <div className="wrapper relative h-full p-6">
                    <div className="body relative z-10 w-full h-full flex flex-col items-center justify-between transition-all text-center">
                        <div className='relative z-10 text-xs text-center tracking-[3px]'>nikah törenimize davetlisiniz</div>
                        <div className='absolute top-0 w-full h-full flex justify-center items-center'>
                            <div>
                                <div className='text-xs mb-2' onClick={addToCalendar}>29 Mart 2025 13:00</div>
                                    <Image src="/images/berrin-bayram.svg" alt="Berrin ve Bayram" width={500} height={500} className='w-76 mb-4' priority />
                                <div>
                                    <ul className='flex gap-4 justify-center'>
                                        <li className='event-countdown'>
                                            <Link href="/countdown" className='w-12 h-12 flex justify-center items-center rounded-full bg-white border border-[#FFD1D1] cursor-pointer transition-all md:hover:scale-125'>
                                                <Image src="/images/icon-calendar.svg" alt="Berrin ve Bayram" width={18} height={18} className='w-auto h-auto' />
                                            </Link>
                                        </li>
                                        <li className='event-contact'>
                                            <Link href="/contact" className='w-12 h-12 flex justify-center items-center rounded-full bg-white border border-[#FFD1D1] cursor-pointer transition-all md:hover:scale-125'>
                                                <Image src="/images/icon-map.svg" alt="Berrin ve Bayram" width={18} height={18} className='w-auto h-auto' />
                                            </Link>
                                        </li>
                                        <li className='event-lcv'>
                                            <Link href="/lcv" className='w-12 h-12 flex justify-center items-center rounded-full bg-white border border-[#FFD1D1] cursor-pointer transition-all md:hover:scale-125'>
                                                <Image src="/images/icon-lcv.svg" alt="Berrin ve Bayram" width={18} height={18} className='w-auto h-auto' />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='relative z-10'>
                            <Image src="/images/yenisehir-diyarbakir.svg" alt="Berrin ve Bayram" width={200} height={200} className='m-auto mb-4 w-36' />
                            <div className='text-xs mb-4'>sizleri bu özel ve mutlu günümüzde yanımızda <br/> görmekten mutluluk duyarız</div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src="/images/bg/16x9/bg-1.png" alt="Berrin ve Bayram" width={1920} height={1080} className='absolute top-0 left-0 w-full h-full object-cover object-right-top opacity-40 hidden md:block' />
            <Image src="/images/bg/9x16/bg-1.png" alt="Berrin ve Bayram" width={860} height={1864} className='absolute top-0 left-0 w-full h-full object-cover object-right-top opacity-40 block md:hidden' />
        </div>
    );
}

export default Main;