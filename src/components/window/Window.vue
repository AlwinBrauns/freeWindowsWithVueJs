<template>
<div class="window" :style="styleCSS">
  <window-header
    @change-pos="changePos"
    :window-header-id="windowId"
    @delete-me="deleteWindow"
    @mousedown="differenceBetweenClickAndElement"
    @touchstart="differenceBetweenClickAndElement"
  ></window-header>
  <window-body
    class="window-body"
  ></window-body>
</div>
</template>

<script>
export default {
    props: ['windowId'],
    data() {
        return {
            x: 0,
            y: 0,
            dx: 0,
            dy: 0,
            width: 200,
        }
    },
    computed: {
        styleCSS() {
            return {
                transform: 'translate('+(this.x)+'px,'+(this.y)+'px)',
                width: this.width.toString() + 'px',
            };
        }
    },
    methods: {
        changePos(x,y){
            this.x = x - this.dx;
            this.y = y - this.dy;
        },
        differenceBetweenClickAndElement(event){
            this.dx = ((((event.clientX!==undefined)?event.clientX:(event.touches[0].clientX))) - this.x)
            this.dy = ((((event.clientY!==undefined)?event.clientY:(event.touches[0].clientY))) - this.y)
        },
        deleteWindow(id){
            alert('not implemented yet, would delte window with ID: ' + id);
        },
    },
}
</script>

<style>
    .window{
        background-color: #111122;
        height: 150px;
        box-shadow: 2px 2px 2px #888888;
        position: absolute;
    }
    
</style>