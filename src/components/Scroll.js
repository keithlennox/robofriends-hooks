//Component that wraps it's children in a scrollable div

import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;