/**
 * 截取字符串 中英文混合
 * @param str	待处理字符串
 * @param len	截取字节长度 中文2字节 英文1字节
 */
function subString1(str, len){
    var regexp = /[^\x00-\xff]/g;// 正在表达式匹配中文
    // 当字符串字节长度小于指定的字节长度时
    if (str.replace(regexp, "aa").length <= len) {
        return str;
    }
    // 假设指定长度内都是中文
    var m = Math.floor(len/2);
    console.log(m);
    // for (var i = m, j = str.length; i < j; i++) {
    //     // 当截取字符串字节长度满足指定的字节长度
    //     if (str.substring(0, i).replace(regexp, "aa").length >= len) {
    //         return str.substring(0, i);
    //     }
    // }
    for (var i = m, j = str.length; i < j; i++) {
        console.log(i, j);
        // 当截取字符串字节长度满足指定的字节长度
        if (str.substring(j -i - 1 ).replace(regexp, "aa").length >= len) {
            console.log(str.substring(j - i - 1));
            return str.substring(j -i - 1);
        }
    }
    return str;
}

// console.log(subString1('123你我他',5));

const str = 'test/hfjhsfh感觉还是疑问的我/bvjdbwvdhbvhdv很出色变成金黄色的';
let pre = subString1(str, 22);
console.log(pre, pre.length);
