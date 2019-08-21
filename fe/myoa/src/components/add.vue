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
      <el-form :model="form" label-width="80">

        <el-form-item label="昵称">
          <el-input v-model="form.nick"></el-input>
        </el-form-item>

        <el-form-item label="性别">
          <el-select
            v-model="form.region"
            placeholder="请选择性别"
          >
            <el-option
              label="男"
              :value="0"
            ></el-option>
            <el-option
              label="女"
              :value="1"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone"></el-input>
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
      this.$emit('update:dialogFormVisible', false)
    },
    handleCancel () {
      this.$emit('update:dialogFormVisible', false)
    }

  },
  watch: {
    dialogFormVisible (n) {
      console.log(this.dialogFormVisible)
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
