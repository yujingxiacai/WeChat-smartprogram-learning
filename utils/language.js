/*
Tencent is pleased to support the open source community by making WeChat iHearing available.

Copyright (C) 2019 THL A29 Limited, a Tencent company. All rights reserved.

Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
http://opensource.org/licenses/MIT

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

// 用于放置不同语言的提示语
// 目前只有中文
let language = [
    {
        id: 0,
        lang_name: "中文",
    lang_content: "zh_CN",//en_US
        recognize_nothing:"请说话",
        exceed_network:"网络请求失败",
        retry_network:"尝试重新连接",
        access_auth:"请检查权限",
        access_network:"网络错误",
    },
    {
      id: 1,
      lang_name: "English",
      lang_content: "en_US",//en_US
      recognize_nothing: "please speak",
      exceed_network: "Network request failed",
      retry_network: "Try to reconnect",
      access_auth: "Please check the permissions",
      access_network: "Network Error",
    },
]

module.exports = {
    language: language,
}
