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
      
    <Typewriter>
      
        <p  class=" font-dynamic-p-titl  font-black  "> <a href="../" class="link link-hover  text-yellow-400">Coming soon</a></p>
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">Here is a <a href="./404/TODO" class="link link-hover text-red-400">manual</a> of the functions to be developed that you can read.This site will slowly evolve and keep updating until I start my version 2.0, which is the next project.</p>
        
        
    </Typewriter>
  </div>
</div>
  </div>
  
  
  
  <!--                               -----TEXBAR-----                                         -->
    
  
  
  <style>
  
    /* font */
    .font-dynamic-p-titl{
      font-size: 10vw;
    }
    .font-dynamic-p-text{
      font-size: 4vw;
    }
  
    :global(body) {
      font-family: 'Courgette', cursive;
    }
  
    /* font */
  </style>
  
  
  
  