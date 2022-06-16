import {useRouter} from  'next/router';



const CoffeeStore = () => {
    const router = useRouter();
    return <div>Coffee store Page{router.query.id}</div>
}


export default CoffeeStore;