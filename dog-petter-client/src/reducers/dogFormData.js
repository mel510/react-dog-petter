const initialState= {
  name: '',
  location: '',
  image_url: '',
  date: '',
  breed: ''
}

export default (state = initialState, action) => {

    switch(action.type) {
      case 'UPDATED_DATA':
        return action.dogFormData

      case 'RESET_DOG_FORM':
        return initialState;

      default:
        return state;
   }

}
