/*
Tencent is pleased to support the open source community by making WeChat iHearing available.

Copyright (C) 2019 THL A29 Limited, a Tencent company. All rights reserved.

Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
http://opensource.org/licenses/MIT

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
// 全局注册小程序
/**
 * 开发者可以通过 getApp 方法获取到全局唯一的 App 示例，
 * 获取App上的数据或调用开发者注册在 App 上的函数。
 * const appInstance = getApp()
 */
App({
    onLaunch: function () {
      console.log('初始化完成，全局只执行一次');
    },
    onShow(options) {
      // Do something when show.
    },
    onHide() {
      // Do something when hide.
    },
    onError(msg) {
      console.log(msg)
    },
    // 权限询问 ，判断权限
    getRecordAuth: function() {
        wx.getSetting({
            success(res) {
                console.log("succ")
                console.log(res)
                if (!res.authSetting['scope.record']) {
                    wx.authorize({
                        scope: 'scope.record',
                        success() {
                                // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                                console.log("succ auth")
                        }, fail() {
                                console.log("fail auth")
                        }
                    })
                } else {
                    console.log("record has been authed")
                }
            }, fail(res) {
                    console.log("fail")
                    console.log(res)
            }
        })
    },
    //全局共享数据 ，相当于reudx vuex。。。
    globalData: {
        score_coeff: 1.0,
        userInfo: null,
        currentWordList: [
        ],
        currentSentenceList: [
        ],
        wordInfo: {}, // 单词数据
    }
})