<template>
  <div class="home mt-3 mt-lg-0">
    <!-- monumental moment: i finally made a useful reusable component -->

    <div class="row">
      <div class="col-lg-auto">
        <DiscordStatus />
      </div>
      <div class="col-lg order-first order-lg-last">
        <MinecraftStatus ip="mc.zyand.co" serverName="Vanilla" />
        <MinecraftStatus ip="mc.zyand.co:25577" serverName="Modded" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DiscordStatus from "@/components/DiscordStatus.vue";
import MinecraftStatus from "@/components/MinecraftStatus.vue";

export default {
  name: "home",
  components: {
    DiscordStatus,
    MinecraftStatus
  }
};
</script>
