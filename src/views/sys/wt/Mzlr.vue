<template>

  <el-form ref="form" :model="form" label-width="80px" style="margin-left: 40%">
    <el-form-item label="病人姓名">
      <el-input v-model="form.Pname" style="width: 30%"></el-input>
    </el-form-item>
    <el-form-item label="病人年龄">
      <el-input v-model="form.Page" style="width: 30%"></el-input>
    </el-form-item>
    <el-form-item label="病人性别">
      <el-radio-group v-model="form.Psex">
        <el-radio label="男" value="男"></el-radio>
        <el-radio label="女" vlaue="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="医生">
      <el-cascader
        placeholder="搜索医生姓名"
        :options="options"
        filterable></el-cascader>
    </el-form-item>
    <el-form-item label="挂号费用">
      <el-input v-model="form.Rcost" style="width: 30%"></el-input>
    </el-form-item>
    <el-form-item label="日期">
      <el-input
        v-model="form.Rtime"
        :disabled="true" style="width: 30%">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button  type="success" @click="onSubmit" style="margin-left: 8%">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        data() {
            return {
                options:[{}],
                form: {
                    timer:'',
                    Psex:'',
                    Page:'',
                    Pname: '',
                    Rcost: '',
                    Rtime: new Date(),
                    delivery: false,
                }
            }
        },
        created() {
            var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
            this.timer = setInterval(function() {
                _this.Rtime = //修改数据date
                    new Date().getFullYear() +
                    "-" +
                    (new Date().getMonth() + 1) +
                    "-" +
                    new Date().getDate() +
                    " " +
                    new Date().getHours() +
                    ":" +
                    new Date().getMinutes() +
                    ": " +
                    new Date().getSeconds();
            }, 1000);
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
            }
        },
        methods: {
            onSubmit() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        let url = this.axios.urls.SYSTEM_MZ_LR;
                        this.axios.post(url, this.form).then(resp => {
                            console.log("123");
                            console.log(resp);
                            if (resp.data.code == 0) {
                                this.$message({
                                    message: resp.data.msg,
                                    type: 'warning'
                                });
                            } else {
                                // this.search();
                                 this.doClearForm();
                                 this.$message({
                                    message: resp.data.msg,
                                    type: 'success'
                                });
                            }
                        }).catch(function(error) {
                            console.log("操作失败");
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });

            },
            doClearForm:function () {
                this.form.Pname = null;
                this.form.Page = null;
                this.form.Psex = null;
                this.form.Rcost = null;
            }
        }
    }
</script>

<style >

</style>
