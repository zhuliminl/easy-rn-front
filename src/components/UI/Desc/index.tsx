import React from 'react'
import Theme from '@theme'
import styled, { css } from 'styled-components'

export default styled.div<{
  bold?: boolean,
}>`
  display: flex;
  color: ${Theme.TextColor6};
  font-size: ${Theme.FontSize1}px;

  ${(props) => (
    props.bold && css`
      font-weight: bold;
    `
  )}

`
