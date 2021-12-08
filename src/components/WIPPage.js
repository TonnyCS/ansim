/* This example requires Tailwind CSS v2.0+ */
function WIPPage() {
    return (
        <div class="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div class="max-w-md mx-auto">
                        <div>
                            <p class="text-xl text-gray-700">
                                Anthony Šimek - Personal website
                            </p>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <p>This project is currently in progress</p>
                                <p>Check back later to see if I had enough time to do something about it. 💙</p>
                            </div>
                            <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                <p>Want to see other projects that I'm working on?</p>
                                <p>
                                    <a href="https://github.com/TonnyCS" class="text-cyan-600 hover:text-cyan-700"> GitHub &rarr; </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        );
    };
    
    export default WIPPage;