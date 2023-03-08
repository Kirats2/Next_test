import Link from "next/link";

export default function vanilka () {
    return (
        
        <>
            <h1> Что сладкий тебе ВАНИЛЬКИ захотелось ?  </h1>
            <button>
                <Link href={'/persik'}>
                    <h2> Тогда жми быстрее ! </h2>
                </Link>

            </button>
            


        </>
    )
}
