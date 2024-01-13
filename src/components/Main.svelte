<script>
  import { onMount } from "svelte";
  import { fetchProjects } from "$lib/index";

  let projects = [];

  onMount(async () => {
    try {
      projects = await fetchProjects();
      console.log(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  });
</script>

<div class="container mx-auto p-4">
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-1">
      <div>
        <img
          src="https://res.cloudinary.com/dv43fkmcn/image/upload/v1705174145/PXL_20231230_143445453_itawnh.jpg"
          alt="Laure Claret"
          class="h-48 w-48 object-cover"
        />
        <h2>Laure Claret</h2>
        <p>@laureac</p>
        <p>+33 7 44 94 74 07</p>
        <div class="flex gap-4 pb-8">
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-solid fa-link"></i>
        </div>
      </div>
    </div>
    <div class="col-span-2">
      <div class="masonry">
        {#each projects as project}
          <div
            class="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            {#if project.link}
              <a href={project.link} target="_blank" class="block">
                <img
                  src={project.image_url}
                  alt={project.name}
                  class="w-full h-80 object-cover"
                />
                <div class="p-4 flex justify-between items-center">
                  <h2 class="text-md mb-2">{project.name}</h2>
                  <p>{project.description ?? ""}</p>
                </div>
              </a>
            {:else}
              <img
                src={project.image_url}
                alt={project.name}
                class="w-full h-80 object-cover"
              />
              <div class="p-4 flex justify-between items-center">
                <h2 class="text-md mb-2">{project.name}</h2>
                <p>{project.description ?? ""}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .masonry {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-template-rows: masonry;
  }

  .masonry > div {
    grid-column: span 2;
    grid-row: span 2;
  }
</style>
