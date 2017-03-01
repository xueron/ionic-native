/**
 * Created by sdh on 2017/2/28.
 */
import { Plugin, Cordova } from './plugin';
export interface WxOrder {
    appid: string;
    noncestr: string;
    package: string;
    partnerid: string;
    prepayid: string;
    timestamp: string;
    sign: string;
}
@Plugin({
    pluginName: 'Wxpay',
    plugin: 'cordova-plugin-wechat-payments',
    pluginRef: 'navigator.weixin',
    repo: 'https://github.com/happysdh/cordova-plugin-wechat-payments',
    install: 'ionic plugin add https://github.com/happysdh/cordova-plugin-wechat-payments',
    platforms: ['Android', 'iOS'],
})
export class Wxpay {

    @Cordova()
    static pay(order: WxOrder): Promise<any> { return; }
}
