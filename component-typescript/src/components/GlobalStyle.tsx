/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { utilityColor } from 'components/styles';

const globalStyle = css(`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');

  html {
    width: 100vw;
    overflow-x: hidden;
  }
  
  body {
    margin: 0;
    font-family: 'Noto Sans JP', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #FAFBFC;
  }

  button {
    font-family: 'Noto Sans', sans-serif;
  }

  # react-toastify
  .toastnotification--success {
    opacity: 0.8;
    :hover {
      opacity: 1.0;
    }
  }
  .toastnotification--error {
    background: ${utilityColor.error};
    opacity: 0.8;
    :hover {
      opacity: 1.0;
    }
  }
  .css-1wa3eu0-placeholder {
    font-size: 14px
  }
  
  .cursor-pointer{
    cursor: pointer;
  }
  .on-hover{
    &:hover{
      background-color: #F2F5F9;
    }
  }
`);

const GlobalStyle: React.FC = () => (
  <Global
    styles={globalStyle}
  />
);

export default GlobalStyle;
