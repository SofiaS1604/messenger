<template>
    <div class="authorization__form form">
        <div class="form__title">Sign up</div>
        <my-input typeInput="text">Surname:</my-input>
        <my-input typeInput="text">First name:</my-input>
        <my-input typeInput="text">Login:</my-input>
        <my-input typeInput="password">Password:</my-input>
        <my-button>Submit</my-button>
        <a href="/" class="form__link">Already have an account?</a>
    </div>
</template>

<script>
    import MyInput from "../atoms/MyInput.vue";
    import MyButton from "../atoms/MyButton.vue";

    const componentsList = {};
    componentsList[MyInput.name] = MyInput;
    componentsList[MyButton.name] = MyButton;

    export default {
        name: "FormReg",
        components: componentsList
    }
</script>

<style src="../../style/components/form_reg.styl" lang="stylus"/>