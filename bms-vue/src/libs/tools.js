import {
  debug
} from '../config/index'

// 调试 log
export const log = (item) => {
  if (debug) {
    switch (Object.prototype.toString.call(item)) {
      case '[object Array]':
      case '[object Object]':
        console.log(JSON.stringify(item, null, 2));
        break;
      default:
        console.log(item)
        break;
    }
  }
}

// 深拷贝
export const deepClone = (obj) => {
  if (obj == null || typeof obj !== 'object') {
    return obj;
  }
  switch (Object.prototype.toString.call(obj)) {
    case '[object Array]':
      {
        var result = new Array(obj.length);
        for (var i = 0; i < result.length; ++i) {
          result[i] = deepClone(obj[i]);
        }
        return result;
      }

    case '[object Error]':
      {
        var result = new obj.constructor(obj.message);
        result.stack = obj.stack; // hack...
        return result;
      }

    case '[object Date]':
    case '[object RegExp]':
    case '[object Int8Array]':
    case '[object Uint8Array]':
    case '[object Uint8ClampedArray]':
    case '[object Int16Array]':
    case '[object Uint16Array]':
    case '[object Int32Array]':
    case '[object Uint32Array]':
    case '[object Float32Array]':
    case '[object Float64Array]':
    case '[object Map]':
    case '[object Set]':
      return new obj.constructor(obj);

    case '[object Object]':
      {
        var keys = Object.keys(obj);
        var result = {};
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          result[key] = deepClone(obj[key]);
        }
        return result;
      }

    default:
      {
        throw new Error("Unable to copy obj! Its type isn't supported.");
      }
  }
}

// 时间格式化函数
export const timeformat = (date, format, week) => {
  // 全局时间格式化输出    .format('yyyy-MM-dd hh:mm:ss')
  let args = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds()
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (let i in args) {
    let n = args[i];
    if (new RegExp("(" + i + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? n : ("00" + n).substr(("" + n).length)
      );
    }
  }

  if (week) {
    let day = date.getDay();
    let show_day = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][day];
    format = format + ' ' + show_day;
  }

  return format;
}

// 校验手机号
export const checkPhone = (phone) => {
  if (!/^1(3|4|5|7|8)\d{9}$/.test(phone)) {
    return false;
  }
  return true;
}

