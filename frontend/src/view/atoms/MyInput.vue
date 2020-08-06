<template>
    <div class="form__group">
        <input type="text" id="form__input"/>
        <label for="form__input"><slot/></label>
    </div>
</template>

<script>
    export default {
        name: "MyInput"
    }
</script>

<style scoped>

</style>