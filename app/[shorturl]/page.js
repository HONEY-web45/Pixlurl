import { notFound, redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function page({params}){
const short=(await params).shorturl

    const client=await clientPromise
    const db=client.db("Pixlurl")
    const collection=db.collection("url")
    
    const doc=await collection.findOne({shorturl:short})
    console.log(doc);
    if(doc){
if ( doc.url.startsWith("https://")) {
         redirect(`${doc.url}`)
    }
    
 else {
    
    redirect(`https://${doc.url}`)
}
    }
    else{
    notFound()
    }
}
   



































































// import { redirect } from "next/navigation"
// import clientPromise from "@/lib/mongodb"


// export default async function Page({ params }) {
//     const shorturl = (await params).shorturl

//     const client = await clientPromise;
//     const db = client.db("Pixlurl")
//     const collection = db.collection("url")

//     const doc = await collection.findOne({shorturl: shorturl})
//     console.log(doc)
//     if(doc){
//          redirect(doc.url)
//     }
//     else{
//         redirect(`${process.env.NEXT_PUBLIC_HOST}`)
//     }

//     return <div>My Post: {url}</div>
//   }