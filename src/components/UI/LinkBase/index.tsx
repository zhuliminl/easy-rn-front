import React from 'react'
import styled, { css } from 'styled-components'

export default styled.div<{
  height?: number,
}>`
  display: flex;
  height: 10px;
  ${(props) => (
    props.height && css`
      height: ${props.height}px;
    `
  )}

`
