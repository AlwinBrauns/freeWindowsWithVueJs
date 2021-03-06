<template>
  <div class="window-body">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .window-body{
    color: #DDDDFF;
    width: 100%;
    height: 70%;
    display:grid;
    overflow: auto;
    word-wrap: break-word;
  }
  .window-body p{
    padding: 0.3em;
  }
  *::-webkit-scrollbar,
  *::-webkit-scrollbar-thumb {
    width: 25px;
    border-radius: 20px;
    background-clip: padding-box;
    border: 10px solid transparent;
  } 

  *::-webkit-scrollbar-thumb {        
    box-shadow: inset 0 0 0 10px;
  }

</style>