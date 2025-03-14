<template>
    <div class="px-8 relative" >
        <h1 class="text-4xl font-bold sm:mt-0 mt-10" data-aos="fade-left">Contact Me</h1>
        <div class="Form mt-20 flex flex-col gap-5 " data-aos="fade-up">
            <div class="flex gap-2 text-white z-10">
                <UFormField label="name" class="border-none outline-none w-full">
                    <UInput 
                        placeholder="Enter your email"  
                        color=""
                        class="border-2 border-[#cca73690] outline-none rounded-xl p-2 text-white"
                    />
                </UFormField>
                <UFormField label="Email" class="border-none outline-none w-full">
                    <UInput 
                        placeholder="Enter your Name"  
                        color=""
                        class="border-2 border-[#cca73685] outline-none rounded-xl p-2 text-white" 
                    />
                </UFormField>
            </div>
            <UTextarea 
                size="xl" 
                placeholder="Type something..." 
                color=""
                class="border-2 border-[#cca73690] outline-none rounded-2xl text-white z-10"
            />
            <UButton block class="bg-[#cca73685] hover:bg-[#cca636] z-10" >Send </UButton>
            <img src="../../assets/image-removebg-preview.png" class="absolute right-0 opacity-15"  alt="">
        </div>
        
    </div>

</template>