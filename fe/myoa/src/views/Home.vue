<template>
  <div class="home">
    <div class="nav">
      <el-row>
        <el-col>

          <el-menu
            default-active="/user"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#000"
            text-color="#fff"
            active-text-color="#05bac5"
            router
            style="width:100%;"
          >
            <el-submenu
              :index="item.path"
              v-for="item in menuRouter"
              :key=item.index
            >
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item
                v-for="submenu in item.children"
                :key=submenu.index
                :index="submenu.path"
              >{{submenu.title}}</el-menu-item>

            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="top">
      <el-row
        type="flex"
        justify="space-between"
        align="middle"
        style="height:100%;"
      >
        <el-col class="item">
          <div></div>
        </el-col>
        <el-col class="item">
          <div>qqq</div>
        </el-col>
      </el-row>
    </div>
    <div class="main">

      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import { menuRouter } from '../router/index'
export default {
  name: 'Home',
  data () {
    return {
      menuRouter: menuRouter
    }
  },
  computed: {
    // menuRouter () {
    //   return menuRouter[0].children
    // }
  },
  created () {
    console.log(menuRouter)
  },

  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  position: fixed;
}
.nav {
  position: fixed;
  top: 4%;
  left: 0;
  width: 10%;
  height: 100%;
  background: #000;
}
.top {
  position: fixed;
  width: 100%;
  height: 6%;
  background: #000;
  color: #fff;
}
.item {
  width: 40px;
}
.main {
  position: fixed;
  width: 84%;
  padding:0 3%;
  top: 6%;
  left: 10%;
  height: 100%;

}
.el-menu-item{
  width:100%;
  min-width: 0;
}
</style>
<style lang="less">
</style>
