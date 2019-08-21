<template>
  <div>
    <el-dialog
      :title="modal.title"
      :visible.sync="dialogFormVisible"
      :modal="false"
      :show-close="false"
      width="30%"
      :close-on-click-modal="false"
    >
      <el-form :model="form" label-width="80px">

        <el-form-item label="账号" >
          <el-input v-model="form.phone"></el-input>
        </el-form-item>

        <el-form-item label="密码" >
          <el-input v-model="form.pwd"></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="handleCancel">取 消</el-button>
        <el-button
          type="primary"
          @click="handleSure"
        >确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
export default {
  name: 'add',
  props: {
    modal: Object,
    dialogFormVisible: Boolean
  },
  data () {
    return {
      form: {}
    }
  },
  created () {},
  computed: {
    dialog () {
      return this.dialogFormVisible
    }
  },
  methods: {
    handleSure () {
      this.http(this.api.phone_add, null, this.form, res => {
        if (res.status) {
          this.$message({
            message: '新建成功',
            type: 'success'
          })
          this.$emit('update:dialogFormVisible', false)
          this.$emit('updateInit')
        }
      })
      // this.$emit('update:dialogFormVisible', false)
    },
    handleCancel () {
      this.$emit('update:dialogFormVisible', false)
    },

    submit () {

    }

  },
  watch: {
    dialogFormVisible (n) {

    }
  }
}
</script>
<style lang="less">
// .el-form-item {
// width:100%;
//   display: flex;
// }
</style>
