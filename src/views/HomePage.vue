<template>
  <div class="flex justify-center mx-100 relative">
    <div>
      <header>
        <Navigation> </Navigation>

        <div class="flex justify-center shrink-0">
          <img
            src="src\assets\images\header.png"
            width="1240px"
            height="500px"
            class="w-[1240px] h-[500px] mt-3 rounded-[10px] from-gray-100 via-neutral-800 bg-cover bg-center"
          />

          <p
            class="w-[610px] flex z-20 absolute justify-center top-48 text-3xl font-bold text-white"
          >
            Enjoy Your Dream Vacation
          </p>

          <p
            class="w-[650px] h-[56px] text-center flex z-20 absolute justify-center top-60 text-lg font-normal text-white"
          >
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us
          </p>
        </div>

        <div class="menu flex justify-center">
          <bookingForm></bookingForm>
        </div>
      </header>

      <main>
        <div class="flex justify-center align-middle mt-50 mb-8">
          <div
            class="alert flex bg-yellow rounded-lg w-[77.5rem] h-[72px] py-25 text-gray text-base font-normal leading-normal not-italic tracking-wide"
          >
            <img
              src="src\assets\images\danger 1.svg"
              alt="alert"
              class="w-[2rem] h-[2rem] ml-6 mr-19"
            />
            <P
              >Check the latest COVID-19 restrictions before you travel.
              <span class="text-blue">Learn more</span>
            </P>
          </div>
        </div>

        <section class="flex justify-center">
          <div
            class="flex justify-center flex-col w-[77.5rem]"
          >
            <div class="flex flex-col mb-60">
              <div class="mt-30">
                <p class="mb-3 text-xl font-semibold">
                  Enjoy your dream vacation
                </p>
                <p class="text-base font-normal tracking-wide mb-3 w-[610px]">
                  Plan and book our perfect trip with expert advice, travel
                  tips, destination information and inspiration from us
                </p>
              </div>

              <ul class="flex justify-center gap-5">
                <li>
                  <img
                    src="src\assets\images\Australia.png"
                    alt="Australia"
                    class="w-[18.4375rem] h-[13.75rem] rounded-lg"
                  />
                  <div>
                    <p class="text-xl font-semibold">Australia</p>
                    <p>2246 properties</p>
                  </div>
                </li>
                <li>
                  <img
                    src="src\assets\images\Japan.png"
                    alt="Japan"
                    class="w-[18.4375rem] h-[13.75rem] rounded-lg"
                  />
                  <div>
                    <p class="text-xl font-semibold">Japan</p>
                    <p class="text-sm font-normal tracking-wide">
                      1278 properties
                    </p>
                  </div>
                </li>
                <li>
                  <img
                    src="src\assets\images\New Zealand.png"
                    alt="New Zealand"
                    class="w-[18.4375rem] h-[13.75rem] rounded-lg"
                  />
                  <div>
                    <p class="text-xl font-semibold">New Zealand</p>
                    <p class="text-sm font-normal tracking-wide">
                      480 properties
                    </p>
                  </div>
                </li>
                <li>
                  <img
                    src="src\assets\images\Greece.png"
                    alt="Greece"
                    class="w-[18.4375rem] h-[13.75rem] rounded-lg"
                  />
                  <div>
                    <p class="text-xl font-semibold">Greece</p>
                    <p class="text-sm font-normal tracking-wide">
                      320 properties
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="flex flex-col mb-60">
              <div class="flex flex-col">
                <p class="mb-4 text-xl font-semibold flex">
                  Get inspiration for your next trip
                </p>
              </div>

              <ul class="flex justify-center gap-5 mt-30">
                <li>
                  <img
                    src="src\assets\images\banner1.png"
                    alt="Australia"
                    class="w-[400px] h-[280px] rounded-lg"
                  />
                  <div>
                    <p class="text-xl font-semibold">Australia</p>
                    <p>2246 properties</p>
                  </div>
                </li>
                <li>
                  <img
                    src="src\assets\images\banner2.png"
                    alt="Japan"
                    class="w-[400px] h-[280px] rounded-lg"
                  />
                  <div>
                    <p class="text-xl font-semibold">Japan</p>
                    <p class="text-sm font-normal tracking-wide">
                      1278 properties
                    </p>
                  </div>
                </li>
                <li>
                  <img
                    src="src\assets\images\banner3.png"
                    alt="New Zealand"
                    class="w-[400px] h-[280px] rounded-lg"
                  />
                  <div>
                    <p class="text-xl font-semibold">New Zealand</p>
                    <p class="text-sm font-normal tracking-wide">
                      480 properties
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="flex flex-col mb-60">
              <div class="flex flex-col">
                <p class="mb-4 text-xl font-semibold w-[31.5rem]">
                  Enjoy your dream vacation
                </p>
                <p
                  class="w-[38.125rem] h-[2.75rem] text-base font-normal tracking-wide"
                >
                  Plan and book our perfect trip with expert advice, travel
                  tips, destination information and inspiration from us
                </p>
              </div>
              <ul class="flex justify-center gap-5 mt-30">
                <li>
                  <img
                    src="src\assets\images\hotel1.png"
                    alt="Australia"
                    class="w-[18.4375rem] h-[13.75rem] rounded-lg"
                  />
                  <div>
                    <p class="text-xl font-semibold">Lakeside Warefront</p>
                    <p class="text-sm font-normal tracking-wide">
                      2246 properties
                    </p>
                  </div>
                </li>
                <li>
                  <img
                    src="src\assets\images\hotel2.png"
                    alt="Japan"
                    class="w-[18.4375rem] h-[13.75rem] rounded-lg"
                  />
                  <div>
                    <p class="text-xl font-semibold">Recce Graham resort</p>
                    <p class="text-sm font-normal tracking-wide">
                      1278 properties
                    </p>
                  </div>
                </li>
                <li>
                  <img
                    src="src\assets\images\hotel3.png"
                    alt="New Zealand"
                    class="w-[18.4375rem] h-[13.75rem] rounded-lg"
                  />
                  <div>
                    <p class="text-xl font-semibold">Fireside Dinners</p>
                    <p class="text-sm font-normal tracking-wide">
                      480 properties
                    </p>
                  </div>
                </li>
                <li>
                  <img
                    src="src\assets\images\hotel4.png"
                    alt="Greece"
                    class="w-[18.4375rem] h-[13.75rem] rounded-lg"
                  />
                  <div>
                    <p class="text-xl font-semibold">Oculous Inn Stay</p>
                    <p class="text-sm font-normal tracking-wide">
                      320 properties
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="relative">
              <img
                src="src\assets\images\mob-bg.jpg "
                class="w-[1240px] h-[280px] rounded-lg"
              />
              <p
                class="text-xl font-semibold absolute z-20 w-[580px] text-white top-16 left-16"
              >
                Download the mobile application for bonus coupons and travel
                codes
              </p>

              <!--<img src="src\assets\images\mob.png" class="w-[ 719.712px] h-[515.599px] absolute z-20 top-0 right-0 bg-cover origin-center rotate--90">!-->

              <button
                class="w-[182px] h-[44px] text-white bg-blue rounded-md absolute z-20 top-44 left-16"
              >
                Download mobile app
              </button>
            </div>
          </div>
        </section>

        <div class="flex justify-center ">
            <div
          class="flex justify-center flex-col  w-[77.5rem]"
        >
          <p class="text-center text-xl font-semibold mt-20 mb-4">
            Explore the world with My Dream place
          </p>
          <p class="text-center text-base font-normal mb-20 text-blue">
            Discover new places and experiences
          </p>
        </div>
        </div>
      </main>
      <footerComp></footerComp>

    </div>

    <RouterView class="flex-1" v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import bookingForm from "@/components/bookingForm.vue";
import footerComp from "@/components/footerComp.vue"
export default {
  components: {
    Navigation,
    bookingForm,
    footerComp,
  },
};
</script>

<style lang="scss" scoped></style>
