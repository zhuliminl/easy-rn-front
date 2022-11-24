import React from 'react'
import Theme from '@theme'
import styled, { css } from 'styled-components'

export default styled.div<{
  bgColor?: string,
  padding?: number,
  paddingV?: number,
  paddingH?: number,
  hover?: boolean,
  hover2?: boolean,
  active?: boolean,
  border?: boolean,
  radius?: number,
  center?: boolean,
  row?: boolean,
  height?: number,
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
    props.height && css`
      height: ${props.height}px;
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
      opacity: 0.9;
    }
    `
  )}

  ${(props) => (
    props.hover2 && css`
     &:hover {
      outline: 1px solid ${Theme.BorderColor};
      background-color: ${Theme.ColorBg1};
    }
    `
  )}

  ${(props) => (
    props.active && css`
      background-color: ${Theme.ColorBg3};
    `
  )}

  ${(props) => (
    props.border && css`
      outline: 1px solid ${Theme.BorderColor};
      /* border: 1px solid ${Theme.BorderColor}; */
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
