// 问题群里转发的一个问题
// 求答案 ？
// 一筐鸡蛋：
// 有一天，三个人出去外面玩，检到一筐鸡蛋，然后他们回去打算吃了饭就分，三个人正在吃饭时，第一个人吃的快一点，想分了鸡蛋早点回家，如时他就先去把鸡蛋分了三份，发现少一个，所以他自己拿着少一个的一份回家了。第二个人吃完了，他不知道第一人把鸡蛋分了拿走了，如时他又把鸡蛋分成三份，发现又少一个，他也很老实，他把少一个一份的自己拿走了。第三个人又去把剩下的鸡蛋分成三份，发现又少一个，问筐里最少有多少鸡蛋？
//
// 能算出这道题的智商不一般！求答案 ？有高手没，算算吧！
// 算不出转发其他群，看看哪个群里高手多？。

'use strict';
function verify(n){
  let ret = {
    num: n,
    bool: false
  };

  if((n + 1) % 3 !== 0){
    return ret;
  }else{
    let avg = (n + 1) / 3;
    let left = n - avg * 2;
    if(left + 1 === avg && left !== 0){   // left 不能为 0，否则2也符合题意
      ret.bool = true;
      return ret;
    }else{
      return ret;
    }
  }
}

var total = 0; // 如果每次可以拿走 0 个，2 也符合题意。
var cnt = 0;
var ret = {};
while(true){
  ret = verify(total);

  if(cnt === 2){
    console.log('result:' + total);
    return total;
  }

  if(ret.bool && total % 2 === 0){
    // total 必须是偶数，应该它需要满足两个人平分
    total = total / 2 * 3 - 1;
    cnt++;
  }else{
    total++;
    cnt = 0;
  }
}
