let t;const e={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};e.stopBtn.setAttribute("disabled","true");e.startBtn.addEventListener("click",(()=>{e.startBtn.setAttribute("disabled","true"),e.stopBtn.removeAttribute("disabled"),t=setInterval((()=>{e.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.stopBtn.addEventListener("click",(()=>{clearInterval(t),e.startBtn.removeAttribute("disabled"),e.stopBtn.setAttribute("disabled","true")}));
//# sourceMappingURL=01-color-switcher.89ca621d.js.map
