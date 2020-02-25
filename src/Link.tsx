import * as React from 'react';

interface LinkProps {
    className?: string;
    href: string;
}

const Link: React.FC<LinkProps> = props => {
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
};

export default Link;
