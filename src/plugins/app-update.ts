import { Plugin, Cordova } from './plugin';

/**
 * @name AppUpdate
 * @description
 * This plugin does self-update for android
 *
 * @usage
 * ```
 * import { AppUpdate } from 'ionic-native';
 *
 * let updateUrl = 'http://your-remote-api';
 * AppUpdate.checkAppUpdate(updateUrl)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 * ```
 */
@Plugin({
  pluginName: 'AppUpdate',
  plugin: 'cordova-plugin-app-update',
  pluginRef: 'AppUpdate',
  repo: 'https://github.com/xueron/cordova-plugin-app-update',
  install: 'ionic plugin add https://github.com/xueron/cordova-plugin-app-update',
  platforms: ['Android']
})
export class AppUpdate {
  /**
   * Check and update
   * @param updateUrl {string} update api url
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static checkAppUpdate(updateUrl: string): Promise<any> { return; }
}

