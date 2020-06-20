<template>
  <div>
         <div class="info-row">
        </div>
           <div>
               <div v-for= "(info, index) in trasa.info"
                v-bind:key="'info-'+index">
                {{info.text}}
                <img src="./../assets/icons/about.svg" width="30px" alt="about-ikona">
                
                
                </div>
                </div> 
         
         
         
        </div>
            
        
        


  </div>
</template>




<script>
export default {
    props: ["trasa"],

    data(){
        return{
            types:{
                about:{
                    src:"./../assets/icons/about.svg",
                    alt:"about-icon"
                },
                transport:{
                    src:"./../assets/icons/transport.svg",
                    alt:"transport-icon"
                },
                food:{
                    src:"./../assets/icons/food.svg",
                    alt: "food-icon"
                },
                well:{
                    src:"./..assets/icons/drink.svg",
                    alt: "drink-icon"
                }



            }

        }
    }

}
</script>

<style>

</style>