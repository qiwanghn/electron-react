const SRC  = './src';
const DIST = './app';

const config = {
    path: {
        html: {
            src: SRC,
            dist: DIST
        },
        style: {
            src: SRC + '/sass/',
            dist: DIST + '/css'
        },
        script: {
            src: SRC + '/js/',
            dist: DIST + '/js/'
        }
    }
};

export default config;