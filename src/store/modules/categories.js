import categoriesApi from '@/api/categories'

const state = {
    data: null,
    activeCategories: [],
    isLoading: false,
    error: null,
    isCheckCategory: false
}

export const mutationTypes = {
    getCategoriesStart: '[categories] Get categories start',
    getCategoriesSuccess: '[categories] Get categories success',
    getCategoriesFailure: '[categories] Get categories failure',
    getActiveCategories: '[categories] Get active categories',
    getCheckCategories: '[categories] Get check active categories',
}

export const actionTypes = {
    getCategories: '[categories] Get Categories'
}

const mutations = {
    [mutationTypes.getCategoriesStart](state) {
        state.isLoading = true
        state.data = null
    },
    [mutationTypes.getCategoriesSuccess](state, payload) {
        state.isLoading = false
        state.data = payload
    },
    [mutationTypes.getCategoriesFailure](state) {
        state.isLoading = false
    },
    [mutationTypes.getActiveCategories](state, {id}) {
        if(state.activeCategories.includes(id)) {
            state.activeCategories = state.activeCategories.filter(el => el !== id)
        } else {
            state.activeCategories.push(id)
        }
    }
}
const actions = {
    [actionTypes.getCategories](context, {apiUrl}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getCategoriesStart, apiUrl)
            categoriesApi
                .getCategories(apiUrl)
                .then(response => {
                    context.commit(mutationTypes.getCategoriesSuccess, response.data.data.list)
                    context.commit(mutationTypes.getActiveCategories, { id: response.data.data.list[0].id })
                    resolve(response.data.data.list)
                })
                .catch(() => {
                    context.commit(mutationTypes.getCategoriesFailure)
                })
        })
    }
}

export default {
    state,
    actions,
    mutations
}