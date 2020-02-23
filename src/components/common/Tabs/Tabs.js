import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import TabPane from './TabPane';
import Tab from './Tab';

const Container = styled.div`
  height: 100%;
`;

class Tabs extends Component {
  state = {
    activeTab: this.props.defaultActiveTab
  };

  handleTabClick = tabName => {
    const { onTabChange } = this.props;
    //Callback passed in through props
    onTabChange && onTabChange(tabName);
    this.setState({ activeTab: tabName });
  };

  enrichTab = child => {
    //add onclick handler to tab
    return React.cloneElement(child, {
      onClick: this.handleTabClick,
      isActive: this.state.activeTab === child.props.name
    });
  };

  enrichTabPane = child => {
    //add show/hide styling to tab pane and isActive prop
    return React.cloneElement(child, {
      isActive: this.state.activeTab === child.props.name
    });
  };

  enrichChild = child => {
    if (child === null) return;

    if (child.props.children && Array.isArray(child.props.children)) {
      const newChild = React.cloneElement(child, {
        children: React.Children.map(child.props.children, subChild => {
          return this.enrichChild(subChild);
        })
      });
      return newChild;
    }

    if (child.type === Tab || child.type.displayName === 'Tab') {
      return this.enrichTab(child);
    }

    if (child.type === TabPane || child.type.displayName === 'TabPane') {
      return this.enrichTabPane(child);
    }
    return child;
  };

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return this.enrichChild(child);
    });
  }

  render() {
    return <Container>{this.renderChildren()}</Container>;
  }
}

Tabs.propTypes = {
  children: PropTypes.any, //Should consist of Tab, TabPane components
  onTabChange: PropTypes.func, //Callback function for handling changing tabs
  defaultActiveTab: PropTypes.string.isRequired, //Tab to show on initial render
  asyncRender: PropTypes.bool //Whether or not to render all child tab panes by default. Default renders tab panes only as they become active.
};

Tabs.defaultProps = {
  asyncRender: false
};

export default Tabs;
