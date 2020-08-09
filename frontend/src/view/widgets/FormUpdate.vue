<template>
    <div class="update__form">
        <div class="form__title">Update user</div>
        <my-input :error="null" class="form__surname" @inputTask="keyDown" typeInput="text">
            Surname:
        </my-input>
        <my-input :error="null" class="form__first-name" @inputTask="keyDown" typeInput="text">
            First name:
        </my-input>
        <my-input :error="this.loginError" class="form__login" @inputTask="keyDown" typeInput="text">
            Login:
        </my-input>
        <my-input :error="null" class="form__password" @inputTask="keyDown" typeInput="password">
            Password:
        </my-input>
        <my-input :error="null" class="form__description" @inputTask="keyDown" typeInput="text">
            Description:
        </my-input>
        <my-button @click.native="submitForm">Save</my-button>
        <a href="/" class="form__link">Come back?</a>
    </div>
</template>

<script>
    import MyInput from "../atoms/MyInput.vue";
    import MyButton from "../atoms/MyButton.vue";
    import axios from "axios";

    const componentsList = {};
    componentsList[MyInput.name] = MyInput;
    componentsList[MyButton.name] = MyButton;

    export default {
        name: "FormUpdate",
        components: componentsList,
        data() {
            return {
                input: {
                    login: null,
                    password: null,
                    firstName: null,
                    surname: null,
                    description: null
                },
                loginError: null,
                profileUser: null
            }
        },
        methods: {
            keyDown(input) {
                this.input.login = input.type === 'login' ? input.value : this.input.login;
                this.input.password = input.type === 'password' ? input.value : this.input.password;
                this.input.firstName = input.type === 'first-name' ? input.value : this.input.firstName;
                this.input.surname = input.type === 'surname' ? input.value : this.input.surname;
                this.input.description = input.type === 'description' ? input.value : this.input.description;
            },

            async submitForm() {
                let formData = new FormData();
                this.input.login ? formData.append('login', this.input.login) : null;
                this.input.surname ? formData.append('surname', this.input.surname) : null;
                this.input.firstName ? formData.append('first_name', this.input.firstName) : null;
                this.input.password ? formData.append('password', this.input.password) : null;
                this.input.description ? formData.append('description', this.input.description) : null;

                this.profileUser = await this.getData('http://localhost:3000/api/updateUser', formData).then(res => this.profileUser = res);

                if (this.profileUser.type === 'error' && this.profileUser.data.login) {
                    this.loginError = true;
                } else {
                    await this.$router.push({name: 'account'})
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

<style src="../../style/components/page_update.styl" lang="stylus"/>