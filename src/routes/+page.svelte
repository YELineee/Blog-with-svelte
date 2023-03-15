<script>
  import Typewriter from 'svelte-typewriter'
  //tyoewriter 

  // Googlefonts

  import { onMount } from 'svelte';
  import { comment } from 'postcss';

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
      <p   class=" font-dynamic-p-titl  font-black  "> <a href="https://github.com/YELineee" class="link link-hover line-through text-yellow-400">YEL!ne</a></p>  
      <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp; Everyone thought he was a bit <a href="https://github.com/YELineee/OUT_OT_LUNCH" class="link link-hover text-blue-400"> " Out To Lunch "</a> . He  has left some <a href="./NOTE" class="link link-hover text-indigo-400">" Notes "</a> , it seems he doesn't have a very good memory, BTW , his name is <a href="./ME" class="link link-hover text-green-400"> YELine</a>.</p>
      <p  class="font-dynamic-p-text  font-medium ml-8 mt-4 overflow-clip"> &nbsp; &nbsp; Do you need me to 
          <a href="./404" class="link link-hover  text-red-400">
            {mode}
          </a> 
        
        for you my friend? Or Switch to <a href="./zh-CN" class="link link-hover text-amber-400"> Chinese </a>?
      </p>
      
    </Typewriter>
  </div>

</div>




<!--                               -----TEXBAR-----                                         -->
  


<style>

  /* font */
  .font-dynamic-p-titl{
    font-size: 8vw;
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



