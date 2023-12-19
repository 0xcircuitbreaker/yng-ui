<template>
  <div class="flex flex-col h-screen overflow-hidden bg-custom-blue">
    <div class="flex flex-col flex-grow overflow-auto text-white py-10 items-center mb-4 sm:mb-0">
      <div class="flex flex-col items-center"> 
    <!-- Logo as Home Button -->
    <a href="." class="self-start m-4">
        <img src="@/assets/logo.png" alt="Company Logo" class="h-12 md:h-16 lg:h-20">
      </a>
    <h1 class="font-massive text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold uppercase mt-8 font-unbounded text-shadow-default px-4 sm:px-0">Make - Mint - Monetize</h1>
      <p class="text-lg font-regular mt-4 mb-16 font-poppins text-shadow-default px-4 sm:px-0">
        All in our <span class="text-custom-yellow">simple to use</span> software | Sign up NOW for <span class="text-custom-yellow">early access</span> and discounts
      </p>
      <div class="relative w-full max-w-md h-80 flex justify-center items-center">
        <!-- Images behind Sun Circle -->
        <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center z-0">
          <img src="@/assets/lshot.png" alt="L shot" class="h-full object-cover absolute left-0 transform -translate-x-[50%]">
          <img src="@/assets/rshot.png" alt="R shot" class="h-full object-cover absolute right-0 transform translate-x-[50%]">
        </div>
        <!-- Sun Circle -->
        <div class="bg-custom-yellow rounded-full absolute z-10 mb-7 shadow-custom-dark circle-size circle-position"></div>
          <!-- Guru Image -->
        <img src="@/assets/E-guru.gif" alt="Guru" 
          style="width: auto; height: 400px; max-width: none; max-height: none !important;" 
          class="z-20 absolute guru-position w-[300px] md:w-[300px] lg:w-[300px] max-w-none max-h-none" /> 
          <!-- Unlock Button -->
        <a href="https://forms.gle/7CX4JGRBCnnPsYZ26" target="_blank" 
          class="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-150 absolute z-50 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="@/assets/unlockbutton.png" alt="Unlock" class="w-32 h-auto sm:w-18 md:w-24 lg:w-32">
        </a>
      </div>
      </div>
       <!-- Download Buttons -->
       <div class="flex flex-col items-center">
       <div class="flex flex-col items-center mt-16">
          <a href="/YNG Litepaper Official.pdf" class="bg-custom-yellow hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer text-custom-black font-unbounded text-lg py-2 px-4 rounded shadow-custom-dark mb-4">
            YNG Litepaper
          </a>
          <a href="/YNG Road Map 2024.pdf" class="bg-custom-yellow hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer text-custom-black font-unbounded text-lg py-2 px-4 rounded shadow-custom-dark">
            YNG Road Map 2024
          </a>
        </div>
        </div>
      </div>
<footer class="w-full bg-custom-black px-4 sm:px-6 lg:px-8 mt-auto pt-4 sm:pt-0">
  <div class="flex flex-col sm:flex-row justify-between items-center py-4">
    <div class="bg-custom-yellow p-4 flex space-x-4 rounded-lg mb-4 sm:mb-0 sm:order-2">
    <!-- X -->
    <a href="https://x.com/YourNFTGurus" target="_blank" aria-label="X formerly Twitter" class="hover:opacity-75 active:opacity-50 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-150 transform transition-opacity">
      <img src="@/assets/x.svg" alt="X icon" class="h-6 w-6 text-custom-black">
    </a>
    <!-- Reddit -->
    <a href="https://www.reddit.com/r/YourNFTGuru/" target="_blank" aria-label="Reddit subreddit" class="hover:opacity-75 active:opacity-50 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-150 transform transition-opacity">
      <img src="@/assets/reddit.svg" alt="Reddit icon" class="h-6 w-6 text-custom-black">
    </a>
    <!-- Telegram -->
    <a href="https://t.me/yourNFTguru" target="_blank" aria-label="Telegram" class="hover:opacity-75 active:opacity-50 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-150 transform transition-opacity">
      <img src="@/assets/telegram.svg" alt="Telegram icon" class="h-6 w-6 text-custom-black">
    </a>
    </div>
    <div class="bg-custom-yellow p-4 rounded-lg font-unbounded text-xs xs:text-base">
      <p class="text-custom-black">&copy; 2023 YourNFTGuru LLC</p>
      <p class="text-custom-black">State of Delaware</p>
      <a href="/YNG Privacy Policy.pdf" class="text-custom-black">
        Privacy Policy
      </a>
    </div>
  </div>
 </footer>
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
          return;
        }
        if (!this.isValidEmail(this.email)) {
          alert("Please enter a valid email address.");
          return;
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
            console.log('Email submitted to Google Forms');
            this.email = '';
          } else {
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

.circle-size {
    width: 18rem;
    height: 18rem;
  }

  @media (max-width: 639px) {
    .circle-size {
      width: 16rem;
      height: 16rem;
    }
  }

  @media (max-width: 399px) {
    .circle-size {
      width: 14rem;
      height: 14rem;
    }
  }

  .circle-position {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .guru-position {
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 399px) {
    .circle-position {
      top: 45%;
    }

    .guru-position {
      top: -5px;
    }
  }
</style>
