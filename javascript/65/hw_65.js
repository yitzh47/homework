(function () {
    'use strict';

    function get(id){
      return document.getElementById(id);
    }

    function setColor(color){
      get("colorDisplay").style.backgroundColor = color;
      get("colorHeader").style.color = color;
      console.log(color);
    }

    let noChangeArr;
    const clrArr = get("colorArray");
    clrArr.addEventListener('click', () => {
      const arr = ["Red", "Green", "Blue"];
      
      if(!noChangeArr){
        clrArr.innerText = "Stop Colors By Array";
        let i = 0;
        noChangeArr = setInterval(() => {
          setColor(arr[i++]);
          if (i === 3){
            i = 0;
          }
        }, 1000);
      }
      else{
        noChangeArr = clearInterval(noChangeArr);
        clrArr.innerText = "Start Colors By Array";
      }
    });

    let noChangeRGB;
    const clrRGB = get("colorRGB");
    clrRGB.addEventListener('click', () => {
      
      if(!noChangeRGB){
        clrRGB.innerText = "Stop Loop RGB";
        let r = 0;
        let rGo = false;
        let g = 0;
        let gGo = false;
        let b = 0;
        noChangeRGB = setInterval(() => {

          if(r<=255){
            if(g<=255){
              if(b<=255){
                setColor("rgb(" + r + "," + g + "," + b + ")");
                b++;
              }
              if(gGo){
                g++;
                gGo = false;
              }
            }
            if(rGo){
              r++;
              rGo = false;
            }
          }
          if(b === 255){
            b = 0;
            gGo = true;
          }
          if(g === 255){
            g = 0;
            gGo = true;
            rGo = true;
          }
        }, 100);
      }
      else{
        noChangeRGB = clearInterval(noChangeRGB);
        clrRGB.innerText = "Start Loop RGB";    
      }
    });

    let noChangeRandom;
    const clrRandom = get("colorRandom");
    clrRandom.addEventListener('click', () => {
      
      if(!noChangeRandom){
        clrRandom.innerText = "Stop Loop Random";
        noChangeRandom = setInterval(() => {

            setColor("rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")");
                    }, 1000);
      }
      else{
        noChangeRandom = clearInterval(noChangeRandom);
        clrRandom.innerText = "Start Loop Random";    
      }
    });


  }());