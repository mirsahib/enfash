import React from 'react'
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper'
import { PromptProps } from '../types'



const Prompt = (props: PromptProps) => {
    const { visibility, title, message, promptAction } = props
    return (
        <Portal>
            <Dialog visible={visibility} onDismiss={promptAction}>
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>{message}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={promptAction}>SURE</Button>
                    <Button onPress={promptAction}>CANCEL</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}

export default Prompt