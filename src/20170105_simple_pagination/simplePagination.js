/**
 * @param {number} totalPage
 * @param {number} curPage
 * @return void
 *
 * @description 分页算法字符串版
 * @date 2017年01月05日
 * @author byr-gdp
 */
function simplePagination(totalPage, curPage){
  //一定显示的信息：当前页，第一页，最后一页
  //并显示当前页的前两页和后两页
  //以上页面可能重合
  //其余用...代替
  //eg: 1...3 4 5 6 7 ... 10

  var FIRST_PAGE = 1;
  var ELLIPSIS_SYMBOL = '...';  // 省略符号
  var EXTEND_NUM = 2;           // 中间页码前后延伸个数

  var ret = [FIRST_PAGE];
  var middleItems = [];

  if(curPage !== totalPage && curPage !== FIRST_PAGE){
    middleItems.push(curPage);
  }
  for(var i = 1; i <= EXTEND_NUM; i++){
    if(curPage + i < totalPage){
      middleItems.push(curPage + i);
    }
    if(curPage - i > FIRST_PAGE){
      middleItems.unshift(curPage - i);
    }
  }
  if(middleItems[0] - FIRST_PAGE > 1){
    middleItems.unshift(ELLIPSIS_SYMBOL);
  }
  if(totalPage - middleItems[middleItems.length - 1] > 1){
    middleItems.push(ELLIPSIS_SYMBOL);
  }

  ret = ret.concat(middleItems);
  ret.push(totalPage);

  return ret;
}
