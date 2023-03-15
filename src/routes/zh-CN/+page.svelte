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
  
<div class="container w-10/12 h-4/6 mx-auto  pt-6  overflow-hidden ">
  <!--                               -----TEXBAR-----                                         -->
  <div >
    <Typewriter>
      <p   class=" font-dynamic-p-titl  font-black  "> <a href="../" class="link link-hover line-through text-yellow-400">YEL!ne</a></p>  
      <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp; 似乎所有人都觉得他多多少少 <a href="https://github.com/YELineee/OUT_OT_LUNCH" class="link link-hover text-blue-400"> " Out To Lunch "</a> , 也就是所谓的神经质。这里有一张他留下了一张 <a href="./zh-CN/zh-NOTE" class="link link-hover text-indigo-400">“字条”</a> ，他似乎记忆力不是很好，总是丢三落四的，对了，你就叫他 <a href="./ME" class="link link-hover text-green-400">“澜子哥”</a>，或者 <a href="" class="link link-hover text-cyan-400">“yeline”</a>就好了。</p>

      
    </Typewriter>
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
  
  
  
  