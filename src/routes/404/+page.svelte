<script>
  import Typewriter from 'svelte-typewriter'
  import { onMount } from 'svelte';
  import { loadGoogleFont} from '../../JsPlugin/loadGoogleFont';


  onMount(() => {
    loadGoogleFont();
  });
  
    let mode ="&quot; turn on the light &quot;"
  
    //Iterm
  
   
  </script>
  
  
  <!--                               -----TEXBAR-----                                         -->
  
  <div class="container w-10/12 h-4/6 mx-auto  pt-10  overflow-hidden ">
      
    <Typewriter>
      
        <p  class=" font-dynamic-p-titl  font-black  "> <a href="../" class="link link-hover  text-yellow-400">Coming soon</a></p>
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">Here is a <a href="./404/TODO" class="link link-hover text-red-400">manual</a> of the functions to be developed that you can read</p>
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">This feature is still in production, it is a simple theme colour change function, because of some irresistible reasons, my code has a little situation, wait for some time to be skilled to do</p>
        
    </Typewriter>
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
  
  
  
  