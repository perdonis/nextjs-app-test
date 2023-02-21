import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Layout({children}){
    const [topics, setTopics] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9999/topics')
            .then(res=>res.json())
            .then(result=>{
                setTopics(result);
            })
    },[])
    return <>
        <h1>
            <Link href="/">WEB</Link>
        </h1>
        <ol>
            {topics.map(e=><li key={e.id}>
                <Link href={"/read/"+e.id}>{e.title}</Link>
            </li>)}
        </ol>
        <article>
            {children}
        </article>
        <ul>
            <li><Link href="/create">Create</Link></li>
            <li><Link href="/update">Update</Link></li>
            <li><Link href="/delete">Delete</Link></li>
        </ul>
    </>
}
