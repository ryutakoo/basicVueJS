<template>
    <div>
        <h1>{{ result }}</h1>
        <form v-on:submit="onSubmitForm">
            <input type="text" v-model="value" ref="refAnswer">
            <button type="submit"> Button </button>
        </form>
        <div> 시도 : {{}}</div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            value : ``,
            result : ``,
        }
    },
    methods : {
        onSubmitForm(e) {
            e.preventDefault();
            // console.log(this.word[this.word.length -1], this.value[0])
        },
    },
}
</script>


<style>

</style>
