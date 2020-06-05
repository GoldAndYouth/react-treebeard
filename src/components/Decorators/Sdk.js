import React from 'react';
import PropTypes from 'prop-types';

import {Div} from '../common';

const Sdk = ({style, onClick}) => {
    const {height, width} = style;

    const icons = {
        first: `M29.8246 8.03528C30.4013 7.35836 30.3611 6.35193 29.7323 5.72311L27.2718 
               3.26263C26.643 2.63381 25.6366 2.59365 24.9597 3.17037L10.6772 15.3386C10.4878 
               15.5 10.4763 15.7886 10.6522 15.9646L17.0303 22.3427C17.2063 
               22.5187 17.495 22.5072 17.6564 22.3177L29.8246 8.03528Z`,
        second: `M3.78904 28.655C3.65487 29.0006 3.99524 29.341 4.34085 29.2068L14.322 
                25.3321C14.6091 25.2207 14.687 24.8509 14.4692 24.6331L8.36274 
                18.5267C8.14495 18.3089 7.77518 18.3867 7.66372 18.6739L3.78904 28.655Z`,
    };

    return (
        <div style={style.base} onClick={onClick}>
            <Div style={style.wrapper}>
                <svg
                    width={width}
                    height={height}
                    style={style}
                    viewBox={'0 0 70 70'}
                >
                    <path
                        fill={'white'}
                        d={icons['first']}
                    />
                    <path
                        fill={'white'}
                        d={icons['second']}
                    />
                </svg>
            </Div>
        </div>
    );
};

Sdk.propTypes = {
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object
};

export default Sdk;