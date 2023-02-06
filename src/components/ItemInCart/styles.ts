import { styled } from "@stitches/react"

export const CartContent = styled('div', {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.5rem',
})

export const CartItem = styled('div', {
    width: '100% !important',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'start',
    gap: '1.5rem',
})

export const CartImage = styled('div', {
    width: '6.25rem !important',
    height: '6.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    background:'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
})

export const Title = styled('p', {
    fontSize: '$md',
    fontWeight: 'regular',
    color: '$gray300',
    lineHeight: '1.8rem',
})

export const Price = styled('p', {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
    lineHeight: '1.8rem',
})

export const InfoProductContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '6.25rem',
    gap: '.5rem',

    button:{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '$green300',
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: '1.6rem',
    }
})