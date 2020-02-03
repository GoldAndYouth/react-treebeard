import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {isArray, isFunction} from 'lodash';

import defaultAnimations from '../../themes/animations';
import {randomString} from '../../util';
import {Ul} from '../common';
import NodeHeader from '../NodeHeader';
import {Draggable} from 'dragginit';
import Drawer from './Drawer';
import Loading from './Loading';

const Li = styled('li', {
    shouldForwardProp: prop => ['className', 'children', 'ref'].indexOf(prop) !== -1
})(({style}) => style);

class TreeNode extends PureComponent {
    onClick() {
        const {node, onToggle} = this.props;
        if (onToggle) {
            onToggle(node, !node.toggled);
        }
    }

    animations() {
        const {animations, node} = this.props;
        if (!animations) {
            return {
                toggle: defaultAnimations.toggle(this.props, 0)
            };
        }
        const animation = Object.assign({}, animations, node.animations);
        return {
            toggle: animation.toggle(this.props),
            drawer: animation.drawer(this.props)
        };
    }

    decorators() {
        const {decorators, node} = this.props;
        let nodeDecorators = node.decorators || {};

        return Object.assign({}, decorators, nodeDecorators);
    }

    renderChildren(decorators) {
        const {
            animations, decorators: propDecorators, node, style, onToggle, onSelect, onDrag, onRightSelect, customStyles
        } = this.props;

        if (node.loading) {
            return (
                <Loading decorators={decorators} style={style}/>
            );
        }

        let children = node.children;
        if (!isArray(children)) {
            children = children ? [children] : [];
        }

        return (
            <Ul style={style.subtree}>
                {children.map(child => (
                    <TreeNode
                        onSelect={onSelect}
                        onRightSelect={onRightSelect}
                        onToggle={onToggle}
                        onDrag={onDrag}
                        animations={animations}
                        style={style}
                        customStyles={customStyles}
                        decorators={propDecorators}
                        key={child.id || randomString()}
                        node={child}
                    />
                ))}
            </Ul>
        );
    }

    render() {
        const {
            node, style, onSelect, onRightSelect, onDrag, customStyles
        } = this.props;
        const decorators = this.decorators();
        const animations = this.animations();
        const {...restAnimationInfo} = animations.drawer;
        return (
            <Li style={style.base}>
                <Draggable onDrag={isFunction(onDrag) ? ((e) => onDrag(e, node)) : undefined}>
                    <NodeHeader
                        decorators={decorators}
                        animations={animations}
                        node={node}
                        style={style}
                        customStyles={customStyles}
                        onClick={() => this.onClick()}
                        onSelect={isFunction(onSelect) ? ((e) => onSelect(e, node)) : undefined}
                        onRightSelect={isFunction(onRightSelect) ? ((e) => onRightSelect(e, node)) : undefined}
                    />
                </Draggable>
                <Drawer restAnimationInfo={{...restAnimationInfo}}>
                    {node.toggled ? this.renderChildren(decorators, animations) : null}
                </Drawer>
            </Li>
        );
    }
}

TreeNode.propTypes = {
    onSelect: PropTypes.func,
    onRightSelect: PropTypes.func,
    onDrag: PropTypes.func,
    onToggle: PropTypes.func,
    style: PropTypes.object.isRequired,
    customStyles: PropTypes.object,
    node: PropTypes.object.isRequired,
    decorators: PropTypes.object.isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired
};

TreeNode.defaultProps = {
    customStyles: {}
};

export default TreeNode;
