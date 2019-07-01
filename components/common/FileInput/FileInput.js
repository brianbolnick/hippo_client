import React, { useState } from "react";
import styled from "styled-components";
import Icon from "components/common/Icon/Icon";
import Button from "components/common/Button/Button";
import Divider from "components/common/Divider/Divider";
import { colors, varela, phoneMediaQuery } from "styles/css-variables";
import MediaQuery from "components/common/MediaQuery/MediaQuery";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 100%;
  cursor: pointer;
  margin: 8px;
  margin-bottom: 24px;

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
  border: dashed 2px ${colors.darkGray};
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  border-radius: 3px;
  padding: 32px;
`;

const Description = styled.div`
  font-family: ${varela};
  font-weight: 700;
  font-size: 18px;
  color: ${colors.darkGray};
`;

const UploadButton = styled(Button)`
  max-width: 100%;
`;

const MobileContainer = styled.div``;

const Label = styled.div`
  margin-bottom: 8px;
`;

const FileInput = ({ onChange, label, fileName, onClear }, ...props) => {
  const [showMobile, setShowMobile] = useState(
    window.matchMedia("(" + phoneMediaQuery + ")").matches
  );

  const handleMediaQueryChange = ({ matches }) => {
    setShowMobile(matches);
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
        <Container>
          <StyledButton>
            {fileName ? (
              <DropBox>
                <StyledIcon name="checkCircle" color={colors.green} />
                <Description>{fileName}</Description>
                <Divider />
                <UploadButton secondary>Reselect</UploadButton>
              </DropBox>
            ) : (
              <DropBox>
                <StyledIcon name="upload" color={colors.darkGray} />
                <Description>Drag and drop an image here!</Description>
                <Divider>OR</Divider>
                <UploadButton secondary>Click to Browse</UploadButton>
              </DropBox>
            )}
          </StyledButton>
          <input onChange={onChange} type="file" accept="image/*" {...props} />
        </Container>
      )}
    </>
  );
};

export default FileInput;
