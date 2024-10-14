
export default function Contact(){
    return(
        
 <div className="min-h-screen bg-blue-50  flex flex-col items-center py-10 px-6">
            <div className="w-full max-w-4xl bg-pink-200 rounded-1g shadow-1g p-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4"> Contact Us</h1>
                    <p className="text-1g text-black"> Got a question about our products, shipping, or need help with an order? We's here to help!
                        Reach out to us via the form below or give us a call.</p>
                    
                    </div>
                    <div className="grid grid-cols-1 md:grid-col-2 gap-8">
                        <div className="flex flex-col justify-center items-center">
                            <img src="images/cloth500.JPG"alt="cloth500 image" width={600} height={300} className="rounded-2g shadow-md"/>

                        </div>
                     <div>
                        <form
                        className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                                <input type="text"
                                id="name"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                                placeholder="Your name"/>

                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                                <input 
                                type="email"
                                id="email"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500" placeholder="Your email"/>

                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                                <textarea
                                id="message"
                                rows={4}
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadoe-sm focus:border-blue-500" placeholder="Now can we help?"></textarea>
                            </div>
                            <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3  px-4 rounded-md hover:bg-blue-700"> Send Message</button>
                        </form>
                     </div>
                    </div>

                </div>
            </div>
        

        
    )
}


    
