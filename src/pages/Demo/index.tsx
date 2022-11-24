import React, { useEffect } from 'react'
import IconsPannel from './IconsPannel'
import { IconActivity, IconAddPhoto, IconBuild } from '@components/UI/Icon'
import { Desc, Line, PaddingIt, Text, Space, Modal, Card } from '@components/UI'
import Theme from '@styles/theme'
import { useModal } from '@hooks/useModal'
import { useCloseToast, useShowToast, useToastIsShow, useToastTitle } from '@store/toast'
import ModuleIntro from '@components/ModuleIntro'
import SpaceContainer from '@components/SpaceContainer'


export default () => {
  const modal1 = useModal()
  const showToast = useShowToast()
  const closeToast = useCloseToast()
  const isShow = useToastIsShow()
  const title = useToastTitle()

  useEffect(() => {

  }, [])

  return (
    <div>
      <SpaceContainer>
        <Space height={Theme.Height3} />
        <ModuleIntro
          title='Builds'
          Icon={IconBuild}
        // renderBottom={() => (<div>xxk</div>)}
        />
        <Space height={Theme.Height3} />
      </SpaceContainer>
      <Line />
      <Space height={Theme.Height4} />
      <SpaceContainer>
        <Card
          height={200}
          style={{
            width: '100%',
            backgroundColor: 'green',
          }}
        >
        </Card>
      </SpaceContainer>
      <Modal ref={modal1.ref}>
        <Card radius={Theme.BorderRadius1} shadow height={100} />
      </Modal>
    </div>
  )
}
