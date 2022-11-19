/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import { jsx, css } from '@emotion/react'
import Theme from '@theme'

export default () => {
  return (
    <div css={containerStyle} >
      <div css={{}}>jjjjjj</div>
    </div>
  )
}

const containerStyle = css({
  height: Theme.NavHeight,
  backgroundColor: Theme.ColorWhite,
  borderBottomWidth: Theme.BorderWidth1,
  borderBottomColor: Theme.BorderColor,
  borderBottomStyle: 'solid',
})