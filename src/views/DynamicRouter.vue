<template>
  <div>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  created(){
    console.log(this.$route.params);
    const seed = 'b40f582c730347bd'
    axios.get(`https://randomuser.me/api/?seed=${seed}`)
      .then((res)=>{
        console.log(res);
      })
  }
}
</script>