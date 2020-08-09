<template>
    <div class="page__authorization authorization">
        <form-auth/>
        <img :src="require('./../../images/form__login.jpg').default" class="authorization__image"/>
    </div>
</template>

<script>
    import FormAuth from "../widgets/FormAuth.vue";

    const componentsList = {};
    componentsList[FormAuth.name] = FormAuth;

    export default {
        name: "PageAuthorization",
        components: componentsList,
    }
</script>

<style src="../../style/components/page_authorization.styl" lang="stylus"/>