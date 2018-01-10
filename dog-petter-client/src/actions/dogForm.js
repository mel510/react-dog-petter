export const updateDogFormData = dogFormData => {
  return {
    type: 'UPDATED_DATA',
    dogFormData
  }
}

export const resetDogForm = () => {
  return {
    type: 'RESET_DOG_FORM'
  }
}
