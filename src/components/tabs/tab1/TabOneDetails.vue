<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Tab One Details">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.go(-1)"/>
    </ActionBar>

    <StackLayout>
      <FlexboxLayout justifyContent="center">
        <Label padding="10">
          This is Tab Component One Details Page
        </Label>
      </FlexboxLayout>
    </StackLayout>

  </Page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {},
  methods: {}
};
</script>
