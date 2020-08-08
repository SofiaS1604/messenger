<template>

</template>

<script>
    export default {
        name: "PageMain",
        data(){
          return {
              k: 1
          }
        },
        created() {
            if(!localStorage.getItem('tokenUser')){
                this.$router.push({name: 'login'})
            }else{
                this.getData()
            }
        },
        methods: {
            getData(){
                console.log(1);
            }
        }
    }
</script>

<style scoped>

</style>