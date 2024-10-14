
export default function Portfolio(){
    return(
        <div className="min-h-screen bg-pink-200 py-10 px-5">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-white mb-4"> My POrtfolio</h1>
                <p className=" text-1g text-black"> Welcome to the Hawa brand portfolio, where we showcase te finest in fashion design.
                    Each collection is a reflection of our dedication to craftmanship,quality materials, an timeless style. From streerwer to high fashion ,
                    Our work spans diverse styles ensuring that there's something for every individual. Whether it;s custom designs, seasonal collections, or ready-to-wear pieces, our goal is to create clothing that not only enhances your appearance
                    but also makes you feel confident and comfortable. 
                </p>
                <div className="grid-grid-cols-3 gap-8">
                    <div className="bg-green-200 rounded-2g shadow-md p-4">
                        <img  src="images/cloth012.WEBP" alt="cloth012 image" width={600} height={250} className="rounded-1g"/>
                        <h2 className="text-xl font-semibold mt-4"> project1:Dress designs for a creative company</h2>
                        <p className="text-blue-600 mt-2"> A beautiful and modern dress design for a creative company</p>

                    </div>
                <div className="bg-white rounded-md shadow-md p-4">
                    <img src="images/cloth300.JPG" alt="cloth300 image" width={500} height={500} className="rounded-1g"/>
                    <h2 className="text-xl font-semibold mt-4"> Summer Collection 2024</h2>
                    <p className="text-blue-600 mt-2"> our summer 2024 collection embraces bold color,light fabrics, and modern silhouettes,
                        each piece is crafted with sustaintable in mind,reflecting our commitment to eco-friendly
                    </p>

                </div>
                <div className="bg-yellow-200 rounded-2g shadow-md p-4">
                    <img src="images/cloth101.JFIF" alt="cloth101 image"width={700} height={250} className="rounded-1g"/>
                    <h2 className="text-xl font-semibold mt-4"> Project 3:fashion designed app UI</h2>
                    <p className="text-gray-600 mt-2"> A mondern dressing app interface designed for the youngest</p>

                </div>
                </div>

            </div>

        </div>
    )
}




