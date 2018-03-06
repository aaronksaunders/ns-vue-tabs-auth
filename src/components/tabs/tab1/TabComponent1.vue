<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Tab One">
    </ActionBar>

    <StackLayout>
      <FlexboxLayout flexDirection="column" justifyContent="center">
        <Label padding="10" text="This is a Tab Component One">
        </Label>
        <Button class="btn" @tap="$router.push('/tab1-details')" text="Details" />
      </FlexboxLayout>
    </StackLayout>

  </Page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    message() {
      return this.$store.state.counter.count.toString();
    },
    surprise() {
      return this.$store.state.counter.count >= 5;
    }
  },
  methods: mapActions(["decrement", "increment"])
};
</script>
