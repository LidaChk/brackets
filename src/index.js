module.exports = function check(str, bracketsConfig) {
    stek = [];
    let ret = true;
    str.split('').forEach(el => {
        bracketsConfig.forEach(cfg => {
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
                    ret = false;
                  }
                } else ret = false;
              }
            });
        });
      return stek.length === 0 && ret;
    }
