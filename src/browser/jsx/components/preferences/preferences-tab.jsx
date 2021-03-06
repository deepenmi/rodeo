import _ from 'lodash';
import React from 'react';
import './preferences-tab.css';
import commonReact from '../../services/common-react';

const tabClass = 'preferences-tab',
  activeTabClass = 'preferences-tab-active',
  disabledClass = 'disabled';

/**
 * @class DocCode
 * @extends ReactComponent
 * @property props
 */
export default React.createClass({
  displayName: 'PreferencesTab',
  propTypes: {
    active: React.PropTypes.bool,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    id: React.PropTypes.string,
    onClick: React.PropTypes.func
  },
  getDefaultProps: function () {
    return {
      onClick: _.noop
    };
  },
  shouldComponentUpdate: function (nextProps) {
    return commonReact.shouldComponentUpdate(this, nextProps);
  },
  render: function () {
    const props = this.props,
      className = [
        tabClass,
        props.className,
        props.active ? activeTabClass : '',
        props.disabled ? disabledClass : ''
      ].join(' ');

    return (
      <div
        className={className}
        id={props.id}
        onClick={props.onClick}
      >{props.children}</div>
    );
  }
});
