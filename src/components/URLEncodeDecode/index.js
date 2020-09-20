import React, { Component } from "react";
import { Icon, Button } from "@protonapp/react-native-material-ui";

class URLEncodeDecode extends Component {
  constructor(props) {
    super(props);
    this.triggerAction = this.triggerAction.bind(this);
  }

  triggerAction() {
    const { selectEncodeOrDecode, targetText, clickActions } = this.props;

    let content;

    try {
      if (selectEncodeOrDecode === "encode") {
        content = encodeURIComponent(targetText);
      } else {
        content = decodeURIComponent(targetText);
      }
    } catch (err) {
      content = unescape(targetText);
    }

    if (clickActions) clickActions(content);
  }

  render() {
    const { _width, _height, buttonStyles } = this.props;

    const customStyles = {
      text: {
        fontSize: buttonStyles.textSize,
        fontWeight: "bold",
        letterSpacing: 1,
        paddingLeft: buttonStyles.iconText ? 6 : 0,
        color: buttonStyles.textColor,
      },
      container: {
        width: _width,
        height: _height,
        borderRadius: buttonStyles.borderRadius,
        backgroundColor: buttonStyles.primaryColor,
      },
    };

    const customIcon = (
      <Icon
        name={buttonStyles.iconName}
        color={buttonStyles.textColor}
        size={buttonStyles.iconSize}
      />
    );

    return (
      <Button
        key={`buttonStyles.${buttonStyles.iconSize}`}
        text={buttonStyles.iconText}
        raised={buttonStyles.enableShadow}
        upperCase={buttonStyles.enableUppercase}
        icon={customIcon}
        style={customStyles}
        onPress={this.triggerAction}
      />
    );
  }
}

export default URLEncodeDecode;
