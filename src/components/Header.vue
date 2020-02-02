<template>
  <div class="skew">
    <div class="bg"></div>
    <h1 class="animated lightSpeedIn">Start your vue adventure!</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    padding: 40px;
    font-size: 36px;
}

.skew {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#258e8e, #85e0e0);
    transform: skewY(-8deg);
    transform-origin: top left;
}

</style>
