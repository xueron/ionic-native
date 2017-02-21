import { Plugin, Cordova } from './plugin';
/**
 * @name AppUpdate
 * @description
 *  This plugin is used for app update.
 *
 * Requires Cordova plugin: `cordova-plugin-app-update`. For more info, please see the [AppUpdate plugin docs](https://github.com/vaenow/cordova-plugin-app-update).
 *
 * @usage
 * ```
 * import { AppUpdate } from 'ionic-native';
 * 
 * AppUpdate.checkAppUpdate(updateUrl)
 *    .then(result => {
 *       console.log(result); // Success
 *    })
 *    .catch(error => {
 *       console.log(error); // Failed
 *    });
 *
 * ```
 */
@Plugin({
  pluginName: 'AppUpdate',
  plugin: 'cordova-plugin-app-update',
  pluginRef: 'AppUpdate',
  repo: 'https://github.com/vaenow/cordova-plugin-app-update',
  platforms: ['Android'],
  install: 'ionic plugin add https://github.com/vaenow/cordova-plugin-app-update'
})
export class AppUpdate {
  /**
   * checkAppUpdate
   * @param string updateUrl
   * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Cordova()
  static checkAppUpdate(string: updateUrl): Promise<any> { return; }
}

