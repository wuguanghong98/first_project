<template>
  <div>
    <essay-desc v-for="(information, index) in infoList" :information="information" :key="index"/>
    <!--<el-pagination-->
            <!--background-->
            <!--layout="prev, pager, next"-->
            <!--:total="total"-->
            <!--@current-change="query">-->
    <!--</el-pagination>-->
    <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="pageSizes"
            :page-size="pageInfo.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageInfo.total">
    </el-pagination>
  </div>
</template>

<script>
  import EssayDesc from 'components/content/EssayDesc'
  export default {
    name: "Essay",
    components: {
      EssayDesc,
    },
    data() {
      return {
        currentPage: 1,
        pageSizes: [6, 12, 18, 24]
      }
    },
    props: {
      pageInfo: {
        type: Object,
        default() {
          return []
        }
      }
    },
    computed: {
      infoList() {
        return this.pageInfo.infoList
      },
    },
    methods: {
      query(value) {
        console.log(value);
      },
      handleSizeChange(val) {
        const currentPage = this.currentPage
        this.$emit('sizeChange', this.currentPage, val)
      },
      handleCurrentChange(val) {
        this.currentPage = val
        const size = this.pageInfo.size
        this.$emit('currentChange',val, size)
      }
    },
  }
</script>

<style scoped>

</style>