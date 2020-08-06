<template>
    <div>
        <my-input>Email</my-input>
        <my-input>werwrwe</my-input>
        <my-input>djglkfdgj</my-input>
        <my-button>sdfjgfh</my-button>
    </div>
</template>

<script>
    import MyInput from "../atoms/MyInput.vue";
    import MyButton from "../atoms/MyButton.vue";

    const componentsList = {};
    componentsList[MyInput.name] = MyInput;
    componentsList[MyButton.name] = MyButton;

    export default {
        name: "FormAuth",
        components: componentsList
    }
</script>

<style scoped>

</style>