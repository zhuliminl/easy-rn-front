import React from 'react'


export default ({ name = 'up' }: IProps) => {
  return (
    <div>
      {name}
    </div>
  )
}

type MyName = 'up' | 'saul'

interface IProps {
  name: MyName,
}