/**
 * @param  {array}  arr 数组形式的分页信息
 * @param  {number} curPage 当前页
 * @return {string} 字符串形式 HTML 片段
 *
 * @description 根据分页信息和当前页生成用于渲染分页组件的 HTML 片段
 * @date 2017-01-05
 * @author byr-gdp
 */
function render(arr, curPage){

  var str = '<ul>';
  arr.forEach(function(item, index){
    if(item === '...'){
      str += `<li>${item}</li>`;
    }else if(item === curPage){
      str += `<li data-page=${item} class='cur'>${item}</li>`;
    }else{
      str += `<li data-page=${item}>${item}</li>`;
    }
  });
  str += '</ul>';
  return str;
}
