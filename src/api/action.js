/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
	'SERVER': 'http://localhost:8080/yl', //服务器
	'SYSTEM_USER_DOLOGIN': '/ylUser/login', //用户登陆
  'VERIFICATION': '/ylUser/verificationCode', //用户登陆
	'SYSTEM_USER_DOREG': '/userAction_reg.action', //用户注册
	'SYSTEM_MENU_TREE': '/treeNodeAction.action', //左侧树形菜单加载
'SYSTEM_ARTICLE_LIST': '/articleAction_list.action', //文章列表
  'SYSTEM_ARTICLE_ADD': '/articleAction_add.action', //文章新增
  'SYSTEM_ARTICLE_EDIT': '/articleAction_edit.action', //文章修改
  'SYSTEM_ARTICLE_DEL': '/articleAction_del.action', //文章删除
  'SYSTEM_USER_GETASYNCDATA': '/userAction_getAsyncData.action', //vuex中的异步加载数据

  'SYSTEM_MZ_LR': '/ylGh/insert',   //门诊录入  吴腾

  'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
  return this.SERVER + this[k];
}
}
