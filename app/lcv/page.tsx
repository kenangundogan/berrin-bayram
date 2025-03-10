import Image from 'next/image';
import Link from 'next/link';

const Lcv = () => {
    return (
        <div className="content-lcv h-full">
            <div className="relative h-full max-w-[500px] m-auto bg-[#fff]">
                <div className="wrapper relative h-full p-6">
                    <div className="body relative z-10 w-full h-full flex items-center justify-center transition-all text-center">
                        <ul>
                            <li className='mb-2 pb-2 border-b border-[#FFD1D1]'>
                                <div className='font-bold mb-2'>Berrin Eser</div>
                                <Link href="tel:0546 153 74 21" className='text-sm'>0546 153 74 21</Link>
                            </li>
                            <li>
                                <div className='font-bold mb-2'>Bayram Kızıltaş</div>
                                <Link href="tel:0537 883 44 24" className='text-sm'>0537 883 44 24</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link href="/" className='absolute z-50 right-4 top-4 w-10 h-10 flex justify-center items-center'>
                    <Image src="/images/icon-close.svg" alt="Close" width={15} height={15} className='transition-all md:hover:scale-125'/>
                </Link>
            </div>
            <Image src="/images/bg/16x9/bg-1.png" alt="Berrin ve Bayram" width={1920} height={1080} className='absolute top-0 left-0 w-full h-full object-cover object-right-top opacity-40 hidden md:block' />
            <Image src="/images/bg/9x16/bg-4.png" alt="Berrin ve Bayram" width={860} height={1864} className='absolute top-0 left-0 w-full h-full object-cover object-right-top opacity-40 block md:hidden' />
        </div>
    );
}

export default Lcv;