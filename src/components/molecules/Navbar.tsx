import { Button } from '@/src/components/ui/button';
import Link from 'next/link';
import Logo from '../shared/Logo';

const NavBar = () => {
    return (
        <nav>
            <div className="px-3  py-4 flex justify-between items-center h-fit text-white bg-primary relative shadow-sm" role="navigation">
                {/* Left Section for Logo */}
                <div className="">
                    <Logo />
                </div>

                {/* Center Section for Links */}
                <div className='hidden md:flex'>
                    <div className=' antialiased'>
                        <Link href="/tutorial">
                            <Button variant='link' className='text-white ' size='sm'>How does Brickz work?</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant='link' className='text-white' size='sm'>Contact us</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
