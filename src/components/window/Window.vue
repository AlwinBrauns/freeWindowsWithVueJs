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
        window.addEventListener('mouseup', ()=>this.setBorderPressed(false));
        window.addEventListener('touchend', ()=>this.setBorderPressed(false));
    }, 
    data() {
        return {
            x: 0,
            y: 0,
            dx: 0,
            dy: 0,
            width: 200,
            height: 150,
            borderSize: 5,
            borderPressed: false,
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
        changePos(x,y){
            this.x = x - this.dx;
            this.y = y - this.dy;
        },
        differenceBetweenClickAndElement(event){
            this.$emit('on-focus', this.windowId);
            this.dx = ((((event.clientX!==undefined)?event.clientX:(event.touches[0].clientX))) - this.x)
            this.dy = ((((event.clientY!==undefined)?event.clientY:(event.touches[0].clientY))) - this.y)
        },
        deleteWindow(id){
            this.$emit('delete-me', id)
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