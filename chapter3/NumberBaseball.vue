<template>
    <div>
        <h1>{{ result }}</h1>
        <h1>{{ answer }}</h1>
        <form v-on:submit="onSubmitForm">
            <input type="text"  minlength="4" maxlength="4" v-model="value" ref="answer">
            <button type="submit"> Button </button>
        </form>
        <ul>
            <li v-for="i in tries" :key="i">{{i}}</li>
        </ul>
        <div> 시도 {{tries.length}}</div>
    </div>
</template>

<script>

const getNumber = () => {
    let array = new Array();
    array.push(Math.floor(Math.random() * 10000))
    return array
};
export default {
    data() {
        return {
            answer : getNumber(),
            tries : [],
            value : '',
            result : '',
        } 
    },
    methods : {
        onSubmitForm(e) {
            e.preventDefault();
            // console.log(`정답은 ${this.answer} 입니다`);
            console.log(this.value === this.answer.join(''))
            if(this.value === this.answer.join('')){
                this.tries.push({
                    try : this.value,
                    result : `홈런`,
                })
                this.result = `홈런`;
                //init
                alert('재시작합니다!!')
                this.answer = getNumber();
                this.value = ``;
                this.tries = [];
                this.$refs.answer.focus();
            } else{
                if(this.tries.length > 9){
                    alert('10회 만료되었습니다..게임을 재시작합니다.')
                    this.result = `10번 넘게 틀려 실패! 정답은 : ${this.answer} 입니다.`;
                } else{
                    let strike = 0;
                    let ball = 0;
                    const answerArray = this.value.split('').map(v => parseInt(v));
                    const resultArray=  this.answer.split('').map(v => parseInt(v));
                    console.log(`answer : ${answerArray} result : ${resultArray}`);

                    for (let i = 0; i < this.tries.length; i +=1 ){
                        if(this.answerArray[i] === this.answer[i]){
                            strike++;
                        } else if(this.answer){
                            ball++;
                        }
                    }
                    this.tries.push({
                        try : this.value,
                        result : ''
                    })
                    
                }
            }
           
        },
    },
}
</script>


<style>

</style>
