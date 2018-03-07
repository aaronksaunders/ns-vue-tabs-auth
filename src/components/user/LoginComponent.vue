<template>
    <Page class="page">
        <StackLayout>
            <FlexboxLayout flexDirection="column" alignItems="center" paddingTop="20">
                <Label width="80%">Username</Label>
                <TextField width="80%" v-model="input.email"></TextField>
                <Label width="80%">Password</Label>
                <TextField width="80%" v-model="input.password"></TextField>
                <Button width="80%" @tap="login" text="LOGIN" class="btn btn-outline" />
            </FlexboxLayout>
        </StackLayout>
    </Page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {},
  data() {
    return {
      input: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login: function() {
      this.$store.dispatch("auth/login", { ...this.input }).then((user) => {
        console.log(this.$store.state.auth.loggedIn);
        if (this.$store.state.auth.loggedIn) {
          console.log("logged in...", user);
          this.$router.replace("/home");
        }
      });
    }
  }
};
</script>
