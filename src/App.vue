<template>
  <window :window-id="generateID()"></window>
</template>

<script>
export default {
  data() {
    return {
      
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
</style>