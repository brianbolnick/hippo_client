import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import parseDomain from 'parse-domain';
import Modal from 'components/common/Modal/Modal';
import Button from 'components/common/Button/Button';
import Popover from 'components/common/Popover';
import { AVAILABLE_DOMAINS } from 'utils';
import ModalInput from 'components/common/ModalInput/ModalInput';
import styled from 'styled-components';
import { colors, media, avenir } from 'styles/css-variables';

export const ButtonContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin: 32px auto;
`;

export const ModalText = styled.div`
  font-family: ${avenir};
  font-weight: 600;
  margin-top: 16px;
`;

export const FormContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  ${media.phone` 
		box-sizing: border-box;
		background: #ffffff;
		border-radius: 4px;
		width: 100%;
		padding: 16px;
	`};
`;

export const FormWrapper = styled.div`
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.phone`
	width: 100%;
	`};
`;

export const PopoverTarget = styled.span`
  border-bottom: dotted 3px ${colors.mutedGray};
  margin-left: 2px;
`;

export const PopoverContents = styled.div`
  text-align: left;
`;

export const PopoverItem = styled.div``;
export const PopoverMessage = styled.div`
  margin-top: 8px;
`;

const NewModal = ({ onCancelClick, history }) => {
  const [url, setUrl] = useState('');
  const [urlValid, setUrlValid] = useState(false);
  const [error, setError] = useState('');
  const [domainName, setDomainName] = useState('');

  const validateInput = url => {
    const parsedDomain = parseDomain(url);
    const domain = parsedDomain && parsedDomain.domain;

    if (domain && AVAILABLE_DOMAINS.includes(domain)) {
      setUrlValid(true);
      setUrl(url);
      setDomainName(domain);
    } else if (url) {
      setUrlValid(false);
      setError(
        'That is not a valid domain. Please check that it is included in the list of supported sites.'
      );
    }
  };

  const handleChangeDebounce = debounce(validateInput, 500);

  const onInputChange = e => {
    setError('');
    handleChangeDebounce(e.target.value);
  };

  return (
    <Modal onCloseRequest={onCancelClick}>
      {domainName && <p>{domainName}</p>}
      <FormWrapper>
        <FormContainer>
          <ModalInput
            inputState={urlValid ? 'success' : url.length ? 'error' : ''}
            type="text"
            icon="addRecipe"
            placeholder="Recipe URL"
            onChange={onInputChange}
            fontSize={1.2}
          />
          {error && <div>{error}</div>}
          <ModalText>
            This feature is only available with
            <Popover target={<PopoverTarget>certain sites</PopoverTarget>}>
              <PopoverContents>
                <PopoverItem>foodnetwork.com</PopoverItem>
                <PopoverItem>allrecipes.com</PopoverItem>
                <PopoverItem>damndelicious.com</PopoverItem>
                <PopoverItem>food.com</PopoverItem>
                <PopoverMessage>More coming soon!</PopoverMessage>
              </PopoverContents>
            </Popover>
            .
          </ModalText>

          <ButtonContainer>
            <Button secondary onClick={onCancelClick}>
              Cancel
            </Button>
            <Button
              disabled={!urlValid}
              onClick={() => history.push(`/recipes/new/import?srcUrl=${url}`)}
            >
              Import
            </Button>
          </ButtonContainer>
        </FormContainer>
      </FormWrapper>
    </Modal>
  );
};

NewModal.propTypes = {
  onDeleteClick: PropTypes.func.isRequired
};

export default NewModal;
