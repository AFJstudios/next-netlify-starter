---
title: 'Fibonacci Failure'
date: '2022-10-10'
---

Well today marks my birthday and the day I went all on failure with a techincal interview based on a sequence which ended up being the **Fibonacci** sequence. Probably had a bit of miscommunication but once learning the formula used I was able to formulate the function (this being after the interview) within 10 minutes. The code is as follows.

```javascript
function fibGet(num) {

    let fibNum = [0, 1]
    if (num == 0 || num == 1) {
        return console.log('0');
    } else {
        while (((fibNum[fibNum.length-1]) + (fibNum[fibNum.length-2]))<=num) {
            fibNum.push((fibNum[fibNum.length-1]) + (fibNum[fibNum.length-2]));
        }
        console.log(fibNum);
        return console.log((fibNum[fibNum.length-1]) + (fibNum[fibNum.length-2]));
    }

}

```