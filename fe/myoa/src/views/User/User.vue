<template>
  <div class="main">
    <el-row
      type="flex"
      justify="space-between"
      align="middle"
      :gutter="20"
    >
      <el-col :span="20">
        <el-form
          ref="form"
          :model="form"
          style="display:flex;align:center;"
        >

          <el-form-item
            label="昵称"
            style="display:flex;"
          >
            <el-input v-model="form.nick"></el-input>
          </el-form-item>
          <el-form-item
            label="性别"
            style="display:flex;margin:0 10px;"
          >
            <el-input v-model="form.sex"></el-input>
          </el-form-item>
          <!-- <el-form-item
            label="手机号"
            style="display:flex;"
          >
            <el-input v-model="form.phone.phone"></el-input>
          </el-form-item> -->

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
        prop="head_url"
        label="头像地址"
        width=400
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="nick"
        label="昵称"
        align="center"
        width=180
      >
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        align="center"
      >
        <template slot-scope="scope">
          {{scope.row.sex === 1 ? '男' : ' 女'}}
        </template>
      </el-table-column>
      <el-table-column
        prop="phone.phone"
        label="手机号"
        align="center"
        width=180
      >
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="创建时间"
        align="center"
         width=280
      >
      </el-table-column>
      <el-table-column
        prop="updated_at"
        label="更新时间"
        align="center"
        width=280
      >
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width=120
        fixed="right"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)"
          >编辑</el-button>

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
      :modal="modal"
      @updateInit="updateInit"
    ></addmodal>
  </div>
</template>

<script>
import addmodal from './components/add.vue'
import dayjs from 'dayjs'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'user',
  data () {
    return {
      tableData: [],
      form: {},
      modal: {
        title: '新增用户信息'
      },
      dialogFormVisible: false,
      total: null,
      currentPage: 0,
      pazeSize: 10
    }
  },
  mounted () {
    this.getData(this.pazeSize, this.currentPage)
    // console.log(this.count)
    // console.log(this.$store.getters.count2)
    // this.$store.commit('increment', {num: 10})
    this.increment({num: 10})
    console.log(this.count)
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  methods: {
    ...mapMutations([
      'increment' // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

    ]),
    getData (limit, offset) {
      const { sex, phone, nick } = this.form
      const query = {
        limit,
        offset,
        phone,
        sex,
        nick
      }

      this.fetch(this.api.info_get, null, query, res => {
        this.tableData = res.data.map(item => {
          item.created_at = dayjs(item.created_at).format('YYYY-MM-DD HH:mm:ss')
          item.updated_at = dayjs(item.updated_at).format('YYYY-MM-DD HH:mm:ss')
          return item
        })
        this.total = res.total
      })
    },
    updateInit () {
      this.getData(this.pazeSize, this.currentPage)
    },
    handleEdit (row) {
      this.modal = {
        ...row,
        title: '编辑用户信息'
      }

      this.dialogFormVisible = true
    },
    handCurrent (page) {
      this.getData(this.pazeSize, (page - 1) * this.pazeSize)
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
