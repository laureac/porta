<script>
  import "../app.css";
  import Menu from "../components/Menu.svelte";
</script>

<div
  class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <div class="container mx-auto px-8 py-10">
    <div class="grid sm:grid-cols-4 gap-4">
      <Menu />
      <div class="col-span-4 sm:col-span-3">
        <slot />
      </div>
    </div>
  </div>
</div>
