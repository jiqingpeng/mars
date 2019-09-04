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
            <el-input v-model="form.phone"></el-input>
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
       <template slot-scope="scope">
          {{dayjs(scope.row.created_at).format('YYYY-MM-DD HH:mm:ss')}}
        </template>
      </el-table-column>
      <el-table-column
        prop="updated_at"
        label="更新时间"
        align="center"
      >
        <template slot-scope="scope">
          {{dayjs(scope.row.updated_at).format('YYYY-MM-DD HH:mm:ss')}}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width=280
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-row
      type="flex"
      justify="center"
      :gutter="10"
      align="middle"
    >
      <span style="">共{{total}}条</span>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pazeSize"
        :total="total"
        :current-page="currentPage"
        @current-change="handCurrent"
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
import dayjs from 'dayjs'
export default {
  name: 'account',
  data () {
    return {
      tableData: [],
      form: {},
      total: null,
      currentPage: 0,
      pazeSize: 10,
      modal: {
        title: '新增用户信息'
      },
      dialogFormVisible: false
    }
  },
  computed: {
    dayjs () {
      return dayjs
    }
  },
  mounted () {
    this.getData(this.pazeSize, this.currentPage)
  },
  created () {},
  methods: {
    getData (limit, offset) {
      const { phone } = this.form
      const query = {
        limit,
        offset,
        phone
      }
      this.fetch(this.api.phone_get, null, query, res => {
        this.tableData = res.data
        this.total = res.total
      })
    },
    handCurrent (page) {
      this.getData(this.pazeSize, (page - 1) * this.pazeSize)
    },
    updateInit () {
      this.getData(this.pazeSize, this.currentPage)
    },
    handleDelete (id) {
      this.http(this.api.phone_delete, id, null, res => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        this.getData(this.pazeSize, this.currentPage)
      })
    },
    handleEdit (row) {
      this.modal = {
        ...row,
        title: '编辑用户信息'
      }

      this.dialogFormVisible = true
    },
    handleAdd () {
      this.modal = {
        title: '新增用户信息'
      }
      this.dialogFormVisible = true
    },
    handleSearch () {
      this.getData(this.pazeSize, this.currentPage)
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
