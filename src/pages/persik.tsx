
import Image from 'next/image'


export default function persik () {
    return (
        
        <>
            <h1>Главное хотеть </h1>
            <Image
                src='/persik.jpg'
                alt="Picture of the author"
                 width={600}
                 height={400} 
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
            <h2>и хотелка может исполнится  АХАХАХАХАХАХАХАХ</h2>
           
        </>
    )
}
