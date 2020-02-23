import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import styled from 'styled-components/macro';
import { colors } from 'styles/css-variables';
import Icon from 'components/common/Icon/Icon';

const Searchbar = styled.input`
  color: ${colors.black};
  padding: 0 1rem;
  padding-left: 40px;
  transition: background-color 0.15s, border-color 0.15s;
  height: 2.75em;
  line-height: 2.4em;
  font-size: 1em;
  max-width: 100%;
  width: 100%;
  background-color: ${colors.whiteSmoke};
  border: solid 2px ${colors.whiteSmoke};
  border-radius: 8px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    background-color: ${colors.white};
    border: solid 2px ${colors.black};
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 8px;
  position: relative;
`;

const StyledIcon = styled(Icon)`
  pointer-events: none;
  position: absolute;
  top: 7px;
  z-index: 4;
  left: 8px;
  width: 20px;
  height: 20px;
  svg {
    position: initial;
  }
`;

const Wrapper = styled.div``;

const Search = ({ onChange, ...props }) => {
  const renderIcon = () => {
    return <StyledIcon color={colors.black} name="search" />;
  };

  const handleSearchChange = search => {
    onChange(search);
  };

  const handleSearchChangeDebounce = debounce(handleSearchChange, 100);

  const onSearchChange = event => {
    handleSearchChangeDebounce(event.target.value);
  };

  return (
    <Wrapper {...props}>
      <Container>
        {renderIcon()}
        <Searchbar
          type="text"
          onChange={onSearchChange}
          placeholder="Search"
          {...props}
        />
      </Container>
    </Wrapper>
  );
};

Search.propTypes = {
  onChange: PropTypes.func
};

export default Search;
