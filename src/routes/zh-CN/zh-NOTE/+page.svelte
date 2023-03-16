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


<div data-theme="{$itheme ? "dark" : "light"}" class=" h-screen w-screen">
  <div class="container w-10/12 h-4/6 mx-auto  pt-10  overflow-hidden ">
    <Typewriter>
    
        <p class=" font-dynamic-p-titl  font-black  "> 
            
            <a class="link link-hover line-through text-yellow-400">
                
                Notes

            </a>
        
        </p>  
        
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp;This is my first blog site and the concept is simple, there is nothing central to the whole site, as well as no iconic buttons and not a clear timeline. Just like <a href="../" class="link link-hover text-yellow-400">myself</a>, I like things to be pure.</p>
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp;It perhaps the first time I have been alone to write a <a href="https://github.com/YELineee/Blog" class="link link-hover text-red-400">project</a> that has been in my mind a million times, but today I started to produce it.</p>
    </Typewriter>
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
    font-family: 'Courgette', cursive;
  }

  /* font */
</style>
   
   
   
   