import React from 'react';
import styled, { css } from 'styled-components';

const colors = {
  textDefault: '#333333',
  textPlaceholder: '#999999',
  textDisabled: '#C4C4C4',
  textError: '#B00020',
  textSuccess: '#2E7D32',

  borderDefault: '#CCCCCC',
  borderFocus: '#3F51B5',
  borderError: '#B00020',
  borderSuccess: '#2E7D32',

  surfaceDefault: '#FFFFFF',
  surfaceDisabled: '#F5F5F5',
};

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
  color: ${colors.textDefault};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: ${colors.textDefault};
  background-color: ${colors.surfaceDefault};
  border: 1px solid ${colors.borderDefault};
  border-radius: 4px;
  outline: none;

  ::placeholder {
    color: ${colors.textPlaceholder};
  }

  &:focus {
    border-color: ${colors.borderFocus};
  }

  &:disabled {
    background-color: ${colors.surfaceDisabled};
    color: ${colors.textDisabled};
    border-color: ${colors.borderDefault};
    cursor: not-allowed;
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: ${colors.borderError};
      &:focus {
        border-color: ${colors.borderError};
      }
    `}

  ${({ $isSuccess }) =>
    $isSuccess &&
    css`
      border-color: ${colors.borderSuccess};
      &:focus {
        border-color: ${colors.borderSuccess};
      }
    `}
`;

const ErrorMessage = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 14px;
  color: ${colors.textError};
`;

const SuccessMessage = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 14px;
  color: ${colors.textSuccess};
`;

const TextField = ({
  label,
  error,
  success,
  disabled = false,
  ...props
}) => {
  const inputId = props.id || `textfield-${label?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <StyledInput
        id={inputId}
        disabled={disabled}
        aria-invalid={!!error}
        $hasError={!!error}
        $isSuccess={!!success && !error}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && !error && <SuccessMessage>{success}</SuccessMessage>}
    </div>
  );
};

export default TextField;
