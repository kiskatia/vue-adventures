<template>
  <div class="header">
    <!-- <div class="skew"> -->
      <!-- <div class="bg"></div> -->
      <!-- <h1 class="animated lightSpeedIn">Start your vue adventure!</h1> -->
      <h1 class="text">Start your vue adventure!</h1>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-image: linear-gradient(#258e8e, #85e0e0);
  height: 660px;
  transform: skewY(-6deg);
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072);
}

.text{
    font-weight: 900;
    font-size: 140px;
    text-align: center;
    margin: 0 auto;

    /*starry night test*/
    background-color:black;
    background-image:
    radial-gradient(white, rgba(255,255,255,.2) 3px, transparent 40px),
    radial-gradient(white, rgba(255,255,255,.15) 2px, transparent 30px),
    radial-gradient(white, rgba(255,255,255,.1) 3px, transparent 40px),
    radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 4px, transparent 30px);
    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px; 
    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
    background-attachment: fixed;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

h1 {
  padding-top: 120px;
  font-size: 48px;
}

/*.skew {
    position: relative;
    height: 500px;
    overflow: hidden;
}*/

/*.bg {
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
}*/

</style>
