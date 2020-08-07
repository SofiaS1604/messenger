<template>
    <div class="form__group">
        <input :class="{'form__input-error': this.error}" :type="this.typeInput" @input="changeInput" class="form__input"/>
        <label class="form__label" :class="{'form__label--active': this.inputValue.length > 0}" >
            <slot/>
        </label>
    </div>
</template>

<script>
    export default {
        name: "MyInput",
        props: ["typeInput", "error"],
        data(){
            return{
                inputValue: '',
                inputError: this.error
            }
        },
        methods: {
            changeInput({target}){
                this.inputValue = target.value;
                this.$emit('inputTask', {value: this.inputValue, type: this.$el.classList[1].split('__')[1]});
            }
        }
    }
</script>

<style src="./../../style/components/input.styl" lang="stylus"/>