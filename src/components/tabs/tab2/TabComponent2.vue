<template>
  <StackLayout>
    <FlexboxLayout justifyContent="center" flexDirection="column">
      <Label padding="10">
        This is a Tab Component Two
      </Label>
      <Button class="btn" @tap="$router.push('/tab2-details')" text="Details" />
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {},
  methods: {}
};
</script>
