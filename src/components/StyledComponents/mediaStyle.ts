import { css } from 'styled-components';

interface MediaFunc {
    less?: Function;
    bet?: Function;
    gre?: Function;
}

export const { desktop, tablet, phone } = {
    desktop: 992,
    tablet: 768,
    phone: 376,
};

const mediaFunc = {
    less: 'max-width',
    bet: 'max-width',
    gre: 'min-width',
};

export const media: MediaFunc = Object.keys(mediaFunc).reduce((acc, label) => {
    acc[label] = (size = phone) => (...args) => css`
        @media (max-width: ${size / 16}em) {
            ${css`
                ${args}
            `}
        }
    `;
    return acc;
}, {});

export default media;
