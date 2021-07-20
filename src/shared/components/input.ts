import styled from 'styled-components'
import { colors, fonts } from '@app/styles/styles'

export const Input = styled.input<{ borderRadius?: string }>`
  background-color: #ffffff;
  width: 50%;
  border-radius: ${(props) => props.borderRadius};
  font-size: 16px;
  text-align: left;
  padding-right: 30px;
  padding-left: 30px;
  height: 60px;
  border: 1px solid #ffffff;
  transition: 0.2s;
  margin: 20px; 
  font-family: ${fonts.SECONDARY};

  &:focus {
    outline: 0;
    border: 1px solid ${colors.PRIMARY};
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  }
`

export const InputArea = styled.textarea<{ borderRadius?: string }>`
  background-color: #ffffff;
  width: 75%;
  border-radius: ${(props) => props.borderRadius};
  font-size: 16px;
  text-align: left;
  padding-right: 30px;
  padding-left: 30px;
  height: 180px;
  border: 1px solid #ffffff;
  transition: 0.2s;
  margin: 20px; 
  font-family: ${fonts.SECONDARY};

  &:focus {
    outline: 0;
    border: 1px solid ${colors.PRIMARY};
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  }
`
