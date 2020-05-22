<template>
    <div>
        <!-- css style 사용시 v-bind class를 이용해서 변경할 것  :로 바꿀 수 있음.-->
        <div id="screen" v-bind:class="state" v-on:click="onClickScreen"> {{ message }}</div> 
        <template v-if="result.length">
           <div>평균시간 : {{average}}</div> 
           <button v-on:click="onReset"> RESET </button>
        </template>
    </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;

export default {
    data() {
        return {
           result : [],
           state : `waiting`,
           message : `클릭해서 시작하세요..`,
        } 
    },
    computed :{
        average () {
            return this.result.reduce((a,b)  => a+b, 0) / this.result.length || 0 +` ms`
        },
    },
    methods : {
        onReset() {
            this.result = [];
        },
        onClickScreen() {
            if(this.state === 'waiting'){
                this.state = 'ready';
                this.message = `초록색이 되면 클릭하세요`
                timeout = setTimeout(() => {
                    this.state = 'now';
                    this.message = '지금 클릭!'
                    startTime = new Date();
                }, Math.floor(Math.random() * 1000) + 2000);
            } else if (this.state ==='ready'){
                clearTimeout(timeout);
                this.state = 'waiting';
                this.message = `성급하십니다. 초록색이 되면 클릭해주셔야합니다.`
            } else if( this.state === 'now'){
                endTime = new Date();
                this.state = 'waiting';
                this.message = `클릭해서 시작하세요.`
                this.result.push(endTime - startTime)
            }
        }
    },
}
</script>

<style scoped >
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
    }
    #screen.now {
        background-color: green;
    }
</style>
