import React from "react";
import styled from "styled-components";
import Icon from "components/Icon/Icon";
import Button from "components/Button/Button";
import Divider from "components/Divider/Divider";
import { colors, varela } from "styles/css-variables";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 50%;
  cursor: pointer;

  input[type="file"] {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    height: 48px;
    height: 90%;
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
  height: 90%;
  padding: 72px;
  width: 100%;
`;

const FileBox = styled.div`
  color: ${colors.offGray};
  font-family: ${varela};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: none;
  height: 10%;
  width: 100%;
  justify-content: center;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const CloseIcon = styled(Icon)`
  heigh: 14px;
  width: 14px;

  &:hover {
    path {
      fill: ${colors.darkGray};
    }
    cursor: pointer;
  }
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

const FileInput = ({ onChange, label, fileName, onClear }, ...props) => {
  return (
    <Container>
      <StyledButton>
        <DropBox>
          <StyledIcon name="upload" color={colors.darkGray} />
          <Description>Drag and drop an image here!</Description>
          <Divider>OR</Divider>
          <UploadButton secondary>Click to Browse</UploadButton>
        </DropBox>
      </StyledButton>
      <FileBox>
        {fileName ? (
          <span>
            {fileName} <CloseIcon onClick={onClear} name="close" />
          </span>
        ) : (
          <span>.png, .jpg</span>
        )}
      </FileBox>
      <input onChange={onChange} type="file" accept="image/*" {...props} />
    </Container>
  );
};

export default FileInput;
