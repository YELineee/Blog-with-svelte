<script>
  import Typewriter from 'svelte-typewriter'
  import { onMount } from 'svelte';
  import { loadGoogleFont} from '../../JsPlugin/loadGoogleFont';
  import { itheme } from '../../JsPlugin/ThemeSwitching'


  onMount(() => {
    loadGoogleFont();
    toggleNow();
  });

  // onMount

  // SWitchTheme
  let mode = '';
 
  function toggleDark() {
    itheme.update(d => !d);
  }

  function toggleNow(){
    if ($itheme) {
      mode = '&quot; 开灯 &quot;';
    } else {
      mode = '&quot; 关灯 &quot;';
    }

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
  // SWitchTheme
  </script>
  

  <div data-theme="{$itheme ? "dark" : "light"}" class=" w-screen h-screen  ">
    <div data-theme="{$itheme ? "dark" : "light"}" >
      <div class="container w-10/12  mx-auto  pt-6  overflow-hidden ">
          
        
          <Typewriter>
            <p  class="font-dynamic-p-titl  font-black  "> <a href="./ME" class="link link-hover line-through text-yellow-400">YEL!ne</a></p>  
            <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp;他接触过的人都觉得他有点 <a href="https://github.com/YELineee/OUT_OT_LUNCH" class="link link-hover text-blue-400"> “神经质”</a> ，他似乎在这里留下了一张<a href="./zh-CN/zh-NOTE" class="link link-hover text-indigo-400">“ 字条 ”</a> , 他看来是记性不好了，感觉这里的东西一团糟，对了，他的名字叫 <a href="./zh-CN/zh-ME" class="link link-hover text-green-400"> “ 叶陵 ” </a>.</p>
            <p  class="font-dynamic-p-text  font-medium ml-8 mt-4 overflow-clip"> &nbsp; &nbsp;你需要我给你
                <a class="link link-hover  text-red-400" on:click={toggleMode}>
                  {mode}
                </a> 
              
              么？或者切换到 
              <a href="../" class="link link-hover text-amber-400"> " 英文 "</a>?
            </p>
    
          
          <p   class="font-dynamic-p-text "></p>
            
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
  
  
  
  