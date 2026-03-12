function Login() {
    return (
        <section id="section-seven" className="scroll-animate">
            <div className="w-full bg-black flex justify-center px-[100px] py-[50px]">

                {/* FORM ONLY - NO IMAGE */}
                <div className="w-full max-w-xl bg-[#F8F9FA] flex justify-center items-center p-6 rounded-lg">
                    <form
                        target="form-target"
                        id="contact-form"
                        action="https://formspree.io/f/xyznlwoq"
                        method="POST"
                        className="w-full flex flex-col gap-4 p-10"
                    >
                        <input
                            type="text"
                            placeholder="Your Name"
                            id="nme"
                            name="Name"
                            className="w-full p-3 text-sm border border-gray-300 rounded-md focus:border-black"
                        />

                        <p className="msg1 text-red-500 text-sm"></p>

                        <input
                            type="email"
                            placeholder="Your Email"
                            id="eml"
                            name="Email"
                            className="w-full p-3 text-sm border border-gray-300 rounded-md focus:border-black"
                        />

                        <p className="msg2 text-red-500 text-sm"></p>

                        <input
                            type="text"
                            placeholder="Subject"
                            id="subject"
                            name="Subject"
                            className="w-full p-3 text-sm border border-gray-300 rounded-md focus:border-black"
                        />

                        <p className="msg3 text-red-500 text-sm"></p>

                        <textarea
                            name="textarea"
                            id="txtarea"
                            placeholder="Message"
                            rows="6"
                            className="w-full p-3 text-sm border border-gray-300 rounded-md resize-none focus:border-black"
                        ></textarea>

                        <p className="msg4 text-red-500 text-sm"></p>

                        <button className="w-2/5 py-4 font-medium bg-[#E6A730] rounded-full hover:bg-[#FFBD39] transition">
                            SEND MESSAGE
                        </button>

                        <p className="submit-msg text-green-600 text-sm"></p>
                    </form>

                    <iframe
                        name="form-target"
                        id="form-target"
                        className="hidden"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Login;