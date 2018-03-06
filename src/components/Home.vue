
<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Tab Test" />
    <TabView :selectedIndex="selectedIndex">
      <TabViewItem title="Tab 1">
        <tab-component1></tab-component1>
      </TabViewItem>
      <TabViewItem title="Tab 2">
        <tab-component2></tab-component2>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import TabComponent1 from "../components/tabs/tab1/TabComponent1";
import TabComponent2 from "../components/tabs/tab2/TabComponent2";

export default {
  components: {
    "tab-component1": TabComponent1,
    "tab-component2": TabComponent2
  },
  data( ) {
    return {
      selectedIndex : 0
    }
  }
};
</script>
