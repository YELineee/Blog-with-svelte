<script>
   import Typewriter from 'svelte-typewriter'
    //tyoewriter 
  
    // Googlefonts
  
    import { onMount } from 'svelte';
  
    onMount(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Courgette&display=swap';
      document.head.appendChild(link);
    });
  
  
    // Googlefonts
  
    // Iterm
  
    let mode ="&quot; turn on the light &quot;"
  
    //Iterm
  
   
  </script>
  
  
  <!--                               -----TEXBAR-----                                         -->
  
  <div class="container w-10/12 h-4/6 mx-auto  pt-10  overflow-hidden ">
    <Typewriter>
    
        <p class=" font-dynamic-p-titl  font-black  "> 
            
            <a class="link link-hover line-through text-yellow-400">
                
                Notes

            </a>
        
        </p>  
        
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp;This is a brief description of my website, which every time I open it, the title is never the right word, just <a href="../" class="link link-hover text-red-400">like myself</a> , wrong and crazy, often misspelling words.</p>
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp;It perhaps the first time I have been alone to write a project that has been in my mind a million times, but today I started to produce it.</p>
    </Typewriter>
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
  
  
  
  