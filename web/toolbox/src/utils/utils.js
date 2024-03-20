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