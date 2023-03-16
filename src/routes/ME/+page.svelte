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


  <div data-theme="{$itheme ? "dark" : "light"}" class=" w-screen h-screen  ">
    <div data-theme="{$itheme ? "dark" : "light"}" >
      <div class="container w-10/12  mx-auto  pt-6  overflow-hidden ">
      
    <div >
      <Typewriter>
        <p  class=" font-dynamic-p-titl  font-black  "> <a href="../" class="link link-hover  text-yellow-400">Me, Myslef & I</a></p>  
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp; What exactly am I? As I previously stated, I am just a 21-year-old student concerned about the future. I'm not sure how to describe myself. Maybe every time you visit this website, you get to know me and think, so he's <a href="../" class="link link-hover text-yellow-400">"YELine"</a> .</p>

      </Typewriter>
    </div>
  
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



  