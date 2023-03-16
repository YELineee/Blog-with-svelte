<script>
  import Typewriter from 'svelte-typewriter'
  import { onMount } from 'svelte';
  import { loadGoogleFont} from '../../JsPlugin/loadGoogleFont';
  import { itheme } from '../../JsPlugin/ThemeSwitching'


  onMount(() => {
    loadGoogleFont();
  });
  
  // onMount

</script>
  
  
  <!--                               -----TEXBAR-----                                         -->


<div data-theme="{$itheme ? "dark" : "light"}" class=" h-screen w-screen">
  <div class="container w-10/12 h-screen mx-auto  pt-6  overflow-hidden ">
      
    <div >
      <Typewriter>
        <p  class=" font-dynamic-p-titl  font-black  "> <a href="../" class="link link-hover  text-yellow-400">Me, Myslef & I</a></p>  
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp; This is my first blog site, and the idea is straightforward; the site lacks any focal point, recognizable icons, or chronology. <a href="../" class="link link-hover text-violet-400">I'm </a> a purist at heart, just like everything else. </p>
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp; Perhaps for the first time, I began writing a <a href="https://github.com/YELineee/Blog" class="link link-hover text-red-400">project</a>  today that has been on my thoughts for a very long time while I was by myself.</p>
        
        
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
    min-font-size: 40px;
  }

  :global(body) {
    font-family: 'Courgette', cursive;
  }

  /* font */
</style>



  