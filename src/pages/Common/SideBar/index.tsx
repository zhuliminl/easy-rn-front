import React from 'react'
import { PaddingIt, Text, Space, Line } from '@components/UI'
import Theme from '@styles/theme'
import { IconActivity, IconAddPhoto, IconAndroid, IconApple, IconAppleAppStore, IconUpdate } from '@components/UI/Icon'
import ModuleCell from '@components/ModuleCell'
import ModuleTitle from '@components/ModuleTitle'

export default () => {
  return (
    <div>
      <PaddingIt padding={Theme.Space2} column>
        <ModuleCell Icon={IconAddPhoto} title='Apple' onPress={() => {

        }} />
        <Space />
        <ModuleCell Icon={IconAppleAppStore} title='Store' onPress={() => {

        }} />
        <Space />
        <ModuleCell Icon={IconUpdate} title='Update' onPress={() => {

        }} />
        <Space />
        <ModuleCell active onlyText title='Update' onPress={() => {

        }} />
        <Space />
      </PaddingIt>
      <ModuleTitle title='Project' />
      <Space height={Theme.Space2} />
      <Line />
      <PaddingIt padding={Theme.Space2} column>
        <ModuleCell Icon={IconAddPhoto} title='Apple' onPress={() => {

        }} />
        <Space />
        <ModuleCell Icon={IconAppleAppStore} title='Store' onPress={() => {

        }} />
        <Space />
        <ModuleCell Icon={IconUpdate} title='Update' onPress={() => {

        }} />
        <Space />
      </PaddingIt>

    </div>
  )
}