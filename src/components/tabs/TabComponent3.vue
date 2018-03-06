<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Tab Three">
    </ActionBar>

    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
      </FlexboxLayout>
    </StackLayout>

  </Page>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      message () {
        return this.$store.state.counter.count.toString();
      },
      surprise () {
        return (this.$store.state.counter.count >= 5);
      },
    },
    methods: mapActions([
      'decrement',
      'increment',
    ]),
  };
</script>
