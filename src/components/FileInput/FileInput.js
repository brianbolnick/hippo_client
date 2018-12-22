import React from "react";
import styled from "styled-components";
import Icon from "components/Icon/Icon";
import { colors, varela } from "styles/css-variables";
//const Input = styled.input`
//width: 0.1px;
//height: 0.1px;
//opacity: 0;
//overflow: hidden;
//position: absolute;
//z-index: -1;
//`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 48px;

  input[type="file"] {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    height: 48px;
    width: 178px;
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
  height: 16px;
  width: 16px;
  margin-right: 8px;
`;

const StyledButton = styled.div`
  display: flex;
  background: ${colors.red};
  color: ${colors.white};
  font-size: 14px;
  font-family: ${varela};
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  max-width: 180px;
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px 0px 0px 3px;

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const FileBox = styled.div`
  color: ${colors.offGray};
  font-size: 14px;
  font-family: ${varela};
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px 12px;
  border: solid 1px ${colors.mutedGray};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: calc(100% - 6px);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-width: 250px;
  border-left: none;
  border-radius: 0px 3px 3px 0px;

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

const FileInput = ({ onChange, label, fileName, onClear }, ...props) => {
  return (
    <Container>
      <StyledButton>
        <StyledIcon name="upload" color={colors.white} />
        <span>image</span>
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
