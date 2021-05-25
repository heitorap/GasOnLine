import Axios from 'axios';

 const posto = {
     All() {
         return Axios({
             method: 'GET',
             url:'http://localhost/posto/preco/cidade/1'
         })
     }
 }

 export default posto;