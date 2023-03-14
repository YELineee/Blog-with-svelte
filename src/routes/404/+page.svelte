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
      
        <p  class=" font-dynamic-p-titl  font-black  "> <a href="https://github.com/YELineee" class="link link-hover  text-yellow-400">Coming soon</a></p>  
        
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
  
  
  
  