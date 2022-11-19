/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import { jsx ,css} from '@emotion/react'
import Theme from '@theme'

export default () => {
  return (
    <div
      css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen'
        }
      }}
    >
      This has a hotpink background.
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