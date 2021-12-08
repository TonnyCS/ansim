import ButtonMailto from "./ButtonMailTo";

/* This example requires Tailwind CSS v2.0+ */
function WIP_Page() {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                        Anthony Šimek portfolio web
                    </h2>
                    <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Welcome!
                    </p>
                    <p className="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Unfortunately, this website is currently work-in-progress. Check back later!
                    </p>
                    <p className="mt-2 text-xl text-gray-500 lg:mx-auto">
                        For urgent inquiries, send an email to: <ButtonMailto label="simekantoninsecond@gmail.com" mailto="mailto:simekantoninsecond@gmail.com" />
                    </p>
                </div>
            </div>
        </div>
        
        );
    };
    
export default WIP_Page;