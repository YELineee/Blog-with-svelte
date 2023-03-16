<script>
  import Typewriter from 'svelte-typewriter'
  import { onMount } from 'svelte';
  import { loadGoogleFont} from '../../../JsPlugin/loadGoogleFont';
  import { itheme } from '../../../JsPlugin/ThemeSwitching'


  onMount(() => {
    loadGoogleFont();
  });
   
  // onMount
</script>
   
   
   <!--                               -----TEXBAR-----                                         -->

<div data-theme="{$itheme ? "dark" : "light"}" class=" w-screen h-screen  ">
    <div data-theme="{$itheme ? "dark" : "light"}" >
      <div class="container w-10/12  mx-auto  pt-6  overflow-hidden ">
    <Typewriter>
      <p  class=" font-dynamic-p-titl  font-black  "> <a href="../zh-CN" class="link link-hover  text-yellow-400">Note</a></p>  
      <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp;这是我的第一次独立的写一个blog，我的想法很简单，去中心化，去图表化，去时间化。就像是<a href="../zh-CN" class="link link-hover text-violet-400">“ 我 ”</a>一样，喜欢纯粹的东西</p>
      <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp;这个<a href="https://github.com/YELineee/Blog" class="link link-hover text-red-400">“ 项目 ”</a>是我第一次一个人去尝试的，而且已经在我的脑海里纯在有很长的一段时间了</p>
    </Typewriter>
      </div>
  </div>
</div>
   
   
   <!--                               -----TEXBAR-----                                         -->
     
   
   
<style>

  /* font */
  .font-dynamic-p-titl{
    font-size: 6vw;
  }
  .font-dynamic-p-text{
    font-size: 4vw;
  }

  :global(body) {
    font-family: 'Courgette','Open Sans', serif;
  }
    @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: url('%sveltekit.assets%/SmileySans-Oblique.otf.woff2') format('woff2');
      }

  

  /* font */
</style>
   
   
   
   