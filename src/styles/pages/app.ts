import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',

    position: 'relative',
})

export const CartContainer = styled('div', {
    position: "absolute",
    
    variants: {
        isOpen: {
            true: {
                opacity: 1,
                right: '0',
                padding: '3rem',
                minHeight: '100vh',
                backgroundColor: '$gray800',
                minWidth: '480px',
                zIndex: 1,

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',

                div: {
                    width: '100%',
                },

                transition: 'all 0.2s ease-in-out',
            },
            false:{
                opacity: 0,
            }
        }
    }
})


export const TextBold = styled('p', {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '$lg',
    color: '$gray100',

    marginTop: '1.5rem',
    marginBottom: '2rem',
})

export const CloseCartContainer = styled('div', {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    cursor: 'pointer',
    width: '100%',
})


