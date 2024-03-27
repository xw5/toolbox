/**
 * 复制文本
 * @param text 
 */
export function copyText(text) {
  return new Promise((resolve) => {
    // console.log('copy', navigator.clipboard)
    if (!navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        resolve(true);
      }).catch(() => {
        resolve(false);
      });
    } else {
      try {
        var textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        // 隐藏此输入框
        textarea.style.position = 'fixed';
        textarea.style.clip = 'rect(0 0 0 0)';
        textarea.style.top = '10px';
        // 赋值
        textarea.value = text;
        // 选中
        textarea.select();
        // 复制
        document.execCommand('copy', true);
        // 移除输入框
        document.body.removeChild(textarea);
        resolve(true);
      }
      catch(err){
        resolve(false);
      }
    }
  });
}

/**
 * 文件转base64
 * @param {Object} file 
 */
export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

/**
 * 获取img尺寸
 * @param {String} url 
 * @returns 
 */
export const getImgSize = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      resolve(img);
    };
    img.error = function() {
      reject(img);
    };
    img.src = url;
  });
};


/**
 * 文件大小转换显示
 * @param {number} size 字节
 * @returns 
 */
export const formatFileSize = (size) => {
  if (!size){
    return "";
  }

  const num = 1024.00; //byte

  if (size < num) {
    return size + "B";
  }
  if (size < Math.pow(num, 2)) {
    return (size / num).toFixed(2) + "K"; //kb
  }
  if (size < Math.pow(num, 3)) {
    return (size / Math.pow(num, 2)).toFixed(2) + "M"; //M
  }
  if (size < Math.pow(num, 4)) {
    return (size / Math.pow(num, 3)).toFixed(2) + "G"; //G
  }
  return (size / Math.pow(num, 4)).toFixed(2) + "T"; //T
};

/**
 * 获取图片本地路径
 * @param {Object} file 
 * @returns 
 */
export const getObjectURL = function(file){
  let url = null ; 
  if (window.createObjectURL !== undefined) { // basic
      url = window.createObjectURL(file) ;
  } else if (window.URL !== undefined) { // mozilla(firefox)
      url = window.URL.createObjectURL(file) ;
  } else if (window.webkitURL!== undefined) { // webkit or chrome
      url = window.webkitURL.createObjectURL(file) ;
  }
  return url;
};

//将base64转换为blob
const dataURLtoBlob = (dataurl) => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

//下载方法
const downloadFile = (url, name) => {
  var a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", name);
  a.setAttribute("target", "_blank");
  let clickEvent = document.createEvent("MouseEvents");
  clickEvent.initEvent("click", true, true);
  a.dispatchEvent(clickEvent);
};

/**
 * 下载base64文件到本地
 * @param {string} base64 
 * @param {string} name 
 */
export const downloadFileByBase64 = (base64, name) => {
  var myBlob = dataURLtoBlob(base64);
  var myUrl = URL.createObjectURL(myBlob);
  downloadFile(myUrl, name);
};

/**
 * @description 时间戳转日期
 * @param { Number|String } timestamp 时间戳
 * @param { String } fmt 转换后的日期格式，如："YYYYMMDD"、"YYYY/MM/DD"、"YYYY-MM-DD hh:mm:ss"、"YYYY年MM月dd日"、"YYY-MM-DD"等等
 * @return { String } 转换后的日期
 */
export function timestampToTime(timestamp, fmt) {
  const re = /(Y+)/;
  const date = new Date(timestamp);
  if (re.test(fmt)) {
    // @ts-ignore
    const t = re.exec(fmt)[1];
    fmt = fmt.replace(
      t,
      (date.getFullYear() + "").substring(4 - t.length)
    );
  }

  const o = {
    "M+": date.getMonth() + 1, // 月份
    "D+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  for (let k in o) {
    const regx = new RegExp("(" + k + ")");
    if (regx.test(fmt)) {
      // @ts-ignore
      const t = regx.exec(fmt)[1];
      fmt = fmt.replace(
        t,
        t.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};