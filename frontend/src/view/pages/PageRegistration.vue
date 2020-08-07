<template>
    <div class="page__registration registration">
        <form-reg/>
        <img :src="require('./../../images/form__reg.jpg').default" class="registration__image" />
    </div>
</template>

<script>
    import FormReg from "../widgets/FormReg.vue";

    const componentsList = {};
    componentsList[FormReg.name] = FormReg;

    export default {
        name: "PageRegistration",
        components: componentsList
    }
</script>

<style src="../../style/components/page_registration.styl" lang="stylus"/>