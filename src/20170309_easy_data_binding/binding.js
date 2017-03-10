(function($){
  let domList = [];

  let bindModal = function bindModal(obj, prop, dom) {
    if(domList.indexOf(dom) === -1){
      domList.push(dom);

      // 针对 input、textarea 绑定 input 事件，动态更新 model
      const nodeName = dom.nodeName.toLowerCase();
      if(nodeName.indexOf('input') !== -1 || nodeName.indexOf('textarea') !== -1){
        // input 可以实时更新
        // change 可以实现懒更新
        dom.addEventListener('input', (e) => {
          obj[prop] = e.target.value;
        });
      }
    }

    Object.defineProperty(obj, prop, {
      get: () => {
        let ret;

        if('value' in domList[0]){
          ret = domList[0].value;
        }else if('innerText' in domList[0]){
          ret = domList[0].innerText;
        }

        return ret;
      },
      set: (newVal) => {
        domList.forEach((item) => {
          if('value' in item){
            item.value = newVal;
          }else if('innerText' in item){
            item.innerText = newVal;
          }
        });
      },
      configurable: true
    });
  }

  $.bindModal = bindModal;
}(window))
