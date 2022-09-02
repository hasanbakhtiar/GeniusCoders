
// Reducer Start

const blogState = [];
export const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
        return [...state, action.blog]
    case "REMOVE_BLOG":
        return state.filter(({id})=>{
            return id != action.id
        })
    case "EDIT_BLOG":
        return state.map((b)=>{
          if (b.id == action.id) {
            return{
              ...b,
              ...action.update
            }
          }
        })
    default:
      return state;
  }
};
// Reducer End
