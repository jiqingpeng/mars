<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%; margin-top:20px"
    >

      <el-table-column
        prop="id"
        label="id"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="head_url"
        label="头像地址"
        width=480
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="nick"
        label="昵称"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="phone.phone"
        label="手机号"
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
    <el-row type="flex" justify="center" style="margin-top:20px;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.http(this.api.info_get, res => {
        console.log(res)
        this.tableData = res
      })
    }
  }
}
</script>
