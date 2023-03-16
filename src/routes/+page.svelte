<script>
  import Typewriter from 'svelte-typewriter'
  import { onMount } from 'svelte';
  import { loadGoogleFont} from '../JsPlugin/loadGoogleFont';
  import { itheme } from '../JsPlugin/ThemeSwitching'


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
      mode = '&quot; turn on the light &quot;';
    } else {
      mode = '&quot; turn off the light &quot;';
    }

  }

  function toggleMode() {
    if ($itheme) {
      mode = '&quot; turn off the light &quot;';
      toggleDark();
    } else {
      mode = '&quot; turn on the light &quot;';
      toggleDark();
    }
  }
  // SWitchTheme

 
</script>


<!--                               -----TEXBAR-----                                         -->

<div data-theme="{$itheme ? "dark" : "light"}" class=" w-screen h-screen  ">
<div data-theme="{$itheme ? "dark" : "light"}" >

  <div class="container w-10/12  mx-auto   pt-6   overflow-hidden ">
      
    
      <Typewriter>
        <p  class="font-dynamic-p-titl  font-black  "> <a href="./ME" class="link link-hover line-through text-yellow-400">YEL!ne</a></p>  
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-8 overflow-clip ">&nbsp; &nbsp; Everyone thought he was a bit <a href="https://github.com/YELineee/OUT_OT_LUNCH" class="link link-hover text-blue-400"> " Out To Lunch "</a> . He  has left some <a href="./NOTE" class="link link-hover text-indigo-400">" Notes "</a> , it seems he doesn't have a very good memory, BTW , his name is <a href="./ME" class="link link-hover text-green-400"> YELine</a>.</p>
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-4 overflow-clip"> &nbsp; &nbsp; Do you need me to 
            <a class="link link-hover  text-red-400" on:click={toggleMode}>
              {mode}
            </a> 
          
          for you? Or Switch to 
          <a href="./zh-CN" class="link link-hover text-amber-400"> Chinese </a>?
        </p>
        <p  class="font-dynamic-p-text  font-medium ml-8 mt-10 overflow-clip"> &nbsp; &nbsp; More and more <a href="./404" class="link link-hover text-purple-400">"features"</a> come in the future</p>
        
      </Typewriter>

  </div>
</div>
</div>


<!--                               -----TEXBAR-----                                         -->
  


<style>

  /*  */
  .font-dynamic-p-titl{
    font-size: 10vw;
  }
  .font-dynamic-p-text{
    font-size: 4vw;
    min-font-size: 40px;
  }

  :global(body) {
    font-family: 'Courgette', serif;
  }

</style>



