import { p as promiseResolve, b as bootstrapLazy } from './index-53f597c1.js';

/*
 Stencil Client Patch Browser v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["custom-welcome_2",[[1,"custom-welcome"],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
