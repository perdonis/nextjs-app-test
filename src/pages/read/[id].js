import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { useEffect, useState } from 'react';
export default function Home() {
    const router = useRouter();
    const [topic, setTopic] = useState(null);
    useEffect(()=>{
        console.log(1, router.query.id);
        if(router.query.id !== undefined){
            console.log(2, router.query.id);
            fetch('http://localhost:9999/topics/'+router.query.id)
                .then(res=>res.json())
                .then(result=>{
                    console.log('result', result);
                    setTopic(result);
                })
        }
    },[router.query.id]);
    console.log('topic', topic);
    return (
        <>
            <h2>Read</h2>
            Hello, Read {router.query.id}
        </>
    )
}
