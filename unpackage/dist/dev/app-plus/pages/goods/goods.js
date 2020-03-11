"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************************************!*\
  !*** E:/Store-uniapp/main.js?{"page":"pages%2Fgoods%2Fgoods"} ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_goods_goods_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/goods/goods.nvue?mpType=page */ 8);

        
        
        
        _pages_goods_goods_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_goods_goods_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/goods/goods'
        _pages_goods_goods_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_goods_goods_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 2);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 3).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 4).default || __webpack_require__(/*! uni-stat-config */ 4);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@alpha","_id":"@dcloudio/uni-stat@2.0.0-alpha-25720200116005","_inBundle":false,"_integrity":"sha512-RZFw3WAaS/CZTzzv9JPaWvmoNitojD/06vPdHSzlqZi8GbuE222lFuyochEjrGkG8rPPrWHAnwfoPBuQVtkfdg==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@alpha","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"alpha","saveSpec":null,"fetchSpec":"alpha"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25720200116005.tgz","_shasum":"08bb17aba91c84a981f33d74153aa3dd07b578ad","_spec":"@dcloudio/uni-stat@alpha","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"a129bde60de35f7ef497f43d5a45b4556231995c","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-alpha-25720200116005"};

/***/ }),
/* 3 */
/*!***************************************************!*\
  !*** E:/Store-uniapp/pages.json?{"type":"style"} ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 4 */
/*!**************************************************!*\
  !*** E:/Store-uniapp/pages.json?{"type":"stat"} ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__8161704"});

/***/ }),
/* 5 */
/*!***************************************************!*\
  !*** E:/Store-uniapp/main.js?{"type":"appStyle"} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 6).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 6 */
/*!***************************************************************!*\
  !*** E:/Store-uniapp/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 7);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "purple": {
    "color": "#0A0157"
  }
}

/***/ }),
/* 8 */
/*!**********************************************************!*\
  !*** E:/Store-uniapp/pages/goods/goods.nvue?mpType=page ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_nvue_vue_type_template_id_60e7df12_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods.nvue?vue&type=template&id=60e7df12&mpType=page */ 9);
/* harmony import */ var _goods_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods.nvue?vue&type=script&lang=js&mpType=page */ 40);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _goods_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_nvue_vue_type_template_id_60e7df12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_nvue_vue_type_template_id_60e7df12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "19f930cd",
  false,
  _goods_nvue_vue_type_template_id_60e7df12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/Store-uniapp/pages/goods/goods.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */
/*!****************************************************************************************!*\
  !*** E:/Store-uniapp/pages/goods/goods.nvue?vue&type=template&id=60e7df12&mpType=page ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_nvue_vue_type_template_id_60e7df12_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./goods.nvue?vue&type=template&id=60e7df12&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_nvue_vue_type_template_id_60e7df12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_nvue_vue_type_template_id_60e7df12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_nvue_vue_type_template_id_60e7df12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_nvue_vue_type_template_id_60e7df12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/pages/goods/goods.nvue?vue&type=template&id=60e7df12&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "nav-bar": __webpack_require__(/*! @/components/nav-bar/nav-bar.nvue */ 11).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c(
        "view",
        [
          _c("nav-bar", {
            attrs: { title: "Nike", leftIcon: "arrowleft" },
            on: { clickLeft: _vm.back }
          })
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!*******************************************************!*\
  !*** E:/Store-uniapp/components/nav-bar/nav-bar.nvue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_bar_nvue_vue_type_template_id_391a622e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.nvue?vue&type=template&id=391a622e& */ 12);
/* harmony import */ var _nav_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar.nvue?vue&type=script&lang=js& */ 14);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nav_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nav_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nav_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_bar_nvue_vue_type_template_id_391a622e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nav_bar_nvue_vue_type_template_id_391a622e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "a5a238f2",
  false,
  _nav_bar_nvue_vue_type_template_id_391a622e___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/Store-uniapp/components/nav-bar/nav-bar.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/*!**************************************************************************************!*\
  !*** E:/Store-uniapp/components/nav-bar/nav-bar.nvue?vue&type=template&id=391a622e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nav_bar_nvue_vue_type_template_id_391a622e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nav-bar.nvue?vue&type=template&id=391a622e& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nav_bar_nvue_vue_type_template_id_391a622e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nav_bar_nvue_vue_type_template_id_391a622e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nav_bar_nvue_vue_type_template_id_391a622e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nav_bar_nvue_vue_type_template_id_391a622e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/components/nav-bar/nav-bar.nvue?vue&type=template&id=391a622e& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("uni-nav-bar", {
    attrs: {
      title: _vm.title,
      padding: 60,
      fixed: true,
      statusBar: true,
      shadow: false,
      border: false,
      color: "#0A0157",
      leftIcon: _vm.leftIcon,
      backgroundColor: "#f9f9ff"
    },
    on: { clickLeft: _vm.clickLeft }
  })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!********************************************************************************!*\
  !*** E:/Store-uniapp/components/nav-bar/nav-bar.nvue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nav_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nav-bar.nvue?vue&type=script&lang=js& */ 15);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nav_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nav_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nav_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nav_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nav_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/components/nav-bar/nav-bar.nvue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





var _uni = __webpack_require__(/*! ../uni */ 16); //
//
//
//
//
var _default2 = { components: {
    uniNavBar: _uni.uniNavBar },

  props: {
    title: {
      type: String,
      default: function _default() {
        return 'hubjoy';
      } },

    leftIcon: {
      type: String,
      default: function _default() {
        return 'bars';
      } } },


  methods: {
    clickLeft: function clickLeft() {
      this.$emit('clickLeft');
    } } };exports.default = _default2;

/***/ }),
/* 16 */
/*!***********************************************!*\
  !*** E:/Store-uniapp/components/uni/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "uniNavBar", { enumerable: true, get: function get() {return _uniNavBar.default;} });Object.defineProperty(exports, "uniIcons", { enumerable: true, get: function get() {return _uniIcons.default;} });Object.defineProperty(exports, "uniStatusBar", { enumerable: true, get: function get() {return _uniStatusBar.default;} });var _uniNavBar = _interopRequireDefault(__webpack_require__(/*! ./uni-nav-bar/uni-nav-bar.vue */ 17));
var _uniIcons = _interopRequireDefault(__webpack_require__(/*! ./uni-icons/uni-icons.vue */ 30));
var _uniStatusBar = _interopRequireDefault(__webpack_require__(/*! ./uni-status-bar/uni-status-bar.vue */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),
/* 17 */
/*!******************************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-nav-bar/uni-nav-bar.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_nav_bar_vue_vue_type_template_id_2061fad2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-nav-bar.vue?vue&type=template&id=2061fad2&scoped=true& */ 18);
/* harmony import */ var _uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-nav-bar.vue?vue&type=script&lang=js& */ 20);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-nav-bar.vue?vue&type=style&index=0&id=2061fad2&lang=scss&scoped=true& */ 38).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-nav-bar.vue?vue&type=style&index=0&id=2061fad2&lang=scss&scoped=true& */ 38).default)
            }

}

/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_nav_bar_vue_vue_type_template_id_2061fad2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_nav_bar_vue_vue_type_template_id_2061fad2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2061fad2",
  "7122e35e",
  false,
  _uni_nav_bar_vue_vue_type_template_id_2061fad2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/Store-uniapp/components/uni/uni-nav-bar/uni-nav-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 18 */
/*!*************************************************************************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-nav-bar/uni-nav-bar.vue?vue&type=template&id=2061fad2&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_template_id_2061fad2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-nav-bar.vue?vue&type=template&id=2061fad2&scoped=true& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_template_id_2061fad2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_template_id_2061fad2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_template_id_2061fad2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_template_id_2061fad2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/components/uni/uni-nav-bar/uni-nav-bar.vue?vue&type=template&id=2061fad2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["uni-navbar"] }, [
    _c(
      "view",
      {
        staticClass: ["uni-navbar__content"],
        class: {
          "uni-navbar--fixed": _vm.fixed,
          "uni-navbar--shadow": _vm.shadow,
          "uni-navbar--border": _vm.border
        },
        style: { "background-color": _vm.backgroundColor }
      },
      [
        _vm.statusBar ? _c("uni-status-bar") : _vm._e(),
        _c(
          "view",
          {
            staticClass: ["uni-navbar__header", "uni-navbar__content_view"],
            style: {
              color: _vm.color,
              backgroundColor: _vm.backgroundColor,
              paddingLeft: _vm.padding + "rpx",
              paddingRight: _vm.padding + "rpx"
            }
          },
          [
            _c(
              "view",
              {
                staticClass: [
                  "uni-navbar__header-btns",
                  "uni-navbar__header-btns-left",
                  "uni-navbar__content_view"
                ],
                on: { click: _vm.onClickLeft }
              },
              [
                _vm.leftIcon.length
                  ? _c(
                      "view",
                      { staticClass: ["uni-navbar__content_view"] },
                      [
                        _c("uni-icons", {
                          attrs: {
                            color: _vm.color,
                            type: _vm.leftIcon,
                            size: "24"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm.leftText.length
                  ? _c(
                      "view",
                      {
                        staticClass: [
                          "uni-navbar-btn-text",
                          "uni-navbar__content_view"
                        ],
                        class: {
                          "uni-navbar-btn-icon-left": !_vm.leftIcon.length
                        }
                      },
                      [
                        _c(
                          "u-text",
                          { style: { color: _vm.color, fontSize: "14px" } },
                          [_vm._v(_vm._s(_vm.leftText))]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._t("left")
              ],
              2
            ),
            _c(
              "view",
              {
                staticClass: [
                  "uni-navbar__header-container",
                  "uni-navbar__content_view"
                ]
              },
              [
                _vm.title.length
                  ? _c(
                      "view",
                      {
                        staticClass: [
                          "uni-navbar__header-container-inner",
                          "uni-navbar__content_view"
                        ]
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["uni-nav-bar-text"],
                            style: { color: _vm.color }
                          },
                          [_vm._v(_vm._s(_vm.title))]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._t("default")
              ],
              2
            ),
            _c(
              "view",
              {
                staticClass: [
                  "uni-navbar__header-btns",
                  "uni-navbar__content_view"
                ],
                class: _vm.title.length ? "uni-navbar__header-btns-right" : "",
                on: { click: _vm.onClickRight }
              },
              [
                _vm.rightIcon.length
                  ? _c(
                      "view",
                      { staticClass: ["uni-navbar__content_view"] },
                      [
                        _c("uni-icons", {
                          attrs: {
                            color: _vm.color,
                            type: _vm.rightIcon,
                            size: "24"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm.rightText.length && !_vm.rightIcon.length
                  ? _c(
                      "view",
                      {
                        staticClass: [
                          "uni-navbar-btn-text",
                          "uni-navbar__content_view"
                        ]
                      },
                      [
                        _c(
                          "u-text",
                          { staticClass: ["uni-nav-bar-right-text"] },
                          [_vm._v(_vm._s(_vm.rightText))]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._t("right")
              ],
              2
            )
          ]
        )
      ],
      1
    ),
    _vm.fixed
      ? _c(
          "view",
          { staticClass: ["uni-navbar__placeholder"] },
          [
            _vm.statusBar ? _c("uni-status-bar") : _vm._e(),
            _c("view", { staticClass: ["uni-navbar__placeholder-view"] })
          ],
          1
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!*******************************************************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-nav-bar/uni-nav-bar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-nav-bar.vue?vue&type=script&lang=js& */ 21);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/components/uni/uni-nav-bar/uni-nav-bar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;










































var _uniStatusBar = _interopRequireDefault(__webpack_require__(/*! ../uni-status-bar/uni-status-bar.vue */ 22));
var _uniIcons = _interopRequireDefault(__webpack_require__(/*! ../uni-icons/uni-icons.vue */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { name: "UniNavBar", components: { uniStatusBar: _uniStatusBar.default, uniIcons: _uniIcons.default }, props: { title: { type: String, default: "" }, padding: { type: Number, default: 0 }, leftText: { type: String, default: "" }, rightText: { type: String, default: "" }, leftIcon: { type: String, default: "" }, rightIcon: { type: String, default: "" }, fixed: { type: [Boolean, String], default: false }, color: { type: String, default: "#000000" }, backgroundColor: { type: String,
      default: "#FFFFFF" },

    statusBar: {
      type: [Boolean, String],
      default: false },

    shadow: {
      type: [String, Boolean],
      default: false },

    border: {
      type: [String, Boolean],
      default: true } },


  mounted: function mounted() {
    if (uni.report && this.title !== '') {
      uni.report('title', this.title);
    }
  },
  methods: {
    onClickLeft: function onClickLeft() {
      this.$emit("clickLeft");
    },
    onClickRight: function onClickRight() {
      this.$emit("clickRight");
    } } };exports.default = _default;

/***/ }),
/* 22 */
/*!************************************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-status-bar/uni-status-bar.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_status_bar_vue_vue_type_template_id_92e3f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-status-bar.vue?vue&type=template&id=92e3f646&scoped=true& */ 23);
/* harmony import */ var _uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-status-bar.vue?vue&type=script&lang=js& */ 25);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-status-bar.vue?vue&type=style&index=0&id=92e3f646&lang=scss&scoped=true& */ 27).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-status-bar.vue?vue&type=style&index=0&id=92e3f646&lang=scss&scoped=true& */ 27).default)
            }

}

/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_status_bar_vue_vue_type_template_id_92e3f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_status_bar_vue_vue_type_template_id_92e3f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "92e3f646",
  "0dd1be11",
  false,
  _uni_status_bar_vue_vue_type_template_id_92e3f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/Store-uniapp/components/uni/uni-status-bar/uni-status-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 23 */
/*!*******************************************************************************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-status-bar/uni-status-bar.vue?vue&type=template&id=92e3f646&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_template_id_92e3f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-status-bar.vue?vue&type=template&id=92e3f646&scoped=true& */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_template_id_92e3f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_template_id_92e3f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_template_id_92e3f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_template_id_92e3f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/components/uni/uni-status-bar/uni-status-bar.vue?vue&type=template&id=92e3f646&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["uni-status-bar"], style: { height: _vm.statusBarHeight } },
    [_vm._t("default")],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */
/*!*************************************************************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-status-bar/uni-status-bar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-status-bar.vue?vue&type=script&lang=js& */ 26);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/components/uni/uni-status-bar/uni-status-bar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//

var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';var _default =
{
  name: 'UniStatusBar',
  data: function data() {
    return {
      statusBarHeight: statusBarHeight };

  } };exports.default = _default;

/***/ }),
/* 27 */
/*!**********************************************************************************************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-status-bar/uni-status-bar.vue?vue&type=style&index=0&id=92e3f646&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_92e3f646_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-status-bar.vue?vue&type=style&index=0&id=92e3f646&lang=scss&scoped=true& */ 28);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_92e3f646_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_92e3f646_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_92e3f646_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_92e3f646_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_92e3f646_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/components/uni/uni-status-bar/uni-status-bar.vue?vue&type=style&index=0&id=92e3f646&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-status-bar": {
    "width": "750rpx",
    "height": "20"
  }
}

/***/ }),
/* 29 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    options.components = Object.assign(components, options.components || {})
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 30 */
/*!**************************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-icons/uni-icons.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_icons_vue_vue_type_template_id_cc2e650e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=template&id=cc2e650e&scoped=true& */ 31);
/* harmony import */ var _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=script&lang=js& */ 33);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&id=cc2e650e&lang=scss&scoped=true& */ 36).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&id=cc2e650e&lang=scss&scoped=true& */ 36).default)
            }

}

/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_icons_vue_vue_type_template_id_cc2e650e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_icons_vue_vue_type_template_id_cc2e650e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cc2e650e",
  "0509a573",
  false,
  _uni_icons_vue_vue_type_template_id_cc2e650e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/Store-uniapp/components/uni/uni-icons/uni-icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 31 */
/*!*********************************************************************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-icons/uni-icons.vue?vue&type=template&id=cc2e650e&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_cc2e650e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=template&id=cc2e650e&scoped=true& */ 32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_cc2e650e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_cc2e650e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_cc2e650e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_cc2e650e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 32 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/components/uni/uni-icons/uni-icons.vue?vue&type=template&id=cc2e650e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "u-text",
    {
      staticClass: ["uni-icons"],
      style: { color: _vm.color, "font-size": _vm.size + "px" },
      on: { click: _vm._onClick }
    },
    [_vm._v(_vm._s(_vm.icons[_vm.type]))]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 33 */
/*!***************************************************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=script&lang=js& */ 34);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 34 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/components/uni/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




var _icons = _interopRequireDefault(__webpack_require__(/*! ./icons.js */ 35));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
var domModule = weex.requireModule('dom');domModule.addRule('fontFace', { 'fontFamily': "uniicons",
  'src': "url('data:font/truetype;charset=utf-8;base64,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PDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuw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bmlFMjAwB3VuaUUyMDEHdW5pRTIwMgd1bmlFMjAzB3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTI2MAd1bmlFMjYxB3VuaUUyNjIHdW5pRTI2Mwd1bmlFMjY0B3VuaUUzMDAHdW5pRTMwMQd1bmlFMzAyB3VuaUUzMDMHdW5pRTMzMgd1bmlFMzMzB3VuaUUzNjAHdW5pRTM2Mwd1bmlFMzY0B3VuaUU0MDAHdW5pRTQwMQd1bmlFNDAyB3VuaUU0MDMHdW5pRTQwNAd1bmlFNDA1B3VuaUU0MDYHdW5pRTQwNwd1bmlFNDA4B3VuaUU0MDkHdW5pRTQxMAd1bmlFNDExB3VuaUU0MTMHdW5pRTQzNAd1bmlFNDM3B3VuaUU0MzgHdW5pRTQzOQd1bmlFNDQwB3VuaUU0NDEHdW5pRTQ0Mgd1bmlFNDQzB3VuaUU0NjAHdW5pRTQ2MQd1bmlFNDYyB3VuaUU0NjMHdW5pRTQ2NAd1bmlFNDY1B3VuaUU0NjYHdW5pRTQ2OAd1bmlFNDcwB3VuaUU0NzEHdW5pRTQ3Mgd1bmlFNTAwB3VuaUU1MDEHdW5pRTUwMgd1bmlFNTAzB3VuaUU1MDQHdW5pRTUwNQd1bmlFNTA2B3VuaUU1MDcHdW5pRTUwOAd1bmlFNTMwB3VuaUU1MzIHdW5pRTUzNAd1bmlFNTM1B3VuaUU1MzcHdW5pRTU2MAd1bmlFNTYyB3VuaUU1NjMHdW5pRTU2NQd1bmlFNTY3B3VuaUU1NjgHdW5pRTU4MAd1bmlFNTgxB3VuaUU1ODIHdW5pRTU4Mwd1bmlFNTg0B3VuaUU1ODUHdW5pRTU4Ngd1bmlFNTg3B3VuaUU1ODgHdW5pRTU4OQRFdXJvB3VuaUU2MTIAAAEAAf//AA8AAQAAAAwAAAAWAAAAAgABAAEAXwABAAQAAAACAAAAAAAAAAEAAAAA1aQnCAAAAADZqlu5AAAAANmqXAk=')" });var _default =


{
  name: 'UniIcons',
  props: {
    type: {
      type: String,
      default: '' },

    color: {
      type: String,
      default: '#333333' },

    size: {
      type: [Number, String],
      default: 16 } },


  data: function data() {
    return {
      icons: _icons.default };

  },
  methods: {
    _onClick: function _onClick() {
      this.$emit('click');
    } } };exports.default = _default;

/***/ }),
/* 35 */
/*!*********************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-icons/icons.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  'contact': "\uE100",
  'person': "\uE101",
  'personadd': "\uE102",
  'contact-filled': "\uE130",
  'person-filled': "\uE131",
  'personadd-filled': "\uE132",
  'phone': "\uE200",
  'email': "\uE201",
  'chatbubble': "\uE202",
  'chatboxes': "\uE203",
  'phone-filled': "\uE230",
  'email-filled': "\uE231",
  'chatbubble-filled': "\uE232",
  'chatboxes-filled': "\uE233",
  'weibo': "\uE260",
  'weixin': "\uE261",
  'pengyouquan': "\uE262",
  'chat': "\uE263",
  'qq': "\uE264",
  'videocam': "\uE300",
  'camera': "\uE301",
  'mic': "\uE302",
  'location': "\uE303",
  'mic-filled': "\uE332",
  'speech': "\uE332",
  'location-filled': "\uE333",
  'micoff': "\uE360",
  'image': "\uE363",
  'map': "\uE364",
  'compose': "\uE400",
  'trash': "\uE401",
  'upload': "\uE402",
  'download': "\uE403",
  'close': "\uE404",
  'redo': "\uE405",
  'undo': "\uE406",
  'refresh': "\uE407",
  'star': "\uE408",
  'plus': "\uE409",
  'minus': "\uE410",
  'circle': "\uE411",
  'checkbox': "\uE411",
  'close-filled': "\uE434",
  'clear': "\uE434",
  'refresh-filled': "\uE437",
  'star-filled': "\uE438",
  'plus-filled': "\uE439",
  'minus-filled': "\uE440",
  'circle-filled': "\uE441",
  'checkbox-filled': "\uE442",
  'closeempty': "\uE460",
  'refreshempty': "\uE461",
  'reload': "\uE462",
  'starhalf': "\uE463",
  'spinner': "\uE464",
  'spinner-cycle': "\uE465",
  'search': "\uE466",
  'plusempty': "\uE468",
  'forward': "\uE470",
  'back': "\uE471",
  'left-nav': "\uE471",
  'checkmarkempty': "\uE472",
  'home': "\uE500",
  'navigate': "\uE501",
  'gear': "\uE502",
  'paperplane': "\uE503",
  'info': "\uE504",
  'help': "\uE505",
  'locked': "\uE506",
  'more': "\uE507",
  'flag': "\uE508",
  'home-filled': "\uE530",
  'gear-filled': "\uE532",
  'info-filled': "\uE534",
  'help-filled': "\uE535",
  'more-filled': "\uE537",
  'settings': "\uE560",
  'list': "\uE562",
  'bars': "\uE563",
  'loop': "\uE565",
  'paperclip': "\uE567",
  'eye': "\uE568",
  'arrowup': "\uE580",
  'arrowdown': "\uE581",
  'arrowleft': "\uE582",
  'arrowright': "\uE583",
  'arrowthinup': "\uE584",
  'arrowthindown': "\uE585",
  'arrowthinleft': "\uE586",
  'arrowthinright': "\uE587",
  'pulldown': "\uE588",
  'closefill': "\uE589",
  'sound': "\uE590",
  'scan': "\uE612" };exports.default = _default;

/***/ }),
/* 36 */
/*!************************************************************************************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-icons/uni-icons.vue?vue&type=style&index=0&id=cc2e650e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_cc2e650e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=style&index=0&id=cc2e650e&lang=scss&scoped=true& */ 37);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_cc2e650e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_cc2e650e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_cc2e650e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_cc2e650e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_cc2e650e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/components/uni/uni-icons/uni-icons.vue?vue&type=style&index=0&id=cc2e650e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-icons": {
    "fontFamily": "uniicons",
    "textDecoration": "none",
    "textAlign": "center"
  }
}

/***/ }),
/* 38 */
/*!****************************************************************************************************************************!*\
  !*** E:/Store-uniapp/components/uni/uni-nav-bar/uni-nav-bar.vue?vue&type=style&index=0&id=2061fad2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_2061fad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-nav-bar.vue?vue&type=style&index=0&id=2061fad2&lang=scss&scoped=true& */ 39);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_2061fad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_2061fad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_2061fad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_2061fad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_2061fad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 39 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/components/uni/uni-nav-bar/uni-nav-bar.vue?vue&type=style&index=0&id=2061fad2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-nav-bar-text": {
    "fontSize": "34rpx"
  },
  "uni-nav-bar-right-text": {
    "fontSize": "28upx"
  },
  "uni-navbar": {
    "width": "750rpx"
  },
  "uni-navbar__content": {
    "position": "relative",
    "width": "750rpx",
    "backgroundColor": "#ffffff",
    "overflow": "hidden"
  },
  "uni-navbar__content_view": {
    "alignItems": "center",
    "flexDirection": "row"
  },
  "uni-navbar__header": {
    "flexDirection": "row",
    "width": "750rpx",
    "height": "44",
    "lineHeight": "44",
    "fontSize": "16",
    "boxSizing": "border-box"
  },
  "uni-navbar__header-btns": {
    "flexWrap": "nowrap",
    "width": "120rpx",
    "paddingTop": 0,
    "paddingRight": "6",
    "paddingBottom": 0,
    "paddingLeft": "6",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "uni-navbar__header-btns-left": {
    "width": "150rpx",
    "justifyContent": "flex-start"
  },
  "uni-navbar__header-btns-right": {
    "width": "150rpx",
    "paddingRight": "30rpx",
    "justifyContent": "flex-end"
  },
  "uni-navbar__header-container": {
    "flex": 1
  },
  "uni-navbar__header-container-inner": {
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "center",
    "fontSize": "28upx"
  },
  "uni-navbar__placeholder-view": {
    "height": "44"
  },
  "uni-navbar--fixed": {
    "position": "fixed",
    "zIndex": 998
  },
  "uni-navbar--border": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#c8c7cc"
  }
}

/***/ }),
/* 40 */
/*!**********************************************************************************!*\
  !*** E:/Store-uniapp/pages/goods/goods.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./goods.nvue?vue&type=script&lang=js&mpType=page */ 41);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_goods_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Store-uniapp/pages/goods/goods.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






var _navBar = _interopRequireDefault(__webpack_require__(/*! @/components/nav-bar/nav-bar.nvue */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
var _default = { components: { navBar: _navBar.default }, data: function data() {
    return {};


  },
  methods: {
    back: function back(e) {
      uni.navigateBack();
    } } };exports.default = _default;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvbWFpbi5qcz81NTU2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvcGFnZXMuanNvbj85YjRlIiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvcGFnZXMuanNvbj80ZjU0Iiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvbWFpbi5qcz9jMDE3Iiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvQXBwLnZ1ZT82M2FlIiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvQXBwLnZ1ZT8wMDVkIiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvcGFnZXMvZ29vZHMvZ29vZHMubnZ1ZT84ZDMzIiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvcGFnZXMvZ29vZHMvZ29vZHMubnZ1ZT8yMzFjIiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvcGFnZXMvZ29vZHMvZ29vZHMubnZ1ZT82ZjJlIiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIubnZ1ZT9jZmU5Iiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIubnZ1ZT8zZTY5Iiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIubnZ1ZT8yOTE3Iiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIubnZ1ZT84NzAzIiwidW5pLWFwcDovLy9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5udnVlIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VuaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vRTovU3RvcmUtdW5pYXBwL2NvbXBvbmVudHMvdW5pL3VuaS1uYXYtYmFyL3VuaS1uYXYtYmFyLnZ1ZT82MTJkIiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvY29tcG9uZW50cy91bmkvdW5pLW5hdi1iYXIvdW5pLW5hdi1iYXIudnVlP2QxMDciLCJ3ZWJwYWNrOi8vL0U6L1N0b3JlLXVuaWFwcC9jb21wb25lbnRzL3VuaS91bmktbmF2LWJhci91bmktbmF2LWJhci52dWU/ZjUxYSIsIndlYnBhY2s6Ly8vRTovU3RvcmUtdW5pYXBwL2NvbXBvbmVudHMvdW5pL3VuaS1uYXYtYmFyL3VuaS1uYXYtYmFyLnZ1ZT9iNjZjIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VuaS91bmktbmF2LWJhci91bmktbmF2LWJhci52dWUiLCJ3ZWJwYWNrOi8vL0U6L1N0b3JlLXVuaWFwcC9jb21wb25lbnRzL3VuaS91bmktc3RhdHVzLWJhci91bmktc3RhdHVzLWJhci52dWU/Zjg1NyIsIndlYnBhY2s6Ly8vRTovU3RvcmUtdW5pYXBwL2NvbXBvbmVudHMvdW5pL3VuaS1zdGF0dXMtYmFyL3VuaS1zdGF0dXMtYmFyLnZ1ZT81ZWY5Iiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvY29tcG9uZW50cy91bmkvdW5pLXN0YXR1cy1iYXIvdW5pLXN0YXR1cy1iYXIudnVlPzE4M2QiLCJ3ZWJwYWNrOi8vL0U6L1N0b3JlLXVuaWFwcC9jb21wb25lbnRzL3VuaS91bmktc3RhdHVzLWJhci91bmktc3RhdHVzLWJhci52dWU/ZmM5OSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmkvdW5pLXN0YXR1cy1iYXIvdW5pLXN0YXR1cy1iYXIudnVlIiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvY29tcG9uZW50cy91bmkvdW5pLXN0YXR1cy1iYXIvdW5pLXN0YXR1cy1iYXIudnVlPzZiMjEiLCJ3ZWJwYWNrOi8vL0U6L1N0b3JlLXVuaWFwcC9jb21wb25lbnRzL3VuaS91bmktc3RhdHVzLWJhci91bmktc3RhdHVzLWJhci52dWU/MTI4NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/ZjBjNSIsIndlYnBhY2s6Ly8vRTovU3RvcmUtdW5pYXBwL2NvbXBvbmVudHMvdW5pL3VuaS1pY29ucy91bmktaWNvbnMudnVlPzc5NTQiLCJ3ZWJwYWNrOi8vL0U6L1N0b3JlLXVuaWFwcC9jb21wb25lbnRzL3VuaS91bmktaWNvbnMvdW5pLWljb25zLnZ1ZT85MDBhIiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvY29tcG9uZW50cy91bmkvdW5pLWljb25zL3VuaS1pY29ucy52dWU/MGQ3MiIsIndlYnBhY2s6Ly8vRTovU3RvcmUtdW5pYXBwL2NvbXBvbmVudHMvdW5pL3VuaS1pY29ucy91bmktaWNvbnMudnVlPzZmNTMiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pL3VuaS1pY29ucy91bmktaWNvbnMudnVlIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VuaS91bmktaWNvbnMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vL0U6L1N0b3JlLXVuaWFwcC9jb21wb25lbnRzL3VuaS91bmktaWNvbnMvdW5pLWljb25zLnZ1ZT9jMTRlIiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvY29tcG9uZW50cy91bmkvdW5pLWljb25zL3VuaS1pY29ucy52dWU/M2M4ZSIsIndlYnBhY2s6Ly8vRTovU3RvcmUtdW5pYXBwL2NvbXBvbmVudHMvdW5pL3VuaS1uYXYtYmFyL3VuaS1uYXYtYmFyLnZ1ZT82ZGZmIiwid2VicGFjazovLy9FOi9TdG9yZS11bmlhcHAvY29tcG9uZW50cy91bmkvdW5pLW5hdi1iYXIvdW5pLW5hdi1iYXIudnVlP2VjYTEiLCJ3ZWJwYWNrOi8vL0U6L1N0b3JlLXVuaWFwcC9wYWdlcy9nb29kcy9nb29kcy5udnVlP2EyZTUiLCJ1bmktYXBwOi8vL3BhZ2VzL2dvb2RzL2dvb2RzLm52dWUiXSwibmFtZXMiOlsiU1RBVF9WRVJTSU9OIiwidmVyc2lvbiIsIlNUQVRfVVJMIiwiU1RBVF9INV9VUkwiLCJQQUdFX1BWRVJfVElNRSIsIkFQUF9QVkVSX1RJTUUiLCJPUEVSQVRJTkdfVElNRSIsIlVVSURfS0VZIiwiVVVJRF9WQUxVRSIsImdldFV1aWQiLCJ1dWlkIiwiZ2V0UGxhdGZvcm1OYW1lIiwicGx1cyIsInJ1bnRpbWUiLCJnZXREQ2xvdWRJZCIsImUiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRTdG9yYWdlU3luYyIsImdldFNnaW4iLCJzdGF0RGF0YSIsImFyciIsIk9iamVjdCIsImtleXMiLCJzb3J0QXJyIiwic29ydCIsInNnaW4iLCJzZ2luU3RyIiwiaSIsInNpZ24iLCJvcHRpb25zIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2V0U3BsaWNpbmciLCJkYXRhIiwic3RyIiwiZ2V0VGltZSIsInBhcnNlSW50IiwicGxhdGZvcm1MaXN0IiwicHJvY2VzcyIsImdldFBhY2tOYW1lIiwicGFja05hbWUiLCJjYW5JVXNlIiwiZ2V0QWNjb3VudEluZm9TeW5jIiwibWluaVByb2dyYW0iLCJhcHBJZCIsImdldFZlcnNpb24iLCJnZXRDaGFubmVsIiwicGxhdGZvcm1OYW1lIiwiY2hhbm5lbCIsImdldFNjZW5lIiwic2NlbmUiLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsIkZpcnN0X19WaXNpdF9fVGltZV9fS0VZIiwiTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSIsImdldEZpcnN0VmlzaXRUaW1lIiwidGltZVN0b3JnZSIsInRpbWUiLCJyZW1vdmVTdG9yYWdlU3luYyIsImdldExhc3RWaXNpdFRpbWUiLCJQQUdFX1JFU0lERU5DRV9USU1FIiwiRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsIkxhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsInNldFBhZ2VSZXNpZGVuY2VUaW1lIiwiZ2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJUT1RBTF9fVklTSVRfX0NPVU5UIiwiZ2V0VG90YWxWaXNpdENvdW50IiwiY291bnQiLCJHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zIiwicHJvcCIsImVuY29kZVVSSUNvbXBvbmVudCIsIlNldF9fRmlyc3RfX1RpbWUiLCJTZXRfX0xhc3RfX1RpbWUiLCJnZXRGaXJzdFRpbWUiLCJnZXRMYXN0VGltZSIsImdldFJlc2lkZW5jZVRpbWUiLCJ0eXBlIiwicmVzaWRlbmNlVGltZSIsIm92ZXJ0aW1lIiwiZ2V0Um91dGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInBhZ2UiLCJfc2VsZiIsIiR2bSIsIiRtcCIsImlzIiwiJHNjb3BlIiwicm91dGUiLCJnZXRQYWdlUm91dGUiLCJzZWxmIiwicXVlcnkiLCJfcXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UGFnZVR5cGVzIiwibXBUeXBlIiwiJG9wdGlvbnMiLCJjYWxpYnJhdGlvbiIsImV2ZW50TmFtZSIsImNvbnNvbGUiLCJlcnJvciIsIlBhZ2VzSnNvbiIsInJlcXVpcmUiLCJkZWZhdWx0Iiwic3RhdENvbmZpZyIsInJlc3VsdE9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIlV0aWwiLCJfcmV0cnkiLCJfcGxhdGZvcm0iLCJfbmF2aWdhdGlvbkJhclRpdGxlIiwiY29uZmlnIiwicmVwb3J0IiwibHQiLCJfb3BlcmF0aW5nVGltZSIsIl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSIsIl9fcHJldmVudF90cmlnZ2VyaW5nIiwiX19saWNhdGlvbkhpZGUiLCJfX2xpY2F0aW9uU2hvdyIsIl9sYXN0UGFnZVJvdXRlIiwidXQiLCJtcG4iLCJhayIsImFwcGlkIiwidXN2IiwidiIsImNoIiwiY24iLCJwbiIsImN0IiwidCIsInR0IiwicCIsInBsYXRmb3JtIiwiYnJhbmQiLCJtZCIsIm1vZGVsIiwic3YiLCJzeXN0ZW0iLCJyZXBsYWNlIiwibXBzZGsiLCJTREtWZXJzaW9uIiwibXB2IiwibGFuZyIsImxhbmd1YWdlIiwicHIiLCJwaXhlbFJhdGlvIiwid3ciLCJ3aW5kb3dXaWR0aCIsIndoIiwid2luZG93SGVpZ2h0Iiwic3ciLCJzY3JlZW5XaWR0aCIsInNoIiwic2NyZWVuSGVpZ2h0IiwicGF0aCIsInNjIiwiX3NlbmRSZXBvcnRSZXF1ZXN0IiwiX3NlbmRIaWRlUmVxdWVzdCIsInVybHJlZiIsInVybHJlZl90cyIsInJvdXRlcGF0aCIsInRpdGxlTlZpZXciLCJ0aXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiX3NlbmRQYWdlUmVxdWVzdCIsInVybCIsIl9zZW5kRXZlbnRSZXF1ZXN0Iiwia2V5IiwiZnZ0cyIsImx2dHMiLCJ0dmMiLCJnZXRQcm9wZXJ0eSIsImdldE5ldHdvcmtJbmZvIiwib3B0IiwicmVxdWVzdCIsInZhbHVlIiwiZV9uIiwiZV92IiwidG9TdHJpbmciLCJnZXROZXR3b3JrVHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJuZXQiLCJuZXR3b3JrVHlwZSIsImdldExvY2F0aW9uIiwid2d0aW5mbyIsImdlb2NvZGUiLCJhZGRyZXNzIiwiY291bnRyeSIsInByb3ZpbmNlIiwiY2l0eSIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwidGl0bGUiLCJ0dG4iLCJ0dHBqIiwidHRjIiwicmVxdWVzdERhdGEiLCJwdXNoIiwidW5pU3RhdERhdGEiLCJmaXJzdEFyciIsImNvbnRlbnRBcnIiLCJsYXN0QXJyIiwicmQiLCJmb3JFYWNoIiwiZWxtIiwibmV3RGF0YSIsIm9wdGlvbnNEYXRhIiwicmVxdWVzdHMiLCJpbWFnZVJlcXVlc3QiLCJzZXRUaW1lb3V0IiwiX3NlbmRSZXF1ZXN0IiwibWV0aG9kIiwiZmFpbCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJTdGF0IiwiaW5zdGFuY2UiLCJhZGRJbnRlcmNlcHRvciIsImFkZEludGVyY2VwdG9ySW5pdCIsImludGVyY2VwdExvZ2luIiwiaW50ZXJjZXB0U2hhcmUiLCJpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCIsImludm9rZSIsImFyZ3MiLCJjb21wbGV0ZSIsIl9sb2dpbiIsIl9zaGFyZSIsIl9wYXltZW50IiwiX3BhZ2VTaG93IiwiX2FwcGxpY2F0aW9uU2hvdyIsIl9wYWdlSGlkZSIsIl9hcHBsaWNhdGlvbkhpZGUiLCJlbSIsImluZm8iLCJlbVZhbCIsIm1lc3NhZ2UiLCJzdGFjayIsInN0YXQiLCJnZXRJbnN0YW5jZSIsImlzSGlkZSIsImxpZmVjeWNsZSIsIm9uTGF1bmNoIiwib25SZWFkeSIsInJlYWR5Iiwib25Mb2FkIiwibG9hZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwib2xkU2hhcmVBcHBNZXNzYWdlIiwiY2FsbCIsIm9uU2hvdyIsInNob3ciLCJvbkhpZGUiLCJoaWRlIiwib25VbmxvYWQiLCJvbkVycm9yIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkEsUUFBb0M7QUFDcEMsUUFBOEI7QUFDOUIsUUFBOEQ7QUFDOUQsUUFBUSwyRUFBRztBQUNYLFFBQVEsMkVBQUc7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Ozs7Ozs7Ozs7QUNBZjtBQUFBO0FBQUE7QUFBQTtBQUFtMUIsQ0FBZ0IsNDFCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0F2MkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFxMUIsQ0FBZ0IsODFCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0F6MkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7QUFBK2EsQ0FBZ0IsMmRBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNPbmMsdUc7Ozs7OztlQUVBLEVBQ0EsY0FDQSx1QkFEQSxFQURBLEVBSUEsSUFKQSxrQkFJQTtBQUNBOzs7QUFHQSxHQVJBO0FBU0E7QUFDQSxRQURBLGdCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQSxFQVRBLEUiLCJmaWxlIjoicGFnZXMvZ29vZHMvZ29vZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9nb29kcy9nb29kcy5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9nb29kcy9nb29kcydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJfX1VOSV9fODE2MTcwNFwifSIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwdXJwbGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMEEwMTU3XCJcbiAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZ29vZHMubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MGU3ZGYxMiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZ29vZHMubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9nb29kcy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBcbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMTlmOTMwY2RcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovU3RvcmUtdW5pYXBwL3BhZ2VzL2dvb2RzL2dvb2RzLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ29vZHMubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MGU3ZGYxMiZtcFR5cGU9cGFnZVwiIiwidmFyIGNvbXBvbmVudHMgPSB7XG4gIFwibmF2LWJhclwiOiByZXF1aXJlKFwiQC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5udnVlXCIpLmRlZmF1bHRcbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IHRydWUsIGVuYWJsZUJhY2tUb1RvcDogdHJ1ZSwgYnViYmxlOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIm5hdi1iYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiTmlrZVwiLCBsZWZ0SWNvbjogXCJhcnJvd2xlZnRcIiB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2tMZWZ0OiBfdm0uYmFjayB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbmF2LWJhci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5MWE2MjJlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbmF2LWJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9uYXYtYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBcbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiYTVhMjM4ZjJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovU3RvcmUtdW5pYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5yZWN5Y2xlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmF2LWJhci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5MWE2MjJlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ1bmktbmF2LWJhclwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIHRpdGxlOiBfdm0udGl0bGUsXG4gICAgICBwYWRkaW5nOiA2MCxcbiAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgc3RhdHVzQmFyOiB0cnVlLFxuICAgICAgc2hhZG93OiBmYWxzZSxcbiAgICAgIGJvcmRlcjogZmFsc2UsXG4gICAgICBjb2xvcjogXCIjMEEwMTU3XCIsXG4gICAgICBsZWZ0SWNvbjogX3ZtLmxlZnRJY29uLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmOWY5ZmZcIlxuICAgIH0sXG4gICAgb246IHsgY2xpY2tMZWZ0OiBfdm0uY2xpY2tMZWZ0IH1cbiAgfSlcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmF2LWJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmF2LWJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx1bmktbmF2LWJhciA6dGl0bGU9XCJ0aXRsZVwiIDpwYWRkaW5nPVwiNjBcIiBmaXhlZCBzdGF0dXMtYmFyIDpzaGFkb3c9XCJmYWxzZVwiIDpib3JkZXI9XCJmYWxzZVwiIGNvbG9yPVwiIzBBMDE1N1wiIDpsZWZ0SWNvbj1cImxlZnRJY29uXCJcclxuXHQgYmFja2dyb3VuZENvbG9yPVwiI2Y5ZjlmZlwiIEBjbGlja0xlZnQ9XCJjbGlja0xlZnRcIj48L3VuaS1uYXYtYmFyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge1xyXG5cdFx0dW5pTmF2QmFyXHJcblx0fSBmcm9tICcuLi91bmknXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0dW5pTmF2QmFyXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dGl0bGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJ2h1YmpveSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGxlZnRJY29uOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICdiYXJzJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y2xpY2tMZWZ0KCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrTGVmdCcpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cbiIsImltcG9ydCB1bmlOYXZCYXIgZnJvbSAnLi91bmktbmF2LWJhci91bmktbmF2LWJhci52dWUnXHJcbmltcG9ydCB1bmlJY29ucyBmcm9tIFwiLi91bmktaWNvbnMvdW5pLWljb25zLnZ1ZVwiXHJcbmltcG9ydCB1bmlTdGF0dXNCYXIgZnJvbSBcIi4vdW5pLXN0YXR1cy1iYXIvdW5pLXN0YXR1cy1iYXIudnVlXCJcclxuZXhwb3J0IHtcclxuXHR1bmlOYXZCYXIsXHJcblx0dW5pSWNvbnMsXHJcblx0dW5pU3RhdHVzQmFyXHJcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDYxZmFkMiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLW5hdi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLW5hdi1iYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjA2MWZhZDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDYxZmFkMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjA2MWZhZDJcIixcbiAgXCI3MTIyZTM1ZVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi9TdG9yZS11bmlhcHAvY29tcG9uZW50cy91bmkvdW5pLW5hdi1iYXIvdW5pLW5hdi1iYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDYxZmFkMiZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktbmF2YmFyXCJdIH0sIFtcbiAgICBfYyhcbiAgICAgIFwidmlld1wiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLW5hdmJhcl9fY29udGVudFwiXSxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICBcInVuaS1uYXZiYXItLWZpeGVkXCI6IF92bS5maXhlZCxcbiAgICAgICAgICBcInVuaS1uYXZiYXItLXNoYWRvd1wiOiBfdm0uc2hhZG93LFxuICAgICAgICAgIFwidW5pLW5hdmJhci0tYm9yZGVyXCI6IF92bS5ib3JkZXJcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IF92bS5iYWNrZ3JvdW5kQ29sb3IgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLnN0YXR1c0JhciA/IF9jKFwidW5pLXN0YXR1cy1iYXJcIikgOiBfdm0uX2UoKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1uYXZiYXJfX2hlYWRlclwiLCBcInVuaS1uYXZiYXJfX2NvbnRlbnRfdmlld1wiXSxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBfdm0uY29sb3IsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IF92bS5wYWRkaW5nICsgXCJycHhcIixcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBfdm0ucGFkZGluZyArIFwicnB4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICBcInVuaS1uYXZiYXJfX2hlYWRlci1idG5zXCIsXG4gICAgICAgICAgICAgICAgICBcInVuaS1uYXZiYXJfX2hlYWRlci1idG5zLWxlZnRcIixcbiAgICAgICAgICAgICAgICAgIFwidW5pLW5hdmJhcl9fY29udGVudF92aWV3XCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25DbGlja0xlZnQgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLmxlZnRJY29uLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVuaS1pY29uc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IF92bS5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBfdm0ubGVmdEljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLmxlZnRUZXh0Lmxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVuaS1uYXZiYXItYnRuLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pLW5hdmJhci1idG4taWNvbi1sZWZ0XCI6ICFfdm0ubGVmdEljb24ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyBjb2xvcjogX3ZtLmNvbG9yLCBmb250U2l6ZTogXCIxNHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGVmdFRleHQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl90KFwibGVmdFwiKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgIFwidW5pLW5hdmJhcl9faGVhZGVyLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgXCJ1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS50aXRsZS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktbmF2YmFyX19oZWFkZXItY29udGFpbmVyLWlubmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pLW5hdmJhcl9fY29udGVudF92aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1uYXYtYmFyLXRleHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IF92bS5jb2xvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgXCJ1bmktbmF2YmFyX19oZWFkZXItYnRuc1wiLFxuICAgICAgICAgICAgICAgICAgXCJ1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS50aXRsZS5sZW5ndGggPyBcInVuaS1uYXZiYXJfX2hlYWRlci1idG5zLXJpZ2h0XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25DbGlja1JpZ2h0IH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5yaWdodEljb24ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1uYXZiYXJfX2NvbnRlbnRfdmlld1wiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidW5pLWljb25zXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5yaWdodEljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLnJpZ2h0VGV4dC5sZW5ndGggJiYgIV92bS5yaWdodEljb24ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pLW5hdmJhci1idG4tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVuaS1uYXZiYXJfX2NvbnRlbnRfdmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widW5pLW5hdi1iYXItcmlnaHQtdGV4dFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ucmlnaHRUZXh0KSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdChcInJpZ2h0XCIpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uZml4ZWRcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widW5pLW5hdmJhcl9fcGxhY2Vob2xkZXJcIl0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uc3RhdHVzQmFyID8gX2MoXCJ1bmktc3RhdHVzLWJhclwiKSA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1uYXZiYXJfX3BsYWNlaG9sZGVyLXZpZXdcIl0gfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmktbmF2YmFyXCI+XHJcblx0XHQ8dmlldyA6Y2xhc3M9XCJ7ICd1bmktbmF2YmFyLS1maXhlZCc6IGZpeGVkLCAndW5pLW5hdmJhci0tc2hhZG93Jzogc2hhZG93LCAndW5pLW5hdmJhci0tYm9yZGVyJzogYm9yZGVyIH1cIiA6c3R5bGU9XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogYmFja2dyb3VuZENvbG9yIH1cIlxyXG5cdFx0IGNsYXNzPVwidW5pLW5hdmJhcl9fY29udGVudFwiPlxyXG5cdFx0XHQ8dW5pLXN0YXR1cy1iYXIgdi1pZj1cInN0YXR1c0JhclwiIC8+XHJcblx0XHRcdDx2aWV3IDpzdHlsZT1cInsgY29sb3I6IGNvbG9yLGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLCBwYWRkaW5nTGVmdDogcGFkZGluZyArICdycHgnLCBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcgKyAncnB4JyB9XCIgY2xhc3M9XCJ1bmktbmF2YmFyX19oZWFkZXIgdW5pLW5hdmJhcl9fY29udGVudF92aWV3XCI+XHJcblx0XHRcdFx0PHZpZXcgQHRhcD1cIm9uQ2xpY2tMZWZ0XCIgY2xhc3M9XCJ1bmktbmF2YmFyX19oZWFkZXItYnRucyB1bmktbmF2YmFyX19oZWFkZXItYnRucy1sZWZ0IHVuaS1uYXZiYXJfX2NvbnRlbnRfdmlld1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIiB2LWlmPVwibGVmdEljb24ubGVuZ3RoXCI+XHJcblx0XHRcdFx0XHRcdDx1bmktaWNvbnMgOmNvbG9yPVwiY29sb3JcIiA6dHlwZT1cImxlZnRJY29uXCIgc2l6ZT1cIjI0XCIgLz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IDpjbGFzcz1cInsgJ3VuaS1uYXZiYXItYnRuLWljb24tbGVmdCc6ICFsZWZ0SWNvbi5sZW5ndGggfVwiIGNsYXNzPVwidW5pLW5hdmJhci1idG4tdGV4dCB1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIlxyXG5cdFx0XHRcdFx0IHYtaWY9XCJsZWZ0VGV4dC5sZW5ndGhcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgOnN0eWxlPVwieyBjb2xvcjogY29sb3IsIGZvbnRTaXplOiAnMTRweCcgfVwiPnt7IGxlZnRUZXh0IH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHNsb3QgbmFtZT1cImxlZnRcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXJfX2hlYWRlci1jb250YWluZXIgdW5pLW5hdmJhcl9fY29udGVudF92aWV3XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXJfX2hlYWRlci1jb250YWluZXItaW5uZXIgdW5pLW5hdmJhcl9fY29udGVudF92aWV3XCIgdi1pZj1cInRpdGxlLmxlbmd0aFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1uYXYtYmFyLXRleHRcIiA6c3R5bGU9XCJ7Y29sb3I6IGNvbG9yIH1cIj57eyB0aXRsZSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0g5qCH6aKY5o+S5qe9IC0tPlxyXG5cdFx0XHRcdFx0PHNsb3QgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgOmNsYXNzPVwidGl0bGUubGVuZ3RoID8gJ3VuaS1uYXZiYXJfX2hlYWRlci1idG5zLXJpZ2h0JyA6ICcnXCIgQHRhcD1cIm9uQ2xpY2tSaWdodFwiIGNsYXNzPVwidW5pLW5hdmJhcl9faGVhZGVyLWJ0bnMgdW5pLW5hdmJhcl9fY29udGVudF92aWV3XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXJfX2NvbnRlbnRfdmlld1wiIHYtaWY9XCJyaWdodEljb24ubGVuZ3RoXCI+XHJcblx0XHRcdFx0XHRcdDx1bmktaWNvbnMgOmNvbG9yPVwiY29sb3JcIiA6dHlwZT1cInJpZ2h0SWNvblwiIHNpemU9XCIyNFwiIC8+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8IS0tIOS8mOWFiOaYvuekuuWbvuaghyAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLW5hdmJhci1idG4tdGV4dCB1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIiB2LWlmPVwicmlnaHRUZXh0Lmxlbmd0aCAmJiAhcmlnaHRJY29uLmxlbmd0aFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1uYXYtYmFyLXJpZ2h0LXRleHRcIj57eyByaWdodFRleHQgfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8c2xvdCBuYW1lPVwicmlnaHRcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1bmktbmF2YmFyX19wbGFjZWhvbGRlclwiIHYtaWY9XCJmaXhlZFwiPlxyXG5cdFx0XHQ8dW5pLXN0YXR1cy1iYXIgdi1pZj1cInN0YXR1c0JhclwiIC8+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLW5hdmJhcl9fcGxhY2Vob2xkZXItdmlld1wiIC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgdW5pU3RhdHVzQmFyIGZyb20gXCIuLi91bmktc3RhdHVzLWJhci91bmktc3RhdHVzLWJhci52dWVcIlxyXG5cdGltcG9ydCB1bmlJY29ucyBmcm9tIFwiLi4vdW5pLWljb25zL3VuaS1pY29ucy52dWVcIlxyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiBcIlVuaU5hdkJhclwiLFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR1bmlTdGF0dXNCYXIsXHJcblx0XHRcdHVuaUljb25zXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dGl0bGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogXCJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYWRkaW5nOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0bGVmdFRleHQ6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogXCJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyaWdodFRleHQ6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogXCJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsZWZ0SWNvbjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiBcIlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHJpZ2h0SWNvbjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiBcIlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGZpeGVkOiB7XHJcblx0XHRcdFx0dHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogXCIjMDAwMDAwXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IFwiI0ZGRkZGRlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHN0YXR1c0Jhcjoge1xyXG5cdFx0XHRcdHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHNoYWRvdzoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGJvcmRlcjoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgaWYodW5pLnJlcG9ydCAmJiB0aGlzLnRpdGxlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgIHVuaS5yZXBvcnQoJ3RpdGxlJywgdGhpcy50aXRsZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvbkNsaWNrTGVmdCgpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KFwiY2xpY2tMZWZ0XCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkNsaWNrUmlnaHQoKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdChcImNsaWNrUmlnaHRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQkbmF2LWhlaWdodDogNDRweDtcclxuXHQudW5pLW5hdi1iYXItdGV4dCB7XHJcblx0XHQvKiAjaWZkZWYgQVBQLVBMVVMgKi9cclxuXHRcdGZvbnQtc2l6ZTogMzRycHg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMgKi9cclxuXHRcdGZvbnQtc2l6ZTogJHVuaS1mb250LXNpemUtbGc7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblx0LnVuaS1uYXYtYmFyLXJpZ2h0LXRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1iYXNlO1xyXG5cdH1cclxuXHJcblx0LnVuaS1uYXZiYXIge1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHR9XHJcblxyXG5cdC51bmktbmF2YmFyX19jb250ZW50IHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLWJnLWNvbG9yO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC51bmktbmF2YmFyX19jb250ZW50X3ZpZXcge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LnVuaS1uYXZiYXJfX2hlYWRlciB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogJG5hdi1oZWlnaHQ7XHJcblx0XHRsaW5lLWhlaWdodDogJG5hdi1oZWlnaHQ7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblxyXG5cdC51bmktbmF2YmFyX19oZWFkZXItYnRucyB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRcdHdpZHRoOiAxMjBycHg7XHJcblx0XHRwYWRkaW5nOiAwIDZweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC51bmktbmF2YmFyX19oZWFkZXItYnRucy1sZWZ0IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdHdpZHRoOiAxNTBycHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0fVxyXG5cclxuXHQudW5pLW5hdmJhcl9faGVhZGVyLWJ0bnMtcmlnaHQge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0d2lkdGg6IDE1MHJweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDMwcnB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHR9XHJcblxyXG5cdC51bmktbmF2YmFyX19oZWFkZXItY29udGFpbmVyIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cclxuXHQudW5pLW5hdmJhcl9faGVhZGVyLWNvbnRhaW5lci1pbm5lciB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1iYXNlO1xyXG5cdH1cclxuXHJcblxyXG5cdC51bmktbmF2YmFyX19wbGFjZWhvbGRlci12aWV3IHtcclxuXHRcdGhlaWdodDogJG5hdi1oZWlnaHQ7XHJcblx0fVxyXG5cclxuXHQudW5pLW5hdmJhci0tZml4ZWQge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0ei1pbmRleDogOTk4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1uYXZiYXItLXNoYWRvdyB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRib3gtc2hhZG93OiAwIDFweCA2cHggI2NjYztcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LnVuaS1uYXZiYXItLWJvcmRlciB7XHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAkdW5pLWJvcmRlci1jb2xvcjtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXN0YXR1cy1iYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkyZTNmNjQ2JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXN0YXR1cy1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktc3RhdHVzLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktc3RhdHVzLWJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MmUzZjY0NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1zdGF0dXMtYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkyZTNmNjQ2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5MmUzZjY0NlwiLFxuICBcIjBkZDFiZTExXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6L1N0b3JlLXVuaWFwcC9jb21wb25lbnRzL3VuaS91bmktc3RhdHVzLWJhci91bmktc3RhdHVzLWJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5yZWN5Y2xlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXN0YXR1cy1iYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkyZTNmNjQ2JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2aWV3XCIsXG4gICAgeyBzdGF0aWNDbGFzczogW1widW5pLXN0YXR1cy1iYXJcIl0sIHN0eWxlOiB7IGhlaWdodDogX3ZtLnN0YXR1c0JhckhlaWdodCB9IH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc3RhdHVzLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc3RhdHVzLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgOnN0eWxlPVwieyBoZWlnaHQ6IHN0YXR1c0JhckhlaWdodCB9XCIgY2xhc3M9XCJ1bmktc3RhdHVzLWJhclwiPlxyXG5cdFx0PHNsb3QgLz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdHZhciBzdGF0dXNCYXJIZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQgKyAncHgnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaVN0YXR1c0JhcicsXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogc3RhdHVzQmFySGVpZ2h0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC51bmktc3RhdHVzLWJhciB7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0Ly8gaGVpZ2h0OiB2YXIoLS1zdGF0dXMtYmFyLWhlaWdodCk7XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcc2Fzcy1sb2FkZXJcXFxcbGliXFxcXGxvYWRlci5qcz8/cmVmLS05LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTQhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXN0YXR1cy1iYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTJlM2Y2NDYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcc2Fzcy1sb2FkZXJcXFxcbGliXFxcXGxvYWRlci5qcz8/cmVmLS05LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTQhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXN0YXR1cy1iYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTJlM2Y2NDYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidW5pLXN0YXR1cy1iYXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjIwXCJcbiAgfVxufSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBvcHRpb25zLmNvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKGNvbXBvbmVudHMsIG9wdGlvbnMuY29tcG9uZW50cyB8fCB7fSlcbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNjMmU2NTBlJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYzJlNjUwZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYzJlNjUwZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiY2MyZTY1MGVcIixcbiAgXCIwNTA5YTU3M1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi9TdG9yZS11bmlhcHAvY29tcG9uZW50cy91bmkvdW5pLWljb25zL3VuaS1pY29ucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5yZWN5Y2xlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYzJlNjUwZSZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidS10ZXh0XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1pY29uc1wiXSxcbiAgICAgIHN0eWxlOiB7IGNvbG9yOiBfdm0uY29sb3IsIFwiZm9udC1zaXplXCI6IF92bS5zaXplICsgXCJweFwiIH0sXG4gICAgICBvbjogeyBjbGljazogX3ZtLl9vbkNsaWNrIH1cbiAgICB9LFxuICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pY29uc1tfdm0udHlwZV0pKV1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dGV4dCA6c3R5bGU9XCJ7IGNvbG9yOiBjb2xvciwgJ2ZvbnQtc2l6ZSc6IHNpemUgKyAncHgnIH1cIiBjbGFzcz1cInVuaS1pY29uc1wiIEBjbGljaz1cIl9vbkNsaWNrXCI+e3tpY29uc1t0eXBlXX19PC90ZXh0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgaWNvbnMgZnJvbSAnLi9pY29ucy5qcyc7XHJcblx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0dmFyIGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0J2ZvbnRGYW1pbHknOiBcInVuaWljb25zXCIsXHJcblx0XHQnc3JjJzogXCJ1cmwoJ2RhdGE6Zm9udC90cnVldHlwZTtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxBQUVBQUFBUUFRQUFCQUFBUmtaVVRZajQzc3NBQUhiWUFBQUFIRWRFUlVZQUp3Qm1BQUIydUFBQUFCNVBVeTh5V1dsY3FnQUFBWWdBQUFCZ1kyMWhjR0JoYkJVQUFBSzBBQUFDUW1OMmRDQU1wZjQwQUFBUEtBQUFBQ1JtY0dkdE1QZWVsUUFBQlBnQUFBbVdaMkZ6Y0FBQUFCQUFBSGF3QUFBQUNHZHNlV1pzZmdmWkFBQVFFQUFBWVF4b1pXRmtGb2Y2L3dBQUFRd0FBQUEyYUdobFlRZCtBeVlBQUFGRUFBQUFKR2h0ZEhna2VCdVlBQUFCNkFBQUFNcHNiMk5oUEVrbkxnQUFEMHdBQUFEQ2JXRjRjQUlqQTNJQUFBRm9BQUFBSUc1aGJXWFdPVHRVQUFCeEhBQUFBZFJ3YjNOMFRKRTRpZ0FBY3ZBQUFBTy9jSEpsY0tXNXZtWUFBQTZRQUFBQWxRQUJBQUFBQVFBQUNWL09PVjhQUFBVQUh3UUFBQUFBQU5tcVc3a0FBQUFBMmFwY0NRQUEveUFFQUFNZ0FBQUFDQUFDQUFBQUFBQUFBQUVBQUFNZy95QUFYQVFBQUFBQUFBUUFBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQUVBQUFCZ0FYb0FEQUFBQUFBQUFnQkdBRlFBYkFBQUFRUUJvZ0FBQUFBQUJBUC9BWkFBQmdBQUFwa0N6QUFBQUk4Q21RTE1BQUFCNndBekFRa0FBQUlBQmdNQUFBQUFBQUFBQUFBQkVBQUFBQUFBQUFBQUFBQUFVRVpGUkFHQUFCM21FZ01zL3l3QVhBTWdBT0FBQUFBQkFBQUFBQU1ZQXMwQUFBQWdBQUVCZGdBaUFBQUFBQUZWQUFBRDZRQXNCQUFBWUFEQUFNQUFZQURBQU1BQW9BQ0FBSUFBWUFDZ0FJQUFnQUJnQUxNQVFBQkFBQVVBVndCZUFJQUJBQUQwQVFBQTlBRUFBRUFBVmdDZ0FPQUF3QURBQUZFQWZnQ0FBR0FBUUFCZ0FHQUFZQUErQUZFQVlBQkFBR0FBWUFBMEFHQUFQZ0ZBQVFBQWdBQkFBQUFBSlFDQkFRQUJRQUZBQVN3QWdBQmdBSUFBd0FCZ0FHQUF3QURCQVFBQWdBQ0FBR0FBWUFEQkFFQUFSQUJBQUJjQlh3QVRBTUFBd0FGQUFVQUJRQUZBQU1BQXdBRWVBRjhBVlFCQUFBQUFBQUFEQUFBQUF3QUFBQndBQVFBQUFBQUJQQUFEQUFFQUFBQWNBQVFCSUFBQUFFUUFRQUFGQUFRQUFBQWRBSGpoQXVFeTRnUGlNK0prNHdQak0rTmc0MlRrQ2VRUjVCUGtOT1E1NUVQa1p1Um81SExsQ09VdzVUTGxOZVUzNVdEbFkrVmw1V2psaWVXUTVoTC8vd0FBQUFBQUhRQjQ0UURoTU9JQTRqRGlZT01BNHpMallPTmo1QURrRU9RVDVEVGtOK1JBNUdEa2FPUnc1UURsTU9VeTVUVGxOK1ZnNVdMbFplVm41WURsa09ZUy8vOEFBZi9rLzRzZkJCN1hIZ29kM2gyeUhSY2M2Unk5SExzY0lCd2FIQmtiK1J2M0cvRWIxUnZVRzgwYlFCc1pHeGdiRnhzV0d1NGE3UnJzR3VzYTFCck9HazBBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQmdBQUFRQUFBQUFBQUFBQkFnQUFBQUlBQUFBQUFBQUFBQUFBQUFBQUFBQUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBc0FBc3NDQmdaaTJ3QVN3Z1pDQ3d3RkN3QkNaYXNBUkZXMWdoSXlFYmlsZ2dzRkJRV0NHd1FGa2JJTEE0VUZnaHNEaFpXU0N3Q2tWaFpMQW9VRmdoc0FwRklMQXdVRmdoc0RCWkd5Q3d3RkJZSUdZZ2lvcGhJTEFLVUZoZ0d5Q3dJRkJZSWJBS1lCc2dzRFpRV0NHd05tQWJZRmxaV1J1d0FDdFpXU093QUZCWVpWbFpMYkFDTENCRklMQUVKV0ZrSUxBRlExQllzQVVqUXJBR0kwSWJJU0Zac0FGZ0xiQURMQ01oSXlFZ1pMRUZZa0lnc0FZalFySUtBQUlxSVNDd0JrTWdpaUNLc0FBcnNUQUZKWXBSV0dCUUcyRlNXVmdqV1NFZ3NFQlRXTEFBS3hzaHNFQlpJN0FBVUZobFdTMndCQ3l3Q0NOQ3NBY2pRckFBSTBLd0FFT3dCME5SV0xBSVF5dXlBQUVBUTJCQ3NCWmxIRmt0c0FVc3NBQkRJRVVnc0FKRlk3QUJSV0pnUkMyd0JpeXdBRU1nUlNDd0FDc2pzUVFFSldBZ1JZb2pZU0JrSUxBZ1VGZ2hzQUFic0RCUVdMQWdHN0JBV1ZranNBQlFXR1Zac0FNbEkyRkVSQzJ3Qnl5eEJRVkZzQUZoUkMyd0NDeXdBV0FnSUxBS1EwcXdBRkJZSUxBS0kwSlpzQXREU3JBQVVsZ2dzQXNqUWxrdHNBa3NJTGdFQUdJZ3VBUUFZNG9qWWJBTVEyQWdpbUFnc0F3alFpTXRzQW9zUzFSWXNRY0JSRmtrc0ExbEkzZ3RzQXNzUzFGWVMxTllzUWNCUkZrYklWa2tzQk5sSTNndHNBd3NzUUFOUTFWWXNRME5RN0FCWVVLd0NTdFpzQUJEc0FJbFFySUFBUUJEWUVLeENnSWxRckVMQWlWQ3NBRVdJeUN3QXlWUVdMQUFRN0FFSlVLS2lpQ0tJMkd3Q0NvaEk3QUJZU0NLSTJHd0NDb2hHN0FBUTdBQ0pVS3dBaVZoc0FncUlWbXdDa05Ic0F0RFIyQ3dnR0lnc0FKRlk3QUJSV0pnc1FBQUV5TkVzQUZEc0FBK3NnRUJBVU5nUWkyd0RTeXhBQVZGVkZnQXNBMGpRaUJnc0FGaHRRNE9BUUFNQUVKQ2ltQ3hEQVFyc0dzckd5SlpMYkFPTExFQURTc3RzQThzc1FFTkt5MndFQ3l4QWcwckxiQVJMTEVERFNzdHNCSXNzUVFOS3kyd0V5eXhCUTByTGJBVUxMRUdEU3N0c0JVc3NRY05LeTJ3Rml5eENBMHJMYkFYTExFSkRTc3RzQmdzc0FjcnNRQUZSVlJZQUxBTkkwSWdZTEFCWWJVT0RnRUFEQUJDUW9wZ3NRd0VLN0JyS3hzaVdTMndHU3l4QUJnckxiQWFMTEVCR0NzdHNCc3NzUUlZS3kyd0hDeXhBeGdyTGJBZExMRUVHQ3N0c0I0c3NRVVlLeTJ3SHl5eEJoZ3JMYkFnTExFSEdDc3RzQ0Vzc1FnWUt5MndJaXl4Q1JnckxiQWpMQ0Jnc0E1Z0lFTWpzQUZnUTdBQ0piQUNKVkZZSXlBOHNBRmdJN0FTWlJ3YklTRlpMYkFrTExBaks3QWpLaTJ3SlN3Z0lFY2dJTEFDUldPd0FVVmlZQ05oT0NNZ2lsVllJRWNnSUxBQ1JXT3dBVVZpWUNOaE9Cc2hXUzJ3Sml5eEFBVkZWRmdBc0FFV3NDVXFzQUVWTUJzaVdTMndKeXl3Qnl1eEFBVkZWRmdBc0FFV3NDVXFzQUVWTUJzaVdTMndLQ3dnTmJBQllDMndLU3dBc0FORlk3QUJSV0t3QUN1d0FrVmpzQUZGWXJBQUs3QUFGclFBQUFBQUFFUStJeml4S0FFVktpMndLaXdnUENCSElMQUNSV093QVVWaVlMQUFRMkU0TGJBckxDNFhQQzJ3TEN3Z1BDQkhJTEFDUldPd0FVVmlZTEFBUTJHd0FVTmpPQzJ3TFN5eEFnQVdKU0F1SUVld0FDTkNzQUlsU1lxS1J5TkhJMkVnV0dJYklWbXdBU05Dc2l3QkFSVVVLaTJ3TGl5d0FCYXdCQ1d3QkNWSEkwY2pZYkFHUlN0bGlpNGpJQ0E4aWpndHNDOHNzQUFXc0FRbHNBUWxJQzVISTBjallTQ3dCQ05Dc0FaRkt5Q3dZRkJZSUxCQVVWaXpBaUFESUJ1ekFpWURHbGxDUWlNZ3NBbERJSW9qUnlOSEkyRWpSbUN3QkVPd2dHSmdJTEFBS3lDS2ltRWdzQUpEWUdRanNBTkRZV1JRV0xBQ1EyRWJzQU5EWUZtd0F5V3dnR0poSXlBZ3NBUW1JMFpoT0JzanNBbERSckFDSmJBSlEwY2pSeU5oWUNDd0JFT3dnR0pnSXlDd0FDc2pzQVJEWUxBQUs3QUZKV0d3QlNXd2dHS3dCQ1poSUxBRUpXQmtJN0FESldCa1VGZ2hHeU1oV1NNZ0lMQUVKaU5HWVRoWkxiQXdMTEFBRmlBZ0lMQUZKaUF1UnlOSEkyRWpQRGd0c0RFc3NBQVdJTEFKSTBJZ0lDQkdJMGV3QUNzallUZ3RzRElzc0FBV3NBTWxzQUlsUnlOSEkyR3dBRlJZTGlBOEl5RWJzQUlsc0FJbFJ5TkhJMkVnc0FVbHNBUWxSeU5ISTJHd0JpV3dCU1ZKc0FJbFliQUJSV01qSUZoaUd5RlpZN0FCUldKZ0l5NGpJQ0E4aWpnaklWa3RzRE1zc0FBV0lMQUpReUF1UnlOSEkyRWdZTEFnWUdhd2dHSWpJQ0E4aWpndHNEUXNJeUF1UnJBQ0pVWlNXQ0E4V1M2eEpBRVVLeTJ3TlN3aklDNUdzQUlsUmxCWUlEeFpMckVrQVJRckxiQTJMQ01nTGthd0FpVkdVbGdnUEZraklDNUdzQUlsUmxCWUlEeFpMckVrQVJRckxiQTNMTEF1S3lNZ0xrYXdBaVZHVWxnZ1BGa3VzU1FCRkNzdHNEZ3NzQzhyaWlBZ1BMQUVJMEtLT0NNZ0xrYXdBaVZHVWxnZ1BGa3VzU1FCRkN1d0JFTXVzQ1FyTGJBNUxMQUFGckFFSmJBRUppQXVSeU5ISTJHd0JrVXJJeUE4SUM0ak9MRWtBUlFyTGJBNkxMRUpCQ1ZDc0FBV3NBUWxzQVFsSUM1SEkwY2pZU0N3QkNOQ3NBWkZLeUN3WUZCWUlMQkFVVml6QWlBRElCdXpBaVlER2xsQ1FpTWdSN0FFUTdDQVltQWdzQUFySUlxS1lTQ3dBa05nWkNPd0EwTmhaRkJZc0FKRFlSdXdBME5nV2JBREpiQ0FZbUd3QWlWR1lUZ2pJRHdqT0JzaElDQkdJMGV3QUNzallUZ2hXYkVrQVJRckxiQTdMTEF1S3k2eEpBRVVLeTJ3UEN5d0x5c2hJeUFnUExBRUkwSWpPTEVrQVJRcnNBUkRMckFrS3kyd1BTeXdBQlVnUjdBQUkwS3lBQUVCRlJRVExyQXFLaTJ3UGl5d0FCVWdSN0FBSTBLeUFBRUJGUlFUTHJBcUtpMndQeXl4QUFFVUU3QXJLaTJ3UUN5d0xTb3RzRUVzc0FBV1JTTWdMaUJHaWlOaE9MRWtBUlFyTGJCQ0xMQUpJMEt3UVNzdHNFTXNzZ0FBT2lzdHNFUXNzZ0FCT2lzdHNFVXNzZ0VBT2lzdHNFWXNzZ0VCT2lzdHNFY3NzZ0FBT3lzdHNFZ3NzZ0FCT3lzdHNFa3NzZ0VBT3lzdHNFb3NzZ0VCT3lzdHNFc3NzZ0FBTnlzdHNFd3NzZ0FCTnlzdHNFMHNzZ0VBTnlzdHNFNHNzZ0VCTnlzdHNFOHNzZ0FBT1NzdHNGQXNzZ0FCT1NzdHNGRXNzZ0VBT1NzdHNGSXNzZ0VCT1NzdHNGTXNzZ0FBUENzdHNGUXNzZ0FCUENzdHNGVXNzZ0VBUENzdHNGWXNzZ0VCUENzdHNGY3NzZ0FBT0NzdHNGZ3NzZ0FCT0NzdHNGa3NzZ0VBT0NzdHNGb3NzZ0VCT0NzdHNGc3NzREFyTHJFa0FSUXJMYkJjTExBd0s3QTBLeTJ3WFN5d01DdXdOU3N0c0Y0c3NBQVdzREFyc0RZckxiQmZMTEF4S3k2eEpBRVVLeTJ3WUN5d01TdXdOQ3N0c0dFc3NERXJzRFVyTGJCaUxMQXhLN0EyS3kyd1l5eXdNaXN1c1NRQkZDc3RzR1Fzc0RJcnNEUXJMYkJsTExBeUs3QTFLeTJ3Wml5d01pdXdOaXN0c0djc3NETXJMckVrQVJRckxiQm9MTEF6SzdBMEt5MndhU3l3TXl1d05Tc3RzR29zc0RNcnNEWXJMYkJyTEN1d0NHV3dBeVJRZUxBQkZUQXRBQUJMdUFESVVsaXhBUUdPV2JrSUFBZ0FZeUN3QVNORUlMQURJM0N3RGtVZ0lFdTRBQTVSUzdBR1UxcFlzRFFic0NoWllHWWdpbFZZc0FJbFliQUJSV01qWXJBQ0kwU3pDZ2tGQkN1ekNnc0ZCQ3V6RGc4RkJDdFpzZ1FvQ1VWU1JMTUtEUVlFSzdFR0FVU3hKQUdJVVZpd1FJaFlzUVlEUkxFbUFZaFJXTGdFQUloWXNRWUJSRmxaV1ZtNEFmK0ZzQVNOc1FVQVJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFNZ0F5QXhqLzRRTWcveUFER1AvaEF5RC9JQUFBQUNnQUtBQW9BV1FDQ2dPMEJZb0dEZ2FpQjRnSWdBaklDWFlKOEFwNkNyUUxHQXRzRFBnTjNBNTBEMXdSeWhJeUV6QVRuaFFhRkhJVXZCVkFGZUlYSEJkOEdFb1lrQmpXR1RJWmpCbm9HbUFhb2hzQ0cxUWJsQnZxSENnY2VoeWlIT0FkREIxcUhhUWQ2aDRJSGtZZW5oN1lIemdnbWlEa0lRd2hKQ0U4SVZ3aHZpSWNKR1lraUNUMEpZWW1BQ1o0SjNZbnRpakVLUTRwZWltNktzUXNFQ3crTEx3dFNDM2VMZll1RGk0bUxqNHVpQzdRTHhZdlhDOTRMNW93QmpDR0FBQUFBZ0FpQUFBQk1nS3FBQU1BQndBcFFDWUFBQUFEQWdBRFZ3QUNBUUVDU3dBQ0FnRlBCQUVCQWdGREFBQUhCZ1VFQUFNQUF4RUZEeXN6RVNFUkp6TVJJeUlCRU83TXpBS3EvVllpQW1ZQUFBQUZBQ3ovNFFPOEF4Z0FGZ0F3QURvQVVnQmVBWGRMc0JOUVdFQktBZ0VBRFE0TkFBNW1BQU1PQVE0RFhnQUJDQWdCWEJBQkNRZ0tCZ2xlRVFFTUJnUUdERjRBQ3dRTGFROEJDQUFHREFnR1dBQUtCd1VDQkFzS0JGa1NBUTRPRFZFQURRMEtEa0liUzdBWFVGaEFTd0lCQUEwT0RRQU9aZ0FERGdFT0ExNEFBUWdJQVZ3UUFRa0lDZ2dKQ21ZUkFRd0dCQVlNWGdBTEJBdHBEd0VJQUFZTUNBWllBQW9IQlFJRUN3b0VXUklCRGc0TlVRQU5EUW9PUWh0THNCaFFXRUJNQWdFQURRNE5BQTVtQUFNT0FRNERYZ0FCQ0FnQlhCQUJDUWdLQ0FrS1poRUJEQVlFQmd3RVpnQUxCQXRwRHdFSUFBWU1DQVpZQUFvSEJRSUVDd29FV1JJQkRnNE5VUUFORFFvT1FodEFUZ0lCQUEwT0RRQU9aZ0FERGdFT0F3Rm1BQUVJRGdFSVpCQUJDUWdLQ0FrS1poRUJEQVlFQmd3RVpnQUxCQXRwRHdFSUFBWU1DQVpZQUFvSEJRSUVDd29FV1JJQkRnNE5VUUFORFFvT1FsbFpXVUFvVTFNN096SXhGeGRUWGxOZVcxZzdVanRTUzBNM05URTZNam9YTUJjd1VSRXhHQkVvRlVBVEZpc0JCaXNCSWc0Q0hRRWhOVFFtTlRRdUFpc0JGU0VGRlJRV0ZBNENJd1ltS3dFbklRY3JBU0luSWk0Q1BRRVhJZ1lVRmpNeU5qUW1Gd1lIRGdNZUFUc0dNalluTGdFbkppY0JOVFErQWpzQk1oWWRBUUVaR3hwVEVpVWNFZ09RQVFvWUp4NkYva29Db2dFVkh5TU9EaDhPSUMzK1NTd2RJaFFaR1NBVENIY01FaElNRFJJU2pBZ0dCUXNFQWdRUERpVkRVVkJBSkJjV0NRVUpCUVVHL3FRRkR4b1Z2QjhwQWg4QkRCa25Ha3dwRUJ3RURTQWJFbUdJTkJjNk9pVVhDUUVCZ0lBQkV4c2dEcWMvRVJvUkVSb1JmQm9XRXlRT0VBMElHQm9OSXhFVEZBRjM1QXNZRXd3ZEp1TUFBQUlBWVArQUE2QUN3QUFIQUZjQVNFQkZTa2xET1RnMkp5WWNHUmNXREFRRFR3OENBUVFDUUFBRUF3RURCQUZtQUFBRkFRSURBQUpaQUFNRUFRTk5BQU1EQVZFQUFRTUJSUWtJVEVzd0xRaFhDVmNURUFZUUt3QWdCaEFXSURZUUpUSWVBaFVVQnlZbkxnRTFORGMxTmo4RFBnRTNOamMyTnpZdkFUVW1OelltSnlZbkl3WUhEZ0VYRmdjVUJ4VU9BUmNlQVJjV0Z4WVZNQlVVQmhRUEFSUWpEZ0VISmpVMFBnUUNyUDZvOVBRQldQVCtZRTJPWmp4WVVXa0VBZ0VCQVFJQ0FnRUNBZzBGRXdnSENBRUVDZ1FPRXloTkkwd29GQTRFQ2dRQkJBRUVCUTRJQkE0SUFRRUNBU2x3SEZrYk1VZFRZd0xBOVA2bzlQUUJXTkU4Wm81Tmltb2hId0VHRGdNREJnTURCZ1lHQXdVREhTSVdMQ01VQWdFVk9STTZHak1GQlRNYU9oTTVGUUVCQVFvVEdoa2dDU0VlRUNBSUF3VUNBUUVCRENnTWFvczBZMU5ITVJzQUFBQUFBd0RBLytBRFFBSmdBQUFBVXdEQUFUWkxzQXRRV0VBY2s1S0ZBQVFCQzU2YWxZUjZCUUFCcWFkelFrQS9FUW9JQ2dBRFFCdExzQXhRV0VBY2s1S0ZBQVFCQzU2YWxZUjZCUUFCcWFkelFrQS9FUW9JQndBRFFCdEFISk9TaFFBRUFRdWVtcFdFZWdVQUFhbW5jMEpBUHhFS0NBb0FBMEJaV1V1d0MxQllRRFVEQVFFTEFBc0JBR1lFQVFBS0N3QUtaQUFLQndzS0IyUUpDQUlIQmdzSEJtUUFBZ0FMQVFJTFdRd0JCZ1lGVUFBRkJRc0ZRaHRMc0F4UVdFQXZBd0VCQ3dBTEFRQm1CQUVBQndzQUIyUUtDUWdEQndZTEJ3WmtBQUlBQ3dFQ0Mxa01BUVlHQlZBQUJRVUxCVUliUURVREFRRUxBQXNCQUdZRUFRQUtDd0FLWkFBS0J3c0tCMlFKQ0FJSEJnc0hCbVFBQWdBTEFRSUxXUXdCQmdZRlVBQUZCUXNGUWxsWlFCNVZWSXVLWldSaVlWOWVYVnhVd0ZYQVRrMDVPQzh1SnlVZkhoTVNEUTRyQ1FFdUFTY21KeTRCUHdFMk56NEROVGN5UGdFM1BnRTFOQzRESXpjK0FUYzJKaU1pRGdFVkhnRWZBU0lIRkJZWEhnTVhNeFlYRmg4REJnY09BUWNPQkFjR0ZTRTBMZ01ISVRZM05qYytBVGN5TmpJK0FUSStBVEkzTmpjMkp6MENOQ1k5QXljdUFTY21Md0V1QWljbUp5WStBVGMxSmljbU56WXlGeFlIRGdJSE1RWVZIZ0VIQmdjVURnRVZCdzRDQnc0QkR3RWRBUVlkQVJRR0ZSUVhIZ0lYRmhjZUFSY1dGeDRDRndHVkFVSVFSQU1lQ2dNQkFRRU1CZ0lFQkFNQkFnVUpBd0VMQXdNREFnRURBZ1lCQVZCR0wwWWdBUVlDQXdzQkN3RUNCUVFGQVFJSEJ3TUZCd01CQVFJRkdBc0dFeEVURWdocEFvQVNGeUVVNHY3dEJRd1dJQWtaRVFFRkF3UURCQU1FQXdJcEVBd0JBUVVEQ2dNRkJ3RUJDQWtCQkFRQ0FnY0JDUUVCSFNCeUlCMEJBUVVEQVFFQkN3TUVCUWtKQVFJRUJRRURDZ01GQVFFTUJ4d1BCd2dZRVJrSklSVUVCUVVDQVkzK3V3WUxBUVlNQkNrU0V4TVJCUkFSRHdVRkFRd0xCeVlMQlFjRUFnRUpCaXdhTmxFb1BDTWFLZ2tJRXdza0NRWUtCUUlCTGhFSENROEZSQXNEQlFvREFRTURCQVFESlVNU0lSVVVDRVFIQ0JBTEJBVUNBUUVCQVFFQkNSUU9NZ2dKQndRRkFnTUNDQWNGRWdnT0tnY0VCUVFERXhJTUNBa0REQnN3S1IwaElSMHBGU1lOQXdVR0FoSU5FaE1EQkFVRUJ3a1dGUVFJRUFjSENBSURCQWtFREFZeURna09CUUVDQkFJRkJBc1FBd1FGQXdBQUJBREEvK0FEUUFKZ0FBc0FEQUJmQU13QmNrdXdDMUJZUUJ5Zm5wRU1CQWNFcXFhaGtJWUZCZ2UxczM5T1RFc2RGZ2dRQmdOQUcwdXdERkJZUUJ5Zm5wRU1CQWNFcXFhaGtJWUZCZ2UxczM5T1RFc2RGZ2dOQmdOQUcwQWNuNTZSREFRSEJLcW1vWkNHQlFZSHRiTi9Ua3hMSFJZSUVBWURRRmxaUzdBTFVGaEFSd2tCQndRR0JBY0daZ29CQmhBRUJoQmtBQkFOQkJBTlpBOE9BZzBNQkEwTVpBQUlBQkVCQ0JGWkFnRUFCUUVEQkFBRFZ3QUJBQVFIQVFSWEVnRU1EQXRRQUFzTEN3dENHMHV3REZCWVFFRUpBUWNFQmdRSEJtWUtBUVlOQkFZTlpCQVBEZ01OREFRTkRHUUFDQUFSQVFnUldRSUJBQVVCQXdRQUExY0FBUUFFQndFRVZ4SUJEQXdMVUFBTEN3c0xRaHRBUndrQkJ3UUdCQWNHWmdvQkJoQUVCaEJrQUJBTkJCQU5aQThPQWcwTUJBME1aQUFJQUJFQkNCRlpBZ0VBQlFFREJBQURWd0FCQUFRSEFRUlhFZ0VNREF0UUFBc0xDd3RDV1ZsQUpHRmdsNVp4Y0c1dGEycHBhR0RNWWN4YVdVVkVPem96TVNzcUh4NFJFUkVSRVJBVEZDc0JJelVqRlNNVk14VXpOVE1GQVM0Qkp5WW5MZ0UvQVRZM1BnTTFOekkrQVRjK0FUVTBMZ01qTno0Qk56WW1JeUlPQVJVZUFSOEJJZ2NVRmhjZUF4Y3pGaGNXSHdNR0J3NEJCdzRFQndZVklUUXVBd2NoTmpjMk56NEJOekkyTWo0Qk1qNEJNamMyTnpZblBRSTBKajBESnk0Qkp5WXZBUzRDSnlZbkpqNEJOelVtSnlZM05qSVhGZ2NPQWdjeEJoVWVBUWNHQnhRT0FSVUhEZ0lIRGdFUEFSMEJCaDBCRkFZVkZCY2VBaGNXRng0QkZ4WVhIZ0lYQTBBeUhESXlIREwrVlFGQ0VFUURIZ29EQVFFQkRBWUNCQVFEQVFJRkNRTUJDd01EQXdJQkF3SUdBUUZRUmk5R0lBRUdBZ01MQVFzQkFnVUVCUUVDQndjREJRY0RBUUVDQlJnTEJoTVJFeElJYVFLQUVoY2hGT0wrN1FVTUZpQUpHUkVCQlFNRUF3UURCQU1DS1JBTUFRRUZBd29EQlFjQkFRZ0pBUVFFQWdJSEFRa0JBUjBnY2lBZEFRRUZBd0VCQVFzREJBVUpDUUVDQkFVQkF3b0RCUUVCREFjY0R3Y0lHQkVaQ1NFVkJBVUZBZ0h1TWpJY01qSkYvcnNHQ3dFR0RBUXBFaE1URVFVUUVROEZCUUVNQ3djbUN3VUhCQUlCQ1FZc0dqWlJLRHdqR2lvSkNCTUxKQWtHQ2dVQ0FTNFJCd2tQQlVRTEF3VUtBd0VEQXdRRUF5VkRFaUVWRkFoRUJ3Z1FDd1FGQWdFQkFRRUJBUWtVRGpJSUNRY0VCUUlEQWdnSEJSSUlEaW9IQkFVRUF4TVNEQWdKQXd3Yk1Da2RJU0VkS1JVbURRTUZCZ0lTRFJJVEF3UUZCQWNKRmhVRUNCQUhCd2dDQXdRSkJBd0dNZzRKRGdVQkFnUUNCUVFMRUFNRUJRTUFBQUlBWVArQUE2QUN3QUFIQUVRQU1rQXZRUnNhQ3dRQ0F3RkFBQUFBQXdJQUExa0VBUUlCQVFKTkJBRUNBZ0ZSQUFFQ0FVVUpDQ2NrQ0VRSlJCTVFCUkFyQUNBR0VCWWdOaEFCSWlZblBnRTNQZ0UxTkNjbUp5WW5KajhCTlRZbUp5WStBamMyTnpNV0Z4NEJCd1lYTUJjZUFRY09BUWNPQlJVVUZoY1dGdzRDQXF6K3FQVDBBVmowL21CV21UVWNjQ2dFQWdnT0JCTUpCd2dCQWdRRUFnSUdEZ29vVENOTktCUU9CQW9FQVFRQkJBVVBCd0lHQndnRkJBSURhVkVqV20wQ3dQVCtxUFQwQVZqOTEwaEFEQ2dNQVFZT0lCQWVJUlV0SXhRQkFnY3hGZ2NaR2g4T013VUZNeG82RXprVkF3b1RHaGtnQ1FzWUZCQU9FUWdPQmdFZklTczlJUUFBQUFFQXdQL2dBMEFDWUFCU0FEZEFORUUvUGhBSkJRVUFBVUFEQVFFQ0FBSUJBR1lFQVFBRkFnQUZaQUFDQWdWUEFBVUZDd1ZDVFV3NE55NHRKaVFlSFJJUkJnNHJKUzRCSnlZbkxnRS9BVFkzUGdNMU56SStBVGMrQVRVMExnTWpOejRCTnpZbUl5SU9BUlVlQVI4QklnY1VGaGNlQXhjekZoY1dId01HQnc0QkJ3NEVCd1lWSVRRdUF3TFhFRVFESGdvREFRRUJEQVlDQkFRREFRSUZDUU1CQ3dNREF3SUJBd0lHQVFGUVJpOUdJQUVHQWdNTEFRc0JBZ1VFQlFFQ0J3Y0RCUWNEQVFFQ0JSZ0xCaE1SRXhJSWFRS0FFaGNoRkVnR0N3RUdEQVFwRWhNVEVRVVFFUThGQlFFTUN3Y21Dd1VIQkFJQkNRWXNHalpSS0R3akdpb0pDQk1MSkFrR0NnVUNBUzRSQndrUEJVUUxBd1VLQXdFREF3UUVBeVZERWlFVkZBZ0FBQUFBQWdEQS8rQURRQUpnQUFzQVhnREFRQXBOUzBvY0ZRVUxCZ0ZBUzdBTFVGaEFMZ0FJQVFBSVhBa0JCd1FHQUFkZUNnRUdDd1FHQzJRQ0FRQUZBUU1FQUFOWUFBRUFCQWNCQkZjQUN3c0xDMEliUzdBTVVGaEFMUUFJQVFob0NRRUhCQVlBQjE0S0FRWUxCQVlMWkFJQkFBVUJBd1FBQTFnQUFRQUVCd0VFVndBTEN3c0xRaHRBTGdBSUFRaG9DUUVIQkFZRUJ3Wm1DZ0VHQ3dRR0MyUUNBUUFGQVFNRUFBTllBQUVBQkFjQkJGY0FDd3NMQzBKWldVQVVXVmhFUXpvNU1qQXFLUjRkRVJFUkVSRVFEQlFyQVNNMUl4VWpGVE1WTXpVekF5NEJKeVluTGdFL0FUWTNQZ00xTnpJK0FUYytBVFUwTGdNak56NEJOelltSXlJT0FSVWVBUjhCSWdjVUZoY2VBeGN6RmhjV0h3TUdCdzRCQnc0RUJ3WVZJVFF1QXdOQU1od3lNaHd5YVJCRUF4NEtBd0VCQVF3R0FnUUVBd0VDQlFrREFRc0RBd01DQVFNQ0JnRUJVRVl2UmlBQkJnSURDd0VMQVFJRkJBVUJBZ2NIQXdVSEF3RUJBZ1VZQ3dZVEVSTVNDR2tDZ0JJWElSUUI3akl5SERJeS9uWUdDd0VHREFRcEVoTVRFUVVRRVE4RkJRRU1Dd2NtQ3dVSEJBSUJDUVlzR2paUktEd2pHaW9KQ0JNTEpBa0dDZ1VDQVM0UkJ3a1BCVVFMQXdVS0F3RURBd1FFQXlWREVpRVZGQWdBQUFJQW9QL0FBM2NDZ0FCSkFJd0FYRUJaWWdFR0IzbDNFaEFFQUFZQ1FBQURBZ2NDQXdkbUFBWUhBQWNHQUdZQUFnQUhCZ0lIV1FBQUFBa0JBQWxaQUFFQUNBVUJDRmtBQlFRRUJVMEFCUVVFVVFBRUJRUkZoWU9BZm1WallXQlBUVUpBTFN3cUtDUWlDaEFySlM0Qkl5SU9BUWNHSXlJbUx3RW1Md0VtTHdFdUF5OEJMZ0kxTkQ0Q056WW5KaThCSmlNaUJ3WWpCdzRDQnc0QkZCNEJGeDRCRng0QkZ4NEJNekkrQWpjMkp5WUhCZ2NHSXlJbkxnRW5MZ1kyTnpZM01EY3lOVFl6TWhZZkFSNEJCd1lYSGdJZkFSNEJGeFlYRmg4QkZoOEJGak15TmpjMk16SWVBaGNXQndZRFFCdG5KUVlNQ2dRd0NnUUtDd0lsRmdRQkFnUUdCZzBRREFFS0NBZ0NCZ2tISVI0UU1RSWRKaHdrQVFFQkRoY1BCQVFFQ0JRUUkwZ3pMRG8yTldFa0ZoWWpJQkkyS3dZZEpDWUtGVUJvTkRrckdTZ2xJU01UQkFNRUNTRUNBUjBUREJVTEFpNGpGU0FDQVFvTERBRVhGUXNCQWdNQkF4WW5BaHdSRFI4ZkJnb1BLeWtqQ2hzR0JJRWJPd0lFQWg4SENnSWZHQU1DQXdNR0J3MFREUUVMQ2d3RUF3Z0xEZ2tzUHlFN0F5UVhBUUVKRmhnTURSWWlKRE1kUUdFMUxqQW5KaW9DQ2hvV1FUY0dhU3NFQVVvbUx5MFpMekkxUHpNbUdBNGNGUUVCRWd3TkFqbEtIQ3dZQ1JNT0RnRVpGd3NCQXdJQkJCY2lBaGdQRkFRUkdCb0tHeFlSQUFBREFJQUFJQU9BQWlBQUF3QUdBQk1BUEVBNUVoRU9EUXdKQ0FRSUF3SUJRQVFCQVFBQ0F3RUNWd1VCQXdBQUEwc0ZBUU1EQUU4QUFBTUFRd2NIQUFBSEV3Y1RCZ1VBQXdBREVRWVBLeE1SSVJFQkpTRUJFUmNIRnpjWE54YzNKemNSZ0FNQS9vRCt1Z0tNL1ZybWlBU2VZR0NlQklqbUFpRCtBQUlBL3VqNC9rQUJySytiQkl0SlNZc0VtNi8rVkFBQ0FJRC80QU9BQW1BQUp3QlZBR3BBWnpReUlRTUVBQlFCQVFKS0FRZ0JUaGdDREFrL0FRY01CVUFBQkFBQ0FBUUNaZ1VEQWdJQkFBSUJaQXNLQWdnQkNRRUlDV1lBQ1F3QkNReGtBQVlBQUFRR0FGa0FBUUFNQndFTVdRQUhCd3NIUWxGUFRVdEpTRVpGUlVRK1BDa29FUklSSVNZUURSUXJBREllQVJVVUJ3WWpJaWNpSXljakppY2lCeU1IRGdFUEFUNEROVFFuSmljbUp5WTFORFlrSWc0QkZSUVhIZ0lYSmpVeEZoVVVCd1lXRnpNeVB3STJQd0V6SXpZM01oY1ZNeklWRmpNeVBnRTBKZ0dodnFOZVkyV1dWRGNCQWdFQ0R3NFJFQUVFQlFzQ1R3c0xCUUVOQWdFREFUVmVBV3JRc1djOUFRTUNBUUlISkFJSkNBWURCQU5sQVFvSkFRRUxDd3NLQWdFOVdtaXdabWNDUUVxQVMyOU1UeE1CQkFFR0FnRUVBU01oSkJNRkFoWVRBd0VFQVVOUFMzOXFVNDVVV2t3QkJBUUJBd0VMREFKeUJnd0NBUUVzQVFNRUF3RURBUUVVVFlxbmpnQUFBQUFEQUdEL2dBT2dBc0FBQ1FBUkFCZ0FuclVVQVFZRkFVQkxzQXBRV0VBNkFBRUFDQUFCQ0dZQUJnVUZCbDBBQWdBQUFRSUFWd3dCQ0FBTEJBZ0xWd0FFQUFNSkJBTlhDZ0VKQlFVSlN3b0JDUWtGVHdjQkJRa0ZReHRBT1FBQkFBZ0FBUWhtQUFZRkJta0FBZ0FBQVFJQVZ3d0JDQUFMQkFnTFZ3QUVBQU1KQkFOWENnRUpCUVVKU3dvQkNRa0ZUd2NCQlFrRlExbEFGZ29LR0JjV0ZSTVNDaEVLRVJFUkVoRVJFUkVRRFJZckV5RVZNelVoRVRNMUl6Y1JJUmN6TlRNUkF5TVZKeUVSSVlBQ0FDRDl3T0RBNEFGRmdCdGdJR0J1L3M0Q0FBS2d3T0QrUUNDZy9rQ0FnQUhBL21CdGJRR0FBQUFBQVFDZy84QURkd0tBQUVrQU5rQXpFaEFDQUFNQlFBQUNBd0pvQUFNQUEyZ0FBUUFFQUFFRVpnQUFBUVFBVFFBQUFBUlJBQVFBQkVWQ1FDMHNLaWdrSWdVUUt5VXVBU01pRGdFSEJpTWlKaThCSmk4QkppOEJMZ012QVM0Q05UUStBamMySnlZdkFTWWpJZ2NHSXdjT0FnY09BUlFlQVJjZUFSY2VBUmNlQVRNeVBnSTNOaWNtQTBBYlp5VUdEQW9FTUFvRUNnc0NKUllFQVFJRUJnWU5FQXdCQ2dnSUFnWUpCeUVlRURFQ0hTWWNKQUVCQVE0WER3UUVCQWdVRUNOSU15dzZOalZoSkJZV0l5QVNOaXNHZ1JzN0FnUUNId2NLQWg4WUF3SURBd1lIRFJNTkFRc0tEQVFEQ0FzT0NTdy9JVHNESkJjQkFRa1dHQXdORmlJa014MUFZVFV1TUNjbUtnSUtHaFpCTndZQUFBQUFBZ0NBQUNBRGdBSWdBQXdBRHdBclFDZ1BDd29IQmdVQ0FRZ0FBUUZBQUFFQUFBRkxBQUVCQUU4Q0FRQUJBRU1BQUE0TkFBd0FEQU1PS3lVUkJSY0hKd2NuQnljM0pSRUJJUUVEZ1A3NmlBU2VZR0NlQklqKytnTHYvU0VCY0NBQjVNZWJCSXRKU1lzRW04ZitIQUlBL3VnQUFBQUJBSUQvNEFPQUFtQUFMUUJCUUQ0aURBb0RBZ0FtQVFZREZ3RUJCZ05BQlFRQ0FnQURBQUlEWmdBREJnQURCbVFBQUFBR0FRQUdXUUFCQVFzQlFpa25KU01oSUI0ZEhSd1dGQkFIRHlzQUlnNEJGUlFYSGdJWEpqVXhGaFVVQndZV0Z6TXlQd0kyUHdFekl6WTNNaGNWTXpJVkZqTXlQZ0UwSmdKbzBMRm5QUUVEQWdFQ0J5UUNDUWdHQXdRRFpRRUtDUUVCQ3dzTENnSUJQVnBvc0dabkFtQlRqbFJhVEFFRUJBRURBUXNNQW5JR0RBSUJBU3dCQXdRREFRTUJBUlJOaXFlT0FBQUFBQUlBWVArQUE2QUN3QUFGQUEwQWJVdXdDbEJZUUNrQUFRWURCZ0VEWmdBRUF3TUVYUUFBQUFJR0FBSlhCd0VHQVFNR1N3Y0JCZ1lEVHdVQkF3WURReHRBS0FBQkJnTUdBUU5tQUFRREJHa0FBQUFDQmdBQ1Z3Y0JCZ0VEQmtzSEFRWUdBMDhGQVFNR0EwTlpRQTRHQmdZTkJnMFJFUklSRVJBSUZDc0JJUkV6TlNFRkVTRVhNelV6RVFLZy9jRGdBV0Qrd0FGRmdCdGdBc0QrUU9BZy9rQ0FnQUhBQUFBQUFBY0FzLy9oQXlnQ1p3QTNBRVlBV0FCbUFIRUFqd0M3QVFCQUlaa0JDd2taRkJNREFBZDJBUVFBQlFFTUEwd3BBZ0lNQlVCK0FRVWxBUTBDUDB1d0MxQllRRlFBQ1FnTENBa0xaZ0FLQ3dFTENnRm1BQUFIQkFFQVhnOEJCQTBIQkExa0FBMERCdzBEWkFBTUF3SUREQUptRGdFQ0FtY0FDQUFMQ2dnTFdRQUJCUU1CVFFZQkJRQUhBQVVIV1FBQkFRTlJBQU1CQTBVYlFGVUFDUWdMQ0FrTFpnQUtDd0VMQ2dGbUFBQUhCQWNBQkdZUEFRUU5Cd1FOWkFBTkF3Y05BMlFBREFNQ0F3d0NaZzRCQWdKbkFBZ0FDd29JQzFrQUFRVURBVTBHQVFVQUJ3QUZCMWtBQVFFRFVRQURBUU5GV1VBbWMzSTVPTFcwc3JHa282Q2ZtSmVVa29TRGdIOTlmSEtQYzQ5QlB6aEdPVVllSFJFUUVBNHJBUzRDTmo4Qk5pY3VBUTRCRHdFT0FTSW1KelVtUGdJM05DNENCZ2NPQkJVT0FSMEJIZ1FYRmo0Q056WW5KZ01HTGdJMU5EWTNOaFlWRkFjR0p3NERGeFVVSGdFWEZqWTNQZ0V1QVFjR0pqVTBOamMySGdJVkZBWTNCaVluSmpZM05oWVhGamN5UGdFM05UWXVCQThCSWdZVkZETTJIZ01PQVJVVUZ4WW5MZ0VHSWc0QkJ5TVBBUVlWRkI0Qk16WTNOakllQXhjV0J3NENGUlFXTWpZM016NEJMZ01DaFFjSUFRRUJBUmdkQ2lBZ0hRa0tCUWdHQXdFQkFRRUNBUU1NRlNVWkdUTW5JQkFYRndRaUx6ODZJU2RYVDBJUEpFQVE2eVZGTWg1dFRVOXNRalZZSFNnUUNBRUJEZzB2VWhvTUFoSXpQZzhVRXc0SURna0dGUzhGQ3dJREFnVUdDd0lHOUFRSEJRRUNCeEFWRmhJRkJnY0tFUkFXRGdZREFRRU9BZ3NKRXhFT0R3WUZBUUVCRWdjTEJ3RVZBdzRWR1JrWkNSTUxBUUVERGhVTUFRRUpBUkFaSVNJQkxnRUdCZ1lDQWpJbERBa0hDZ1VGQWdJQkF3UURDQWNNQkE0WEdnNEJDd3NyTHl3YkFTaFBGQlFzUlNzZkRnTUVFaWRDS21NMERmN21BaFVuT1NGQlh3VUVURUZLTnl2N0JTQW5KZzBOQlE0Z0NCNFlLUlE4TnlLMEFoTVBFQnNDQVFVSkRRZ1FHVUVGQVFZRkVBUUZBUVlOdEFVSUJnSWVMUmtSQkFFQkFRd0pGZ1lIQ1JZUEZBY0NFd0lCL2dNREFRTUNBUUVCQmhnSkRna0JCZ0VDQ3hBZUV6Y3lBZ1lRQncwUENoQXFTamN1SHhRQUFBWUFRUCtrQThBQ213QU9BQmtBUEFCSEFFOEFjd0NKUUlaU0FRUUxabDRDRFFCZk9qRURCZzBEUURrMEFnWTlDZ0VIQ0FzSUJ3dG1FUUVMQkFnTEJHUVFBZzhEQUFFTkFRQU5aZzRCRFFZQkRRWmtBQVlHWndBTUNRRUlCd3dJV1FVQkJBRUJCRTBGQVFRRUFWRURBUUVFQVVWUlVCQVBBUUJ0YW1sb1ZsUlFjMUZ6VFV4SlNFTkJQajB3TGlJZkhoMFdGUThaRUJrR0JBQU9BUTRTRGlzbElpWTBOak15SGdNVkZBNEJJeUl1QVRVME5qSVdGQVlGTkM0Qkp5WXJBU0lPQmhVVUZ4NEJNekkzRnpBWEhnRStBVFVuUGdFQUlpWTBOak15SGdFVkZEWXlGaFFHSWlZMEZ6SVhMZ0VqSWc0REZSUVdGd2NVQmhRZUFUOEJIZ0V6TURzQ0xnRTFORDRCQXc0UUZ4Y1FCZ3dLQndRTEVkTUtFZ3NYSUJjWEFXcEVkVWNHQlFrZE5qSXNKaDRWQ3dnWGxXRkJPajRCQWdVRUF4SXNNdjFVSUJjWEVBc1NDcjBoRmhZaEZ0b0dDeEcwZHpWaFR6c2hQVFlZQVFVSkNsZ2NPeUFEQkFNRUJGQ0k0UmNoRndRSUNRd0hDaElMQ3hJS0VSY1hJUmM0UDJ0Q0JBRUtFaG9oSnlvd0dSMGRUMmdaS2dFQkFRRUhCa0lpWGdGRUZ5QVhDaElMRURjWElCY1hJRUVCWm9nY00wVlZMVUJ2SjFrQkJBb0RBd1E5Q2dvUEhROUhlRVlBQUFnQVFQOWhBOEVDNGdBSEFCQUFGQUFZQUIwQUpnQXZBRGNBWmtCak1DQVRBd0lFTmlFQ0FRSTNIUXdCQkFBQkxSd0NBd0FzSnhvWEJBVURCVUFBQVFJQUFnRUFaZ0FBQXdJQUEyUUlBUVFHQVFJQkJBSlhCd0VEQlFVRFN3Y0JBd01GVVFBRkF3VkZIeDRWRlJFUktpZ2VKaDhtRlJnVkdCRVVFUlFTRlFrUUt5VUJCaFVVRnlFbUFTRVdGd0UrQVRVMEp5WW5Cd0VXRno4QkVUWTNKd01pQnhFQkxnTURGak15TmpjUkJnY0JEZ1FIRndGZC92Y1VHQUVQQmdKSS92RUZCUUVKQ2dvMVJJSy8vbTVFZ0wvYmYwQy8wMHBHQVJNUUh5RWlsRUJESmtnaUJRWCtweGd1S1NRZkRMNmNBUWxBUkVwR0JnRWJCUWIrOXg5Q0lrdUlnRURBL2xwL1A3N0Uvb05FZ2I4QnlSais4UUVUQlFjRkEveVRGQXdNQVE0RkJBSXZEU0FtS2k4WnZnQUFBQUFGQUFYL1FnUDdBd0FBSVFBMEFFQUFVQUJnQU1GQURnZ0JBZ1VXQVFFQ0FrQVFBUUU5UzdBTFVGaEFLUW9CQUFBREJBQURXUTBJREFZRUJBa0hBZ1VDQkFWWkN3RUNBUUVDVFFzQkFnSUJVUUFCQWdGRkcwdXdGbEJZUUNJTkNBd0dCQVFKQndJRkFnUUZXUXNCQWdBQkFnRlZBQU1EQUZFS0FRQUFDZ05DRzBBcENnRUFBQU1FQUFOWkRRZ01CZ1FFQ1FjQ0JRSUVCVmtMQVFJQkFRSk5Dd0VDQWdGUkFBRUNBVVZaV1VBbVVsRkNRU01pQVFCYldWRmdVbUJLU0VGUVFsQThPelkxTFNzaU5DTTBHaGdBSVFFaERnNHJBU0lPQWhVVUZoY1dEZ1FQQVQ0RU54NEJNekkrQWpVMExnRURJaTRCTlRRK0F6TXlIZ0lWRkE0QkFpSUdGUlFlQVRJK0FUVTBKU0lPQWhVVUZqTXlQZ0kxTkNZaElnWVZGQjRETXpJK0FUUXVBUUlGWjcyS1VtbGJBUWdPRXhJUUJRVUlIVkJHVUJnYU54eG51b1pQaHVlS2RNRjBLMUJvZ2tSVm0yOUNjTDVQUFNvVUlTY2lGUDdPRHhvVERDb2VEeHNVRENzQnNSOHBCdzBTRmd3VUlSUVVJUU1BUkhTZ1dHV3lQQmN0SkNFWUVRVUVBUVlURmlRVUJRVkVkS0JZZGNoei9QUlRtMkU2YmxsREpUcGhoVWxobWxRQnB5Y2ZGU01WRlNNVkh5Y0tFaHNQSUMwTUZSd1FIeWNuSHcwWEV3NElGU01xSUJFQUFBRUFWLzl1QTZrQzBRRjVBYUpCalFGaUFJWUFkQUJ5QUhFQWJnQnRBR3dBYXdCcUFHa0FZQUFoQUJRQUV3QVNBQkVBRUFBTUFBc0FDZ0FGQUFRQUF3QUNBQUVBQUFBYkFBc0FBQUZIQVVZQlJRQURBQUlBQ3dGZ0FWMEJYQUZiQVZvQldRRllBVW9BcUFDbkFKMEFrQUNQQUk0QWpRQ01BQkFBRFFBQ0FKc0FtZ0NaQUpRQWt3Q1NBQVlBQVFBTkFTNEJMUUVxQUxVQXRBQ3pBQVlBQ1FBQkFTY0JKZ0VsQVNRQkl3RWlBU0VCSUFFZkFSNEJIUUVjQVJzQkdnRVpBUmdCRmdFVkFSUUJFd0VTQVJFQkVBRVBBUTRCRFFFTUFPMEF6QURMQU1rQXlBREhBTVlBeEFEREFNSUF3UURBQUw4QXZnQzlBTHdBS3dBRkFBa0JDZ0RvQU9jQTB3QUVBQU1BQlFBSEFFQUJSQUNIQUFJQUN3Q2NBSkVBQWdBTkFRc0FBUUFGQUFNQVAwQkZEQUVMQUFJQUN3Sm1BQUlOQUFJTlpBQU5BUUFOQVdRQUFRa0FBUWxrQ2dFSkJRQUpCV1FFQVFNRkJ3VURCMllJQVFjSFp3QUFDd1VBU3dBQUFBVlBCZ0VGQUFWRFFSNEJWd0ZVQVVNQlFnRkJBVDhCTEFFckFTa0JLQUQ5QVBvQStBRDNBT3dBNndEcUFPa0Eyd0RhQU5rQTJBQ21BS1VBbUFDVkFEa0FOd0FPQUE0ckV5OENOVDhGTlQ4SE5UOGlPd0VmTVJVSEZROERIUUVmRVJVUERTc0NMd3dqRHd3ZkRSVVhCeDBCQnhVUER5TUhJeThOSXljakp3OEpJdzhCS3dJdkZEVTNOVGM5QVQ4UE16OEJNelV2RVNzQk5TTVBBUlVQRFNzQ0x3ZzFQeGZSQWdFQkFnRURBZ1FGQVFFQ0FnSUNBZ01CQWdNRUFnTURCQVFFQlFZREF3Y0hCd2tKQ1FzSUNBa0tDUXNMQ3dzTUN3ME5HUTBuRFEwT0RBME5EUTBNREF3TEN3a0ZCQWtJQndjR0J3VUZCZ1FIQkFNREFnSUNCQU1DQVFJQkFnVURBZ1FEQWdJQ0FRRUJBUU1DQWdNTUNRUUdCUVlHQndRREF3TUNBd0lEQVFFQkFnUUJBZ0lDQXdJREFnUURBZ01EQkFJQ0F3SUVCQVFEQkFVRkFRRUNBZ0lFQlFjR0JnY0hBd1VLQVFFRkZna0pDUWdFQWdNREFRSUJBUUlDQkFNREF3WUdCd2dKQkFRS0Nnc0xEQXNsRGd3TkRRNE9EUTBPRFFjR0JBUUxEQWNJQlFjS0N3Y0dFQWdJREFnSUNBb25GaFlMQ3dvS0Nna0pDQWdHQndJREFnSUNBUUlCQVFFQkFnRURBZ0VFQXdRQ0JRTUZCUVVHQmdjSEFnRUJCQW9HQ0FjSUNRUUVCQU1GQXdRREF3SUJBUUVEQVFFQkJRSUVBd1VFQlFVR0JnVUhCd0VDQVFJQ0FnSUJBUUlCQVFFQ0FRTURBd01FQlFVRkJ3Y0hCZ2NJQkFVR0J3c0lBVXNGQndRT0JnWUhCd2dIQlFVSEJ3a0RCQVFDRXdvTERRNEhDUWNJQ2dnSkNRVUVDZ29KQ2drS0NnY0dCd1VGQlFVRUF3UURBZ0lFQVFJQkF3TURCQVFGQmdVSEJ3WUVBd2NJQndnSUNBa0lDUWdSQ1FnSkNBY0pEdzBNQ2hBQ0F3Z0ZCZ1lIQ0FnSUJBWUVCQVlGQ2dVR0FnRUZFUTBJQ2dvTERBNEpDQWtJQ1FnUEVBNFRCd3dMQ2dRRUJBUUNCQU1DQVFJREFRRURBZ1FHQmdVR0Nnc0JBZ01EQ3c4UkNRb0tDZ1VGQ2dFQkF3c0ZCUWNHQXdRRUJBUUVCQVFEQXdNREFnTUZCUU1DQlFNRUF3UUJBUU1DQWdJQ0FRRUNBUUlFQWdRRkJBSUNBZ0VCQVFVRUJRWURBd1lDQWdNQkFRSUNBZ0VDQXdJRUF3UUVCUUlEQWdNREF3WURBd01FQkFNSEJBVUVCUUlEQlFJQ0F3RUNBZ0lDQVFFQkFRRUNBZ2dGQndjS0NnWUdCd2NIQ0FrSkNBc0JBUUlDQWdNSUJRUUZCZ1FGQlFNRUFnSURBUVlFQkFVRkN3Y1dFQWdKQ1FnS0Nna0tDUXNKQ3drS0NBZ0lCQVVHQlFvR0FBQUFCQUJlQUNBRG9nSWdBQk1BS0FBc0FERUFOMEEwTVRBdkxpd3JLaWtJQWdNQlFBUUJBQUFEQWdBRFdRQUNBUUVDVFFBQ0FnRlJBQUVDQVVVQ0FDWWpHUllMQ0FBVEFoTUZEaXNCSVNJT0FSVVJGQll6SVRJMk5SRTBMZ01URkFZaklTSXVCVFVSTkRZekJUSVdGUmNWRnhFSEVTYzFOd0pmL2tZU0lSUXJIQUc2SENjSERCQVVGUk1PL2tZRUNBY0hCUVFDRmc4QnVnNFRYc1FpZ0lBQ0lCRWVFdjZJSENzcUhRRjRDeFFRREFiK1J3OFdBZ1FGQndjSUJBRjREUklCRVExcHEyc0JnRHorOTBPRVF3QUFBQVlBZ0FBQUE0QUNRQUFmQUVrQVVRQlpBRjBBWlFEZlM3QW9VRmhBVWdBUEN3NEhEMTRBRUE0U0RoQVNaZ0FCQ1FFSUF3RUlXUUFEQUFjRFN3UUNFd01BQ2dFSEN3QUhXUUFMQUE0UUN3NVpBQklBRVEwU0VWa0FEUUFNQmcwTVdRQUdCUVVHVFFBR0JnVlNBQVVHQlVZYlFGTUFEd3NPQ3c4T1pnQVFEaElPRUJKbUFBRUpBUWdEQVFoWkFBTUFCd05MQkFJVEF3QUtBUWNMQUFkWkFBc0FEaEFMRGxrQUVnQVJEUklSV1FBTkFBd0dEUXhaQUFZRkJRWk5BQVlHQlZJQUJRWUZSbGxBTEFFQVpXUmhZRjFjVzFwWFZsTlNUMDVMU2taRU9qZzNOaTh0SmlNYUZ4SVFEdzROREFnRkFCOEJIeFFPS3dFakppY3VBU3NCSWdZSEJnY2pOU01WSXlJR0ZSRVVGak1oTWpZMUVUUW1FeFFPQVNNaElpWTFFVFErQWpzQk56NEJOelkvQVRNd093RWVBaGNlQXg4Qk16SWVBUlVrSWdZVUZqSTJOQVlpSmpRMk1oWVVOek1WSXdRVUZqSTJOQ1lpQTBON0F3WXdKQkN4RUNNdUNBUWJSQnNiS0NrYUFvQWFJeU1EQnc0SS9ZQU5GZ1lKRFFlSUNRUVBBeVlORExFQkFRRURCUU1GRHhnU0NnbUtDUTBIL3VlT1pHU09aSEYwVVZGMFVUVWlJdjhBSlRZbEpUWUI0QU1ITlNFZk5BZ0ZJQ0FrR2Y2Z0d5Z29Hd0ZnR2lQK1l3b1BDaFlOQVdBR0N3Y0ZCZ1VUQkNvTUNBRUNBd01GRVJ3VUN3WUhEZ2dDWkk1a1pJN1NVWFJSVVhUZ0ltazJKU1UySlFBREFRRC9ZQU1BQXVBQUN3QVhBREVBVFVCS0RBc0NCUU1DQXdVQ1pnQUFBQU1GQUFOWkFBSUFBUVFDQVZrQUJBb0JCZ2NFQmxrSkFRY0lDQWRMQ1FFSEJ3aFBBQWdIQ0VNWUdCZ3hHREV1TFN3ckVSRVRFeWNWRnhVUURSY3JBQ0lHRlJFVUZqSTJOUkUwQXhRR0lpWTFFVFEyTWhZVkZ4VVVEZ0VqSWlZOUFTTVZGQllYRlNNVklUVWpOVDRCUFFFQ1FZSmRYWUpkSUVwb1NrcG9TbUE3Wmp0YWdpYUxaWklCUW9wamh3TGdZa1greTBWaVlrVUJOVVgraGpoUFR6Z0JOVGhQVHppWm56eGtPNEJibjU5bGt3ZCtKQ1IrQjVObG53QUFCQUQwLzJBRERBTGdBQklBSkFBc0FEa0FSa0JERmhRVERBb0dCZ01FQVVBWUNBSURQUUFBQUFFQ0FBRlpBQUlBQlFRQ0JWa0dBUVFEQXdSTkJnRUVCQU5SQUFNRUEwVXVMVFF6TFRrdU9Tb3BKaVVoSUJBSER5c0FJZ1lWRkI4Q0d3RTNOajhCUGdJMU5BY1ZCZzhCQ3dFbUp5NEJOVFEyTWhZVkZDWWlCaFFXTWpZMEJ5SW1OVFErQVRJZUFSUU9BUUp2M3AwVEFRUDE5UUVCQVFFR0NRUXlBUUVDMXRnQkFRZ0tpc1NLdDJwTFMycExnQ2MzR1N3eUxCa1pMQUxnbTI0ek1nTUcvZmNDQ1FJREFRTVFJU0lSYjhnQkFRTUUvamtCeXdNQkZpNFhZWWlJWVM2M1MycExTMnFUTnljWkxCa1pMRElzR1FBQ0FRRC9ZQU1BQXVBQUN3QWxBRUZBUGdvSkFnTUJBQUVEQUdZQUFRQUFBZ0VBV1FBQ0NBRUVCUUlFV1FjQkJRWUdCVXNIQVFVRkJrOEFCZ1VHUXd3TURDVU1KUkVSRVJFVEV5a1ZFQXNYS3lReU5qVVJOQ1lpQmhVUkZDVVZGQTRCSXlJbVBRRWpGUlFXRnhVakZTRTFJelUrQVQwQkFiK0NYVjJDWFFGOE8yWTdXb0ltaTJXU0FVS0tZNGRkWWtVQk5VVmlZa1greTBYaG56eGtPNEJibjU5bGt3ZCtKQ1IrQjVObG53QUFBQUlBOVA5Z0F3d0M0QUFTQUI4QUswQW9EQW9JQmdRQlBRTUJBUUlCYVFBQUFnSUFUUUFBQUFKUkFBSUFBa1VVRXhvWkV4OFVIeEFFRHlzQUlnWVZGQjhDR3dFM05qOEJQZ0kxTkFVaUpqVTBQZ0V5SGdFVURnRUNiOTZkRXdFRDlmVUJBUUVCQmdrRS92UW5OeGtzTWl3WkdTd0M0SnR1TXpJREJ2MzNBZ2tDQXdFREVDRWlFVy9ETnljWkxCa1pMRElzR1FBRkFRRC9ZQU13QXVBQUF3QUtBQlVBSFFBMUFGOUFYQWNCQWdFY0d4UUdCQUFDSVFFRUFDQUJBd1FFUUFVQkFnRUFBUUlBWmdBQkNnRUFCQUVBV1FBRUJnRURCd1FEV1FrQkJ3Z0lCMHNKQVFjSENFOEFDQWNJUXdVRU5UUXpNakV3THk0cktpUWlIeDRZRnhBT0JBb0ZDZ3NPS3dFM0FRY2xNamNERlJRV054RTBKaU1pRGdFSEFUWTNOU01WRkFjWE5nYzJOeWNHSXlJdUF6MEJJeFVVRmhjVkl4VWhOU01CRVJ3Q0F4eis3Q1VnNDEzZlhFSVpMeVlQQVJJSllpSWlGRERxTWkwVExUTWpRellwRnlhTFpaSUJRb29DMEJEOGtCRDlFUUdCNjBWaXB3RTFSV0lRSFJQK0xSb2FuNTlBTlNKRHF3TVhJQllXS1RWREk2Q2ZaWk1IZmlRa0FBQURBRUQvb0FQQUFxQUFCd0FYQURvQWtFQUxNUUVCQnpvd0FnTUZBa0JMc0JoUVdFQXdBQVlCQUFFR0FHWUFCQUFGQlFSZUNBRUNBQWNCQWdkWkFBRUFBQVFCQUZrQUJRTURCVTBBQlFVRFVnQURCUU5HRzBBeEFBWUJBQUVHQUdZQUJBQUZBQVFGWmdnQkFnQUhBUUlIV1FBQkFBQUVBUUJaQUFVREF3Vk5BQVVGQTFJQUF3VURSbGxBRkFvSU5qTXVMQ1VqR3hrU0R3Z1hDaGNURUFrUUt3QXlOalFtSWdZVUFTRWlCaFVSRkJZeklUSTJOUkUwSmdNbUl5SUdEd0VPQkNNaUp5NENMd0VtSXlJSEF4RStBVE1oTWg0QkZSTUN1RkE0T0ZBNEFRajg4QmNoSVJjREVCY2hJZVVMRHdjTEJ5WUNCQVVFQlFNTkNRRURBd0ZzRFJRVUR2MENEZ29DekFZTUJ3RUJZRGhRT0RoUUFRZ2hHUDF5R0NFaEdBS09HQ0grZFF3R0JTQUNBZ01CQVFnQkFnUUJkQThQL3M4Q0NRb05CZ3NIL2ZjQUFBQUlBRmIvUFFPM0Fza0FLUUEyQUZVQVl3QnhBSUFBa1FDZEFMSkFyM0lCQnd4TkFRWUhjQUVMQ1RnM0lCTUVBZ1ZNUlVRWkJBQUNLZ0VCQUFaQVZWUk9Bd1FNUGdBR0J3a0hCZ2xtQUFVT0FnNEZBbVlBQWdBT0FnQmtBQUFCRGdBQlpBQUJBV2NBREFBTEJBd0xXUUFKQUFvRENRcFpBQVFBQXcwRUExa1NBUTBBRUFnTkVGa1JBUWNBQ0E4SENGa0FEdzRPRDAwQUR3OE9VUUFPRHc1RmdvRlhWcGlXazVLS2lJR1JncEYvZm5kMmJXeGxaRjFjVm1OWFkxRlFTVWhBUGpJd0l5SWRIQmNWRXc0ckFTY1BBU2NtRHdFT0FSVVJGQjRETmo4QkZ4WXpNajhCRmhjV01qYzJOeGNXTWpZM05qVVJOQUV1QVRVMFBnRXpNaFlWRkFZM0p6NEJOVFF1QVNNaUJoVVVGd2NuTGdFakJnOEJFVGNYRmpJMlB3RVhCU0lHRlJFVUZqSTJOUkUwTGdFWElnNENIUUVVRmpJMlBRRW1OeFVVSGdFeVBnRTlBVFF1QVNNR0F5SU9BaFVVRmpNeVBnSTFOQzRCQmlJbU5EWXpNaDRDRlJRRHFiY0wyOGtIQjlNR0JnSUVCQVlHQTgzS0F3UUVBeDR2UXdVVUJXUXNUZ01HQlFJSC92dzJYQ2RES0QxV1hha3pCZ1V4VkRKTWF5WVd5UUlEQWdRRHVzSEtBZ1VGQXR5aS9hb0lDd3NQQ3dVSXpBUUhCUU1MRHdzRHhBVUlDZ2tGQlFrRkR6QU9HUklMS0J3T0dSTUxFeDhHR2hNVERRY0xDUVVDbnlvQlpGUURBMUlDQ1FiOXZBTUdCUU1DQVFGUVZRRUNEVjVtQ0FpWGJoSUJBZ0lHQ0FKRkR2elZWYlVxSjBRblZqd3F0Wm9NRVJ3TU1WVXhiRXNwVWdwVUFRRUJBVWdDSEV4VkFRRUJaQ1UxQ3dmK2tBZ0xDd2dCY0FVSUJVY0RCUWNEalFjTEN3ZU5EMUs2QlFrRUJBa0Z1Z1VJQlFQK25Rc1NHUTRjS0FvVEdRNFNJQkprRXhvVEJRa01CZzBBQUFBQUF3Q2cvK0FEZ0FLZ0FBa0FFZ0FqQUVGQVBoNFNFUTBNQlFJR0Rna0lBd1FCQWtBQUJRWUZhQUFHQWdab0FBUUJBQUVFQUdZQUFnQUJCQUlCVndBQUFBTlBBQU1EQ3dOQ0VpY1lFUkVSRUFjVkt5a0JFU0UzSVJFaEVRY0ZKd0VuQVJVekFTYzNKeTRDSXlJUEFUTWZBVGMrQVRVMEF1RDk0QUdnSVA0Z0FtQWcvdnNUQVZZVy9waEFBV2tYUmhrQ0J3Y0VDd2daQVJZcUdBUUVBZ0FnL2NBQndDQ1lFd0ZYRi82WVFRRm9GMEFaQXdNQ0NCZ1hLaGtFQ2dVTUFBQUFCZ0RnLzZBRElBS2dBQ0FBTHdCQ0FFWUFTZ0JPQUxoQUMwQTVPREFlRUFZSUN3RkFTN0FVVUZoQVFRQUtBd3dEQ2w0T0FRd05Bd3dOWkE4QkRRc0REUXRrQUFzSUNBdGNBQUVBQmdBQkJsa0hBZ0lBQ1FVQ0F3b0FBMWNBQ0FRRUNFMEFDQWdFVWdBRUNBUkdHMEJEQUFvRERBTUtER1lPQVF3TkF3d05aQThCRFFzRERRdGtBQXNJQXdzSVpBQUJBQVlBQVFaWkJ3SUNBQWtGQWdNS0FBTlhBQWdFQkFoTkFBZ0lCRklBQkFnRVJsbEFHVTVOVEV0S1NVaEhSa1ZFUTBKQk5CWTFHak1SRlRNUUVCY3JBU00xTkNZckFTSU9BaDBCSXhVekV4UVdNeUV5UGdjMUV6TWxORDRDT3dFeUhnTWRBU01CRlJRR0l5RWlKaThCTGdROUFRTWhCek1SSXhNakF6TURJeE16QXlDZ0lobUxDeFlRQ2FBcUx5TVlBUm9GQ3drSkNBWUZCQUl1S2Y1OUJRZ0xCWXNGQ1FjR0E4WUJEaEVNL3VZREJnTUVBd1FEQWdFd0FiUG9IQnlPSFJZZXpoMFZIZ0k5S0JraUNSQVdEQ2dkL2JzWklnSURCZ1lJQ0FvS0JnSkZSUVlMQ0FVREJnY0pCU2o5bndFTkVRRUNBZ0lFQlFVR0F3RUNSRUQrSGdIaS9oNEI0djRlQUFBQUFBSUF3UCtnQTBBQzRBQUxBQlFBUDBBOEZCRVFEdzROREFjRFBnQUdBQUVBQmdGbUJ3VUNBd0lCQUFZREFGY0FBUVFFQVVzQUFRRUVVQUFFQVFSRUFBQVRFZ0FMQUFzUkVSRVJFUWdUS3dFVk14RWhFVE0xSVJFaEVTVW5OeGNISnhFakVRSkE0UDNBNFA4QUFvRCtRaGVWbFJkdUlBSUFJUDNnQWlBZy9hQUNZRFFYbFpVWGJmNGFBZVlBQWdEQS82QURRQUtnQUFzQUZBQStRRHNVRVJBUERnME1Cd0VBQVVBQUJnTUdhQWNGQWdNQ0FRQUJBd0JYQUFFRUJBRkxBQUVCQkZBQUJBRUVSQUFBRXhJQUN3QUxFUkVSRVJFSUV5c0JGVE1SSVJFek5TRVJJUkVGQnhjM0p3Y1JJeEVDUU9EOXdPRC9BQUtBL2tJWGxaVVhiaUFDQUNEOTRBSWdJUDJnQW1EWkY1V1ZGMjBCNXY0YUFBQURBRkgvY1FPdkFzQUFEZ0FkQUNrQUowQWtLU2duSmlVa0l5SWhJQjhlREFFOUFBQUJBUUJOQUFBQUFWRUFBUUFCUlJrWUVnSVBLd0V1QVNJR0J3NEJIZ0krQWlZRERnRXVBalkzUGdFeUZoY1dFQU1ISndjWEJ4YzNGemNuTndNbVBKdWVtenhRT1RtZzF0YWdPVGxvU2NYRmtqUTBTVGVQa0k4M2I5V29xQmlvcUJpb3FCaXBxUUpHUEQ0K1BGRFcxcUE1T2FEVzF2NGNTVFEwa3NYRlNUWTVPVFp3L3NRQlhxaW5GNmlvRjZlb0dLaW9BQUFBQWdCK0FBQURnQUpnQUJNQUlnQkJRRDRXQ2dJREJCc1hFaEFKQlFBQkFrQVZDd0lDUGdBQUFRQnBBQUlGQVFRREFnUlpBQU1CQVFOTkFBTURBVkVBQVFNQlJSUVVGQ0lVSWhzVUZoQUdFaXM3QVRjMk56NENOeFVKQVJVR0J3WVhNQlV3QVRVTkFUVWlCZ2NtUGdXQUZTWktUaHdyUUNZQmdQNkF0MmhqQWdHZ0FTaisySXl2UlFFQkRCZzRUNE0rZHlNTUR3d0JvQUVBQVFDaENHaGtwUVlCWUlIQndvSmNkd2NaUmtCT09DY0FBQUFBQWdDQUFBQURnQUpnQUI4QUtnQTZRRGNsREFJREJDUWdEUUFFQWdFQ1FDWUxBZ0ErQUFJQkFta0FBQUFFQXdBRVdRQURBUUVEVFFBREF3RlJBQUVEQVVVVUhCWVVHUVVUS3lVd05UUXVBaWN1QVNjMUNRRTFIZ0VYSGdFZkFUTXdQUWNuTGdFakZTMEJGU0FYRmdPQUF4QXNJeldMWHY2QUFZQTNUQ29yU2lNbUZTQkZyNHorMkFFb0FRUlpJMEFHR2lwUlVTTTFOd1NoL3dEL0FLQUNFeE1VVGpnK0J3Y0lCd2NJQmdnVGQxeUN3c0dCdEVrQUFBTUFZUCtBQTZBQ3dBQVZBQjBBTGdCZFFGb05BUUlJQ3dFRUFRSkFEQUVCQVQ4SkFRUUJBQUVFQUdZQUJRQUlBZ1VJV1FBQ0FBRUVBZ0ZaQUFBQUF3Y0FBMWtLQVFjR0JnZE5DZ0VIQndaUkFBWUhCa1VmSGdBQUp5WWVMaDh1R3hvWEZnQVZBQlVURkJVaUN4SXJBUlFHSXlJdUFUUStBVE1WTnljVklnWVVGakkyTlFJZ0JoQVdJRFlRQVNJdUFUVTBQZ0l5SGdJVURnSUMySDVhTzJNNk9tTTd3TUJxbHBiVWxsVCtxUFQwQVZqMC9tQm5zR1k4Wm82YWptWThQR2FPQVNCYWZqcGpkbU02YjIrQVdKYlVscFZyQWFEMC9xajA5QUZZL2RkbXNHZE5qbVk4UEdhT21vNW1QQUFBQUFJQVFQK0FBOEFDd0FBSkFCTUFMa0FyRUFJQ0FENFREUXdMQ2drSUJ3WUZDZ0k5QVFFQUFnSUFTd0VCQUFBQ1R3TUJBZ0FDUXhJYUVoQUVFaXNCSVFzQklRVURKUVVERnljSE55Y2hOeGNoQndQQS9xbHBhZjZwQVJodEFSVUJGVzR1MWRWVjJBRUdVbElCQnRnQmdnRSsvc0xFL3NMRnhRRSs2SmlZOVpYMzk1VUFBQU1BWVArQUE2QUN3QUFIQUJvQUpnQkhRRVFBQUFBREJBQURXUWtCQlFnQkJnY0ZCbGNBQkFBSEFnUUhWd29CQWdFQkFrMEtBUUlDQVZFQUFRSUJSUWtJSmlVa0l5SWhJQjhlSFJ3YkVBNElHZ2thRXhBTEVDc0FJQVlRRmlBMkVBRWlMZ0UwUGdFek1oNEVGUlFPQWdNakZTTVZNeFV6TlRNMUl3S3MvcWowOUFGWTlQNWdaN0JtWnJCbk5HTlRSekViUEdhT1BTSHY3eUh3OEFMQTlQNm85UFFCV1AzWFpyRE9zR1liTVVkVFl6Uk5qbVk4QW4zd0llL3ZJUUFBQUFNQVlQK0FBNkFDd0FBSEFCZ0FIQUE4UURrQUJBTUZBd1FGWmdBRkFnTUZBbVFBQUFBREJBQURXUVlCQWdFQkFrMEdBUUlDQVZJQUFRSUJSZ2tJSEJzYUdSRVFDQmdKR0JNUUJ4QXJBQ0FHRUJZZ05oQUJJaTRCTlRRK0FqSWVBaFFPQWdFaEZTRUNyUDZvOVBRQldQVCtZR2V3Wmp4bWpwcU9aanc4Wm83K3N3SUEvZ0FDd1BUK3FQVDBBVmo5MTJhd1owMk9aanc4Wm82YWptWThBWTBpQUFBQUFnQmcvNEFEb0FMQUFBY0FHQUFwUUNZQUFBQURBZ0FEV1FRQkFnRUJBazBFQVFJQ0FWRUFBUUlCUlFrSUVSQUlHQWtZRXhBRkVDc0FJQVlRRmlBMkVBRWlMZ0UxTkQ0Q01oNENGQTRDQXF6K3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9Bc0QwL3FqMDlBRlkvZGRtc0dkTmptWThQR2FPbW81bVBBQUNBRDcvWGdQQ0F1SUFFUUFyQUNwQUp3UUJBQUFEQWdBRFdRQUNBUUVDVFFBQ0FnRlJBQUVDQVVVQ0FDWWpHUllNQ1FBUkFoRUZEaXNCSVNJT0FoVVJGQll6SVRJMk5SRTBKaE1VRGdJaklTSXVCVFVSTkRZeklUSWVBeFVEVy8xS0ZTWWNFRHdyQXJZclBEd1BDQTRUQ3YwOEJnc0tDUWNGQXg0VkFzUUlFQXdLQlFMaUVCd21GZjFLS3p3OEt3SzJLeno4M0FvVERnZ0RCUWNKQ2dzR0FzUVZIZ1VLREJBSUFBQUFBZ0JSLzNFRHJ3TEFBQTRBR2dBWlFCWWFHUmdYRmhVVUV4SVJFQThNQUQwQUFBQmZFZ0VQS3dFdUFTSUdCdzRCSGdJK0FpWURCeWNISnpjbk54YzNGd2NESmp5Ym5wczhVRGs1b05iV29EazV0aGlvcUJpb3FCaW9xQmlwQWtZOFBqNDhVTmJXb0RrNW9OYlcvb0lZcUtjWHFLZ1hwNmdZcUFBQUFBSUFZUCtBQTZBQ3dBQUhBQndBUTBCQURnRURBQkFCQmdRQ1FBOEJCQUUvQUFZRUJRUUdCV1lBQUFBREJBQURXUUFFQUFVQ0JBVlpBQUlCQVFKTkFBSUNBVkVBQVFJQlJSSVZGQk1URXhBSEZTc0FJQVlRRmlBMkVBQWlKalEyTXpVWEJ6VWlEZ0VWRkJZeU5qVXpGQUtzL3FqMDlBRlk5UDdLMUphV2FzREFPMk02ZjdOK0tBTEE5UDZvOVBRQldQNVVsdFNXV0lCdmJ6cGpPMWwvZmxwcUFBQUFBUUJBLzRBRHdBTEFBQWtBR0VBVkFnRUFQZ2tJQndZRkJRQTlBUUVBQUY4U0VBSVFLd0VoQ3dFaEJRTWxCUU1Ed1A2cGFXbitxUUVZYlFFVkFSVnVBWUlCUHY3Q3hQN0N4Y1VCUGdBQUFBQUNBR0QvZ0FPZ0FzQUFCd0FUQURaQU13Y0JCUVlDQmdVQ1pnUUJBZ01HQWdOa0FBQUFCZ1VBQmxjQUF3RUJBMHNBQXdNQlVnQUJBd0ZHRVJFUkVSRVRFeEFJRmlzQUlBWVFGaUEyRUFjakZTTTFJelV6TlRNVk13S3MvcWowOUFGWTlLRHdJdTd1SXZBQ3dQVCtxUFQwQVZpKzd1NGk4UEFBQUFBQUFnQmcvNEFEb0FMQUFBY0FDd0FoUUI0QUFBQURBZ0FEVndBQ0FRRUNTd0FDQWdGUkFBRUNBVVVSRXhNUUJCSXJBQ0FHRUJZZ05oQUhJVFVoQXF6K3FQVDBBVmowb1A0QUFnQUN3UFQrcVBUMEFWaStJZ0FBQUFNQU5QOVRBODBDN0FBSEFCZ0FLZ0E1UURZQUFRUUFCQUVBWmdBQUJRUUFCV1FBQXdZQkJBRURCRmtBQlFJQ0JVMEFCUVVDVWdBQ0JRSkdHaGtqSVJrcUdpb1hGUk1TQnhJckFCUVdNalkwSmlJRkZBNENJaTRDTkQ0Q01oNENBU0lPQWhVVUhnRXpNajRDTlRRdUFRRXVmSzU3ZTY0Q0kwaDhxcnlyZTBsSmU2dThxbnhJL2pSUmxHdEFhN2h0VVpSclAydTRBWGV2ZTN1dmU5TmRxM3RKU1h1cnU2dDdTVWw3cXdFeVFHcVVVbXk0YXo5cmxGRnR1R3NBQWdCZy80QURvQUxBQUFjQUVnQW5RQ1FTRVJBUERnVUNBQUZBQUFBQ0FHZ0FBZ0VCQWswQUFnSUJVZ0FCQWdGR0pCTVFBeEVyQUNBR0VCWWdOaEFCQmlNaUppOEJOeGMzRndLcy9xajA5QUZZOVA0Z0NRa0VDZ1J3SkY3Nkl3TEE5UDZvOVBRQldQN0JDUVVFY0NOZSt5UUFBQUFDQUQ3L1hnUENBdUlBRkFBY0FDcEFKeHdiR2hrWUZnWUJBQUZBQWdFQUFRRUFUUUlCQUFBQlVRQUJBQUZGQWdBS0J3QVVBaFFERGlzQklTSUdGUkVVRmpNaE1qWTFFVFF1QlFFbkJ5YzNGd0VYQTF2OVNpczhQQ3NDdGlzOEJRc09FaFFYL2tRRkJjb2dyd0ZqSUFMaVBDdjlTaXM4UENzQ3Rnd1hGUkVPQ3dYOWJ3VUZ5aUN2QVdNZ0FBRUJRQUJnQXNBQjRBQUxBQWF6Q0FBQkppc0JCeWNIRndjWE54YzNKemNDcUtpb0dLaW9HS2lvR0ttcEFlQ3BxQmVvcUJlbnFCZXBxQUFBQUFFQkFBQWdBd0FDZUFBVUFEbEFOZ2dCQkFJQlFBY0JBZ0UvQmdFQlBnQUVBZ01DQkFObUFBRUFBZ1FCQWxrQUF3QUFBMDBBQXdNQVVRQUFBd0JGRWhVVUV4QUZFeXNrSWlZME5qTTFGd2MxSWc0QkZSUVdNalkxTXhRQ2F0U1dsbXJBd0R0ak9uK3pmaWdnbHRTV1dJQnZienBqTzFsL2ZscHFBQUFCQUlEL29BUUFBcUFBSmdBNFFEVWJHZ29KQ0FjR0JRUUpBZ0VCUUFRQkFBQUJBZ0FCV1FBQ0F3TUNUUUFDQWdOUkFBTUNBMFVCQUI4ZEZ4VVFEZ0FtQVNZRkRpc0JNaDRCRlRjWEJ5YzNGelF1QWlNaURnRVVIZ0V6TWo0Qk54Y09BU01pTGdFMU5ENENBZ0Jvc1dkdUVvMkZFbVk1WUlSSllhVmdZS1ZoVFl0akdCa255SDFvc1djOVo0NENvR2F4YUdrU2lJZ1NhVW1FWURoZ3BjS2xZRDV1UndkMGttZXhhRTZPWnowQUFBSUFRUCtBQThBQ3dBQUpBQThBS2tBbkNnY0NBRDRQRGcwRUF3SUJBQWdDUFFFQkFBSUNBRXNCQVFBQUFrOEFBZ0FDUXhJU0ZRTVJLeVVESlFVREpTRUxBU0VsRnlFSEZ5Y0JXRzBCRlFFVmJRRVkvcWxwYWY2cEFjQlNBUWJZVmRXKy9zTEZ4UUUreEFFKy9zTFU5cFgxbHdBQUFnQUEveUFFQUFNZ0FCUUFLd0E4UURrQUJRRUNBUVVDWmdBQ0JBRUNCR1FBQkFjQkF3UURWUUFCQVFCUkJnRUFBQW9CUWhZVkFRQW1KU0VmRlNzV0t3OE9DZ2dBRkFFVUNBNHJBU0lPQWdjK0FqTXlFaFVVRmpJMk5UUXVBUU15UGdNM0RnTWpJZ0kxTkNZaUJoVVVIZ0VDQUdlN2lWSURBM0MrYjZ6ME9GQTRpZXlMVXB0OFh6WUNBa1J2bUZPczlEaFFPSW5zQXlCUGhybG1kOGwwL3ZxNktEZzRLSXZzaWZ3QU1sMTZtVkpab25SRkFRYTZLRGc0S0l2c2lRQUFEQUFsLzBRRDJ3TDZBQThBSFFBdUFEd0FUZ0JmQUhBQWdBQ1ZBS2NBdEFEREFHMUFhcFdCY0FNQkFFNDlBZ1lCTGg0Q0JRYTFBUWtLbGdFQ0NRVkFBQW9GQ1FVS0NXWUFDUUlGQ1FKa0N3RUFBQUVHQUFGWkNBRUdCd0VGQ2dZRldRUUJBZ01EQWswRUFRSUNBMUVBQXdJRFJRRUF1TGVZbHpzNE5ERXJLQ01nSFJ3WEZoRVFDZ2tBRHdFUERBNHJBVEllQXgwQkZBWWlKajBCTkRZVE1oWWRBUlFHSWlZOUFUUTJNd0VVQmlzQklpNEJOVFEyT3dFeUhnRVZJUlFHS3dFaUpqVTBOanNCTWhZbEZoUUdEd0VHSmljbU5qOEJQZ0VlQVJjQkZnWVBBUTRCTGdFbkpqWS9BVFlXRndFZUFROEJEZ0VuTGdFL0FUNENGaGNCSGdFUEFRNEJKeTRCTmo4QlBnRVhBejRCSGdFZkFSWUdCd1ltTHdFdUFUNEROd0UyTWhZZkFSWUdCdzRCTGdFdkFTWTJOd0UrQVI4QkhnRU9BUzhCTGdFQlBnRXlId0VlQVE0Qkx3RXVBVGNDQUFVSkJ3WURFaGdTRWd3TUVoSVlFaElNQWRzU0RINElEZ2dTREg0SURnajlCQklNZmd3U0VneCtEQklDdkFRSUIyMEtHQWNHQndwdEJnd0tDZ1A5YWdZR0MyMEZEQXNKQXdjSEMyd0xHQVlCNkFzR0JqOEdHQW9MQndjL0F3a0xEQVgrZ2dzR0JqOEdHQXNIQ0FFRFB3Y1lDbDBHREFzSkF6OEdCZ3NLR0FjL0FnSUJBZ01HQXdGL0J3OE9CRDhHQmdzRkRBc0pBejhIQnd2OTFBWVlDbTBMQmd3WUMyd0xCd0tjQlE0UEIyMExCZ3dZQzIwS0J3WUMrZ01GQ0FrRmZRMFJFUTE5RFJIOUJCRU5mZ3dTRWd4K0RSRUJJUXdSQ0EwSURSRUlEUWtNRVJFTURSRVI0UWdQRGdRL0JnWUxDeGdHUHdNQkF3Y0Yvb0lMR0FZL0F3RURCd1VMR0FZL0JnY0tBaXdHR0F0dEN3WUdCaGdMYlFVSEF3RUQvV29HR0F0dEN3WUdCQTRRQjIwTEJnWUNsZ01CQXdjRmJRc1lCZ1lHQzIwRENBZ0hCd1lDL1dvRUNBZHRDeGdHQXdFREJ3VnRDeGdHQWVnTEJnWS9CaGdXQmdZL0JoaitqUWNJQkQ4R0dCWUdCajhHR0FzQUFnQ0IvNkFEZ1FLZ0FBOEFJQUF0UUNvT0FRSURBZ0ZBRHdBQ0FUMEFBQUFDQXdBQ1dRQURBUUVEVFFBREF3RlJBQUVEQVVVb0dDTW1CQklyQlNjMk5UUXVBU01pQmhRV016STNGd0V1QVRVME5qSVdGUlFPQkNNaUE0SGpRMUtNVW42eXNuNXJWT0w5bmlZcG4rR2dFeU0wUFVVa2NUSGlWR3RTalZHeS9MTkU0d0VQSm1RMmNhQ2ZjU1ZGUFRRakV3QUFBQUVCQUFBZ0F3QUNJQUFMQUNWQUlnQUVBd0VFU3dVQkF3SUJBQUVEQUZjQUJBUUJUd0FCQkFGREVSRVJFUkVRQmhRckFTTVZJelVqTlRNMU14VXpBd0R3SXU3dUl2QUJEdTd1SXZEd0FBQUFBUUZBLytBQ3dBSmdBQVVBQnJNREFRRW1Ld0UzQ1FFbkFRRkFRUUUvL3NGQkFQOENIMEgrd1A3QVFRRC9BQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFbkNRRTNBd0xBUWY3QkFUOUIvd0lmUWY3QS9zQkJBUDhBQUFBQUFRRXNBSVFDeXdHOUFBb0FFa0FQQ2drSUJ3WUZBRDRBQUFCZklRRVBLeVVHSXlJbUx3RTNGemNYQWNBSkNRUUtCSEFrWHZvampRa0ZCSEFqWHZza0FBUUFnUCtnQTRBQ29BQUlBQkVBR3dBZkFFeEFTUjBjR3hvWUZ4WVRFUkFQQ0FFTkJBY0JRQUFCQndFL0dSSUNCajRBQmdBSEJBWUhWd0FFQUFFREJBRlhCUUVEQUFBRFN3VUJBd01BVHdJQkFBTUFReGtXRVJFU0VSRVNDQllyQ1FFUk14RXpFVE1SQXlNUklSRWpFU1VGQVFjMUl4VUhGUWtCTlNVSE5UTUNBUDdBNE1EZ0lLRC9BS0FCSUFFZy91REFnRUFCZ0FHQS9hQkFRQUpBL3dEK1lBRUEvd0FCb1A2QUFRRC9BQUZ4NXVZQmI1cGF3RE1wQVRQK3pTbUFNNFlBQUFBREFHRC9nQU9nQXNBQUdRQWhBQ1VBUGtBN0lnRUVBQ1VCQVFRQ1FBQUVBQUVBQkFGbUFBSUZBUUFFQWdCWkFBRURBd0ZOQUFFQkExRUFBd0VEUlFFQUpDTWZIaHNhRUE0QUdRRVpCZzRyQVRJZUFSY2VBUlFHQnc0RUl5SXVBU2N1QVRRK0F5QUdFQllnTmhBbkJTRVJBZ0F6WVZja05qbzZOaFl4TlRrN0h6TmhWeVEyT2pwdGkvbitxUFQwQVZqMDRQNUJBUDhDbnhveUpEZUxtb3MzRlNRYkV3a2FNaVEzaTVxTWJEb2g5UDZvOVBRQldCVEEvd0FBQUFRQWdQK2dBNEFDb0FBU0FCNEFwZ0UzQVc1THNDWlFXRUJoQUFjQUhRVUhIVmtKQVFVZkd3SWFCZ1VhV1FnQkJoNEJIQUFHSEZraEFRQUFBd1FBQTFrS0lnSUVJQUVaRWdRWldSZ0JFaEVCQ3dJU0Mxa0FBZ0FCRkFJQldSWUJGQThCRFJNVURWa0FGUUFPRlE1VkZ3RVRFd3hSRUFFTURBc01RaHRBWndBSEFCMEZCeDFaQ1FFRkh4c0NHZ1lGR2xrSUFRWWVBUndBQmh4WklRRUFBQU1FQUFOWkNpSUNCQ0FCR1JJRUdWa1lBUklSQVFzQ0VndFpBQUlBQVJRQ0FWa1dBUlFQQVEwVEZBMVpGd0VURUFFTUZSTU1XUUFWRGc0VlRRQVZGUTVSQUE0VkRrVlpRVXdBSVFBZkFBRUFBQUUyQVRNQkl3RWlBUjRCSEFFUUFRMEJCZ0VFQVA4QS9RRDhBUHNBN3dEc0FPY0E1QURaQU5jQTB3RFJBTXNBeUFEQkFMOEF2QUM2QUt3QXFRQ2ZBSndBa2dDUkFJNEFqQUNIQUlRQWZ3QjlBSGtBZHdCcUFHY0FXZ0JYQUV3QVNnQkdBRVFBUEFBNUFEUUFNZ0F0QUNzQUh3Q21BQ0VBcGdBYUFCa0FGQUFUQUEwQURBQUFBQklBQVFBU0FDTUFEaXNCSWc0Q0J3WVZGQjRCRnhZeU5qVTBKeVlDSWlZMU5ENEJNaDRCRlJRM0l5SW1OVFEvQVRZMEx3RW1JeUlQQVE0Q0l5SW1QUUUwSmlzQklnWWRBUlFPQXlNaUppOEJKaU1pRHdFR0ZCOEJGaFVVRGdFckFTSU9BZzhCRGdNZEFSUVdPd0V5SGdFVkZBNEJEd0VHRkI4QkZqTXlQd0UrQVRNeUZoMEJGQlk3QVRJMlBRRTBOak15SHdFV01qOEJOalF2QVNZMU5EWTdBVEkyUFFJMExnRVhGUlFyQVNJSERnSVZGQjRCSHdFV0R3RUdJeUl2QVNZaklnWWRBUlFPQWlzQklpWTlBVFFuSmlNaUJnOEJCaU1pTHdFbU5EOEJOalUwSnlZckFTSW1QUUUwTmpzQk1qYzJOVFFtTHdFbU5EOEJOak13TXpJZUFSOEJGak15UGdFM05qMEJORHNCTWg0QkhRRVVId0VlQkRNeVB3RStBVElXSHdFZUFSVVVEd0VHRlJRZUFSY1dPd0V5RlFJQ0ZDVWlJQTA0RFJrU09KOXhPVGdOaFYwcVNsZEtLNjhlRXhzUEZBNE9MUTRWRlE0VEJBc05CaE1kSEJROEZSMEZDQXdPQ0FrUkJ4TU9GUlVPTFE0T0V3OE1GUXdmQkFrSUNBTUdBd1FEQWg0VUh3d1ZEQU1IQlJNT0RpME5GaFFQRXdZUkNoTWNIUlE5RkI0YkV4UU9FdzRxRGkwT0RoUVBHeE1lRkJzTUZnSVBIaUFYQndvR0Jnc0lFdzBOTEFVSUNBUVRHQ0VmTHdNRkJnUThCd3NYR0I4UUhnc1NCUWdJQkMwRkJSSWFGeFloSHdjTEN3Y2ZJQmNXRFF3U0JRVXNCUWdEQWdNREFSTVhJUXNURWdjWUVUMEVDQVFZQ0FRSkNRb0tCaUVZRWdJSEJ3Y0NMUUlEQlJNWkJRb0lGaUVlRHdIZ0J3OFZEVGhRR2pBc0VqaHdVRTg1T1A2Z1hrSXJTaXNyU2l0Q2toc1RGQTBURHlrT0xBNE9FZ1VIQkJzVEhoUWVIaFFmQnc0TENBVUlCeE1PRGl3T0tROFNEaFFNRmd3Q0F3UURCZ01IQ0FrRlBCVWREQllNQnd3S0JSSVBLUTRzRGc0VEJ3Z2JFeDRWSFIwVkhoTWJFQk1PRGkwT0tROFREUlFUSEJ3VUh4NE9GdzFRSGhBWUJ4SVVDd29WRWdjVERBd3RCUVVTR2kwaEhnUUhCQU1LQ0I0Z0Z4Y05EQk1GQlMwRkRnVVNHQ0VnRnhjTEJqMEhDeGNYSUJBZUN4SUZEZ1V0QkFFQ0FSTVpCUW9IRnlBZkVnVUlCUjhmR0FZREJRUURBUmtTQXdJQ0FpMENCZ1FIQlJNWElRc1RFUWdYRWdBQUF3REEvK0FEUUFKZ0FBTUFCZ0FKQUFxM0NBY0dCUU1DQXlZckV4OEJDUUlERXdFbndPbHpBU1QraUFFNDV1TCt0cVlCTFdmbUFvRCtid0ZNL2c4QjlmN0dTUUFFQUdEL2dBT2dBc0FBQndBUkFCa0FLZ0JSUUU0QUJ3QUtBUWNLV1FBQkFBQUNBUUJaQUFJQUF3UUNBMWNMQmdJRUFBVUpCQVZYREFFSkNBZ0pUUXdCQ1FrSVVRQUlDUWhGR3hvSUNDTWlHaW9iS2hjV0V4SUlFUWdSRVJFUkVoTVNEUlFyQUJRV01qWTBKaUlURVNNVk14VWpGVE0xRWlBR0VCWWdOaEFCSWk0Qk5UUStBakllQWhRT0FnSFBGeUlYRnlJNllDQWdnR3orcVBUMEFWajAvbUJuc0dZOFpvNmFqbVk4UEdhT0Fka2lGeGNpRi82QUFRQVE4QkFRQWxEMC9xajA5QUZZL2RkbXNHZE5qbVk4UEdhT21vNW1QQUFFQUdEL2dBT2dBc0FBQndBWUFETUFRQUJlUUZzQUJRWUhCZ1VIWmdBSENBWUhDR1FBQUFBREJBQURXUXNCQkFBR0JRUUdXUXdCQ0FBSkFnZ0pXUW9CQWdFQkFrMEtBUUlDQVZFQUFRSUJSVFUwR2hrSkNEazRORUExUUNzcUlSOGVIUmt6R2pNUkVBZ1lDUmdURUEwUUt3QWdCaEFXSURZUUFTSXVBVFUwUGdJeUhnSVVEZ0lESWc0QkZUTW1NeklXRlJRR0J3NENCek0rQVRjK0FUVTBKZ01pQmhRV01qWTFOQzREQXF6K3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9SaXM4SUNZQ1lTUXlGUklYR1FzQkpnRU5JQm9hUmpFUEV4UWNGQVFHQ0FzQ3dQVCtxUFQwQVZqOTEyYXdaMDJPWmp3OFpvNmFqbVk4QWxrYk9DbGRMU01XSlJFVkppa2RLaUVmR0M0Zk1qditpeE1jRkJRT0JRc0lCZ01BQUFBQUJRREEvNEFEUUFMQUFBc0FFd0FYQUNrQU1RQllRRlVuSUFJSkNnRkFBQUFBQkFFQUJGa0ZEQU1EQVFBSENBRUhWd0FJQUFzS0NBdFpBQW9BQ1FZS0NWa0FCZ0lDQmtzQUJnWUNUd0FDQmdKREFBQXZMaXNxSkNNYkdoY1dGUlFURWc4T0FBc0FDeEVURXcwUkt3RTFOQ1lpQmgwQkl4RWhFU1UwTmpJV0hRRWhBU0VSSVFjMEppSUdGUlFXRnhVVUZqSTJQUUUrQVFZaUpqUTJNaFlVQXRCNnJIcHdBb0QrRUdlU1ovNmdBZEQ5d0FKQTRDVTJKUnNWQ1E0SkZSc3pHaE1UR2hNQllKQldlbnBXa1A0Z0FlQ1FTV2RuU1pEK1FBR2dvQnNsSlJzV0l3VlNCd2tKQjFJRkl3b1RHaE1UR2dBQUFBWUF3UURnQTBBQllBQUhBQThBSGdBbkFDOEFOd0JGUUVJS0RRWURBZ2dNQkFNQUFRSUFXUWtGQWdFREF3Rk5DUVVDQVFFRFVRc0hBZ01CQTBVZ0h4RVFOVFF4TUMwc0tTZ2tJeDhuSUNjWUZoQWVFUjRURXhNUURoSXJBRElXRkFZaUpqUTJJZ1lVRmpJMk5DVXlIZ0VWRkFZaklpNENOVFEyTnlJR0ZCWXlOalFtQkRJV0ZBWWlKalEySWdZVUZqSTJOQUh4SGhVVkhoVS9OaVVsTmlYK3dRb1FDaFVQQnc0SkJoVVBHeVVsTlNZbUFkWWVGUlVlRlQ4MkpTVTJKUUZFRlI0VkZSNHhKVFlsSlRZSkNoQUtEeFVHQ1E0SER4VWNKVFlsSlRZbEhCVWVGUlVlTVNVMkpTVTJBQUFBQUFJQkFQL2dBd0FDWUFBd0FFc0JJVXV3QzFCWVFCNHZGd0lKQTBzK0Fnb0JQUUVGQ0RFQkJ3VXRLZ0lHQndWQUd3RUhBVDhiUzdBTVVGaEFIaThYQWdrRFN6NENDZ0k5QVFVSU1RRUhCUzBxQWdZSEJVQWJBUWNCUHh0QUhpOFhBZ2tEU3o0Q0NnRTlBUVVJTVFFSEJTMHFBZ1lIQlVBYkFRY0JQMWxaUzdBTFVGaEFMd0FBQ1FFSkFBRm1BQU1BQ1FBRENWa0NBUUVBQ2dnQkNsa0FDQUFGQndnRldRQUhBQVlFQndaWkFBUUVDd1JDRzB1d0RGQllRQzhCQVFBSkFna0FBbVlBQXdBSkFBTUpXUUFDQUFvSUFncFpBQWdBQlFjSUJWa0FCd0FHQkFjR1dRQUVCQXNFUWh0QUx3QUFDUUVKQUFGbUFBTUFDUUFEQ1ZrQ0FRRUFDZ2dCQ2xrQUNBQUZCd2dGV1FBSEFBWUVCd1paQUFRRUN3UkNXVmxBRDBwSVFrQWtMRFFqRmlreEVoQUxGeXNCSWc0RUl5SXVBUzhCSmljdUFpTWlEZ0VQQVJrQk14RStBVE15SGdFWEZqTXlQZ00zUGdFM0VUVUdBd1lqSWljdUFpTWlEZ0VIRVQ0Qk16SVhIZ1F6TWpjQzRBSVNDQkVNRHdjT0doNEpHeElISENFekZpcEFFZ1VISUEwektCTXFOUTVhTVFnUkVnc1VBd29QQnd3VU54WXVWdzAzTFJVWUtoc0xEVE1vTFZNR0p4SWdIQTRYT0FKQUF3RUJBUUVDQlFJR0JBRUdCd1lMQ0FNRi9yZis1QUVmQlFnSUR3TVRBUUlCQWdFQkFnRUJPaUVDL3NNSEVnTVBDUVFGQXdFVEJRZ1NBUWtEQmdJSEFBQUNBSUQvb0FPQUFxQUFDQUFTQURWQU1oSVJEdzROQ2dnQkFBa0JBd0ZBRUFrQ0F6NEFBUU1BQXdFQVpnQURBUUFEU3dBREF3QlBBZ0VBQXdCREZCRVJFZ1FTS3drQkVUTVJNeEV6RVFFSE5TTVZCeFVKQVRVQ0FQN0E0TURnL3NEQWdFQUJnQUdBQWtEL0FQNWdBUUQvQUFHZ0FXQ2FXc0F6S1FFei9zMHBBQUlBZ1ArZ0E0QUNvQUNCQUk0QXBMYUlod0lIQUFGQVM3QW1VRmhBTVFBREFBOEFBdzlaQmhBQ0FBMEJCdzRBQjFrRUFRSUxBUWtJQWdsWkFBNEFDZzRLVlFVQkFRRUlVUXdCQ0FnTENFSWJRRGNBQXdBUEFBTVBXUVlRQWdBTkFRY09BQWRaQUE0SkNnNU5CQUVDQ3dFSkNBSUpXUVVCQVF3QkNBb0JDRmtBRGc0S1VRQUtEZ3BGV1VBbUFnQ01pNFdFZTNocmFtZGxYMXhYVlZGUFJVSThPU3dxSlNNYkdCTVJEUXdBZ1FLQkVRNHJBU01pSmpVMFB3RTJOQzhCSmlJUEFRNEJJeUltUFFFMEppc0JJZzRCSFFFVURnSWpJaTRCTHdFbUl5SVBBUVlVSHdFZUF4VVVCaXNCSWc0QkhRRVVGanNCTWhZVkZBOEJCaFFmQVJZek1qOEJQZ0V6TWhZZEFSUVdPd0V5TmowQk5ENEJNeklmQVJZeVB3RStBVFFtTHdFbU5UUStBVHNCTWpZOUFqWW1CeFFHSWlZMU1UUStBVEllQVFOUkhoTWJEeFFPRGkwT0tnNFRCeEVLRXh3ZEZEME5GZzBJRFJFSkJ3d0tCUk1PRlJVT0xRNE9Fd1FGQkFJYkVoOE5GdzRlRkI4U0d3OFREZzR0RFJZVUR4TUdFZ2tUSEIwVVBSUWREUlVORXc4VERpa1BMQWNJQ0FjVER3d1ZEQjhVR2dFYncxNkZYU3BLVjBvckFXOGNFeE1PRXc0cER5d09EaE1IQ0JzU0h4UWVEaGNOSHdrUURRY0RCd1VURGc0c0Rpa1BFZ1FJQ0FrRkV4d05GZzQ4RlJ3Y0V4UU9FZzhwRGl3T0RoTUhDQnNUSGhRZUhSVWVEQlVORUJJT0Rpd0hFeElUQnhNTkZBMFZEUndVSHg0VkhFOUNYbDVDSzBvckswb0FBQU1BWVArQUE2QUN3QUFIQUJFQUd3QTNRRFFBQUFBQ0F3QUNXUUFEQUFjR0F3ZFhBQVlJQVFVRUJnVlhBQVFCQVFSTEFBUUVBVkVBQVFRQlJSRVJFUkVVRkJNVEVBa1hLd0FnQmhBV0lEWVFKRElXRlJRR0lpWTFOQk1qTlRNMUl6VXpFVE1DclA2bzlQUUJXUFQrUmlJWEZ5SVhjWUFnSUdBZ0FzRDAvcWowOUFGWUpCY1JFQmdZRUJIK2h4RHdFUDhBQUFBREFHRC9nQU9nQXNBQUJ3QVVBQzRBU0VCRkFBVUhCZ2NGQm1ZQUJnUUhCZ1JrQUFBQUJ3VUFCMWtBQkFBREFnUURXZ2dCQWdFQkFrMElBUUlDQVZJQUFRSUJSZ2tJS2lnbkppVWpHUmdOREFnVUNSUVRFQWtRS3dBZ0JoQVdJRFlRQVNJbU5EWXlGaFVVRGdNM0RnRUhJelErQWpjK0FUVTBKaU1pRnlNMk16SVdGUlFHQXF6K3FQVDBBVmowL21rUEV4TWRGQVFHQ0FzK0lBMEJKZ2NPRmhFU0ZUSWtZUUltQVlZelJob0N3UFQrcVBUMEFWaitlQlFjRXhNT0Jnb0lCd1BuSUNFcUZpRWZHeEFSSmhVakxWMThPekllTHdBREFNRUE0QU5BQVdBQUJ3QVFBQmdBSzBBb0JBWUNBd0FCQVFCTkJBWUNBd0FBQVZFRkF3SUJBQUZGQ1FnV0ZSSVJEUXdJRUFrUUV4QUhFQ3NBSWdZVUZqSTJOQ1VpQmhRV01qWTBKaUFpQmhRV01qWTBBaHMySlNVMkpmN0JHeVVsTlNZbUFnQTJKU1UySlFGZ0pUWWxKVFlsSlRZbEpUWWxKVFlsSlRZQUFBd0FRUC9RQThBQ2NBQUhBQThBRndBZkFDY0FMd0ExQURzQVF3QkxBRk1BV3dFRVM3QWhVRmhBWWdBQ0FBSm9BQU1CQ2dFRENtWUFDZ2dCQ2doa0FBc0pCZ2tMQm1ZQUJnUUpCZ1JrQUFjRkIya1lGd0lVRmdFVkFSUVZWd0FBQUFFREFBRlpEd0VNRGdFTkNRd05XQUFJQUFrTENBbFpFd0VRRWdFUkJSQVJXQUFFQkFWUkFBVUZDd1ZDRzBCbkFBSUFBbWdBQXdFS0FRTUtaZ0FLQ0FFS0NHUUFDd2tHQ1FzR1pnQUdCQWtHQkdRQUJ3VUhhUmdYQWhRV0FSVUJGQlZYQUFBQUFRTUFBVmtQQVF3T0FRMEpEQTFZQUFnQUNRc0lDVmtBQkJBRkJFMFRBUkFTQVJFRkVCRllBQVFFQlZFQUJRUUZSVmxBTFZSVVZGdFVXMXBaVDA1TlRFcEpTRWMvUGowOE96bzVPRE15TVRBdExDa29KU1FURXhNVEV4TVRFeEFaRnlzQU1oWVVCaUltTkRZaUJoUVdNalkwQWpJV0ZBWWlKalEySWdZVUZqSTJOQUF5RmhRR0lpWTBOaUlHRkJZeU5qUVhJUlVoTmpRaUZCY2pOVE1CTXhVak5qVTBKZ2NVRmhVaE5TRUdFek1WSXpZMU5DWW5CaFVVRmhVaE5RS3pHaE1UR2hNNk5DWW1OQ1pOR2hNVEdoTTZOQ1ltTkNiK014b1RFeG9UT2pRbUpqUW1Id0loL2Q4QndBR2hvUUkrb2FFQkFiOEIvZDhDSVFHL29hRUJBYjRCQWYzZkFsQVRHaE1UR2pNbU5DWW1OUDNtRXhvVEV4b3pKalFtSmpRQkZoTWFFeE1hTXlZMEppWTBDaUFJRUJBSUlQN3dJQWdJQkFnTUJBZ0VJQWdDS0NBSUNBUUlCQWdJQkFnRUlBQUpBRVFBSUFPOEFzc0FGUUFuQURNQVJBQlFBRjBBY1FCK0FJd0JFa3V3Q2xCWVFGNFhBUXdMQXdvTVhnQU5BZ29MRFY0QUJ3QUlBUWNJV1FBQkVnRUFDUUVBV1FBSkZRRUdDd2tHV1FBREV3RUNEUU1DV1FBTEZnRUtEd3NLV1FBUEdRRVFCUThRV1FBRkZBRUVFUVVFV1FBUkRnNFJUUUFSRVE1UkdBRU9FUTVGRzBCZ0Z3RU1Dd01MREFObUFBMENDZ0lOQ21ZQUJ3QUlBUWNJV1FBQkVnRUFDUUVBV1FBSkZRRUdDd2tHV1FBREV3RUNEUU1DV1FBTEZnRUtEd3NLV1FBUEdRRVFCUThRV1FBRkZBRUVFUVVFV1FBUkRnNFJUUUFSRVE1UkdBRU9FUTVGV1VCR2dIOXpjbDllVWxFMU5Db29HQllDQUlTRGY0eUFqSGw0Y241emZtbG5YbkZmY1ZoWFVWMVNYVXhMUmtVOU96UkVOVVF3TFNnektqTWhIaFluR0NjT0N3QVZBaFVhRGlzQklTSXVCVFUwTmpNaE1oNERGUlFHQnlFaUxnSTFORFl6SVRJZUFoVVVCZ2NoSWlZME5qTWhNaFlVQmdFaUpqVTBQZ0l6TWg0QkZSUU9BaVlpRGdFVUhnRXlQZ0UwSmdNaUpqVTBQZ0V5SGdFVURnRW5JZzRCRlJRZUF6TXlQZ0UxTkM0REF5SW1OVFErQVRJZUFSUU9BU2NpQmhRV01qWTFOQzRFQTVyOTNRUUhCd1lGQXdJVURnSWpCUXNJQmdRVUR2M2RCZzBKQmhRT0FpTUhEQWtHRkE3OTNRNFVGQTRDSXc0VUZQMERLendSR3lZVkd6QWJFQndtQ3hNUENRa1BFeEFKQ1JrclBCd3ZOekFiR3pBYkNnOEpBd1lKQ2dZSkVBa0VCZ2dMQlNzOEhDODNNQnNiTUJzT0ZCUWNGQU1FQmdnSkFrSUNBd1VHQndjRURoUURCZ2tLQmc0VTd3WUpEQWNPRkFVSkRRY09GTzhVSFJRVUhSUUJtandxRlNZYkVSd3ZIQlVsSEJDSUNROFRFQWtKRUJNUC9wSThLaHd2SEJ3dk56QWJpQWtQQ2dVTENBWUVDUkFKQmdvSkJnUCtpVHdxSEM4Y0hDODNNQnVKRkIwVUZBNEZDUWNIQkFNQUF3QkEvK0VEdndKbkFBTUFCd0FMQUNaQUl3QUNBQU1BQWdOWEFBQUFBUVFBQVZjQUJBUUZUd0FGQlFzRlFoRVJFUkVSRUFZVUt4TWhGU0VSSVJVaEVTRVZJVUFEZi95QkEzLzhnUU4vL0lFQlBEQUJXekQ5MlM4QUFBQUVBQmYvaUFQcEFyZ0FCUUFpQURrQVB3QTlRRG8vUGowOE96bzVMU3dqSWlFZkhoUVRCZ1VFQXdJQkFCY0NBUUZBQUFBQUFRSUFBVmtBQWdNREFrMEFBZ0lEVVFBREFnTkZMeDRYTFFRU0t3RUhKd2NYTnljd1BRRXVBeU1pRGdJSEZ6NEJNaDRCRnhVVUJnY1hOalV4Qnc0QklpNEJOVFEyTnljR0hRTWVBak15TmpjQkJ4YzNGemNEMDFOVkZXcHBVUUZCYlpkU04ybGNUUnNjTXJETXJHVUJBUUVnQWxBeXNNeXRaUUVCSUFJQ2I3cHRic0EyL1J4cEZsTlRGZ0VnVTFNV2Fta1lBUUpUbFd4QUhUWk5NQkJaWjJTc1pnNEdEZ2NFRlJhNFdXZGtyV1lLRkFvRUZSWUNCQU5zdUd0d1lBRklhUmRUVXhjQUFBQUJBVi8vbndLZ0FxQUFTUUJMUUVnNkFRQUZSeDhLQXdJREFrQUFCUUFGYUFjQkFBTUFhQUFEQWdOb0FBSUFCQUVDQkZrQUFRWUdBVTBBQVFFR1VnQUdBUVpHQVFCRFFUYzJMU3NsSXgwYkNBY0FTUUZKQ0E0ckFTSU9BUlVSRkFZaUpqY3dFVFEyTnpZWEhnRVZFUlFPQWdjR0l5SW1OVEFSTkNZaklnNEJGUU1VRmpNV056NENOUk0wSnlZaUJ3WUhNQjBEQmhZekZqYzJOUkUySmdLSkJnc0dSVnRGQVJJUUl5TVFFUUlDQkFJR0NBa05EUWtIQ2dZQktSd2RGQVlKQkFFNEd6OGFPQUVCWUVCRExpOEJEUUhxQmdzRy9ubzlRVU05QWRZWEl3a1ZGUW9qRi80L0Jnb0lDQU1IRmhNQldnb05CZ3NHL3FjcUx3RVpDQlFYRFFIQlN5SVFEeUZMZUkxOVZGRmVBUzh3VHdHRkNnNEFBd0FULy9ZRDdRSkpBQmNBSXdBeEFKcExzQTlRV0VBaUJ3RUVBZ1VDQkY0QUJRTURCVndBQVFZQkFnUUJBbGtBQXdNQVVnQUFBQXNBUWh0THNCaFFXRUFrQndFRUFnVUNCQVZtQUFVREFnVURaQUFCQmdFQ0JBRUNXUUFEQXdCU0FBQUFDd0JDRzBBcEJ3RUVBZ1VDQkFWbUFBVURBZ1VEWkFBQkJnRUNCQUVDV1FBREFBQURUUUFEQXdCU0FBQURBRVpaV1VBVUpTUVpHQ3NxSkRFbE1TQWZHQ01aSXlrbUNCQXJBUlFPQkNNaUxnTTBQZ016TWhjV0Z4WWxJZzRDRlJRV01qWTBKZ2NpRGdFVkZCWXlOalUwTGdJRDdTRThXbXFHUmxHZGRWc3ZMMXQybkZISW5XTWRDUDRUTUZoQUpZdkZpNHRqS1VZb1dINVlHQ2c0QVNBWVBrTS9NeDhyUkZCTlBFMVFSQ3B3UjBzVzRpWkNXakZsam83S2psZ3BTQ3BBVzF0QUlEa3FHQUFBQVFEQUFHQURRQUhnQUFVQUJyTUNBQUVtS3lVM0NRRVhBUU1aSi83QS9zQW5BUmxnS1FGWC9xa3BBUzBBQUFBQUFRREFBR0FEUUFIZ0FBVUFCck1DQUFFbUt3RVhDUUUzQVFNWkovN0Evc0FuQVJrQjRDbitxUUZYS2Y3VEFBQUFBUUZBLytBQ3dBSmdBQVVBQnJNREFRRW1Ld0VuQ1FFM0FRTEFLZjZwQVZjcC90TUNPU2Yrd1A3QUp3RVpBQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFM0NRRW5BUUZBS1FGWC9xa3BBUzBDT1NmK3dQN0FKd0VaQUFBQUFRRkEvK0FDd0FKZ0FDRUFKVUFpR1JnVEN3UUZBQUlCUUFBQUFnRUNBQUZtQUFJQ0FWRUFBUUVMQVVJc0ZSRURFU3NCQmlJdkFSRVVCaUltTlJFSEJpY21ORGMyTnpZek1oWWZBUjRCSHdFZUFSVVVBcnNFRFFXVkNRNEpsUXdLQlFXdUFnWUZBd1VCQWdGWUxDc0RBZ0drQkFTRi9jY0hDUWtIQWptRUN3b0ZEZ1NmQVFVQ0FRSUJVQ2duQWdZREJ3QUFBQUVCUVAvZ0FzQUNZQUFnQUNSQUlSZ1RDd1FFQWdBQlFBQUFBUUlCQUFKbUFBRUJBbEVBQWdJTEFrSXNGUkVERVNzbEppSVBBUkUwSmlJR0ZSRW5KZ2NHRkJjV0Z4WXpNalkzUGdFL0FUNEJOVFFDdXdRTkJaVUpEZ21WREFvRkJhNENCZ1VFQmdFQldDd3JBd0tjQkFTRkFqa0hDUWtIL2NlRUN3b0ZEZ1NmQVFVREFnRlFLQ2NDQmdNSEFBQUFBQUVBd0FCZ0EwQUI0QUFkQUNwQUp4WVNBZ0FCQVVBQUFnRUNhQUFEQUFOcEFBRUFBQUZOQUFFQkFGSUFBQUVBUmh3VUl5TUVFaXNsTmk4QklUSTJOQ1lqSVRjMkp5WWlCd1lIQmhVVUZ4NEJId0VXTXpZQmZBb0toUUk1QndrSkIvM0hoQXNLQlE0RW53RUZCUUZRS0NjRUJ3ZGxDZ3lWQ1E0SmxRd0tCUVd1QWdZRkJ3UUJXQ3dyQlFFQUFRREFBR0FEUUFIaEFCNEFKVUFpRnhNQ0FBRUJRQUFDQUFKcEFBRUFBQUZOQUFFQkFGRUFBQUVBUlIwY0l5TURFQ3NsSmo4QklTSW1ORFl6SVNjbU56NEJGaGNXRnhZVkZBY09BUThCQmlNbUFvUUtDb1g5eHdjSkNRY0NPWVFMQ2dNSkNBT2ZBUVVGQVZBb0p3UUhCMlVLREpVSkRnbVZEQW9EQXdJRXJnSUdCUWNFQVZnc0t3VUJBQUFCQVI3L3B3TGFBbjhBQmdBV1FCTUFBUUE5QUFFQUFXZ0NBUUFBWHhFUkVRTVJLd1VUSXhFakVTTUIvTjZSbTVCWkFTZ0JzUDVRQUFFQVgvOTdBNkVDdlFBTEFBQUpBZ2NKQVJjSkFUY0pBUU50L3BMK2xEUUJiZjZUTkFGc0FXNDAvcEVCYndLOS9wSUJiRFArbFA2VU13RnMvcEl6QVc0QmJRQUFCQUJWLzNFRHFnTElBQk1BSndBK0FFUUFBQVVHTGdFME56NEJOQ1luSmpRK0FSY2VBUlFHSnc0QkpqUTNQZ0UwSmljbU5EWVdGeDRCRkFZREp5TWlKaWNSUGdFM016YytBUjRCRlJFVURnRW1KemNSQnlNUk13TXdDQmdRQ1RJMk5USUpFQmdKT2o0L3JBZ1lFUWdZR1JnWENCRVlDQjhnSXVISXB4Y2hBUUVoRjZmRkRoOGVFQkFiSHc0ZjFMcTRGQWtCRWhnSk5JYVhoVFFKR0JJQkNUeWNzSnhTQ0FFU0Z3a1pQa1UrR1FrWEVRRUlJVk5jVS83Z2dpRVlBYmtYSVFHVENnTVBHeEQ5SEJBYUR3RUlNQUxrbi81SEFBQUFCUUJBLzN3RHdBSzhBQXNBSHdBekFFZ0FYUUFBSlNFaUpqUTJNeUV5RmhRR0F5TWlKalEyT3dFeU5qMEJORFl5RmgwQkRnRUZJeTRCSnpVME5qSVdIUUVVRmpzQk1oWVVCZ01pSmowQlBnRTNNeklXRkFZckFTSUdIUUVVQmlFaUpqMEJOQ1lyQVNJbU5EWTdBUjRCRnhVVUJnT2cvTUFPRWhJT0EwQU9FaEp1d0E0U0VnN0FEaElTSEJJQk52MzNvQ2syQVJJY0VoSU9vQTRTRXU0T0VnRTJLYUFPRWhJT29BNFNFZ0x5RGhJU0RzQU9FaElPd0NrMkFSTDhFaHdTRWh3Uy9vQVNIQklTRHFBT0VoSU9vQ2syQVFFMkthQU9FaElPb0E0U0Vod1NBaUFTRHFBcE5nRVNIQklTRHFBT0VoSU9vQTRTRWh3U0FUWXBvQTRTQUFBQURBQ1dBQUVBQUFBQUFBRUFDQUFTQUFFQUFBQUFBQUlBQUFBaEFBRUFBQUFBQUFNQUZnQlVBQUVBQUFBQUFBUUFDUUNEQUFFQUFBQUFBQVVBTUFEdkFBRUFBQUFBQUFZQUNRRTBBQU1BQVFRSkFBRUFFQUFBQUFNQUFRUUpBQUlBQkFBYkFBTUFBUVFKQUFNQU1BQWlBQU1BQVFRSkFBUUFGZ0JyQUFNQUFRUUpBQVVBWUFDTkFBTUFBUVFKQUFZQUVnRWdBSFVBYmdCcEFHa0FZd0J2QUc0QWN3QUFkVzVwYVdOdmJuTUFYamlKeEFBQUFBQjFBRzRBYVFCcEFHTUFid0J1QUhNQUlGNDRpY1FBT2dCV0FHVUFjZ0J6QUdrQWJ3QnVBQ0FBTVFBdUFEQUFNQUFBZFc1cGFXTnZibk1nT2xabGNuTnBiMjRnTVM0d01BQUFkUUJ1QUdrQWFRQmpBRzhBYmdCekFDQmVPSW5FQUFCMWJtbHBZMjl1Y3lBQUFGWUFaUUJ5QUhNQWFRQnZBRzRBSUFBeEFDNEFNQUF3QUNBQVV3QmxBSEFBZEFCbEFHMEFZZ0JsQUhJQUlBQXlBREFBTEFBZ0FESUFNQUF4QURrQUxBQWdBR2tBYmdCcEFIUUFhUUJoQUd3QUlBQnlBR1VBYkFCbEFHRUFjd0JsQUFCV1pYSnphVzl1SURFdU1EQWdVMlZ3ZEdWdFltVnlJREl3TENBeU1ERTVMQ0JwYm1sMGFXRnNJSEpsYkdWaGMyVUFBSFVBYmdCcEFHa0FZd0J2QUc0QWN3QXRBQUIxYm1scFkyOXVjeTBBQUFJQUFBQUFBQUQvSHdBeUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFZQUFBQUFFQUFnQmJBUUlCQXdFRUFRVUJCZ0VIQVFnQkNRRUtBUXNCREFFTkFRNEJEd0VRQVJFQkVnRVRBUlFCRlFFV0FSY0JHQUVaQVJvQkd3RWNBUjBCSGdFZkFTQUJJUUVpQVNNQkpBRWxBU1lCSndFb0FTa0JLZ0VyQVN3QkxRRXVBUzhCTUFFeEFUSUJNd0UwQVRVQk5nRTNBVGdCT1FFNkFUc0JQQUU5QVQ0QlB3RkFBVUVCUWdGREFVUUJSUUZHQVVjQlNBRkpBVW9CU3dGTUFVMEJUZ0ZQQVZBQlVRRlNBVk1CVkFGVkFWWUJWd0ZZQVZrQldnRmJBVndCWFFkMWJtbEZNVEF3QjNWdWFVVXhNREVIZFc1cFJURXdNZ2QxYm1sRk1UTXdCM1Z1YVVVeE16RUhkVzVwUlRFek1nZDFibWxGTWpBd0IzVnVhVVV5TURFSGRXNXBSVEl3TWdkMWJtbEZNakF6QjNWdWFVVXlNekFIZFc1cFJUSXpNUWQxYm1sRk1qTXlCM1Z1YVVVeU16TUhkVzVwUlRJMk1BZDFibWxGTWpZeEIzVnVhVVV5TmpJSGRXNXBSVEkyTXdkMWJtbEZNalkwQjNWdWFVVXpNREFIZFc1cFJUTXdNUWQxYm1sRk16QXlCM1Z1YVVVek1ETUhkVzVwUlRNek1nZDFibWxGTXpNekIzVnVhVVV6TmpBSGRXNXBSVE0yTXdkMWJtbEZNelkwQjNWdWFVVTBNREFIZFc1cFJUUXdNUWQxYm1sRk5EQXlCM1Z1YVVVME1ETUhkVzVwUlRRd05BZDFibWxGTkRBMUIzVnVhVVUwTURZSGRXNXBSVFF3TndkMWJtbEZOREE0QjNWdWFVVTBNRGtIZFc1cFJUUXhNQWQxYm1sRk5ERXhCM1Z1YVVVME1UTUhkVzVwUlRRek5BZDFibWxGTkRNM0IzVnVhVVUwTXpnSGRXNXBSVFF6T1FkMWJtbEZORFF3QjNWdWFVVTBOREVIZFc1cFJUUTBNZ2QxYm1sRk5EUXpCM1Z1YVVVME5qQUhkVzVwUlRRMk1RZDFibWxGTkRZeUIzVnVhVVUwTmpNSGRXNXBSVFEyTkFkMWJtbEZORFkxQjNWdWFVVTBOallIZFc1cFJUUTJPQWQxYm1sRk5EY3dCM1Z1YVVVME56RUhkVzVwUlRRM01nZDFibWxGTlRBd0IzVnVhVVUxTURFSGRXNXBSVFV3TWdkMWJtbEZOVEF6QjNWdWFVVTFNRFFIZFc1cFJUVXdOUWQxYm1sRk5UQTJCM1Z1YVVVMU1EY0hkVzVwUlRVd09BZDFibWxGTlRNd0IzVnVhVVUxTXpJSGRXNXBSVFV6TkFkMWJtbEZOVE0xQjNWdWFVVTFNemNIZFc1cFJUVTJNQWQxYm1sRk5UWXlCM1Z1YVVVMU5qTUhkVzVwUlRVMk5RZDFibWxGTlRZM0IzVnVhVVUxTmpnSGRXNXBSVFU0TUFkMWJtbEZOVGd4QjNWdWFVVTFPRElIZFc1cFJUVTRNd2QxYm1sRk5UZzBCM1Z1YVVVMU9EVUhkVzVwUlRVNE5nZDFibWxGTlRnM0IzVnVhVVUxT0RnSGRXNXBSVFU0T1FSRmRYSnZCM1Z1YVVVMk1USUFBQUVBQWYvL0FBOEFBUUFBQUF3QUFBQVdBQUFBQWdBQkFBRUFYd0FCQUFRQUFBQUNBQUFBQUFBQUFBRUFBQUFBMWFRbkNBQUFBQURacWx1NUFBQUFBTm1xWEFrPScpXCJcclxuXHR9KTtcclxuXHQvLyAjZW5kaWZcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnVW5pSWNvbnMnLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnIzMzMzMzMydcclxuXHRcdFx0fSxcclxuXHRcdFx0c2l6ZToge1xyXG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdFx0ZGVmYXVsdDogMTZcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aWNvbnM6IGljb25zXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdF9vbkNsaWNrKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdEBmb250LWZhY2Uge1xyXG5cdFx0Zm9udC1mYW1pbHk6IHVuaWljb25zO1xyXG5cdFx0c3JjOiB1cmwoJ2RhdGE6Zm9udC90cnVldHlwZTtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxBQUVBQUFBUUFRQUFCQUFBUmtaVVRZajQzc3NBQUhiWUFBQUFIRWRFUlVZQUp3Qm1BQUIydUFBQUFCNVBVeTh5V1dsY3FnQUFBWWdBQUFCZ1kyMWhjR0JoYkJVQUFBSzBBQUFDUW1OMmRDQU1wZjQwQUFBUEtBQUFBQ1JtY0dkdE1QZWVsUUFBQlBnQUFBbVdaMkZ6Y0FBQUFCQUFBSGF3QUFBQUNHZHNlV1pzZmdmWkFBQVFFQUFBWVF4b1pXRmtGb2Y2L3dBQUFRd0FBQUEyYUdobFlRZCtBeVlBQUFGRUFBQUFKR2h0ZEhna2VCdVlBQUFCNkFBQUFNcHNiMk5oUEVrbkxnQUFEMHdBQUFEQ2JXRjRjQUlqQTNJQUFBRm9BQUFBSUc1aGJXWFdPVHRVQUFCeEhBQUFBZFJ3YjNOMFRKRTRpZ0FBY3ZBQUFBTy9jSEpsY0tXNXZtWUFBQTZRQUFBQWxRQUJBQUFBQVFBQUNWL09PVjhQUFBVQUh3UUFBQUFBQU5tcVc3a0FBQUFBMmFwY0NRQUEveUFFQUFNZ0FBQUFDQUFDQUFBQUFBQUFBQUVBQUFNZy95QUFYQVFBQUFBQUFBUUFBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQUVBQUFCZ0FYb0FEQUFBQUFBQUFnQkdBRlFBYkFBQUFRUUJvZ0FBQUFBQUJBUC9BWkFBQmdBQUFwa0N6QUFBQUk4Q21RTE1BQUFCNndBekFRa0FBQUlBQmdNQUFBQUFBQUFBQUFBQkVBQUFBQUFBQUFBQUFBQUFVRVpGUkFHQUFCM21FZ01zL3l3QVhBTWdBT0FBQUFBQkFBQUFBQU1ZQXMwQUFBQWdBQUVCZGdBaUFBQUFBQUZWQUFBRDZRQXNCQUFBWUFEQUFNQUFZQURBQU1BQW9BQ0FBSUFBWUFDZ0FJQUFnQUJnQUxNQVFBQkFBQVVBVndCZUFJQUJBQUQwQVFBQTlBRUFBRUFBVmdDZ0FPQUF3QURBQUZFQWZnQ0FBR0FBUUFCZ0FHQUFZQUErQUZFQVlBQkFBR0FBWUFBMEFHQUFQZ0ZBQVFBQWdBQkFBQUFBSlFDQkFRQUJRQUZBQVN3QWdBQmdBSUFBd0FCZ0FHQUF3QURCQVFBQWdBQ0FBR0FBWUFEQkFFQUFSQUJBQUJjQlh3QVRBTUFBd0FGQUFVQUJRQUZBQU1BQXdBRWVBRjhBVlFCQUFBQUFBQUFEQUFBQUF3QUFBQndBQVFBQUFBQUJQQUFEQUFFQUFBQWNBQVFCSUFBQUFFUUFRQUFGQUFRQUFBQWRBSGpoQXVFeTRnUGlNK0prNHdQak0rTmc0MlRrQ2VRUjVCUGtOT1E1NUVQa1p1Um81SExsQ09VdzVUTGxOZVUzNVdEbFkrVmw1V2psaWVXUTVoTC8vd0FBQUFBQUhRQjQ0UURoTU9JQTRqRGlZT01BNHpMallPTmo1QURrRU9RVDVEVGtOK1JBNUdEa2FPUnc1UURsTU9VeTVUVGxOK1ZnNVdMbFplVm41WURsa09ZUy8vOEFBZi9rLzRzZkJCN1hIZ29kM2gyeUhSY2M2Unk5SExzY0lCd2FIQmtiK1J2M0cvRWIxUnZVRzgwYlFCc1pHeGdiRnhzV0d1NGE3UnJzR3VzYTFCck9HazBBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQmdBQUFRQUFBQUFBQUFBQkFnQUFBQUlBQUFBQUFBQUFBQUFBQUFBQUFBQUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBc0FBc3NDQmdaaTJ3QVN3Z1pDQ3d3RkN3QkNaYXNBUkZXMWdoSXlFYmlsZ2dzRkJRV0NHd1FGa2JJTEE0VUZnaHNEaFpXU0N3Q2tWaFpMQW9VRmdoc0FwRklMQXdVRmdoc0RCWkd5Q3d3RkJZSUdZZ2lvcGhJTEFLVUZoZ0d5Q3dJRkJZSWJBS1lCc2dzRFpRV0NHd05tQWJZRmxaV1J1d0FDdFpXU093QUZCWVpWbFpMYkFDTENCRklMQUVKV0ZrSUxBRlExQllzQVVqUXJBR0kwSWJJU0Zac0FGZ0xiQURMQ01oSXlFZ1pMRUZZa0lnc0FZalFySUtBQUlxSVNDd0JrTWdpaUNLc0FBcnNUQUZKWXBSV0dCUUcyRlNXVmdqV1NFZ3NFQlRXTEFBS3hzaHNFQlpJN0FBVUZobFdTMndCQ3l3Q0NOQ3NBY2pRckFBSTBLd0FFT3dCME5SV0xBSVF5dXlBQUVBUTJCQ3NCWmxIRmt0c0FVc3NBQkRJRVVnc0FKRlk3QUJSV0pnUkMyd0JpeXdBRU1nUlNDd0FDc2pzUVFFSldBZ1JZb2pZU0JrSUxBZ1VGZ2hzQUFic0RCUVdMQWdHN0JBV1ZranNBQlFXR1Zac0FNbEkyRkVSQzJ3Qnl5eEJRVkZzQUZoUkMyd0NDeXdBV0FnSUxBS1EwcXdBRkJZSUxBS0kwSlpzQXREU3JBQVVsZ2dzQXNqUWxrdHNBa3NJTGdFQUdJZ3VBUUFZNG9qWWJBTVEyQWdpbUFnc0F3alFpTXRzQW9zUzFSWXNRY0JSRmtrc0ExbEkzZ3RzQXNzUzFGWVMxTllzUWNCUkZrYklWa2tzQk5sSTNndHNBd3NzUUFOUTFWWXNRME5RN0FCWVVLd0NTdFpzQUJEc0FJbFFySUFBUUJEWUVLeENnSWxRckVMQWlWQ3NBRVdJeUN3QXlWUVdMQUFRN0FFSlVLS2lpQ0tJMkd3Q0NvaEk3QUJZU0NLSTJHd0NDb2hHN0FBUTdBQ0pVS3dBaVZoc0FncUlWbXdDa05Ic0F0RFIyQ3dnR0lnc0FKRlk3QUJSV0pnc1FBQUV5TkVzQUZEc0FBK3NnRUJBVU5nUWkyd0RTeXhBQVZGVkZnQXNBMGpRaUJnc0FGaHRRNE9BUUFNQUVKQ2ltQ3hEQVFyc0dzckd5SlpMYkFPTExFQURTc3RzQThzc1FFTkt5MndFQ3l4QWcwckxiQVJMTEVERFNzdHNCSXNzUVFOS3kyd0V5eXhCUTByTGJBVUxMRUdEU3N0c0JVc3NRY05LeTJ3Rml5eENBMHJMYkFYTExFSkRTc3RzQmdzc0FjcnNRQUZSVlJZQUxBTkkwSWdZTEFCWWJVT0RnRUFEQUJDUW9wZ3NRd0VLN0JyS3hzaVdTMndHU3l4QUJnckxiQWFMTEVCR0NzdHNCc3NzUUlZS3kyd0hDeXhBeGdyTGJBZExMRUVHQ3N0c0I0c3NRVVlLeTJ3SHl5eEJoZ3JMYkFnTExFSEdDc3RzQ0Vzc1FnWUt5MndJaXl4Q1JnckxiQWpMQ0Jnc0E1Z0lFTWpzQUZnUTdBQ0piQUNKVkZZSXlBOHNBRmdJN0FTWlJ3YklTRlpMYkFrTExBaks3QWpLaTJ3SlN3Z0lFY2dJTEFDUldPd0FVVmlZQ05oT0NNZ2lsVllJRWNnSUxBQ1JXT3dBVVZpWUNOaE9Cc2hXUzJ3Sml5eEFBVkZWRmdBc0FFV3NDVXFzQUVWTUJzaVdTMndKeXl3Qnl1eEFBVkZWRmdBc0FFV3NDVXFzQUVWTUJzaVdTMndLQ3dnTmJBQllDMndLU3dBc0FORlk3QUJSV0t3QUN1d0FrVmpzQUZGWXJBQUs3QUFGclFBQUFBQUFFUStJeml4S0FFVktpMndLaXdnUENCSElMQUNSV093QVVWaVlMQUFRMkU0TGJBckxDNFhQQzJ3TEN3Z1BDQkhJTEFDUldPd0FVVmlZTEFBUTJHd0FVTmpPQzJ3TFN5eEFnQVdKU0F1SUVld0FDTkNzQUlsU1lxS1J5TkhJMkVnV0dJYklWbXdBU05Dc2l3QkFSVVVLaTJ3TGl5d0FCYXdCQ1d3QkNWSEkwY2pZYkFHUlN0bGlpNGpJQ0E4aWpndHNDOHNzQUFXc0FRbHNBUWxJQzVISTBjallTQ3dCQ05Dc0FaRkt5Q3dZRkJZSUxCQVVWaXpBaUFESUJ1ekFpWURHbGxDUWlNZ3NBbERJSW9qUnlOSEkyRWpSbUN3QkVPd2dHSmdJTEFBS3lDS2ltRWdzQUpEWUdRanNBTkRZV1JRV0xBQ1EyRWJzQU5EWUZtd0F5V3dnR0poSXlBZ3NBUW1JMFpoT0JzanNBbERSckFDSmJBSlEwY2pSeU5oWUNDd0JFT3dnR0pnSXlDd0FDc2pzQVJEWUxBQUs3QUZKV0d3QlNXd2dHS3dCQ1poSUxBRUpXQmtJN0FESldCa1VGZ2hHeU1oV1NNZ0lMQUVKaU5HWVRoWkxiQXdMTEFBRmlBZ0lMQUZKaUF1UnlOSEkyRWpQRGd0c0RFc3NBQVdJTEFKSTBJZ0lDQkdJMGV3QUNzallUZ3RzRElzc0FBV3NBTWxzQUlsUnlOSEkyR3dBRlJZTGlBOEl5RWJzQUlsc0FJbFJ5TkhJMkVnc0FVbHNBUWxSeU5ISTJHd0JpV3dCU1ZKc0FJbFliQUJSV01qSUZoaUd5RlpZN0FCUldKZ0l5NGpJQ0E4aWpnaklWa3RzRE1zc0FBV0lMQUpReUF1UnlOSEkyRWdZTEFnWUdhd2dHSWpJQ0E4aWpndHNEUXNJeUF1UnJBQ0pVWlNXQ0E4V1M2eEpBRVVLeTJ3TlN3aklDNUdzQUlsUmxCWUlEeFpMckVrQVJRckxiQTJMQ01nTGthd0FpVkdVbGdnUEZraklDNUdzQUlsUmxCWUlEeFpMckVrQVJRckxiQTNMTEF1S3lNZ0xrYXdBaVZHVWxnZ1BGa3VzU1FCRkNzdHNEZ3NzQzhyaWlBZ1BMQUVJMEtLT0NNZ0xrYXdBaVZHVWxnZ1BGa3VzU1FCRkN1d0JFTXVzQ1FyTGJBNUxMQUFGckFFSmJBRUppQXVSeU5ISTJHd0JrVXJJeUE4SUM0ak9MRWtBUlFyTGJBNkxMRUpCQ1ZDc0FBV3NBUWxzQVFsSUM1SEkwY2pZU0N3QkNOQ3NBWkZLeUN3WUZCWUlMQkFVVml6QWlBRElCdXpBaVlER2xsQ1FpTWdSN0FFUTdDQVltQWdzQUFySUlxS1lTQ3dBa05nWkNPd0EwTmhaRkJZc0FKRFlSdXdBME5nV2JBREpiQ0FZbUd3QWlWR1lUZ2pJRHdqT0JzaElDQkdJMGV3QUNzallUZ2hXYkVrQVJRckxiQTdMTEF1S3k2eEpBRVVLeTJ3UEN5d0x5c2hJeUFnUExBRUkwSWpPTEVrQVJRcnNBUkRMckFrS3kyd1BTeXdBQlVnUjdBQUkwS3lBQUVCRlJRVExyQXFLaTJ3UGl5d0FCVWdSN0FBSTBLeUFBRUJGUlFUTHJBcUtpMndQeXl4QUFFVUU3QXJLaTJ3UUN5d0xTb3RzRUVzc0FBV1JTTWdMaUJHaWlOaE9MRWtBUlFyTGJCQ0xMQUpJMEt3UVNzdHNFTXNzZ0FBT2lzdHNFUXNzZ0FCT2lzdHNFVXNzZ0VBT2lzdHNFWXNzZ0VCT2lzdHNFY3NzZ0FBT3lzdHNFZ3NzZ0FCT3lzdHNFa3NzZ0VBT3lzdHNFb3NzZ0VCT3lzdHNFc3NzZ0FBTnlzdHNFd3NzZ0FCTnlzdHNFMHNzZ0VBTnlzdHNFNHNzZ0VCTnlzdHNFOHNzZ0FBT1NzdHNGQXNzZ0FCT1NzdHNGRXNzZ0VBT1NzdHNGSXNzZ0VCT1NzdHNGTXNzZ0FBUENzdHNGUXNzZ0FCUENzdHNGVXNzZ0VBUENzdHNGWXNzZ0VCUENzdHNGY3NzZ0FBT0NzdHNGZ3NzZ0FCT0NzdHNGa3NzZ0VBT0NzdHNGb3NzZ0VCT0NzdHNGc3NzREFyTHJFa0FSUXJMYkJjTExBd0s3QTBLeTJ3WFN5d01DdXdOU3N0c0Y0c3NBQVdzREFyc0RZckxiQmZMTEF4S3k2eEpBRVVLeTJ3WUN5d01TdXdOQ3N0c0dFc3NERXJzRFVyTGJCaUxMQXhLN0EyS3kyd1l5eXdNaXN1c1NRQkZDc3RzR1Fzc0RJcnNEUXJMYkJsTExBeUs3QTFLeTJ3Wml5d01pdXdOaXN0c0djc3NETXJMckVrQVJRckxiQm9MTEF6SzdBMEt5MndhU3l3TXl1d05Tc3RzR29zc0RNcnNEWXJMYkJyTEN1d0NHV3dBeVJRZUxBQkZUQXRBQUJMdUFESVVsaXhBUUdPV2JrSUFBZ0FZeUN3QVNORUlMQURJM0N3RGtVZ0lFdTRBQTVSUzdBR1UxcFlzRFFic0NoWllHWWdpbFZZc0FJbFliQUJSV01qWXJBQ0kwU3pDZ2tGQkN1ekNnc0ZCQ3V6RGc4RkJDdFpzZ1FvQ1VWU1JMTUtEUVlFSzdFR0FVU3hKQUdJVVZpd1FJaFlzUVlEUkxFbUFZaFJXTGdFQUloWXNRWUJSRmxaV1ZtNEFmK0ZzQVNOc1FVQVJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFNZ0F5QXhqLzRRTWcveUFER1AvaEF5RC9JQUFBQUNnQUtBQW9BV1FDQ2dPMEJZb0dEZ2FpQjRnSWdBaklDWFlKOEFwNkNyUUxHQXRzRFBnTjNBNTBEMXdSeWhJeUV6QVRuaFFhRkhJVXZCVkFGZUlYSEJkOEdFb1lrQmpXR1RJWmpCbm9HbUFhb2hzQ0cxUWJsQnZxSENnY2VoeWlIT0FkREIxcUhhUWQ2aDRJSGtZZW5oN1lIemdnbWlEa0lRd2hKQ0U4SVZ3aHZpSWNKR1lraUNUMEpZWW1BQ1o0SjNZbnRpakVLUTRwZWltNktzUXNFQ3crTEx3dFNDM2VMZll1RGk0bUxqNHVpQzdRTHhZdlhDOTRMNW93QmpDR0FBQUFBZ0FpQUFBQk1nS3FBQU1BQndBcFFDWUFBQUFEQWdBRFZ3QUNBUUVDU3dBQ0FnRlBCQUVCQWdGREFBQUhCZ1VFQUFNQUF4RUZEeXN6RVNFUkp6TVJJeUlCRU83TXpBS3EvVllpQW1ZQUFBQUZBQ3ovNFFPOEF4Z0FGZ0F3QURvQVVnQmVBWGRMc0JOUVdFQktBZ0VBRFE0TkFBNW1BQU1PQVE0RFhnQUJDQWdCWEJBQkNRZ0tCZ2xlRVFFTUJnUUdERjRBQ3dRTGFROEJDQUFHREFnR1dBQUtCd1VDQkFzS0JGa1NBUTRPRFZFQURRMEtEa0liUzdBWFVGaEFTd0lCQUEwT0RRQU9aZ0FERGdFT0ExNEFBUWdJQVZ3UUFRa0lDZ2dKQ21ZUkFRd0dCQVlNWGdBTEJBdHBEd0VJQUFZTUNBWllBQW9IQlFJRUN3b0VXUklCRGc0TlVRQU5EUW9PUWh0THNCaFFXRUJNQWdFQURRNE5BQTVtQUFNT0FRNERYZ0FCQ0FnQlhCQUJDUWdLQ0FrS1poRUJEQVlFQmd3RVpnQUxCQXRwRHdFSUFBWU1DQVpZQUFvSEJRSUVDd29FV1JJQkRnNE5VUUFORFFvT1FodEFUZ0lCQUEwT0RRQU9aZ0FERGdFT0F3Rm1BQUVJRGdFSVpCQUJDUWdLQ0FrS1poRUJEQVlFQmd3RVpnQUxCQXRwRHdFSUFBWU1DQVpZQUFvSEJRSUVDd29FV1JJQkRnNE5VUUFORFFvT1FsbFpXVUFvVTFNN096SXhGeGRUWGxOZVcxZzdVanRTUzBNM05URTZNam9YTUJjd1VSRXhHQkVvRlVBVEZpc0JCaXNCSWc0Q0hRRWhOVFFtTlRRdUFpc0JGU0VGRlJRV0ZBNENJd1ltS3dFbklRY3JBU0luSWk0Q1BRRVhJZ1lVRmpNeU5qUW1Gd1lIRGdNZUFUc0dNalluTGdFbkppY0JOVFErQWpzQk1oWWRBUUVaR3hwVEVpVWNFZ09RQVFvWUp4NkYva29Db2dFVkh5TU9EaDhPSUMzK1NTd2RJaFFaR1NBVENIY01FaElNRFJJU2pBZ0dCUXNFQWdRUERpVkRVVkJBSkJjV0NRVUpCUVVHL3FRRkR4b1Z2QjhwQWg4QkRCa25Ha3dwRUJ3RURTQWJFbUdJTkJjNk9pVVhDUUVCZ0lBQkV4c2dEcWMvRVJvUkVSb1JmQm9XRXlRT0VBMElHQm9OSXhFVEZBRjM1QXNZRXd3ZEp1TUFBQUlBWVArQUE2QUN3QUFIQUZjQVNFQkZTa2xET1RnMkp5WWNHUmNXREFRRFR3OENBUVFDUUFBRUF3RURCQUZtQUFBRkFRSURBQUpaQUFNRUFRTk5BQU1EQVZFQUFRTUJSUWtJVEVzd0xRaFhDVmNURUFZUUt3QWdCaEFXSURZUUpUSWVBaFVVQnlZbkxnRTFORGMxTmo4RFBnRTNOamMyTnpZdkFUVW1OelltSnlZbkl3WUhEZ0VYRmdjVUJ4VU9BUmNlQVJjV0Z4WVZNQlVVQmhRUEFSUWpEZ0VISmpVMFBnUUNyUDZvOVBRQldQVCtZRTJPWmp4WVVXa0VBZ0VCQVFJQ0FnRUNBZzBGRXdnSENBRUVDZ1FPRXloTkkwd29GQTRFQ2dRQkJBRUVCUTRJQkE0SUFRRUNBU2x3SEZrYk1VZFRZd0xBOVA2bzlQUUJXTkU4Wm81Tmltb2hId0VHRGdNREJnTURCZ1lHQXdVREhTSVdMQ01VQWdFVk9STTZHak1GQlRNYU9oTTVGUUVCQVFvVEdoa2dDU0VlRUNBSUF3VUNBUUVCRENnTWFvczBZMU5ITVJzQUFBQUFBd0RBLytBRFFBSmdBQUFBVXdEQUFUWkxzQXRRV0VBY2s1S0ZBQVFCQzU2YWxZUjZCUUFCcWFkelFrQS9FUW9JQ2dBRFFCdExzQXhRV0VBY2s1S0ZBQVFCQzU2YWxZUjZCUUFCcWFkelFrQS9FUW9JQndBRFFCdEFISk9TaFFBRUFRdWVtcFdFZWdVQUFhbW5jMEpBUHhFS0NBb0FBMEJaV1V1d0MxQllRRFVEQVFFTEFBc0JBR1lFQVFBS0N3QUtaQUFLQndzS0IyUUpDQUlIQmdzSEJtUUFBZ0FMQVFJTFdRd0JCZ1lGVUFBRkJRc0ZRaHRMc0F4UVdFQXZBd0VCQ3dBTEFRQm1CQUVBQndzQUIyUUtDUWdEQndZTEJ3WmtBQUlBQ3dFQ0Mxa01BUVlHQlZBQUJRVUxCVUliUURVREFRRUxBQXNCQUdZRUFRQUtDd0FLWkFBS0J3c0tCMlFKQ0FJSEJnc0hCbVFBQWdBTEFRSUxXUXdCQmdZRlVBQUZCUXNGUWxsWlFCNVZWSXVLWldSaVlWOWVYVnhVd0ZYQVRrMDVPQzh1SnlVZkhoTVNEUTRyQ1FFdUFTY21KeTRCUHdFMk56NEROVGN5UGdFM1BnRTFOQzRESXpjK0FUYzJKaU1pRGdFVkhnRWZBU0lIRkJZWEhnTVhNeFlYRmg4REJnY09BUWNPQkFjR0ZTRTBMZ01ISVRZM05qYytBVGN5TmpJK0FUSStBVEkzTmpjMkp6MENOQ1k5QXljdUFTY21Md0V1QWljbUp5WStBVGMxSmljbU56WXlGeFlIRGdJSE1RWVZIZ0VIQmdjVURnRVZCdzRDQnc0QkR3RWRBUVlkQVJRR0ZSUVhIZ0lYRmhjZUFSY1dGeDRDRndHVkFVSVFSQU1lQ2dNQkFRRU1CZ0lFQkFNQkFnVUpBd0VMQXdNREFnRURBZ1lCQVZCR0wwWWdBUVlDQXdzQkN3RUNCUVFGQVFJSEJ3TUZCd01CQVFJRkdBc0dFeEVURWdocEFvQVNGeUVVNHY3dEJRd1dJQWtaRVFFRkF3UURCQU1FQXdJcEVBd0JBUVVEQ2dNRkJ3RUJDQWtCQkFRQ0FnY0JDUUVCSFNCeUlCMEJBUVVEQVFFQkN3TUVCUWtKQVFJRUJRRURDZ01GQVFFTUJ4d1BCd2dZRVJrSklSVUVCUVVDQVkzK3V3WUxBUVlNQkNrU0V4TVJCUkFSRHdVRkFRd0xCeVlMQlFjRUFnRUpCaXdhTmxFb1BDTWFLZ2tJRXdza0NRWUtCUUlCTGhFSENROEZSQXNEQlFvREFRTURCQVFESlVNU0lSVVVDRVFIQ0JBTEJBVUNBUUVCQVFFQkNSUU9NZ2dKQndRRkFnTUNDQWNGRWdnT0tnY0VCUVFERXhJTUNBa0REQnN3S1IwaElSMHBGU1lOQXdVR0FoSU5FaE1EQkFVRUJ3a1dGUVFJRUFjSENBSURCQWtFREFZeURna09CUUVDQkFJRkJBc1FBd1FGQXdBQUJBREEvK0FEUUFKZ0FBc0FEQUJmQU13QmNrdXdDMUJZUUJ5Zm5wRU1CQWNFcXFhaGtJWUZCZ2UxczM5T1RFc2RGZ2dRQmdOQUcwdXdERkJZUUJ5Zm5wRU1CQWNFcXFhaGtJWUZCZ2UxczM5T1RFc2RGZ2dOQmdOQUcwQWNuNTZSREFRSEJLcW1vWkNHQlFZSHRiTi9Ua3hMSFJZSUVBWURRRmxaUzdBTFVGaEFSd2tCQndRR0JBY0daZ29CQmhBRUJoQmtBQkFOQkJBTlpBOE9BZzBNQkEwTVpBQUlBQkVCQ0JGWkFnRUFCUUVEQkFBRFZ3QUJBQVFIQVFSWEVnRU1EQXRRQUFzTEN3dENHMHV3REZCWVFFRUpBUWNFQmdRSEJtWUtBUVlOQkFZTlpCQVBEZ01OREFRTkRHUUFDQUFSQVFnUldRSUJBQVVCQXdRQUExY0FBUUFFQndFRVZ4SUJEQXdMVUFBTEN3c0xRaHRBUndrQkJ3UUdCQWNHWmdvQkJoQUVCaEJrQUJBTkJCQU5aQThPQWcwTUJBME1aQUFJQUJFQkNCRlpBZ0VBQlFFREJBQURWd0FCQUFRSEFRUlhFZ0VNREF0UUFBc0xDd3RDV1ZsQUpHRmdsNVp4Y0c1dGEycHBhR0RNWWN4YVdVVkVPem96TVNzcUh4NFJFUkVSRVJBVEZDc0JJelVqRlNNVk14VXpOVE1GQVM0Qkp5WW5MZ0UvQVRZM1BnTTFOekkrQVRjK0FUVTBMZ01qTno0Qk56WW1JeUlPQVJVZUFSOEJJZ2NVRmhjZUF4Y3pGaGNXSHdNR0J3NEJCdzRFQndZVklUUXVBd2NoTmpjMk56NEJOekkyTWo0Qk1qNEJNamMyTnpZblBRSTBKajBESnk0Qkp5WXZBUzRDSnlZbkpqNEJOelVtSnlZM05qSVhGZ2NPQWdjeEJoVWVBUWNHQnhRT0FSVUhEZ0lIRGdFUEFSMEJCaDBCRkFZVkZCY2VBaGNXRng0QkZ4WVhIZ0lYQTBBeUhESXlIREwrVlFGQ0VFUURIZ29EQVFFQkRBWUNCQVFEQVFJRkNRTUJDd01EQXdJQkF3SUdBUUZRUmk5R0lBRUdBZ01MQVFzQkFnVUVCUUVDQndjREJRY0RBUUVDQlJnTEJoTVJFeElJYVFLQUVoY2hGT0wrN1FVTUZpQUpHUkVCQlFNRUF3UURCQU1DS1JBTUFRRUZBd29EQlFjQkFRZ0pBUVFFQWdJSEFRa0JBUjBnY2lBZEFRRUZBd0VCQVFzREJBVUpDUUVDQkFVQkF3b0RCUUVCREFjY0R3Y0lHQkVaQ1NFVkJBVUZBZ0h1TWpJY01qSkYvcnNHQ3dFR0RBUXBFaE1URVFVUUVROEZCUUVNQ3djbUN3VUhCQUlCQ1FZc0dqWlJLRHdqR2lvSkNCTUxKQWtHQ2dVQ0FTNFJCd2tQQlVRTEF3VUtBd0VEQXdRRUF5VkRFaUVWRkFoRUJ3Z1FDd1FGQWdFQkFRRUJBUWtVRGpJSUNRY0VCUUlEQWdnSEJSSUlEaW9IQkFVRUF4TVNEQWdKQXd3Yk1Da2RJU0VkS1JVbURRTUZCZ0lTRFJJVEF3UUZCQWNKRmhVRUNCQUhCd2dDQXdRSkJBd0dNZzRKRGdVQkFnUUNCUVFMRUFNRUJRTUFBQUlBWVArQUE2QUN3QUFIQUVRQU1rQXZRUnNhQ3dRQ0F3RkFBQUFBQXdJQUExa0VBUUlCQVFKTkJBRUNBZ0ZSQUFFQ0FVVUpDQ2NrQ0VRSlJCTVFCUkFyQUNBR0VCWWdOaEFCSWlZblBnRTNQZ0UxTkNjbUp5WW5KajhCTlRZbUp5WStBamMyTnpNV0Z4NEJCd1lYTUJjZUFRY09BUWNPQlJVVUZoY1dGdzRDQXF6K3FQVDBBVmowL21CV21UVWNjQ2dFQWdnT0JCTUpCd2dCQWdRRUFnSUdEZ29vVENOTktCUU9CQW9FQVFRQkJBVVBCd0lHQndnRkJBSURhVkVqV20wQ3dQVCtxUFQwQVZqOTEwaEFEQ2dNQVFZT0lCQWVJUlV0SXhRQkFnY3hGZ2NaR2g4T013VUZNeG82RXprVkF3b1RHaGtnQ1FzWUZCQU9FUWdPQmdFZklTczlJUUFBQUFFQXdQL2dBMEFDWUFCU0FEZEFORUUvUGhBSkJRVUFBVUFEQVFFQ0FBSUJBR1lFQVFBRkFnQUZaQUFDQWdWUEFBVUZDd1ZDVFV3NE55NHRKaVFlSFJJUkJnNHJKUzRCSnlZbkxnRS9BVFkzUGdNMU56SStBVGMrQVRVMExnTWpOejRCTnpZbUl5SU9BUlVlQVI4QklnY1VGaGNlQXhjekZoY1dId01HQnc0QkJ3NEVCd1lWSVRRdUF3TFhFRVFESGdvREFRRUJEQVlDQkFRREFRSUZDUU1CQ3dNREF3SUJBd0lHQVFGUVJpOUdJQUVHQWdNTEFRc0JBZ1VFQlFFQ0J3Y0RCUWNEQVFFQ0JSZ0xCaE1SRXhJSWFRS0FFaGNoRkVnR0N3RUdEQVFwRWhNVEVRVVFFUThGQlFFTUN3Y21Dd1VIQkFJQkNRWXNHalpSS0R3akdpb0pDQk1MSkFrR0NnVUNBUzRSQndrUEJVUUxBd1VLQXdFREF3UUVBeVZERWlFVkZBZ0FBQUFBQWdEQS8rQURRQUpnQUFzQVhnREFRQXBOUzBvY0ZRVUxCZ0ZBUzdBTFVGaEFMZ0FJQVFBSVhBa0JCd1FHQUFkZUNnRUdDd1FHQzJRQ0FRQUZBUU1FQUFOWUFBRUFCQWNCQkZjQUN3c0xDMEliUzdBTVVGaEFMUUFJQVFob0NRRUhCQVlBQjE0S0FRWUxCQVlMWkFJQkFBVUJBd1FBQTFnQUFRQUVCd0VFVndBTEN3c0xRaHRBTGdBSUFRaG9DUUVIQkFZRUJ3Wm1DZ0VHQ3dRR0MyUUNBUUFGQVFNRUFBTllBQUVBQkFjQkJGY0FDd3NMQzBKWldVQVVXVmhFUXpvNU1qQXFLUjRkRVJFUkVSRVFEQlFyQVNNMUl4VWpGVE1WTXpVekF5NEJKeVluTGdFL0FUWTNQZ00xTnpJK0FUYytBVFUwTGdNak56NEJOelltSXlJT0FSVWVBUjhCSWdjVUZoY2VBeGN6RmhjV0h3TUdCdzRCQnc0RUJ3WVZJVFF1QXdOQU1od3lNaHd5YVJCRUF4NEtBd0VCQVF3R0FnUUVBd0VDQlFrREFRc0RBd01DQVFNQ0JnRUJVRVl2UmlBQkJnSURDd0VMQVFJRkJBVUJBZ2NIQXdVSEF3RUJBZ1VZQ3dZVEVSTVNDR2tDZ0JJWElSUUI3akl5SERJeS9uWUdDd0VHREFRcEVoTVRFUVVRRVE4RkJRRU1Dd2NtQ3dVSEJBSUJDUVlzR2paUktEd2pHaW9KQ0JNTEpBa0dDZ1VDQVM0UkJ3a1BCVVFMQXdVS0F3RURBd1FFQXlWREVpRVZGQWdBQUFJQW9QL0FBM2NDZ0FCSkFJd0FYRUJaWWdFR0IzbDNFaEFFQUFZQ1FBQURBZ2NDQXdkbUFBWUhBQWNHQUdZQUFnQUhCZ0lIV1FBQUFBa0JBQWxaQUFFQUNBVUJDRmtBQlFRRUJVMEFCUVVFVVFBRUJRUkZoWU9BZm1WallXQlBUVUpBTFN3cUtDUWlDaEFySlM0Qkl5SU9BUWNHSXlJbUx3RW1Md0VtTHdFdUF5OEJMZ0kxTkQ0Q056WW5KaThCSmlNaUJ3WWpCdzRDQnc0QkZCNEJGeDRCRng0QkZ4NEJNekkrQWpjMkp5WUhCZ2NHSXlJbkxnRW5MZ1kyTnpZM01EY3lOVFl6TWhZZkFSNEJCd1lYSGdJZkFSNEJGeFlYRmg4QkZoOEJGak15TmpjMk16SWVBaGNXQndZRFFCdG5KUVlNQ2dRd0NnUUtDd0lsRmdRQkFnUUdCZzBRREFFS0NBZ0NCZ2tISVI0UU1RSWRKaHdrQVFFQkRoY1BCQVFFQ0JRUUkwZ3pMRG8yTldFa0ZoWWpJQkkyS3dZZEpDWUtGVUJvTkRrckdTZ2xJU01UQkFNRUNTRUNBUjBUREJVTEFpNGpGU0FDQVFvTERBRVhGUXNCQWdNQkF4WW5BaHdSRFI4ZkJnb1BLeWtqQ2hzR0JJRWJPd0lFQWg4SENnSWZHQU1DQXdNR0J3MFREUUVMQ2d3RUF3Z0xEZ2tzUHlFN0F5UVhBUUVKRmhnTURSWWlKRE1kUUdFMUxqQW5KaW9DQ2hvV1FUY0dhU3NFQVVvbUx5MFpMekkxUHpNbUdBNGNGUUVCRWd3TkFqbEtIQ3dZQ1JNT0RnRVpGd3NCQXdJQkJCY2lBaGdQRkFRUkdCb0tHeFlSQUFBREFJQUFJQU9BQWlBQUF3QUdBQk1BUEVBNUVoRU9EUXdKQ0FRSUF3SUJRQVFCQVFBQ0F3RUNWd1VCQXdBQUEwc0ZBUU1EQUU4QUFBTUFRd2NIQUFBSEV3Y1RCZ1VBQXdBREVRWVBLeE1SSVJFQkpTRUJFUmNIRnpjWE54YzNKemNSZ0FNQS9vRCt1Z0tNL1ZybWlBU2VZR0NlQklqbUFpRCtBQUlBL3VqNC9rQUJySytiQkl0SlNZc0VtNi8rVkFBQ0FJRC80QU9BQW1BQUp3QlZBR3BBWnpReUlRTUVBQlFCQVFKS0FRZ0JUaGdDREFrL0FRY01CVUFBQkFBQ0FBUUNaZ1VEQWdJQkFBSUJaQXNLQWdnQkNRRUlDV1lBQ1F3QkNReGtBQVlBQUFRR0FGa0FBUUFNQndFTVdRQUhCd3NIUWxGUFRVdEpTRVpGUlVRK1BDa29FUklSSVNZUURSUXJBREllQVJVVUJ3WWpJaWNpSXljakppY2lCeU1IRGdFUEFUNEROVFFuSmljbUp5WTFORFlrSWc0QkZSUVhIZ0lYSmpVeEZoVVVCd1lXRnpNeVB3STJQd0V6SXpZM01oY1ZNeklWRmpNeVBnRTBKZ0dodnFOZVkyV1dWRGNCQWdFQ0R3NFJFQUVFQlFzQ1R3c0xCUUVOQWdFREFUVmVBV3JRc1djOUFRTUNBUUlISkFJSkNBWURCQU5sQVFvSkFRRUxDd3NLQWdFOVdtaXdabWNDUUVxQVMyOU1UeE1CQkFFR0FnRUVBU01oSkJNRkFoWVRBd0VFQVVOUFMzOXFVNDVVV2t3QkJBUUJBd0VMREFKeUJnd0NBUUVzQVFNRUF3RURBUUVVVFlxbmpnQUFBQUFEQUdEL2dBT2dBc0FBQ1FBUkFCZ0FuclVVQVFZRkFVQkxzQXBRV0VBNkFBRUFDQUFCQ0dZQUJnVUZCbDBBQWdBQUFRSUFWd3dCQ0FBTEJBZ0xWd0FFQUFNSkJBTlhDZ0VKQlFVSlN3b0JDUWtGVHdjQkJRa0ZReHRBT1FBQkFBZ0FBUWhtQUFZRkJta0FBZ0FBQVFJQVZ3d0JDQUFMQkFnTFZ3QUVBQU1KQkFOWENnRUpCUVVKU3dvQkNRa0ZUd2NCQlFrRlExbEFGZ29LR0JjV0ZSTVNDaEVLRVJFUkVoRVJFUkVRRFJZckV5RVZNelVoRVRNMUl6Y1JJUmN6TlRNUkF5TVZKeUVSSVlBQ0FDRDl3T0RBNEFGRmdCdGdJR0J1L3M0Q0FBS2d3T0QrUUNDZy9rQ0FnQUhBL21CdGJRR0FBQUFBQVFDZy84QURkd0tBQUVrQU5rQXpFaEFDQUFNQlFBQUNBd0pvQUFNQUEyZ0FBUUFFQUFFRVpnQUFBUVFBVFFBQUFBUlJBQVFBQkVWQ1FDMHNLaWdrSWdVUUt5VXVBU01pRGdFSEJpTWlKaThCSmk4QkppOEJMZ012QVM0Q05UUStBamMySnlZdkFTWWpJZ2NHSXdjT0FnY09BUlFlQVJjZUFSY2VBUmNlQVRNeVBnSTNOaWNtQTBBYlp5VUdEQW9FTUFvRUNnc0NKUllFQVFJRUJnWU5FQXdCQ2dnSUFnWUpCeUVlRURFQ0hTWWNKQUVCQVE0WER3UUVCQWdVRUNOSU15dzZOalZoSkJZV0l5QVNOaXNHZ1JzN0FnUUNId2NLQWg4WUF3SURBd1lIRFJNTkFRc0tEQVFEQ0FzT0NTdy9JVHNESkJjQkFRa1dHQXdORmlJa014MUFZVFV1TUNjbUtnSUtHaFpCTndZQUFBQUFBZ0NBQUNBRGdBSWdBQXdBRHdBclFDZ1BDd29IQmdVQ0FRZ0FBUUZBQUFFQUFBRkxBQUVCQUU4Q0FRQUJBRU1BQUE0TkFBd0FEQU1PS3lVUkJSY0hKd2NuQnljM0pSRUJJUUVEZ1A3NmlBU2VZR0NlQklqKytnTHYvU0VCY0NBQjVNZWJCSXRKU1lzRW04ZitIQUlBL3VnQUFBQUJBSUQvNEFPQUFtQUFMUUJCUUQ0aURBb0RBZ0FtQVFZREZ3RUJCZ05BQlFRQ0FnQURBQUlEWmdBREJnQURCbVFBQUFBR0FRQUdXUUFCQVFzQlFpa25KU01oSUI0ZEhSd1dGQkFIRHlzQUlnNEJGUlFYSGdJWEpqVXhGaFVVQndZV0Z6TXlQd0kyUHdFekl6WTNNaGNWTXpJVkZqTXlQZ0UwSmdKbzBMRm5QUUVEQWdFQ0J5UUNDUWdHQXdRRFpRRUtDUUVCQ3dzTENnSUJQVnBvc0dabkFtQlRqbFJhVEFFRUJBRURBUXNNQW5JR0RBSUJBU3dCQXdRREFRTUJBUlJOaXFlT0FBQUFBQUlBWVArQUE2QUN3QUFGQUEwQWJVdXdDbEJZUUNrQUFRWURCZ0VEWmdBRUF3TUVYUUFBQUFJR0FBSlhCd0VHQVFNR1N3Y0JCZ1lEVHdVQkF3WURReHRBS0FBQkJnTUdBUU5tQUFRREJHa0FBQUFDQmdBQ1Z3Y0JCZ0VEQmtzSEFRWUdBMDhGQVFNR0EwTlpRQTRHQmdZTkJnMFJFUklSRVJBSUZDc0JJUkV6TlNFRkVTRVhNelV6RVFLZy9jRGdBV0Qrd0FGRmdCdGdBc0QrUU9BZy9rQ0FnQUhBQUFBQUFBY0FzLy9oQXlnQ1p3QTNBRVlBV0FCbUFIRUFqd0M3QVFCQUlaa0JDd2taRkJNREFBZDJBUVFBQlFFTUEwd3BBZ0lNQlVCK0FRVWxBUTBDUDB1d0MxQllRRlFBQ1FnTENBa0xaZ0FLQ3dFTENnRm1BQUFIQkFFQVhnOEJCQTBIQkExa0FBMERCdzBEWkFBTUF3SUREQUptRGdFQ0FtY0FDQUFMQ2dnTFdRQUJCUU1CVFFZQkJRQUhBQVVIV1FBQkFRTlJBQU1CQTBVYlFGVUFDUWdMQ0FrTFpnQUtDd0VMQ2dGbUFBQUhCQWNBQkdZUEFRUU5Cd1FOWkFBTkF3Y05BMlFBREFNQ0F3d0NaZzRCQWdKbkFBZ0FDd29JQzFrQUFRVURBVTBHQVFVQUJ3QUZCMWtBQVFFRFVRQURBUU5GV1VBbWMzSTVPTFcwc3JHa282Q2ZtSmVVa29TRGdIOTlmSEtQYzQ5QlB6aEdPVVllSFJFUUVBNHJBUzRDTmo4Qk5pY3VBUTRCRHdFT0FTSW1KelVtUGdJM05DNENCZ2NPQkJVT0FSMEJIZ1FYRmo0Q056WW5KZ01HTGdJMU5EWTNOaFlWRkFjR0p3NERGeFVVSGdFWEZqWTNQZ0V1QVFjR0pqVTBOamMySGdJVkZBWTNCaVluSmpZM05oWVhGamN5UGdFM05UWXVCQThCSWdZVkZETTJIZ01PQVJVVUZ4WW5MZ0VHSWc0QkJ5TVBBUVlWRkI0Qk16WTNOakllQXhjV0J3NENGUlFXTWpZM016NEJMZ01DaFFjSUFRRUJBUmdkQ2lBZ0hRa0tCUWdHQXdFQkFRRUNBUU1NRlNVWkdUTW5JQkFYRndRaUx6ODZJU2RYVDBJUEpFQVE2eVZGTWg1dFRVOXNRalZZSFNnUUNBRUJEZzB2VWhvTUFoSXpQZzhVRXc0SURna0dGUzhGQ3dJREFnVUdDd0lHOUFRSEJRRUNCeEFWRmhJRkJnY0tFUkFXRGdZREFRRU9BZ3NKRXhFT0R3WUZBUUVCRWdjTEJ3RVZBdzRWR1JrWkNSTUxBUUVERGhVTUFRRUpBUkFaSVNJQkxnRUdCZ1lDQWpJbERBa0hDZ1VGQWdJQkF3UURDQWNNQkE0WEdnNEJDd3NyTHl3YkFTaFBGQlFzUlNzZkRnTUVFaWRDS21NMERmN21BaFVuT1NGQlh3VUVURUZLTnl2N0JTQW5KZzBOQlE0Z0NCNFlLUlE4TnlLMEFoTVBFQnNDQVFVSkRRZ1FHVUVGQVFZRkVBUUZBUVlOdEFVSUJnSWVMUmtSQkFFQkFRd0pGZ1lIQ1JZUEZBY0NFd0lCL2dNREFRTUNBUUVCQmhnSkRna0JCZ0VDQ3hBZUV6Y3lBZ1lRQncwUENoQXFTamN1SHhRQUFBWUFRUCtrQThBQ213QU9BQmtBUEFCSEFFOEFjd0NKUUlaU0FRUUxabDRDRFFCZk9qRURCZzBEUURrMEFnWTlDZ0VIQ0FzSUJ3dG1FUUVMQkFnTEJHUVFBZzhEQUFFTkFRQU5aZzRCRFFZQkRRWmtBQVlHWndBTUNRRUlCd3dJV1FVQkJBRUJCRTBGQVFRRUFWRURBUUVFQVVWUlVCQVBBUUJ0YW1sb1ZsUlFjMUZ6VFV4SlNFTkJQajB3TGlJZkhoMFdGUThaRUJrR0JBQU9BUTRTRGlzbElpWTBOak15SGdNVkZBNEJJeUl1QVRVME5qSVdGQVlGTkM0Qkp5WXJBU0lPQmhVVUZ4NEJNekkzRnpBWEhnRStBVFVuUGdFQUlpWTBOak15SGdFVkZEWXlGaFFHSWlZMEZ6SVhMZ0VqSWc0REZSUVdGd2NVQmhRZUFUOEJIZ0V6TURzQ0xnRTFORDRCQXc0UUZ4Y1FCZ3dLQndRTEVkTUtFZ3NYSUJjWEFXcEVkVWNHQlFrZE5qSXNKaDRWQ3dnWGxXRkJPajRCQWdVRUF4SXNNdjFVSUJjWEVBc1NDcjBoRmhZaEZ0b0dDeEcwZHpWaFR6c2hQVFlZQVFVSkNsZ2NPeUFEQkFNRUJGQ0k0UmNoRndRSUNRd0hDaElMQ3hJS0VSY1hJUmM0UDJ0Q0JBRUtFaG9oSnlvd0dSMGRUMmdaS2dFQkFRRUhCa0lpWGdGRUZ5QVhDaElMRURjWElCY1hJRUVCWm9nY00wVlZMVUJ2SjFrQkJBb0RBd1E5Q2dvUEhROUhlRVlBQUFnQVFQOWhBOEVDNGdBSEFCQUFGQUFZQUIwQUpnQXZBRGNBWmtCak1DQVRBd0lFTmlFQ0FRSTNIUXdCQkFBQkxSd0NBd0FzSnhvWEJBVURCVUFBQVFJQUFnRUFaZ0FBQXdJQUEyUUlBUVFHQVFJQkJBSlhCd0VEQlFVRFN3Y0JBd01GVVFBRkF3VkZIeDRWRlJFUktpZ2VKaDhtRlJnVkdCRVVFUlFTRlFrUUt5VUJCaFVVRnlFbUFTRVdGd0UrQVRVMEp5WW5Cd0VXRno4QkVUWTNKd01pQnhFQkxnTURGak15TmpjUkJnY0JEZ1FIRndGZC92Y1VHQUVQQmdKSS92RUZCUUVKQ2dvMVJJSy8vbTVFZ0wvYmYwQy8wMHBHQVJNUUh5RWlsRUJESmtnaUJRWCtweGd1S1NRZkRMNmNBUWxBUkVwR0JnRWJCUWIrOXg5Q0lrdUlnRURBL2xwL1A3N0Uvb05FZ2I4QnlSais4UUVUQlFjRkEveVRGQXdNQVE0RkJBSXZEU0FtS2k4WnZnQUFBQUFGQUFYL1FnUDdBd0FBSVFBMEFFQUFVQUJnQU1GQURnZ0JBZ1VXQVFFQ0FrQVFBUUU5UzdBTFVGaEFLUW9CQUFBREJBQURXUTBJREFZRUJBa0hBZ1VDQkFWWkN3RUNBUUVDVFFzQkFnSUJVUUFCQWdGRkcwdXdGbEJZUUNJTkNBd0dCQVFKQndJRkFnUUZXUXNCQWdBQkFnRlZBQU1EQUZFS0FRQUFDZ05DRzBBcENnRUFBQU1FQUFOWkRRZ01CZ1FFQ1FjQ0JRSUVCVmtMQVFJQkFRSk5Dd0VDQWdGUkFBRUNBVVZaV1VBbVVsRkNRU01pQVFCYldWRmdVbUJLU0VGUVFsQThPelkxTFNzaU5DTTBHaGdBSVFFaERnNHJBU0lPQWhVVUZoY1dEZ1FQQVQ0RU54NEJNekkrQWpVMExnRURJaTRCTlRRK0F6TXlIZ0lWRkE0QkFpSUdGUlFlQVRJK0FUVTBKU0lPQWhVVUZqTXlQZ0kxTkNZaElnWVZGQjRETXpJK0FUUXVBUUlGWjcyS1VtbGJBUWdPRXhJUUJRVUlIVkJHVUJnYU54eG51b1pQaHVlS2RNRjBLMUJvZ2tSVm0yOUNjTDVQUFNvVUlTY2lGUDdPRHhvVERDb2VEeHNVRENzQnNSOHBCdzBTRmd3VUlSUVVJUU1BUkhTZ1dHV3lQQmN0SkNFWUVRVUVBUVlURmlRVUJRVkVkS0JZZGNoei9QUlRtMkU2YmxsREpUcGhoVWxobWxRQnB5Y2ZGU01WRlNNVkh5Y0tFaHNQSUMwTUZSd1FIeWNuSHcwWEV3NElGU01xSUJFQUFBRUFWLzl1QTZrQzBRRjVBYUpCalFGaUFJWUFkQUJ5QUhFQWJnQnRBR3dBYXdCcUFHa0FZQUFoQUJRQUV3QVNBQkVBRUFBTUFBc0FDZ0FGQUFRQUF3QUNBQUVBQUFBYkFBc0FBQUZIQVVZQlJRQURBQUlBQ3dGZ0FWMEJYQUZiQVZvQldRRllBVW9BcUFDbkFKMEFrQUNQQUk0QWpRQ01BQkFBRFFBQ0FKc0FtZ0NaQUpRQWt3Q1NBQVlBQVFBTkFTNEJMUUVxQUxVQXRBQ3pBQVlBQ1FBQkFTY0JKZ0VsQVNRQkl3RWlBU0VCSUFFZkFSNEJIUUVjQVJzQkdnRVpBUmdCRmdFVkFSUUJFd0VTQVJFQkVBRVBBUTRCRFFFTUFPMEF6QURMQU1rQXlBREhBTVlBeEFEREFNSUF3UURBQUw4QXZnQzlBTHdBS3dBRkFBa0JDZ0RvQU9jQTB3QUVBQU1BQlFBSEFFQUJSQUNIQUFJQUN3Q2NBSkVBQWdBTkFRc0FBUUFGQUFNQVAwQkZEQUVMQUFJQUN3Sm1BQUlOQUFJTlpBQU5BUUFOQVdRQUFRa0FBUWxrQ2dFSkJRQUpCV1FFQVFNRkJ3VURCMllJQVFjSFp3QUFDd1VBU3dBQUFBVlBCZ0VGQUFWRFFSNEJWd0ZVQVVNQlFnRkJBVDhCTEFFckFTa0JLQUQ5QVBvQStBRDNBT3dBNndEcUFPa0Eyd0RhQU5rQTJBQ21BS1VBbUFDVkFEa0FOd0FPQUE0ckV5OENOVDhGTlQ4SE5UOGlPd0VmTVJVSEZROERIUUVmRVJVUERTc0NMd3dqRHd3ZkRSVVhCeDBCQnhVUER5TUhJeThOSXljakp3OEpJdzhCS3dJdkZEVTNOVGM5QVQ4UE16OEJNelV2RVNzQk5TTVBBUlVQRFNzQ0x3ZzFQeGZSQWdFQkFnRURBZ1FGQVFFQ0FnSUNBZ01CQWdNRUFnTURCQVFFQlFZREF3Y0hCd2tKQ1FzSUNBa0tDUXNMQ3dzTUN3ME5HUTBuRFEwT0RBME5EUTBNREF3TEN3a0ZCQWtJQndjR0J3VUZCZ1FIQkFNREFnSUNCQU1DQVFJQkFnVURBZ1FEQWdJQ0FRRUJBUU1DQWdNTUNRUUdCUVlHQndRREF3TUNBd0lEQVFFQkFnUUJBZ0lDQXdJREFnUURBZ01EQkFJQ0F3SUVCQVFEQkFVRkFRRUNBZ0lFQlFjR0JnY0hBd1VLQVFFRkZna0pDUWdFQWdNREFRSUJBUUlDQkFNREF3WUdCd2dKQkFRS0Nnc0xEQXNsRGd3TkRRNE9EUTBPRFFjR0JBUUxEQWNJQlFjS0N3Y0dFQWdJREFnSUNBb25GaFlMQ3dvS0Nna0pDQWdHQndJREFnSUNBUUlCQVFFQkFnRURBZ0VFQXdRQ0JRTUZCUVVHQmdjSEFnRUJCQW9HQ0FjSUNRUUVCQU1GQXdRREF3SUJBUUVEQVFFQkJRSUVBd1VFQlFVR0JnVUhCd0VDQVFJQ0FnSUJBUUlCQVFFQ0FRTURBd01FQlFVRkJ3Y0hCZ2NJQkFVR0J3c0lBVXNGQndRT0JnWUhCd2dIQlFVSEJ3a0RCQVFDRXdvTERRNEhDUWNJQ2dnSkNRVUVDZ29KQ2drS0NnY0dCd1VGQlFVRUF3UURBZ0lFQVFJQkF3TURCQVFGQmdVSEJ3WUVBd2NJQndnSUNBa0lDUWdSQ1FnSkNBY0pEdzBNQ2hBQ0F3Z0ZCZ1lIQ0FnSUJBWUVCQVlGQ2dVR0FnRUZFUTBJQ2dvTERBNEpDQWtJQ1FnUEVBNFRCd3dMQ2dRRUJBUUNCQU1DQVFJREFRRURBZ1FHQmdVR0Nnc0JBZ01EQ3c4UkNRb0tDZ1VGQ2dFQkF3c0ZCUWNHQXdRRUJBUUVCQVFEQXdNREFnTUZCUU1DQlFNRUF3UUJBUU1DQWdJQ0FRRUNBUUlFQWdRRkJBSUNBZ0VCQVFVRUJRWURBd1lDQWdNQkFRSUNBZ0VDQXdJRUF3UUVCUUlEQWdNREF3WURBd01FQkFNSEJBVUVCUUlEQlFJQ0F3RUNBZ0lDQVFFQkFRRUNBZ2dGQndjS0NnWUdCd2NIQ0FrSkNBc0JBUUlDQWdNSUJRUUZCZ1FGQlFNRUFnSURBUVlFQkFVRkN3Y1dFQWdKQ1FnS0Nna0tDUXNKQ3drS0NBZ0lCQVVHQlFvR0FBQUFCQUJlQUNBRG9nSWdBQk1BS0FBc0FERUFOMEEwTVRBdkxpd3JLaWtJQWdNQlFBUUJBQUFEQWdBRFdRQUNBUUVDVFFBQ0FnRlJBQUVDQVVVQ0FDWWpHUllMQ0FBVEFoTUZEaXNCSVNJT0FSVVJGQll6SVRJMk5SRTBMZ01URkFZaklTSXVCVFVSTkRZekJUSVdGUmNWRnhFSEVTYzFOd0pmL2tZU0lSUXJIQUc2SENjSERCQVVGUk1PL2tZRUNBY0hCUVFDRmc4QnVnNFRYc1FpZ0lBQ0lCRWVFdjZJSENzcUhRRjRDeFFRREFiK1J3OFdBZ1FGQndjSUJBRjREUklCRVExcHEyc0JnRHorOTBPRVF3QUFBQVlBZ0FBQUE0QUNRQUFmQUVrQVVRQlpBRjBBWlFEZlM3QW9VRmhBVWdBUEN3NEhEMTRBRUE0U0RoQVNaZ0FCQ1FFSUF3RUlXUUFEQUFjRFN3UUNFd01BQ2dFSEN3QUhXUUFMQUE0UUN3NVpBQklBRVEwU0VWa0FEUUFNQmcwTVdRQUdCUVVHVFFBR0JnVlNBQVVHQlVZYlFGTUFEd3NPQ3c4T1pnQVFEaElPRUJKbUFBRUpBUWdEQVFoWkFBTUFCd05MQkFJVEF3QUtBUWNMQUFkWkFBc0FEaEFMRGxrQUVnQVJEUklSV1FBTkFBd0dEUXhaQUFZRkJRWk5BQVlHQlZJQUJRWUZSbGxBTEFFQVpXUmhZRjFjVzFwWFZsTlNUMDVMU2taRU9qZzNOaTh0SmlNYUZ4SVFEdzROREFnRkFCOEJIeFFPS3dFakppY3VBU3NCSWdZSEJnY2pOU01WSXlJR0ZSRVVGak1oTWpZMUVUUW1FeFFPQVNNaElpWTFFVFErQWpzQk56NEJOelkvQVRNd093RWVBaGNlQXg4Qk16SWVBUlVrSWdZVUZqSTJOQVlpSmpRMk1oWVVOek1WSXdRVUZqSTJOQ1lpQTBON0F3WXdKQkN4RUNNdUNBUWJSQnNiS0NrYUFvQWFJeU1EQnc0SS9ZQU5GZ1lKRFFlSUNRUVBBeVlORExFQkFRRURCUU1GRHhnU0NnbUtDUTBIL3VlT1pHU09aSEYwVVZGMFVUVWlJdjhBSlRZbEpUWUI0QU1ITlNFZk5BZ0ZJQ0FrR2Y2Z0d5Z29Hd0ZnR2lQK1l3b1BDaFlOQVdBR0N3Y0ZCZ1VUQkNvTUNBRUNBd01GRVJ3VUN3WUhEZ2dDWkk1a1pJN1NVWFJSVVhUZ0ltazJKU1UySlFBREFRRC9ZQU1BQXVBQUN3QVhBREVBVFVCS0RBc0NCUU1DQXdVQ1pnQUFBQU1GQUFOWkFBSUFBUVFDQVZrQUJBb0JCZ2NFQmxrSkFRY0lDQWRMQ1FFSEJ3aFBBQWdIQ0VNWUdCZ3hHREV1TFN3ckVSRVRFeWNWRnhVUURSY3JBQ0lHRlJFVUZqSTJOUkUwQXhRR0lpWTFFVFEyTWhZVkZ4VVVEZ0VqSWlZOUFTTVZGQllYRlNNVklUVWpOVDRCUFFFQ1FZSmRYWUpkSUVwb1NrcG9TbUE3Wmp0YWdpYUxaWklCUW9wamh3TGdZa1greTBWaVlrVUJOVVgraGpoUFR6Z0JOVGhQVHppWm56eGtPNEJibjU5bGt3ZCtKQ1IrQjVObG53QUFCQUQwLzJBRERBTGdBQklBSkFBc0FEa0FSa0JERmhRVERBb0dCZ01FQVVBWUNBSURQUUFBQUFFQ0FBRlpBQUlBQlFRQ0JWa0dBUVFEQXdSTkJnRUVCQU5SQUFNRUEwVXVMVFF6TFRrdU9Tb3BKaVVoSUJBSER5c0FJZ1lWRkI4Q0d3RTNOajhCUGdJMU5BY1ZCZzhCQ3dFbUp5NEJOVFEyTWhZVkZDWWlCaFFXTWpZMEJ5SW1OVFErQVRJZUFSUU9BUUp2M3AwVEFRUDE5UUVCQVFFR0NRUXlBUUVDMXRnQkFRZ0tpc1NLdDJwTFMycExnQ2MzR1N3eUxCa1pMQUxnbTI0ek1nTUcvZmNDQ1FJREFRTVFJU0lSYjhnQkFRTUUvamtCeXdNQkZpNFhZWWlJWVM2M1MycExTMnFUTnljWkxCa1pMRElzR1FBQ0FRRC9ZQU1BQXVBQUN3QWxBRUZBUGdvSkFnTUJBQUVEQUdZQUFRQUFBZ0VBV1FBQ0NBRUVCUUlFV1FjQkJRWUdCVXNIQVFVRkJrOEFCZ1VHUXd3TURDVU1KUkVSRVJFVEV5a1ZFQXNYS3lReU5qVVJOQ1lpQmhVUkZDVVZGQTRCSXlJbVBRRWpGUlFXRnhVakZTRTFJelUrQVQwQkFiK0NYVjJDWFFGOE8yWTdXb0ltaTJXU0FVS0tZNGRkWWtVQk5VVmlZa1greTBYaG56eGtPNEJibjU5bGt3ZCtKQ1IrQjVObG53QUFBQUlBOVA5Z0F3d0M0QUFTQUI4QUswQW9EQW9JQmdRQlBRTUJBUUlCYVFBQUFnSUFUUUFBQUFKUkFBSUFBa1VVRXhvWkV4OFVIeEFFRHlzQUlnWVZGQjhDR3dFM05qOEJQZ0kxTkFVaUpqVTBQZ0V5SGdFVURnRUNiOTZkRXdFRDlmVUJBUUVCQmdrRS92UW5OeGtzTWl3WkdTd0M0SnR1TXpJREJ2MzNBZ2tDQXdFREVDRWlFVy9ETnljWkxCa1pMRElzR1FBRkFRRC9ZQU13QXVBQUF3QUtBQlVBSFFBMUFGOUFYQWNCQWdFY0d4UUdCQUFDSVFFRUFDQUJBd1FFUUFVQkFnRUFBUUlBWmdBQkNnRUFCQUVBV1FBRUJnRURCd1FEV1FrQkJ3Z0lCMHNKQVFjSENFOEFDQWNJUXdVRU5UUXpNakV3THk0cktpUWlIeDRZRnhBT0JBb0ZDZ3NPS3dFM0FRY2xNamNERlJRV054RTBKaU1pRGdFSEFUWTNOU01WRkFjWE5nYzJOeWNHSXlJdUF6MEJJeFVVRmhjVkl4VWhOU01CRVJ3Q0F4eis3Q1VnNDEzZlhFSVpMeVlQQVJJSllpSWlGRERxTWkwVExUTWpRellwRnlhTFpaSUJRb29DMEJEOGtCRDlFUUdCNjBWaXB3RTFSV0lRSFJQK0xSb2FuNTlBTlNKRHF3TVhJQllXS1RWREk2Q2ZaWk1IZmlRa0FBQURBRUQvb0FQQUFxQUFCd0FYQURvQWtFQUxNUUVCQnpvd0FnTUZBa0JMc0JoUVdFQXdBQVlCQUFFR0FHWUFCQUFGQlFSZUNBRUNBQWNCQWdkWkFBRUFBQVFCQUZrQUJRTURCVTBBQlFVRFVnQURCUU5HRzBBeEFBWUJBQUVHQUdZQUJBQUZBQVFGWmdnQkFnQUhBUUlIV1FBQkFBQUVBUUJaQUFVREF3Vk5BQVVGQTFJQUF3VURSbGxBRkFvSU5qTXVMQ1VqR3hrU0R3Z1hDaGNURUFrUUt3QXlOalFtSWdZVUFTRWlCaFVSRkJZeklUSTJOUkUwSmdNbUl5SUdEd0VPQkNNaUp5NENMd0VtSXlJSEF4RStBVE1oTWg0QkZSTUN1RkE0T0ZBNEFRajg4QmNoSVJjREVCY2hJZVVMRHdjTEJ5WUNCQVVFQlFNTkNRRURBd0ZzRFJRVUR2MENEZ29DekFZTUJ3RUJZRGhRT0RoUUFRZ2hHUDF5R0NFaEdBS09HQ0grZFF3R0JTQUNBZ01CQVFnQkFnUUJkQThQL3M4Q0NRb05CZ3NIL2ZjQUFBQUlBRmIvUFFPM0Fza0FLUUEyQUZVQVl3QnhBSUFBa1FDZEFMSkFyM0lCQnd4TkFRWUhjQUVMQ1RnM0lCTUVBZ1ZNUlVRWkJBQUNLZ0VCQUFaQVZWUk9Bd1FNUGdBR0J3a0hCZ2xtQUFVT0FnNEZBbVlBQWdBT0FnQmtBQUFCRGdBQlpBQUJBV2NBREFBTEJBd0xXUUFKQUFvRENRcFpBQVFBQXcwRUExa1NBUTBBRUFnTkVGa1JBUWNBQ0E4SENGa0FEdzRPRDAwQUR3OE9VUUFPRHc1RmdvRlhWcGlXazVLS2lJR1JncEYvZm5kMmJXeGxaRjFjVm1OWFkxRlFTVWhBUGpJd0l5SWRIQmNWRXc0ckFTY1BBU2NtRHdFT0FSVVJGQjRETmo4QkZ4WXpNajhCRmhjV01qYzJOeGNXTWpZM05qVVJOQUV1QVRVMFBnRXpNaFlWRkFZM0p6NEJOVFF1QVNNaUJoVVVGd2NuTGdFakJnOEJFVGNYRmpJMlB3RVhCU0lHRlJFVUZqSTJOUkUwTGdFWElnNENIUUVVRmpJMlBRRW1OeFVVSGdFeVBnRTlBVFF1QVNNR0F5SU9BaFVVRmpNeVBnSTFOQzRCQmlJbU5EWXpNaDRDRlJRRHFiY0wyOGtIQjlNR0JnSUVCQVlHQTgzS0F3UUVBeDR2UXdVVUJXUXNUZ01HQlFJSC92dzJYQ2RES0QxV1hha3pCZ1V4VkRKTWF5WVd5UUlEQWdRRHVzSEtBZ1VGQXR5aS9hb0lDd3NQQ3dVSXpBUUhCUU1MRHdzRHhBVUlDZ2tGQlFrRkR6QU9HUklMS0J3T0dSTUxFeDhHR2hNVERRY0xDUVVDbnlvQlpGUURBMUlDQ1FiOXZBTUdCUU1DQVFGUVZRRUNEVjVtQ0FpWGJoSUJBZ0lHQ0FKRkR2elZWYlVxSjBRblZqd3F0Wm9NRVJ3TU1WVXhiRXNwVWdwVUFRRUJBVWdDSEV4VkFRRUJaQ1UxQ3dmK2tBZ0xDd2dCY0FVSUJVY0RCUWNEalFjTEN3ZU5EMUs2QlFrRUJBa0Z1Z1VJQlFQK25Rc1NHUTRjS0FvVEdRNFNJQkprRXhvVEJRa01CZzBBQUFBQUF3Q2cvK0FEZ0FLZ0FBa0FFZ0FqQUVGQVBoNFNFUTBNQlFJR0Rna0lBd1FCQWtBQUJRWUZhQUFHQWdab0FBUUJBQUVFQUdZQUFnQUJCQUlCVndBQUFBTlBBQU1EQ3dOQ0VpY1lFUkVSRUFjVkt5a0JFU0UzSVJFaEVRY0ZKd0VuQVJVekFTYzNKeTRDSXlJUEFUTWZBVGMrQVRVMEF1RDk0QUdnSVA0Z0FtQWcvdnNUQVZZVy9waEFBV2tYUmhrQ0J3Y0VDd2daQVJZcUdBUUVBZ0FnL2NBQndDQ1lFd0ZYRi82WVFRRm9GMEFaQXdNQ0NCZ1hLaGtFQ2dVTUFBQUFCZ0RnLzZBRElBS2dBQ0FBTHdCQ0FFWUFTZ0JPQUxoQUMwQTVPREFlRUFZSUN3RkFTN0FVVUZoQVFRQUtBd3dEQ2w0T0FRd05Bd3dOWkE4QkRRc0REUXRrQUFzSUNBdGNBQUVBQmdBQkJsa0hBZ0lBQ1FVQ0F3b0FBMWNBQ0FRRUNFMEFDQWdFVWdBRUNBUkdHMEJEQUFvRERBTUtER1lPQVF3TkF3d05aQThCRFFzRERRdGtBQXNJQXdzSVpBQUJBQVlBQVFaWkJ3SUNBQWtGQWdNS0FBTlhBQWdFQkFoTkFBZ0lCRklBQkFnRVJsbEFHVTVOVEV0S1NVaEhSa1ZFUTBKQk5CWTFHak1SRlRNUUVCY3JBU00xTkNZckFTSU9BaDBCSXhVekV4UVdNeUV5UGdjMUV6TWxORDRDT3dFeUhnTWRBU01CRlJRR0l5RWlKaThCTGdROUFRTWhCek1SSXhNakF6TURJeE16QXlDZ0lobUxDeFlRQ2FBcUx5TVlBUm9GQ3drSkNBWUZCQUl1S2Y1OUJRZ0xCWXNGQ1FjR0E4WUJEaEVNL3VZREJnTUVBd1FEQWdFd0FiUG9IQnlPSFJZZXpoMFZIZ0k5S0JraUNSQVdEQ2dkL2JzWklnSURCZ1lJQ0FvS0JnSkZSUVlMQ0FVREJnY0pCU2o5bndFTkVRRUNBZ0lFQlFVR0F3RUNSRUQrSGdIaS9oNEI0djRlQUFBQUFBSUF3UCtnQTBBQzRBQUxBQlFBUDBBOEZCRVFEdzROREFjRFBnQUdBQUVBQmdGbUJ3VUNBd0lCQUFZREFGY0FBUVFFQVVzQUFRRUVVQUFFQVFSRUFBQVRFZ0FMQUFzUkVSRVJFUWdUS3dFVk14RWhFVE0xSVJFaEVTVW5OeGNISnhFakVRSkE0UDNBNFA4QUFvRCtRaGVWbFJkdUlBSUFJUDNnQWlBZy9hQUNZRFFYbFpVWGJmNGFBZVlBQWdEQS82QURRQUtnQUFzQUZBQStRRHNVRVJBUERnME1Cd0VBQVVBQUJnTUdhQWNGQWdNQ0FRQUJBd0JYQUFFRUJBRkxBQUVCQkZBQUJBRUVSQUFBRXhJQUN3QUxFUkVSRVJFSUV5c0JGVE1SSVJFek5TRVJJUkVGQnhjM0p3Y1JJeEVDUU9EOXdPRC9BQUtBL2tJWGxaVVhiaUFDQUNEOTRBSWdJUDJnQW1EWkY1V1ZGMjBCNXY0YUFBQURBRkgvY1FPdkFzQUFEZ0FkQUNrQUowQWtLU2duSmlVa0l5SWhJQjhlREFFOUFBQUJBUUJOQUFBQUFWRUFBUUFCUlJrWUVnSVBLd0V1QVNJR0J3NEJIZ0krQWlZRERnRXVBalkzUGdFeUZoY1dFQU1ISndjWEJ4YzNGemNuTndNbVBKdWVtenhRT1RtZzF0YWdPVGxvU2NYRmtqUTBTVGVQa0k4M2I5V29xQmlvcUJpb3FCaXBxUUpHUEQ0K1BGRFcxcUE1T2FEVzF2NGNTVFEwa3NYRlNUWTVPVFp3L3NRQlhxaW5GNmlvRjZlb0dLaW9BQUFBQWdCK0FBQURnQUpnQUJNQUlnQkJRRDRXQ2dJREJCc1hFaEFKQlFBQkFrQVZDd0lDUGdBQUFRQnBBQUlGQVFRREFnUlpBQU1CQVFOTkFBTURBVkVBQVFNQlJSUVVGQ0lVSWhzVUZoQUdFaXM3QVRjMk56NENOeFVKQVJVR0J3WVhNQlV3QVRVTkFUVWlCZ2NtUGdXQUZTWktUaHdyUUNZQmdQNkF0MmhqQWdHZ0FTaisySXl2UlFFQkRCZzRUNE0rZHlNTUR3d0JvQUVBQVFDaENHaGtwUVlCWUlIQndvSmNkd2NaUmtCT09DY0FBQUFBQWdDQUFBQURnQUpnQUI4QUtnQTZRRGNsREFJREJDUWdEUUFFQWdFQ1FDWUxBZ0ErQUFJQkFta0FBQUFFQXdBRVdRQURBUUVEVFFBREF3RlJBQUVEQVVVVUhCWVVHUVVUS3lVd05UUXVBaWN1QVNjMUNRRTFIZ0VYSGdFZkFUTXdQUWNuTGdFakZTMEJGU0FYRmdPQUF4QXNJeldMWHY2QUFZQTNUQ29yU2lNbUZTQkZyNHorMkFFb0FRUlpJMEFHR2lwUlVTTTFOd1NoL3dEL0FLQUNFeE1VVGpnK0J3Y0lCd2NJQmdnVGQxeUN3c0dCdEVrQUFBTUFZUCtBQTZBQ3dBQVZBQjBBTGdCZFFGb05BUUlJQ3dFRUFRSkFEQUVCQVQ4SkFRUUJBQUVFQUdZQUJRQUlBZ1VJV1FBQ0FBRUVBZ0ZaQUFBQUF3Y0FBMWtLQVFjR0JnZE5DZ0VIQndaUkFBWUhCa1VmSGdBQUp5WWVMaDh1R3hvWEZnQVZBQlVURkJVaUN4SXJBUlFHSXlJdUFUUStBVE1WTnljVklnWVVGakkyTlFJZ0JoQVdJRFlRQVNJdUFUVTBQZ0l5SGdJVURnSUMySDVhTzJNNk9tTTd3TUJxbHBiVWxsVCtxUFQwQVZqMC9tQm5zR1k4Wm82YWptWThQR2FPQVNCYWZqcGpkbU02YjIrQVdKYlVscFZyQWFEMC9xajA5QUZZL2RkbXNHZE5qbVk4UEdhT21vNW1QQUFBQUFJQVFQK0FBOEFDd0FBSkFCTUFMa0FyRUFJQ0FENFREUXdMQ2drSUJ3WUZDZ0k5QVFFQUFnSUFTd0VCQUFBQ1R3TUJBZ0FDUXhJYUVoQUVFaXNCSVFzQklRVURKUVVERnljSE55Y2hOeGNoQndQQS9xbHBhZjZwQVJodEFSVUJGVzR1MWRWVjJBRUdVbElCQnRnQmdnRSsvc0xFL3NMRnhRRSs2SmlZOVpYMzk1VUFBQU1BWVArQUE2QUN3QUFIQUJvQUpnQkhRRVFBQUFBREJBQURXUWtCQlFnQkJnY0ZCbGNBQkFBSEFnUUhWd29CQWdFQkFrMEtBUUlDQVZFQUFRSUJSUWtJSmlVa0l5SWhJQjhlSFJ3YkVBNElHZ2thRXhBTEVDc0FJQVlRRmlBMkVBRWlMZ0UwUGdFek1oNEVGUlFPQWdNakZTTVZNeFV6TlRNMUl3S3MvcWowOUFGWTlQNWdaN0JtWnJCbk5HTlRSekViUEdhT1BTSHY3eUh3OEFMQTlQNm85UFFCV1AzWFpyRE9zR1liTVVkVFl6Uk5qbVk4QW4zd0llL3ZJUUFBQUFNQVlQK0FBNkFDd0FBSEFCZ0FIQUE4UURrQUJBTUZBd1FGWmdBRkFnTUZBbVFBQUFBREJBQURXUVlCQWdFQkFrMEdBUUlDQVZJQUFRSUJSZ2tJSEJzYUdSRVFDQmdKR0JNUUJ4QXJBQ0FHRUJZZ05oQUJJaTRCTlRRK0FqSWVBaFFPQWdFaEZTRUNyUDZvOVBRQldQVCtZR2V3Wmp4bWpwcU9aanc4Wm83K3N3SUEvZ0FDd1BUK3FQVDBBVmo5MTJhd1owMk9aanc4Wm82YWptWThBWTBpQUFBQUFnQmcvNEFEb0FMQUFBY0FHQUFwUUNZQUFBQURBZ0FEV1FRQkFnRUJBazBFQVFJQ0FWRUFBUUlCUlFrSUVSQUlHQWtZRXhBRkVDc0FJQVlRRmlBMkVBRWlMZ0UxTkQ0Q01oNENGQTRDQXF6K3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9Bc0QwL3FqMDlBRlkvZGRtc0dkTmptWThQR2FPbW81bVBBQUNBRDcvWGdQQ0F1SUFFUUFyQUNwQUp3UUJBQUFEQWdBRFdRQUNBUUVDVFFBQ0FnRlJBQUVDQVVVQ0FDWWpHUllNQ1FBUkFoRUZEaXNCSVNJT0FoVVJGQll6SVRJMk5SRTBKaE1VRGdJaklTSXVCVFVSTkRZeklUSWVBeFVEVy8xS0ZTWWNFRHdyQXJZclBEd1BDQTRUQ3YwOEJnc0tDUWNGQXg0VkFzUUlFQXdLQlFMaUVCd21GZjFLS3p3OEt3SzJLeno4M0FvVERnZ0RCUWNKQ2dzR0FzUVZIZ1VLREJBSUFBQUFBZ0JSLzNFRHJ3TEFBQTRBR2dBWlFCWWFHUmdYRmhVVUV4SVJFQThNQUQwQUFBQmZFZ0VQS3dFdUFTSUdCdzRCSGdJK0FpWURCeWNISnpjbk54YzNGd2NESmp5Ym5wczhVRGs1b05iV29EazV0aGlvcUJpb3FCaW9xQmlwQWtZOFBqNDhVTmJXb0RrNW9OYlcvb0lZcUtjWHFLZ1hwNmdZcUFBQUFBSUFZUCtBQTZBQ3dBQUhBQndBUTBCQURnRURBQkFCQmdRQ1FBOEJCQUUvQUFZRUJRUUdCV1lBQUFBREJBQURXUUFFQUFVQ0JBVlpBQUlCQVFKTkFBSUNBVkVBQVFJQlJSSVZGQk1URXhBSEZTc0FJQVlRRmlBMkVBQWlKalEyTXpVWEJ6VWlEZ0VWRkJZeU5qVXpGQUtzL3FqMDlBRlk5UDdLMUphV2FzREFPMk02ZjdOK0tBTEE5UDZvOVBRQldQNVVsdFNXV0lCdmJ6cGpPMWwvZmxwcUFBQUFBUUJBLzRBRHdBTEFBQWtBR0VBVkFnRUFQZ2tJQndZRkJRQTlBUUVBQUY4U0VBSVFLd0VoQ3dFaEJRTWxCUU1Ed1A2cGFXbitxUUVZYlFFVkFSVnVBWUlCUHY3Q3hQN0N4Y1VCUGdBQUFBQUNBR0QvZ0FPZ0FzQUFCd0FUQURaQU13Y0JCUVlDQmdVQ1pnUUJBZ01HQWdOa0FBQUFCZ1VBQmxjQUF3RUJBMHNBQXdNQlVnQUJBd0ZHRVJFUkVSRVRFeEFJRmlzQUlBWVFGaUEyRUFjakZTTTFJelV6TlRNVk13S3MvcWowOUFGWTlLRHdJdTd1SXZBQ3dQVCtxUFQwQVZpKzd1NGk4UEFBQUFBQUFnQmcvNEFEb0FMQUFBY0FDd0FoUUI0QUFBQURBZ0FEVndBQ0FRRUNTd0FDQWdGUkFBRUNBVVVSRXhNUUJCSXJBQ0FHRUJZZ05oQUhJVFVoQXF6K3FQVDBBVmowb1A0QUFnQUN3UFQrcVBUMEFWaStJZ0FBQUFNQU5QOVRBODBDN0FBSEFCZ0FLZ0E1UURZQUFRUUFCQUVBWmdBQUJRUUFCV1FBQXdZQkJBRURCRmtBQlFJQ0JVMEFCUVVDVWdBQ0JRSkdHaGtqSVJrcUdpb1hGUk1TQnhJckFCUVdNalkwSmlJRkZBNENJaTRDTkQ0Q01oNENBU0lPQWhVVUhnRXpNajRDTlRRdUFRRXVmSzU3ZTY0Q0kwaDhxcnlyZTBsSmU2dThxbnhJL2pSUmxHdEFhN2h0VVpSclAydTRBWGV2ZTN1dmU5TmRxM3RKU1h1cnU2dDdTVWw3cXdFeVFHcVVVbXk0YXo5cmxGRnR1R3NBQWdCZy80QURvQUxBQUFjQUVnQW5RQ1FTRVJBUERnVUNBQUZBQUFBQ0FHZ0FBZ0VCQWswQUFnSUJVZ0FCQWdGR0pCTVFBeEVyQUNBR0VCWWdOaEFCQmlNaUppOEJOeGMzRndLcy9xajA5QUZZOVA0Z0NRa0VDZ1J3SkY3Nkl3TEE5UDZvOVBRQldQN0JDUVVFY0NOZSt5UUFBQUFDQUQ3L1hnUENBdUlBRkFBY0FDcEFKeHdiR2hrWUZnWUJBQUZBQWdFQUFRRUFUUUlCQUFBQlVRQUJBQUZGQWdBS0J3QVVBaFFERGlzQklTSUdGUkVVRmpNaE1qWTFFVFF1QlFFbkJ5YzNGd0VYQTF2OVNpczhQQ3NDdGlzOEJRc09FaFFYL2tRRkJjb2dyd0ZqSUFMaVBDdjlTaXM4UENzQ3Rnd1hGUkVPQ3dYOWJ3VUZ5aUN2QVdNZ0FBRUJRQUJnQXNBQjRBQUxBQWF6Q0FBQkppc0JCeWNIRndjWE54YzNKemNDcUtpb0dLaW9HS2lvR0ttcEFlQ3BxQmVvcUJlbnFCZXBxQUFBQUFFQkFBQWdBd0FDZUFBVUFEbEFOZ2dCQkFJQlFBY0JBZ0UvQmdFQlBnQUVBZ01DQkFObUFBRUFBZ1FCQWxrQUF3QUFBMDBBQXdNQVVRQUFBd0JGRWhVVUV4QUZFeXNrSWlZME5qTTFGd2MxSWc0QkZSUVdNalkxTXhRQ2F0U1dsbXJBd0R0ak9uK3pmaWdnbHRTV1dJQnZienBqTzFsL2ZscHFBQUFCQUlEL29BUUFBcUFBSmdBNFFEVWJHZ29KQ0FjR0JRUUpBZ0VCUUFRQkFBQUJBZ0FCV1FBQ0F3TUNUUUFDQWdOUkFBTUNBMFVCQUI4ZEZ4VVFEZ0FtQVNZRkRpc0JNaDRCRlRjWEJ5YzNGelF1QWlNaURnRVVIZ0V6TWo0Qk54Y09BU01pTGdFMU5ENENBZ0Jvc1dkdUVvMkZFbVk1WUlSSllhVmdZS1ZoVFl0akdCa255SDFvc1djOVo0NENvR2F4YUdrU2lJZ1NhVW1FWURoZ3BjS2xZRDV1UndkMGttZXhhRTZPWnowQUFBSUFRUCtBQThBQ3dBQUpBQThBS2tBbkNnY0NBRDRQRGcwRUF3SUJBQWdDUFFFQkFBSUNBRXNCQVFBQUFrOEFBZ0FDUXhJU0ZRTVJLeVVESlFVREpTRUxBU0VsRnlFSEZ5Y0JXRzBCRlFFVmJRRVkvcWxwYWY2cEFjQlNBUWJZVmRXKy9zTEZ4UUUreEFFKy9zTFU5cFgxbHdBQUFnQUEveUFFQUFNZ0FCUUFLd0E4UURrQUJRRUNBUVVDWmdBQ0JBRUNCR1FBQkFjQkF3UURWUUFCQVFCUkJnRUFBQW9CUWhZVkFRQW1KU0VmRlNzV0t3OE9DZ2dBRkFFVUNBNHJBU0lPQWdjK0FqTXlFaFVVRmpJMk5UUXVBUU15UGdNM0RnTWpJZ0kxTkNZaUJoVVVIZ0VDQUdlN2lWSURBM0MrYjZ6ME9GQTRpZXlMVXB0OFh6WUNBa1J2bUZPczlEaFFPSW5zQXlCUGhybG1kOGwwL3ZxNktEZzRLSXZzaWZ3QU1sMTZtVkpab25SRkFRYTZLRGc0S0l2c2lRQUFEQUFsLzBRRDJ3TDZBQThBSFFBdUFEd0FUZ0JmQUhBQWdBQ1ZBS2NBdEFEREFHMUFhcFdCY0FNQkFFNDlBZ1lCTGg0Q0JRYTFBUWtLbGdFQ0NRVkFBQW9GQ1FVS0NXWUFDUUlGQ1FKa0N3RUFBQUVHQUFGWkNBRUdCd0VGQ2dZRldRUUJBZ01EQWswRUFRSUNBMUVBQXdJRFJRRUF1TGVZbHpzNE5ERXJLQ01nSFJ3WEZoRVFDZ2tBRHdFUERBNHJBVEllQXgwQkZBWWlKajBCTkRZVE1oWWRBUlFHSWlZOUFUUTJNd0VVQmlzQklpNEJOVFEyT3dFeUhnRVZJUlFHS3dFaUpqVTBOanNCTWhZbEZoUUdEd0VHSmljbU5qOEJQZ0VlQVJjQkZnWVBBUTRCTGdFbkpqWS9BVFlXRndFZUFROEJEZ0VuTGdFL0FUNENGaGNCSGdFUEFRNEJKeTRCTmo4QlBnRVhBejRCSGdFZkFSWUdCd1ltTHdFdUFUNEROd0UyTWhZZkFSWUdCdzRCTGdFdkFTWTJOd0UrQVI4QkhnRU9BUzhCTGdFQlBnRXlId0VlQVE0Qkx3RXVBVGNDQUFVSkJ3WURFaGdTRWd3TUVoSVlFaElNQWRzU0RINElEZ2dTREg0SURnajlCQklNZmd3U0VneCtEQklDdkFRSUIyMEtHQWNHQndwdEJnd0tDZ1A5YWdZR0MyMEZEQXNKQXdjSEMyd0xHQVlCNkFzR0JqOEdHQW9MQndjL0F3a0xEQVgrZ2dzR0JqOEdHQXNIQ0FFRFB3Y1lDbDBHREFzSkF6OEdCZ3NLR0FjL0FnSUJBZ01HQXdGL0J3OE9CRDhHQmdzRkRBc0pBejhIQnd2OTFBWVlDbTBMQmd3WUMyd0xCd0tjQlE0UEIyMExCZ3dZQzIwS0J3WUMrZ01GQ0FrRmZRMFJFUTE5RFJIOUJCRU5mZ3dTRWd4K0RSRUJJUXdSQ0EwSURSRUlEUWtNRVJFTURSRVI0UWdQRGdRL0JnWUxDeGdHUHdNQkF3Y0Yvb0lMR0FZL0F3RURCd1VMR0FZL0JnY0tBaXdHR0F0dEN3WUdCaGdMYlFVSEF3RUQvV29HR0F0dEN3WUdCQTRRQjIwTEJnWUNsZ01CQXdjRmJRc1lCZ1lHQzIwRENBZ0hCd1lDL1dvRUNBZHRDeGdHQXdFREJ3VnRDeGdHQWVnTEJnWS9CaGdXQmdZL0JoaitqUWNJQkQ4R0dCWUdCajhHR0FzQUFnQ0IvNkFEZ1FLZ0FBOEFJQUF0UUNvT0FRSURBZ0ZBRHdBQ0FUMEFBQUFDQXdBQ1dRQURBUUVEVFFBREF3RlJBQUVEQVVVb0dDTW1CQklyQlNjMk5UUXVBU01pQmhRV016STNGd0V1QVRVME5qSVdGUlFPQkNNaUE0SGpRMUtNVW42eXNuNXJWT0w5bmlZcG4rR2dFeU0wUFVVa2NUSGlWR3RTalZHeS9MTkU0d0VQSm1RMmNhQ2ZjU1ZGUFRRakV3QUFBQUVCQUFBZ0F3QUNJQUFMQUNWQUlnQUVBd0VFU3dVQkF3SUJBQUVEQUZjQUJBUUJUd0FCQkFGREVSRVJFUkVRQmhRckFTTVZJelVqTlRNMU14VXpBd0R3SXU3dUl2QUJEdTd1SXZEd0FBQUFBUUZBLytBQ3dBSmdBQVVBQnJNREFRRW1Ld0UzQ1FFbkFRRkFRUUUvL3NGQkFQOENIMEgrd1A3QVFRRC9BQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFbkNRRTNBd0xBUWY3QkFUOUIvd0lmUWY3QS9zQkJBUDhBQUFBQUFRRXNBSVFDeXdHOUFBb0FFa0FQQ2drSUJ3WUZBRDRBQUFCZklRRVBLeVVHSXlJbUx3RTNGemNYQWNBSkNRUUtCSEFrWHZvampRa0ZCSEFqWHZza0FBUUFnUCtnQTRBQ29BQUlBQkVBR3dBZkFFeEFTUjBjR3hvWUZ4WVRFUkFQQ0FFTkJBY0JRQUFCQndFL0dSSUNCajRBQmdBSEJBWUhWd0FFQUFFREJBRlhCUUVEQUFBRFN3VUJBd01BVHdJQkFBTUFReGtXRVJFU0VSRVNDQllyQ1FFUk14RXpFVE1SQXlNUklSRWpFU1VGQVFjMUl4VUhGUWtCTlNVSE5UTUNBUDdBNE1EZ0lLRC9BS0FCSUFFZy91REFnRUFCZ0FHQS9hQkFRQUpBL3dEK1lBRUEvd0FCb1A2QUFRRC9BQUZ4NXVZQmI1cGF3RE1wQVRQK3pTbUFNNFlBQUFBREFHRC9nQU9nQXNBQUdRQWhBQ1VBUGtBN0lnRUVBQ1VCQVFRQ1FBQUVBQUVBQkFGbUFBSUZBUUFFQWdCWkFBRURBd0ZOQUFFQkExRUFBd0VEUlFFQUpDTWZIaHNhRUE0QUdRRVpCZzRyQVRJZUFSY2VBUlFHQnc0RUl5SXVBU2N1QVRRK0F5QUdFQllnTmhBbkJTRVJBZ0F6WVZja05qbzZOaFl4TlRrN0h6TmhWeVEyT2pwdGkvbitxUFQwQVZqMDRQNUJBUDhDbnhveUpEZUxtb3MzRlNRYkV3a2FNaVEzaTVxTWJEb2g5UDZvOVBRQldCVEEvd0FBQUFRQWdQK2dBNEFDb0FBU0FCNEFwZ0UzQVc1THNDWlFXRUJoQUFjQUhRVUhIVmtKQVFVZkd3SWFCZ1VhV1FnQkJoNEJIQUFHSEZraEFRQUFBd1FBQTFrS0lnSUVJQUVaRWdRWldSZ0JFaEVCQ3dJU0Mxa0FBZ0FCRkFJQldSWUJGQThCRFJNVURWa0FGUUFPRlE1VkZ3RVRFd3hSRUFFTURBc01RaHRBWndBSEFCMEZCeDFaQ1FFRkh4c0NHZ1lGR2xrSUFRWWVBUndBQmh4WklRRUFBQU1FQUFOWkNpSUNCQ0FCR1JJRUdWa1lBUklSQVFzQ0VndFpBQUlBQVJRQ0FWa1dBUlFQQVEwVEZBMVpGd0VURUFFTUZSTU1XUUFWRGc0VlRRQVZGUTVSQUE0VkRrVlpRVXdBSVFBZkFBRUFBQUUyQVRNQkl3RWlBUjRCSEFFUUFRMEJCZ0VFQVA4QS9RRDhBUHNBN3dEc0FPY0E1QURaQU5jQTB3RFJBTXNBeUFEQkFMOEF2QUM2QUt3QXFRQ2ZBSndBa2dDUkFJNEFqQUNIQUlRQWZ3QjlBSGtBZHdCcUFHY0FXZ0JYQUV3QVNnQkdBRVFBUEFBNUFEUUFNZ0F0QUNzQUh3Q21BQ0VBcGdBYUFCa0FGQUFUQUEwQURBQUFBQklBQVFBU0FDTUFEaXNCSWc0Q0J3WVZGQjRCRnhZeU5qVTBKeVlDSWlZMU5ENEJNaDRCRlJRM0l5SW1OVFEvQVRZMEx3RW1JeUlQQVE0Q0l5SW1QUUUwSmlzQklnWWRBUlFPQXlNaUppOEJKaU1pRHdFR0ZCOEJGaFVVRGdFckFTSU9BZzhCRGdNZEFSUVdPd0V5SGdFVkZBNEJEd0VHRkI4QkZqTXlQd0UrQVRNeUZoMEJGQlk3QVRJMlBRRTBOak15SHdFV01qOEJOalF2QVNZMU5EWTdBVEkyUFFJMExnRVhGUlFyQVNJSERnSVZGQjRCSHdFV0R3RUdJeUl2QVNZaklnWWRBUlFPQWlzQklpWTlBVFFuSmlNaUJnOEJCaU1pTHdFbU5EOEJOalUwSnlZckFTSW1QUUUwTmpzQk1qYzJOVFFtTHdFbU5EOEJOak13TXpJZUFSOEJGak15UGdFM05qMEJORHNCTWg0QkhRRVVId0VlQkRNeVB3RStBVElXSHdFZUFSVVVEd0VHRlJRZUFSY1dPd0V5RlFJQ0ZDVWlJQTA0RFJrU09KOXhPVGdOaFYwcVNsZEtLNjhlRXhzUEZBNE9MUTRWRlE0VEJBc05CaE1kSEJROEZSMEZDQXdPQ0FrUkJ4TU9GUlVPTFE0T0V3OE1GUXdmQkFrSUNBTUdBd1FEQWg0VUh3d1ZEQU1IQlJNT0RpME5GaFFQRXdZUkNoTWNIUlE5RkI0YkV4UU9FdzRxRGkwT0RoUVBHeE1lRkJzTUZnSVBIaUFYQndvR0Jnc0lFdzBOTEFVSUNBUVRHQ0VmTHdNRkJnUThCd3NYR0I4UUhnc1NCUWdJQkMwRkJSSWFGeFloSHdjTEN3Y2ZJQmNXRFF3U0JRVXNCUWdEQWdNREFSTVhJUXNURWdjWUVUMEVDQVFZQ0FRSkNRb0tCaUVZRWdJSEJ3Y0NMUUlEQlJNWkJRb0lGaUVlRHdIZ0J3OFZEVGhRR2pBc0VqaHdVRTg1T1A2Z1hrSXJTaXNyU2l0Q2toc1RGQTBURHlrT0xBNE9FZ1VIQkJzVEhoUWVIaFFmQnc0TENBVUlCeE1PRGl3T0tROFNEaFFNRmd3Q0F3UURCZ01IQ0FrRlBCVWREQllNQnd3S0JSSVBLUTRzRGc0VEJ3Z2JFeDRWSFIwVkhoTWJFQk1PRGkwT0tROFREUlFUSEJ3VUh4NE9GdzFRSGhBWUJ4SVVDd29WRWdjVERBd3RCUVVTR2kwaEhnUUhCQU1LQ0I0Z0Z4Y05EQk1GQlMwRkRnVVNHQ0VnRnhjTEJqMEhDeGNYSUJBZUN4SUZEZ1V0QkFFQ0FSTVpCUW9IRnlBZkVnVUlCUjhmR0FZREJRUURBUmtTQXdJQ0FpMENCZ1FIQlJNWElRc1RFUWdYRWdBQUF3REEvK0FEUUFKZ0FBTUFCZ0FKQUFxM0NBY0dCUU1DQXlZckV4OEJDUUlERXdFbndPbHpBU1QraUFFNDV1TCt0cVlCTFdmbUFvRCtid0ZNL2c4QjlmN0dTUUFFQUdEL2dBT2dBc0FBQndBUkFCa0FLZ0JSUUU0QUJ3QUtBUWNLV1FBQkFBQUNBUUJaQUFJQUF3UUNBMWNMQmdJRUFBVUpCQVZYREFFSkNBZ0pUUXdCQ1FrSVVRQUlDUWhGR3hvSUNDTWlHaW9iS2hjV0V4SUlFUWdSRVJFUkVoTVNEUlFyQUJRV01qWTBKaUlURVNNVk14VWpGVE0xRWlBR0VCWWdOaEFCSWk0Qk5UUStBakllQWhRT0FnSFBGeUlYRnlJNllDQWdnR3orcVBUMEFWajAvbUJuc0dZOFpvNmFqbVk4UEdhT0Fka2lGeGNpRi82QUFRQVE4QkFRQWxEMC9xajA5QUZZL2RkbXNHZE5qbVk4UEdhT21vNW1QQUFFQUdEL2dBT2dBc0FBQndBWUFETUFRQUJlUUZzQUJRWUhCZ1VIWmdBSENBWUhDR1FBQUFBREJBQURXUXNCQkFBR0JRUUdXUXdCQ0FBSkFnZ0pXUW9CQWdFQkFrMEtBUUlDQVZFQUFRSUJSVFUwR2hrSkNEazRORUExUUNzcUlSOGVIUmt6R2pNUkVBZ1lDUmdURUEwUUt3QWdCaEFXSURZUUFTSXVBVFUwUGdJeUhnSVVEZ0lESWc0QkZUTW1NeklXRlJRR0J3NENCek0rQVRjK0FUVTBKZ01pQmhRV01qWTFOQzREQXF6K3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9SaXM4SUNZQ1lTUXlGUklYR1FzQkpnRU5JQm9hUmpFUEV4UWNGQVFHQ0FzQ3dQVCtxUFQwQVZqOTEyYXdaMDJPWmp3OFpvNmFqbVk4QWxrYk9DbGRMU01XSlJFVkppa2RLaUVmR0M0Zk1qditpeE1jRkJRT0JRc0lCZ01BQUFBQUJRREEvNEFEUUFMQUFBc0FFd0FYQUNrQU1RQllRRlVuSUFJSkNnRkFBQUFBQkFFQUJGa0ZEQU1EQVFBSENBRUhWd0FJQUFzS0NBdFpBQW9BQ1FZS0NWa0FCZ0lDQmtzQUJnWUNUd0FDQmdKREFBQXZMaXNxSkNNYkdoY1dGUlFURWc4T0FBc0FDeEVURXcwUkt3RTFOQ1lpQmgwQkl4RWhFU1UwTmpJV0hRRWhBU0VSSVFjMEppSUdGUlFXRnhVVUZqSTJQUUUrQVFZaUpqUTJNaFlVQXRCNnJIcHdBb0QrRUdlU1ovNmdBZEQ5d0FKQTRDVTJKUnNWQ1E0SkZSc3pHaE1UR2hNQllKQldlbnBXa1A0Z0FlQ1FTV2RuU1pEK1FBR2dvQnNsSlJzV0l3VlNCd2tKQjFJRkl3b1RHaE1UR2dBQUFBWUF3UURnQTBBQllBQUhBQThBSGdBbkFDOEFOd0JGUUVJS0RRWURBZ2dNQkFNQUFRSUFXUWtGQWdFREF3Rk5DUVVDQVFFRFVRc0hBZ01CQTBVZ0h4RVFOVFF4TUMwc0tTZ2tJeDhuSUNjWUZoQWVFUjRURXhNUURoSXJBRElXRkFZaUpqUTJJZ1lVRmpJMk5DVXlIZ0VWRkFZaklpNENOVFEyTnlJR0ZCWXlOalFtQkRJV0ZBWWlKalEySWdZVUZqSTJOQUh4SGhVVkhoVS9OaVVsTmlYK3dRb1FDaFVQQnc0SkJoVVBHeVVsTlNZbUFkWWVGUlVlRlQ4MkpTVTJKUUZFRlI0VkZSNHhKVFlsSlRZSkNoQUtEeFVHQ1E0SER4VWNKVFlsSlRZbEhCVWVGUlVlTVNVMkpTVTJBQUFBQUFJQkFQL2dBd0FDWUFBd0FFc0JJVXV3QzFCWVFCNHZGd0lKQTBzK0Fnb0JQUUVGQ0RFQkJ3VXRLZ0lHQndWQUd3RUhBVDhiUzdBTVVGaEFIaThYQWdrRFN6NENDZ0k5QVFVSU1RRUhCUzBxQWdZSEJVQWJBUWNCUHh0QUhpOFhBZ2tEU3o0Q0NnRTlBUVVJTVFFSEJTMHFBZ1lIQlVBYkFRY0JQMWxaUzdBTFVGaEFMd0FBQ1FFSkFBRm1BQU1BQ1FBRENWa0NBUUVBQ2dnQkNsa0FDQUFGQndnRldRQUhBQVlFQndaWkFBUUVDd1JDRzB1d0RGQllRQzhCQVFBSkFna0FBbVlBQXdBSkFBTUpXUUFDQUFvSUFncFpBQWdBQlFjSUJWa0FCd0FHQkFjR1dRQUVCQXNFUWh0QUx3QUFDUUVKQUFGbUFBTUFDUUFEQ1ZrQ0FRRUFDZ2dCQ2xrQUNBQUZCd2dGV1FBSEFBWUVCd1paQUFRRUN3UkNXVmxBRDBwSVFrQWtMRFFqRmlreEVoQUxGeXNCSWc0RUl5SXVBUzhCSmljdUFpTWlEZ0VQQVJrQk14RStBVE15SGdFWEZqTXlQZ00zUGdFM0VUVUdBd1lqSWljdUFpTWlEZ0VIRVQ0Qk16SVhIZ1F6TWpjQzRBSVNDQkVNRHdjT0doNEpHeElISENFekZpcEFFZ1VISUEwektCTXFOUTVhTVFnUkVnc1VBd29QQnd3VU54WXVWdzAzTFJVWUtoc0xEVE1vTFZNR0p4SWdIQTRYT0FKQUF3RUJBUUVDQlFJR0JBRUdCd1lMQ0FNRi9yZis1QUVmQlFnSUR3TVRBUUlCQWdFQkFnRUJPaUVDL3NNSEVnTVBDUVFGQXdFVEJRZ1NBUWtEQmdJSEFBQUNBSUQvb0FPQUFxQUFDQUFTQURWQU1oSVJEdzROQ2dnQkFBa0JBd0ZBRUFrQ0F6NEFBUU1BQXdFQVpnQURBUUFEU3dBREF3QlBBZ0VBQXdCREZCRVJFZ1FTS3drQkVUTVJNeEV6RVFFSE5TTVZCeFVKQVRVQ0FQN0E0TURnL3NEQWdFQUJnQUdBQWtEL0FQNWdBUUQvQUFHZ0FXQ2FXc0F6S1FFei9zMHBBQUlBZ1ArZ0E0QUNvQUNCQUk0QXBMYUlod0lIQUFGQVM3QW1VRmhBTVFBREFBOEFBdzlaQmhBQ0FBMEJCdzRBQjFrRUFRSUxBUWtJQWdsWkFBNEFDZzRLVlFVQkFRRUlVUXdCQ0FnTENFSWJRRGNBQXdBUEFBTVBXUVlRQWdBTkFRY09BQWRaQUE0SkNnNU5CQUVDQ3dFSkNBSUpXUVVCQVF3QkNBb0JDRmtBRGc0S1VRQUtEZ3BGV1VBbUFnQ01pNFdFZTNocmFtZGxYMXhYVlZGUFJVSThPU3dxSlNNYkdCTVJEUXdBZ1FLQkVRNHJBU01pSmpVMFB3RTJOQzhCSmlJUEFRNEJJeUltUFFFMEppc0JJZzRCSFFFVURnSWpJaTRCTHdFbUl5SVBBUVlVSHdFZUF4VVVCaXNCSWc0QkhRRVVGanNCTWhZVkZBOEJCaFFmQVJZek1qOEJQZ0V6TWhZZEFSUVdPd0V5TmowQk5ENEJNeklmQVJZeVB3RStBVFFtTHdFbU5UUStBVHNCTWpZOUFqWW1CeFFHSWlZMU1UUStBVEllQVFOUkhoTWJEeFFPRGkwT0tnNFRCeEVLRXh3ZEZEME5GZzBJRFJFSkJ3d0tCUk1PRlJVT0xRNE9Fd1FGQkFJYkVoOE5GdzRlRkI4U0d3OFREZzR0RFJZVUR4TUdFZ2tUSEIwVVBSUWREUlVORXc4VERpa1BMQWNJQ0FjVER3d1ZEQjhVR2dFYncxNkZYU3BLVjBvckFXOGNFeE1PRXc0cER5d09EaE1IQ0JzU0h4UWVEaGNOSHdrUURRY0RCd1VURGc0c0Rpa1BFZ1FJQ0FrRkV4d05GZzQ4RlJ3Y0V4UU9FZzhwRGl3T0RoTUhDQnNUSGhRZUhSVWVEQlVORUJJT0Rpd0hFeElUQnhNTkZBMFZEUndVSHg0VkhFOUNYbDVDSzBvckswb0FBQU1BWVArQUE2QUN3QUFIQUJFQUd3QTNRRFFBQUFBQ0F3QUNXUUFEQUFjR0F3ZFhBQVlJQVFVRUJnVlhBQVFCQVFSTEFBUUVBVkVBQVFRQlJSRVJFUkVVRkJNVEVBa1hLd0FnQmhBV0lEWVFKRElXRlJRR0lpWTFOQk1qTlRNMUl6VXpFVE1DclA2bzlQUUJXUFQrUmlJWEZ5SVhjWUFnSUdBZ0FzRDAvcWowOUFGWUpCY1JFQmdZRUJIK2h4RHdFUDhBQUFBREFHRC9nQU9nQXNBQUJ3QVVBQzRBU0VCRkFBVUhCZ2NGQm1ZQUJnUUhCZ1JrQUFBQUJ3VUFCMWtBQkFBREFnUURXZ2dCQWdFQkFrMElBUUlDQVZJQUFRSUJSZ2tJS2lnbkppVWpHUmdOREFnVUNSUVRFQWtRS3dBZ0JoQVdJRFlRQVNJbU5EWXlGaFVVRGdNM0RnRUhJelErQWpjK0FUVTBKaU1pRnlNMk16SVdGUlFHQXF6K3FQVDBBVmowL21rUEV4TWRGQVFHQ0FzK0lBMEJKZ2NPRmhFU0ZUSWtZUUltQVlZelJob0N3UFQrcVBUMEFWaitlQlFjRXhNT0Jnb0lCd1BuSUNFcUZpRWZHeEFSSmhVakxWMThPekllTHdBREFNRUE0QU5BQVdBQUJ3QVFBQmdBSzBBb0JBWUNBd0FCQVFCTkJBWUNBd0FBQVZFRkF3SUJBQUZGQ1FnV0ZSSVJEUXdJRUFrUUV4QUhFQ3NBSWdZVUZqSTJOQ1VpQmhRV01qWTBKaUFpQmhRV01qWTBBaHMySlNVMkpmN0JHeVVsTlNZbUFnQTJKU1UySlFGZ0pUWWxKVFlsSlRZbEpUWWxKVFlsSlRZQUFBd0FRUC9RQThBQ2NBQUhBQThBRndBZkFDY0FMd0ExQURzQVF3QkxBRk1BV3dFRVM3QWhVRmhBWWdBQ0FBSm9BQU1CQ2dFRENtWUFDZ2dCQ2doa0FBc0pCZ2tMQm1ZQUJnUUpCZ1JrQUFjRkIya1lGd0lVRmdFVkFSUVZWd0FBQUFFREFBRlpEd0VNRGdFTkNRd05XQUFJQUFrTENBbFpFd0VRRWdFUkJSQVJXQUFFQkFWUkFBVUZDd1ZDRzBCbkFBSUFBbWdBQXdFS0FRTUtaZ0FLQ0FFS0NHUUFDd2tHQ1FzR1pnQUdCQWtHQkdRQUJ3VUhhUmdYQWhRV0FSVUJGQlZYQUFBQUFRTUFBVmtQQVF3T0FRMEpEQTFZQUFnQUNRc0lDVmtBQkJBRkJFMFRBUkFTQVJFRkVCRllBQVFFQlZFQUJRUUZSVmxBTFZSVVZGdFVXMXBaVDA1TlRFcEpTRWMvUGowOE96bzVPRE15TVRBdExDa29KU1FURXhNVEV4TVRFeEFaRnlzQU1oWVVCaUltTkRZaUJoUVdNalkwQWpJV0ZBWWlKalEySWdZVUZqSTJOQUF5RmhRR0lpWTBOaUlHRkJZeU5qUVhJUlVoTmpRaUZCY2pOVE1CTXhVak5qVTBKZ2NVRmhVaE5TRUdFek1WSXpZMU5DWW5CaFVVRmhVaE5RS3pHaE1UR2hNNk5DWW1OQ1pOR2hNVEdoTTZOQ1ltTkNiK014b1RFeG9UT2pRbUpqUW1Id0loL2Q4QndBR2hvUUkrb2FFQkFiOEIvZDhDSVFHL29hRUJBYjRCQWYzZkFsQVRHaE1UR2pNbU5DWW1OUDNtRXhvVEV4b3pKalFtSmpRQkZoTWFFeE1hTXlZMEppWTBDaUFJRUJBSUlQN3dJQWdJQkFnTUJBZ0VJQWdDS0NBSUNBUUlCQWdJQkFnRUlBQUpBRVFBSUFPOEFzc0FGUUFuQURNQVJBQlFBRjBBY1FCK0FJd0JFa3V3Q2xCWVFGNFhBUXdMQXdvTVhnQU5BZ29MRFY0QUJ3QUlBUWNJV1FBQkVnRUFDUUVBV1FBSkZRRUdDd2tHV1FBREV3RUNEUU1DV1FBTEZnRUtEd3NLV1FBUEdRRVFCUThRV1FBRkZBRUVFUVVFV1FBUkRnNFJUUUFSRVE1UkdBRU9FUTVGRzBCZ0Z3RU1Dd01MREFObUFBMENDZ0lOQ21ZQUJ3QUlBUWNJV1FBQkVnRUFDUUVBV1FBSkZRRUdDd2tHV1FBREV3RUNEUU1DV1FBTEZnRUtEd3NLV1FBUEdRRVFCUThRV1FBRkZBRUVFUVVFV1FBUkRnNFJUUUFSRVE1UkdBRU9FUTVGV1VCR2dIOXpjbDllVWxFMU5Db29HQllDQUlTRGY0eUFqSGw0Y241emZtbG5YbkZmY1ZoWFVWMVNYVXhMUmtVOU96UkVOVVF3TFNnektqTWhIaFluR0NjT0N3QVZBaFVhRGlzQklTSXVCVFUwTmpNaE1oNERGUlFHQnlFaUxnSTFORFl6SVRJZUFoVVVCZ2NoSWlZME5qTWhNaFlVQmdFaUpqVTBQZ0l6TWg0QkZSUU9BaVlpRGdFVUhnRXlQZ0UwSmdNaUpqVTBQZ0V5SGdFVURnRW5JZzRCRlJRZUF6TXlQZ0UxTkM0REF5SW1OVFErQVRJZUFSUU9BU2NpQmhRV01qWTFOQzRFQTVyOTNRUUhCd1lGQXdJVURnSWpCUXNJQmdRVUR2M2RCZzBKQmhRT0FpTUhEQWtHRkE3OTNRNFVGQTRDSXc0VUZQMERLendSR3lZVkd6QWJFQndtQ3hNUENRa1BFeEFKQ1JrclBCd3ZOekFiR3pBYkNnOEpBd1lKQ2dZSkVBa0VCZ2dMQlNzOEhDODNNQnNiTUJzT0ZCUWNGQU1FQmdnSkFrSUNBd1VHQndjRURoUURCZ2tLQmc0VTd3WUpEQWNPRkFVSkRRY09GTzhVSFJRVUhSUUJtandxRlNZYkVSd3ZIQlVsSEJDSUNROFRFQWtKRUJNUC9wSThLaHd2SEJ3dk56QWJpQWtQQ2dVTENBWUVDUkFKQmdvSkJnUCtpVHdxSEM4Y0hDODNNQnVKRkIwVUZBNEZDUWNIQkFNQUF3QkEvK0VEdndKbkFBTUFCd0FMQUNaQUl3QUNBQU1BQWdOWEFBQUFBUVFBQVZjQUJBUUZUd0FGQlFzRlFoRVJFUkVSRUFZVUt4TWhGU0VSSVJVaEVTRVZJVUFEZi95QkEzLzhnUU4vL0lFQlBEQUJXekQ5MlM4QUFBQUVBQmYvaUFQcEFyZ0FCUUFpQURrQVB3QTlRRG8vUGowOE96bzVMU3dqSWlFZkhoUVRCZ1VFQXdJQkFCY0NBUUZBQUFBQUFRSUFBVmtBQWdNREFrMEFBZ0lEVVFBREFnTkZMeDRYTFFRU0t3RUhKd2NYTnljd1BRRXVBeU1pRGdJSEZ6NEJNaDRCRnhVVUJnY1hOalV4Qnc0QklpNEJOVFEyTnljR0hRTWVBak15TmpjQkJ4YzNGemNEMDFOVkZXcHBVUUZCYlpkU04ybGNUUnNjTXJETXJHVUJBUUVnQWxBeXNNeXRaUUVCSUFJQ2I3cHRic0EyL1J4cEZsTlRGZ0VnVTFNV2Fta1lBUUpUbFd4QUhUWk5NQkJaWjJTc1pnNEdEZ2NFRlJhNFdXZGtyV1lLRkFvRUZSWUNCQU5zdUd0d1lBRklhUmRUVXhjQUFBQUJBVi8vbndLZ0FxQUFTUUJMUUVnNkFRQUZSeDhLQXdJREFrQUFCUUFGYUFjQkFBTUFhQUFEQWdOb0FBSUFCQUVDQkZrQUFRWUdBVTBBQVFFR1VnQUdBUVpHQVFCRFFUYzJMU3NsSXgwYkNBY0FTUUZKQ0E0ckFTSU9BUlVSRkFZaUpqY3dFVFEyTnpZWEhnRVZFUlFPQWdjR0l5SW1OVEFSTkNZaklnNEJGUU1VRmpNV056NENOUk0wSnlZaUJ3WUhNQjBEQmhZekZqYzJOUkUySmdLSkJnc0dSVnRGQVJJUUl5TVFFUUlDQkFJR0NBa05EUWtIQ2dZQktSd2RGQVlKQkFFNEd6OGFPQUVCWUVCRExpOEJEUUhxQmdzRy9ubzlRVU05QWRZWEl3a1ZGUW9qRi80L0Jnb0lDQU1IRmhNQldnb05CZ3NHL3FjcUx3RVpDQlFYRFFIQlN5SVFEeUZMZUkxOVZGRmVBUzh3VHdHRkNnNEFBd0FULy9ZRDdRSkpBQmNBSXdBeEFKcExzQTlRV0VBaUJ3RUVBZ1VDQkY0QUJRTURCVndBQVFZQkFnUUJBbGtBQXdNQVVnQUFBQXNBUWh0THNCaFFXRUFrQndFRUFnVUNCQVZtQUFVREFnVURaQUFCQmdFQ0JBRUNXUUFEQXdCU0FBQUFDd0JDRzBBcEJ3RUVBZ1VDQkFWbUFBVURBZ1VEWkFBQkJnRUNCQUVDV1FBREFBQURUUUFEQXdCU0FBQURBRVpaV1VBVUpTUVpHQ3NxSkRFbE1TQWZHQ01aSXlrbUNCQXJBUlFPQkNNaUxnTTBQZ016TWhjV0Z4WWxJZzRDRlJRV01qWTBKZ2NpRGdFVkZCWXlOalUwTGdJRDdTRThXbXFHUmxHZGRWc3ZMMXQybkZISW5XTWRDUDRUTUZoQUpZdkZpNHRqS1VZb1dINVlHQ2c0QVNBWVBrTS9NeDhyUkZCTlBFMVFSQ3B3UjBzVzRpWkNXakZsam83S2psZ3BTQ3BBVzF0QUlEa3FHQUFBQVFEQUFHQURRQUhnQUFVQUJyTUNBQUVtS3lVM0NRRVhBUU1aSi83QS9zQW5BUmxnS1FGWC9xa3BBUzBBQUFBQUFRREFBR0FEUUFIZ0FBVUFCck1DQUFFbUt3RVhDUUUzQVFNWkovN0Evc0FuQVJrQjRDbitxUUZYS2Y3VEFBQUFBUUZBLytBQ3dBSmdBQVVBQnJNREFRRW1Ld0VuQ1FFM0FRTEFLZjZwQVZjcC90TUNPU2Yrd1A3QUp3RVpBQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFM0NRRW5BUUZBS1FGWC9xa3BBUzBDT1NmK3dQN0FKd0VaQUFBQUFRRkEvK0FDd0FKZ0FDRUFKVUFpR1JnVEN3UUZBQUlCUUFBQUFnRUNBQUZtQUFJQ0FWRUFBUUVMQVVJc0ZSRURFU3NCQmlJdkFSRVVCaUltTlJFSEJpY21ORGMyTnpZek1oWWZBUjRCSHdFZUFSVVVBcnNFRFFXVkNRNEpsUXdLQlFXdUFnWUZBd1VCQWdGWUxDc0RBZ0drQkFTRi9jY0hDUWtIQWptRUN3b0ZEZ1NmQVFVQ0FRSUJVQ2duQWdZREJ3QUFBQUVCUVAvZ0FzQUNZQUFnQUNSQUlSZ1RDd1FFQWdBQlFBQUFBUUlCQUFKbUFBRUJBbEVBQWdJTEFrSXNGUkVERVNzbEppSVBBUkUwSmlJR0ZSRW5KZ2NHRkJjV0Z4WXpNalkzUGdFL0FUNEJOVFFDdXdRTkJaVUpEZ21WREFvRkJhNENCZ1VFQmdFQldDd3JBd0tjQkFTRkFqa0hDUWtIL2NlRUN3b0ZEZ1NmQVFVREFnRlFLQ2NDQmdNSEFBQUFBQUVBd0FCZ0EwQUI0QUFkQUNwQUp4WVNBZ0FCQVVBQUFnRUNhQUFEQUFOcEFBRUFBQUZOQUFFQkFGSUFBQUVBUmh3VUl5TUVFaXNsTmk4QklUSTJOQ1lqSVRjMkp5WWlCd1lIQmhVVUZ4NEJId0VXTXpZQmZBb0toUUk1QndrSkIvM0hoQXNLQlE0RW53RUZCUUZRS0NjRUJ3ZGxDZ3lWQ1E0SmxRd0tCUVd1QWdZRkJ3UUJXQ3dyQlFFQUFRREFBR0FEUUFIaEFCNEFKVUFpRnhNQ0FBRUJRQUFDQUFKcEFBRUFBQUZOQUFFQkFGRUFBQUVBUlIwY0l5TURFQ3NsSmo4QklTSW1ORFl6SVNjbU56NEJGaGNXRnhZVkZBY09BUThCQmlNbUFvUUtDb1g5eHdjSkNRY0NPWVFMQ2dNSkNBT2ZBUVVGQVZBb0p3UUhCMlVLREpVSkRnbVZEQW9EQXdJRXJnSUdCUWNFQVZnc0t3VUJBQUFCQVI3L3B3TGFBbjhBQmdBV1FCTUFBUUE5QUFFQUFXZ0NBUUFBWHhFUkVRTVJLd1VUSXhFakVTTUIvTjZSbTVCWkFTZ0JzUDVRQUFFQVgvOTdBNkVDdlFBTEFBQUpBZ2NKQVJjSkFUY0pBUU50L3BMK2xEUUJiZjZUTkFGc0FXNDAvcEVCYndLOS9wSUJiRFArbFA2VU13RnMvcEl6QVc0QmJRQUFCQUJWLzNFRHFnTElBQk1BSndBK0FFUUFBQVVHTGdFME56NEJOQ1luSmpRK0FSY2VBUlFHSnc0QkpqUTNQZ0UwSmljbU5EWVdGeDRCRkFZREp5TWlKaWNSUGdFM016YytBUjRCRlJFVURnRW1KemNSQnlNUk13TXdDQmdRQ1RJMk5USUpFQmdKT2o0L3JBZ1lFUWdZR1JnWENCRVlDQjhnSXVISXB4Y2hBUUVoRjZmRkRoOGVFQkFiSHc0ZjFMcTRGQWtCRWhnSk5JYVhoVFFKR0JJQkNUeWNzSnhTQ0FFU0Z3a1pQa1UrR1FrWEVRRUlJVk5jVS83Z2dpRVlBYmtYSVFHVENnTVBHeEQ5SEJBYUR3RUlNQUxrbi81SEFBQUFCUUJBLzN3RHdBSzhBQXNBSHdBekFFZ0FYUUFBSlNFaUpqUTJNeUV5RmhRR0F5TWlKalEyT3dFeU5qMEJORFl5RmgwQkRnRUZJeTRCSnpVME5qSVdIUUVVRmpzQk1oWVVCZ01pSmowQlBnRTNNeklXRkFZckFTSUdIUUVVQmlFaUpqMEJOQ1lyQVNJbU5EWTdBUjRCRnhVVUJnT2cvTUFPRWhJT0EwQU9FaEp1d0E0U0VnN0FEaElTSEJJQk52MzNvQ2syQVJJY0VoSU9vQTRTRXU0T0VnRTJLYUFPRWhJT29BNFNFZ0x5RGhJU0RzQU9FaElPd0NrMkFSTDhFaHdTRWh3Uy9vQVNIQklTRHFBT0VoSU9vQ2syQVFFMkthQU9FaElPb0E0U0Vod1NBaUFTRHFBcE5nRVNIQklTRHFBT0VoSU9vQTRTRWh3U0FUWXBvQTRTQUFBQURBQ1dBQUVBQUFBQUFBRUFDQUFTQUFFQUFBQUFBQUlBQUFBaEFBRUFBQUFBQUFNQUZnQlVBQUVBQUFBQUFBUUFDUUNEQUFFQUFBQUFBQVVBTUFEdkFBRUFBQUFBQUFZQUNRRTBBQU1BQVFRSkFBRUFFQUFBQUFNQUFRUUpBQUlBQkFBYkFBTUFBUVFKQUFNQU1BQWlBQU1BQVFRSkFBUUFGZ0JyQUFNQUFRUUpBQVVBWUFDTkFBTUFBUVFKQUFZQUVnRWdBSFVBYmdCcEFHa0FZd0J2QUc0QWN3QUFkVzVwYVdOdmJuTUFYamlKeEFBQUFBQjFBRzRBYVFCcEFHTUFid0J1QUhNQUlGNDRpY1FBT2dCV0FHVUFjZ0J6QUdrQWJ3QnVBQ0FBTVFBdUFEQUFNQUFBZFc1cGFXTnZibk1nT2xabGNuTnBiMjRnTVM0d01BQUFkUUJ1QUdrQWFRQmpBRzhBYmdCekFDQmVPSW5FQUFCMWJtbHBZMjl1Y3lBQUFGWUFaUUJ5QUhNQWFRQnZBRzRBSUFBeEFDNEFNQUF3QUNBQVV3QmxBSEFBZEFCbEFHMEFZZ0JsQUhJQUlBQXlBREFBTEFBZ0FESUFNQUF4QURrQUxBQWdBR2tBYmdCcEFIUUFhUUJoQUd3QUlBQnlBR1VBYkFCbEFHRUFjd0JsQUFCV1pYSnphVzl1SURFdU1EQWdVMlZ3ZEdWdFltVnlJREl3TENBeU1ERTVMQ0JwYm1sMGFXRnNJSEpsYkdWaGMyVUFBSFVBYmdCcEFHa0FZd0J2QUc0QWN3QXRBQUIxYm1scFkyOXVjeTBBQUFJQUFBQUFBQUQvSHdBeUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFZQUFBQUFFQUFnQmJBUUlCQXdFRUFRVUJCZ0VIQVFnQkNRRUtBUXNCREFFTkFRNEJEd0VRQVJFQkVnRVRBUlFCRlFFV0FSY0JHQUVaQVJvQkd3RWNBUjBCSGdFZkFTQUJJUUVpQVNNQkpBRWxBU1lCSndFb0FTa0JLZ0VyQVN3QkxRRXVBUzhCTUFFeEFUSUJNd0UwQVRVQk5nRTNBVGdCT1FFNkFUc0JQQUU5QVQ0QlB3RkFBVUVCUWdGREFVUUJSUUZHQVVjQlNBRkpBVW9CU3dGTUFVMEJUZ0ZQQVZBQlVRRlNBVk1CVkFGVkFWWUJWd0ZZQVZrQldnRmJBVndCWFFkMWJtbEZNVEF3QjNWdWFVVXhNREVIZFc1cFJURXdNZ2QxYm1sRk1UTXdCM1Z1YVVVeE16RUhkVzVwUlRFek1nZDFibWxGTWpBd0IzVnVhVVV5TURFSGRXNXBSVEl3TWdkMWJtbEZNakF6QjNWdWFVVXlNekFIZFc1cFJUSXpNUWQxYm1sRk1qTXlCM1Z1YVVVeU16TUhkVzVwUlRJMk1BZDFibWxGTWpZeEIzVnVhVVV5TmpJSGRXNXBSVEkyTXdkMWJtbEZNalkwQjNWdWFVVXpNREFIZFc1cFJUTXdNUWQxYm1sRk16QXlCM1Z1YVVVek1ETUhkVzVwUlRNek1nZDFibWxGTXpNekIzVnVhVVV6TmpBSGRXNXBSVE0yTXdkMWJtbEZNelkwQjNWdWFVVTBNREFIZFc1cFJUUXdNUWQxYm1sRk5EQXlCM1Z1YVVVME1ETUhkVzVwUlRRd05BZDFibWxGTkRBMUIzVnVhVVUwTURZSGRXNXBSVFF3TndkMWJtbEZOREE0QjNWdWFVVTBNRGtIZFc1cFJUUXhNQWQxYm1sRk5ERXhCM1Z1YVVVME1UTUhkVzVwUlRRek5BZDFibWxGTkRNM0IzVnVhVVUwTXpnSGRXNXBSVFF6T1FkMWJtbEZORFF3QjNWdWFVVTBOREVIZFc1cFJUUTBNZ2QxYm1sRk5EUXpCM1Z1YVVVME5qQUhkVzVwUlRRMk1RZDFibWxGTkRZeUIzVnVhVVUwTmpNSGRXNXBSVFEyTkFkMWJtbEZORFkxQjNWdWFVVTBOallIZFc1cFJUUTJPQWQxYm1sRk5EY3dCM1Z1YVVVME56RUhkVzVwUlRRM01nZDFibWxGTlRBd0IzVnVhVVUxTURFSGRXNXBSVFV3TWdkMWJtbEZOVEF6QjNWdWFVVTFNRFFIZFc1cFJUVXdOUWQxYm1sRk5UQTJCM1Z1YVVVMU1EY0hkVzVwUlRVd09BZDFibWxGTlRNd0IzVnVhVVUxTXpJSGRXNXBSVFV6TkFkMWJtbEZOVE0xQjNWdWFVVTFNemNIZFc1cFJUVTJNQWQxYm1sRk5UWXlCM1Z1YVVVMU5qTUhkVzVwUlRVMk5RZDFibWxGTlRZM0IzVnVhVVUxTmpnSGRXNXBSVFU0TUFkMWJtbEZOVGd4QjNWdWFVVTFPRElIZFc1cFJUVTRNd2QxYm1sRk5UZzBCM1Z1YVVVMU9EVUhkVzVwUlRVNE5nZDFibWxGTlRnM0IzVnVhVVUxT0RnSGRXNXBSVFU0T1FSRmRYSnZCM1Z1YVVVMk1USUFBQUVBQWYvL0FBOEFBUUFBQUF3QUFBQVdBQUFBQWdBQkFBRUFYd0FCQUFRQUFBQUNBQUFBQUFBQUFBRUFBQUFBMWFRbkNBQUFBQURacWx1NUFBQUFBTm1xWEFrPScpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG5cclxuXHQudW5pLWljb25zIHtcclxuXHRcdGZvbnQtZmFtaWx5OiB1bmlpY29ucztcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHQnY29udGFjdCc6ICdcXHVlMTAwJyxcclxuXHQncGVyc29uJzogJ1xcdWUxMDEnLFxyXG5cdCdwZXJzb25hZGQnOiAnXFx1ZTEwMicsXHJcblx0J2NvbnRhY3QtZmlsbGVkJzogJ1xcdWUxMzAnLFxyXG5cdCdwZXJzb24tZmlsbGVkJzogJ1xcdWUxMzEnLFxyXG5cdCdwZXJzb25hZGQtZmlsbGVkJzogJ1xcdWUxMzInLFxyXG5cdCdwaG9uZSc6ICdcXHVlMjAwJyxcclxuXHQnZW1haWwnOiAnXFx1ZTIwMScsXHJcblx0J2NoYXRidWJibGUnOiAnXFx1ZTIwMicsXHJcblx0J2NoYXRib3hlcyc6ICdcXHVlMjAzJyxcclxuXHQncGhvbmUtZmlsbGVkJzogJ1xcdWUyMzAnLFxyXG5cdCdlbWFpbC1maWxsZWQnOiAnXFx1ZTIzMScsXHJcblx0J2NoYXRidWJibGUtZmlsbGVkJzogJ1xcdWUyMzInLFxyXG5cdCdjaGF0Ym94ZXMtZmlsbGVkJzogJ1xcdWUyMzMnLFxyXG5cdCd3ZWlibyc6ICdcXHVlMjYwJyxcclxuXHQnd2VpeGluJzogJ1xcdWUyNjEnLFxyXG5cdCdwZW5neW91cXVhbic6ICdcXHVlMjYyJyxcclxuXHQnY2hhdCc6ICdcXHVlMjYzJyxcclxuXHQncXEnOiAnXFx1ZTI2NCcsXHJcblx0J3ZpZGVvY2FtJzogJ1xcdWUzMDAnLFxyXG5cdCdjYW1lcmEnOiAnXFx1ZTMwMScsXHJcblx0J21pYyc6ICdcXHVlMzAyJyxcclxuXHQnbG9jYXRpb24nOiAnXFx1ZTMwMycsXHJcblx0J21pYy1maWxsZWQnOiAnXFx1ZTMzMicsXHJcblx0J3NwZWVjaCc6ICdcXHVlMzMyJyxcclxuXHQnbG9jYXRpb24tZmlsbGVkJzogJ1xcdWUzMzMnLFxyXG5cdCdtaWNvZmYnOiAnXFx1ZTM2MCcsXHJcblx0J2ltYWdlJzogJ1xcdWUzNjMnLFxyXG5cdCdtYXAnOiAnXFx1ZTM2NCcsXHJcblx0J2NvbXBvc2UnOiAnXFx1ZTQwMCcsXHJcblx0J3RyYXNoJzogJ1xcdWU0MDEnLFxyXG5cdCd1cGxvYWQnOiAnXFx1ZTQwMicsXHJcblx0J2Rvd25sb2FkJzogJ1xcdWU0MDMnLFxyXG5cdCdjbG9zZSc6ICdcXHVlNDA0JyxcclxuXHQncmVkbyc6ICdcXHVlNDA1JyxcclxuXHQndW5kbyc6ICdcXHVlNDA2JyxcclxuXHQncmVmcmVzaCc6ICdcXHVlNDA3JyxcclxuXHQnc3Rhcic6ICdcXHVlNDA4JyxcclxuXHQncGx1cyc6ICdcXHVlNDA5JyxcclxuXHQnbWludXMnOiAnXFx1ZTQxMCcsXHJcblx0J2NpcmNsZSc6ICdcXHVlNDExJyxcclxuXHQnY2hlY2tib3gnOiAnXFx1ZTQxMScsXHJcblx0J2Nsb3NlLWZpbGxlZCc6ICdcXHVlNDM0JyxcclxuXHQnY2xlYXInOiAnXFx1ZTQzNCcsXHJcblx0J3JlZnJlc2gtZmlsbGVkJzogJ1xcdWU0MzcnLFxyXG5cdCdzdGFyLWZpbGxlZCc6ICdcXHVlNDM4JyxcclxuXHQncGx1cy1maWxsZWQnOiAnXFx1ZTQzOScsXHJcblx0J21pbnVzLWZpbGxlZCc6ICdcXHVlNDQwJyxcclxuXHQnY2lyY2xlLWZpbGxlZCc6ICdcXHVlNDQxJyxcclxuXHQnY2hlY2tib3gtZmlsbGVkJzogJ1xcdWU0NDInLFxyXG5cdCdjbG9zZWVtcHR5JzogJ1xcdWU0NjAnLFxyXG5cdCdyZWZyZXNoZW1wdHknOiAnXFx1ZTQ2MScsXHJcblx0J3JlbG9hZCc6ICdcXHVlNDYyJyxcclxuXHQnc3RhcmhhbGYnOiAnXFx1ZTQ2MycsXHJcblx0J3NwaW5uZXInOiAnXFx1ZTQ2NCcsXHJcblx0J3NwaW5uZXItY3ljbGUnOiAnXFx1ZTQ2NScsXHJcblx0J3NlYXJjaCc6ICdcXHVlNDY2JyxcclxuXHQncGx1c2VtcHR5JzogJ1xcdWU0NjgnLFxyXG5cdCdmb3J3YXJkJzogJ1xcdWU0NzAnLFxyXG5cdCdiYWNrJzogJ1xcdWU0NzEnLFxyXG5cdCdsZWZ0LW5hdic6ICdcXHVlNDcxJyxcclxuXHQnY2hlY2ttYXJrZW1wdHknOiAnXFx1ZTQ3MicsXHJcblx0J2hvbWUnOiAnXFx1ZTUwMCcsXHJcblx0J25hdmlnYXRlJzogJ1xcdWU1MDEnLFxyXG5cdCdnZWFyJzogJ1xcdWU1MDInLFxyXG5cdCdwYXBlcnBsYW5lJzogJ1xcdWU1MDMnLFxyXG5cdCdpbmZvJzogJ1xcdWU1MDQnLFxyXG5cdCdoZWxwJzogJ1xcdWU1MDUnLFxyXG5cdCdsb2NrZWQnOiAnXFx1ZTUwNicsXHJcblx0J21vcmUnOiAnXFx1ZTUwNycsXHJcblx0J2ZsYWcnOiAnXFx1ZTUwOCcsXHJcblx0J2hvbWUtZmlsbGVkJzogJ1xcdWU1MzAnLFxyXG5cdCdnZWFyLWZpbGxlZCc6ICdcXHVlNTMyJyxcclxuXHQnaW5mby1maWxsZWQnOiAnXFx1ZTUzNCcsXHJcblx0J2hlbHAtZmlsbGVkJzogJ1xcdWU1MzUnLFxyXG5cdCdtb3JlLWZpbGxlZCc6ICdcXHVlNTM3JyxcclxuXHQnc2V0dGluZ3MnOiAnXFx1ZTU2MCcsXHJcblx0J2xpc3QnOiAnXFx1ZTU2MicsXHJcblx0J2JhcnMnOiAnXFx1ZTU2MycsXHJcblx0J2xvb3AnOiAnXFx1ZTU2NScsXHJcblx0J3BhcGVyY2xpcCc6ICdcXHVlNTY3JyxcclxuXHQnZXllJzogJ1xcdWU1NjgnLFxyXG5cdCdhcnJvd3VwJzogJ1xcdWU1ODAnLFxyXG5cdCdhcnJvd2Rvd24nOiAnXFx1ZTU4MScsXHJcblx0J2Fycm93bGVmdCc6ICdcXHVlNTgyJyxcclxuXHQnYXJyb3dyaWdodCc6ICdcXHVlNTgzJyxcclxuXHQnYXJyb3d0aGludXAnOiAnXFx1ZTU4NCcsXHJcblx0J2Fycm93dGhpbmRvd24nOiAnXFx1ZTU4NScsXHJcblx0J2Fycm93dGhpbmxlZnQnOiAnXFx1ZTU4NicsXHJcblx0J2Fycm93dGhpbnJpZ2h0JzogJ1xcdWU1ODcnLFxyXG5cdCdwdWxsZG93bic6ICdcXHVlNTg4JyxcclxuXHQnY2xvc2VmaWxsJzogJ1xcdWU1ODknLFxyXG5cdCdzb3VuZCc6ICdcXHVlNTkwJyxcclxuXHQnc2Nhbic6ICdcXHVlNjEyJ1xyXG59XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxzYXNzLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyLmpzPz9yZWYtLTktb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtNCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2MyZTY1MGUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcc2Fzcy1sb2FkZXJcXFxcbGliXFxcXGxvYWRlci5qcz8/cmVmLS05LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTQhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNjMmU2NTBlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInVuaS1pY29uc1wiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwidW5paWNvbnNcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibm9uZVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxzYXNzLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyLmpzPz9yZWYtLTktb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtNCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDYxZmFkMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxzYXNzLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyLmpzPz9yZWYtLTktb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtNCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDYxZmFkMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ1bmktbmF2LWJhci10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzRycHhcIlxuICB9LFxuICBcInVuaS1uYXYtYmFyLXJpZ2h0LXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHVweFwiXG4gIH0sXG4gIFwidW5pLW5hdmJhclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwidW5pLW5hdmJhcl9fY29udGVudFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcInVuaS1uYXZiYXJfX2NvbnRlbnRfdmlld1wiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ1bmktbmF2YmFyX19oZWFkZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ0XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNDRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTZcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIlxuICB9LFxuICBcInVuaS1uYXZiYXJfX2hlYWRlci1idG5zXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEyMHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNlwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI2XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidW5pLW5hdmJhcl9faGVhZGVyLWJ0bnMtbGVmdFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE1MHJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCJ1bmktbmF2YmFyX19oZWFkZXItYnRucy1yaWdodFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcInVuaS1uYXZiYXJfX2hlYWRlci1jb250YWluZXJcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwidW5pLW5hdmJhcl9faGVhZGVyLWNvbnRhaW5lci1pbm5lclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHVweFwiXG4gIH0sXG4gIFwidW5pLW5hdmJhcl9fcGxhY2Vob2xkZXItdmlld1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI0NFwiXG4gIH0sXG4gIFwidW5pLW5hdmJhci0tZml4ZWRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiekluZGV4XCI6IDk5OFxuICB9LFxuICBcInVuaS1uYXZiYXItLWJvcmRlclwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2M4YzdjY1wiXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ29vZHMubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ29vZHMubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PG5hdi1iYXIgdGl0bGU9XCJOaWtlXCIgbGVmdEljb249XCJhcnJvd2xlZnRcIiBAY2xpY2tMZWZ0PVwiYmFja1wiPjwvbmF2LWJhcj5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBuYXZCYXIgZnJvbSAnQC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5udnVlJ1xyXG5cdFxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0bmF2QmFyXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGJhY2soZSkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==