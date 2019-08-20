<template>
  <div class="home">
    <div class="nav">
      <el-row>
        <el-col>

          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#000"
            text-color="#fff"
            active-text-color="#05bac5"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>账号</span>
              </template>
              <el-menu-item index="1-1">账号列表</el-menu-item>
              <el-menu-item index="1-2">账号信息</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户</span>
              </template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>设置</span>
              </template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
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
export default {
  name: 'Home',
  data () {
    return {}
  },
  created () {

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
  width: 14%;
  height: 100%;
  background: #000;
}
.top {
  position: fixed;
  width: 100%;
  height: 4%;
  background: #000;
  color: #fff;
}
.item{
  width:40px;
}
.main{
  position:fixed;
  width:86%;
  top:4%;
  left:14%;
  height:100%;
}
</style>
<style lang="less">

</style>
