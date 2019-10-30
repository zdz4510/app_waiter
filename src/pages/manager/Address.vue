<template>
    <div class="address">
            {{addresses}}
</template>
<script>
    import {mapState,mapActions} from 'vuex'
    
    export default {
        data(){
            return {
                chosenAddressId: '1',
            }
        },
        created(){
            this.findAllAddresses()
        },
        computed:{
            ...mapState('address',['addresses'])
        },
        methods:{
            ...mapActions('address',['findAllAddresses',"findAddressByCustomerId"])
        }
    }
</script>