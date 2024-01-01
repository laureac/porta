<script>
  import { onMount } from "svelte";
  import { fetchProjects } from "$lib/index";

  let projects = [];

  onMount(async () => {
    try {
      projects = await fetchProjects();
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  });
</script>

<div class="container mx-auto p-4">
  <div class="flex gap-4 justify-end pb-8">
    <i class="fa-brands fa-github"></i>
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-solid fa-link"></i>
  </div>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each projects as project}
      <div
        class="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
      >
        {#if project.link}
          <a href={project.link} target="_blank" class="block">
            <img
              src={project.image_url}
              alt={project.name}
              class="w-full h-48 object-cover"
            />
            <!-- <div class="p-4 flex justify-between items-center">
            <h2 class="font-semibold text-lg mb-2">{project.name}</h2>
            <i class="fa-solid fa-arrow-right"></i>
          </div> -->
          </a>
        {:else}
          <img
            src={project.image_url}
            alt={project.name}
            class="w-full h-48 object-cover"
          />
        {/if}
      </div>
    {/each}
  </div>
</div>
