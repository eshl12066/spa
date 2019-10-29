<template>

  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

    <el-form-item label="病房号" prop="Bfid">
      <el-select v-model="ruleForm.Bfid" placeholder="请选择活动区域">
        <el-option label="aa" value="aa"></el-option>
        <el-option label="bb" value="bb"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="病房床位号" prop="Bcid">
      <el-select v-model="ruleForm.Bcid" placeholder="请选择活动区域">
        <el-option label="cc" value="cc"></el-option>
        <el-option label="dd" value="dd"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="病人名称" prop="Brname">
      <el-input v-model="ruleForm.Brname"></el-input>
    </el-form-item>

    <el-form-item label="就诊医生" prop="Dno">
      <el-select v-model="ruleForm.Dno" placeholder="请选择活动区域">
        <el-option label="ee" value="ee"></el-option>
        <el-option label="ff" value="ff"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="医嘱" prop="Dadevice">
        <el-input type="textarea" v-model="ruleForm.Dadevice"></el-input>
    </el-form-item>
    <el-form-item label="入院时间" required>
      <el-col :span="11">
        <el-form-item prop="ITime1">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.ITime1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="ITime2">
          <el-time-picker placeholder="选择时间" v-model="ruleForm.ITime2" style="width: 100%;"></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="出院时间" required>
      <el-col :span="11">
        <el-form-item prop="Otime1">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.Otime1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="Otime2">
          <el-time-picker placeholder="选择时间" v-model="ruleForm.Otime2" style="width: 100%;"></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>

    <el-form-item label="预交金额" prop="Ychange">
      <el-input v-model="ruleForm.Ychange":span="2"></el-input>
    </el-form-item>

    <el-form-item label="报销类型" prop="Bno">
      <el-select v-model="ruleForm.Bno" placeholder="请选择活动区域">
        <el-option label="gg" value="gg"></el-option>
        <el-option label="hh" value="hh"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>

  </template>
  <script>
      export default {
          data() {
              return {
                  ruleForm: {
                      Brname: '',
                      Bfid: '',
                      Bcid: '',
                      Dno: '',
                      Dadevice: '',
                      ITime1: '',
                      ITime2: '',
                      Ychange: '',
                      Bno: ''
                  },
                  rules: {
                      Brname: [
                          { required: true, message: '请输入病人名称', trigger: 'blur' }
                      ],
                      Bfid: [
                          { required: true, message: '请选择病房号', trigger: 'change' }
                      ],
                      Bcid: [
                          { required: true, message: '请选择病床号', trigger: 'change' }
                      ],
                      Dno: [
                          { required: true, message: '请选择就诊医生', trigger: 'change' }
                      ],
                      Dadevice: [
                          { required: true, message: '请输入医嘱', trigger: 'change' }
                      ],
                      ITime1: [
                          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                      ],
                      ITime2: [
                          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                      ],
                      Ychange: [
                          { required: true, message: '请输入预交金额', trigger: 'blur' }
                      ],
                      Bno: [
                          { required: true, message: '请选择报销类型', trigger: 'change' }
                      ]
                  }
              };
          },
          methods: {
              submitForm(formName) {
                  this.$refs[formName].validate((valid) => {
                      if (valid) {
                          // alert('submit!');
                          let url = this.axios.urls.SYSTEM_YLZYBR_ADD;
                          this.axios.post(url, this.ruleForm).then((response) => {
                              console.log(response);
                              this.ruleForm();
                          }).catch(function(error) {
                              console.log(error);
                          });
                      } else {
                          console.log('error submit!!');
                          return false;
                      }
                  });
              },
              resetForm(formName) {
                  this.$refs[formName].resetFields();
              }
          }
      }
  </script>
