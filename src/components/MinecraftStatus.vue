<template>
  <section>
    <div class="card">
      <div class="card-header">Minecraft {{ computedTitle }}</div>
      <div class="card-body" v-if="!data.online">
        <div class="alert alert-danger m-0">
          The server is currently offline.
        </div>
      </div>
      <div class="card-body" v-else>
        <div class="d-flex flex-row mb-4 player-card">
          <div>
            <img class="server-image mr-4" :src="data.icon" alt="server icon" />
          </div>
          <div class="d-flex justify-content-center flex-column">
            <p class="minecraft-username m-0" v-html="data.motd.html[0]"></p>
            <p class="minecraft-playing-status" v-html="data.motd.html[1]"></p>
          </div>
        </div>
        <div
          class="alert alert-warning m-0"
          v-if="data.online & (data.players.online == 0)"
        >
          No one's online.
        </div>
        <!-- -->
        <div class="d-flex flex-row">
          <div v-for="(player, index) in data.players.list" :key="index">
            <div
              class="d-flex flex-column mb-0 player-card mr-4 align-items-center"
            >
              <img
                class="minecraft-image"
                :src="getPlayerImage(player)"
                alt="player icon"
              />

              <p class="minecraft-username m-0">{{ player }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted">
        IP: {{ ip }} •
        {{ data.players ? data.players.online : "No " }}
        {{ computedPlural }} online
        {{ data.version ? " •" + data.version : "" }}
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "MinecraftStatus",
  props: {
    ip: String,
    serverName: String
  },
  data() {
    return {
      data: false
    };
  },
  mounted() {
    const vm = this;
    axios
      .get("https://api.mcsrvstat.us/2/" + vm.ip)
      .then(function(response) {
        vm.data = response.data;
      })
      .catch(function(error) {
        vm.data = error;
      });
  },
  methods: {
    getPlayerImage(username) {
      return `https://minotar.net/helm/${username}/100.png`;
    }
  },
  computed: {
    computedPlural() {
      if (this.data.players) {
        if (this.data.players.online == 1) {
          return "player";
        } else {
          return "players";
        }
      }
      return "players";
    },
    computedTitle() {
      if (this.serverName) {
        return "• " + this.serverName;
      }
      return "";
    }
  }
};
</script>

<style lang="scss" scoped>
$status-radius: 3px;

.card {
  margin-bottom: 30px;
}

.card-header {
  background-color: #00c000;
}

.minecraft-image {
  width: 45px;
  height: 45px;
}

p {
  margin: 0;
}

small,
.minecraft-playing-status {
  color: $gray-600;
}
</style>
