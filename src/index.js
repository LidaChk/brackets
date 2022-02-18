module.exports = function check(str, bracketsConfig) {
    let stek = [];
    let ret = true;
    let strArr = str.split('');

    for (let j =0; j< strArr.length; j++){

      let el = strArr[j];

      for ( let i = 0; i< bracketsConfig.length; i++)
      {
        let cfg = bracketsConfig[i];

        if (el === cfg[0] && el === cfg[1]) {
          if(stek[0] === el){ 
            stek.shift();
          }
          else {
            stek.unshift(el);
          }
        } else {
          if (el === cfg[0]) {
            stek.unshift(el);
          } else if (el === cfg[1]) {
            if (stek[0] != cfg[0] || stek.shift() === undefined) {
              return false;
            }
          } 
        }
      }
    }

      return stek.length === 0;
    }
