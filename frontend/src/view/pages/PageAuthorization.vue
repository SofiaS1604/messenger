<template>
    <form-auth/>
</template>

<script>
    import FormAuth from "../widgets/FormAuth.vue";

    const componentsList = {};
    componentsList[FormAuth.name] = FormAuth;

    export default {
        name: "PageAuthorization",
        components: componentsList
    }
</script>