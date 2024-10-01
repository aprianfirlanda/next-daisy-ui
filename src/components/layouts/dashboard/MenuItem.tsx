import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    Icon: React.ElementType;
    name: string;
    url: string;
}

function Sidebar({ Icon, name, url }: Props) {
    const pathname = usePathname();

    const isActive = pathname === url;

    return (
        <li>
            <Link href={url} className={`${isActive && 'active'}`}>
                <Icon className="size-6" />
                {name}
            </Link>
        </li>
    );
}

export default Sidebar;
