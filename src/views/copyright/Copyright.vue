<template>
  <div class="footer-div">
    <el-row>
      <el-col :span="20" :offset="2">
        <div class="footer">
          <div class="content">
            @sdfs
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Copyright"
  }
</script>

<style scoped lang="scss">
  .footer-div {
    margin-top: 40px;
    .footer {
      border-top: 2px solid #5D2A29;
      .content {
        padding-left: 15px;
        font-weight: bold;
        font-size: 15px;
        line-height: 80px;
        color: #5D2A29;
        height: 80px;
        margin-top: 40px;
        margin-bottom: 40px;
        background-color: #EEEEEE;
      }
    }
  }

</style>