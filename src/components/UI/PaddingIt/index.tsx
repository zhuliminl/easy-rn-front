import React from 'react'
import Theme from '@theme'
import styled, { css } from 'styled-components'

export default styled.div<{
  padding?: number,
  hover?: boolean,
  border?: boolean,
  radius?: number,
}>`
  background-color: red;
  padding:${(props) => props.padding + 'px' || 0};
  ${(props) => (
    props.hover && css`
     &:hover {
      background-color: #999;
  }
    `
  )}
  ${(props) => (
    props.border && css`
    border: 1px solid #000;
    `
  )}
  ${(props) => (
    props.radius ? css`
    border-radius: ${props.radius}px;
    `: {}
  )}
`

/*
export default ({
  children,
  padding = Theme.Space1,
  paddingH,
  paddingV,
}: {
  padding?: number,
  paddingH?: number,
  paddingV?: number,
  children: any,
}) => {

  let paddingHobj = paddingH ? { paddingLeft: paddingH, paddingRight: paddingH } : {}
  let paddingVobj = paddingV ? { paddingTop: paddingV, paddingBottom: paddingV } : {}
  return (
    <div style={{
      padding,
      ...paddingHobj,
      ...paddingVobj,
    }}>
      {children}
    </div>
  )
}
*/