<template>
    <div class="authorization__form form">
        <div class="form__title">Log in</div>
        <my-input :error="this.error.loginError" class="form__login" @inputTask="keyDown" typeInput="text">
            Login:
        </my-input>
        <my-input :error="this.error.passwordError" class="form__password" @inputTask="keyDown" typeInput="password">
            Password:
        </my-input>
        <my-button @click.native="submitForm">Log in</my-button>
        <a href="/#/signup" class="form__link">Don't have an account?</a>
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
        name: "FormAuth",
        components: componentsList,
        data() {
            return {
                input: {
                    login: null,
                    password: null
                },
                error: {
                    loginError: null,
                    passwordError: null,
                }
            }
        },
        methods: {
            async getData() {
                return new Promise(async resolve => {
                    await axios.post(`http://localhost:3000/api/login`, {
                        login: this.input.login,
                        password: this.input.password
                    })
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

            async submitForm() {
                let filterInput = Object.values(this.input).filter((el, i) =>
                    this.error[`${Object.keys(this.input)[i]}Error`] = !el);

                if (filterInput.length === 0) {
                    this.result = await this.getData().then(res => this.result = res);
                    if (this.result.type === 'error')
                        Object.keys(this.result.data).filter(el => this.error[`${el}Error`] = true);

                    if (this.result.type === 'try'){
                        localStorage.setItem('tokenUser', this.result.data.token);
                        await this.$router.push({name: 'account'})
                    }
                }
            },

            keyDown(input) {
                this.input.login = input.type === 'login' ? input.value : this.input.login;
                this.input.password = input.type === 'password' ? input.value : this.input.password;
            }
        }
    }
</script>

<style src="../../style/components/form_auth.styl" lang="stylus"/>