<template>
  <!-- Main Container -->
  <div class="bg-custom-blue min-h-screen text-white flex flex-col items-center py-10 overflow-hidden">
    <!-- Logo as Home Button -->
    <a href="." class="absolute top-0 left-0 m-4">
      <img src="@/assets/logo.png" alt="Company Logo" class="h-12 md:h-16 lg:h-20">
    </a>
    <!-- Title -->
    <h1 class="font-massive text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold uppercase mt-8 font-unbounded text-shadow-default px-4 sm:px-0">Make - Mint - Monetize</h1>
    <!-- Body Text -->
    <p class="text-lg font-regular mt-4 mb-16 font-poppins text-shadow-default px-4 sm:px-0">
      All in our <span class="text-custom-yellow">simple to use</span> software | Sign up NOW for <span class="text-custom-yellow">early access</span> and discounts
    </p>
      <!-- Main Container for Guru, surrounding elements, and Email Input -->
      <div class="relative flex flex-col items-center w-full max-w-md h-80">
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
        <img src="@/assets/E-guru.gif" alt="Guru" 
          style="width: auto; height: 400px; max-width: none; max-height: none !important;" 
          class="z-20 absolute -top-10 left-1/2 ml-[-200px] mt-[-5px] md:w-[500px] lg:w-[600px] max-w-none max-h-none" />
      </div>
      <!-- Unlock Button -->
      <a href="https://forms.gle/7CX4JGRBCnnPsYZ26" target="_blank" 
       class="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-150 ml-[-75px] absolute z-50 mt-1 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img src="@/assets/unlockbutton.png" alt="Unlock" class="w-32 h-auto sm:w-18 md:w-24 lg:w-32">
      </a>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        email: '',
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
        const formUrl = 'GOOGLE_FORM_ACTION_URL';
        const formId = 'GOOGLE_FORM_EMAIL_ENTRY_ID';
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

@media (max-width: 640px) {
  .font-massive {
    font-size: 1.75rem !important;
  }
}

@media (max-width: 430px) {
  .font-massive {
    font-size: 3.25rem !important;
  }
}

@media (min-width: 641px) {
  .font-massive {
    font-size: 4rem !important;
  }
}
</style>
