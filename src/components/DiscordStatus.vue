<template>
  <section>
    <div class="card">
      <div class="card-header">Discord</div>
      <div class="card-body">
        <div v-for="channel in channels" :key="channel.id">
          <div class="d-flex flex-row mb-2 member-card">
            <div>
              <svg
                name="Speaker"
                class="discord-image"
                aria-hidden="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"
                />
              </svg>
            </div>
            <div class="d-flex justify-content-center flex-column">
              <p class="discord-username m-0">{{ channel.name }}</p>
            </div>
          </div>
        </div>

        <div v-for="member in members" :key="member.id">
          <div class="d-flex flex-row mb-2 member-card">
            <div>
              <img
                class="discord-image"
                :src="member.avatar_url"
                alt="profile
              picture"
                v-bind:class="{
                  'discord-status-online': member.status == 'online',
                  'discord-status-idle': member.status == 'idle',
                  'discord-status-dnd': member.status == 'dnd',
                  'discord-status-streaming': member.status == 'streaming'
                }"
              />
            </div>
            <div class="d-flex justify-content-center flex-column">
              <p class="discord-username m-0">
                {{ member.username }}
                <small v-if="member.nick">• "{{ member.nick }}"</small>
                <span v-if="member.bot" class="badge discord-bot ml-1"
                  >Bot</span
                >
              </p>
              <p class="discord-playing-status" v-if="member.game">
                Playing {{ member.game.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "DiscordStatus",
  data() {
    return {
      url: "https://discordapp.com/api/guilds/426394718172086273/widget.json",
      dev: {
        nice: true
      },
      channels: false,
      members: false
    };
  },
  mounted() {
    const vm = this;
    axios
      .get(vm.url)
      .then(function(response) {
        vm.channels = response.data.channels;
        vm.members = response.data.members;
      })
      .catch(function(error) {
        vm.data = error;
      });
  }
};
</script>

<style lang="scss" scoped>
$status-radius: 3px;

.card-header,
.discord-bot {
  background-color: #7289da;
}

.discord-image {
  width: 45px;
  height: 45px;
  margin-right: 15px;
  border-radius: 50%;
}

.discord-status-online {
  border: $status-radius solid #3eff58;
}

.discord-status-idle {
  border: $status-radius solid #ffde00;
}

.discord-status-dnd {
  border: $status-radius solid #ff3e3e;
}

.discord-status-streaming {
  border: $status-radius solid #8f48ff;
}

p {
  margin: 0;
}

.member-card {
  margin-bottom: 1rem;
}

small,
.discord-playing-status {
  color: $gray-600;
}
</style>
