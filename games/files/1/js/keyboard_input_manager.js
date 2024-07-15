function KeyboardInputManager(){this.events={},window.navigator.msPointerEnabled?(this.eventTouchstart="MSPointerDown",this.eventTouchmove="MSPointerMove",this.eventTouchend="MSPointerUp"):(this.eventTouchstart="touchstart",this.eventTouchmove="touchmove",this.eventTouchend="touchend"),this.listen()}KeyboardInputManager.prototype.on=function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)},KeyboardInputManager.prototype.emit=function(e,t){(e=this.events[e])&&e.forEach(function(e){e(t)})},KeyboardInputManager.prototype.listen=function(){var o,a,r=this,i={38:0,39:1,40:2,37:3,75:0,76:1,74:2,72:3,87:0,68:1,83:2,65:3},e=(document.addEventListener("keydown",function(e){var t=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey,n=i[e.which];t||(void 0!==n&&(e.preventDefault(),r.emit("move",n)),32===e.which&&r.restart.bind(r)(e))}),document.querySelector(".retry-button"));e.addEventListener("click",this.restart.bind(this)),e.addEventListener(this.eventTouchend,this.restart.bind(this)),(e=document.querySelector(".keep-playing-button")).addEventListener("click",this.keepPlaying.bind(this)),e.addEventListener("touchend",this.keepPlaying.bind(this)),(e=document.getElementsByClassName("game-container")[0]).addEventListener(this.eventTouchstart,function(e){!window.navigator.msPointerEnabled&&1<e.touches.length||1<e.targetTouches||(a=window.navigator.msPointerEnabled?(o=e.pageX,e.pageY):(o=e.touches[0].clientX,e.touches[0].clientY),e.preventDefault())}),e.addEventListener(this.eventTouchmove,function(e){e.preventDefault()}),e.addEventListener(this.eventTouchend,function(e){var t,n,i;!window.navigator.msPointerEnabled&&0<e.touches.length||0<e.targetTouches||(e=window.navigator.msPointerEnabled?(t=e.pageX,e.pageY):(t=e.changedTouches[0].clientX,e.changedTouches[0].clientY),t-=o,n=Math.abs(t),e-=a,i=Math.abs(e),10<Math.max(n,i)&&r.emit("move",i<n?0<t?1:3:0<e?2:0))})},KeyboardInputManager.prototype.restart=function(e){e.preventDefault(),this.emit("restart")},KeyboardInputManager.prototype.keepPlaying=function(e){e.preventDefault(),this.emit("keepPlaying")};