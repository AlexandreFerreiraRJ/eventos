import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyContactType = {
    id: null,
    name: null,
    code: null,
}

const __emptyPersonInstitution = {
    person_id: null,
    role_id: null,
    institution_id: null,
    advised_id: null,
    title: null,
    is_active: false,
}

const __emptyModel = {
    contact: null,
    contact_type_id: null,
    person_institution_id: null,
    is_active: false,

    contactType: __emptyContactType,
    personInstitution: __emptyContactType,
}

const state = merge_objects(statesMixin.common, {
    person: { id: null },

    service: {
        name: 'contacts',
        uri:
            'people/{people.selected.id}/person-institutions/{personInstitutions.selected.id}/contacts',
        isForm: true,
    },

    form: new Form(clone(__emptyModel)),
    emptyForm: clone(__emptyModel),
})

const actions = merge_objects(actionsMixin, {
    setPersonInstitution(context, payload) {
        context.commit('mutateSetPersonInstitution', payload)

        context.commit('mutateSetFormField', {
            field: 'person_institution_id',
            value: payload.id,
        })

        context.commit('mutateSetSelected', __emptyModel)

        context.dispatch('load', payload)
    },
})

const mutations = merge_objects(mutationsMixin, {
    mutateSetPersonInstitution(state, payload) {
        state.personInstitution = payload
    },
})

let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
