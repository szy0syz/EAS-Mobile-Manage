<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4" style="min-height: 100%; background-color: #324057;">
        <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
          <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>基础资料管理</template>
            <el-menu-item index="custome">客户管理</el-menu-item>
            <el-menu-item index="supplier">供应商管理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-edit"></i>进销存管理</template>
            <el-menu-item index="PurWarehs">购进管理</el-menu-item>
            <el-menu-item index="saleIssue">销售管理</el-menu-item>
            <el-menu-item index="inventory">库存管理</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-share"></i>财务管理</template>
            <el-menu-item index="paymentErr">付款申请单状态处理</el-menu-item>
            <el-menu-item index="transferErr">调拨单跨期处理</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-date"></i>报表管理</template>
            <el-menu-item index="daily">日报管理</el-menu-item>
            <el-menu-item index="10day">旬报管理</el-menu-item>
            <el-menu-item index="month">月报管理</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-star-on"></i>商业智能</template>
            <el-menu-item index="im">销售数据</el-menu-item>
            <el-menu-item index="ar">应收账款</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-setting"></i>后端管理</template>
            <el-menu-item index="health">服务器健康状态</el-menu-item>
            <el-menu-item index="jar">jar包扫描</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
            <el-menu-item index="users">用户管理</el-menu-item>
            <el-menu-item index="permission">权限管理</el-menu-item>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title"><i class="el-icon-warning"></i>说明</template>
            <el-menu-item index="explain">说明</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    computed: {
      defaultActive: function () {
        return this.$route.path.replace('/', '')
      }
    }
  }
</script>


<style lang="less" scoped>
  @import '../style/mixin';

  .manage_page {

  }
</style>
