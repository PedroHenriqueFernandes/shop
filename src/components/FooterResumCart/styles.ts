import { styled } from "@stitches/react";

export const TextInLineContent = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: '1rem',
})

export const Button = styled('button', {
    background: '$green500',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    color: '$white',
    fontSize: '18px',
    fontWeight: 'bold',
    width: '100%',
    height: '4.25rem',
    marginTop: '4rem',
})

export const TextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '.5rem',
})

export const TextPrice = styled('p', {
    fontWeight: 'bold',
    fontSize: '$xl',
    color: '$gray100',
    lineHeight: '2.4rem',
})

export const TextAmount = styled('p', {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
    lineHeight: '1.8rem',
})

export const TextRegular = styled('p', {
    fontSize: '1rem',
    color: '$gray100',
    lineHeight: '1.6rem',
})

