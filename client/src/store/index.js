import { color } from 'framer-motion';
import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: false,
    isFullTexture: false,
    logoDecal: './teecraft2.png',
    fullDecal: './teecraft2.png'
});

export default state;