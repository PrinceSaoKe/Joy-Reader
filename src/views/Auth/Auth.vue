<template>
  <div id="container">
    <img src="/mascot.png" width="360px" height="480px">
    <div id="divider"></div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
#container {
  border-radius: 30px;
  width: 1080px;
  height: 600px;
  background-color: #C9C3EF;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
}

#divider {
  background-color: #626DB7;
  width: 2px;
  height: 500px;
}
</style>
