<script>
  import { onMount } from "svelte";
  import { fetchProjects } from "$lib/index";
  import Menu from './Menu.svelte';

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

<div class="container mx-auto px-8 py-10">
  <div class="grid sm:grid-cols-4 gap-4">
    <Menu/>
    <div class="col-span-4 sm:col-span-3">
      <div class="grid sm:grid-cols-3 gap-4">
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
      </div>
    </div>
  </div>
</div>