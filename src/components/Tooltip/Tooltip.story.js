import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import Tooltip, { positions, types } from "./Tooltip";
import Button from "../Button/Button";

const styles = {
  wrapper: {
    width: 800,
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  showcaseWrapper: {
    width: 800,
    height: 200,
    display: "flex",
    justifyContent: "space-between",
    padding: 30
  },
  showcaseItem: {
    width: 64,
    textAlign: "center"
  }
};

const MoreInfo = <h1 style={{ margin: 0 }}>Hover Me</h1>;
const tip = (
  <div style={{ width: 200 }}>You can put whatever you want here.</div>
);

storiesOf("Tooltip", module)
  .add("Default", () => (
    <div style={styles.wrapper}>
      <Tooltip tip={tip}>{MoreInfo}</Tooltip>
    </div>
  ))

  .add("with arrow", () => (
    <div style={styles.wrapper}>
      <Tooltip type="arrow" tip={tip}>
        {MoreInfo}
      </Tooltip>
    </div>
  ))

  .add("with position", () => (
    <div style={styles.showcaseWrapper}>
      {Object.keys(positions).map(position => (
        <div key={position} style={styles.showcaseItem}>
          <Tooltip position={positions[position]} tip={tip}>
            <Button type="secondary" icon="IconInfo" />
          </Tooltip>
          <p>{positions[position]}</p>
        </div>
      ))}
    </div>
  ))

  .add("with position and arrow", () => (
    <div style={styles.showcaseWrapper}>
      {Object.keys(positions).map(position => (
        <div key={position} style={styles.showcaseItem}>
          <Tooltip type="arrow" position={positions[position]} tip={tip}>
            <Button type="secondary" icon="IconInfo" />
          </Tooltip>
          <p>{positions[position]}</p>
        </div>
      ))}
    </div>
  ))

  .add("with show/hide", () => (
    <div style={styles.showcaseWrapper}>
      <div style={styles.showcaseItem}>
        <Tooltip type="arrow" position="right" tip={tip} show>
          <Button type="secondary" icon="IconInfo" />
        </Tooltip>
        <p>show</p>
      </div>
      <div style={styles.showcaseItem}>
        <Tooltip type="arrow" position="bottom" tip={tip} hide>
          <Button type="secondary" icon="IconInfo" />
        </Tooltip>
        <p>hide</p>
      </div>
      <div style={styles.showcaseItem}>
        <ToggleTooltip type="arrow" tip={tip} position="top-right" />
        <p>click to toggle</p>
      </div>
    </div>
  ));

class ToggleTooltip extends Component {
  state = {
    showTooltip: false
  };

  toggle = () => {
    this.setState({ showTooltip: !this.state.showTooltip });
  };

  render() {
    return (
      <Tooltip {...this.props} show={this.state.showTooltip}>
        <Button type="secondary" icon="IconInfo" onClick={this.toggle} />
      </Tooltip>
    );
  }
}
