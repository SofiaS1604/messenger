<template>
    <span class="icon__container">
        <img class="icon__image" :src="this.urlImage" alt="">
    </span>
</template>

<script>
    export default {
        name: "Icon",
        props: ["urlImage"]
    }
</script>


<style src="../../style/components/icon.styl" lang="stylus"/>