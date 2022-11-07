import originalConfig from '../rollup.config';

const testConfig = Object.assign({}, originalConfig(), {
  input: [
    'site/_js/web-components/checkbox-group/_checkbox-group',
    'site/_js/misc/load-more/_load-more',
  ],
});

export default testConfig;
