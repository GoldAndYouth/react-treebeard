import React, {Fragment, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {includes} from 'lodash';

import {Treebeard, decorators} from '../src';
import {Div} from '../src/components/common';
import data from './data';
import styles from './styles';
import * as filters from './filter';
import Header from './Header';
import NodeViewer from './NodeViewer';

class DemoTree extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {data};
        this.onToggle = this.onToggle.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onRightSelect = this.onRightSelect.bind(this);
        this.onSdkIconClick = this.onSdkIconClick.bind(this);
    }

    onToggle(node, toggled) {
        const {cursor, data} = this.state;

        if (cursor) {
            this.setState(() => ({cursor, active: false}));
        }

        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }

        this.setState(() => ({cursor: node, data: Object.assign({}, data)}));
    }

    onSelect(e, node) {
        const {cursor, data} = this.state;

        if (cursor) {
            this.setState(() => ({cursor, active: false}));
            if (!includes(cursor.children, node)) {
                cursor.toggled = false;
                cursor.selected = false;
            }
        }

        node.selected = true;

        this.setState(() => ({cursor: node, data: Object.assign({}, data)}));
    }

    onRightSelect(e, node) {
        console.log('Right Click Event.');
        console.log(node);
        e.preventDefault();
    }

    onSdkIconClick(e, node) {
        console.log('Icon Clicked.');
        console.log(node);
        e.preventDefault();
    }

    onDrag(e, node) {
        console.log('Drag Event.');
        console.log(node);
    }

    onDrop(e, node) {
        console.log('Drop Event.');
        console.log(node);
    }

    onFilterMouseUp({target: {value}}) {
        const filter = value.trim();
        if (!filter) {
            return this.setState(() => ({data}));
        }
        let filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState(() => ({data: filtered}));
    }

    render() {
        const {data, cursor} = this.state;
        return (
            <Fragment>
                <Div style={styles.searchBox}>
                    <Div className="input-group">
                        <span className="input-group-addon">
                            <i className="fa fa-search"/>
                        </span>
                        <input
                            className="form-control"
                            onKeyUp={this.onFilterMouseUp.bind(this)}
                            placeholder="Search the tree..."
                            type="text"
                        />
                    </Div>
                </Div>
                <Div style={styles.component}>
                    <Treebeard
                        data={data}
                        onToggle={this.onToggle}
                        onSelect={this.onSelect}
                        onRightSelect={this.onRightSelect}
                        onDrag={this.onDrag}
                        onDrop={this.onDrop}
                        onSdkIconClick={this.onSdkIconClick}
                        decorators={{...decorators, Header}}
                        customStyles={{
                            header: {
                                title: {
                                    color: 'red'
                                }
                            }
                        }}
                    />
                </Div>
                <Div style={styles.component}>
                    <NodeViewer node={cursor}/>
                </Div>
            </Fragment>
        );
    }
}

const content = document.getElementById('content');
ReactDOM.render(<DemoTree/>, content);
