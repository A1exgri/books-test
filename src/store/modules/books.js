import booksApi from '@/api/books'

const state = {
    data: null,
    isLoading: false,
    error: null
}

export const mutationTypes = {
    getBooksStart: '[books] Get books start',
    getBooksSuccess: '[books] Get books success',
    getBooksFailure: '[books] Get books failure'
}

export const actionTypes = {
    getBooks: '[books] Get Books'
}

const mutations = {
    [mutationTypes.getBooksStart](state, params) {
        state.isLoading = true
        if(params.page === 1) state.data = null
    },
    [mutationTypes.getBooksSuccess](state, payload) {
        state.isLoading = false
        state.data = payload
    },
    [mutationTypes.getBooksFailure](state) {
        state.isLoading = false
    }
}
const actions = {
    [actionTypes.getBooks](context, { apiUrl, params }) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getBooksStart, {apiUrl, params})
            booksApi
                .getBooks(apiUrl, params)
                .then(response => {
                    let data = response.data.data.list
                    if(params.page > 1) {
                        data = state.data.concat(response.data.data.list)
                    }
                    context.commit(mutationTypes.getBooksSuccess, data)

                    setTimeout(() => resolve(data), 300)
                })
                .catch(() => {
                    context.commit(mutationTypes.getBooksFailure)
                })
        })
    }
}

export default {
    state,
    actions,
    mutations
}