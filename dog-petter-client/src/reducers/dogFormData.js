export default (state = {
  name: '',
  location: '',
  image_url: '',
  date: '',
  breed: ''
}, action) => {

   switch(action.type) => {
     case 'UPDATED_DATA':
       return action.dogFormData

     default:
       return state;
   }

}
