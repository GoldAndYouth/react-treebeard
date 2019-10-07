import React from 'react';
import PropTypes from 'prop-types';

import {Div} from '../common';

const Header = ({onRightSelect, onSelect, node, style, customStyles}) => (
    <div style={style.base} onClick={onSelect} onContextMenu={onRightSelect}>
        <Div style={node.selected ? {...style.title, ...customStyles.header.title} : style.title}>
            {node.name}
        </Div>
    </div>
);

Header.propTypes = {
    onSelect: PropTypes.func,
    onRightSelect: PropTypes.func,
    style: PropTypes.object,
    customStyles: PropTypes.object,
    node: PropTypes.object.isRequired
};

Header.defaultProps = {
    customStyles: {}
};

export default Header;
