import { Meta , StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'components/Text',
    component: Text,
    args:{
        children: 'testando pagina de texto',
        size:'md',
    },
    argTypes:{
        size:{
            options: ['sm', 'md', 'lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size:'sm'
    }
}

export const  Large: StoryObj<TextProps> = {
    args: {
        size:'lg'
    }
}
export const  CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children:(
            <p>testando  pagina de texto</p>
        )
    },
    argTypes: {
        children:{
            table: {
               disable: true, 
            }
        },
        asChild:{
            table:{
                disable: true,
            }
        }
    }
    }