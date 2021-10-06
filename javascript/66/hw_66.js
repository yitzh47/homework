(function () {
  'use strict';

  const colorTable = get("colorTable");
  const colorHeader = get("colorHeader");
  const colorDisplay = get("colorDisplay");
  const clrArr = get("colorArray");
  const clrRGB = get("colorRGB");
  const clrRandom = get("colorRandom");

  function get(id) {
    return document.getElementById(id);
  }

  function setColor(newColor) { 
    addRow(colorHeader.style.color, newColor, new Date().toLocaleTimeString());
    colorDisplay.style.backgroundColor = newColor;
    colorHeader.style.color = newColor;
  }

  function addRow(oldColor, newColor, time) {

    const row = colorTable.insertRow();
    const oldCell = row.insertCell();
    const newCell = row.insertCell();
    const timeCell = row.insertCell();
    oldCell.innerText = oldColor;
    newCell.innerText = newColor;
    timeCell.innerText = time;
    row.addEventListener('click', () => {
      setColor(newColor);
    });
  }

  let noChangeArr;

  clrArr.addEventListener('click', () => {
    const arr = ["red", "green", "blue"];

    if (!noChangeArr) {
      clrArr.innerText = "Stop Colors By Array";
      let i = 0;
      noChangeArr = setInterval(() => {
        setColor(arr[i++]);
        if (i === arr.length) {
          i = 0;
        }
      }, 1000);
    }
    else {
      noChangeArr = clearInterval(noChangeArr);
      clrArr.innerText = "Start Colors By Array";
    }
  });

  let noChangeRGB;

  clrRGB.addEventListener('click', () => {

    if (!noChangeRGB) {
      clrRGB.innerText = "Stop Colors By RGB";
      let r = 0;
      let rGo = false;
      let g = 0;
      let gGo = false;
      let b = 0;
      noChangeRGB = setInterval(() => {

        if (r <= 255) {
          if (g <= 255) {
            if (b <= 255) {
              setColor("rgb(" + r + "," + g + "," + b + ")");
              b += 1;
            }
            if (gGo) {
              g += 1;
              gGo = false;
            }
          }
          if (rGo) {
            r += 1;
            rGo = false;
          }
        }
        if (b > 255) {
          b = 0;
          gGo = true;
        }
        if (g > 255) {
          g = 0;
          gGo = true;
          rGo = true;
        }
      }, 10);
    }
    else {
      noChangeRGB = clearInterval(noChangeRGB);
      clrRGB.innerText = "Start Colors By RGB";
    }
  });

  let noChangeRandom;

  clrRandom.addEventListener('click', () => {

    if (!noChangeRandom) {
      clrRandom.innerText = "Stop Colors By Random";
      noChangeRandom = setInterval(() => {
        setColor("rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")");
      }, 1000);
    }
    else {
      noChangeRandom = clearInterval(noChangeRandom);
      clrRandom.innerText = "Start Colors By Random";
    }
  });

}());