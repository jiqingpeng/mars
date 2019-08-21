<template>
  <div class="main">
    <el-row
      type="flex"
      justify="space-between"
      align="middle"
      :gutter="20"
      style="height:10%;"
    >
      <el-col :span="20">
        <el-form
          ref="form"
          :model="form"
          style="display:flex;align:center;"
        >

          <el-form-item
            label="手机号"
            style="display:flex;"
          >
            <el-input v-model="form.name"></el-input>
          </el-form-item>

        </el-form>

      </el-col>
      <el-col
        :span="4"
        style="display:flex;justify-content: flex-end;
      "
      >
        <el-button
          type="primary"
          size="small"
          @click="handleSearch"
        >搜索</el-button>
        <el-button
          type="primary"
          size="small"
          @click="handleAdd"
        >新增</el-button>
      </el-col>

    </el-row>

    <el-table
      :data="tableData"
      border
    >

      <el-table-column
        prop="id"
        label="id"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="账号"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="pwd"
        label="密码"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="created_at"
        label="创建时间"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width=280
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-row
      type="flex"
      justify="center"
      :gutter="10"
    >
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </el-row>
    <addmodal
      :dialogFormVisible.sync="dialogFormVisible"
      @updateInit="updateInit"
      :modal="modal"
    ></addmodal>
  </div>
</template>

<script>
import addmodal from './components/add'
export default {
  name: 'account',
  data () {
    return {
      tableData: [],
      form: {},
      modal: {
        title: '新增用户信息'
      },
      dialogFormVisible: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.http(this.api.phone_get, null, null, res => {
        this.tableData = res
      })
    },
    updateInit () {
      this.getData()
    },
    handleAdd () {
      this.dialogFormVisible = true
    },
    handleSearch () {
      this.getData()
    }
  },
  components: {
    addmodal
  }
}
</script>
<style lang="less" scoped>
.el-form-item {
  margin-bottom: 0;
}
.el-row {
  margin: 20px 0;
}
</style>
