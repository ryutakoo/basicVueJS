<template>
    <div>
        <h1>result {{ result }}</h1>
        <!-- <h1>answer {{ answer }}</h1> -->
        <form v-on:submit="onSubmitForm">
            <input type="text"  minlength="4" maxlength="4" v-model="value" ref="answer">
            <button type="submit"> Button </button>
        </form>
        <ul>
            <li v-for="i in tries" v-bind:key="i.try">{{i}}</li>
        </ul>
        <div> 시도 {{tries.length}}</div>
    </div>
</template>

<script>

const getNumber = () => {
    let candidates = ['1','2','3','4','5','6','7','8','9'];
    let returnData = [];

    for (let i =0; i < 4; i +=1 ){
        const pickNumber = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        returnData.push(parseInt(pickNumber));
    };

    return returnData; 
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
                if(this.tries.length >= 9){
                    alert('10회 만료되었습니다..게임을 재시작합니다.')
                    this.result = `10번 넘게 틀려 실패! 정답은 : ${this.answer} 입니다.`;
                } else{
                    let strike = 0;
                    let ball = 0;
                    const answerArray = this.value.split('').map(v => parseInt(v));
                      for (let i = 0; i < 4; i +=1 ){
                        // console.log(`index : ${i}  answerArray[i] : ${answerArray[i]} this.answer[i] : ${this.answer[i]}`)
                        // console.log(typeof(answerArray[i])    , typeof(this.answer[i]))
                        // console.log('test' + this.answer.includes(answerArray[i]))
                        // if(answerArray[i] === parseInt(this.answer[i])){
                        if(answerArray[i] === this.answer[i]){
                            strike++;
                        } else if(this.answer.includes(answerArray[i])){
                            ball++;
                        }
                    }
                    
                    this.tries.push({
                        try : this.value,
                        result : `Strike : ${strike}  Ball : ${ball}`
                    })
                }

                this.value = ``;
                this.$refs.answer.focus();
            }
           
        },
    },
}
</script>


<style>

</style>
