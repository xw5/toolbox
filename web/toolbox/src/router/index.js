// 1. 定义路由组件.
// 也可以从其他文件导入
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import UrlEncode from '../pages/UrlEncode.vue';
import ColorConversion from '../pages/ColorConversion.vue';
import TimeConversion from '../pages/TimeConversion.vue';
import Base64Encode from '../pages/Base64Encode.vue';
import SpecialSymbols from '../pages/SpecialSymbols.vue';
import Qrcode from '../pages/Qrcode.vue';
import JsonHelper from '../pages/JsonHelper.vue';
import DiffHelper from '../pages/DiffHelper.vue';
import ImgpHelper from '../pages/ImgHelper.vue';
import RegexHelper from '../pages/RegexHelper.vue';
import FormatJxyHelper from '../pages/FormatJxyHelper.vue';
import Webview from '../pages/Webview.vue';
import Placeholder from '../pages/Placeholder.vue';

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { 
    path: '/',
    name: 'home',
    component: Home
  },
  { 
    path: '/url-encode',
    name: 'url-encode',
    component: UrlEncode
  },{ 
    path: '/color-conversion',
    name: 'color-conversion',
    component: ColorConversion
  },{ 
    path: '/time-conversion',
    name: 'time-conversion',
    component: TimeConversion
  },{ 
    path: '/base64-encode',
    name: 'base64-encode',
    component: Base64Encode
  },{ 
    path: '/special-symbols',
    name: 'special-symbols',
    component: SpecialSymbols
  },{ 
    path: '/qrcode',
    name: 'qrcode',
    component: Qrcode
  },{ 
    path: '/json-helper',
    name: 'json-helper',
    component: JsonHelper
  },{ 
    path: '/img-helper',
    name: 'img-helper',
    component: ImgpHelper
  },{ 
    path: '/diff-helper',
    name: 'diff-helper',
    component: DiffHelper
  },{ 
    path: '/regex-helper',
    name: 'regex-helper',
    component: RegexHelper
  },{ 
    path: '/format-jxy-helper',
    name: 'format-jxy-helper',
    component: FormatJxyHelper
  },{ 
    path: '/placeholder-helper',
    name: 'placeholder-helper',
    component: Placeholder
  },
  { 
    path: '/webview',
    name: 'webview',
    component: Webview
  },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;