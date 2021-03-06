import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'shallowequal';
import deepEqual from 'deep-equal';

class NodeHeader extends Component {

    shouldComponentUpdate(nextProps) {
        const props = this.props;
        const nextPropKeys = Object.keys(nextProps);

        for (let i = 0; i < nextPropKeys.length; i++) {
            const key = nextPropKeys[i];
            if (key === 'animations') {
                continue;
            }

            const isEqual = shallowEqual(props[key], nextProps[key]);
            if (!isEqual) {
                return true;
            }
        }

        return !deepEqual(props.animations, nextProps.animations, {strict: true});
    }

    render() {
        const {
            animations,
            decorators,
            node,
            onClick,
            style,
            onSelect,
            onRightSelect,
            onHoverLeave,
            onHoverOver,
            customStyles,
            onSdkIconClick,
        } = this.props;
        const {active, children, sdk} = node;
        const terminal = !children;
        const sdkActive = sdk === undefined ? false : true; 
        let styles;
        if (active) {
            styles = Object.assign(style, {container: {...style.link, ...style.activeLink}});
        } else {
            styles = style;
        }
        return (
            <decorators.Container
                animations={animations}
                decorators={decorators}
                node={node}
                onClick={onClick}
                onSdkIconClick={onSdkIconClick}
                customStyles={customStyles}
                onSelect={onSelect}
                onRightSelect={onRightSelect}
                onHoverOver={onHoverOver}
                onHoverLeave={onHoverLeave}
                terminal={terminal}
                sdk={sdkActive}
                style={styles}
            />
        );
    }
}

NodeHeader.propTypes = {
    style: PropTypes.object.isRequired,
    customStyles: PropTypes.object,
    decorators: PropTypes.object.isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired,
    node: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    onSdkIconClick: PropTypes.func,
    onSelect: PropTypes.func,
    onRightSelect: PropTypes.func,
    onHoverOver: PropTypes.func,
    onHoverLeave: PropTypes.func,
};

NodeHeader.defaultProps = {
    customStyles: {}
};

export default NodeHeader;
