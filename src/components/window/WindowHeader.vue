<template>
  <div 
  class="window-header"
  :id="windowHeaderId"
  @mousemove="changePos"
  @touchmove.prevent="changePos"
  @mousedown="mouseDownHeader = true"
  @mouseup="mouseDownHeader = false"
  @touchstart="keyDownHeader"
  @touchend="keyUpHeader"
  >
    <div class="close" @click="this.$emit('delete-me', windowHeaderId)"><p>X</p></div>
  </div>
</template>

<script>
export default {
    props: ['windowHeaderId'],
    data() {
        return {
            mouseDownWindow: false,
            mouseDownHeader: false,
            mouseMoveWindow: false,
            fps: 60,
        }
    },
    created:function(){
        window.addEventListener('mousedown', this.keyDownWindow);
        window.addEventListener('mouseup', this.keyUpWindow);
        window.addEventListener('touchstart', this.keyDownWindow);
        window.addEventListener('touchend', this.keyUpWindow);
        window.addEventListener('mousemove', this.mouseMoveWindowOn);
        window.addEventListener('mousemove', this.changePos);
        window.addEventListener('touchmove', this.mouseMoveWindowOn);
        window.addEventListener('touchmove', this.changePos);
    },
    emits: {
        'change-pos': function(x,y){
            //warning out of box
            return (x>=0&&y>=0?true:console.warn('OUT OF WINDOW'));
        },
        'delete-me': function(id){
            return id;
        }
    },
    methods: {
        keyDownHeader(){
            this.mouseDownHeader = true;
        },
        keyUpHeader(){
            this.mouseDownHeader = false;
        },
        keyDownWindow(){
            this.mouseDownWindow=true;
        },
        keyUpWindow(){
            this.mouseDownWindow=false;
            this.mouseMoveWindow=false;
            this.keyUpHeader();
        },
        mouseMoveWindowOn(){
            this.mouseMoveWindow=true;
        },
        async changePos(event){
            await new Promise(resolve => setTimeout(resolve, 1000/this.fps));
            if((this.mouseMoveWindow && this.mouseDownHeader) || (this.mouseDownHeader && !this.mouseDownWindow)){
                this.$emit('change-pos', (((event.clientX!==undefined)?event.clientX:(event.touches[0].clientX))), (((event.clientY!==undefined)?event.clientY:(event.touches[0].clientY))))
            }
        },
    },

}
</script>

<style>
    .window-header{
        background-color: #333366;
        width: 100%;
        height: 30px;
        cursor: move;
        display: grid;
    }
    .close{
       background-color: #8888DD;
       width: 23px;
       height: 23px;
       border-radius: 100%;
       font-family: Arial, Helvetica, sans-serif;
       font-weight: bold;
       position: absolute;
       top: 15px;
       right: 0;
       transform: translate(-50%,-50%);
       color: #DDDDFF;
    }
    .close p {
       text-align: center;
       font-size: 12px;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%,-46%);
    }
    .close:active{
       background-color: #DDDDFF;

    }
</style>