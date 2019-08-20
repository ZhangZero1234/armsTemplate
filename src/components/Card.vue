<template>
    <div>
            <cv-header aria-label="Carbon header">
                    <cv-skip-to-content href="#main-content">
                      Skip to content
                    </cv-skip-to-content>
                    <cv-header-name href="javascript:void(0)" prefix="IBM">
                      [Platform]
                    </cv-header-name>
                      <template slot="left-panels" v-if="areLeftPanels">
                        
                      </template>
                      <template slot="right-panels" v-if="areRightPanels">
                      
                    </template>
                  </cv-header>
    </div>
  </template>
  
  <script>
    export default {
      data () {
        return {
          radio1: '上海',
          radio2: '上海',
          radio3: '上海',
          radio4: '上海'
        };
      }
    }
  </script>

<style scoped lang="scss">

</style>
