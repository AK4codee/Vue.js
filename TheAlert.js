export default{
    props:['Name'],
    template: /*HTML*/ '<li>{{Name}} <button v-on:click="alertName">click me</button></li>',
    methods:{
        alertName(){
            //alert(this.Name)
            this.$emit('clickme2')
        }
    }
}