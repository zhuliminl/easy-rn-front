import React from 'react'
import * as Icon from '@ui/Icon'

const size = 20

export default () => {

  const Icons = Object.keys(Icon).map((key, i) => {
    const C = Icon[key]
    return <C 
    // color='red'
     width={size} height={size} />
  })

  return (
    <div style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap'}}>
      {Icons.map((I, i) => {
        return (
          <div style={{display: 'flex',padding: 10, height: size, width: size,}}>
            {I}
          </div>
        )
      })}
    </div>
  )
}