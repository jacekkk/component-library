import React from 'react'
import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button, ButtonProps } from './Button'

export default {
  component: Button,
  title: 'Atoms/Button',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Click me',
}

export const WithClickHandler = Template.bind({})
WithClickHandler.args = {
  label: 'Click me',
  onClick: action('clicked'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Click me',
  disabled: true,
}
