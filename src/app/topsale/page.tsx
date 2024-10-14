
export default function Topsale(){
    return(
        <div className="min-h-screen bg-pink-200 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-blue-400 mb-6">Top-selling Clothing Items</h1>
                    <p className="text-1g text-black"> Discover the top-selling pieces from our latest collection, loved by our customers for
                        their quality, style, and versatility.Get your hands on these hot picks before they're gone!
                    </p>

                </div> 
               <div className="grid grid-cols-1 sm:grid-cols-2 1g:grid-cols-4 gap-8">
                <img src="images/cloth777.JPG" alt="cloth777 image" width={800} height={800} className="rounded-1g"/>
                <h1 className="text-xl font-semibold mt-4 text-blue-900"> Summer Dress</h1>
               <p className="text-blue-600  mt-2"> Elegant and lightweight, perfect for summer days.</p>

               </div>
               <div className="bg-yellow-100 rounded-lg shadow--1g p-4">
                <img src="images/cloth5555.WEBP" alt="cloth5555 image" width={800} height={800} className="rounded-1g"/>
                <h2 className="text-xl font-semibold mt-4 text-blue-700"> Casual Dress</h2>
                <p className="text-blue-700 mt-2"> A must-have casual dress for any wardrobe</p>

               </div>
               <div className="bg-blue-200 rounded-1g shadow-1g p-4">
                <img src="images/cloth8999.JPG" alt="cloth8999 image" width={800} height={800} className="rounded-1g"/>
                <h2 className="text-xl font-semibold mt-4 text-blue-600">loose shirt</h2>
                <p className="text-blue-500 mt-2"> A versatile shirt that goes with anything</p>

               </div>
               <div className="bg-white rounded-lg shadow-lg p-4">
                <img src="images/cloth8777.JPG" alt="cloth8777 image" width={800} height={800} className="rounded-1g"/>
                <h2 className="text-xl font-semibold mt-4 text-gray-900 "> Stylish dresses</h2>
                <p className="text-blue-800 mt-2"> Comfort meets fashion in these best-selling sneakers</p>

               </div>
            </div>
</div>
    )
}

    
