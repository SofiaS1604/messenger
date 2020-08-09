<template>
    <div class="account__profile profile">
        <div class="profile__block">
            <img :class="{profile__active: !this.uploadImage}" :src="this.profileUser.avatar" class="profile__image">
            <div :class="{profile__active: this.uploadImage}" class="profile__upload" v-cloak @drop.prevent="addFile"
                 @dragover.prevent>
                {{this.files.length ? 'Click button "Update avatar"' : 'Add photo avatar drag in drop'}}
            </div>
        </div>
        <div class="profile__container">
            <div class="profile__user">
                <div class="profile__info profile__username">User name: {{this.profileUser.login}}</div>
                <div class="profile__info profile__surname">Surname: {{this.profileUser.surname}}</div>
                <div class="profile__info profile__first-name">First name: {{this.profileUser.first_name}}</div>
                <div class="profile__info profile__option">
                    Option: {{this.profileUser.option}}
                </div>
            </div>
        </div>
        <div class="profile__icons icons">
            <div class="icons__default" :class="{icons__active: !this.uploadImage}">
                <icon @click.native="$router.push({name: 'update'})" data-title="Update user" class="icons__edit"
                      :urlImage="require('./../../images/pen.png').default"/>
                <icon @click.native="deleteUser" data-title="Delete user" class="icons__delete"
                      :urlImage="require('./../../images/close.png').default"/>
                <icon @click.native="uploadImage = !uploadImage" data-title="Update avatar" class="icons__update"
                      :urlImage="require('./../../images/file-upload.png').default"/>
            </div>
            <div class="icons__upload" :class="{icons__active: this.uploadImage}">
                <icon @click.native="uploadImage = !uploadImage" data-title="Canceling" class="icons__delete"
                      :urlImage="require('./../../images/close.png').default"/>
                <icon @click.native="uploadAvatar" data-title="Update avatar" class="icons__update"
                      :urlImage="require('./../../images/file-upload.png').default"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from "../atoms/Icon.vue";
    import axios from "axios";

    const componentsList = {};
    componentsList[Icon.name] = Icon;

    export default {
        name: "ProfileAccount",
        components: componentsList,
        props: ["profile"],
        data() {
            return {
                uploadImage: false,
                files: [],
                profileUser: this.profile
            }
        },
        methods: {
            deleteUser() {
                axios.delete(
                    `http://localhost:3000/api/deleteUser`, {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem('tokenUser')
                        }
                    }
                )
                    .then(() => {
                        localStorage.removeItem('tokenUser');
                        this.$router.push({name: 'login'})
                    })
            },

            addFile(e) {
                this.files = [];
                let droppedFiles = e.dataTransfer.files;

                if (!droppedFiles) return;
                ([...droppedFiles]).forEach(f => this.files.push(f))
            },

            async uploadAvatar() {
                if (this.files.length) {
                    let formData = new FormData();
                    formData.append('avatar', this.files[0]);
                    this.profileUser = await this.getData('http://localhost:3000/api/updateAvatar', formData).then(res => this.profileUser = res.data);
                    this.uploadImage = !this.uploadImage;
                }
            },

            getData: async (url, formData) => {
                return new Promise(async resolve => {
                    await axios.post(
                        url, formData, {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem('tokenUser')
                            },
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

<style src="../../style/components/account_profile.styl" lang="stylus"/>