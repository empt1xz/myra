import { Avatar, AvatarFallback } from "../ui/avatar";
import Link from 'next/link'


export default function Header() {
    return (
        <>

            <header className="flex top-0 sticky h-20 items-center justify-around w-full bg-[#121212] text-white">

                <Link href="/" className="flex flex-row items-center space-x-4">

                    <Avatar className="border border-green-600 border-4">

                        <AvatarFallback> M </AvatarFallback>

                    </Avatar>

                    <h1 className="text-3xl font-bold">
                        Myra Bot
                    </h1>


                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link href="/">Features</Link>
                        </li>
                        <li>
                            <Link href="/">Docs</Link>
                        </li>
                        <li>
                            <Link href="/">Sobre a Myra</Link>
                        </li>
                        <li>
                            <Link href="/">Team</Link>
                        </li>
                    </ul>
                </nav>

            </header>


        </>
    )
}
