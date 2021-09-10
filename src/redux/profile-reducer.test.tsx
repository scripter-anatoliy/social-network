import profileReducer, {addPostActionCreator, deletePost, ProfilePageType} from "./profile-reducer";

let state: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi i am Anatoliy', liked: 33},
        {id: 2, message: "What's new", liked: 21}
    ],
    profile: null,
    status: ""
}

it('length of post should increase', () => {
    // 1. Test data
    let action = addPostActionCreator('it-kamasutra')

// 2. action
    let newState = profileReducer(state, action)
// 3. Expectation
    expect(newState.posts.length).toBe(3)
})
it('message of new post should be correct', () => {
    let action = addPostActionCreator('it-kamasutra')
    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe('it-kamasutra')
})
it('length of the message array should decrease', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})
it(`after deleting length should'nt be decrement if ig is incorrect`, () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})