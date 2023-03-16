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
  
  
    <div data-theme="{$itheme ? "dark" : "light"}" class=" w-screen h-screen  ">
      <div data-theme="{$itheme ? "dark" : "light"}" >
        <div class="container w-10/12  mx-auto  pt-6  overflow-hidden ">
      <div >
        <Typewriter>
          <p  class=" font-dynamic-p-titl  font-black  "> <a href="../" class="link link-hover  text-yellow-400">Me, Myslef & I</a></p>  
          <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp;我是谁？真如前面的所说，只不过是一个对未来而感到发愁的21岁孩子罢了。我似乎不知道该怎么介绍自己。也许在你浏览这个网站的每一刻，你突然了解了我，也许你会想，原来这就是<a href="../zh-CN" class="link link-hover text-yellow-400">“他”</a> 。</p>
        </Typewriter>
      </div>
    
    </div>
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
    font-family: 'Courgette','Open Sans', serif;
  }

    /* font */
  </style>
  
  
  