import { Meta , StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
    title: 'components/Button',
    component: Checkbox,
    args:{},
    argTypes:{},
    decorators:[
        (Story)=> {
            return(
                <div className="Flex itens-center gap-2">
                {Story()}
                < Text size="sm">lembrar-me de min por 30 dias</Text>
                </div>
            )
        }
    ],

} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
