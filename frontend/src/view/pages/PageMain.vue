<template>
    <div class="page__account account">
        <panel-chats class="account__panel"/>
        <profile-account v-if="this.result" :profile="this.result.data"></profile-account>
    </div>
</template>

<script>
    import axios from "axios";
    import ProfileAccount from "../widgets/ProfileAccount.vue";
    import PanelChats from "../templates/PanelChats.vue";

    const componentsList = {};
    componentsList[ProfileAccount.name] = ProfileAccount;
    componentsList[PanelChats.name] = PanelChats;

    export default {
        name: "PageMain",
        components: componentsList,
        data() {
            return {
                result: null
            }
        },
        async created() {
            if (!localStorage.getItem('tokenUser')) {
                await this.$router.push({name: 'login'})
            } else {
                this.result = await this.getData().then(res => this.result = res);
            }
        },
        methods: {
            getData: async function () {
                return new Promise(async resolve => {
                    await axios.get(
                        `http://localhost:3000/api/user`, {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem('tokenUser')
                            }
                        }
                    )
                        .then((response) => {
                            response.type = 'try';
                            resolve(response);
                        })
                        .catch((error) => {
                            error.response.type = 'error';
                            resolve(error.response);
                        });
                });
            },
        }
    }
</script>

<style scoped>

</style>