import { styled } from "@stitches/react";

export const HeaderContainer = styled('header', {
    padding: '2rem 0 ',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
 
})

export const CartContainer = styled('div', {
    padding: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: '$gray800',
    borderRadius: '8px',

    position: "relative"
})

export const AmountItemsInCart = styled('div', {
    position: 'absolute',
    top: '-0.5rem',
    right: '-0.5rem',
    backgroundColor: '$green500',
    color: '$white',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '0.875rem',    
    fontWeight: 'bold',
    lineHeight: '0',
})
