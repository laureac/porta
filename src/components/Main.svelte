<script>
  import { onMount } from "svelte";
  import { fetchProjects } from "$lib/index";
  import Menu from "./Menu.svelte";

  let projects = [];
  let isLoading = true;

  onMount(async () => {
    try {
      projects = await fetchProjects();
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      isLoading = false;
    }
  });
</script>

<div class="grid sm:grid-cols-3 gap-4">
  {#if isLoading}
    {#each Array(9) as _, index}
      <div
        class="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-gray-100 animate-pulse"
      >
        <div class="w-full h-80 bg-gray-300"></div>
        <div class="p-4">
          <div class="h-4 bg-gray-300 rounded mb-2"></div>
          <div class="h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    {/each}
  {:else}
    {#each projects as project}
      <div
        class="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
      >
        <a href={project.link ?? "#"} target="_blank" class="block">
          <img
            src={project.image_url}
            alt={project.name}
            class="w-full h-80 object-cover"
          />
          <div class="p-4 flex justify-between flex-col">
            <h2 class="text-md mb-2">{project.name}</h2>
            <p class="text-slate-500 text-sm">
              {project.description ?? ""}
            </p>
          </div>
        </a>
      </div>
    {/each}
  {/if}
</div>
