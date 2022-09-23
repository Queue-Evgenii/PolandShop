<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="stylus">
@import 'assets/css/null';
  body {
    font-family Arial, "Helvetica Neue", Helvetica, sans-serif
    margin 0;
    width 100%
    font-size 16px
    line-height 18px
  }
  .wrapper{
    position relative
  }
  .container {
    max-width: 1860px;
    padding 0 30px
    margin: 0 auto;
    overflow: hidden;
  }
  .flex{
    display flex
    align-items center
  }
  .hover-underline{
      &:hover{
          text-decoration underline
      }
  }
  .navigation {
    padding 10px 0
    margin: 0 -10px;
  }
  .navigation a{
  padding: 0 10px;
  font-size: 14px;
  line-height: 16px;
  color: #8B8B8B;
  }
  .row{
    display flex
    column-gap: 60px
    }
    .sidebar{
      padding 40px 0 0 0
      flex: 0 0 350px
    }
    .content{
      max-width: 1500px
      min-width: 0
      flex: 1 1 1500px
    }
    @media(max-width: 1200px){
      .row{
        flex-wrap wrap
      }
      .content{
        order: 0
        flex-basis: 100%
      }
      .sidebar{
        padding 0
        order: 1
        flex-basis: 100%
      }
    }
.button{
  border-radius: 8px
  background-color: #FF0031;
  min-width 240px
  padding 16px 5px
  span{
    font-weight: 700;
    color: #fff
  }
  @media(max-width:1440px){
    width 100%
  }
  &:hover{
    border 1px solid #FF0031
    background-color: rgba(#FF0031, 0.5);
  }
}
</style>
