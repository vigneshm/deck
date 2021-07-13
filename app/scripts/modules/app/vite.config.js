import dotenv from 'dotenv';
import path from 'path';
import strip from 'rollup-plugin-strip-code';
import { defineConfig } from 'vite';

import angularTemplateLoader from '@spinnaker/scripts/helpers/rollup-plugin-angularjs-template-loader';

const DECK_ROOT = path.resolve(`${__dirname}/../../../..`);
const NODE_MODULE_PATH = path.resolve(`${DECK_ROOT}/node_modules`);

dotenv.config({
  path: path.resolve(`${__dirname}/.env.local`),
});

export default defineConfig({
  clearScreen: false,
  plugins: [
    strip({
      exclude: /node_modules/,
      pattern: new RegExp(
        `([\\t ]*\\/\\*! ?Start - Rollup Remove ?\\*\\/)[\\s\\S]*?(\\/\\*! ?End - Rollup Remove ?\\*\\/[\\t ]*\\n?)`,
        'g',
      ),
    }),
    angularTemplateLoader({ sourceMap: true }),
  ],
  resolve: {
    alias: [
      { find: 'root', replacement: DECK_ROOT },
      {
        find: 'coreImports',
        replacement: `${NODE_MODULE_PATH}/@spinnaker/core/src/presentation/less/imports/commonImports.less`,
      },
    ],
    mainFields: ['module', 'jsnext:main', 'jsnext', 'main:esnext'],
  },
  server: {
    host: process.env.DECK_HOST,
    https: process.env.DECK_HTTPS === 'true' ? { maxSessionMemory: 100, peerMaxConcurrentStreams: 300 } : false,
    port: 9000,
  },
});
