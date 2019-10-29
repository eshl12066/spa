<template>
  <div>
    <el-form :inline="true" class="user-search">
      <el-form-item label="搜索：">
        <el-input size="small" v-model="formData.rno" placeholder="挂号单号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table size="small" :data="tableData" style="width: 100%;">
      <el-table-column prop="Rno" label="挂号单号"></el-table-column>
      <el-table-column prop="Pname" label="病人姓名"></el-table-column>
      <el-table-column prop="Pid" label="病人编号"></el-table-column>
      <el-table-column prop="Psex" label="病人性别"></el-table-column>
      <el-table-column prop="Page" label="病人年龄"></el-table-column>
      <el-table-column prop="Rcost" label="挂号费用"></el-table-column>
      <el-table-column prop="Sname" label="科室"></el-table-column>
      <el-table-column prop="Dname" label="医生姓名"></el-table-column>
      <el-table-column prop="Rtime" label="挂号日期"></el-table-column>
    </el-table>
    <!-- 分页条 -->
    <el-pagination style="margin-top: 20px;" @size-change="handleSizeChange" @current-change="handleCurrentChange"
                   :current-page="currentPage" :page-sizes="[10, 20, 30, 50]" :page-size="100"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="total">
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "Mzcx",
        data() {
            return {
                Rno: null,
                tableData: [],
                currentPage: 1,
                rows: 10,
                total:0,
                pageBean: {
                    page: 1,
                    rows: 10,
                    total:0
                },
                formData: {
                    rno:  this.rno,
                    page: this.currentPage,
                    rows: this.rows,
                }
            }
        },
        methods: {
            //查询
            search() {
                this.doSearch();
            },
            doSearch() {
                let url = this.axios.urls.SYSTEM_MZ_CX;
                var formData = {
                    page: this.currentPage,
                    rows: this.rows,
                    rno: this.rno,
                }
                /* 请求后台数据 */
                this.axios.post(url, this.formData).then((response) => {
                    console.log(response.data)
                    /* 将数据展示到页面 */
                    this.tableData = response.data.result;
                    /* 查看pageBean的数据 */
                    // this.pageBean = response.data.pageBean;
                    this.total=response.data.pageBean.total
                }).catch((response) => {
                    console.log(response);
                });
            },
            //这是当一页展示数据数量变化的时候的回掉函数
            handleSizeChange: function(rwos) {
                this.pageBean.page = 1;
                this.pageBean.rows = rwos;
                this.search();
            },
            //当当前页该改变的时候调用
            handleCurrentChange: function(page) {
                this.pageBean.page = page;
                this.search();
            }
        },

        created() {
            this.doSearch()
        }

    }
</script>

<style scoped>

</style>
