<template>
  <div class="hello"></div>
</template>

<script lang="ts">
import { OneTower, TwoTower } from "../gameEnvironment/defenseTower/index"
export default {
  data(): unknown {
    return {

    }
  },
  mounted(): void {
    const obj = {
      attackRange: 600,
      attackInterval: 2000,
      aggressivity: 500,
      bloodVolume: 0,
      enemyInterfereSkill: true,
      enemy: true
    }
    let oneTower = new OneTower(obj)
    console.log(oneTower.bloodVolumeIs0Handle())
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
