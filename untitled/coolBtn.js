Vue.component('coolBtn', {
        props:['name','type'],
        template:"<input @click='defaultClick' :class='type' :value='name' type='button'  style=\"color: #fff; border:none;padding: 2px 10px;border-radius: 6px; margin: 2px 6px;\">",
        methods:{
            defaultClick:function(){
                alert('啊啊啊，我被点击了！');
                // this.$emit('btn-click');
            },
        },
        created:function(){
            if(!this.type){
                this.type = 'primary'
            }
        }
    }
)