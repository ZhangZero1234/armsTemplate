<template>
    <div id="test" ref="hack">
        {{msg}}
        <Card></Card>
    </div>
</template>   
<script>
    import Card from './components/Card.vue'
    export default {
        data(){
            return {
                msg:0
            }
        },
        components:{
            Card
        },
        mounted(){
            this.$watch("msg",(oldText,newText)=>{
                console.log(oldText,newText);
            });
            // setInterval(()=>{
            //     this.msg +=1 ;
            // },1000)
        }
    }
    // console.log(this);
</script>
<style scoped lang="scss">
    #test{
        color:brown;
    }
</style>