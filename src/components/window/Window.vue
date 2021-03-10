<template>
<div class="window" 
:style="styleCSS" 
@mousedown="differenceBetweenClickAndElement($event); borderHandler($event, true);"
@touchstart="differenceBetweenClickAndElement($event); borderHandler($event, true);"
@mouseup="borderHandler($event, false)"
@touchend="borderHandler($event, false)"
>
  <window-header
    @change-pos="changePos"
    :window-header-id="windowId"
    @delete-me="deleteWindow"
    @mousedown="differenceBetweenClickAndElement($event);"
    @touchstart="differenceBetweenClickAndElement($event);"
  ></window-header>
  <window-body
    class="window-body"
  ></window-body>
</div>
</template>

<script>
var windowWidth = 200;
var windowHeight = 150;
export default {
    props: ['windowId', 'windowZ'],
    emits: {
        'delete-me': function(id){
        return id?true:false;
        },
        'on-focus': function(id){
        return id?true:false;
        },
    },
    created() {
        window.addEventListener('mouseup', ()=>{
            this.setBorderPressed(false);
            this.setWindowWidth();
            });
        window.addEventListener('touchend', ()=>{
            this.setBorderPressed(false);
            this.setWindowWidth();
            });
        window.addEventListener('mousedown', this.keyDownWindow);
        window.addEventListener('mousedown', this.differenceBetweenClickAndWindow);

        window.addEventListener('mouseup', this.keyUpWindow);
        window.addEventListener('touchstart', this.keyDownWindow);
        window.addEventListener('touchstart', this.differenceBetweenClickAndWindow);

        window.addEventListener('touchend', this.keyUpWindow);
        window.addEventListener('mousemove', this.mouseMoveWindowOn);
        window.addEventListener('mousemove', this.changeSize);
        window.addEventListener('touchmove', this.mouseMoveWindowOn);
        window.addEventListener('touchmove', this.changeSize);
    },
    data() {
        return {
            x: 0,
            y: 0,
            dx: 0,
            dy: 0,
            wdx: 0,
            wdy: 0,
            width: windowWidth,
            height: windowHeight,
            borderSize: 7,
            borderPressed: false,
            mouseDownWindow: false,
            mouseMoveWindow: false,
            fps: 60,
            
        }
    },
    computed: {
        styleCSS() {
            return {
                transform: 'translate('+(this.x)+'px,'+(this.y)+'px)',
                width: this.width.toString() + 'px',
                height: this.height.toString() + 'px',
                zIndex: this.windowZ,
                border: this.borderSize + 'px solid #8888DD'
            };
        }
    },
    methods: {
        borderHandler(event, state){
            var x = event.offsetX;
            var y = event.offsetY;
            if(x===undefined){
                x = event.touches[0]?.clientX;
                y = event.touches[0]?.clientY;
            }
            if(
                (x < 0 || x > this.width)
                ||
                (y < 0 || y > this.height)
              )
            {
                this.setBorderPressed(state);
            }
        },
        setBorderPressed(state){
            this.borderPressed = state;
        },
        setWindowWidth(){
            windowWidth = this.width;
            windowHeight = this.height;
        },
        changePos(x,y){
            this.x = x - this.dx;
            this.y = y - this.dy;
        },
        differenceBetweenClickAndElement(event){
            this.$emit('on-focus', this.windowId);
            this.dx = ((((event.clientX!==undefined)?event.clientX:(event.touches[0].clientX))) - this.x);
            this.dy = ((((event.clientY!==undefined)?event.clientY:(event.touches[0].clientY))) - this.y);
            console.log("In Element: new diff set " + this.dx + " " + this.dy);
        },
        differenceBetweenClickAndWindow(event){
            this.wdx = ((((event.clientX!==undefined)?event.clientX:(event.touches[0].clientX))));
            this.wdy = ((((event.clientY!==undefined)?event.clientY:(event.touches[0].clientY))));
            console.log("Window: new diff set " + this.wdx + " " + this.wdy);
        },
        deleteWindow(id){
            this.$emit('delete-me', id)
        },
        keyDownWindow(){
            this.mouseDownWindow=true;
        },
        keyUpWindow(){
            this.mouseDownWindow=false;
            this.mouseMoveWindow=false;
            this.setBorderPressed(false);
        },
        mouseMoveWindowOn(){
            this.mouseMoveWindow=true;
        },
        async changeSize(event){
            event.preventDefault();
            await new Promise(resolve => setTimeout(resolve, 1000/this.fps));
            if((this.mouseMoveWindow && this.borderPressed) || (this.borderPressed && !this.mouseDownWindow)){
                let clientX = ((event.clientX!==undefined)?event.clientX:(event.touches[0].clientX));
                let clientY = ((event.clientY!==undefined)?event.clientY:(event.touches[0].clientY));
                
                
                
                //let offsetX = ((event.offsetX!==undefined)?event.offsetX:(event.touches[0].offsetX));
                //let offsetY = ((event.offsetY!==undefined)?event.offsetY:(event.touches[0].offsetY));

                let diffX = (clientX) - this.wdx;
                let diffY = (clientY) - this.wdy;
                console.log("size window... DX: " + diffX + " DY: " + diffY + "\n\n");



                //console.log(event)
                this.width = windowWidth + diffX;
                this.height = windowHeight + diffY;
            }
        },
    },
}
</script>

<style>
    .window{
        background-color: #111122;
        box-shadow: 2px 2px 2px #888888;
        position: absolute;
    }
    
</style>