<script>
    import { onMount } from 'svelte';
    import { supabase } from '../lib/initSupabase.js';

    let allProjects = []; 

    onMount(async () => {
        let { data: projects, error } = await supabase
        .from('projects')
        .select('*')

        if (error) {
            console.error('Error:', error);
        } else {
            allProjects = projects
            console.log(projects);
        }
    });
</script>

<div>
  {#each allProjects as project}
    <div>
      <h2>{project.name}</h2>
    </div>
  {/each}
</div>