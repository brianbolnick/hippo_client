import React, { useState } from "react";
import styled from "styled-components";
import Icon from "components/common/Icon/Icon";
import Button from "components/common/Button/Button";
import Divider from "components/common/Divider/Divider";
import { colors, avenir, phoneMediaQuery } from "styles/css-variables";
import MediaQuery from "components/common/MediaQuery/MediaQuery";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 100%;
  cursor: pointer;
  //margin: 8px;
  margin-bottom: 24px;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  border-radius: 32px;

  input[type="file"] {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    height: 48px;
    height: 100%;
    width: 100%;
    cursor: pointer;

    &:hover {
      div {
        box-shadow: 0 3px 25px rgba(0, 0, 0, 0.15),
          0 8px 10px -6px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

const StyledIcon = styled(Icon)`
  height: 80px;
  width: 80px;
  margin-bottom: 64px;
`;

const StyledButton = styled.div`
  display: flex;
  color: ${colors.white};
  cursor: pointer;
  border: none;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;

const DropBox = styled.div`
  height: 100%;
  width: 100%;
  //border: dashed 1px ${colors.black};
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  border-radius: 3px;
  padding: 32px;
	height: 320px;
	//height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${({ url }) =>
    url &&
    `
			background-image: url('${url}');
	`}

  ${({ url, showReselect }) =>
    url &&
    showReselect &&
    `background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.4) ), url('${url}'); 
`}
`;

const Description = styled.div`
  font-family: ${avenir};
  font-weight: 500;
  font-size: 18px;
  color: ${colors.black};
`;

const UploadButton = styled(Button)`
  max-width: 100%;
  background: white;
`;

const MobileContainer = styled.div``;

const Label = styled.div`
  margin-bottom: 8px;
`;

const FileInput = ({ onChange, label, file, onClear, imageUrl }, ...props) => {
  const [showMobile, setShowMobile] = useState(
    window.matchMedia("(" + phoneMediaQuery + ")").matches
  );

  const [showReselect, setShowReselect] = useState(false);

  const handleMediaQueryChange = ({ matches }) => {
    setShowMobile(matches);
  };

  const handleEnter = () => {
    if (imageUrl) {
      setShowReselect(true);
    }
  };

  const handleLeave = () => {
    if (imageUrl && showReselect) {
      setShowReselect(false);
    }
  };

  const renderContent = () => {
    if (file || imageUrl) {
      return showReselect ? (
        <UploadButton secondary>Reselect</UploadButton>
      ) : null;
    }

    return (
      <>
        <StyledIcon name="camera" color={colors.mutedGray} />
        <Description>Drag and drop an image here!</Description>
        <Divider>OR</Divider>
        <UploadButton secondary>Click to Browse</UploadButton>
      </>
    );
  };

  return (
    <>
      <MediaQuery
        query={phoneMediaQuery}
        onChange={matches => handleMediaQueryChange(matches)}
      />

      {showMobile ? (
        <MobileContainer>
          <Label>Image</Label>
          <input onChange={onChange} type="file" accept="image/*" {...props} />
        </MobileContainer>
      ) : (
        <Container onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          <StyledButton>
            <DropBox url={imageUrl} file={file} showReselect={showReselect}>
              {renderContent()}
            </DropBox>
          </StyledButton>
          <input onChange={onChange} type="file" accept="image/*" {...props} />
        </Container>
      )}
    </>
  );
};

export default FileInput;
