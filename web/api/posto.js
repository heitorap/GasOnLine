import Axios from 'axios';

 const posto = {
     All() {
         return Axios({
             method: 'GET',
             url:'http://localhost/posto/'
         })
     }
 }

 export default posto;