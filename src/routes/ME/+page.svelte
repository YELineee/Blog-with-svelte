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
      
    <div >
      <Typewriter>
        <p   class=" font-dynamic-p-titl  font-black  "> <a href="../" class="link link-hover  text-yellow-400">Me, Myslef & I</a></p>  
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp; As previously mentioned, I am that manner. A 20-year-old kid who is obsessed with the future every day, because we don't know what it will look like. </p>
        
        
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
      min-font-size: 40px;
    }
  
    :global(body) {
      font-family: 'Courgette', cursive;
    }
  
    /* font */
  </style>
  
  
  
  