import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { IMAGE_BASE_URL } from './shared_utils/constants';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        if (!(config.loaderParams && config.loaderParams['quality'])) {
          // https://angular.io/guide/image-directive#the-loaderparams-property
          throw new Error(
            'Attempted to retrieve image from image server without setting the loaderParams quality attribute'
          );
        }
        const getParams = [`filebase=${config.src}`, `quality=${config.loaderParams['quality']}`];
        if (config.width) {
          getParams.push(`width=${config.width}`);
        }
        if (config.loaderParams && config.loaderParams['height']) {
          getParams.push(`height=${config.loaderParams['height']}`);
        }
        let url = `${IMAGE_BASE_URL}?${getParams.join('&')}`;
        return url;
      },
    },
  ],
};
