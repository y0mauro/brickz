import { Button } from '@/src/components/ui/button';
import Link from 'next/link';
import Logo from './ui/Logo';

const NavBar = () => {
    return (
        <nav>
            <div className="flex justify-between items-center h-20 text-white bg-primary relative shadow-sm" role="navigation">
                {/* Left Section for Logo */}
                <div className="flex-1">
                    <Logo />
                </div>

                {/* Center Section for Links */}
                <div className='flex-1 flex justify-center hidden md:flex'>
                    <div className='space-x-4 antialiased'>
                        <Link href="/tutorial">
                            <Button variant='link' className='text-white ' size='sm'>How does Brickz work?</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant='link' className='text-white' size='sm'>Contact us</Button>
                        </Link>
                    </div>
                </div>
                <div className="flex-1"></div>
            </div>
        </nav>
    );
}

export default NavBar;
