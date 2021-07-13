import { useState } from 'react'
import styled from 'styled-components'

const CounterWrapper = styled.div`

`;

const TextWrapper = styled.div`

`;

const ButtonWrapper = styled.div`

`;

interface ICounter {
    label: string
    startValue?: number
    type?: string // use for big, default, smal
}

export const Counter: React.FC<ICounter> = ({ label, type, startValue, }) => {
    const [value, setValue] = useState(startValue ?? 0)
    return (
        <CounterWrapper>
            <TextWrapper>
                {`${label}: ${value}`}
            </TextWrapper>
            <ButtonWrapper>
                <button onClick={() => {setValue(value-1)}}>
                {'-'}
                </button>
                <button onClick={() => {setValue(value+1)}}>
                {'+'}
                </button>
            </ButtonWrapper>
        </CounterWrapper>
    )
}

