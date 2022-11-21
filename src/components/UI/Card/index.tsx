import React from 'react'
import Theme from '@theme'
import styled, { css } from 'styled-components'

export default styled.div<{
  height?: number,
  width?: number,
  border?: boolean,
  radius?: number,
  showdow?: boolean,
  shadow1?: boolean,
}>`
  display: flex;
  background-color: ${Theme.ColorWhite};

  ${(props) => (
    props.border && css`
      border: 1px solid ${Theme.BorderColor};
    `
  )}

  ${(props) => (
    props.showdow && css`
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.25); */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
    `
  )}

  ${(props) => (
    props.shadow1 && css`
    box-shadow:
    0 10px 20px 6px rgb(0 0 0 / 25%), 0 3px 6px 0px rgb(0 0 0 / 25%);

    `
  )}


  ${(props) => (
    props.height ? css`
      height: ${props.height}px;
    `: css`
      height: 100px;
    `
  )}

  ${(props) => (
    props.width ? css`
      width: ${props.width}px;
    `: css`
      width: 100px;
    `
  )}

  ${(props) => (
    props.radius ? css`
      border-radius: ${props.radius}px;
    `: css`
      border-radius: ${Theme.BorderRadius1}px;
    `
  )}

`

