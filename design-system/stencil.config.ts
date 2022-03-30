import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  devServer: { openBrowser: false },
  namespace: 'yoobic-design-system',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
  plugins: [sass()],
};
