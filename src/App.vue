<template>
  <div class="bg-custom-blue min-h-screen text-white flex flex-col items-center py-10">
    <!-- Logo as Home Button -->
    <a href="." class="absolute top-0 left-0 m-4">
      <img src="@/assets/logo.png" alt="Company Logo" class="h-12 md:h-16 lg:h-20">
    </a>
    <!-- Title -->
    <h1 class="font-massive font-semibold uppercase mt-8 font-unbounded text-shadow-default">Make - Mint - Monetize</h1>

    <!-- Body Text -->
    <p class="text-lg font-regular mt-4 mb-16 font-poppins text-shadow-default">
      All in our <span class="text-custom-yellow">simple to use</span> software | Sign up NOW for <span class="text-custom-yellow">early access</span> and discounts
    </p>

     <!-- Main Container for Guru, surrounding elements, and Email Input -->
     <div class="relative flex flex-col items-center w-96 h-80">
      <!-- Container for Sun Circle, L shot, R shot, Guru Image, and Unlock button -->
      <div class="absolute z-10 w-72 h-72">

        <!-- Images behind Sun Circle -->
        <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center z-0">
          <img src="@/assets/lshot.png" alt="L shot" class="h-full object-cover absolute left-0 transform -translate-x-[60%]">
          <img src="@/assets/rshot.png" alt="R shot" class="h-full object-cover absolute right-0 transform translate-x-[60%]">
        </div>
        <!-- Sun Circle -->
        <div class="bg-custom-yellow w-full h-full rounded-full absolute z-10 shadow-custom-dark"></div>
        <!-- Guru Image -->
        <img src="@/assets/guru.png" alt="Guru" class="z-20 absolute -top-10 left-0 w-full h-auto" />

        <!-- Unlock Button
        <img src="@/assets/unlockbutton.png" alt="Unlock" class="z-30 w-24 h-24 absolute bottom-6 left-4" /> -->
      </div>

      <!-- Email Input Field -->
      <input type="email" placeholder="Enter E-mail Here - Let the Guru guide you" 
        @keyup.enter="submitToGoogleForms" v-model="email" 
        class="absolute bg-white p-2 mb-2 rounded bottom-0 z-50 focus:outline-none focus:ring-2 focus:ring-custom-yellow w-11/12 left-1/2 transform -translate-x-1/2 text-black">

      <!-- Unlock Button -->
      <img src="@/assets/unlockbutton.png" alt="Unlock" @click="submitToGoogleForms" 
        class="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-150 absolute z-50 h-12 mb-7 bottom-0 left-1 pl-3 transform -translate-x-11/12 -translate-y-1/2">
    </div>
  </div>
</template>

    <!-- Google Form Embed -->
    <!-- <div class="mt-10 w-full max-w-xl">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfCA7BTIg3waKOa9TTBFWxROA0F4ISts-4WFvnhZK5AhwfFrA/viewform?embedded=true" width="100%" height="551" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div> -->


    <script>
    export default {
      name: 'App',
      data() {
        return {
          email: '', // This will bind email input
        };
      },
      methods: {
        isValidEmail(email) {
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(email);
        },
        async submitToGoogleForms() {
          if (this.email === '') {
            alert("Please enter your email.");
            return; // Stop the method if the email is empty
          }
          if (!this.isValidEmail(this.email)) {
            alert("Please enter a valid email address.");
            return; // Stop the method if the email is not valid
          }
          const formUrl = 'YOUR_GOOGLE_FORM_ACTION_URL'; // Replace with form action URL
          const formId = 'YOUR_GOOGLE_FORM_EMAIL_ENTRY_ID'; // Replace with form email entry ID

          const formData = new FormData();
          formData.append(`entry.${formId}`, this.email);

          try {
            const response = await fetch(formUrl, {
              method: 'POST',
              body: formData,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            });

            if (response.ok) {
              // Handle the successful submission here
              console.log('Email submitted to Google Forms');
              // Optionally, clear the input field
              this.email = '';
            } else {
              // Handle errors here
              console.error('Submission failed', response.status);
            }
          } catch (error) {
            console.error('An error occurred while submitting the form', error);
          }
        }
      }
    }
    </script>

<style>
@font-face {
  font-family: 'Unbounded';
  src: url('@/assets/fonts/Unbounded-SemiBold.ttf');
  font-weight: 600;
}

@font-face {
  font-family: 'Poppins';
  src: url('@/assets/fonts/Poppins-Regular.ttf');
  font-weight: 400;
}

.font-massive {
  font-size: 4rem !important;
}
</style>
