export const addCounter = (count) => (dispatch) => {
  count++;
  dispatch({
    type:'@counter/addCounter',
    payload: count
  })
}

export const decCounter = (count) => (dispatch) => {
  if (count > 0) {
    count--;
  }
  dispatch({
    type:'@counter/decCounter',
    payload: count
  })
}