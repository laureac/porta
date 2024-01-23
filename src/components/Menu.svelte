<script>
  let socialLinks = [
    { url: "https://devpost.com/laureac/", iconClass: "fa-solid fa-link" },
    { url: "https://github.com/laureac", iconClass: "fab fa-github" },
    {
      url: "https://www.linkedin.com/in/laure-claret/",
      iconClass: "fab fa-linkedin",
    },
    {
      url: "mailto:laure.a.claret@gmail.com",
      iconClass: "fa-regular fa-envelope",
    },
  ];

  let isMenuOpen = false;
  let menuLinks = [
    { url: "/", text: "HOME" },
    { url: "/about", text: "ABOUT" },
  ];
</script>

<div class="menu col-span-4 sm:col-span-1">
  <div class="block sm:hidden">
    <button class="hamburger my-1" on:click={() => (isMenuOpen = !isMenuOpen)}>
      {#if isMenuOpen}
        <i class="fa fa-times text-xl"></i>
      {:else}
        <i class="fa fa-bars text-xl"></i>
      {/if}
    </button>
    {#if isMenuOpen}
      <div class="flex flex-col gap-3">
        <div class="flex justify-between gap-3">
          <img
            src="https://res.cloudinary.com/dv43fkmcn/image/upload/v1705174145/PXL_20231230_143445453_itawnh.jpg"
            alt="Laure Claret"
            class="h-42 w-1/2 object-cover"
          />
          <div class="flex flex-col gap-2">
            <h2 class="text-lg">Laure Claret</h2>
            <div class="text-sm text-slate-500">
              <p>
                Hey! I'm Laure, and I develop lots of random things. I do a lot
                of other activities too!
              </p>
              <p>@laureac</p>
              <p>+33 7 44 94 74 07</p>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          {#each socialLinks as link}
            <a href={link.url} target="_blank" class="icon">
              <i class={link.iconClass}></i>
            </a>
          {/each}
        </div>
        <div class="flex gap-2 my-2">
          {#each menuLinks as link}
            <a href={link.url} class="underline underline-offset-2">
              {link.text}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
  <div class="hidden sm:block col-span-1">
    <div class="flex flex-col gap-5">
      <img
        src="https://res.cloudinary.com/dv43fkmcn/image/upload/v1705174145/PXL_20231230_143445453_itawnh.jpg"
        alt="Laure Claret"
        class="h-48 w-3/4 object-cover"
      />
      <h2 class="text-lg">Laure Claret</h2>
      <div class="text-sm flex flex-col gap-2 text-slate-500">
        <p>
          Hey! I'm Laure, and I develop lots of random things. I do a lot of
          other activities too!
        </p>
        <p>@laureac</p>
        <p>+33 7 44 94 74 07</p>
        <p>laure.a.claret@gmail.com</p>
      </div>
      <div class="flex gap-4">
        {#each socialLinks as link}
          <a href={link.url} target="_blank" class="icon">
            <i class={link.iconClass}></i>
          </a>
        {/each}
      </div>
    </div>
    <div class="flex flex-col gap-2 my-10">
      {#each menuLinks as link}
        <a href={link.url} class="underline underline-offset-2">
          {link.text}
        </a>
      {/each}
    </div>
  </div>
</div>
