<template>
    <div style="font-weight:400;font-size:large;">
      <span style="font-size:small;">📂</span> {{text}}
      <div style="margin-left:9px;font-size:small;" v-show="subText">{{subText}} <VersionPicklist v-show="show"/></div>
      
    </div>
</template>


<script>

import { useData, useRoute } from 'vitepress';
import {watch} from 'vue';

export default {
  name: 'SideBarHeader',
  data: () => ({
     text: undefined,
     subText: undefined,
     show: undefined,
  }),
  mounted(){
    const { page } = useData();
    const { path } =  useRoute();
    this.showVersions(path);
    this.setHeader(page._value.frontmatter);

    watch(page, (currentPage)=>{
      this.showVersions(currentPage.relativePath);
      this.setHeader(currentPage.frontmatter);
    })
  },
  methods:{
    showVersions(path){
      if(path.indexOf('reference/airnode/') > -1 || path.indexOf('reference/ois/') > -1) {
        this.show = true;
      }
      else this.show = undefined;
    },
    setHeader(frontmatter){
      this.text = frontmatter.sidebarHeader;
      this.subText = frontmatter.sidebarSubHeader;
    }
  }
}
</script>

