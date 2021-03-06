<template>
    <div class="window-menu">
      <button @click="addWindow">Add Window</button>
      <h3>Free Windows</h3>
    </div>
    <window v-for="window in windows" :key="window.id" :window-id="window.id"></window>
</template>

<script>
export default {
  data() {
    return {
      windows: [
      ],
    }
  },
  methods: {
    generateID(){
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
      return myID;
    },
    addWindow(){
      this.windows.push({id: this.generateID()});
    }
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
  body{
    background-color: #DDDDFF;
  }

  .window-menu{
    width: 100%;
    height: 4em;
    background-color: #111122;
    display: flex;
    color: #DDDDFF;
    box-shadow: 0px 2px 4px #8888DD;
  }

  .window-menu h3{
    position: relative;
    height: 50%;
    top: 58%;
    left: 10%;
    transform: translate(0%, -50%);
    vertical-align: middle;
  }

  .window-menu button{
    position: relative;
    color: #DDDDFF;
    padding: 0.5em;
    margin-left: 1em;
    height: 50%;
    background-color: #222233;
    top: 25%;

    font-weight: bold;
    border: none;
    outline: none;
    box-shadow: 0px 3px 2px black;
  }
  .window-menu button:active{
    transform: translateY(3px);
    box-shadow: 0px 0px 2px black;

  }
</style>