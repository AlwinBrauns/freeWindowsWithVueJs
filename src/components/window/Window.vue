<template>
<div class="window" :style="posCSS">
  <window-header
    @change-pos="changePos"
    :window-header-id="createId()"
    :window-width="150"
    @delete-me="deleteWindow"
  ></window-header>
  <window-body></window-body>
</div>
</template>

<script>
export default {
    data() {
        return {
            x: 0,
            y: 0,
        }
    },
    computed: {
        posCSS() {
            return {transform: 'translate('+(this.x)+'px,'+(this.y)+'px)'};
        }
    },
    methods: {
        changePos(x,y){
            this.x = x;
            this.y = y;
        },
        createId(){
            //Could be more random and unique
            let myID = (Math.random()*(200)).toString();
            myID = myID.replace(/\./g,'Z');
            myID = myID.replace(/[0]/g,'a');
            myID = myID.replace(/[1]/g,'c');
            myID = myID.replace(/[2]/g,'x');
            myID = myID.replace(/[3]/g,'f');
            myID = myID.replace(/[4]/g,'w');
            myID = myID.replace(/[5]/g,'o');
            myID = myID.replace(/[6]/g,'k');
            myID = myID.replace(/[7]/g,'H');
            myID = myID.replace(/[8]/g,'U');
            myID = myID.replace(/[9]/g,'p');
            return (myID);
        },
        deleteWindow(id){
            alert('not implemented yet, would delte window with ID: ' + id);
        }
    },
}
</script>

<style>
    .window{
        background-color: #111122;
        width: 300px;
        height: 150px;
        box-shadow: 2px 2px 2px #888888;
        position: absolute;
    }
</style>