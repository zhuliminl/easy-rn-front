import React from 'react'
import Theme from '@theme'
import styled, { css } from 'styled-components'

export default styled.div<{
  bgColor?: string,
  padding?: number,
  paddingV?: number,
  paddingH?: number,
  hover?: boolean,
  border?: boolean,
  radius?: number,
  center?: boolean,
  row?: boolean,
  column?: boolean,
}>`
  transition: background-color 0.3s linear;
  display: flex;
  padding:${(props) => props.padding + 'px' || 0};

  ${(props) => (
    props.bgColor && css`
      background-color: ${props.bgColor};
    `
  )}


  ${(props) => (
    props.row && css`
      flex-direction: row;
    `
  )}

  ${(props) => (
    props.column && css`
      flex-direction: column;
    `
  )}

  ${(props) => (
    props.hover && css`
     &:hover {
      background-color: ${Theme.ColorBg2};
  }
    `
  )}

  ${(props) => (
    props.border && css`
      border: 1px solid ${Theme.BorderColor};
    `
  )}

  ${(props) => (
    props.radius && css`
      border-radius: ${props.radius}px;
    `
  )}

  ${(props) => (
    props.paddingH && css`
      padding-left: ${props.paddingH}px;
      padding-right: ${props.paddingH}px;
    `
  )}

  ${(props) => (
    props.paddingV && css`
      padding-top: ${props.paddingV}px;
      padding-bottom: ${props.paddingV}px;
    `
  )}

  ${(props) => (
    props.center && css`
      justify-content: center;
      align-items: center;
    `
  )}

`
