<template>
<div style="margin-top:6em;padding:2em 1em">
  <social-head
    :description="description"
    :title="`${title}${lessontitle? ' • '+unittitle:''} | YMath.io`"
    :image="thumbnail"
  ></social-head>
  <ClientOnly>
      <vs-sidebar
        background="primary"
        textWhite
        v-model="active"
        open
      >
        <template #header>
          <h1>{{title}}</h1>
        </template>
        <template  #logo>
          <!-- ...img logo -->
          <nuxt-link to="/"><img style="border-radius: 5px" src="/favicon.png"></nuxt-link>
        </template>
        <vs-sidebar-item :id="`/courses/${params.course}`" :to="`/courses/${params.course}`">
          <template #icon>
            <i class='bx bx-home'></i>
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-group :open="params.unit===unit" :key="undex" v-for="(unit, undex) of contents">
          <template #header>
            <vs-sidebar-item :active="unit.path===params.unit"  arrow>
              <template #icon>
                <i :class='`bx bx-circle`'></i>
              </template>
              {{unit.unit}}
            </vs-sidebar-item>
          </template>
          <vs-sidebar-item :to="`/courses/${params.course}/${unit.path}/${lesson.path}`" :id="`/courses/${params.course}/${unit.path}/${lesson.path}`" :key="lindex" v-for="(lesson, lindex) of unit.children">
            <template #icon>
              <i class='bx bx-circle'></i>
            </template>
            {{lesson.title}}
          </vs-sidebar-item>
        </vs-sidebar-group>
        <template #footer>
          <vs-row justify="space-between">
            <vs-button icon>
              <i class='bx bxs-moon' ></i>
            </vs-button>

            <vs-button icon badge-color="danger" badge-position="top-right">
              <i class='bx bx-bell' ></i>
              <template #badge>
                28
              </template>
            </vs-button>
          </vs-row>
        </template>
      </vs-sidebar>
  </ClientOnly>
  <div style="margin-left:20em">
    <NuxtChild/>
  </div>
</div>
</template>

<script>
export default {


// we only want to fetch the title of the course, and also open up the directory where the course files are stored, and list those out.

  data:()=>({
    page:1
  }),
  async asyncData({ params, $content, error }) {

    const {title, description, thumbnail} = await $content('courses/'+params.course+'/index').only(['title','description','thumbnail'])
      .fetch().catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    const children = await $content('courses',params.course, { deep: true}).sortBy('index').fetch()
    //const course = params.course // When calling /abc the slug will be "abc"
    let lessontitle;
    let unittitle;
    if (params.lesson){
      const ob = children.filter(function ({path}) {
        const a = path.split('/');
        return params.lesson === a[a.length - 1]
      })[0]

      lessontitle = ob.title
      unittitle = ob.unit

    }
    return { lessontitle, unittitle, title, description, thumbnail, params,  children, active:`/courses/${params.course}/${params.unit}/${params.lesson}` }
  },
  computed:{
    contents(){
      let c = this.children;
      // array {title, path, extension}
      let f = []; // the final array
      for (const {title, path, unit} of c){
        //console.log(title)
        let s = path.split('/');
        console.log(path);
        if (s.length===4) continue;
        s.shift();s.shift();s.shift()
        //console.log(s)
        // see if s[0] is a valid 'path' attribute in any of them
        let a = f.filter(a=>a.path===s[0])[0];
        if (!a) {f.push({unit, path:s[0], children:[]})
        ;a = f.filter(a=>a.path===s[0])[0];}
        a.children.push({title, path:s[1]})
      }
      return f
    }
  },
  scrollToTop: true

}
</script>

<style>
.katex-html{
  /*display: none;*/
}
.vs-sidebar-content {
  background-color: transparent !important;
  background-image: url('/backsplash.jpg');
  background-size: auto 60%;
}

.vs-sidebar-content .vs-sidebar__logo img {
  max-width: 120px;
  max-height: 50px !important;
}

.vs-sidebar, .vs-sidebar__footer{
  background: rgba(var(--vs-background), 1)
}

.vs-sidebar__footer{
  border-bottom-right-radius: 30px
}
.graph {
	height: 500px;
	width: 500px;
}
</style>
