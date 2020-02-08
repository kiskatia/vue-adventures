<template>
  <div class="header">
      <h1 class="text animated lightSpeedIn">Start your vue adventure!</h1>
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
  background-image: linear-gradient(#1a6565, #85e0e0);
  height: 682px;
  width: 100%;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072);
}

.text {
    font-weight: 900;
    font-size: 140px;
    text-align: center;
    margin: 0 auto;
    padding-top: 120px;
    background-image: linear-gradient(to right, #cdffeb, #cdffeb, #009f9d, #07456f, #0f0a3c);
    background-size: 500%;
    animation: bg-animation 4s infinite alternate;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

@keyframes bg-animation {
  0% {background-position: left;}
  100% {background-position: right;}
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
