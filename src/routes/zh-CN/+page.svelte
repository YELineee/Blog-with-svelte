<script>
  import Typewriter from 'svelte-typewriter'
  import { onMount } from 'svelte';
  import { loadGoogleFont} from '../../JsPlugin/loadGoogleFont';
  import { itheme } from '../../JsPlugin/ThemeSwitching'


  onMount(() => {
    loadGoogleFont();
    toggleMode();
  });

  // Iterm

  let isOn = false;
  let mode = '';
 
  function toggleDark() {
    itheme.update(d => !d);
  }


  function toggleMode() {
    if ($itheme) {
      mode = '&quot; 关灯 &quot;';
      toggleDark();
    } else {
      mode = '&quot; 开灯 &quot;';
      toggleDark();
    }
  }
  //Iterm
  
   
  </script>
  


<div data-theme="{$itheme ? "dark" : "light"}">
  <div class="container w-10/12 h-4/6 mx-auto  pt-6  overflow-hidden ">
    <!--                               -----TEXBAR-----                                         -->
    <div >
      <Typewriter>
        <p  class=" font-dynamic-p-titl  font-black  "> <a href="../" class="link link-hover line-through text-yellow-400">YEL!ne</a></p>  
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp; 似乎所有人都觉得他多多少少 <a href="https://github.com/YELineee/OUT_OT_LUNCH" class="link link-hover text-blue-400"> " Out To Lunch "</a> , 也就是所谓的神经质。这里有一张他留下了一张 <a href="./zh-CN/zh-NOTE" class="link link-hover text-indigo-400">“字条”</a> ，他似乎记忆力不是很好，总是丢三落四的，对了，你就叫他 <a href="./ME" class="link link-hover text-green-400">“澜子哥”</a>，或者 <a href="" class="link link-hover text-cyan-400">“Yeline”</a>就好了。</p>
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">nbsp; &nbsp; 对了在了解他之前你需要              <a class="link link-hover  text-red-400" on:click={toggleMode}>
          {mode}
        </a>  么，或者转换成 <a href="../" class="link link-hover text-yellow-400">英文</a>。</p>

        
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
  
  
  
  