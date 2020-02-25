import * as React from 'react';

interface LinkProps {
    className?: string;
    href: string;
}

const Link: React.FC<LinkProps> = ({ href, className, children }) => {
    return (
        <a href={href} className={className}>
            {children}
        </a>
    );
};

export default Link;
