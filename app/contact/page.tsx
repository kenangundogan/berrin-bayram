import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {

    return (
        <div className="content-contact h-full">
            <div className="relative h-full max-w-[500px] m-auto bg-[#fff]">
                <div className="wrapper relative h-full p-6">
                    <div className="body relative z-10 w-full h-full flex items-center justify-center transition-all text-center">
                        <div>
                            <div className='font-bold'>Yenişehir Belediyesi Nikah Salonu</div>
                            <div className='text-sm mb-1'>Fabrika Mahallesi 763. Sk. No: 3 <br/> Yenişehir / Diyarbakır</div>
                            <Link target='_blank' href="https://maps.app.goo.gl/ZZVraePMT85AH7E39" className='text-xs underline'>Konum için tıklayınız</Link>
                        </div>
                    </div>
                </div>
                <Link href="/" className='absolute z-50 right-4 top-4 w-10 h-10 flex justify-center items-center'>
                    <Image src="/images/icon-close.svg" alt="Close" width={15} height={15} className='transition-all md:hover:scale-125'/>
                </Link>
            </div>
            <Image src="/images/bg/16x9/bg-1.png" alt="Berrin ve Bayram" width={1920} height={1080} className='absolute top-0 left-0 w-full h-full object-cover object-right-top opacity-40 hidden md:block' />
            <Image src="/images/bg/9x16/bg-3.png" alt="Berrin ve Bayram" width={860} height={1864} className='absolute top-0 left-0 w-full h-full object-cover object-right-top opacity-40 block md:hidden' />
        </div>

    );
}

export default Contact;