<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      document.title = 'VirtualB';
    }
  }
</script>

<style lang="scss">
  :root {
    --sidebar-width: 250px;
    --chat-height: 250px;
  }

  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
  }

  #app {
    font-family: 'Noto Sans JP', sans-serif;
    background-color: var(--primary);
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    border-radius: 15px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
