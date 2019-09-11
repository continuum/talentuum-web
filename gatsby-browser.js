/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import netlifyIdentity  from 'netlify-identity-widget';
import {intercomUserData} from './src/services/auth'
import * as Sentry from '@sentry/browser';

export function onInitialClientRender() {
  netlifyIdentity.init();
  showIntercom();
  Sentry.init({ dsn: 'https://752dd13dc7ca49339b6d2e414034f6f4@sentry.io/1723144' });
}

export function onRouteUpdate() {
  showIntercom();
}

function showIntercom() {
  window.setTimeout(function() {
    if (window.Intercom) {
        window.Intercom('boot', intercomUserData());
        window.Intercom('update');
        if (!(/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent))) {
           window.Intercom('showMessages')
        }
    }
  }, 2000);
}