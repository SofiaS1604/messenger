<template>
    <div class="authorization__form form">
        <div class="form__title">Log in</div>
        <my-input>Login:</my-input>
        <my-input>Password:</my-input>
        <my-button>Log in</my-button>
        <a href="/#/signup" class="form__link">Don't have an account?</a>
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

<style src="../../style/components/form_auth.styl" lang="stylus"/>