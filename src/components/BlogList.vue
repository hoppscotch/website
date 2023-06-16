<template>
  <!-- Featured article -->
  <div class="mb-20">
    <article class="flex flex-col h-full" data-aos="fade-up">
      <header>
        <RouterLink
          to="/blog/sample-post"
          class="relative block mb-4 h-56 md:h-[32rem] rounded-xl"
        >
          <img
            class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out rounded-xl"
            src="/images/blog-post-01.png"
            width="352"
            height="198"
            alt="News 01"
          />
        </RouterLink>
        <div class="mb-4">
          <ul class="flex flex-wrap -m-1 text-xs font-medium">
            <li class="m-1">
              <span class="inline-flex text-center transition text-slate-500"
                >Product</span
              >
            </li>
          </ul>
        </div>
        <h3 class="max-w-2xl mb-4 h3">
          <RouterLink
            to="/blog/sample-post"
            class="transition text-slate-200 hover:text-slate-100"
            >The quick brown fox jumped over the lazy dog</RouterLink
          >
        </h3>
      </header>
      <p class="max-w-2xl mb-2 text-slate-300 grow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer class="flex items-center mt-4">
        <img
          class="mr-2 rounded-full shrink-0"
          src="/images/news-author-01.jpg"
          width="16"
          height="16"
          alt="Author 01"
        />
        <div class="text-xs font-medium">
          <span class="transition text-slate-400"> Anastasia Dan </span>
          <span class="mx-2 text-slate-800">|</span>
          <span class="text-slate-600">Jan 17, 2020</span>
        </div>
      </footer>
    </article>
  </div>
  <!-- Articles list -->
  <div class="mx-auto">
    <!-- Articles container -->
    <div class="grid items-start gap-16 md:grid-cols-2 md:gap-y-20">
      <!-- 1st article -->
      <article class="flex flex-col h-full" data-aos="fade-up">
        <header>
          <RouterLink
            to="/blog/sample-post"
            class="relative block h-56 mb-4 md:h-80 rounded-xl"
          >
            <img
              class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out rounded-xl"
              src="/images/news-01.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </RouterLink>
          <div class="mb-4">
            <ul class="flex flex-wrap -m-1 text-xs font-medium">
              <li class="m-1">
                <span class="inline-flex text-center transition text-slate-500"
                  >Product</span
                >
              </li>
            </ul>
          </div>
          <h4 class="max-w-2xl mb-4 h4">
            <RouterLink
              to="/blog/sample-post"
              class="transition text-slate-200 hover:text-slate-100"
              >The quick brown fox jumped over the lazy dog</RouterLink
            >
          </h4>
        </header>
        <p class="max-w-2xl mb-2 text-slate-300 grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
          rem ducimus dolore? Eveniet voluptatum, tempora, quam hic in dolore
          earum quisquam accusamus molestiae ut suscipit minima nam ab ex.
        </p>
        <footer class="flex items-center mt-4">
          <img
            class="mr-2 rounded-full shrink-0"
            src="/images/news-author-01.jpg"
            width="16"
            height="16"
            alt="Author 01"
          />
          <div class="text-xs font-medium">
            <span class="transition text-slate-400"> Anastasia Dan </span>
            <span class="mx-2 text-slate-800">|</span>
            <span class="text-slate-600">Jan 17, 2020</span>
          </div>
        </footer>
      </article>
      <!-- 2nd article -->
      <article
        class="flex flex-col h-full"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <header>
          <RouterLink
            to="/blog/sample-post"
            class="relative block h-56 mb-4 md:h-80 rounded-xl"
          >
            <img
              class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out rounded-xl"
              src="/images/news-02.png"
              width="352"
              height="198"
              alt="News 02"
            />
          </RouterLink>
          <div class="mb-4">
            <ul class="flex flex-wrap -m-1 text-xs font-medium">
              <li class="m-1">
                <span class="inline-flex text-center transition text-slate-500"
                  >Design</span
                >
              </li>
            </ul>
          </div>
          <h4 class="max-w-2xl mb-4 h4">
            <RouterLink
              to="/blog/sample-post"
              class="transition text-slate-200 hover:text-slate-100"
              >The quick brown fox jumped over the lazy dog</RouterLink
            >
          </h4>
        </header>
        <p class="max-w-2xl mb-2 text-slate-300 grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
          rem ducimus dolore? Eveniet voluptatum, tempora, quam hic in dolore
          earum quisquam accusamus molestiae ut suscipit minima nam ab ex.
        </p>
        <footer class="flex items-center mt-4">
          <img
            class="mr-2 rounded-full shrink-0"
            src="/images/news-author-02.jpg"
            width="16"
            height="16"
            alt="Author 02"
          />
          <div class="text-xs font-medium">
            <span class="transition text-slate-400"> Markus Barker </span>
            <span class="mx-2 text-slate-800">|</span>
            <span class="text-slate-600">Jan 12, 2020</span>
          </div>
        </footer>
      </article>
      <!-- 3rd article -->
      <article
        class="flex flex-col h-full"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <header>
          <RouterLink
            to="/blog/sample-post"
            class="relative block h-56 mb-4 md:h-80 rounded-xl"
          >
            <img
              class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out rounded-xl"
              src="/images/news-03.png"
              width="352"
              height="198"
              alt="News 03"
            />
          </RouterLink>
          <div class="mb-4">
            <ul class="flex flex-wrap -m-1 text-xs font-medium">
              <li class="m-1">
                <span class="inline-flex text-center transition text-slate-500"
                  >Product</span
                >
              </li>
            </ul>
          </div>
          <h4 class="max-w-2xl mb-4 h4">
            <RouterLink
              to="/blog/sample-post"
              class="transition text-slate-200 hover:text-slate-100"
              >The quick brown fox jumped over the lazy dog</RouterLink
            >
          </h4>
        </header>
        <p class="max-w-2xl mb-2 text-slate-300 grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
          rem ducimus dolore? Eveniet voluptatum, tempora, quam hic in dolore
          earum quisquam accusamus molestiae ut suscipit minima nam ab ex.
        </p>
        <footer class="flex items-center mt-4">
          <img
            class="mr-2 rounded-full shrink-0"
            src="/images/news-author-03.jpg"
            width="16"
            height="16"
            alt="Author 03"
          />
          <div class="text-xs font-medium">
            <span class="transition text-slate-400"> Lisa Crockett </span>
            <span class="mx-2 text-slate-800">|</span>
            <span class="text-slate-600">Jan 9, 2020</span>
          </div>
        </footer>
      </article>
      <!-- 4th article -->
      <article class="flex flex-col h-full" data-aos="fade-up">
        <header>
          <RouterLink
            to="/blog/sample-post"
            class="relative block h-56 mb-4 md:h-80 rounded-xl"
          >
            <img
              class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out rounded-xl"
              src="/images/news-04.png"
              width="352"
              height="198"
              alt="News 04"
            />
          </RouterLink>
          <div class="mb-4">
            <ul class="flex flex-wrap -m-1 text-xs font-medium">
              <li class="m-1">
                <span class="inline-flex text-center transition text-slate-500"
                  >Product</span
                >
              </li>
            </ul>
          </div>
          <h4 class="max-w-2xl mb-4 h4">
            <RouterLink
              to="/blog/sample-post"
              class="transition text-slate-200 hover:text-slate-100"
              >The quick brown fox jumped over the lazy dog</RouterLink
            >
          </h4>
        </header>
        <p class="max-w-2xl mb-2 text-slate-300 grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
          rem ducimus dolore? Eveniet voluptatum, tempora, quam hic in dolore
          earum quisquam accusamus molestiae ut suscipit minima nam ab ex.
        </p>
        <footer class="flex items-center mt-4">
          <img
            class="mr-2 rounded-full shrink-0"
            src="/images/news-author-05.jpg"
            width="16"
            height="16"
            alt="Author 05"
          />
          <div class="text-xs font-medium">
            <span class="transition text-slate-400"> Alexandra Smith </span>
            <span class="mx-2 text-slate-800">|</span>
            <span class="text-slate-600">Jan 7, 2020</span>
          </div>
        </footer>
      </article>
      <!-- 5th article -->
      <article
        class="flex flex-col h-full"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <header>
          <RouterLink
            to="/blog/sample-post"
            class="relative block h-56 mb-4 md:h-80 rounded-xl"
          >
            <img
              class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out rounded-xl"
              src="/images/news-05.png"
              width="352"
              height="198"
              alt="News 05"
            />
          </RouterLink>
          <div class="mb-4">
            <ul class="flex flex-wrap -m-1 text-xs font-medium">
              <li class="m-1">
                <span class="inline-flex text-center transition text-slate-500"
                  >Engineering</span
                >
              </li>
            </ul>
          </div>
          <h4 class="max-w-2xl mb-4 h4">
            <RouterLink
              to="/blog/sample-post"
              class="transition text-slate-200 hover:text-slate-100"
              >The quick brown fox jumped over the lazy dog</RouterLink
            >
          </h4>
        </header>
        <p class="max-w-2xl mb-2 text-slate-300 grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
          rem ducimus dolore? Eveniet voluptatum, tempora, quam hic in dolore
          earum quisquam accusamus molestiae ut suscipit minima nam ab ex.
        </p>
        <footer class="flex items-center mt-4">
          <img
            class="mr-2 rounded-full shrink-0"
            src="/images/news-author-03.jpg"
            width="16"
            height="16"
            alt="Author 03"
          />
          <div class="text-xs font-medium">
            <span class="transition text-slate-400"> Lisa Crockett </span>
            <span class="mx-2 text-slate-800">|</span>
            <span class="text-slate-600">Jan 4, 2020</span>
          </div>
        </footer>
      </article>
      <!-- 6th article -->
      <article
        class="flex flex-col h-full"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <header>
          <RouterLink
            to="/blog/sample-post"
            class="relative block h-56 mb-4 md:h-80 rounded-xl"
          >
            <img
              class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out rounded-xl"
              src="/images/news-06.png"
              width="352"
              height="198"
              alt="News 06"
            />
          </RouterLink>
          <div class="mb-4">
            <ul class="flex flex-wrap -m-1 text-xs font-medium">
              <li class="m-1">
                <span class="inline-flex text-center transition text-slate-500"
                  >Design</span
                >
              </li>
            </ul>
          </div>
          <h4 class="max-w-2xl mb-4 h4">
            <RouterLink
              to="/blog/sample-post"
              class="transition text-slate-200 hover:text-slate-100"
              >The quick brown fox jumped over the lazy dog</RouterLink
            >
          </h4>
        </header>
        <p class="max-w-2xl mb-2 text-slate-300 grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
          rem ducimus dolore? Eveniet voluptatum, tempora, quam hic in dolore
          earum quisquam accusamus molestiae ut suscipit minima nam ab ex.
        </p>
        <footer class="flex items-center mt-4">
          <img
            class="mr-2 rounded-full shrink-0"
            src="/images/news-author-06.jpg"
            width="16"
            height="16"
            alt="Author 06"
          />
          <div class="text-xs font-medium">
            <span class="transition text-slate-400"> Anton Sebastian </span>
            <span class="mx-2 text-slate-800">|</span>
            <span class="text-slate-600">Jan 2, 2020</span>
          </div>
        </footer>
      </article>
      <!-- 7th article -->
      <article class="flex flex-col h-full" data-aos="fade-up">
        <header>
          <RouterLink
            to="/blog/sample-post"
            class="relative block h-56 mb-4 md:h-80 rounded-xl"
          >
            <img
              class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out rounded-xl"
              src="/images/news-07.png"
              width="352"
              height="198"
              alt="News 07"
            />
          </RouterLink>
          <div class="mb-4">
            <ul class="flex flex-wrap -m-1 text-xs font-medium">
              <li class="m-1">
                <span class="inline-flex text-center transition text-slate-500"
                  >Product</span
                >
              </li>
            </ul>
          </div>
          <h4 class="max-w-2xl mb-4 h4">
            <RouterLink
              to="/blog/sample-post"
              class="transition text-slate-200 hover:text-slate-100"
              >The quick brown fox jumped over the lazy dog</RouterLink
            >
          </h4>
        </header>
        <p class="max-w-2xl mb-2 text-slate-300 grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
          rem ducimus dolore? Eveniet voluptatum, tempora, quam hic in dolore
          earum quisquam accusamus molestiae ut suscipit minima nam ab ex.
        </p>
        <footer class="flex items-center mt-4">
          <img
            class="mr-2 rounded-full shrink-0"
            src="/images/news-author-02.jpg"
            width="16"
            height="16"
            alt="Author 02"
          />
          <div class="text-xs font-medium">
            <span class="transition text-slate-400"> Markus Barker </span>
            <span class="mx-2 text-slate-800">|</span>
            <span class="text-slate-600">Dec 24, 2019</span>
          </div>
        </footer>
      </article>
      <!-- 8th article -->
      <article
        class="flex flex-col h-full"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <header>
          <RouterLink
            to="/blog/sample-post"
            class="relative block h-56 mb-4 md:h-80 rounded-xl"
          >
            <img
              class="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out rounded-xl"
              src="/images/news-08.png"
              width="352"
              height="198"
              alt="News 08"
            />
          </RouterLink>
          <div class="mb-4">
            <ul class="flex flex-wrap -m-1 text-xs font-medium">
              <li class="m-1">
                <span class="inline-flex text-center transition text-slate-500"
                  >Engineering</span
                >
              </li>
            </ul>
          </div>
          <h4 class="max-w-2xl mb-4 h4">
            <RouterLink
              to="/blog/sample-post"
              class="transition text-slate-200 hover:text-slate-100"
              >The quick brown fox jumped over the lazy dog</RouterLink
            >
          </h4>
        </header>
        <p class="max-w-2xl mb-2 text-slate-300 grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
          rem ducimus dolore? Eveniet voluptatum, tempora, quam hic in dolore
          earum quisquam accusamus molestiae ut suscipit minima nam ab ex.
        </p>
        <footer class="flex items-center mt-4">
          <img
            class="mr-2 rounded-full shrink-0"
            src="/images/news-author-01.jpg"
            width="16"
            height="16"
            alt="Author 01"
          />
          <div class="text-xs font-medium">
            <span class="transition text-slate-400"> Anastasia Dan </span>
            <span class="mx-2 text-slate-800">|</span>
            <span class="text-slate-600">Dec 12, 2019</span>
          </div>
        </footer>
      </article>
    </div>
  </div>
</template>
