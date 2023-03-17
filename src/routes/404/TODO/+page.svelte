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
      
    <Typewriter>
      
        <p  class=" font-dynamic-p-titl  font-black  "> <a href="../" class="link link-hover  text-yellow-400">Coming soon</a></p>
        
    </Typewriter>

    <div class="overflow-x-auto mt-20">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Requirements</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <th>1</th>
            <td>tontsize</td>
            <td>Display issues on mobile</td>
            <td>2023.03.15</td>
          </tr>
          <!-- row 2 -->
          <tr >
            <th>2</th>
            <td>Diary</td>
            <td>hardwork</td>
            <td>2023.03.15</td>
          </tr>
          <!-- row 3 -->
          <tr class="line-through">
            <th>3</th>
            <td>iterm color</td>
            <td>Change the theme colour with the button</td>
            <td>2023.03.15</td>
          </tr>
          <!-- row 4 -->
          <tr>
            <th>4</th>
            <td>MD</td>
            <td>Support for md text</td>
            <td>2023.03.15</td>
          </tr>  
          <!-- row 5 -->
          <tr>
            <th>5</th>
            <td>Integration</td>
            <td>Integration of ChatGPT-4 api</td>
            <td>2023.03.17</td>
          </tr>  
          <!-- row 6 -->
          <tr>
          <th>6</th>
          <td>Dynamic colors</td>
          <td>Refresh color every time you open the page</td>
          <td>2023.03.17</td>
        </tr>  
        </tbody>
      </table>
    </div>
  
    </div>
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
    }
  
    :global(body) {
      font-family: 'Courgette', cursive;
    }
  
    /* font */
  </style>
  
  
  
  