<style lang="scss" scoped>
.home{
  h2,h3,div{
    text-align: left;
  }
}
</style>

<template>
  <div class="home">
    <h2>数学</h2>
      <h3><p>有三个不同的质数$$a$$、$$b$$、$$c$$满足$$a\\times b+c=17$$，则$$a+b+c=$$&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;.</p></h3>
      <div v-katex="'<p>有三个不同的质数$$a$$、$$b$$、$$c$$满足$$a\\times b+c=17$$，则$$a+b+c=$$&nbsp;<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;.</p>'"></div>
      <h2>化学</h2>
      <h3>{{test}}</h3>
      <div v-katex="test"></div>
      <h2>物理</h2>
      <h3>{{test2}}</h3>
      <div v-katex="test2"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      test:"<p>$$\\rm Fe $$ 原子核外有 $$\\rm 26 $$ 个电子，核外电子排布为 $$\\rm 1s^22s^22p^63s^23p^63d^64s^2 $$，$$\\rm Fe $$ 原子失去 $$\\rm 4s $$ 能级 $$\\rm 2 $$ 个电子、$$\\rm 3d $$ 能级 $$\\rm 1 $$ 个电子形成 $$\\rm Fe^{3+} $$，$$\\rm Fe^{3+} $$ 电子排布式为 $$\\rm 1s^22s^22p^63s^23p^63d^5 $$，则 $$\\rm M $$ 层电子排布式为：$$\\rm 3s^23p^63d^5 $$。</p>",
      test2:"<p>AB．同步卫星和地球自转的周期相同，运行的角速度亦相等，则根据向心加速度$$a=r{{\\omega }^{2}}$$可知，同步卫星的加速度与地球赤道上物体随地球自转的向心加速度之比等于半径比，即$$\\dfrac{{{a}_{1}}}{{{a}_{2}}}=\\dfrac{r}{R}$$故A正确，B错误；</p>\n<p>CD．同步卫星绕地于做匀速圆周运动，第一宇宙速度是近地轨道上绕地球做匀速圆周运动的线速度，两者都满足万有引力提供圆周运动的向心力即：</p>\n<p>$$G\\dfrac{mM}{{{r}^{2}}}=m\\dfrac{{{v}^{2}}}{r}$$．</p>\n<p>由此可得：$$v=\\sqrt{\\dfrac{GM}{r}}$$．</p>\n<p>所以有：$$\\dfrac{{{v}_{1}}}{{{v}_{2}}}=\\dfrac{\\sqrt{\\dfrac{GM}{r}}}{\\sqrt{\\dfrac{GM}{R}}}=\\sqrt{\\dfrac{R}{r}}$$，故C错误，D正确．</p>\n<p>故选：AD．</p>"
    }
  }
}
</script>
