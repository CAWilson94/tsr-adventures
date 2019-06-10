import * as React from 'react';

interface headerProps { 
    name?: string; // marks the paramater as optional
}

const Header: React.FC<headerProps> = (props: headerProps) => (
    <h1>Hello, {props.name}! Welcome to this page its magical and filled with unicorns</h1>
);

Header.defaultProps = { 
    name: 'yer maw',
};

export default Header;