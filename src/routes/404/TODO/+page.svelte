<script>
  import Typewriter from 'svelte-typewriter'
  import { onMount } from 'svelte';
  import { loadGoogleFont} from '../../../JsPlugin/loadGoogleFont';


  onMount(() => {
    loadGoogleFont();
  });
  
    let mode ="&quot; turn on the light &quot;"
  
    //Iterm
  
   
  </script>
  
  
  <!--                               -----TEXBAR-----                                         -->
  
  <div class="container w-10/12 h-4/6 mx-auto  pt-10  overflow-hidden ">
      
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
          <tr class="hover">
            <th>2</th>
            <td>Diary</td>
            <td>hardworl</td>
            <td>2023.03.15</td>
          </tr>
          <!-- row 3 -->
          <tr>
            <th>3</th>
            <td>iterm color</td>
            <td>Change the theme colour with the button</td>
            <td>2023.03.15</td>
          </tr>
          <tr>
            <th>4</th>
            <td>MD</td>
            <td>Support for md text</td>
            <td>2023.03.15</td>
          </tr>  
        </tbody>
      </table>
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
  
  
  
  