<template>
  <div class="window-body">
      <textarea placeholder="Notizen..."></textarea>
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
  .window-body textarea{
    padding: 0.3em;
    resize: none;
    background-color: rgba(255, 255, 255, 0);
    color: #DDDDFF;
  }

</style>