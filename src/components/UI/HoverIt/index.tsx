/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import { jsx, css } from '@emotion/react'
import Theme from '@theme'

export default ({
  children,
}: {
  children: any,
}) => {

  return (
    <div
      css={{
        '&:hover': {
          backgroundColor: 'red',
        }
      }}>
      {children}
    </div>
  )
}