import React, { ComponentProps, FC } from 'react'
import { Button , styled } from '@mui/material'

const MUIButtonStyled = styled(Button)`

`

export const Button1: FC<ComponentProps<typeof Button>> = (props) => {
    return (
        <MUIButtonStyled {...props} />
    )
}
