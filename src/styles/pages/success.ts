import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        fontSize: '$lg',
        display: 'block',
        marginTop: '5rem',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        }
    }
})

export const ImageContainer = styled('div', {
    width: 145,
    height: 145,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: "50%",
    padding: '0.25rem',
    marginTop: '4rem',
    marginLeft: '-6.25%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    }
})

export const ImagesContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginRight: '-6.25%',
})