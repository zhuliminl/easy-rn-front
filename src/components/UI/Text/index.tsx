import React from 'react'
import Theme from '@theme'
import styled, { css } from 'styled-components'

export default styled.div<{
  bold?: boolean,
  small?: boolean,
  normal?: boolean,
  middle?: boolean,
  large?: boolean,
  huge?: boolean,
  noSelect?: boolean,
}>`
  display: flex;

  ${(props) => (
    props.bold && css`
      font-weight: bold;
    `
  )}

  ${(props) => (
    props.noSelect && css`
      user-select: none;
    `
  )}

  ${(props) => (
    props.small && css`
    font-size: ${Theme.FontSize1}px;
    `
  )}

  ${(props) => (
    props.normal && css`
    font-size: ${Theme.FontSize2}px;
    `
  )}

  ${(props) => (
    props.middle && css`
    font-size: ${Theme.FontSize3}px;
    `
  )}

  ${(props) => (
    props.large && css`
    font-size: ${Theme.FontSize4}px;
    `
  )}

  ${(props) => (
    props.huge && css`
    font-size: ${Theme.FontSize5}px;
    `
  )}
`
