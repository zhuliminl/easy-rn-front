/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import { jsx ,css} from '@emotion/react'
import Theme from '@theme'

export default () => {
  console.log('saul', css, jsx)
  return (
    <div
      css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen'
        }
      }}
    >
      xxxxxx
      <div css={titleStyle}>jjjjjj</div>
    </div>
  )
}

const titleStyle = css({
  boxSizing: 'border-box',
  width: 300,
  height: 200,
  background: 'blue'
})