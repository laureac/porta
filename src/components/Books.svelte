<script>
  import { books } from "../datas/aboutDatas.js";
</script>

<div class="border border-gray-200 rounded-lg overflow-hidden shadow-lg p-8">
  <h3 class="text-lg font-bold pb-2">Books - 2024</h3>
  {#each books as book}
    <div class="grid grid-cols-2 border-t py-2">
      <p>{book.title}</p>
      <div class="text-end">{book.status}</div>
    </div>
  {/each}
</div>
