import React from 'react';
import Link from 'next/link';

interface Props {
    Icon: React.ElementType;
    name: string;
}

function Sidebar({ Icon, name }: Props) {
    return (
        <li>
            <Link href="/console">
                <Icon className="size-6" />
                {name}
            </Link>
        </li>
    );
}

export default Sidebar;
