<template>
  <div class="header">
      <h1 class="text">Start your vue adventure!</h1>
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
  height: 682px;
  width: 100%;
  /*transform: skewY(-6deg);*/
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
    padding-top: 120px;

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

@media only screen and (max-width: 850px) {
  .header {
    height: 400px;
    width: auto;
  }
  .text {
    font-size: 80px;
    padding-top: 80px;
  }
}

@media only screen and (max-width: 650px) {
  .header {
    height: 300px;
    width: auto;
  }
  .text {
    font-size: 54px;
    padding: 40px 10px 0;
  }
}
</style>
