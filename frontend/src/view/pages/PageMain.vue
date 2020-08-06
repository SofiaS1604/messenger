<template>
    <my-input>Email</my-input>
</template>

<script>
    import MyInput from "../atoms/MyInput.vue";

    const componentsList = {};
    componentsList[MyInput.name] = MyInput;

    export default {
        name: "PageMain",
        components: componentsList
    }
</script>

<style scoped>

</style>