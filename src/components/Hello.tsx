import * as React from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export const Hello: React.FC<HelloProps> = (props: HelloProps) => (
    <h1>
        Hello from {props.framework} and {props.compiler}
    </h1>
);
