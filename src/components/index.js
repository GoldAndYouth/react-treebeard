import React from 'react';
import PropTypes from 'prop-types';
import {castArray} from 'lodash';

import defaultTheme from '../themes/default';
import defaultAnimations from '../themes/animations';
import {randomString} from '../util';
import {Ul} from './common';
import defaultDecorators from './Decorators';
import TreeNode from './TreeNode';

const TreeBeard = ({
    animations,
    decorators,
    data, onToggle,
    onDrag,
    onDrop,
    onHoverOver,
    onHoverLeave,
    style,
    onSelect,
    onRightSelect,
    customStyles,
    onSdkIconClick
}) => (
    <Ul style={{...defaultTheme.tree.base, ...style.tree.base}}>
        {castArray(data).map(node => (
            <TreeNode
                decorators={decorators}
                node={node}
                onToggle={onToggle}
                onDrag={onDrag}
                onDrop={onDrop}
                onHoverOver={onHoverOver}
                onHoverLeave={onHoverLeave}
                animations={animations}
                onSelect={onSelect}
                onRightSelect={onRightSelect}
                onSdkIconClick={onSdkIconClick}
                customStyles={customStyles}
                key={node.id || randomString()}
                style={{...defaultTheme.tree.node, ...style.tree.node}}
                idx={0}
            />
        ))}
    </Ul>
);

TreeBeard.propTypes = {
    style: PropTypes.object,
    customStyles: PropTypes.object,
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]),
    onToggle: PropTypes.func,
    onDrag: PropTypes.func,
    onDrop: PropTypes.func,
    onHoverOver: PropTypes.func,
    onHoverLeave: PropTypes.func,
    onSelect: PropTypes.func,
    onRightSelect: PropTypes.func,
    onSdkIconClick: PropTypes.func,
    decorators: PropTypes.object
};

TreeBeard.defaultProps = {
    style: defaultTheme,
    animations: defaultAnimations,
    decorators: defaultDecorators,
    customStyles: {}
};

export default TreeBeard;
