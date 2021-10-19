<template>
  <div class="home">
    <MainHeader />
    <Textg />
    <Gallery />
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";
import Textg from "@/components/Textg.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "Home",
  components: {
    MainHeader,
    Textg,
    Gallery,
  },
};
</script>
