<template>
  <div class="mt-4">
    <figure class="rounded-lg overflow-hidden w-full h-36 lg:h-auto">
      <img class="w-full object-cover h-full" src="..\images\Banner.jpg" alt="">
    </figure>
    <section>
      <h2 class="text-xl font-medium text-slate-600 mt-4 mb-4">Heahphones for you</h2>
      <div class="flex">
        <!-- Article for the Store -->
        <article class="flex justify-between flex-col">
          <figure class="h-44 w-32 lg:h-60 lg:w-80 rounded-md overflow-hidden self-center">
              <img class="bg-slate-50 hover:bg-slate-100 w-full object-cover h-full hover:scale-110 transition-all" src="..\images\headphone-HP0001.png" alt="headphones">
          </figure>
          <!-- Image and Price for mobile -->
          <div class="lg:hidden">
            <p class="mt-2 text-xs text-slate-500">Category</p>
            <p class="font-bold text-sm text-slate-600">Product 1</p>
            <div class="flex justify-between items-center">
              <p>$0.00</p>
              <div class="flex">
                <a href="#" class="flex w-4 h-4 lg:w-48 p-5 bg-emerald-800 items-center justify-center text-white text-center rounded-full"><i class="pi pi-shopping-bag"></i></a>
              </div>
            </div>
          </div>
          <!-- Image and Price for Web -->
          <div class=" hidden lg:contents">
            <div>
              <div class="flex justify-between items-center">
                <p class="mt-2 font-bold text-sm text-slate-600">Product 1</p>
                <p>$0.00</p>
              </div>
                <p class="text-xs text-slate-500">Category</p>
                <a href="#" class="block mt-3 py-2 w-full bg-emerald-800 hover:bg-emerald-900 text-white text-center rounded-lg"><i class="pi pi-shopping-bag mr-2"></i>Add to Cart</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>