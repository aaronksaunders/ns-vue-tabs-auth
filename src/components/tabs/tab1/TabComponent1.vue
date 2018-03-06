<template>
    <StackLayout>
      <FlexboxLayout flexDirection="column" justifyContent="center">
        <Label padding="10" text="This is a Tab Component One">
        </Label>
        <Label padding="10" style="font-weight:500">Welcome {{currentUser}}</Label>
        <Button class="btn" @tap="$router.push('/tab1-details')" text="Details" />
        <Button class="btn" @tap="logout()" text="Logout" />
      </FlexboxLayout>
    </StackLayout>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user && this.$store.state.auth.user.email;
    },
    message() {
      return this.$store.state.counter.count.toString();
    },
    surprise() {
      return this.$store.state.counter.count >= 5;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.replace("login")
      });
    }
  }
};
</script>
